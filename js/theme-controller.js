// Theme Controller - Manages dynamic theming based on story intensity and branch type
class ThemeController {
    constructor() {
        this.currentTheme = 'default';
        this.currentIntensity = 1;
        this.targetIntensity = 1;
        this.isTransitioning = false;
        this.transitionDuration = 2000; // 2 seconds
        
        // Theme mapping for different story branches and intensities
        this.themeMap = {
            // Opening/neutral themes
            neutral: {
                1: 'default',           // Calm
                2: 'theme-tension',     // Building tension
                3: 'theme-anxiety',     // Anxiety
                4: 'theme-anxiety',     // High anxiety
                5: 'theme-anxiety'      // Peak anxiety
            },
            // Horror mystery branch themes
            horror: {
                1: 'theme-tension',
                2: 'theme-anxiety', 
                3: 'theme-horror',
                4: 'theme-horror-blood',
                5: 'theme-horror-blood'
            },
            // Crime mystery branch themes
            crime: {
                1: 'theme-tension',
                2: 'theme-crime-investigation',
                3: 'theme-crime',
                4: 'theme-crime',
                5: 'theme-crime'
            },
            // Resolution themes
            resolution: {
                peaceful: 'theme-resolution-peaceful',
                tragic: 'theme-resolution-tragic',
                justice: 'theme-resolution-justice'
            }
        };
        
        // Time and location data for transition overlays - Exact from dialogue files
        this.sceneTimeLocationMap = {
            // ACT I: THE AWAKENING - March 14, 2022
            'scene_001': { 
                time: '2:57 AM', 
                location: 'RUMI\'S HOUSE - DINING ROOM', 
                date: 'MARCH 14, 2022' 
            },
            'scene_012': { 
                time: '3:23 AM', 
                location: 'LAB AID HOSPITAL - MORGUE', 
                date: 'MARCH 14, 2022' 
            },
            'scene_018': { 
                time: '8:40 AM', 
                location: 'RUMI\'S FATHER\'S HOUSE - BEDROOM', 
                date: 'MARCH 14, 2022' 
            },
            
            // ACT II: THREE YEARS LATER - April 3, 2025
            'scene_023': { 
                time: '6:40 PM', 
                location: 'RUMI\'S HOUSE - LIVING ROOM', 
                date: 'APRIL 3, 2025' 
            },
            'scene_028': { 
                time: '6:51 PM', 
                location: 'RUMI\'S HOUSE - LIVING ROOM', 
                date: 'APRIL 3, 2025' 
            },
            'choice_point_001': { 
                time: '6:51 PM', 
                location: 'RUMI\'S HOUSE - LIVING ROOM', 
                date: 'APRIL 3, 2025' 
            },
            
            // BRANCH 1: Horror Mystery Path
            'branch1_001': { 
                time: '7:40 PM', 
                location: 'RUMI\'S HOUSE - LIVING ROOM', 
                date: 'APRIL 3, 2025' 
            },
            'branch1_007': { 
                time: '8:30 PM', 
                location: 'RUMI\'S HOUSE - DINING ROOM', 
                date: 'APRIL 3, 2025' 
            },
            'branch1_009': { 
                time: '8:45 PM', 
                location: 'RUMI\'S HOUSE - KITCHEN', 
                date: 'APRIL 3, 2025' 
            },
            'branch1_011': { 
                time: '9:00 PM', 
                location: 'RUMI\'S HOUSE - LIVING ROOM', 
                date: 'APRIL 3, 2025' 
            },
            'branch1_015': { 
                time: '10:10 PM', 
                location: 'RUMI\'S HOUSE - BEDROOM', 
                date: 'APRIL 3, 2025' 
            },
            
            // BRANCH 2: Crime Mystery Path
            'branch2_001': { 
                time: '7:40 PM', 
                location: 'RUMI\'S HOUSE - LIVING ROOM', 
                date: 'APRIL 3, 2025' 
            },
            'branch2_011': { 
                time: '8:00 PM', 
                location: 'RUMI\'S HOUSE - LIVING ROOM', 
                date: 'APRIL 3, 2025' 
            },
            'branch2_018': { 
                time: '8:15 PM', 
                location: 'RUMI\'S HOUSE - LIVING ROOM', 
                date: 'APRIL 3, 2025' 
            },
            
            // SUB-BRANCHES
            'sub_branch1_1_034': { 
                time: '1:15 AM', 
                location: 'RUMI\'S HOUSE - LIVING ROOM', 
                date: 'APRIL 4, 2025' 
            },
            'sub_branch1_1_047': { 
                time: '1:45 AM', 
                location: 'RUMI\'S HOUSE - LIVING ROOM', 
                date: 'APRIL 4, 2025' 
            },
            'sub_branch1_1_063': { 
                time: '2:30 AM', 
                location: 'RUMI\'S HOUSE - LIVING ROOM', 
                date: 'APRIL 4, 2025' 
            },
            'sub_branch1_1_072': { 
                time: '2:45 AM', 
                location: 'RUMI\'S HOUSE - LIVING ROOM', 
                date: 'APRIL 4, 2025' 
            },
            'sub_branch1_1_078': { 
                time: 'DAY', 
                location: 'PSYCHIATRIC WARD', 
                date: 'TWO WEEKS LATER' 
            },
            
            'sub_branch1_2_008': { 
                time: '11:30 PM', 
                location: 'RUMI\'S HOUSE - LIVING ROOM', 
                date: 'APRIL 3, 2025' 
            },
            'sub_branch1_2_020': { 
                time: '12:15 AM', 
                location: 'RUMI\'S HOUSE - LIVING ROOM', 
                date: 'APRIL 4, 2025' 
            },
            'sub_branch1_2_030': { 
                time: '12:45 AM', 
                location: 'RUMI\'S HOUSE - LIVING ROOM', 
                date: 'APRIL 4, 2025' 
            },
            'sub_branch1_2_038': { 
                time: '1:15 AM', 
                location: 'RUMI\'S HOUSE - LIVING ROOM', 
                date: 'APRIL 4, 2025' 
            },
            'sub_branch1_2_045': { 
                time: '1:30 AM', 
                location: 'RUMI\'S HOUSE - LIVING ROOM', 
                date: 'APRIL 4, 2025' 
            },
            'sub_branch1_2_050': { 
                time: '1:45 AM', 
                location: 'RUMI\'S HOUSE - LIVING ROOM', 
                date: 'APRIL 4, 2025' 
            },
            'sub_branch1_2_057': { 
                time: '2:00 AM', 
                location: 'RUMI\'S HOUSE - LIVING ROOM', 
                date: 'APRIL 4, 2025' 
            },
            'sub_branch1_2_065': { 
                time: '2:15 AM', 
                location: 'RUMI\'S HOUSE - LIVING ROOM', 
                date: 'APRIL 4, 2025' 
            },
            'sub_branch1_2_073': { 
                time: '2:45 AM', 
                location: 'RUMI\'S HOUSE - LIVING ROOM', 
                date: 'APRIL 4, 2025' 
            },
            'sub_branch1_2_078': { 
                time: '5:00 AM', 
                location: 'POLICE STATION - INTERROGATION ROOM', 
                date: 'APRIL 4, 2025' 
            },
            'sub_branch1_2_084': { 
                time: 'DAY', 
                location: 'CEMETERY', 
                date: 'THREE MONTHS LATER' 
            },
            
            'sub_branch2_1_035': { 
                time: '9:15 PM', 
                location: 'RUMI\'S HOUSE - LIVING ROOM', 
                date: 'APRIL 3, 2025' 
            },
            'sub_branch2_1_042': { 
                time: '9:45 PM', 
                location: 'RUMI\'S HOUSE - LIVING ROOM', 
                date: 'APRIL 3, 2025' 
            },
            'sub_branch2_1_050': { 
                time: '10:15 PM', 
                location: 'RUMI\'S HOUSE - LIVING ROOM', 
                date: 'APRIL 3, 2025' 
            },
            'sub_branch2_1_058': { 
                time: '10:50 PM', 
                location: 'RUMI\'S HOUSE - LIVING ROOM', 
                date: 'APRIL 3, 2025' 
            },
            'sub_branch2_1_064': { 
                time: '11:25 PM', 
                location: 'RUMI\'S HOUSE - KITCHEN', 
                date: 'APRIL 3, 2025' 
            },
            'sub_branch2_1_075': { 
                time: '11:45 PM', 
                location: 'RUMI\'S HOUSE - KITCHEN', 
                date: 'APRIL 3, 2025' 
            },
            'sub_branch2_1_080': { 
                time: '6:00 AM', 
                location: 'HOSPITAL ROOM', 
                date: 'APRIL 4, 2025' 
            },
            'sub_branch2_1_088': { 
                time: 'DAY', 
                location: 'CEMETERY', 
                date: 'ONE WEEK LATER' 
            },
            'sub_branch2_1_093': { 
                time: 'DAY', 
                location: 'CEMETERY', 
                date: 'THREE MONTHS LATER' 
            },
            
            'sub_branch2_2_008': { 
                time: '8:15 PM', 
                location: 'RUMI\'S HOUSE - LIVING ROOM', 
                date: 'APRIL 3, 2025' 
            },
            'sub_branch2_2_019': { 
                time: '9:00 PM', 
                location: 'RUMI\'S HOUSE - LIVING ROOM', 
                date: 'APRIL 3, 2025' 
            },
            'sub_branch2_2_025': { 
                time: '9:45 PM', 
                location: 'RUMI\'S HOUSE - LIVING ROOM', 
                date: 'APRIL 3, 2025' 
            },
            'sub_branch2_2_034': { 
                time: '10:30 PM', 
                location: 'RUMI\'S HOUSE - BEDROOM', 
                date: 'APRIL 3, 2025' 
            },
            'sub_branch2_2_041': { 
                time: '11:00 PM', 
                location: 'RUMI\'S HOUSE - BEDROOM', 
                date: 'APRIL 3, 2025' 
            },
            'sub_branch2_2_051': { 
                time: '11:15 PM', 
                location: 'RUMI\'S HOUSE - BEDROOM', 
                date: 'APRIL 3, 2025' 
            },
            'sub_branch2_2_071': { 
                time: '11:50 PM', 
                location: 'RUMI\'S HOUSE - BEDROOM', 
                date: 'APRIL 3, 2025' 
            },
            'sub_branch2_2_082': { 
                time: '12:15 AM', 
                location: 'RUMI\'S HOUSE - LIVING ROOM', 
                date: 'APRIL 4, 2025' 
            },
            'sub_branch2_2_090': { 
                time: '12:30 AM', 
                location: 'RUMI\'S HOUSE - LIVING ROOM', 
                date: 'APRIL 4, 2025' 
            },
            'sub_branch2_2_098': { 
                time: '6:00 AM', 
                location: 'POLICE STATION - INTERROGATION ROOM', 
                date: 'APRIL 4, 2025' 
            },
            'sub_branch2_2_102': { 
                time: 'DAY', 
                location: 'PRISON CELL', 
                date: 'WEEKS LATER' 
            },
            'ending_2_1': { 
                time: 'DAY', 
                location: 'CEMETERY', 
                date: 'THREE MONTHS LATER' 
            },
            'ending_2_2': { 
                time: 'DAY', 
                location: 'PRISON CELL', 
                date: 'WEEKS LATER' 
            }
        };

        // Scene-specific theme mappings - Complete overhaul for each time change
        this.sceneThemeMap = {
            // 2:57 AM March 14, 2022 - Night of the tragedy (Dark, cold, foreboding)
            'scene_001': { theme: 'theme-night-tragedy', intensity: 2 },
            'scene_002': { theme: 'theme-night-tragedy', intensity: 3 },
            'scene_003': { theme: 'theme-night-tragedy', intensity: 4 },
            
            // 3:23 AM - Hospital morgue (Sterile, harsh, devastating)
            'scene_004': { theme: 'theme-hospital-morgue', intensity: 5 },
            'scene_005': { theme: 'theme-hospital-morgue', intensity: 5 },
            'scene_006': { theme: 'theme-hospital-morgue', intensity: 5 },
            
            // 8:40 AM - Father's house morning (Muted, grief-stricken)
            'scene_007': { theme: 'theme-morning-grief', intensity: 4 },
            'scene_008': { theme: 'theme-morning-grief', intensity: 3 },
            
            // April 3, 2025 Evening - Three years later (Melancholic, empty)
            'scene_009': { theme: 'theme-evening-melancholy', intensity: 2 },
            
            // 6:51 PM - Tea incident (Building tension)
            'choice_point_001': { theme: 'theme-tea-incident', intensity: 3 },
            
            // Branch 1 - Horror Mystery Path
            // 7:40 PM - Cat incident discovery
            'branch1_001': { theme: 'theme-horror-discovery', intensity: 2 },
            'branch1_002': { theme: 'theme-dinner-solitude', intensity: 2 },
            'branch1_003': { theme: 'theme-storm-night', intensity: 4 },
            
            // Branch 2 - Crime Mystery Path  
            // 7:40 PM - Marzia arrives
            'branch2_001': { theme: 'theme-crime-investigation-start', intensity: 3 },
            'branch2_002': { theme: 'theme-crime-investigation-start', intensity: 3 },
            'branch2_003': { theme: 'theme-crime-investigation-start', intensity: 4 },
            
            // Supernatural encounters
            'sub_branch1_1_001': { theme: 'theme-supernatural-encounter', intensity: 5 },
            'sub_branch1_1_002': { theme: 'theme-supernatural-encounter', intensity: 5 },
            'sub_branch1_1_003': { theme: 'theme-supernatural-encounter', intensity: 5 },
            
            'sub_branch1_2_001': { theme: 'theme-supernatural-encounter', intensity: 5 },
            'sub_branch1_2_002': { theme: 'theme-supernatural-encounter', intensity: 5 },
            
            // Crime investigation scenes
            'sub_branch2_1_001': { theme: 'theme-crime-investigation-start', intensity: 4 },
            'sub_branch2_1_002': { theme: 'theme-crime-investigation-start', intensity: 5 },
            
            'sub_branch2_2_001': { theme: 'theme-flashback', intensity: 4 },
            'sub_branch2_2_002': { theme: 'theme-flashback', intensity: 5 },
            
            // Endings get their own themes
            'ending_1_1': { theme: 'theme-resolution-tragic', intensity: 3 },
            'ending_1_2': { theme: 'theme-resolution-peaceful', intensity: 2 },
            'ending_2_1': { theme: 'theme-resolution-justice', intensity: 2 },
            'ending_2_2': { theme: 'theme-resolution-tragic', intensity: 3 }
        };
        
        this.body = document.body;
        this.gameContainer = document.getElementById('game-container');
    }

