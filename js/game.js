// Main Game Controller - Orchestrates all game systems
class EchoOfHerGame {
    constructor() {
        this.storyEngine = null;
        this.themeController = null;
        this.navigationController = null;
        this.isInitialized = false;
        this.loadingScreen = document.getElementById('loading-screen');
        this.menuOverlay = document.getElementById('menu-overlay');

        // Bind methods
        this.init = this.init.bind(this);
        this.handleMenuToggle = this.handleMenuToggle.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleSettings = this.handleSettings.bind(this);
        this.onSceneChange = this.onSceneChange.bind(this);
        this.onThemeChange = this.onThemeChange.bind(this);
    }

    // Initialize the game
    async init() {
        console.log('Initializing The Echo of Her...');

        try {
            // Show loading screen
            this.showLoadingScreen();

            // Initialize core systems
            await this.initializeSystems();

            // Set up event listeners
            this.setupEventListeners();

            // Check for saved game and determine starting view
            const hasSave = this.checkForSaveData();

            // If no URL routing is specified, determine initial view
            const currentView = this.navigationController.getCurrentView();
            if (currentView === 'homepage') {
                // Stay on homepage - will be handled by NavigationController
            } else if (currentView === 'game') {
                // Load saved game or start new game
                if (hasSave) {
                    this.storyEngine.loadSave();
                } else {
                    this.storyEngine.init();
                }
            }

            // Hide loading screen
            await this.hideLoadingScreen();

            this.isInitialized = true;
            console.log('Game initialized successfully');

        } catch (error) {
            console.error('Failed to initialize game:', error);
            this.showError('Failed to load the game. Please refresh the page.');
        }
    }

    // Initialize core game systems
    async initializeSystems() {
        // Initialize theme controller
        this.themeController = new ThemeController();
        this.themeController.init();

        // Initialize story engine
        this.storyEngine = new StoryEngine();

        // Initialize navigation controller
        this.navigationController = new NavigationController(this);
        this.navigationController.init();

        // Initialize homepage and chapter selection components
        window.homePage = new HomePage(this);
        window.chapterSelection = new ChapterSelection(this);

        // Connect systems
        this.connectSystems();

        // Small delay to ensure DOM is ready
        await this.delay(100);
    }

    // Connect story engine and theme controller
    connectSystems() {
        // Listen for theme changes
        this.themeController.onThemeChange(this.onThemeChange);

        // Override story engine's loadScene to include theme updates
        const originalLoadScene = this.storyEngine.loadScene.bind(this.storyEngine);
        this.storyEngine.loadScene = async (sceneId) => {
            // Update theme based on scene
            const branchType = this.getBranchTypeForScene(sceneId);
            this.themeController.updateThemeForScene(sceneId, branchType);

            // Load the scene
            await originalLoadScene(sceneId);

            // Trigger scene change event
            this.onSceneChange(sceneId);
        };
    }

    // Get branch type for theme controller
    getBranchTypeForScene(sceneId) {
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

    // Check for existing save data
    checkForSaveData() {
        try {
            const saveData = localStorage.getItem('echo-of-her-save');
            return saveData !== null;
        } catch (e) {
            console.warn('Could not check save data:', e);
            return false;
        }
    }

    // Start a new game
    startNewGame() {
        console.log('Starting new game...');
        // Navigate to game view and initialize story
        this.navigationController.goToGame();
        this.storyEngine.init();
    }

    // Set up event listeners
    setupEventListeners() {
        // Navigation buttons
        const homeBtn = document.getElementById('home-btn');
        const menuBtn = document.getElementById('menu-btn');
        const saveBtn = document.getElementById('save-btn');
        const settingsBtn = document.getElementById('settings-btn');
        const closeMenuBtn = document.getElementById('close-menu');

        // Menu navigation buttons
        const menuHomeBtn = document.getElementById('menu-home-btn');
        const menuChaptersBtn = document.getElementById('menu-chapters-btn');

        if (homeBtn) homeBtn.addEventListener('click', this.goToHomepage.bind(this));
        if (menuBtn) menuBtn.addEventListener('click', this.handleMenuToggle);
        if (saveBtn) saveBtn.addEventListener('click', this.handleSave);
        if (settingsBtn) settingsBtn.addEventListener('click', this.handleSettings);
        if (closeMenuBtn) closeMenuBtn.addEventListener('click', this.handleMenuToggle);

        if (menuHomeBtn) {
            menuHomeBtn.addEventListener('click', () => {
                this.handleMenuToggle(); // Close menu first
                this.goToHomepage();
            });
        }

        if (menuChaptersBtn) {
            menuChaptersBtn.addEventListener('click', () => {
                this.handleMenuToggle(); // Close menu first
                this.goToChapterSelection();
            });
        }

        // Menu overlay click to close
        this.menuOverlay.addEventListener('click', (e) => {
            if (e.target === this.menuOverlay) {
                this.handleMenuToggle();
            }
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                if (this.menuOverlay.classList.contains('active')) {
                    this.handleMenuToggle();
                }
            } else if (e.key === 'h' && (e.ctrlKey || e.metaKey)) {
                e.preventDefault();
                this.goToHomepage();
            } else if (e.key === 's' && (e.ctrlKey || e.metaKey)) {
                e.preventDefault();
                this.handleSave();
            } else if (e.key === 'm' && (e.ctrlKey || e.metaKey)) {
                e.preventDefault();
                this.handleMenuToggle();
            }
        });

        // Settings change handlers
        const textSpeedSlider = document.getElementById('text-speed');
        if (textSpeedSlider) {
            textSpeedSlider.addEventListener('input', () => {
                // Speed change is handled by story engine automatically
                console.log('Text speed changed to:', textSpeedSlider.value);
            });
        }

        // Auto-save toggle
        const autoSaveCheckbox = document.getElementById('auto-save');
        if (autoSaveCheckbox) {
            autoSaveCheckbox.addEventListener('change', () => {
                console.log('Auto-save:', autoSaveCheckbox.checked ? 'enabled' : 'disabled');
            });
        }
    }

