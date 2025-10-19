// HomePage Component - Main entry point for the game
class HomePage {
    constructor(gameInstance) {
        this.game = gameInstance;
        this.container = null;
        this.hasSaveData = false;
        this.hasProgress = false;
        
        // Bind methods
        this.init = this.init.bind(this);
        this.render = this.render.bind(this);
        this.handleStartNewGame = this.handleStartNewGame.bind(this);
        this.handleContinueGame = this.handleContinueGame.bind(this);
        this.handleChapterSelection = this.handleChapterSelection.bind(this);
    }

    // Initialize the homepage
    async init() {
        console.log('HomePage initializing...');
        
        this.container = document.getElementById('homepage-container');
        if (!this.container) {
            console.error('Homepage container not found');
            return;
        }

        console.log('Homepage container found:', this.container);

        // Check for save data and progress
        this.checkGameState();
        
        console.log('Game state checked - hasSave:', this.hasSaveData, 'hasProgress:', this.hasProgress);
        
        // Clear any existing content first
        this.container.innerHTML = '';
        
        // Render the homepage
        this.render();
        
        console.log('Homepage rendered, content length:', this.container.innerHTML.length);
        
        // Set up event listeners
        this.setupEventListeners();
        
        // Apply atmospheric styling
        this.applyAtmosphericStyling();
        
        console.log('HomePage initialized successfully');
    }

    // Check for existing save data and progress
    checkGameState() {
        try {
            const saveData = localStorage.getItem('echo-of-her-save');
            this.hasSaveData = saveData !== null;
            
            if (this.hasSaveData) {
                const data = JSON.parse(saveData);
                this.hasProgress = data.visitedScenes && data.visitedScenes.length > 1;
            }
        } catch (e) {
            console.warn('Could not check game state:', e);
            this.hasSaveData = false;
            this.hasProgress = false;
        }
    }

    // Render the homepage content
    render() {
        try {
            this.container.innerHTML = `
                <div class="homepage-content">
                    <div class="homepage-background">
                        <div class="atmospheric-overlay"></div>
                    </div>
                    
                    <div class="homepage-main">
                        <header class="homepage-header">
                            <h1 class="game-title">The Echo of Her</h1>
                            <p class="game-subtitle">A Psychological Thriller</p>
                            <div class="title-underline"></div>
                        </header>

                        <div class="homepage-description">
                            <p class="story-intro">
                                Three years after losing his wife in a tragic accident, Rumi's carefully constructed 
                                reality begins to unravel. As the boundaries between memory and nightmare blur, 
                                he must confront the truth about that fateful night.
                            </p>
                            <p class="story-tagline">
                                Some echoes never fade...
                            </p>
                        </div>

                        <nav class="homepage-navigation">
                            <button class="homepage-btn primary-btn" id="start-new-game">
                                <span class="btn-icon">▶</span>
                                Start New Game
                            </button>
                            
                            ${this.hasSaveData ? `
                                <button class="homepage-btn secondary-btn" id="continue-game">
                                    <span class="btn-icon">↻</span>
                                    Continue Game
                                </button>
                            ` : ''}
                            
                            ${this.hasProgress ? `
                                <button class="homepage-btn tertiary-btn" id="chapter-selection">
                                    <span class="btn-icon">☰</span>
                                    Chapter Selection
                                </button>
                            ` : ''}
                        </nav>

                        <footer class="homepage-footer">
                            <div class="game-info">
                                <span class="version">Version 1.5 Snapshot</span>
                                <span class="separator">•</span>
                                <span class="author">Interactive Fiction</span>
                            </div>
                        </footer>
                    </div>
                </div>
            `;
            console.log('Homepage HTML rendered successfully');
        } catch (error) {
            console.error('Error rendering homepage:', error);
            // Fallback simple render
            this.container.innerHTML = `
                <div style="padding: 2rem; text-align: center; color: #eee; background: #1a1a2e; min-height: 100vh; display: flex; flex-direction: column; justify-content: center;">
                    <h1 style="color: #4a90e2; font-size: 3rem; margin-bottom: 1rem;">The Echo of Her</h1>
                    <p style="font-size: 1.2rem; margin-bottom: 2rem;">A Psychological Thriller</p>
                    <button onclick="window.game.startNewGame()" style="background: #4a90e2; color: white; border: none; padding: 1rem 2rem; font-size: 1.1rem; border-radius: 8px; cursor: pointer;">Start New Game</button>
                </div>
            `;
        }
    }

