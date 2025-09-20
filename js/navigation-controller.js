// NavigationController - Manages routing and state preservation between views
class NavigationController {
    constructor(gameInstance) {
        this.game = gameInstance;
        this.currentView = 'homepage'; // Default view
        this.previousView = null;
        this.navigationHistory = [];
        this.preservedGameState = null;
        this.isTransitioning = false;
        
        // View containers (will be created in HTML)
        this.homepageContainer = null;
        this.chapterSelectionContainer = null;
        this.gameContainer = null;
        
        // Bind methods
        this.navigateTo = this.navigateTo.bind(this);
        this.handleBrowserNavigation = this.handleBrowserNavigation.bind(this);
        this.preserveGameState = this.preserveGameState.bind(this);
        this.restoreGameState = this.restoreGameState.bind(this);
    }

    // Initialize the navigation system
    init() {
        console.log('NavigationController initialized');
        
        // Get view containers
        this.homepageContainer = document.getElementById('homepage-container');
        this.chapterSelectionContainer = document.getElementById('chapter-selection-container');
        this.gameContainer = document.getElementById('game-container');
        
        // Set up browser navigation handling
        window.addEventListener('popstate', this.handleBrowserNavigation);
        
        // Initialize URL-based routing
        this.initializeRouting();
        
        // Set initial view based on URL or default to homepage
        const initialView = this.getViewFromURL() || 'homepage';
        
        // Small delay to ensure components are ready
        setTimeout(() => {
            this.navigateTo(initialView, {}, false); // Don't push to history on init
        }, 100);
    }

    // Navigate to a specific view
    async navigateTo(view, params = {}, pushToHistory = true) {
        if (this.isTransitioning) {
            console.log('Navigation already in progress, ignoring request');
            return;
        }

        console.log(`Navigating from ${this.currentView} to ${view}`);
        
        this.isTransitioning = true;
        
        // Validate view
        if (!this.isValidView(view)) {
            console.error(`Invalid view: ${view}`);
            this.isTransitioning = false;
            return;
        }

        // Preserve current state if navigating away from game
        if (this.currentView === 'game') {
            this.preserveGameState();
        }

        // Record navigation history
        this.navigationHistory.push({
            from: this.currentView,
            to: view,
            timestamp: Date.now(),
            params: params
        });

        // Update browser history
        if (pushToHistory) {
            this.updateBrowserHistory(view, params);
        }

        // Perform view transition
        await this.performViewTransition(this.currentView, view, params);

        // Update current view
        this.previousView = this.currentView;
        this.currentView = view;
        
        this.isTransitioning = false;
        
        console.log(`Navigation complete: now on ${view}`);
    }

    // Perform the actual view transition with animations
    async performViewTransition(fromView, toView, params) {
        // Hide current view with fade out
        if (fromView && fromView !== toView) {
            await this.hideView(fromView);
        }

        // Show target view with fade in
        await this.showView(toView, params);
    }

    // Hide a view with animation
    async hideView(view) {
        const container = this.getViewContainer(view);
        if (!container) return;

        container.classList.add('view-fade-out');
        
        // Wait for animation to complete
        await this.delay(300);
        
        container.style.display = 'none';
        container.classList.remove('view-fade-out');
    }

    // Show a view with animation
    async showView(view, params) {
        const container = this.getViewContainer(view);
        if (!container) return;

        // Initialize view-specific content
        await this.initializeView(view, params);

        container.style.display = 'block';
        container.classList.add('view-fade-in');
        
        // Wait for animation to complete
        await this.delay(300);
        
        container.classList.remove('view-fade-in');
    }