    // Initialize theme controller
    init() {
        console.log('Theme Controller initialized');
        this.applyTheme('default');
    }

    // Update theme based on current scene - Complete overhaul for time changes
    updateThemeForScene(sceneId, branchType = 'neutral') {
        const sceneTheme = this.sceneThemeMap[sceneId];
        
        if (sceneTheme) {
            // Use scene-specific theme for dramatic overhaul
            if (sceneTheme.theme !== this.currentTheme) {
                this.transitionToTheme(sceneTheme.theme, sceneTheme.intensity, sceneId);
            }
        } else {
            // Fallback to intensity-based theming for unmapped scenes
            const intensity = this.getSceneIntensity(sceneId);
            const theme = this.getThemeForIntensity(intensity, branchType);
            
            if (theme !== this.currentTheme) {
                this.transitionToTheme(theme, intensity, sceneId);
            }
        }
    }

    // Get appropriate theme for intensity and branch type
    getThemeForIntensity(intensity, branchType) {
        const branchThemes = this.themeMap[branchType] || this.themeMap.neutral;
        return branchThemes[intensity] || branchThemes[1];
    }

    // Transition to new theme with animation
    async transitionToTheme(newTheme, intensity, sceneId = null) {
        if (this.isTransitioning || newTheme === this.currentTheme) {
            return;
        }
        
        this.isTransitioning = true;
        this.targetIntensity = intensity;
        
        console.log(`Starting theme transition to: ${newTheme}`);
        
        // Show time/location overlay if scene data is available
        if (sceneId && this.sceneTimeLocationMap[sceneId]) {
            this.showTimeLocationOverlay(sceneId);
        }
        
        // Notify that theme transition is starting
        this.dispatchThemeTransitionEvent('start', newTheme, intensity);
        
        // Add transition class for smooth animation
        this.body.classList.add('theme-transition');
        this.gameContainer.classList.add('theme-transition');
        
        // Remove old theme classes
        this.removeAllThemeClasses();
        
        // Apply new theme
        await this.delay(50); // Small delay to ensure class removal
        this.applyTheme(newTheme);
        
        // Update current theme
        this.currentTheme = newTheme;
        this.currentIntensity = intensity;
        
        // Remove transition class after animation completes
        setTimeout(() => {
            this.body.classList.remove('theme-transition');
            this.gameContainer.classList.remove('theme-transition');
            this.isTransitioning = false;
            
            // Hide time/location overlay
            this.hideTimeLocationOverlay();
            
            console.log(`Theme transition completed: ${newTheme}`);
            
            // Notify that theme transition is complete
            this.dispatchThemeTransitionEvent('complete', newTheme, intensity);
            this.dispatchThemeChangeEvent(newTheme, intensity);
        }, this.transitionDuration);
    }

