# Design Document

## Overview

"The Echo of Her" is a single-page web application that presents an interactive psychological thriller story. The game uses HTML5, CSS3, and vanilla JavaScript to create an immersive narrative experience with dynamic theming, smooth transitions, and branching storylines. The design emphasizes atmospheric storytelling through visual and interactive elements that respond to the psychological intensity of the narrative.

## Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Browser Environment                       │
├─────────────────────────────────────────────────────────────┤
│  HTML Structure (index.html)                               │
│  ├── Game Container                                         │
│  ├── Story Display Area                                     │
│  ├── Choice Interface                                       │
│  ├── Progress Indicator                                     │
│  └── Navigation Controls                                    │
├─────────────────────────────────────────────────────────────┤
│  CSS Styling (styles.css)                                  │
│  ├── Theme System (Color Variables)                        │
│  ├── Responsive Layout                                      │
│  ├── Animation Definitions                                 │
│  └── Visual Effects                                        │
├─────────────────────────────────────────────────────────────┤
│  JavaScript Logic (game.js)                               │
│  ├── Story Engine                                          │
│  ├── Theme Controller                                      │
│  ├── Progress Manager                                      │
│  ├── Animation Controller                                  │
│  └── Local Storage Handler                                 │
├─────────────────────────────────────────────────────────────┤
│  Story Data (story-data.js)                               │
│  ├── Scene Definitions                                     │
│  ├── Choice Mappings                                       │
│  ├── Theme Intensity Levels                               │
│  └── Branch Structure                                      │
└─────────────────────────────────────────────────────────────┘
```

### Story Structure Mapping

Based on the provided story files, the narrative follows this structure with granular dialogue progression:

```
Opening (Shared Acts 1 & 2) - Each scene/dialogue as separate step
├── Scene 1: Phone call at 2:57am
├── Scene 2: Police notification
├── Scene 3: Hospital morgue
├── Scene 4: Three years later setup
├── Scene 5: Tea preparation incident
├── CHOICE POINT: "How did that happen?" 
    ├── Branch 1: "Rumi goes closer to the Window"
    │   ├── Dialogue 1: Cat incident discovery
    │   ├── Dialogue 2: Cleaning up
    │   ├── Dialogue 3: Dinner preparation
    │   ├── Dialogue 4: TV flickering
    │   ├── Dialogue 5: Bedroom scene
    │   ├── CHOICE POINT: Supernatural encounter
    │       ├── Sub-branch 1.1: "Rumi is the Killer" 
    │       │   ├── Each confession dialogue as step
    │       │   ├── Each flashback as step
    │       │   └── Each confrontation dialogue as step
    │       └── Sub-branch 1.2: "Marzia killed Jannat"
    │           ├── Each revelation dialogue as step
    │           ├── Each security footage scene as step
    │           └── Each final confrontation as step
    └── Branch 2: "Rumi calls out to the window"
        ├── Dialogue 1: Marzia's arrival
        ├── Dialogue 2: Suspicious behavior
        ├── Dialogue 3: Medication discussion
        ├── CHOICE POINT: Truth revelation method
            ├── Sub-branch 2.1: "The Perfect Crime Unravels"
            │   ├── Each interrogation dialogue as step
            │   ├── Each confession moment as step
            │   └── Each confrontation as step
            └── Sub-branch 2.2: "The Suppressed Truth"
                ├── Each memory recovery as step
                ├── Each realization dialogue as step
                └── Each final revelation as step
