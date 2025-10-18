// Story Engine - Handles scene loading, dialogue display, and navigation
class StoryEngine {
    constructor() {
        this.currentScene = null;
        this.currentBranch = 'opening';
        this.visitedScenes = new Set();
        this.choiceHistory = [];
        this.isAnimating = false;
    this.autoAdvanceTimeout = null;
    this.dialogueOptions = (typeof DIALOGUE_OPTIONS !== 'undefined' && DIALOGUE_OPTIONS) ? DIALOGUE_OPTIONS : {};
    this.currentDialogueMeta = null;
        
        // DOM elements
        this.storyDisplay = document.getElementById('story-display');
        this.sceneTitle = document.getElementById('scene-title');
        this.sceneTimestamp = document.getElementById('scene-timestamp');
        this.speakerName = document.getElementById('speaker-name');
        this.dialogueContent = document.getElementById('dialogue-content');
        this.choicesContainer = document.getElementById('choices-container');
        this.choiceInterface = document.getElementById('choice-interface');
        this.autoProgressBar = document.getElementById('auto-progress');
        this.autoProgressFill = document.getElementById('auto-progress-fill');
        
        // Bind methods
        this.handleChoice = this.handleChoice.bind(this);
        this.typewriterEffect = this.typewriterEffect.bind(this);
    }

    // Initialize the story engine
    init() {
        console.log('Story Engine initialized');
        this.loadScene('scene_001');
    }

    // Load and display a specific scene
    async loadScene(sceneId) {
        if (this.isAnimating) return;
        
        const scene = StoryData.getScene(sceneId);
        if (!scene) {
            console.error(`Scene not found: ${sceneId}`);
            return;
        }

        this.currentScene = scene;
        this.visitedScenes.add(sceneId);
        
        // Update branch tracking
        this.updateCurrentBranch(sceneId);
        
        // Apply visual effects based on scene
        this.applySceneEffects(scene);
        
        // Display scene content
        await this.displayScene(scene);
        
        // Update progress
        this.updateProgress();
        
        // Auto-save progress
        this.autoSave();
    }

    // Display scene content with animations
    async displayScene(scene) {
        this.isAnimating = true;
        this.cancelAutoAdvance();
        this.currentDialogueMeta = null;
        
        // Check if theme is transitioning - if so, wait for it to complete
        if (window.game && window.game.themeController && window.game.themeController.isTransitioning) {
            // Hide content during theme transition
            this.hideContentForTransition();
            
            // Wait for theme transition to complete
            await this.waitForThemeTransition();
        }
        
        // Clear previous content
        this.clearContent();
        const dialogueMeta = this.getDialogueOptionsForScene(scene);
        this.currentDialogueMeta = dialogueMeta;
        this.hideAutoProgressBar();
        
        // Set scene header
        if (this.sceneTitle) {
            this.sceneTitle.textContent = scene.title;
        } else {
            console.error('Scene title element not found');
        }
        
        if (this.sceneTimestamp) {
            this.sceneTimestamp.textContent = scene.timestamp || '';
        }
        
        // Set speaker name
        if (this.speakerName) {
            if (scene.speaker && scene.speaker !== 'NARRATOR') {
                this.speakerName.textContent = scene.speaker;
                this.speakerName.style.display = 'block';
            } else {
                this.speakerName.style.display = 'none';
            }
        } else {
            console.error('Speaker name element not found');
        }
        
        // Display dialogue content with typewriter effect if specified
        if (dialogueMeta) {
            this.renderDialoguePreface(dialogueMeta);
        } else if (scene.effects && scene.effects.includes('typewriter')) {
            await this.typewriterEffect(scene.content);
        } else {
            this.dialogueContent.innerHTML = this.formatContent(scene.content);
            this.dialogueContent.classList.add('fade-in');
        }
        
        // Display choices after content is shown
        const postDisplayDelay = scene.effects && scene.effects.includes('typewriter') ? 1000 : 500;
        setTimeout(() => {
            if (this.shouldAutoAdvance(scene)) {
                if (this.choiceInterface) {
                    this.choiceInterface.style.display = 'none';
                }
                this.scheduleAutoAdvance(scene);
            } else if (dialogueMeta) {
                this.displayDialogueOptions(scene, dialogueMeta);
            } else {
                this.displayChoices(scene.choices);
            }
            this.isAnimating = false;
        }, postDisplayDelay);
    }