    // Handle menu toggle
    handleMenuToggle() {
        const isActive = this.menuOverlay.classList.contains('active');

        if (isActive) {
            this.menuOverlay.classList.remove('active');
        } else {
            this.updateChapterList();
            this.menuOverlay.classList.add('active');
        }
    }

    // Navigate to homepage
    goToHomepage() {
        if (this.navigationController) {
            this.navigationController.goToHomepage();
        }
    }

    // Navigate to chapter selection
    goToChapterSelection() {
        if (this.navigationController) {
            this.navigationController.goToChapterSelection();
        }
    }

    // Handle save button
    handleSave() {
        this.storyEngine.autoSave();
        this.showNotification('Game saved successfully!');
    }

    // Handle settings button
    handleSettings() {
        this.handleMenuToggle();
    }

    // Update chapter list in menu
    updateChapterList() {
        const chapterList = document.getElementById('chapter-list');
        if (!chapterList) return;

        chapterList.innerHTML = '';

        const visitedScenes = this.storyEngine.getVisitedScenes();
        const currentSceneId = this.storyEngine.getCurrentScene()?.id;

        // Create chapter items for visited scenes
        const chapters = this.getChapterStructure();

        chapters.forEach(chapter => {
            const chapterItem = document.createElement('div');
            chapterItem.className = 'chapter-item';
            chapterItem.textContent = chapter.title;

            // Mark as completed if visited
            if (visitedScenes.includes(chapter.sceneId)) {
                chapterItem.classList.add('completed');
            }

            // Mark as current
            if (chapter.sceneId === currentSceneId) {
                chapterItem.classList.add('current');
            }

            // Add click handler for visited scenes
            if (visitedScenes.includes(chapter.sceneId)) {
                chapterItem.addEventListener('click', () => {
                    this.storyEngine.jumpToScene(chapter.sceneId);
                    this.handleMenuToggle();
                });
            } else {
                chapterItem.style.opacity = '0.5';
                chapterItem.style.cursor = 'not-allowed';
            }

            chapterList.appendChild(chapterItem);
        });
    }

    // Get chapter structure for menu
    getChapterStructure() {
        return [
            { title: 'Opening - The Call', sceneId: 'scene_001' },
            { title: 'Opening - The Hospital', sceneId: 'scene_004' },
            { title: 'Three Years Later', sceneId: 'scene_007' },
            { title: 'The Tea Incident', sceneId: 'scene_008' },
            { title: 'The Choice', sceneId: 'choice_point_001' },
            { title: 'Branch 1 - The Window', sceneId: 'branch1_001' },
            { title: 'Branch 1 - The Storm', sceneId: 'branch1_006' },
            { title: 'Branch 1 - Supernatural', sceneId: 'branch1_choice_001' },
            { title: 'Branch 2 - The Visitor', sceneId: 'branch2_001' },
            { title: 'Branch 2 - Investigation', sceneId: 'branch2_choice_001' },
            { title: 'Sub-branch 1.1 - Memory', sceneId: 'sub_branch1_1_001' },
            { title: 'Sub-branch 1.2 - Spirit', sceneId: 'sub_branch1_2_001' },
            { title: 'Sub-branch 2.1 - Crime', sceneId: 'sub_branch2_1_001' },
            { title: 'Sub-branch 2.2 - Truth', sceneId: 'sub_branch2_2_001' }
        ];
    }