    // Show time and location overlay during transition
    showTimeLocationOverlay(sceneId) {
        const overlay = document.getElementById('transition-overlay');
        const timeElement = document.getElementById('transition-time');
        const locationElement = document.getElementById('transition-location');
        const dateElement = document.getElementById('transition-date');
        const content = document.querySelector('.transition-content');
        
        const sceneData = this.sceneTimeLocationMap[sceneId];
        if (overlay && sceneData) {
            timeElement.textContent = sceneData.time;
            locationElement.textContent = sceneData.location;
            dateElement.textContent = sceneData.date;
            
            // Apply contextual styling based on time and location
            this.applyOverlayContextualStyling(overlay, content, sceneData);
            
            overlay.classList.add('active');
            overlay.classList.remove('fade-out');
        }
    }

    // Apply contextual styling to overlay based on scene data
    applyOverlayContextualStyling(overlay, content, sceneData) {
        // Remove existing time/location classes
        overlay.classList.remove('night-time', 'morning-time', 'evening-time', 'hospital-time');
        content.classList.remove('morgue', 'bedroom', 'cemetery', 'prison');
        
        // Apply time-based styling
        const time = sceneData.time.toLowerCase();
        if (time.includes('am') && (time.includes('2:') || time.includes('3:'))) {
            overlay.classList.add('night-time');
        } else if (time.includes('am') && time.includes('8:')) {
            overlay.classList.add('morning-time');
        } else if (time.includes('pm')) {
            overlay.classList.add('evening-time');
        }
        
        // Apply location-based styling
        const location = sceneData.location.toLowerCase();
        if (location.includes('hospital') || location.includes('morgue')) {
            overlay.classList.add('hospital-time');
            if (location.includes('morgue')) {
                content.classList.add('morgue');
            }
        } else if (location.includes('bedroom')) {
            content.classList.add('bedroom');
        } else if (location.includes('cemetery')) {
            content.classList.add('cemetery');
        } else if (location.includes('prison')) {
            content.classList.add('prison');
        }
    }