    // Hide content during theme transitions
    hideContentForTransition() {
        this.dialogueContent.classList.add('content-fade-out');
        this.speakerName.classList.add('content-fade-out');
        this.sceneTitle.classList.add('content-fade-out');
        this.sceneTimestamp.classList.add('content-fade-out');
        this.choicesContainer.classList.add('content-fade-out');
    }

    // Show content after theme transitions
    showContentAfterTransition() {
        this.dialogueContent.classList.remove('content-fade-out');
        this.speakerName.classList.remove('content-fade-out');
        this.sceneTitle.classList.remove('content-fade-out');
        this.sceneTimestamp.classList.remove('content-fade-out');
        this.choicesContainer.classList.remove('content-fade-out');
        
        // Add fade-in effect
        this.dialogueContent.classList.add('content-fade-in');
        this.speakerName.classList.add('content-fade-in');
        this.sceneTitle.classList.add('content-fade-in');
        this.sceneTimestamp.classList.add('content-fade-in');
        this.choicesContainer.classList.add('content-fade-in');
    }

    // Wait for theme transition to complete
    async waitForThemeTransition() {
        return new Promise((resolve) => {
            const checkTransition = () => {
                if (window.game && window.game.themeController && !window.game.themeController.isTransitioning) {
                    // Theme transition complete, show content
                    this.showContentAfterTransition();
                    resolve();
                } else {
                    // Still transitioning, check again
                    setTimeout(checkTransition, 100);
                }
            };
            checkTransition();
        });
    }

    // Typewriter effect for dramatic text reveal
    async typewriterEffect(content) {
        const formattedContent = this.formatContent(content);
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = formattedContent;
        const text = tempDiv.textContent || tempDiv.innerText || '';
        
        this.dialogueContent.innerHTML = '';
        this.dialogueContent.style.whiteSpace = 'pre-wrap';
        
        const speed = this.getTypewriterSpeed();
        
        for (let i = 0; i <= text.length; i++) {
            this.dialogueContent.textContent = text.slice(0, i);
            await this.delay(speed);
        }
        
        // Restore formatted content after typewriter effect
        this.dialogueContent.innerHTML = formattedContent;
        this.dialogueContent.style.whiteSpace = 'normal';
    }

    // Get typewriter speed from settings
    getTypewriterSpeed() {
        const speedSetting = document.getElementById('text-speed')?.value || 3;
        const speeds = { 1: 100, 2: 75, 3: 50, 4: 25, 5: 10 };
        return speeds[speedSetting] || 50;
    }

    // Format content for display (handle paragraphs, emphasis, etc.)
    formatContent(content) {
        return content
            .split('\n\n')
            .map(paragraph => `<p>${paragraph.trim()}</p>`)
            .join('');
    }

    // Retrieve dialogue options for current scene when available
    getDialogueOptionsForScene(scene) {
        if (!scene || !scene.id) {
            return null;
        }
        const entry = this.dialogueOptions[scene.id];
        if (!entry || !Array.isArray(entry.options) || entry.options.length < 2) {
            return null;
        }
        return entry;
    }

    // Determine if a scene should auto advance without user interaction
    shouldAutoAdvance(scene) {
        if (!scene) {
            return false;
        }

        const hasBranchingChoices = Array.isArray(scene.choices)
            ? scene.choices.some(choice => choice.id !== 'continue')
            : false;
        if (hasBranchingChoices) {
            return false;
        }

        const hasDialogueOptions = !!this.getDialogueOptionsForScene(scene);
        if (hasDialogueOptions) {
            return false;
        }

        if (scene.autoAdvance === false) {
            return false;
        }

        if (scene.autoAdvance === true) {
            return true;
        }

        return true;
    }

    // Schedule automatic advance for non-dialogue, choice-free scenes
    scheduleAutoAdvance(scene) {
        this.cancelAutoAdvance();
        const delay = typeof scene.autoAdvanceDelay === 'number' ? scene.autoAdvanceDelay : 4000;
        const choices = Array.isArray(scene.choices) ? scene.choices : [];
        const continueChoice = choices.find(choice => choice.id === 'continue') || choices[0];
        if (!continueChoice || !continueChoice.nextScene) {
            console.warn(`Auto-advance skipped: no next scene for ${scene.id}`);
            return;
        }

        const fadeDuration = 400;
        this.showAutoProgressBar(delay);
        this.autoAdvanceTimeout = setTimeout(() => {
            this.applyAutoAdvanceFade();
            setTimeout(() => {
                this.isAnimating = false;
                this.loadScene(continueChoice.nextScene);
            }, fadeDuration);
        }, delay);
    }