    // Handle scene changes
    onSceneChange(sceneId) {
        console.log('Scene changed to:', sceneId);

        // Update document title
        const scene = StoryData.getScene(sceneId);
        if (scene) {
            document.title = `The Echo of Her - ${scene.title}`;
        }

        // Analytics or other tracking could go here
    }

    // Handle theme changes
    onThemeChange(event) {
        const { theme, intensity, colors } = event.detail;
        console.log('Theme changed to:', theme, 'with intensity:', intensity);

        // Could add additional visual effects based on theme changes
        this.updateUIForTheme(theme, intensity);
    }

    // Update UI elements based on theme
    updateUIForTheme(theme, intensity) {
        const body = document.body;

        // Add intensity-based classes
        body.classList.remove('intensity-1', 'intensity-2', 'intensity-3', 'intensity-4', 'intensity-5');
        body.classList.add(`intensity-${intensity}`);

        // Special effects for high intensity
        if (intensity >= 4) {
            body.classList.add('high-intensity');
        } else {
            body.classList.remove('high-intensity');
        }
    }

    // Show loading screen
    showLoadingScreen() {
        this.loadingScreen.classList.remove('hidden');
    }

    // Hide loading screen
    async hideLoadingScreen() {
        await this.delay(500); // Minimum loading time for UX
        this.loadingScreen.classList.add('hidden');
    }

    // Show notification
    showNotification(message, duration = 3000) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--accent-color);
            color: var(--primary-bg);
            padding: 1rem 1.5rem;
            border-radius: var(--border-radius);
            z-index: 1001;
            animation: slideIn 0.3s ease;
        `;

        document.body.appendChild(notification);

        // Remove after duration
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, duration);
    }

    // Show error message
    showError(message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.innerHTML = `
            <h2>Error</h2>
            <p>${message}</p>
            <button onclick="location.reload()">Reload Game</button>
        `;
        errorDiv.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: var(--primary-bg);
            border: 2px solid #dc143c;
            color: var(--text-color);
            padding: 2rem;
            border-radius: var(--border-radius);
            z-index: 1002;
            text-align: center;
        `;

        document.body.appendChild(errorDiv);
    }

    // Get game state for debugging
    getGameState() {
        return {
            initialized: this.isInitialized,
            currentScene: this.storyEngine?.getCurrentScene(),
            currentTheme: this.themeController?.getCurrentTheme(),
            visitedScenes: this.storyEngine?.getVisitedScenes(),
            choiceHistory: this.storyEngine?.getChoiceHistory()
        };
    }

    // Debug method to test themes
    debugThemes() {
        if (this.themeController) {
            this.themeController.debugCycleThemes();
        }
    }

    // Utility function for delays
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Debug function to show status
function updateDebugInfo(message) {
    const debugDiv = document.getElementById('debug-info');
    if (debugDiv) {
        debugDiv.innerHTML += '<div>' + new Date().toLocaleTimeString() + ': ' + message + '</div>';
    }
    console.log(message);
}

// Initialize game when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    updateDebugInfo('DOM loaded, starting initialization...');

    try {
        // Check if required dependencies exist
        if (typeof STORY_DATA === 'undefined') {
            updateDebugInfo('ERROR: STORY_DATA not found');
            return;
        }

        if (typeof StoryEngine === 'undefined') {
            updateDebugInfo('ERROR: StoryEngine not found');
            return;
        }

        if (typeof ThemeController === 'undefined') {
            updateDebugInfo('ERROR: ThemeController not found');
            return;
        }

        updateDebugInfo('All dependencies found, creating game instance...');

        // Create global game instance
        window.game = new EchoOfHerGame();

        updateDebugInfo('Game instance created, starting initialization...');

        // Start the game
        window.game.init().catch(error => {
            console.error('Failed to start game:', error);
            updateDebugInfo('ERROR: Failed to start game - ' + error.message);
        });

    } catch (error) {
        console.error('Error during initialization:', error);
        updateDebugInfo('ERROR: ' + error.message);
    }
});

// Add CSS for notifications
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    .high-intensity {
        animation: subtlePulse 4s ease-in-out infinite;
    }
    
    @keyframes subtlePulse {
        0%, 100% { filter: brightness(1); }
        50% { filter: brightness(1.05); }
    }
    
    .intensity-5 .story-display {
        box-shadow: 
            var(--shadow-color) 0 0 30px,
            var(--shadow-color) 0 0 60px,
            inset 0 0 20px rgba(0, 0, 0, 0.3);
    }
`;
document.head.appendChild(notificationStyles);

// Export for potential module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = EchoOfHerGame;
}