# Design Document

## Overview

The homepage and chapter selection system will extend the existing "The Echo of Her" game architecture by adding two new primary views: a homepage that serves as the main entry point and a chapter selection interface for navigation. The design leverages the existing theme system, story engine, and save/load functionality while introducing new UI components and navigation flows.

## Architecture

### Component Structure

```
Homepage System
├── HomePage Component
│   ├── TitleScreen
│   ├── GameStateDetector
│   ├── NavigationButtons
│   └── AtmosphericBackground
├── ChapterSelection Component
│   ├── ChapterGrid
│   ├── ProgressIndicator
│   ├── SceneCard
│   └── BranchFilter
└── NavigationController
    ├── RouteManager
    ├── StatePreserver
    └── TransitionHandler
```

### Integration Points

The new system integrates with existing components:
- **StoryEngine**: For scene navigation and progress tracking
- **ThemeController**: For atmospheric styling and transitions
- **Game**: For save/load state management
- **CSS Theme System**: For consistent visual styling

## Components and Interfaces

### HomePage Component

**Purpose**: Main entry point providing game introduction and navigation options

**Key Features**:
- Atmospheric title display with "The Echo of Her" branding
- Dynamic background that reflects the story's mood
- Smart button display based on save state (New Game vs Continue)
- Smooth transitions to game or chapter selection

**Interface**:
```javascript
class HomePage {
    constructor(gameInstance)
    init()
    checkSaveState()
    displayButtons()
    handleNewGame()
    handleContinueGame()
    handleChapterSelection()
    applyAtmosphericStyling()
}
```

### ChapterSelection Component

**Purpose**: Interactive interface for navigating story branches and scenes

**Key Features**:
- Hierarchical display of story structure (Opening → Branches → Sub-branches)
- Visual progress indicators (completed, current, locked states)
- Branch-specific theming (horror red, crime blue, neutral gray)
- Scene preview with timestamps and choice history

**Interface**:
```javascript
class ChapterSelection {
    constructor(gameInstance)
    init()
    buildChapterStructure()
    renderSceneCards()
    handleSceneSelection()
    updateProgressDisplay()
    filterByBranch()
    applyBranchTheming()
}
```

### NavigationController

**Purpose**: Manages routing and state preservation between views

**Key Features**:
- URL-based routing for bookmarkable states
- Smooth transitions between homepage, chapter selection, and game
- State preservation during navigation
- Browser history integration

**Interface**:
```javascript
class NavigationController {
    constructor(gameInstance)
    init()
    navigateTo(view, params)
    preserveGameState()
    restoreGameState()
    handleBrowserNavigation()
}
```

## Data Models

### ViewState Model
```javascript
{
    currentView: 'homepage' | 'chapter-selection' | 'game',
    previousView: string,
    navigationHistory: Array<ViewTransition>,
    preservedGameState: GameState
}
```

### ChapterStructure Model
```javascript
{
    id: string,
    title: string,
    type: 'opening' | 'branch1' | 'branch2' | 'sub-branch',
    scenes: Array<SceneInfo>,
    completionStatus: 'locked' | 'available' | 'completed',
    lastVisited: timestamp,
    choiceHistory: Array<Choice>
}
```

### SceneInfo Model
```javascript
{
    id: string,
    title: string,
    timestamp: string,
    isVisited: boolean,
    isCurrentScene: boolean,
    branchType: string,
    themeIntensity: number,
    choicesMade: Array<string>
}
```

## User Interface Design

### Homepage Layout

```
┌─────────────────────────────────────┐
│           Atmospheric BG            │
│                                     │
│         THE ECHO OF HER            │
│       [Subtitle/Tagline]           │
│                                     │
│         [Start New Game]           │
│         [Continue Game]            │  (if save exists)
│         [Chapter Selection]        │  (if progress exists)
│                                     │
│         [Settings] [Credits]       │
└─────────────────────────────────────┘
```

### Chapter Selection Layout

```
┌─────────────────────────────────────┐
│  [← Back]    Chapter Selection      │
│                                     │
│  Progress: ████████░░ 80%          │
│                                     │
│  ┌─ Opening ─────────────────────┐  │
│  │ ○ The Call     ○ Hospital     │  │
│  │ ○ Three Years Later           │  │
│  └───────────────────────────────┘  │
│                                     │
│  ┌─ Branch 1: Horror ────────────┐  │
│  │ ● Window      ● Storm         │  │
│  │ ◐ Supernatural (current)      │  │
│  └───────────────────────────────┘  │
│                                     │
│  ┌─ Branch 2: Crime ─────────────┐  │
│  │ ○ Visitor     ○ Investigation │  │
│  │ ░ Truth       ░ Resolution    │  │
│  └───────────────────────────────┘  │
└─────────────────────────────────────┘

Legend: ● Completed ◐ Current ○ Available ░ Locked
```

## Visual Design System

### Theme Integration

The homepage and chapter selection will use the existing CSS custom properties system:

**Homepage Themes**:
- Default: Neutral, mysterious atmosphere
- Returning Player: Subtle hints of their last branch theme
- Completion: Warmer tones suggesting resolution

**Chapter Selection Themes**:
- Opening: Neutral grays and blues
- Branch 1 (Horror): Deep reds and shadows
- Branch 2 (Crime): Cool blues and noir styling
- Sub-branches: Blended themes based on parent branch

### Animation System

**Transitions**:
- Fade transitions between views (0.8s duration)
- Staggered animations for chapter cards (0.1s delays)
- Hover effects with subtle scaling and glow
- Progress bar animations with easing

**Atmospheric Effects**:
- Subtle particle effects on homepage background
- Pulsing glow for current scene indicators
- Shadow animations for horror-themed sections
- Typewriter effects for dramatic text reveals

## Error Handling

### Save State Errors
- Corrupted save data: Graceful fallback to new game option
- Missing scenes: Skip to nearest available scene
- Version conflicts: Migrate or reset with user confirmation

### Navigation Errors
- Invalid scene IDs: Redirect to chapter selection with error message
- Locked scene access: Show unlock requirements
- Browser compatibility: Fallback to basic navigation

### Performance Considerations
- Lazy loading of chapter data
- Image preloading for smooth transitions
- Debounced user interactions
- Memory cleanup on view changes

## Testing Strategy

### Unit Tests
- Component initialization and state management
- Navigation flow validation
- Save/load state preservation
- Theme application correctness

### Integration Tests
- Homepage to game navigation
- Chapter selection to specific scenes
- Browser back/forward button handling
- Cross-component state synchronization

### User Experience Tests
- First-time user flow (no save data)
- Returning user flow (with progress)
- Chapter selection usability
- Mobile responsiveness
- Accessibility compliance (keyboard navigation, screen readers)

### Performance Tests
- Load time measurements
- Animation smoothness
- Memory usage monitoring
- Large save file handling