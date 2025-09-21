# The Echo of Her - Interactive Branching Narrative

An immersive interactive story experience exploring themes of grief, memory, and the psychological aftermath of tragedy through multiple branching storylines.

---

## ⚠️ The following project **is a prebuild** for a *UIU* course project, *Web Programming (CSE 4165)*
- **Team: La Bella Squadra**

---

## 📖 Story Overview

**The Echo of Her** follows Rumi Bin Imran, a man haunted by the death of his wife Jannat three years ago. What begins as a simple evening at home quickly spirals into a complex narrative where reality, memory, and supernatural elements intertwine. The story branches into different genres and outcomes based on player choices, offering multiple perspectives on truth, guilt, and redemption.

### Core Narrative
- **Setting**: Dhaka, Bangladesh (2022-2025)
- **Protagonist**: Rumi Bin Imran, a grief-stricken widower
- **Key Characters**: Jannat (deceased wife), Dr. Marzia Rahman (childhood friend/physician)
- **Themes**: Guilt, memory suppression, psychological manipulation, supernatural justice

## 🌟 Features

### Multiple Story Branches
The narrative splits into distinct paths based on player choices:

1. **Branch 1: Horror/Supernatural Path** 
   - Rumi investigates strange occurrences in his home
   - Supernatural elements and ghostly manifestations
   - Two sub-branches exploring suppressed memories vs. vengeful spirits

2. **Branch 2: Crime/Mystery Path**
   - Focus on Dr. Marzia's suspicious behavior  
   - Investigation and psychological thriller elements
   - Two sub-branches: "The Perfect Crime" vs. "The Suppressed Truth"

### Rich Character Development
- **Rumi**: Complex protagonist dealing with trauma and fractured memories
- **Jannat**: Appears through flashbacks, memories, and supernatural manifestations
- **Marzia**: Childhood friend whose true motivations are gradually revealed

### Atmospheric Storytelling
- Detailed timestamps and scene descriptions
- Visual and audio effect cues for enhanced immersion
- Varying theme intensity levels for mood control
- Weather and environmental storytelling elements

## 🗂️ Repository Structure

```
├── js/
│   └── story-data.js          # Main interactive story data structure
├── css/                       # Styling and visual effects
├── The Echo of Her.md         # Complete story manuscript
├── Story Dialogues (Branch 1).md  # Branch 1 detailed dialogue
├── Story Dialogues (Branch 2).md  # Branch 2 detailed dialogue
├── index.html                 # Main story interface
├── debug.html                 # Development testing interface
└── Various test files         # Additional development tools
```

## 🚀 Getting Started

### For Readers
1. Open `index.html` in a web browser
2. Follow the interactive prompts to make story choices
3. Experience different outcomes by replaying with different decisions

### For Developers
1. Clone the repository
2. Examine `js/story-data.js` for the data structure
3. Use test files for debugging and development
4. Customize styling through CSS files

### Story Data Structure
```javascript
const STORY_DATA = {
    opening: {
        scenes: [/* Linear opening scenes */]
    },
    branch1: {
        type: 'horror',
        scenes: [/* Horror/supernatural path */]
    },
    branch2: {
        type: 'crime', 
        scenes: [/* Crime/mystery path */]
    }
    // Sub-branches for deeper story exploration
}
```

## 🎭 Story Paths & Endings

### Branch 1: The Cat Incident (Horror)
- **Sub-branch 1.1**: The Suppressed Memory - Rumi confronts his role as the killer
- **Sub-branch 1.2**: The Vengeful Spirit - Marzia revealed as the true murderer

### Branch 2: The Unexpected Visitor (Crime)  
- **Sub-branch 2.1**: The Perfect Crime Unravels - Marzia's conspiracy exposed
- **Sub-branch 2.2**: The Suppressed Truth - Rumi's forgotten crimes surface

Each path offers distinct revelations about the true circumstances of Jannat's death and explores different aspects of guilt, justice, and psychological trauma.

## 🎨 Technical Features

- **Responsive Design**: Works across different screen sizes
- **Interactive Choices**: Player decisions affect story progression
- **Visual Effects**: Atmospheric lighting and transition effects
- **Audio Cues**: Sound effect integration points
- **Theme System**: Adjustable mood and intensity levels
- **Debug Tools**: Built-in testing and development utilities

## 📚 Themes Explored

- **Memory and Truth**: How trauma affects perception and memory
- **Guilt and Redemption**: Different forms of justice and accountability  
- **Psychological Manipulation**: The power of drugs and gaslighting
- **Love and Obsession**: When devotion becomes destructive
- **Supernatural Justice**: Whether the dead can find peace through truth