    // Hide time and location overlay
    hideTimeLocationOverlay() {
        const overlay = document.getElementById('transition-overlay');
        if (overlay) {
            overlay.classList.add('fade-out');
            setTimeout(() => {
                overlay.classList.remove('active', 'fade-out');
            }, 800);
        }
    }

    // Apply theme classes to body and container
    applyTheme(themeName) {
        if (themeName !== 'default') {
            this.body.classList.add(themeName);
            this.gameContainer.classList.add(themeName);
        }
        
        console.log(`Applied theme: ${themeName}`);
    }

    // Remove all theme classes
    removeAllThemeClasses() {
        const themeClasses = [
            // Original themes
            'theme-tension',
            'theme-anxiety', 
            'theme-horror',
            'theme-horror-blood',
            'theme-crime',
            'theme-crime-investigation',
            'theme-resolution-peaceful',
            'theme-resolution-tragic',
            'theme-resolution-justice',
            // Time-specific themes
            'theme-night-tragedy',
            'theme-hospital-morgue',
            'theme-morning-grief',
            'theme-evening-melancholy',
            'theme-tea-incident',
            'theme-horror-discovery',
            'theme-dinner-solitude',
            'theme-storm-night',
            'theme-crime-investigation-start',
            'theme-supernatural-encounter',
            'theme-flashback'
        ];
        
        themeClasses.forEach(className => {
            this.body.classList.remove(className);
            this.gameContainer.classList.remove(className);
        });
    }

