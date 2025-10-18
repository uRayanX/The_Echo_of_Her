const fs = require('fs');
const path = require('path');
const vm = require('vm');

const projectRoot = path.resolve(__dirname, '..');
const markdownPath = path.join(projectRoot, 'echo_enhanced_dialogues.md');
const storyDataPath = path.join(projectRoot, 'js', 'story-data.js');
const outputPath = path.join(projectRoot, 'js', 'dialogue-options.js');

function normalizeText(text) {
    if (!text) {
        return '';
    }
    return text
        .replace(/[“”]/g, '"')
        .replace(/[‘’]/g, "'")
        .replace(/\s+/g, ' ')
        .trim();
}

function parseDialogues(markdownContent) {
    const lines = markdownContent.split(/\r?\n/);
    const dialogues = [];
    let entry = null;

    const speakerRegex = /^\*\*(.+?)\*\*\s*$/;
    const finalizeEntry = () => {
        if (!entry) {
            return;
        }
        if (entry.options.length >= 2) {
            const preface = entry.prefaceParts.join(' ').replace(/\s+/g, ' ').trim();
            dialogues.push({
                speaker: entry.speaker,
                preface: preface.length > 0 ? preface : null,
                options: entry.options.map(opt => opt.trim()),
                startLine: entry.startLine
            });
        }
        entry = null;
    };

    lines.forEach((rawLine, index) => {
        const line = rawLine.replace(/\s+$/, '');
        const trimmed = line.trim();

        if (trimmed.length === 0) {
            return;
        }

        if (/^#{1,6}\s/.test(trimmed) || /^---+$/.test(trimmed)) {
            finalizeEntry();
            return;
        }

        const speakerMatch = trimmed.match(speakerRegex);
        if (speakerMatch) {
            finalizeEntry();
            entry = {
                speaker: speakerMatch[1].trim(),
                prefaceParts: [],
                options: [],
                startLine: index + 1
            };
            return;
        }

        if (!entry) {
            return;
        }

        if (trimmed.startsWith('- **Option ')) {
            const optionText = trimmed.replace(/^- \*\*Option [A-Z]:\*\*\s*/, '');
            entry.options.push(optionText.trim());
            return;
        }

        if (trimmed.startsWith('- ')) {
            // Other bullet points - close entry to avoid mixing content
            finalizeEntry();
            return;
        }

        if (entry.options.length > 0) {
            finalizeEntry();
            return;
        }

        if (/^[\[(]/.test(trimmed)) {
            entry.prefaceParts.push(trimmed);
        }
    });

    finalizeEntry();
    return dialogues;
}

function loadStoryData(filePath) {
    const scriptContent = fs.readFileSync(filePath, 'utf8');
    const context = {};
    vm.createContext(context);
    vm.runInContext(`${scriptContent}; this.__STORY_DATA__ = STORY_DATA;`, context, {
        filename: path.basename(filePath)
    });
    return context.__STORY_DATA__;
}

function buildMapping(dialogues, storyData) {
    const mapping = {};
    const warnings = [];
    const orderedDialogues = dialogues;
    let pointer = 0;

    const branches = Object.keys(storyData);

    const getCombinedOption = (dialogue) => {
        if (!dialogue) {
            return '';
        }
        const defaultOption = dialogue.options[0] || '';
        if (dialogue.preface) {
            return `${dialogue.preface} ${defaultOption}`;
        }
        return defaultOption;
    };

    branches.forEach((branchKey) => {
        const branch = storyData[branchKey];
        if (!branch || !Array.isArray(branch.scenes)) {
            return;
        }

        branch.scenes.forEach((scene) => {
            if (!scene || scene.isChoicePoint) {
                return;
            }

            const speaker = scene.speaker;
            if (!speaker || speaker === 'NARRATOR') {
                return;
            }

            const choices = Array.isArray(scene.choices) ? scene.choices : [];
            if (choices.length === 0) {
                return;
            }

            const uniqueNextScenes = new Set(choices.map(choice => choice.nextScene).filter(Boolean));
            if (uniqueNextScenes.size > 1) {
                return;
            }

            const normalizedContent = normalizeText(scene.content);
            if (!normalizedContent) {
                return;
            }

            let matchedDialogue = null;
            for (let i = pointer; i < orderedDialogues.length; i += 1) {
                const dialogue = orderedDialogues[i];
                if (dialogue.speaker !== speaker) {
                    continue;
                }

                const combined = normalizeText(getCombinedOption(dialogue));
                if (combined === normalizedContent) {
                    matchedDialogue = dialogue;
                    pointer = i + 1;
                    break;
                }
            }

            if (!matchedDialogue) {
                for (let i = 0; i < orderedDialogues.length; i += 1) {
                    const dialogue = orderedDialogues[i];
                    if (dialogue.speaker !== speaker) {
                        continue;
                    }
                    const combined = normalizeText(getCombinedOption(dialogue));
                    if (combined === normalizedContent) {
                        matchedDialogue = dialogue;
                        pointer = Math.max(pointer, i + 1);
                        break;
                    }
                }
            }

            if (!matchedDialogue) {
                warnings.push(`No option match for scene ${scene.id} (${speaker}): ${scene.content}`);
                return;
            }

            const entry = {
                options: matchedDialogue.options.slice()
            };
            if (matchedDialogue.preface) {
                entry.preface = matchedDialogue.preface;
            }
            mapping[scene.id] = entry;
        });
    });

    return { mapping, warnings };
}

function writeOutput(mapping, destinationPath) {
    const sortedEntries = Object.entries(mapping).sort((a, b) => a[0].localeCompare(b[0]));
    const lines = [];

    lines.push('// Auto-generated dialogue options for non-branching scenes');
    lines.push('// Generated by scripts/generate-dialogue-options.js');
    lines.push('');
    lines.push('const DIALOGUE_OPTIONS = {');

    sortedEntries.forEach(([sceneId, data], index) => {
        const indent = '    ';
        lines.push(`${indent}"${sceneId}": {`);
        if (data.preface) {
            lines.push(`${indent}    "preface": ${JSON.stringify(data.preface)},`);
        }
        lines.push(`${indent}    "options": ${JSON.stringify(data.options)}`);
        lines.push(`${indent}}${index < sortedEntries.length - 1 ? ',' : ''}`);
    });

    lines.push('};');
    lines.push('');
    lines.push('if (typeof module !== "undefined" && module.exports) {');
    lines.push('    module.exports = DIALOGUE_OPTIONS;');
    lines.push('}');
    lines.push('');

    fs.writeFileSync(destinationPath, lines.join('\n'), 'utf8');
}

function main() {
    if (!fs.existsSync(markdownPath)) {
        console.error(`Markdown file not found: ${markdownPath}`);
        process.exit(1);
    }

    if (!fs.existsSync(storyDataPath)) {
        console.error(`Story data file not found: ${storyDataPath}`);
        process.exit(1);
    }

    const markdownContent = fs.readFileSync(markdownPath, 'utf8');
    const dialogues = parseDialogues(markdownContent);
    console.log(`Parsed ${dialogues.length} dialogue entries with selectable options.`);

    const storyData = loadStoryData(storyDataPath);
    const { mapping, warnings } = buildMapping(dialogues, storyData);

    const mappedCount = Object.keys(mapping).length;
    console.log(`Mapped dialogue options to ${mappedCount} scenes.`);

    if (warnings.length > 0) {
        console.warn('Warnings during mapping:');
        warnings.forEach((warning) => console.warn(`  - ${warning}`));
    }

    writeOutput(mapping, outputPath);
    console.log(`Dialogue options written to ${outputPath}`);
}

if (require.main === module) {
    main();
}