    // Set up event listeners for homepage buttons
    setupEventListeners() {
        const startNewBtn = document.getElementById('start-new-game');
        const continueBtn = document.getElementById('continue-game');
        const chapterBtn = document.getElementById('chapter-selection');

        if (startNewBtn) {
            startNewBtn.addEventListener('click', this.handleStartNewGame);
        }

        if (continueBtn) {
            continueBtn.addEventListener('click', this.handleContinueGame);
        }

        if (chapterBtn) {
            chapterBtn.addEventListener('click', this.handleChapterSelection);
        }

        // Add keyboard navigation
        document.addEventListener('keydown', this.handleKeyNavigation.bind(this));
    }

    // Handle keyboard navigation
    handleKeyNavigation(event) {
        if (this.game.navigationController.getCurrentView() !== 'homepage') return;

        switch (event.key) {
            case 'Enter':
                // Start new game on Enter
                this.handleStartNewGame();
                break;
            case 'c':
            case 'C':
                // Continue game on C
                if (this.hasSaveData) {
                    this.handleContinueGame();
                }
                break;
            case 's':
            case 'S':
                // Chapter selection on S
                if (this.hasProgress) {
                    this.handleChapterSelection();
                }
                break;
        }
    }

    // Handle start new game
    handleStartNewGame() {
        console.log('Starting new game from homepage');
        
        // Add button feedback
        const btn = document.getElementById('start-new-game');
        if (btn) {
            btn.classList.add('btn-clicked');
            setTimeout(() => btn.classList.remove('btn-clicked'), 200);
        }

        // Clear any existing save data if user wants fresh start
        if (this.hasSaveData) {
            const confirmStart = confirm('Starting a new game will overwrite your current progress. Continue?');
            if (!confirmStart) return;
            
            localStorage.removeItem('echo-of-her-save');
        }

        // Navigate to game and start fresh
        setTimeout(() => {
            this.game.navigationController.goToGame();
            this.game.storyEngine.init();
        }, 300);
    }

    // Handle continue game
    handleContinueGame() {
        console.log('Continuing game from homepage');
        
        // Add button feedback
        const btn = document.getElementById('continue-game');
        if (btn) {
            btn.classList.add('btn-clicked');
            setTimeout(() => btn.classList.remove('btn-clicked'), 200);
        }

        // Navigate to game and load save
        setTimeout(() => {
            this.game.navigationController.goToGame();
            this.game.storyEngine.loadSave();
        }, 300);
    }

    // Handle chapter selection
    handleChapterSelection() {
        console.log('Opening chapter selection from homepage');
        
        // Add button feedback
        const btn = document.getElementById('chapter-selection');
        if (btn) {
            btn.classList.add('btn-clicked');
            setTimeout(() => btn.classList.remove('btn-clicked'), 200);
        }

        // Navigate to chapter selection
        setTimeout(() => {
            this.game.navigationController.goToChapterSelection();
        }, 300);
    }

    // Apply atmospheric styling based on game state
    applyAtmosphericStyling() {
        if (!this.container) return;

        // Add different atmospheric effects based on progress
        if (this.hasProgress) {
            // Player has made progress - add subtle horror elements
            this.container.classList.add('homepage-experienced');
        } else {
            // New player - keep it mysterious but inviting
            this.container.classList.add('homepage-fresh');
        }

        // Add time-based atmospheric effects
        const hour = new Date().getHours();
        if (hour >= 20 || hour <= 6) {
            // Night time - enhance the dark atmosphere
            this.container.classList.add('homepage-night');
        }
    }

    // Clean up event listeners
    destroy() {
        document.removeEventListener('keydown', this.handleKeyNavigation);
    }
}

// Export for use in main game file
if (typeof module !== 'undefined' && module.exports) {
    module.exports = HomePage;
}