    // Get theme for specific story branch
    getBranchTheme(branchType, intensity = 3) {
        return this.getThemeForIntensity(intensity, branchType);
    }

    // Apply resolution theme based on ending type
    applyResolutionTheme(endingType) {
        const resolutionTheme = this.themeMap.resolution[endingType] || this.themeMap.resolution.tragic;
        this.transitionToTheme(resolutionTheme, 3);
    }

    // Get current theme information
    getCurrentTheme() {
        return {
            theme: this.currentTheme,
            intensity: this.currentIntensity,
            isTransitioning: this.isTransitioning
        };
    }

    // Force immediate theme change (no transition)
    setThemeImmediate(themeName, intensity = 1) {
        this.removeAllThemeClasses();
        this.applyTheme(themeName);
        this.currentTheme = themeName;
        this.currentIntensity = intensity;
    }

    // Get theme intensity for scene
    getSceneIntensity(sceneId) {
        const sceneTheme = this.sceneThemeMap[sceneId];
        return sceneTheme ? sceneTheme.intensity : 1;
    }

    // Update theme intensity mapping (for dynamic adjustments)
    updateSceneIntensity(sceneId, intensity) {
        if (this.sceneThemeMap[sceneId]) {
            this.sceneThemeMap[sceneId].intensity = intensity;
        }
    }

