// Test script to verify story data is working
const fs = require('fs');
const path = require('path');

// Prepare isolated context for evaluating story data
const vm = require('vm');
const storyDataPath = path.join(__dirname, 'js', 'story-data.js');
const storyDataContent = fs.readFileSync(storyDataPath, 'utf8');

const sandbox = { console };
vm.createContext(sandbox);
vm.runInContext(`${storyDataContent}; this.__STORY_DATA__ = STORY_DATA;`, sandbox, {
    filename: 'story-data.js'
});

global.STORY_DATA = sandbox.__STORY_DATA__;

// Load the utils module after STORY_DATA is globally available
const StoryData = require('./js/story-data-utils.js');

// Test basic functionality
console.log('=== TESTING STORY DATA ===');

// Test getting a scene
const firstScene = StoryData.getScene('scene_001');
console.log('First scene:', firstScene ? firstScene.title : 'NOT FOUND');

// Test validation
const validation = StoryData.validateStoryData();
console.log('Validation result:', validation.isValid ? 'VALID' : 'INVALID');
if (!validation.isValid) {
    console.log('Errors:', validation.errors);
}

console.log('Stats:', validation.stats);

// Test getting branch scenes
const openingScenes = StoryData.getBranchScenes('opening');
console.log('Opening scenes count:', openingScenes.length);

// Test choice point
const choicePoint = StoryData.getScene('choice_point_001');
console.log('Choice point found:', choicePoint ? 'YES' : 'NO');
console.log('Is choice point:', choicePoint ? choicePoint.isChoicePoint : 'N/A');

console.log('=== TEST COMPLETE ===');