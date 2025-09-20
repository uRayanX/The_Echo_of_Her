// Test script to verify story data is working
const fs = require('fs');
const path = require('path');

// Load the story data file
const storyDataPath = path.join(__dirname, 'js', 'story-data.js');
const storyDataContent = fs.readFileSync(storyDataPath, 'utf8');

// Execute the story data file to get STORY_DATA
eval(storyDataContent);

// Load the utils file
const utilsPath = path.join(__dirname, 'js', 'story-data-utils.js');
const utilsContent = fs.readFileSync(utilsPath, 'utf8');
eval(utilsContent);

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