// Story Data Utilities - Helper functions to access story data
class StoryData {
    // Get a specific scene by ID
    static getScene(sceneId) {
        // Search through all branches for the scene
        for (const branchKey in STORY_DATA) {
            const branch = STORY_DATA[branchKey];
            if (branch.scenes) {
                const scene = branch.scenes.find(s => s.id === sceneId);
                if (scene) {
                    return scene;
                }
            }
        }
        
        console.error(`Scene not found: ${sceneId}`);
        return null;
    }

    // Get branch type for a scene
    static getBranchType(sceneId) {
        if (sceneId.startsWith('scene_') || sceneId.startsWith('choice_point_')) {
            return 'neutral';
        } else if (sceneId.startsWith('branch1') || sceneId.startsWith('sub_branch1')) {
            return 'horror';
        } else if (sceneId.startsWith('branch2') || sceneId.startsWith('sub_branch2')) {
            return 'crime';
        } else if (sceneId.startsWith('ending')) {
            return 'resolution';
        }
        return 'neutral';
    }

    // Get all scenes in a branch
    static getBranchScenes(branchId) {
        const branch = STORY_DATA[branchId];
        return branch ? branch.scenes : [];
    }

    // Get total scene count
    static getTotalSceneCount() {
        let total = 0;
        for (const branchKey in STORY_DATA) {
            const branch = STORY_DATA[branchKey];
            if (branch.scenes) {
                total += branch.scenes.length;
            }
        }
        return total;
    }

    // Get all available branches
    static getAllBranches() {
        return Object.keys(STORY_DATA);
    }

    // Get scenes by type (choice points, regular scenes, etc.)
    static getScenesByType(type) {
        const scenes = [];
        for (const branchKey in STORY_DATA) {
            const branch = STORY_DATA[branchKey];
            if (branch.scenes) {
                branch.scenes.forEach(scene => {
                    if (type === 'choice' && scene.isChoicePoint) {
                        scenes.push(scene);
                    } else if (type === 'regular' && !scene.isChoicePoint) {
                        scenes.push(scene);
                    } else if (type === 'all') {
                        scenes.push(scene);
                    }
                });
            }
        }
        return scenes;
    }

    // Get next scene ID from choices
    static getNextSceneId(currentSceneId, choiceId) {
        const scene = this.getScene(currentSceneId);
        if (!scene || !scene.choices) {
            return null;
        }

        const choice = scene.choices.find(c => c.id === choiceId);
        return choice ? choice.nextScene : null;
    }

    // Check if scene exists
    static sceneExists(sceneId) {
        return this.getScene(sceneId) !== null;
    }

    // Get scene path (which branch it belongs to)
    static getScenePath(sceneId) {
        for (const branchKey in STORY_DATA) {
            const branch = STORY_DATA[branchKey];
            if (branch.scenes) {
                const scene = branch.scenes.find(s => s.id === sceneId);
                if (scene) {
                    return {
                        branch: branchKey,
                        branchTitle: branch.title,
                        branchType: branch.type
                    };
                }
            }
        }
        return null;
    }

    // Get scenes with specific effects
    static getScenesWithEffect(effectName) {
        const scenes = [];
        for (const branchKey in STORY_DATA) {
            const branch = STORY_DATA[branchKey];
            if (branch.scenes) {
                branch.scenes.forEach(scene => {
                    if (scene.effects && scene.effects.includes(effectName)) {
                        scenes.push(scene);
                    }
                });
            }
        }
        return scenes;
    }

    // Get scenes by speaker
    static getScenesBySpeaker(speaker) {
        const scenes = [];
        for (const branchKey in STORY_DATA) {
            const branch = STORY_DATA[branchKey];
            if (branch.scenes) {
                branch.scenes.forEach(scene => {
                    if (scene.speaker === speaker) {
                        scenes.push(scene);
                    }
                });
            }
        }
        return scenes;
    }

    // Get scenes by theme intensity
    static getScenesByIntensity(intensity) {
        const scenes = [];
        for (const branchKey in STORY_DATA) {
            const branch = STORY_DATA[branchKey];
            if (branch.scenes) {
                branch.scenes.forEach(scene => {
                    if (scene.themeIntensity === intensity) {
                        scenes.push(scene);
                    }
                });
            }
        }
        return scenes;
    }

    // Validate story data integrity
    static validateStoryData() {
        const errors = [];
        const allSceneIds = new Set();
        const referencedScenes = new Set();

        // Collect all scene IDs and referenced scenes
        for (const branchKey in STORY_DATA) {
            const branch = STORY_DATA[branchKey];
            if (branch.scenes) {
                branch.scenes.forEach(scene => {
                    // Check for duplicate scene IDs
                    if (allSceneIds.has(scene.id)) {
                        errors.push(`Duplicate scene ID: ${scene.id}`);
                    }
                    allSceneIds.add(scene.id);

                    // Collect referenced scenes from choices
                    if (scene.choices) {
                        scene.choices.forEach(choice => {
                            if (choice.nextScene) {
                                referencedScenes.add(choice.nextScene);
                            }
                        });
                    }

                    // Validate required fields
                    if (!scene.title) {
                        errors.push(`Scene ${scene.id} missing title`);
                    }
                    if (!scene.content) {
                        errors.push(`Scene ${scene.id} missing content`);
                    }
                    if (!scene.speaker) {
                        errors.push(`Scene ${scene.id} missing speaker`);
                    }
                });
            }
        }

        // Check for broken references
        referencedScenes.forEach(sceneId => {
            if (sceneId !== null && !allSceneIds.has(sceneId)) {
                errors.push(`Referenced scene not found: ${sceneId}`);
            }
        });

        return {
            isValid: errors.length === 0,
            errors: errors,
            stats: {
                totalScenes: allSceneIds.size,
                totalBranches: Object.keys(STORY_DATA).length,
                referencedScenes: referencedScenes.size
            }
        };
    }

    // Debug: Print story structure
    static debugPrintStructure() {
        console.log('=== STORY DATA STRUCTURE ===');
        for (const branchKey in STORY_DATA) {
            const branch = STORY_DATA[branchKey];
            console.log(`\nBranch: ${branchKey} (${branch.title || 'No title'})`);
            console.log(`Type: ${branch.type || 'No type'}`);
            console.log(`Scenes: ${branch.scenes ? branch.scenes.length : 0}`);
            
            if (branch.scenes) {
                branch.scenes.forEach((scene, index) => {
                    const choiceCount = scene.choices ? scene.choices.length : 0;
                    const isChoice = scene.isChoicePoint ? ' [CHOICE POINT]' : '';
                    console.log(`  ${index + 1}. ${scene.id} - ${scene.title}${isChoice} (${choiceCount} choices)`);
                });
            }
        }
        console.log('=== END STRUCTURE ===');
    }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = StoryData;
}