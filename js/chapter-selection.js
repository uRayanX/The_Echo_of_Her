// ChapterSelection Component - Interactive interface for navigating story branches
class ChapterSelection {
    constructor(gameInstance) {
        this.game = gameInstance;
        this.container = null;
        this.chapterStructure = [];
        this.visitedScenes = new Set();
        this.currentSceneId = null;
        this.completionPercentage = 0;
        
        // Bind methods
        this.init = this.init.bind(this);
        this.buildChapterStructure = this.buildChapterStructure.bind(this);
        this.renderChapterSelection = this.renderChapterSelection.bind(this);
        this.handleSceneSelection = this.handleSceneSelection.bind(this);
    }

    // Initialize chapter selection
    async init(params = {}) {
        console.log('ChapterSelection initializing...');
        
        this.container = document.getElementById('chapter-selection-container');
        if (!this.container) {
            console.error('Chapter selection container not found');
            return;
        }

        // Load game progress data
        this.loadProgressData();
        
        // Build chapter structure
        this.buildChapterStructure();
        
        // Render the interface
        this.renderChapterSelection();
        
        // Set up event listeners
        this.setupEventListeners();
        
        console.log('ChapterSelection initialized');
    }

    // Load progress data from save file
    loadProgressData() {
        try {
            const saveData = localStorage.getItem('echo-of-her-save');
            if (saveData) {
                const data = JSON.parse(saveData);
                this.visitedScenes = new Set(data.visitedScenes || []);
                this.currentSceneId = data.currentScene;
                this.calculateCompletionPercentage();
            }
        } catch (e) {
            console.warn('Could not load progress data:', e);
        }
    }