```

## Components and Interfaces

### 1. Story Engine Component

**Purpose:** Manages story progression, dialogue presentation, and branch navigation with granular scene control.

**Key Methods:**
- `loadScene(sceneId)` - Loads and displays a specific dialogue/scene
- `presentDialogue(dialogue)` - Displays dialogue with speaker and content
- `presentChoices(choices)` - Displays available player choices (continue or branch)
- `processChoice(choiceId)` - Handles player choice selection and navigation
- `getCurrentBranch()` - Returns current story branch information
- `getNextDialogue()` - Automatically progresses to next dialogue in sequence
- `isChoicePoint()` - Determines if current scene requires player decision

**Data Structure:**
```javascript
const storyScene = {
    id: "scene_001",
    title: "Chapter Title",
    content: "Story text content...",
    speaker: "RUMI", // Character speaking
    dialogueType: "narrative", // "dialogue", "narrative", "choice"
    choices: [
        { id: "continue", text: "Continue", nextScene: "scene_002" },
        { id: "choice_1", text: "Go closer to the window", nextScene: "branch1_001" },
        { id: "choice_2", text: "Call out to the window", nextScene: "branch2_001" }
    ],
    themeIntensity: 3, // 1-5 scale
    effects: ["typewriter", "flicker"],
    isChoicePoint: false // true for branching moments
}
```

### 2. Theme Controller Component

**Purpose:** Manages dynamic color theming based on story intensity and psychological elements.

**Theme Levels:**
1. **Calm (Level 1):** Soft blues and grays - Opening scenes
2. **Tension (Level 2):** Warmer tones, subtle oranges - Building suspense
3. **Anxiety (Level 3):** Deeper oranges and reds - Confrontation scenes
4. **Horror (Level 4):** Dark reds and blacks - Psychological horror elements
5. **Resolution (Level 5):** Varies by ending - Peaceful or tragic tones

**CSS Variables System:**
```css
:root {
    --primary-bg: #1a1a2e;
    --secondary-bg: #16213e;
    --text-color: #e94560;
    --accent-color: #f39c12;
    --shadow-color: rgba(233, 69, 96, 0.3);
}
```

### 3. Progress Manager Component

**Purpose:** Tracks player progress, manages save states, and provides navigation.

**Features:**
- Auto-save at decision points
- Chapter/scene selection menu
- Progress visualization
- Local storage persistence

### 4. Animation Controller Component

**Purpose:** Handles visual effects and transitions between scenes.

**Effect Types:**
- Typewriter text animation
- Fade transitions between scenes
- Screen flicker effects for supernatural elements
- Color transition animations for theme changes
- Subtle parallax effects for depth

## Data Models

### Scene Data Model

```javascript
class StoryScene {
    constructor(id, title, content, choices, themeIntensity, effects) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.choices = choices || [];
        this.themeIntensity = themeIntensity || 1;
        this.effects = effects || [];
        this.timestamp = null;
    }
}
```

### Progress Data Model

```javascript
class GameProgress {
    constructor() {
        this.currentScene = "opening";
        this.visitedScenes = [];
        this.choiceHistory = [];
        this.currentBranch = null;
        this.completedEndings = [];
        this.saveTimestamp = Date.now();
    }
}
```

### Theme State Model

```javascript
class ThemeState {
    constructor() {
        this.currentLevel = 1;
        this.targetLevel = 1;
        this.transitionDuration = 2000; // ms
        this.isTransitioning = false;
    }
}
```

## Error Handling

### Story Navigation Errors
- **Invalid Scene ID:** Fallback to last valid scene or opening
- **Missing Choice Data:** Display error message and provide navigation options
- **Corrupted Save Data:** Reset to opening with user notification

### Browser Compatibility
- **Local Storage Unavailable:** Graceful degradation to session-only progress
- **CSS Animation Unsupported:** Fallback to instant transitions
- **JavaScript Disabled:** Display static story text with basic navigation

### Performance Considerations
- **Large Story Content:** Lazy load scenes to reduce initial bundle size
- **Animation Performance:** Use CSS transforms and opacity for smooth animations
- **Memory Management:** Clean up unused scene data and event listeners

## Testing Strategy

### Unit Testing
- Story engine navigation logic
- Theme transition calculations
- Progress save/load functionality
- Choice validation and mapping

### Integration Testing
- Complete story path walkthroughs
- Theme changes during story progression
- Save/load functionality across browser sessions
- Cross-browser compatibility testing

### User Experience Testing
- Narrative flow and pacing
- Visual theme effectiveness
- Mobile responsiveness
- Accessibility compliance (WCAG 2.1)

### Performance Testing
- Page load times
- Animation smoothness
- Memory usage during extended play sessions
- Local storage efficiency

## Technical Implementation Notes

### File Structure
```
echo-of-her-game/
├── index.html          # Main HTML structure
├── css/
│   ├── styles.css      # Main stylesheet
│   └── themes.css      # Theme definitions
├── js/
│   ├── game.js         # Main game logic
│   ├── story-engine.js # Story management
│   ├── theme-controller.js # Theme system
│   └── story-data.js   # Story content
└── assets/
    ├── fonts/          # Custom fonts
    └── images/         # Background images/textures
```

### Browser Support
- **Primary:** Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Secondary:** Chrome 80+, Firefox 78+, Safari 13+
- **Graceful Degradation:** IE 11 (basic functionality only)

### Accessibility Features
- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- High contrast mode compatibility
- Screen reader friendly content structure

This design provides a solid foundation for creating an immersive, atmospheric interactive story game that effectively adapts "The Echo of Her" narrative into an engaging web experience.