    // Cancel any pending auto-advance timers
    cancelAutoAdvance() {
        if (this.autoAdvanceTimeout) {
            clearTimeout(this.autoAdvanceTimeout);
            this.autoAdvanceTimeout = null;
        }
        this.hideAutoProgressBar();
    }

    // Render preface text for dialogue options before choices appear
    renderDialoguePreface(dialogueMeta) {
        if (!dialogueMeta) {
            return;
        }

        this.hideAutoProgressBar();

        const fragments = [];

        if (dialogueMeta.preface) {
            fragments.push(`<p><em>${dialogueMeta.preface}</em></p>`);
        }

        fragments.push('<p class="dialogue-prompt">Choose how to respond.</p>');
        this.dialogueContent.innerHTML = fragments.join('');
        this.dialogueContent.classList.add('fade-in');
    }

    // Apply subtle fade before auto advancing to the next scene
    applyAutoAdvanceFade() {
        const elements = [
            this.dialogueContent,
            this.speakerName,
            this.sceneTitle,
            this.sceneTimestamp
        ];
        elements.forEach(el => {
            if (el) {
                el.classList.add('content-fade-out');
            }
        });
    }

    // Display auto-advance progress indicator
    showAutoProgressBar(duration) {
        if (!this.autoProgressBar || !this.autoProgressFill) {
            return;
        }

        this.autoProgressFill.style.transition = 'none';
        this.autoProgressFill.style.width = '0%';
        void this.autoProgressFill.offsetWidth;

        if (this.choiceInterface) {
            this.choiceInterface.style.display = 'block';
        }

        this.autoProgressBar.classList.add('visible');
        this.autoProgressFill.style.transition = `width ${duration}ms linear`;
        requestAnimationFrame(() => {
            this.autoProgressFill.style.width = '100%';
        });
    }

    // Hide auto-advance progress indicator
    hideAutoProgressBar() {
        if (!this.autoProgressBar || !this.autoProgressFill) {
            return;
        }

        this.autoProgressBar.classList.remove('visible');
        this.autoProgressFill.style.transition = 'none';
        this.autoProgressFill.style.width = '0%';

        if (this.choiceInterface && this.choicesContainer && this.choicesContainer.childElementCount === 0) {
            this.choiceInterface.style.display = 'none';
        }
    }

    // Present dialogue choices for a scene
    displayDialogueOptions(scene, dialogueMeta) {
        if (!scene || !dialogueMeta) {
            this.displayChoices(scene?.choices || []);
            return;
        }

        const continueTarget = StoryData.getNextSceneId(scene.id, 'continue');
        if (!continueTarget) {
            console.warn(`No continue target for dialogue scene ${scene.id}`);
            return;
        }

        const choiceData = dialogueMeta.options.map((text, index) => ({
            id: `dialogue_option_${index + 1}`,
            text,
            nextScene: continueTarget,
            choiceType: 'dialogue',
            preface: dialogueMeta.preface || '',
            choiceText: text
        }));

        this.displayChoices(choiceData, { choiceType: 'dialogue', preface: dialogueMeta.preface || '' });
    }

    // Render the selected dialogue choice onto the scene before advancing
    renderDialogueSelection(preface, choiceText) {
        this.hideAutoProgressBar();
        const fragments = [];
        if (preface) {
            fragments.push(`<p><em>${preface}</em></p>`);
        }
        if (choiceText) {
            fragments.push(`<p>${choiceText}</p>`);
        }
        this.dialogueContent.innerHTML = fragments.join('');
        this.dialogueContent.classList.add('fade-in');
    }

    // Display choices for the current scene
    displayChoices(choices = [], options = {}) {
        this.hideAutoProgressBar();
        this.choicesContainer.innerHTML = '';
        
        if (!choices || choices.length === 0) {
            this.choiceInterface.style.display = 'none';
            return;
        }
        
        this.choiceInterface.style.display = 'block';
        
        choices.forEach((choice, index) => {
            const button = document.createElement('button');
            button.className = 'choice-btn';
            button.textContent = choice.text;
            button.dataset.choiceId = choice.id;
            button.dataset.nextScene = choice.nextScene;
            const choiceType = choice.choiceType || options.choiceType || 'standard';
            button.dataset.choiceType = choiceType;
            button.dataset.choiceText = choice.choiceText || choice.text;
            if (choice.preface || options.preface) {
                button.dataset.preface = choice.preface || options.preface || '';
            }
            
            // Add special styling for continue buttons
            if (choice.id === 'continue') {
                button.classList.add('continue-btn');
            }
            if (choiceType === 'dialogue') {
                button.classList.add('dialogue-choice-btn');
            }
            
            // Add click handler
            button.addEventListener('click', this.handleChoice);
            
            // Add keyboard navigation
            button.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.handleChoice(e);
                }
            });
            