    // Calculate completion percentage
    calculateCompletionPercentage() {
        const totalScenes = this.getTotalSceneCount();
        this.completionPercentage = Math.round((this.visitedScenes.size / totalScenes) * 100);
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

    // Build chapter structure from story data
    buildChapterStructure() {
        this.chapterStructure = [
            {
                id: 'opening',
                title: 'Opening',
                type: 'opening',
                description: 'The tragic beginning',
                scenes: this.getOpeningScenes(),
                themeClass: 'chapter-neutral'
            },
            {
                id: 'branch1',
                title: 'Branch 1: Horror Mystery',
                type: 'horror',
                description: 'The supernatural path',
                scenes: this.getBranch1Scenes(),
                themeClass: 'chapter-horror'
            },
            {
                id: 'branch2',
                title: 'Branch 2: Crime Mystery',
                type: 'crime',
                description: 'The investigation path',
                scenes: this.getBranch2Scenes(),
                themeClass: 'chapter-crime'
            },
            {
                id: 'sub_branches',
                title: 'Sub-Branches',
                type: 'resolution',
                description: 'The deeper truths',
                scenes: this.getSubBranchScenes(),
                themeClass: 'chapter-resolution'
            }
        ];
    }

    // Get opening scenes
    getOpeningScenes() {
        const openingBranch = STORY_DATA.opening;
        if (!openingBranch || !openingBranch.scenes) return [];
        
        return openingBranch.scenes.slice(0, 10).map(scene => ({
            id: scene.id,
            title: scene.title,
            timestamp: scene.timestamp,
            isVisited: this.visitedScenes.has(scene.id),
            isCurrent: scene.id === this.currentSceneId,
            isLocked: false // Opening scenes are never locked
        }));
    }

    // Get Branch 1 scenes
    getBranch1Scenes() {
        const branch1 = STORY_DATA.branch1;
        if (!branch1 || !branch1.scenes) return [];
        
        return branch1.scenes.slice(0, 8).map(scene => ({
            id: scene.id,
            title: scene.title,
            timestamp: scene.timestamp,
            isVisited: this.visitedScenes.has(scene.id),
            isCurrent: scene.id === this.currentSceneId,
            isLocked: !this.isSceneAccessible(scene.id)
        }));
    }

    // Get Branch 2 scenes
    getBranch2Scenes() {
        const branch2 = STORY_DATA.branch2;
        if (!branch2 || !branch2.scenes) return [];
        
        return branch2.scenes.slice(0, 8).map(scene => ({
            id: scene.id,
            title: scene.title,
            timestamp: scene.timestamp,
            isVisited: this.visitedScenes.has(scene.id),
            isCurrent: scene.id === this.currentSceneId,
            isLocked: !this.isSceneAccessible(scene.id)
        }));
    }

    // Get sub-branch scenes
    getSubBranchScenes() {
        const subBranches = [];
        
        // Add sub-branch scenes from story data
        for (const branchKey in STORY_DATA) {
            if (branchKey.startsWith('sub_branch')) {
                const branch = STORY_DATA[branchKey];
                if (branch && branch.scenes) {
                    branch.scenes.slice(0, 4).forEach(scene => {
                        subBranches.push({
                            id: scene.id,
                            title: scene.title,
                            timestamp: scene.timestamp,
                            isVisited: this.visitedScenes.has(scene.id),
                            isCurrent: scene.id === this.currentSceneId,
                            isLocked: !this.isSceneAccessible(scene.id)
                        });
                    });
                }
            }
        }
        
        return subBranches;
    }

    // Check if scene is accessible based on story progression
    isSceneAccessible(sceneId) {
        // Opening scenes are always accessible
        if (sceneId.startsWith('scene_')) return true;
        
        // Choice point is accessible if previous scenes are visited
        if (sceneId === 'choice_point_001') {
            return this.visitedScenes.has('scene_031');
        }
        
        // Branch scenes are accessible if choice point is visited
        if (sceneId.startsWith('branch1_') || sceneId.startsWith('branch2_')) {
            return this.visitedScenes.has('choice_point_001');
        }
        
        // Sub-branch scenes require their parent branch to be visited
        if (sceneId.startsWith('sub_branch')) {
            const parentBranch = sceneId.includes('1_') ? 'branch1_020' : 'branch2_020';
            return this.visitedScenes.has(parentBranch);
        }
        
        return this.visitedScenes.has(sceneId);
    }

    // Render the chapter selection interface
    renderChapterSelection() {
        this.container.innerHTML = `
            <div class="chapter-selection-content">
                <header class="chapter-selection-header">
                    <button class="back-btn" id="back-to-homepage">
                        <span class="back-icon">←</span>
                        Back to Homepage
                    </button>
                    <h1 class="chapter-selection-title">Chapter Selection</h1>
                    <div class="progress-info">
                        <div class="progress-bar-container">
                            <div class="progress-bar-fill" style="width: ${this.completionPercentage}%"></div>
                        </div>
                        <span class="progress-text">${this.completionPercentage}% Complete</span>
                    </div>
                </header>

                <main class="chapters-container">
                    ${this.chapterStructure.map(chapter => this.renderChapter(chapter)).join('')}
                </main>

                <footer class="chapter-selection-footer">
                    <div class="legend">
                        <div class="legend-item">
                            <span class="legend-icon completed">●</span>
                            <span>Completed</span>
                        </div>
                        <div class="legend-item">
                            <span class="legend-icon current">◐</span>
                            <span>Current</span>
                        </div>
                        <div class="legend-item">
                            <span class="legend-icon available">○</span>
                            <span>Available</span>
                        </div>
                        <div class="legend-item">
                            <span class="legend-icon locked">░</span>
                            <span>Locked</span>
                        </div>
                    </div>
                </footer>
            </div>
        `;
    }

    // Render individual chapter
    renderChapter(chapter) {
        const hasVisitedScenes = chapter.scenes.some(scene => scene.isVisited);
        const completedScenes = chapter.scenes.filter(scene => scene.isVisited).length;
        const totalScenes = chapter.scenes.length;
        const chapterProgress = totalScenes > 0 ? Math.round((completedScenes / totalScenes) * 100) : 0;

        return `
            <section class="chapter ${chapter.themeClass} ${hasVisitedScenes ? 'chapter-unlocked' : 'chapter-locked'}">
                <header class="chapter-header">
                    <h2 class="chapter-title">${chapter.title}</h2>
                    <p class="chapter-description">${chapter.description}</p>
                    <div class="chapter-progress">
                        <div class="chapter-progress-bar">
                            <div class="chapter-progress-fill" style="width: ${chapterProgress}%"></div>
                        </div>
                        <span class="chapter-progress-text">${completedScenes}/${totalScenes}</span>
                    </div>
                </header>
                
                <div class="scenes-grid">
                    ${chapter.scenes.map(scene => this.renderScene(scene)).join('')}
                </div>
            </section>
        `;
    }

    // Render individual scene
    renderScene(scene) {
        let statusClass = 'scene-locked';
        let statusIcon = '░';
        
        if (scene.isCurrent) {
            statusClass = 'scene-current';
            statusIcon = '◐';
        } else if (scene.isVisited) {
            statusClass = 'scene-completed';
            statusIcon = '●';
        } else if (!scene.isLocked) {
            statusClass = 'scene-available';
            statusIcon = '○';
        }

        return `
            <div class="scene-card ${statusClass}" data-scene-id="${scene.id}">
                <div class="scene-status">
                    <span class="scene-icon">${statusIcon}</span>
                </div>
                <div class="scene-info">
                    <h3 class="scene-title">${scene.title}</h3>
                    <p class="scene-timestamp">${this.formatTimestamp(scene.timestamp)}</p>
                </div>
                ${scene.isLocked ? '<div class="scene-lock-overlay">Locked</div>' : ''}
            </div>
        `;
    }

    // Format timestamp for display
    formatTimestamp(timestamp) {
        if (!timestamp) return '';
        
        // Extract time from timestamp if it contains time info
        const timeMatch = timestamp.match(/(\d{1,2}:\d{2})/);
        if (timeMatch) {
            return timeMatch[1];
        }
        
        // Return shortened version
        return timestamp.length > 30 ? timestamp.substring(0, 30) + '...' : timestamp;
    }

    // Set up event listeners
    setupEventListeners() {
        // Back button
        const backBtn = document.getElementById('back-to-homepage');
        if (backBtn) {
            backBtn.addEventListener('click', () => {
                this.game.navigationController.goToHomepage();
            });
        }

        // Scene selection
        const sceneCards = this.container.querySelectorAll('.scene-card');
        sceneCards.forEach(card => {
            card.addEventListener('click', this.handleSceneSelection);
        });

        // Keyboard navigation
        document.addEventListener('keydown', this.handleKeyNavigation.bind(this));
    }

    // Handle scene selection
    handleSceneSelection(event) {
        const sceneCard = event.currentTarget;
        const sceneId = sceneCard.dataset.sceneId;
        
        // Check if scene is accessible
        if (sceneCard.classList.contains('scene-locked')) {
            this.showLockedSceneMessage();
            return;
        }

        // Add click feedback
        sceneCard.classList.add('scene-clicked');
        setTimeout(() => sceneCard.classList.remove('scene-clicked'), 200);

        // Navigate to scene
        console.log(`Navigating to scene: ${sceneId}`);
        setTimeout(() => {
            this.game.navigationController.goToGame(sceneId);
        }, 300);
    }

    // Show locked scene message
    showLockedSceneMessage() {
        // Create temporary message
        const message = document.createElement('div');
        message.className = 'locked-scene-message';
        message.textContent = 'This scene is locked. Progress through the story to unlock it.';
        
        this.container.appendChild(message);
        
        setTimeout(() => {
            message.classList.add('fade-out');
            setTimeout(() => {
                if (message.parentNode) {
                    message.parentNode.removeChild(message);
                }
            }, 300);
        }, 2000);
    }

    // Handle keyboard navigation
    handleKeyNavigation(event) {
        if (this.game.navigationController.getCurrentView() !== 'chapter-selection') return;

        switch (event.key) {
            case 'Escape':
                this.game.navigationController.goToHomepage();
                break;
            case 'g':
            case 'G':
                // Go to current game
                this.game.navigationController.goToGame();
                break;
        }
    }

    // Clean up event listeners
    destroy() {
        document.removeEventListener('keydown', this.handleKeyNavigation);
    }
}

// Export for use in main game file
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ChapterSelection;
}