    // Check if current theme matches branch type
    isThemeAppropriateForBranch(branchType) {
        const expectedTheme = this.getThemeForIntensity(this.currentIntensity, branchType);
        return this.currentTheme === expectedTheme;
    }

    // Get theme color values for dynamic styling
    getThemeColors() {
        const computedStyle = getComputedStyle(document.documentElement);
        return {
            primaryBg: computedStyle.getPropertyValue('--primary-bg').trim(),
            secondaryBg: computedStyle.getPropertyValue('--secondary-bg').trim(),
            textColor: computedStyle.getPropertyValue('--text-color').trim(),
            textSecondary: computedStyle.getPropertyValue('--text-secondary').trim(),
            accentColor: computedStyle.getPropertyValue('--accent-color').trim(),
            shadowColor: computedStyle.getPropertyValue('--shadow-color').trim()
        };
    }

    // Apply custom theme colors (for special effects)
    applyCustomColors(colors) {
        const root = document.documentElement;
        Object.entries(colors).forEach(([property, value]) => {
            root.style.setProperty(`--${property.replace(/([A-Z])/g, '-$1').toLowerCase()}`, value);
        });
    }

    // Reset to default theme colors
    resetToDefaultColors() {
        const root = document.documentElement;
        const properties = ['primary-bg', 'secondary-bg', 'text-color', 'text-secondary', 'accent-color', 'shadow-color'];
        properties.forEach(prop => {
            root.style.removeProperty(`--${prop}`);
        });
    }

    // Dispatch theme change event
    dispatchThemeChangeEvent(theme, intensity) {
        const event = new CustomEvent('themeChanged', {
            detail: {
                theme: theme,
                intensity: intensity,
                colors: this.getThemeColors()
            }
        });
        document.dispatchEvent(event);
    }

    // Dispatch theme transition event
    dispatchThemeTransitionEvent(phase, theme, intensity) {
        const event = new CustomEvent('themeTransition', {
            detail: {
                phase: phase, // 'start' or 'complete'
                theme: theme,
                intensity: intensity,
                isTransitioning: this.isTransitioning
            }
        });
        document.dispatchEvent(event);
    }

    // Listen for theme change events
    onThemeChange(callback) {
        document.addEventListener('themeChanged', callback);
    }

    // Remove theme change listener
    offThemeChange(callback) {
        document.removeEventListener('themeChanged', callback);
    }

    // Utility function for delays
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Get theme name for display
    getThemeDisplayName(themeName = this.currentTheme) {
        const displayNames = {
            'default': 'Calm',
            'theme-tension': 'Tension',
            'theme-anxiety': 'Anxiety',
            'theme-horror': 'Horror',
            'theme-horror-blood': 'Blood Horror',
            'theme-crime': 'Crime',
            'theme-crime-investigation': 'Investigation',
            'theme-resolution-peaceful': 'Peaceful Resolution',
            'theme-resolution-tragic': 'Tragic Resolution',
            'theme-resolution-justice': 'Justice Resolution',
            // Time-specific themes
            'theme-night-tragedy': 'Night of Tragedy',
            'theme-hospital-morgue': 'Hospital Morgue',
            'theme-morning-grief': 'Morning Grief',
            'theme-evening-melancholy': 'Evening Melancholy',
            'theme-tea-incident': 'Tea Incident',
            'theme-horror-discovery': 'Horror Discovery',
            'theme-dinner-solitude': 'Dinner Solitude',
            'theme-storm-night': 'Storm Night',
            'theme-crime-investigation-start': 'Crime Investigation',
            'theme-supernatural-encounter': 'Supernatural Encounter',
            'theme-flashback': 'Flashback'
        };
        return displayNames[themeName] || 'Unknown';
    }

    // Debug method to test all themes
    debugCycleThemes() {
        const themes = Object.values(this.themeMap.neutral).concat(
            Object.values(this.themeMap.horror),
            Object.values(this.themeMap.crime),
            Object.values(this.themeMap.resolution)
        );
        
        let index = 0;
        const cycleInterval = setInterval(() => {
            if (index >= themes.length) {
                clearInterval(cycleInterval);
                this.setThemeImmediate('default', 1);
                return;
            }
            
            this.setThemeImmediate(themes[index], Math.floor(index / 2) + 1);
            console.log(`Debug: Applied theme ${themes[index]}`);
            index++;
        }, 2000);
    }
}

// Export for use in main game file
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ThemeController;
}