    // Initialize view-specific content and components
    async initializeView(view, params) {
        console.log(`Initializing view: ${view}`);
        
        switch (view) {
            case 'homepage':
                if (window.homePage) {
                    console.log('Initializing homepage...');
                    await window.homePage.init();
                } else {
                    console.error('HomePage component not found');
                }
                break;
            case 'chapter-selection':
                if (window.chapterSelection) {
                    await window.chapterSelection.init(params);
                } else {
                    console.error('ChapterSelection component not found');
                }
                break;
            case 'game':
                // Restore game state if needed
                if (this.preservedGameState) {
                    this.restoreGameState();
                } else if (params.sceneId) {
                    // Navigate to specific scene
                    this.game.storyEngine.jumpToScene(params.sceneId);
                }
                break;
        }
    }

    // Get view container element
    getViewContainer(view) {
        switch (view) {
            case 'homepage':
                return this.homepageContainer;
            case 'chapter-selection':
                return this.chapterSelectionContainer;
            case 'game':
                return this.gameContainer;
            default:
                return null;
        }
    }

    // Preserve current game state
    preserveGameState() {
        if (this.game && this.game.storyEngine) {
            this.preservedGameState = {
                currentScene: this.game.storyEngine.getCurrentScene(),
                currentBranch: this.game.storyEngine.currentBranch,
                visitedScenes: this.game.storyEngine.getVisitedScenes(),
                choiceHistory: this.game.storyEngine.getChoiceHistory(),
                timestamp: Date.now()
            };
            console.log('Game state preserved');
        }
    }

    // Restore preserved game state
    restoreGameState() {
        if (this.preservedGameState && this.game && this.game.storyEngine) {
            // Restore the scene
            if (this.preservedGameState.currentScene) {
                this.game.storyEngine.loadScene(this.preservedGameState.currentScene.id);
            }
            
            console.log('Game state restored');
            this.preservedGameState = null; // Clear after restoration
        }
    }

    // Handle browser back/forward navigation
    handleBrowserNavigation(event) {
        const view = this.getViewFromURL();
        if (view && view !== this.currentView) {
            this.navigateTo(view, {}, false); // Don't push to history
        }
    }

    // Initialize URL-based routing
    initializeRouting() {
        // Set up URL patterns
        this.routes = {
            '': 'homepage',
            'home': 'homepage',
            'homepage': 'homepage',
            'chapters': 'chapter-selection',
            'chapter-selection': 'chapter-selection',
            'game': 'game'
        };
    }

    // Get view from current URL
    getViewFromURL() {
        const hash = window.location.hash.slice(1); // Remove #
        const path = hash.split('/')[0]; // Get first part of path
        return this.routes[path] || null;
    }

    // Update browser history
    updateBrowserHistory(view, params) {
        let url = `#${view}`;
        
        // Add parameters to URL if needed
        if (params.sceneId) {
            url += `/scene/${params.sceneId}`;
        }
        
        window.history.pushState({ view, params }, '', url);
    }

    // Validate if view name is valid
    isValidView(view) {
        return ['homepage', 'chapter-selection', 'game'].includes(view);
    }

    // Get current view
    getCurrentView() {
        return this.currentView;
    }

    // Get previous view
    getPreviousView() {
        return this.previousView;
    }

    // Get navigation history
    getNavigationHistory() {
        return [...this.navigationHistory];
    }

    // Check if user can navigate back
    canNavigateBack() {
        return this.previousView !== null;
    }

    // Navigate back to previous view
    navigateBack() {
        if (this.canNavigateBack()) {
            this.navigateTo(this.previousView);
        }
    }

    // Quick navigation methods for common actions
    goToHomepage() {
        this.navigateTo('homepage');
    }

    goToChapterSelection() {
        this.navigateTo('chapter-selection');
    }

    goToGame(sceneId = null) {
        const params = sceneId ? { sceneId } : {};
        this.navigateTo('game', params);
    }

    // Utility function for delays
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Clean up resources
    destroy() {
        window.removeEventListener('popstate', this.handleBrowserNavigation);
        this.preservedGameState = null;
        this.navigationHistory = [];
    }
}

// Export for use in main game file
if (typeof module !== 'undefined' && module.exports) {
    module.exports = NavigationController;
}