            this.choicesContainer.appendChild(button);
            
            // Animate choice appearance
            setTimeout(() => {
                button.classList.add('fade-in');
            }, index * 100);
        });
        
        // Focus first choice for keyboard navigation
        const firstChoice = this.choicesContainer.querySelector('.choice-btn');
        if (firstChoice) {
            firstChoice.focus();
        }
    }

    // Handle choice selection
    async handleChoice(event) {
        if (this.isAnimating) return;
        
        const button = event.target;
        const choiceId = button.dataset.choiceId;
        const nextSceneId = button.dataset.nextScene;
        const choiceType = button.dataset.choiceType || 'standard';
        
        // Record choice in history
        this.choiceHistory.push({
            sceneId: this.currentScene.id,
            choiceId: choiceId,
            choiceText: button.dataset.choiceText || button.textContent,
            choiceType: choiceType,
            timestamp: Date.now()
        });
        
        // Visual feedback
        button.classList.add('selected');
        
        // Disable all choices temporarily
        const allChoices = this.choicesContainer.querySelectorAll('.choice-btn');
        allChoices.forEach(btn => btn.disabled = true);

        if (choiceType === 'dialogue') {
            this.isAnimating = true;
            this.choiceInterface.style.display = 'none';
            this.renderDialogueSelection(button.dataset.preface || '', button.dataset.choiceText || button.textContent);
            setTimeout(() => {
                this.isAnimating = false;
                this.loadScene(nextSceneId);
            }, 700);
            return;
        }
        
        // Navigate to next scene after brief delay
        setTimeout(() => {
            this.loadScene(nextSceneId);
        }, 300);
    }

    // Apply visual effects based on scene properties
    applySceneEffects(scene) {
        // Remove existing effect classes
        this.storyDisplay.className = 'story-display';
        
        // Check if this is a time transition scene
        if (this.isTimeTransition(scene)) {
            this.storyDisplay.classList.add('time-transition');
        }
        
        if (scene.effects) {
            scene.effects.forEach(effect => {
                switch (effect) {
                    case 'flicker':
                        this.storyDisplay.classList.add('flicker');
                        break;
                    case 'supernatural-flicker':
                        this.storyDisplay.classList.add('supernatural-flicker');
                        break;
                    case 'ghost-text':
                        this.dialogueContent.classList.add('ghost-text');
                        break;
                    case 'blood-drip':
                        this.speakerName.classList.add('blood-drip');
                        break;
                    case 'investigation-highlight':
                        this.dialogueContent.classList.add('investigation-highlight');
                        break;
                    case 'noir-shadows':
                        this.storyDisplay.classList.add('noir-shadows');
                        break;
                    case 'text-horror':
                        this.dialogueContent.classList.add('text-horror');
                        break;
                    case 'text-crime':
                        this.dialogueContent.classList.add('text-crime');
                        break;
                }
            });
        }
    }

    // Check if scene represents a significant time transition
    isTimeTransition(scene) {
        const timeTransitionScenes = [
            'scene_004', // 2:57 AM to 3:23 AM
            'scene_007', // 3:23 AM to 8:40 AM  
            'scene_009', // March 2022 to April 2025
            'choice_point_001', // Evening progression
            'branch1_001', // 6:51 PM to 7:40 PM
            'branch2_001', // 6:51 PM to 7:40 PM
            'branch1_002', // 7:40 PM to 8:30 PM
            'branch1_003', // 8:30 PM to 10:10 PM
        ];
        
        return timeTransitionScenes.includes(scene.id);
    }

    // Update current branch tracking
    updateCurrentBranch(sceneId) {
        const branchType = StoryData.getBranchType(sceneId);
        
        if (sceneId.startsWith('branch1')) {
            this.currentBranch = 'branch1';
        } else if (sceneId.startsWith('branch2')) {
            this.currentBranch = 'branch2';
        } else if (sceneId.startsWith('sub_branch')) {
            // Keep current branch but note sub-branch
            const subBranchMatch = sceneId.match(/sub_branch(\d+)_(\d+)/);
            if (subBranchMatch) {
                this.currentSubBranch = `${subBranchMatch[1]}.${subBranchMatch[2]}`;
            }
        } else if (sceneId.startsWith('scene_')) {
            this.currentBranch = 'opening';
        }
    }

    // Update progress indicator
    updateProgress() {
        const progressFill = document.getElementById('progress-fill');
        const currentChapter = document.getElementById('current-chapter');
        const currentBranchSpan = document.getElementById('current-branch');
        
        // Calculate progress percentage
        const totalScenes = this.getTotalSceneCount();
        const visitedCount = this.visitedScenes.size;
        const progressPercent = Math.min((visitedCount / totalScenes) * 100, 100);
        
        progressFill.style.width = `${progressPercent}%`;
        
        // Update chapter info
        const chapterInfo = this.getChapterInfo();
        currentChapter.textContent = chapterInfo.chapter;
        currentBranchSpan.textContent = chapterInfo.branch;
    }

    // Get chapter information for display
    getChapterInfo() {
        const sceneId = this.currentScene?.id || '';
        
        if (sceneId.startsWith('scene_')) {
            return { chapter: 'Opening', branch: 'Main Story' };
        } else if (sceneId.startsWith('branch1')) {
            return { chapter: 'Branch 1', branch: 'Horror Mystery' };
        } else if (sceneId.startsWith('branch2')) {
            return { chapter: 'Branch 2', branch: 'Crime Mystery' };
        } else if (sceneId.startsWith('sub_branch1_1')) {
            return { chapter: 'Branch 1.1', branch: 'Suppressed Memory' };
        } else if (sceneId.startsWith('sub_branch1_2')) {
            return { chapter: 'Branch 1.2', branch: 'Vengeful Spirit' };
        } else if (sceneId.startsWith('sub_branch2_1')) {
            return { chapter: 'Branch 2.1', branch: 'Perfect Crime' };
        } else if (sceneId.startsWith('sub_branch2_2')) {
            return { chapter: 'Branch 2.2', branch: 'Suppressed Truth' };
        } else if (sceneId.startsWith('ending')) {
            return { chapter: 'Ending', branch: 'Resolution' };
        }
        
        return { chapter: 'Unknown', branch: 'Unknown' };
    }

    // Get total scene count for progress calculation
    getTotalSceneCount() {
        let total = 0;
        for (const branchKey in STORY_DATA) {
            const branch = STORY_DATA[branchKey];
            if (branch.scenes) {
                total += branch.scenes.length;
            }
        }
        return total;
    }

    // Clear content with animation
    clearContent() {
        this.dialogueContent.innerHTML = '';
        this.dialogueContent.className = 'dialogue-content';
        this.speakerName.className = 'speaker-name';
        this.choicesContainer.innerHTML = '';
    }

    // Auto-save progress
    autoSave() {
        const autoSaveEnabled = document.getElementById('auto-save')?.checked !== false;
        if (autoSaveEnabled) {
            const saveData = {
                currentScene: this.currentScene?.id,
                currentBranch: this.currentBranch,
                visitedScenes: Array.from(this.visitedScenes),
                choiceHistory: this.choiceHistory,
                timestamp: Date.now()
            };
            
            try {
                localStorage.setItem('echo-of-her-save', JSON.stringify(saveData));
            } catch (e) {
                console.warn('Could not save to localStorage:', e);
            }
        }
    }

    // Load saved progress
    loadSave() {
        try {
            const saveData = localStorage.getItem('echo-of-her-save');
            if (saveData) {
                const data = JSON.parse(saveData);
                this.currentBranch = data.currentBranch || 'opening';
                this.visitedScenes = new Set(data.visitedScenes || []);
                this.choiceHistory = data.choiceHistory || [];
                
                if (data.currentScene) {
                    this.loadScene(data.currentScene);
                    return true;
                }
            }
        } catch (e) {
            console.warn('Could not load save data:', e);
        }
        return false;
    }

    // Utility function for delays
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Get current scene data
    getCurrentScene() {
        return this.currentScene;
    }

    // Get visited scenes
    getVisitedScenes() {
        return Array.from(this.visitedScenes);
    }

    // Get choice history
    getChoiceHistory() {
        return [...this.choiceHistory];
    }

    // Check if scene is a choice point
    isChoicePoint(sceneId = null) {
        const scene = sceneId ? StoryData.getScene(sceneId) : this.currentScene;
        return scene?.isChoicePoint || false;
    }

    // Jump to specific scene (for menu navigation)
    jumpToScene(sceneId) {
        if (this.visitedScenes.has(sceneId)) {
            this.loadScene(sceneId);
        }
    }
}

// Export for use in main game file
if (typeof module !== 'undefined' && module.exports) {
    module.exports = StoryEngine;
}