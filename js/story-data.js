// Story Data Structure for "The Echo of Her"
// Each dialogue line is a separate scene with accurate timestamps and locations from original files

const STORY_DATA = {
    // Opening scenes (shared between all branches) - Exact from dialogue files
    opening: {
        id: 'opening',
        title: 'The Echo of Her',
        scenes: [
            {
                id: 'scene_001',
                title: 'The Awakening',
                timestamp: 'INT. RUMI\'S HOUSE - DINING ROOM - NIGHT (2:57 AM) March 14, 2022',
                speaker: 'NARRATOR',
                content: 'RUMI BIN IMRAN, disheveled and groggy, stumbles through his modest home. The silence is oppressive. He reaches for a glass of water when his PHONE RINGS, the sound cutting through the quiet like a blade.',
                themeIntensity: 1,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'scene_002' }
                ]
            },
            {
                id: 'scene_002',
                title: 'Unknown Number',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: '(checking phone) Unknown number... at this hour?',
                themeIntensity: 2,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'scene_003' }
                ]
            },
            {
                id: 'scene_003',
                title: 'Hesitation',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'He hesitates, then answers.',
                themeIntensity: 2,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'scene_004' }
                ]
            },
            {
                id: 'scene_004',
                title: 'Answering the Call',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: 'Hello?',
                themeIntensity: 2,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'scene_005' }
                ]
            },
            {
                id: 'scene_005',
                title: 'Police Officer',
                timestamp: 'CONTINUOUS',
                speaker: 'POLICE OFFICER (V.O.)',
                content: '(official tone) Am I speaking to Rumi Bin Imran?',
                themeIntensity: 3,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'scene_006' }
                ]
            },
            {
                id: 'scene_006',
                title: 'Confirmation',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: '(suddenly alert) Yes... who is this?',
                themeIntensity: 3,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'scene_007' }
                ]
            },
            {
                id: 'scene_007',
                title: 'The Accident',
                timestamp: 'CONTINUOUS',
                speaker: 'POLICE OFFICER (V.O.)',
                content: 'Sir, we\'re calling from Shyamoli Square. There\'s been a car accident.',
                themeIntensity: 4,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'scene_008' }
                ]
            },
            {
                id: 'scene_008',
                title: 'Gripping the Counter',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'Rumi\'s face drains of color. His hand grips the counter.',
                themeIntensity: 4,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'scene_009' }
                ]
            },
            {
                id: 'scene_009',
                title: 'Rumi\'s Response',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: 'And?',
                themeIntensity: 4,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'scene_010' }
                ]
            },
            {
                id: 'scene_010',
                title: 'The Terrible News',
                timestamp: 'CONTINUOUS',
                speaker: 'POLICE OFFICER (V.O.)',
                content: '(gentler) We found a deceased individual. We believe it\'s your wife.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'scene_011' }
                ]
            },
            {
                id: 'scene_011',
                title: 'The Glass Shatters',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'The glass slips from Rumi\'s hand, SHATTERING on the floor.',
                themeIntensity: 5,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'scene_012' }
                ]
            },
            {
                id: 'scene_012',
                title: 'The Morgue',
                timestamp: 'INT. LAB AID HOSPITAL - MORGUE - NIGHT (3:23 AM)',
                speaker: 'NARRATOR',
                content: 'Sterile fluorescent lights buzz overhead. Rumi stands frozen before a covered body on a gurney. A POLICE OFFICER nods to the MEDICAL EXAMINER, who slowly pulls back the sheet.',
                themeIntensity: 5,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'scene_013' }
                ]
            },
            {
                id: 'scene_013',
                title: 'Seeing Jannat',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'Rumi\'s knees buckle. It\'s JANNAT (22), his wife, her face peaceful but lifeless.',
                themeIntensity: 5,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'scene_014' }
                ]
            },
            {
                id: 'scene_014',
                title: 'Denial',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: '(whispering) No... no, this can\'t be...',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'scene_015' }
                ]
            },
            {
                id: 'scene_015',
                title: 'Touching Her Hand',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'He reaches out with trembling fingers to touch her hand.',
                themeIntensity: 5,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'scene_016' }
                ]
            },
            {
                id: 'scene_016',
                title: 'Breaking Down',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: '(breaking down) She was supposed to come home tonight... we were going to... we were going to...',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'scene_017' }
                ]
            },
            {
                id: 'scene_017',
                title: 'Collapse',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'His words dissolve into sobs. The room spins. He collapses.',
                themeIntensity: 5,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'scene_018' }
                ]
            },
            {
                id: 'scene_018',
                title: 'Father\'s House',
                timestamp: 'INT. RUMI\'S FATHER\'S HOUSE - BEDROOM - MORNING (8:40 AM)',
                speaker: 'NARRATOR',
                content: 'Rumi jolts awake on an unfamiliar bed. His FATHER (55) sits nearby, weathered face etched with concern.',
                themeIntensity: 3,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'scene_019' }
                ]
            },
            {
                id: 'scene_019',
                title: 'Looking for Jannat',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: '(panicked) Baba, where\'s Jannat? Where is she?',
                themeIntensity: 4,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'scene_020' }
                ]
            },
            {
                id: 'scene_020',
                title: 'Father\'s Silence',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'His father\'s silence speaks volumes. The terrible reality crashes back.',
                themeIntensity: 4,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'scene_021' }
                ]
            },
            {
                id: 'scene_021',
                title: 'Final Denial',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: '(screaming) NO! She can\'t be gone! She can\'t be!',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'scene_022' }
                ]
            },
            {
                id: 'scene_022',
                title: 'Complete Breakdown',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'He breaks down completely, his father holding him as he sobs.',
                themeIntensity: 4,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'scene_023' }
                ]
            },
            {
                id: 'scene_023',
                title: 'Three Years Later',
                timestamp: 'TITLE CARD: "THREE YEARS LATER" - INT. RUMI\'S HOUSE - LIVING ROOM - EVENING (6:40 PM) April 3, 2025',
                speaker: 'NARRATOR',
                content: 'The same house, but hollow now. RUMI (27) sits motionless on the sofa, still in his work clothes. The furniture remains unchanged, but everything feels like a museum to the dead.',
                themeIntensity: 2,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'scene_024' }
                ]
            },
            {
                id: 'scene_024',
                title: 'Looking at the Photo',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'He stares at a framed photo of him and Jannat on their wedding day. Her smile seems to mock his emptiness.',
                themeIntensity: 2,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'scene_025' }
                ]
            },
            {
                id: 'scene_025',
                title: 'Speaking to the Photo',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: '(to the photo) Three years, Jannat. Three years and I still can\'t... I can\'t let you go.',
                themeIntensity: 2,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'scene_026' }
                ]
            },
            {
                id: 'scene_026',
                title: 'Rising from the Sofa',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'He sets down the photo and rises, mechanical in his movements.',
                themeIntensity: 2,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'scene_027' }
                ]
            },
            {
                id: 'scene_027',
                title: 'Tea Preparation',
                timestamp: 'INT. RUMI\'S HOUSE - KITCHEN - CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'Rumi prepares tea with practiced routine. He places the kettle and TWO cups on a tray - an old habit he can\'t break.',
                themeIntensity: 2,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'scene_028' }
                ]
            },
            {
                id: 'scene_028',
                title: 'Setting the Tray',
                timestamp: 'INT. RUMI\'S HOUSE - LIVING ROOM - CONTINUOUS (6:51 PM)',
                speaker: 'NARRATOR',
                content: 'Rumi sets the tray on the coffee table and begins pouring tea into one cup. He reaches for biscuits.',
                themeIntensity: 2,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'scene_029' }
                ]
            },
            {
                id: 'scene_029',
                title: 'Almost Forgot',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: 'Almost forgot the—',
                themeIntensity: 2,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'scene_030' }
                ]
            },
            {
                id: 'scene_030',
                title: 'The Crash',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'A LOUD CRASH. He spins around. The kettle lies on the floor, tea spreading everywhere. A shadow moves past the window.',
                themeIntensity: 3,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'scene_031' }
                ]
            },
            {
                id: 'scene_031',
                title: 'How Did That Happen?',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: '(startled) How did that happen?',
                themeIntensity: 3,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'choice_point_001' }
                ]
            },
            {
                id: 'choice_point_001',
                title: 'The Choice',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'He approaches the window cautiously, peering through the curtains.',
                themeIntensity: 3,
                effects: ['fade-in'],
                isChoicePoint: true,
                choices: [
                    { 
                        id: 'branch1', 
                        text: 'Rumi goes closer to the window', 
                        nextScene: 'branch1_001',
                        branchType: 'horror'
                    },
                    { 
                        id: 'branch2', 
                        text: 'Rumi calls out "Who\'s there?"', 
                        nextScene: 'branch2_001',
                        branchType: 'crime'
                    }
                ]
            }
        ]
    },  
  // Branch 1: Horror Mystery Path - Exact timestamps from dialogue file
    branch1: {
        id: 'branch1',
        title: 'The Cat Incident',
        type: 'horror',
        scenes: [
            {
                id: 'branch1_001',
                title: 'Going to the Window',
                timestamp: 'INT. RUMI\'S HOUSE - LIVING ROOM - CONTINUOUS (7:40 PM)',
                speaker: 'NARRATOR',
                content: 'Rumi goes closer to the window and realizes the windows are closed, which is strange - he thought they were open. The curtains are swaying from wind outside.',
                themeIntensity: 2,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'branch1_002' }
                ]
            },
            {
                id: 'branch1_002',
                title: 'The Cat Jumps Out',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'As he opens the window, a CAT suddenly jumps out from behind the curtains and runs away into the night.',
                themeIntensity: 2,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'branch1_003' }
                ]
            },
            {
                id: 'branch1_003',
                title: 'Relief',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: '(startled, then relieved) Jesus... just a cat.',
                themeIntensity: 2,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'branch1_004' }
                ]
            },
            {
                id: 'branch1_004',
                title: 'Examining the Kettle',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'He looks at the mess - the plastic kettle on the floor, tea everywhere. Surprisingly, the kettle isn\'t cracked despite the fall.',
                themeIntensity: 2,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'branch1_005' }
                ]
            },
            {
                id: 'branch1_005',
                title: 'Durable Kettle',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: '(to himself) Huh. Didn\'t realize this thing was so durable. Five years and still going strong.',
                themeIntensity: 2,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'branch1_006' }
                ]
            },
            {
                id: 'branch1_006',
                title: 'Cleaning Up',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'He goes to get a mop and cleans up the spill. By the time he\'s done, his mood for tea has completely evaporated.',
                themeIntensity: 2,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'branch1_007' }
                ]
            },
            {
                id: 'branch1_007',
                title: 'Dinner Time',
                timestamp: 'INT. RUMI\'S HOUSE - DINING ROOM - NIGHT (8:30 PM)',
                speaker: 'NARRATOR',
                content: 'Rumi sits alone at the dining table with a simple meal - rice and vegetable curry. The silence in the house feels heavier tonight, more oppressive than usual.',
                themeIntensity: 2,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'branch1_008' }
                ]
            },
            {
                id: 'branch1_008',
                title: 'Empty Chair',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'He eats mechanically, lost in thought, occasionally glancing at the empty chair across from him where Jannat used to sit.',
                themeIntensity: 2,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'branch1_009' }
                ]
            },
            {
                id: 'branch1_009',
                title: 'Washing Dishes',
                timestamp: 'INT. RUMI\'S HOUSE - KITCHEN - NIGHT (8:45 PM)',
                speaker: 'NARRATOR',
                content: 'After dinner, Rumi washes the dishes. It\'s a routine he maintains religiously - he can\'t do it in the morning because there\'s no time before work.',
                themeIntensity: 2,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'branch1_010' }
                ]
            },
            {
                id: 'branch1_010',
                title: 'Reflection in Window',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'As he scrubs a plate, he catches his reflection in the window above the sink. For a moment, the face staring back looks like a stranger.',
                themeIntensity: 3,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'branch1_011' }
                ]
            },
            {
                id: 'branch1_011',
                title: 'TV Flickering',
                timestamp: 'INT. RUMI\'S HOUSE - LIVING ROOM - NIGHT (9:00 PM)',
                speaker: 'NARRATOR',
                content: 'Rumi settles in to watch TV, but the screen keeps flickering badly - much worse than the usual satellite issues. Static cuts through the picture every few seconds.',
                themeIntensity: 3,
                effects: ['flicker'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'branch1_012' }
                ]
            },
            {
                id: 'branch1_012',
                title: 'Checking the Rain',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'He goes to check the window and notices it\'s pouring rain outside. Heavy sheets of water cascade down the glass.',
                themeIntensity: 3,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'branch1_013' }
                ]
            },
            {
                id: 'branch1_013',
                title: 'When Did It Start?',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: '(surprised) When did that start? I didn\'t even hear it begin.',
                themeIntensity: 3,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'branch1_014' }
                ]
            },
            {
                id: 'branch1_014',
                title: 'Storm from Nowhere',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'The storm seems to have come out of nowhere. Lightning flashes, illuminating the empty street.',
                themeIntensity: 3,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'branch1_015' }
                ]
            },
            {
                id: 'branch1_015',
                title: 'Bedroom - Storm Intensifies',
                timestamp: 'INT. RUMI\'S HOUSE - BEDROOM - NIGHT (10:10 PM)',
                speaker: 'NARRATOR',
                content: 'The rain pounds against the windows with increasing intensity. Rumi lies in bed, unable to sleep despite his exhaustion. The room feels unusually cold for April.',
                themeIntensity: 4,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'branch1_016' }
                ]
            },
            {
                id: 'branch1_016',
                title: 'Thunder and Shadows',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'Thunder RUMBLES overhead, growing closer. Each flash of lightning throws strange shadows across the walls.',
                themeIntensity: 4,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'branch1_017' }
                ]
            },
            {
                id: 'branch1_017',
                title: 'Storm Came from Nowhere',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: '(pulling blankets tighter) Storm came out of nowhere...',
                themeIntensity: 4,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'branch1_018' }
                ]
            },
            {
                id: 'branch1_018',
                title: 'Sound from Inside',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'A particularly loud CRASH of thunder makes him jump. But then he realizes - that sound came from inside the house.',
                themeIntensity: 4,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'branch1_019' }
                ]
            },
            {
                id: 'branch1_019',
                title: 'What the Hell?',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: '(sitting up) What the hell?',
                themeIntensity: 4,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'branch1_020' }
                ]
            },
            {
                id: 'branch1_020',
                title: 'The Impossible Scene',
                timestamp: 'INT. RUMI\'S HOUSE - LIVING ROOM - CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'Rumi enters to find the impossible - the exact same scene as hours before. The kettle on the floor, tea everywhere, windows blown open by wind and rain.',
                themeIntensity: 5,
                effects: ['supernatural-flicker'],
                isChoicePoint: true,
                choices: [
                    { 
                        id: 'sub_branch1_1', 
                        text: 'Continue - The Suppressed Memory', 
                        nextScene: 'sub_branch1_1_001',
                        subBranchType: 'suppressed_memory'
                    },
                    { 
                        id: 'sub_branch1_2', 
                        text: 'Continue - The Vengeful Spirit', 
                        nextScene: 'sub_branch1_2_001',
                        subBranchType: 'vengeful_spirit'
                    }
                ]
            }
        ]
    },   
 // Branch 2: Crime Mystery Path - Exact timestamps from dialogue file
    branch2: {
        id: 'branch2',
        title: 'The Unexpected Visitor',
        type: 'crime',
        scenes: [
            {
                id: 'branch2_001',
                title: 'Who\'s There?',
                timestamp: 'INT. RUMI\'S HOUSE - LIVING ROOM - CONTINUOUS (7:40 PM)',
                speaker: 'RUMI',
                content: '(calling toward the window) Who\'s there?',
                themeIntensity: 3,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'branch2_002' }
                ]
            },
            {
                id: 'branch2_002',
                title: 'Marzia Appears',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'A figure steps into the porch light - DR. MARZIA RAHMAN, Rumi\'s childhood friend and personal physician. But something\'s off about her appearance. She\'s disheveled, breathing heavily, and there\'s a nervous energy about her that\'s unusual.',
                themeIntensity: 3,
                effects: ['noir-shadows', 'fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'branch2_003' }
                ]
            },
            {
                id: 'branch2_003',
                title: 'Marzia\'s Excuse',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: '(climbing through the window with forced cheerfulness) Sorry! Didn\'t mean to scare you. I knocked on the front door but you didn\'t answer.',
                themeIntensity: 3,
                effects: ['investigation-highlight', 'typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'branch2_004' }
                ]
            },
            {
                id: 'branch2_004',
                title: 'Rumi\'s Annoyance',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: '(confused and slightly annoyed) Marzia? You nearly gave me a heart attack. Why didn\'t you just call first?',
                themeIntensity: 3,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'branch2_005' }
                ]
            },
            {
                id: 'branch2_005',
                title: 'Marzia\'s Response',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: '(forced laugh) You know how you get on difficult days. I was worried you might not pick up.',
                themeIntensity: 3,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'branch2_006' }
                ]
            },
            {
                id: 'branch2_006',
                title: 'Surveying the Mess',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'She surveys the mess in the living room - the spilled tea, the overturned kettle.',
                themeIntensity: 3,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'branch2_007' }
                ]
            },
            {
                id: 'branch2_007',
                title: 'What Happened Here?',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: 'What happened here?',
                themeIntensity: 3,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'branch2_008' }
                ]
            },
            {
                id: 'branch2_008',
                title: 'Rumi\'s Explanation',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: 'I was making tea when I heard something outside. The whole setup just... fell over.',
                themeIntensity: 3,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'branch2_009' }
                ]
            },
            {
                id: 'branch2_009',
                title: 'Probably the Wind',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: '(too quickly) Probably the wind. It\'s picking up out there.',
                themeIntensity: 3,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'branch2_010' }
                ]
            },
            {
                id: 'branch2_010',
                title: 'Windows Were Closed',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'But Rumi notices the windows were closed. How could wind have caused this?',
                themeIntensity: 4,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'branch2_011' }
                ]
            },
            {
                id: 'branch2_011',
                title: 'Helping Clean Up',
                timestamp: 'INT. RUMI\'S HOUSE - LIVING ROOM - CONTINUOUS (8:00 PM)',
                speaker: 'NARRATOR',
                content: 'As Marzia helps clean up the mess, Rumi observes her more carefully. Her hands are trembling slightly, and she keeps glancing toward the windows.',
                themeIntensity: 4,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'branch2_012' }
                ]
            },
            {
                id: 'branch2_012',
                title: 'You Seem Nervous',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: 'You seem nervous tonight. Everything okay at the hospital?',
                themeIntensity: 4,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'branch2_013' }
                ]
            },
            {
                id: 'branch2_013',
                title: 'Marzia\'s Defense',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: '(defensive) I\'m fine. Just tired. Long shift.',
                themeIntensity: 4,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'branch2_014' }
                ]
            },
            {
                id: 'branch2_014',
                title: 'It\'s Thursday',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: 'It\'s Thursday. You don\'t usually work Thursdays.',
                themeIntensity: 4,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'branch2_015' }
                ]
            },
            {
                id: 'branch2_015',
                title: 'A Pause',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'A pause. Marzia\'s cleaning slows.',
                themeIntensity: 4,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'branch2_016' }
                ]
            },
            {
                id: 'branch2_016',
                title: 'Emergency Call-In',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: '(recovering) Emergency call-in. Dr. Hassan was sick.',
                themeIntensity: 4,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'branch2_017' }
                ]
            },
            {
                id: 'branch2_017',
                title: 'Hassan Retired',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'But Rumi knows Dr. Hassan retired last month. He mentioned it to Marzia himself.',
                themeIntensity: 5,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'branch2_018' }
                ]
            },
            {
                id: 'branch2_018',
                title: 'Growing Tension',
                timestamp: 'INT. RUMI\'S HOUSE - LIVING ROOM - CONTINUOUS (8:15 PM)',
                speaker: 'NARRATOR',
                content: 'The atmosphere grows tense. Marzia\'s explanations aren\'t adding up, and both of them know it.',
                themeIntensity: 5,
                effects: ['fade-in'],
                isChoicePoint: true,
                choices: [
                    { 
                        id: 'sub_branch2_1', 
                        text: 'Continue - The Perfect Crime Unravels', 
                        nextScene: 'sub_branch2_1_001',
                        subBranchType: 'perfect_crime'
                    },
                    { 
                        id: 'sub_branch2_2', 
                        text: 'Continue - The Suppressed Truth', 
                        nextScene: 'sub_branch2_2_001',
                        subBranchType: 'suppressed_truth'
                    }
                ]
            }
        ]
    },    
// Sub-branch 1.1: The Suppressed Memory (Horror/Supernatural Confession)
    sub_branch1_1: {
        id: 'sub_branch1_1',
        title: 'The Suppressed Memory',
        type: 'horror',
        subType: 'suppressed_memory',
        scenes: [
            {
                id: 'sub_branch1_1_001',
                title: 'This is Impossible',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: '(backing away, frightened) This is impossible... this happened hours ago... I cleaned this up...',
                themeIntensity: 5,
                effects: ['supernatural-flicker'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_002' }
                ]
            },
            {
                id: 'sub_branch1_1_002',
                title: 'Wrong Wind',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'The wind howls through the opening, but there\'s something wrong with the sound - it\'s too deliberate, too purposeful.',
                themeIntensity: 5,
                effects: ['supernatural-flicker'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_003' }
                ]
            },
            {
                id: 'sub_branch1_1_003',
                title: 'Jannat\'s Voice',
                timestamp: 'CONTINUOUS',
                speaker: 'JANNAT (O.S.)',
                content: '(gentle voice) Keep them open. The weather feels nice and cozy.',
                themeIntensity: 5,
                effects: ['supernatural-flicker'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_004' }
                ]
            },
            {
                id: 'sub_branch1_1_004',
                title: 'It Can\'t Be',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: '(whisper) No... it can\'t be...',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_005' }
                ]
            },
            {
                id: 'sub_branch1_1_005',
                title: 'Jannat Appears',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'He turns slowly. JANNAT sits on the sofa, but she\'s wrong - horrifically wrong. Blood covers the right side of her face, her skull caved in, brain matter visible through shattered bone.',
                themeIntensity: 5,
                effects: ['supernatural-flicker'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_006' }
                ]
            },
            {
                id: 'sub_branch1_1_006',
                title: 'You Know I Like Rain',
                timestamp: 'CONTINUOUS',
                speaker: 'JANNAT',
                content: '(smiling sadly) You know I like rain, don\'t you?',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_007' }
                ]
            },
            {
                id: 'sub_branch1_1_007',
                title: 'How Are You Here?',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: '(approaching cautiously) Jannat? How... how are you here?',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_008' }
                ]
            },
            {
                id: 'sub_branch1_1_008',
                title: 'Sitting Beside Her',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'He sits beside her, tears streaming down his face.',
                themeIntensity: 5,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_009' }
                ]
            },
            {
                id: 'sub_branch1_1_009',
                title: 'Hi',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: 'Hi.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_010' }
                ]
            },
            {
                id: 'sub_branch1_1_010',
                title: 'Look What You\'ve Done',
                timestamp: 'CONTINUOUS',
                speaker: 'JANNAT',
                content: 'Look what you\'ve done to me.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_011' }
                ]
            },
            {
                id: 'sub_branch1_1_011',
                title: 'Marzia Did This',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: '(shaking head frantically) No. Marzia did this. It was Marzia in the car accident.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_012' }
                ]
            },
            {
                id: 'sub_branch1_1_012',
                title: 'The Lie You\'ve Been Living',
                timestamp: 'CONTINUOUS',
                speaker: 'JANNAT',
                content: '(hollow laugh) Is that what you\'ve told yourself for three years? Is that the lie you\'ve been living?',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_013' }
                ]
            },
            {
                id: 'sub_branch1_1_013',
                title: 'TV Flickers On',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'The television flickers on by itself, showing static.',
                themeIntensity: 5,
                effects: ['supernatural-flicker'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_014' }
                ]
            },
            {
                id: 'sub_branch1_1_014',
                title: 'Watch What You Did',
                timestamp: 'CONTINUOUS',
                speaker: 'JANNAT',
                content: 'Watch. Watch what you did to me.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_015' }
                ]
            },
            {
                id: 'sub_branch1_1_015',
                title: 'Flashback Begins',
                timestamp: 'INT. RUMI\'S HOUSE - BEDROOM - FLASHBACK (6:40 PM, March 13, 2022)',
                speaker: 'NARRATOR',
                content: 'The static clears to reveal younger RUMI and JANNAT arguing violently. She\'s packing a suitcase.',
                themeIntensity: 5,
                effects: ['supernatural-flicker'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_016' }
                ]
            },
            {
                id: 'sub_branch1_1_016',
                title: 'I Can\'t Do This Anymore',
                timestamp: 'CONTINUOUS',
                speaker: 'JANNAT (FLASHBACK)',
                content: 'I can\'t do this anymore, Rumi. Your paranoia, your jealousy - it\'s destroying us. I need space.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_017' }
                ]
            },
            {
                id: 'sub_branch1_1_017',
                title: 'You\'re Leaving Me for Him',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI (FLASHBACK)',
                content: 'You\'re leaving me for him, aren\'t you? For that doctor you work with?',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_018' }
                ]
            },
            {
                id: 'sub_branch1_1_018',
                title: 'These Delusions',
                timestamp: 'CONTINUOUS',
                speaker: 'JANNAT (FLASHBACK)',
                content: 'There\'s nothing between me and Dr. Nabil! This is exactly what I\'m talking about - these delusions!',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_019' }
                ]
            },
            {
                id: 'sub_branch1_1_019',
                title: 'LIAR!',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI (FLASHBACK)',
                content: 'LIAR!',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_020' }
                ]
            },
            {
                id: 'sub_branch1_1_020',
                title: 'Grabbing Her Shoulders',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'He grabs her shoulders, shaking her violently.',
                themeIntensity: 5,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_021' }
                ]
            },
            {
                id: 'sub_branch1_1_021',
                title: 'I\'m Pregnant',
                timestamp: 'CONTINUOUS',
                speaker: 'JANNAT (FLASHBACK)',
                content: '(screaming) Those texts were about our baby, you idiot! I\'m pregnant! He\'s my obstetrician! I was going to surprise you on your birthday!',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_022' }
                ]
            },
            {
                id: 'sub_branch1_1_022',
                title: 'The Hammer',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'Rumi-present watches in horror as his past self leaves the room, returning with a hammer from his toolbox.',
                themeIntensity: 5,
                effects: ['supernatural-flicker'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_023' }
                ]
            },
            {
                id: 'sub_branch1_1_023',
                title: 'That\'s Not What Happened',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: '(present, backing away) No... that\'s not what happened...',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_024' }
                ]
            },
            {
                id: 'sub_branch1_1_024',
                title: 'The Savage Blow',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'On screen, Past-Rumi brings the hammer down on Jannat\'s skull with savage force. The crunch of bone is sickeningly loud.',
                themeIntensity: 5,
                effects: ['supernatural-flicker'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_025' }
                ]
            },
            {
                id: 'sub_branch1_1_025',
                title: 'You Beat Me to Death',
                timestamp: 'INT. RUMI\'S HOUSE - LIVING ROOM - PRESENT NIGHT',
                speaker: 'JANNAT',
                content: '(present, calmly) You beat me to death. You beat our unborn child to death. And then you called Marzia to help you cover it up.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_026' }
                ]
            },
            {
                id: 'sub_branch1_1_026',
                title: 'I Remember Now',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: '(collapsing) I... I remember now. The blood. The sound when I...',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_027' }
                ]
            },
            {
                id: 'sub_branch1_1_027',
                title: 'Two People',
                timestamp: 'CONTINUOUS',
                speaker: 'JANNAT',
                content: 'You killed two people that night, Rumi. Me and our son.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_028' }
                ]
            },
            {
                id: 'sub_branch1_1_028',
                title: 'What Have I Done?',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: '(sobbing) What have I done? What have I become?',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_029' }
                ]
            },
            {
                id: 'sub_branch1_1_029',
                title: 'More Footage',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'The television shows more footage - MARZIA arriving, helping to clean up, staging the car accident.',
                themeIntensity: 5,
                effects: ['supernatural-flicker'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_030' }
                ]
            },
            {
                id: 'sub_branch1_1_030',
                title: 'Medicating You',
                timestamp: 'CONTINUOUS',
                speaker: 'JANNAT',
                content: 'She\'s been medicating you for three years. Not for grief - to control your violent episodes. To keep you from remembering what you did.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_031' }
                ]
            },
            {
                id: 'sub_branch1_1_031',
                title: 'A Knock at the Door',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'A KNOCK at the door.',
                themeIntensity: 5,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_032' }
                ]
            },
            {
                id: 'sub_branch1_1_032',
                title: 'Marzia\'s Voice',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA (O.S.)',
                content: 'Rumi? Are you awake? I heard shouting.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_033' }
                ]
            },
            {
                id: 'sub_branch1_1_033',
                title: 'Keep the Monster Contained',
                timestamp: 'CONTINUOUS',
                speaker: 'JANNAT',
                content: 'She\'s here to keep the monster contained. The question is: what will you do with the truth?',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_034' }
                ]
            },
            {
                id: 'sub_branch1_1_034',
                title: 'Marzia Enters',
                timestamp: 'INT. RUMI\'S HOUSE - LIVING ROOM - CONTINUOUS (1:15 AM)',
                speaker: 'NARRATOR',
                content: 'MARZIA enters with her medical bag, eyes widening at Rumi\'s state.',
                themeIntensity: 5,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_035' }
                ]
            },
            {
                id: 'sub_branch1_1_035',
                title: 'Haven\'t Been Taking Medication',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: 'Rumi, you haven\'t been taking your medication, have you?',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_036' }
                ]
            },
            {
                id: 'sub_branch1_1_036',
                title: 'I Remember Everything',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: 'I remember everything, Marzia.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_037' }
                ]
            },
            {
                id: 'sub_branch1_1_037',
                title: 'Her Face Goes Pale',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'Her face goes pale.',
                themeIntensity: 5,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_038' }
                ]
            },
            {
                id: 'sub_branch1_1_038',
                title: 'The Hammer, The Blood',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: 'The hammer. The blood. The sound her skull made when I... I killed her. I killed my pregnant wife.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_039' }
                ]
            },
            {
                id: 'sub_branch1_1_039',
                title: 'Having an Episode',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: '(gently) You\'re having an episode, Rumi. Let me help you.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_040' }
                ]
            },
            {
                id: 'sub_branch1_1_040',
                title: 'Stop LYING!',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: '(roaring) Stop LYING! I saw it! Jannat showed me the truth!',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_041' }
                ]
            },
            {
                id: 'sub_branch1_1_041',
                title: 'Points to Empty Space',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'He points to where Jannat sits, but Marzia sees only empty space.',
                themeIntensity: 5,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_042' }
                ]
            },
            {
                id: 'sub_branch1_1_042',
                title: 'Preparing Syringe',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: '(preparing syringe) These delusions - you need your medication.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_043' }
                ]
            },
            {
                id: 'sub_branch1_1_043',
                title: 'Not Delusions',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: '(grabbing lamp, hurling it) They\'re not delusions! I killed her because I thought she was cheating. But she wasn\'t. She was pregnant with my child.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_044' }
                ]
            },
            {
                id: 'sub_branch1_1_044',
                title: 'Clinical Demeanor Cracking',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: '(clinical demeanor cracking) Yes. She was. And you\'ve spent three years blocking it out because your mind couldn\'t handle the guilt.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_045' }
                ]
            },
            {
                id: 'sub_branch1_1_045',
                title: 'Without the Medication',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: 'Without the medication, I remember the truth. That I\'m a murderer. That you helped me cover it up.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_046' }
                ]
            },
            {
                id: 'sub_branch1_1_046',
                title: 'I Had No Choice',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: '(tears streaming) I had no choice. I loved you. I thought I could keep you stable, keep you from hurting anyone else.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_047' }
                ]
            },
            {
                id: 'sub_branch1_1_047',
                title: 'Should Have Gone to Police',
                timestamp: 'INT. RUMI\'S HOUSE - LIVING ROOM - CONTINUOUS (1:45 AM)',
                speaker: 'MARZIA',
                content: 'I should have gone to the police. But I\'d already helped move the body. I was complicit. So I convinced myself that keeping you medicated was the best I could do.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_048' }
                ]
            },
            {
                id: 'sub_branch1_1_048',
                title: 'All These Years',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: 'All these years, I thought you were my friend.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_049' }
                ]
            },
            {
                id: 'sub_branch1_1_049',
                title: 'Your Jailer',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: 'I was your jailer. Your psychiatric nurse. Because you destroyed your conscience with the same hammer you used on Jannat\'s skull.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_050' }
                ]
            },
            {
                id: 'sub_branch1_1_050',
                title: 'Lunging at Her',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'Rumi lunges at her, hands around her throat.',
                themeIntensity: 5,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_051' }
                ]
            },
            {
                id: 'sub_branch1_1_051',
                title: 'Should Have Let Me Face Justice',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: 'You should have let me face justice!',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_052' }
                ]
            },
            {
                id: 'sub_branch1_1_052',
                title: 'This Isn\'t You',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: '(choking) Rumi, please - this isn\'t you, it\'s the illness!',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_053' }
                ]
            },
            {
                id: 'sub_branch1_1_053',
                title: 'This Is Who I Am',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: 'No. This is exactly who I am. A murderer.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_054' }
                ]
            },
            {
                id: 'sub_branch1_1_054',
                title: 'Jannat Appears Beside Him',
                timestamp: 'CONTINUOUS',
                speaker: 'JANNAT',
                content: '(appearing beside him) This won\'t bring me back. This won\'t bring our baby back.',
                themeIntensity: 5,
                effects: ['supernatural-flicker'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_055' }
                ]
            },
            {
                id: 'sub_branch1_1_055',
                title: 'Grip Loosens',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'Rumi\'s grip loosens. Marzia gasps for air.',
                themeIntensity: 5,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_056' }
                ]
            },
            {
                id: 'sub_branch1_1_056',
                title: 'She Tried to Help',
                timestamp: 'CONTINUOUS',
                speaker: 'JANNAT',
                content: 'She tried to help you, in her way. Killing her won\'t make things right.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_057' }
                ]
            },
            {
                id: 'sub_branch1_1_057',
                title: 'Get Out',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: '(releasing Marzia) Get out. Get out and call the police. Tell them I\'m confessing to the murder of Jannat.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_058' }
                ]
            },
            {
                id: 'sub_branch1_1_058',
                title: 'You\'re Not Well',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: '(staggering) Rumi, you\'re not well-',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_059' }
                ]
            },
            {
                id: 'sub_branch1_1_059',
                title: 'GET OUT!',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: '(grabbing kitchen knife) GET OUT! Call the police, or I swear I\'ll finish what I started.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_060' }
                ]
            },
            {
                id: 'sub_branch1_1_060',
                title: 'She Flees',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'She flees. Rumi turns to Jannat\'s ghost.',
                themeIntensity: 5,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_061' }
                ]
            },
            {
                id: 'sub_branch1_1_061',
                title: 'What Happens Now?',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: 'What happens now?',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_062' }
                ]
            },
            {
                id: 'sub_branch1_1_062',
                title: 'Now You Face the Truth',
                timestamp: 'CONTINUOUS',
                speaker: 'JANNAT',
                content: 'Now you face the truth.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_063' }
                ]
            },
            {
                id: 'sub_branch1_1_063',
                title: 'Police Sirens Approach',
                timestamp: 'INT. RUMI\'S HOUSE - LIVING ROOM - CONTINUOUS (2:30 AM)',
                speaker: 'NARRATOR',
                content: 'Police sirens approach. Jannat\'s ghost moves closer.',
                themeIntensity: 5,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_064' }
                ]
            },
            {
                id: 'sub_branch1_1_064',
                title: 'Is That Justice Enough?',
                timestamp: 'CONTINUOUS',
                speaker: 'JANNAT',
                content: 'They\'ll take you away. Prison, or a psychiatric facility. Is that justice enough?',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_065' }
                ]
            },
            {
                id: 'sub_branch1_1_065',
                title: 'Looking at the Knife',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'Rumi looks at the knife in his hand.',
                themeIntensity: 5,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_066' }
                ]
            },
            {
                id: 'sub_branch1_1_066',
                title: 'It\'s Not Enough',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: 'No. It\'s not enough.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_067' }
                ]
            },
            {
                id: 'sub_branch1_1_067',
                title: 'What Would Be Enough?',
                timestamp: 'CONTINUOUS',
                speaker: 'JANNAT',
                content: 'What would be enough?',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_068' }
                ]
            },
            {
                id: 'sub_branch1_1_068',
                title: 'The Same Pain',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: '(raising knife) The same pain I inflicted. The same destruction.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_069' }
                ]
            },
            {
                id: 'sub_branch1_1_069',
                title: 'Show Me You Understand',
                timestamp: 'CONTINUOUS',
                speaker: 'JANNAT',
                content: 'Show me you understand what you did to me.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_070' }
                ]
            },
            {
                id: 'sub_branch1_1_070',
                title: 'Drawing the Blade',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'Rumi draws the blade across his forearm. Blood wells up.',
                themeIntensity: 5,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_071' }
                ]
            },
            {
                id: 'sub_branch1_1_071',
                title: 'I\'m Sorry',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: '(sobbing, cutting again) I\'m sorry... I\'m so sorry...',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_072' }
                ]
            },
            {
                id: 'sub_branch1_1_072',
                title: 'Police Break Down Door',
                timestamp: 'INT. RUMI\'S HOUSE - LIVING ROOM - CONTINUOUS (2:45 AM)',
                speaker: 'NARRATOR',
                content: 'Police break down the door to find Rumi on his knees in a pool of blood, arms ribboned with wounds.',
                themeIntensity: 5,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_073' }
                ]
            },
            {
                id: 'sub_branch1_1_073',
                title: 'I Killed My Wife',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: '(calmly to officers) I killed my wife. Three years ago. I beat her to death with a hammer because I thought she was unfaithful. She was pregnant with my child.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_074' }
                ]
            },
            {
                id: 'sub_branch1_1_074',
                title: 'Need Medical Attention',
                timestamp: 'CONTINUOUS',
                speaker: 'POLICE OFFICER',
                content: 'Sir, you need medical attention.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_075' }
                ]
            },
            {
                id: 'sub_branch1_1_075',
                title: 'I Need to Confess',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: 'No. I need to confess now.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_076' }
                ]
            },
            {
                id: 'sub_branch1_1_076',
                title: 'Recounting Every Detail',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'As paramedics work to save him, Rumi recounts every detail. Throughout his confession, he looks to the corner where officers see nothing - but he sees Jannat, whole and unblemished, smiling sadly.',
                themeIntensity: 5,
                effects: ['supernatural-flicker'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_077' }
                ]
            },
            {
                id: 'sub_branch1_1_077',
                title: 'Final Apology',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: '(to her) I\'m sorry. I\'m so sorry.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_078' }
                ]
            },
            {
                id: 'sub_branch1_1_078',
                title: 'Psychiatric Ward - Two Weeks Later',
                timestamp: 'INT. PSYCHIATRIC WARD - DAY (Two Weeks Later)',
                speaker: 'NARRATOR',
                content: 'The ward is sterile, devoid of sharp objects. Rumi\'s arms are heavily bandaged. MARZIA visits in her professional capacity, bruises still visible on her throat.',
                themeIntensity: 3,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_079' }
                ]
            },
            {
                id: 'sub_branch1_1_079',
                title: 'The Police Found the Hammer',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: 'The police found the hammer. Hidden in the attic, just where you said. The DNA evidence confirmed everything.',
                themeIntensity: 3,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_080' }
                ]
            },
            {
                id: 'sub_branch1_1_080',
                title: 'Will You Be Charged?',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: 'Will you be charged?',
                themeIntensity: 3,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_081' }
                ]
            },
            {
                id: 'sub_branch1_1_081',
                title: 'Accessory After the Fact',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: 'Accessory after the fact. I\'ll lose my license. Serve some time.',
                themeIntensity: 3,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_082' }
                ]
            },
            {
                id: 'sub_branch1_1_082',
                title: 'I\'m Sorry',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: 'I\'m sorry. For dragging you into this.',
                themeIntensity: 3,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_083' }
                ]
            },
            {
                id: 'sub_branch1_1_083',
                title: 'I Made My Own Choices',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: 'I made my own choices.',
                themeIntensity: 3,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_084' }
                ]
            },
            {
                id: 'sub_branch1_1_084',
                title: 'Can She Rest Now?',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'As she leaves, Rumi calls after her.',
                themeIntensity: 3,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_085' }
                ]
            },
            {
                id: 'sub_branch1_1_085',
                title: 'Do You Think She Can Rest?',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: 'Do you think she can rest now? Now that the truth is known?',
                themeIntensity: 3,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_086' }
                ]
            },
            {
                id: 'sub_branch1_1_086',
                title: 'Jannat Is Gone',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: 'Jannat is gone, Rumi. The only ghosts are the ones in your mind.',
                themeIntensity: 3,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_087' }
                ]
            },
            {
                id: 'sub_branch1_1_087',
                title: 'But She\'s Still There',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'But as the door closes, Rumi feels her presence beside him. Jannat sits on his bed, whole and beautiful.',
                themeIntensity: 4,
                effects: ['supernatural-flicker'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_088' }
                ]
            },
            {
                id: 'sub_branch1_1_088',
                title: 'Still Here to Torment?',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: 'Are you still here to torment me?',
                themeIntensity: 4,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_089' }
                ]
            },
            {
                id: 'sub_branch1_1_089',
                title: 'Here to Help You Heal',
                timestamp: 'CONTINUOUS',
                speaker: 'JANNAT',
                content: 'No. I\'m here to help you heal. The truth is out. Justice is being served.',
                themeIntensity: 4,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_090' }
                ]
            },
            {
                id: 'sub_branch1_1_090',
                title: 'Will You Ever Forgive Me?',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: 'Will you ever forgive me?',
                themeIntensity: 4,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_091' }
                ]
            },
            {
                id: 'sub_branch1_1_091',
                title: 'Forgive Yourself',
                timestamp: 'CONTINUOUS',
                speaker: 'JANNAT',
                content: '(touching his cheek) Forgiveness isn\'t what you need from me. You need to forgive yourself enough to face your illness, to get the help you\'ve needed all along.',
                themeIntensity: 4,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_092' }
                ]
            },
            {
                id: 'sub_branch1_1_092',
                title: 'And Then?',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: 'And then?',
                themeIntensity: 4,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_093' }
                ]
            },
            {
                id: 'sub_branch1_1_093',
                title: 'You Live With It',
                timestamp: 'CONTINUOUS',
                speaker: 'JANNAT',
                content: '(beginning to fade) You live with what you\'ve done. You carry it. That\'s your sentence. That\'s your penance.',
                themeIntensity: 4,
                effects: ['supernatural-flicker'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_094' }
                ]
            },
            {
                id: 'sub_branch1_1_094',
                title: 'Something Shifts',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'As she disappears into the sunlight, Rumi feels something shift - not peace, but perhaps the foundation upon which peace might someday be built.',
                themeIntensity: 2,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_1_095' }
                ]
            },
            {
                id: 'sub_branch1_1_095',
                title: 'The Echo Lingers',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'The echo of her presence lingers, no longer an accusation but a reminder of the terrible truth he must never forget.',
                themeIntensity: 2,
                effects: ['fade-in'],
                choices: [
                    { id: 'end', text: 'THE END', nextScene: null }
                ]
            }
        ]
    },  
  // Sub-branch 1.2: The Vengeful Spirit (Horror/Supernatural Revenge)
    sub_branch1_2: {
        id: 'sub_branch1_2',
        title: 'The Vengeful Spirit',
        type: 'horror',
        subType: 'vengeful_spirit',
        scenes: [
            {
                id: 'sub_branch1_2_001',
                title: 'This is Impossible',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: '(backing away, frightened) This is impossible... this happened hours ago...',
                themeIntensity: 5,
                effects: ['supernatural-flicker'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_002' }
                ]
            },
            {
                id: 'sub_branch1_2_002',
                title: 'Frigidly Cold',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'The room grows frigidly cold. Frost begins forming on the windows despite the spring weather. His breath becomes visible in the suddenly arctic air.',
                themeIntensity: 5,
                effects: ['supernatural-flicker'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_003' }
                ]
            },
            {
                id: 'sub_branch1_2_003',
                title: 'What\'s Going On?',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: '(approaching window cautiously) What the hell is going on?',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_004' }
                ]
            },
            {
                id: 'sub_branch1_2_004',
                title: 'Hollow Voice',
                timestamp: 'CONTINUOUS',
                speaker: 'JANNAT (O.S.)',
                content: '(hollow, echoing voice) Keep them open. The weather feels nice and cozy.',
                themeIntensity: 5,
                effects: ['supernatural-flicker'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_005' }
                ]
            },
            {
                id: 'sub_branch1_2_005',
                title: 'Voice Distorted',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'Rumi freezes. The voice he\'s longed to hear, but wrong - distorted, otherworldly.',
                themeIntensity: 5,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_006' }
                ]
            },
            {
                id: 'sub_branch1_2_006',
                title: 'Jannat?',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: '(turning slowly) Jannat?',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_007' }
                ]
            },
            {
                id: 'sub_branch1_2_007',
                title: 'Nightmare Version',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'JANNAT (22) sits on the sofa, but she\'s a nightmare version of his beloved wife. Her skull is partially caved in, brain matter visible through shattered bone, her neck bent at an unnatural angle.',
                themeIntensity: 5,
                effects: ['supernatural-flicker'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_008' }
                ]
            },
            {
                id: 'sub_branch1_2_008',
                title: 'How Are You Here?',
                timestamp: 'INT. RUMI\'S HOUSE - LIVING ROOM - CONTINUOUS (11:30 PM)',
                speaker: 'RUMI',
                content: '(approaching cautiously) Jannat? How... how are you here?',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_009' }
                ]
            },
            {
                id: 'sub_branch1_2_009',
                title: 'Waiting for You to See',
                timestamp: 'CONTINUOUS',
                speaker: 'JANNAT',
                content: '(hollow, echoing quality) I\'ve been waiting for you to see me, Rumi. Really see me.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_010' }
                ]
            },
            {
                id: 'sub_branch1_2_010',
                title: 'Car Accident',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: 'I don\'t understand. You died in a car accident.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_011' }
                ]
            },
            {
                id: 'sub_branch1_2_011',
                title: 'What She Wanted Everyone to Believe',
                timestamp: 'CONTINUOUS',
                speaker: 'JANNAT',
                content: 'Did I? Or is that just what she wanted everyone to believe?',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_012' }
                ]
            },
            {
                id: 'sub_branch1_2_012',
                title: 'TV Flickers to Life',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'The temperature drops further. The television flickers to life, showing static that gradually resolves into grainy security camera footage.',
                themeIntensity: 5,
                effects: ['supernatural-flicker'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_013' }
                ]
            },
            {
                id: 'sub_branch1_2_013',
                title: 'Security Footage',
                timestamp: 'SECURITY FOOTAGE - HOSPITAL PARKING GARAGE - NIGHT (March 14, 2022)',
                speaker: 'NARRATOR',
                content: 'The timestamp shows the night Jannat died. JANNAT walks alone through the garage, distressed, on the phone.',
                themeIntensity: 5,
                effects: ['supernatural-flicker'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_014' }
                ]
            },
            {
                id: 'sub_branch1_2_014',
                title: 'I Was Calling You',
                timestamp: 'CONTINUOUS',
                speaker: 'JANNAT (PRESENT)',
                content: '(voice-over) I was calling you. I had discovered something terrible about Marzia, and I was trying to warn you.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_015' }
                ]
            },
            {
                id: 'sub_branch1_2_015',
                title: 'Marzia Appears',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'On screen, DR. MARZIA RAHMAN appears from behind, carrying something metallic.',
                themeIntensity: 5,
                effects: ['supernatural-flicker'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_016' }
                ]
            },
            {
                id: 'sub_branch1_2_016',
                title: 'You Didn\'t Answer',
                timestamp: 'CONTINUOUS',
                speaker: 'JANNAT (PRESENT)',
                content: 'But you didn\'t answer.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_017' }
                ]
            },
            {
                id: 'sub_branch1_2_017',
                title: 'Tire Iron',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'The two women begin arguing. Suddenly, Marzia raises a tire iron and brings it down on Jannat\'s head with savage force.',
                themeIntensity: 5,
                effects: ['supernatural-flicker'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_018' }
                ]
            },
            {
                id: 'sub_branch1_2_018',
                title: 'What Did You Discover?',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: '(horrified) What did you discover?',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_019' }
                ]
            },
            {
                id: 'sub_branch1_2_019',
                title: 'She Had Been Drugging You',
                timestamp: 'CONTINUOUS',
                speaker: 'JANNAT (PRESENT)',
                content: 'She had been drugging you, Rumi. For months. Small doses that made you more susceptible to suggestion.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_020' }
                ]
            },
            {
                id: 'sub_branch1_2_020',
                title: 'Gruesome Detail',
                timestamp: 'INT. RUMI\'S HOUSE - LIVING ROOM - CONTINUOUS (12:15 AM)',
                speaker: 'NARRATOR',
                content: 'The footage continues in gruesome detail. After dropping Jannat, Marzia doesn\'t stop. She continues beating Jannat\'s head, each strike more vicious.',
                themeIntensity: 5,
                effects: ['supernatural-flicker'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_021' }
                ]
            },
            {
                id: 'sub_branch1_2_021',
                title: 'Poisoning Your Mind',
                timestamp: 'CONTINUOUS',
                speaker: 'JANNAT',
                content: 'She told me she had been slowly poisoning your mind against me. Planting doubts about my faithfulness so that when she struck, you would believe any story.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_022' }
                ]
            },
            {
                id: 'sub_branch1_2_022',
                title: 'Why Would She Do This?',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: 'This is horrible. Why would she do this?',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_023' }
                ]
            },
            {
                id: 'sub_branch1_2_023',
                title: 'Because I Was Pregnant',
                timestamp: 'CONTINUOUS',
                speaker: 'JANNAT',
                content: 'Because she discovered I was pregnant.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_024' }
                ]
            },
            {
                id: 'sub_branch1_2_024',
                title: 'Traffic Camera Footage',
                timestamp: 'TRAFFIC CAMERA FOOTAGE - SHYAMOLI SQUARE - LATER THAT NIGHT',
                speaker: 'NARRATOR',
                content: 'The screen changes to show Marzia positioning Jannat\'s mutilated corpse behind the wheel.',
                themeIntensity: 5,
                effects: ['supernatural-flicker'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_025' }
                ]
            },
            {
                id: 'sub_branch1_2_025',
                title: 'I Was Awake',
                timestamp: 'CONTINUOUS',
                speaker: 'JANNAT',
                content: 'I was awake for part of it. The first few blows didn\'t kill me immediately. I felt her dragging my body, felt the gravel scraping against my exposed brain tissue.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_026' }
                ]
            },
            {
                id: 'sub_branch1_2_026',
                title: 'Sledgehammer',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'Marzia uses a sledgehammer to further destroy the car\'s interior and what remains of Jannat\'s skull.',
                themeIntensity: 5,
                effects: ['supernatural-flicker'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_027' }
                ]
            },
            {
                id: 'sub_branch1_2_027',
                title: 'Took a Sledgehammer',
                timestamp: 'CONTINUOUS',
                speaker: 'JANNAT',
                content: 'She took a sledgehammer to what was left of my head. She wanted to make sure no one would ever tell that she had beaten me to death first.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_028' }
                ]
            },
            {
                id: 'sub_branch1_2_028',
                title: 'Why Torture You?',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: '(tears streaming) Why? Why would she torture you like this?',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_029' }
                ]
            },
            {
                id: 'sub_branch1_2_029',
                title: 'Carrying Your Child',
                timestamp: 'CONTINUOUS',
                speaker: 'JANNAT',
                content: 'Because I was carrying your child, and she couldn\'t bear anyone else having the family she wanted with you.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_030' }
                ]
            },
            {
                id: 'sub_branch1_2_030',
                title: 'More Solid',
                timestamp: 'INT. RUMI\'S HOUSE - LIVING ROOM - CONTINUOUS (12:45 AM)',
                speaker: 'NARRATOR',
                content: 'Jannat\'s spirit becomes more solid. The room fills with jasmine mixed with metallic blood.',
                themeIntensity: 5,
                effects: ['supernatural-flicker'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_031' }
                ]
            },
            {
                id: 'sub_branch1_2_031',
                title: 'Found Out That Morning',
                timestamp: 'CONTINUOUS',
                speaker: 'JANNAT',
                content: 'I had just found out that morning. I was so excited. I bought tiny baby shoes to surprise you when you came home.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_032' }
                ]
            },
            {
                id: 'sub_branch1_2_032',
                title: 'Going to Have a Child?',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: 'We were going to have a child?',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_033' }
                ]
            },
            {
                id: 'sub_branch1_2_033',
                title: 'Pregnancy Checkup',
                timestamp: 'CONTINUOUS',
                speaker: 'JANNAT',
                content: 'But when I went to Marzia for a pregnancy checkup, she seemed devastated instead of happy. That\'s when I started putting pieces together.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_034' }
                ]
            },
            {
                id: 'sub_branch1_2_034',
                title: 'Mangled Face',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'She moves closer, her mangled face inches from his.',
                themeIntensity: 5,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_035' }
                ]
            },
            {
                id: 'sub_branch1_2_035',
                title: 'In Love With You',
                timestamp: 'CONTINUOUS',
                speaker: 'JANNAT',
                content: 'I realized she had been in love with you for years. Photos dating back to childhood, journals about you obsessively, detailed plans for eliminating obstacles.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_036' }
                ]
            },
            {
                id: 'sub_branch1_2_036',
                title: 'Planning This for Years?',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: 'She was planning this for a long time?',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_037' }
                ]
            },
            {
                id: 'sub_branch1_2_037',
                title: 'Final Trigger',
                timestamp: 'CONTINUOUS',
                speaker: 'JANNAT',
                content: 'For years. My pregnancy was the final trigger that pushed her over the edge.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_038' }
                ]
            },
            {
                id: 'sub_branch1_2_038',
                title: 'Front Door Opens',
                timestamp: 'INT. RUMI\'S HOUSE - LIVING ROOM - CONTINUOUS (1:15 AM)',
                speaker: 'NARRATOR',
                content: 'The front door opens. MARZIA\'S voice calls out.',
                themeIntensity: 5,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_039' }
                ]
            },
            {
                id: 'sub_branch1_2_039',
                title: 'Marzia\'s Voice',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA (O.S.)',
                content: 'Rumi? Are you awake? I brought your medication. I was worried about the storm.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_040' }
                ]
            },
            {
                id: 'sub_branch1_2_040',
                title: 'She\'s Here',
                timestamp: 'CONTINUOUS',
                speaker: 'JANNAT',
                content: '(urgent) She\'s here. She\'s been coming every night since I died, making sure you stay medicated, stay compliant.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_041' }
                ]
            },
            {
                id: 'sub_branch1_2_041',
                title: 'Different How?',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: 'Different how?',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_042' }
                ]
            },
            {
                id: 'sub_branch1_2_042',
                title: 'Three-Year Anniversary',
                timestamp: 'CONTINUOUS',
                speaker: 'JANNAT',
                content: 'Tonight is the three-year anniversary. She\'s not here to drug you. She\'s here to kill you the same way she killed me.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_043' }
                ]
            },
            {
                id: 'sub_branch1_2_043',
                title: 'Marzia Appears with Weapons',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'MARZIA appears in the doorway, but instead of her medical bag, she carries the same tire iron and a sledgehammer.',
                themeIntensity: 5,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_044' }
                ]
            },
            {
                id: 'sub_branch1_2_044',
                title: 'Hello Rumi',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: '(eerily calm) Hello, Rumi. I see you\'re having trouble sleeping again.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_045' }
                ]
            },
            {
                id: 'sub_branch1_2_045',
                title: 'Three Years Is Long Enough',
                timestamp: 'INT. RUMI\'S HOUSE - LIVING ROOM - CONTINUOUS (1:30 AM)',
                speaker: 'MARZIA',
                content: 'Three years is long enough to grieve, don\'t you think? Tonight, you join your beloved wife.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_046' }
                ]
            },
            {
                id: 'sub_branch1_2_046',
                title: 'What Are You Doing?',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: 'Marzia, what are you doing?',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_047' }
                ]
            },
            {
                id: 'sub_branch1_2_047',
                title: 'Three Years to Fall in Love',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: 'I gave you three years to fall in love with me. But you\'re still as obsessed with that dead bitch as the day I caved her skull in.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_048' }
                ]
            },
            {
                id: 'sub_branch1_2_048',
                title: 'She Planned This',
                timestamp: 'CONTINUOUS',
                speaker: 'JANNAT',
                content: '(to Rumi) She planned this from the beginning. Make you dependent for three years, then when you failed to love her, kill you the same brutal way.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_049' }
                ]
            },
            {
                id: 'sub_branch1_2_049',
                title: 'Beat Her to Death',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: 'Just like I beat her to death. I\'m going to crush your skull the same way, one savage blow at a time. But I\'ll make you last longer. She only took twelve hits to die. You\'re going to take twenty.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_050' }
                ]
            },
            {
                id: 'sub_branch1_2_050',
                title: 'Raising the Sledgehammer',
                timestamp: 'INT. RUMI\'S HOUSE - LIVING ROOM - CONTINUOUS (1:45 AM)',
                speaker: 'NARRATOR',
                content: 'Marzia raises the sledgehammer.',
                themeIntensity: 5,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_051' }
                ]
            },
            {
                id: 'sub_branch1_2_051',
                title: 'Know How She Died',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: 'I want you to know exactly how she died. I want you to experience every moment of agony I put her through.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_052' }
                ]
            },
            {
                id: 'sub_branch1_2_052',
                title: 'You\'re Insane',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: 'You\'re insane.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_053' }
                ]
            },
            {
                id: 'sub_branch1_2_053',
                title: 'I\'m in Love!',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: '(swinging) I\'m in love! If I can\'t have you in life, then in death you\'ll be free from her memory!',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_054' }
                ]
            },
            {
                id: 'sub_branch1_2_054',
                title: 'Jannat Becomes Corporeal',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'The hammer smashes into the wall as Rumi ducks. Suddenly, Jannat\'s spirit becomes corporeal, grabbing the sledgehammer handle.',
                themeIntensity: 5,
                effects: ['supernatural-flicker'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_055' }
                ]
            },
            {
                id: 'sub_branch1_2_055',
                title: 'Not If I Have Anything to Say',
                timestamp: 'CONTINUOUS',
                speaker: 'JANNAT',
                content: '(solid, real) Not if I have anything to say about it.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_056' }
                ]
            },
            {
                id: 'sub_branch1_2_056',
                title: 'Impossible',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: '(staggering backward, shocked) Impossible.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_057' }
                ]
            },
            {
                id: 'sub_branch1_2_057',
                title: 'Three Years of Rage',
                timestamp: 'INT. RUMI\'S HOUSE - LIVING ROOM - CONTINUOUS (2:00 AM)',
                speaker: 'JANNAT',
                content: 'Three years of rage, three years of unfinished business. You think death is the end? You think murder goes unpunished?',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_058' }
                ]
            },
            {
                id: 'sub_branch1_2_058',
                title: 'Wrestling the Sledgehammer',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'Jannat wrestles the sledgehammer away. Marzia pulls out the tire iron.',
                themeIntensity: 5,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_059' }
                ]
            },
            {
                id: 'sub_branch1_2_059',
                title: 'You\'re Not Real',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: 'You\'re not real. You\'re just his grief-induced hallucination.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_060' }
                ]
            },
            {
                id: 'sub_branch1_2_060',
                title: 'Why Are You So Afraid?',
                timestamp: 'CONTINUOUS',
                speaker: 'JANNAT',
                content: 'Then why are you so afraid?',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_061' }
                ]
            },
            {
                id: 'sub_branch1_2_061',
                title: 'More Terrifying',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'Jannat\'s spirit transforms, becoming more terrifying. Her wounds become more pronounced, brain matter dripping from her shattered skull.',
                themeIntensity: 5,
                effects: ['supernatural-flicker'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_062' }
                ]
            },
            {
                id: 'sub_branch1_2_062',
                title: 'Want to Know What It Felt Like?',
                timestamp: 'CONTINUOUS',
                speaker: 'JANNAT',
                content: '(hissing) You want to know what it felt like? To have your skull crushed piece by piece while you begged for mercy? To feel your baby die inside you with each blow?',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_063' }
                ]
            },
            {
                id: 'sub_branch1_2_063',
                title: 'Stay Away From Me!',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: '(screaming) Stay away from me!',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_064' }
                ]
            },
            {
                id: 'sub_branch1_2_064',
                title: 'Catches Tire Iron',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'She swings the tire iron wildly, but Jannat catches it mid-swing and raises the sledgehammer with supernatural strength.',
                themeIntensity: 5,
                effects: ['supernatural-flicker'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_065' }
                ]
            },
            {
                id: 'sub_branch1_2_065',
                title: 'First Blow',
                timestamp: 'INT. RUMI\'S HOUSE - LIVING ROOM - CONTINUOUS (2:15 AM)',
                speaker: 'NARRATOR',
                content: 'The first blow cracks Marzia\'s skull open. Blood and brain matter spray across the room as she falls to her knees, still conscious.',
                themeIntensity: 5,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_066' }
                ]
            },
            {
                id: 'sub_branch1_2_066',
                title: 'I Only Wanted to Love You',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: '(whimpering, blood pouring) Please... I only wanted to love you.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_067' }
                ]
            },
            {
                id: 'sub_branch1_2_067',
                title: 'This Is How You Showed Love?',
                timestamp: 'CONTINUOUS',
                speaker: 'JANNAT',
                content: 'This is how you showed love? By torturing an innocent woman and her unborn child to death?',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_068' }
                ]
            },
            {
                id: 'sub_branch1_2_068',
                title: 'Second Blow',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'The second blow caves in the left side of Marzia\'s head completely. Her left eye pops out, dangling by the optic nerve. She lives, gurgling on blood.',
                themeIntensity: 5,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_069' }
                ]
            },
            {
                id: 'sub_branch1_2_069',
                title: 'One More for Our Baby',
                timestamp: 'CONTINUOUS',
                speaker: 'JANNAT',
                content: '(raising hammer) One more, for our baby.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_070' }
                ]
            },
            {
                id: 'sub_branch1_2_070',
                title: 'Third Blow',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'The third blow turns Marzia\'s head into paste. Skull fragments, brain tissue, and blood explode across the room like a grotesque firework.',
                themeIntensity: 5,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_071' }
                ]
            },
            {
                id: 'sub_branch1_2_071',
                title: 'Finally Justice',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'Police sirens wail in the distance as Jannat\'s spirit begins to fade.',
                themeIntensity: 5,
                effects: ['supernatural-flicker'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_072' }
                ]
            },
            {
                id: 'sub_branch1_2_072',
                title: 'Finally Justice',
                timestamp: 'CONTINUOUS',
                speaker: 'JANNAT',
                content: '(whisper) Finally. Justice.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_073' }
                ]
            },
            {
                id: 'sub_branch1_2_073',
                title: 'Police Burst Through',
                timestamp: 'INT. RUMI\'S HOUSE - LIVING ROOM - CONTINUOUS (2:45 AM)',
                speaker: 'NARRATOR',
                content: 'Police burst through the door to find unimaginable carnage. Marzia lies dead, head completely destroyed. Blood and brain matter paint the walls.',
                themeIntensity: 5,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_074' }
                ]
            },
            {
                id: 'sub_branch1_2_074',
                title: 'Standing Over Her',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'Standing over her with the sledgehammer is RUMI.',
                themeIntensity: 5,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_075' }
                ]
            },
            {
                id: 'sub_branch1_2_075',
                title: 'She Killed My Wife',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: '(calmly) She killed my wife. She confessed everything before I stopped her.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_076' }
                ]
            },
            {
                id: 'sub_branch1_2_076',
                title: 'Drop the Weapon',
                timestamp: 'CONTINUOUS',
                speaker: 'POLICE OFFICER',
                content: 'Sir, drop the weapon and get on your knees.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_077' }
                ]
            },
            {
                id: 'sub_branch1_2_077',
                title: 'Evidence in Her Apartment',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: '(complying) In her medical bag, you\'ll find drugs she was using to control me. In her apartment, there\'s evidence. She kept trophies from my wife\'s murder.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_078' }
                ]
            },
            {
                id: 'sub_branch1_2_078',
                title: 'Police Station - Dawn',
                timestamp: 'INT. POLICE STATION - INTERROGATION ROOM - DAWN (5:00 AM)',
                speaker: 'NARRATOR',
                content: 'DETECTIVE sits across from Rumi, closing a folder of preliminary findings.',
                themeIntensity: 3,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_079' }
                ]
            },
            {
                id: 'sub_branch1_2_079',
                title: 'Disturbed Individual',
                timestamp: 'CONTINUOUS',
                speaker: 'DETECTIVE',
                content: 'We\'ve seen disturbed individuals, Mr. Bin Imran, but this... The level of premeditation, the years of manipulation...',
                themeIntensity: 3,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_080' }
                ]
            },
            {
                id: 'sub_branch1_2_080',
                title: 'What Happens Now?',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: 'What happens now?',
                themeIntensity: 3,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_081' }
                ]
            },
            {
                id: 'sub_branch1_2_081',
                title: 'Reopening Your Wife\'s Case',
                timestamp: 'CONTINUOUS',
                speaker: 'DETECTIVE',
                content: 'We\'re reopening your wife\'s case. We\'ll exhume her body. Given the evidence in Dr. Rahman\'s apartment, it\'s clear you acted in self-defense.',
                themeIntensity: 3,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_082' }
                ]
            },
            {
                id: 'sub_branch1_2_082',
                title: 'Going to Kill Me',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: 'She was going to kill me the same way she killed Jannat.',
                themeIntensity: 3,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_083' }
                ]
            },
            {
                id: 'sub_branch1_2_083',
                title: 'Free to Go',
                timestamp: 'CONTINUOUS',
                speaker: 'DETECTIVE',
                content: 'You\'re free to go home for now. We don\'t anticipate charges being filed against you.',
                themeIntensity: 3,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_084' }
                ]
            },
            {
                id: 'sub_branch1_2_084',
                title: 'Cemetery - Three Months Later',
                timestamp: 'EXT. CEMETERY - DAY (Three Months Later)',
                speaker: 'NARRATOR',
                content: 'Rumi stands beside two graves - Jannat\'s and a smaller one reading "Baby Bin Imran - Never Born But Always Loved." He places tiny baby shoes on the small mound.',
                themeIntensity: 2,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_085' }
                ]
            },
            {
                id: 'sub_branch1_2_085',
                title: 'I\'m Sorry',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: 'I\'m sorry I couldn\'t protect you both. But she can\'t hurt anyone anymore.',
                themeIntensity: 2,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_086' }
                ]
            },
            {
                id: 'sub_branch1_2_086',
                title: 'Warmth Envelops Him',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'As he turns to leave, warmth envelops him. The scent of jasmine fills the air. For a brief moment, he sees them - Jannat, whole and healthy, holding a small child with his eyes.',
                themeIntensity: 2,
                effects: ['supernatural-flicker'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_087' }
                ]
            },
            {
                id: 'sub_branch1_2_087',
                title: 'They Smile',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'They don\'t speak but smile before fading into the setting sun.',
                themeIntensity: 2,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_088' }
                ]
            },
            {
                id: 'sub_branch1_2_088',
                title: 'First Time in Three Years',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'For the first time in three years, the echo of her voice isn\'t filled with pain - it\'s a whisper of peace, of closure, of a promise that someday, they\'ll be together again.',
                themeIntensity: 2,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch1_2_089' }
                ]
            },
            {
                id: 'sub_branch1_2_089',
                title: 'Walking to His Car',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'Rumi walks to his car with steady steps. He has a life to rebuild, a truth to honor, and a future to face - not with manipulation\'s numbing fog, but with the clarity of knowing the whole, terrible truth.',
                themeIntensity: 1,
                effects: ['fade-in'],
                choices: [
                    { id: 'end', text: 'THE END', nextScene: null }
                ]
            }
        ]
    },    
// Sub-branch 2.1: The Perfect Crime Unravels (Crime Thriller)
    sub_branch2_1: {
        id: 'sub_branch2_1',
        title: 'The Perfect Crime Unravels',
        type: 'crime',
        subType: 'perfect_crime',
        scenes: [
            {
                id: 'sub_branch2_1_001',
                title: 'How Long Were You Outside?',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: 'Marzia, how long were you outside before you knocked?',
                themeIntensity: 5,
                effects: ['investigation-highlight'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_002' }
                ]
            },
            {
                id: 'sub_branch2_1_002',
                title: 'Just a Few Minutes',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: '(too casually) Just a few minutes. I was checking to see if your lights were on.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_003' }
                ]
            },
            {
                id: 'sub_branch2_1_003',
                title: 'From Outside the Window?',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: 'From outside the window? Not from the front of the house?',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_004' }
                ]
            },
            {
                id: 'sub_branch2_1_004',
                title: 'Doesn\'t Answer Immediately',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'She doesn\'t answer immediately, focusing intently on folding a dish towel.',
                themeIntensity: 5,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_005' }
                ]
            },
            {
                id: 'sub_branch2_1_005',
                title: 'Didn\'t Want to Disturb',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: 'I thought I saw you through the window and didn\'t want to disturb you if you were resting.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_006' }
                ]
            },
            {
                id: 'sub_branch2_1_006',
                title: 'But You Said',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: 'But you just said I wasn\'t answering the front door.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_007' }
                ]
            },
            {
                id: 'sub_branch2_1_007',
                title: 'Contradiction Hangs',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'The contradiction hangs in the air between them. Marzia sets down the towel with deliberate care.',
                themeIntensity: 5,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_008' }
                ]
            },
            {
                id: 'sub_branch2_1_008',
                title: 'Changing Subject',
                timestamp: 'INT. RUMI\'S HOUSE - LIVING ROOM - CONTINUOUS (8:30 PM)',
                speaker: 'MARZIA',
                content: '(changing subject) How are you feeling today? I know anniversaries can be... difficult.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_009' }
                ]
            },
            {
                id: 'sub_branch2_1_009',
                title: 'I\'m Managing',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: 'I\'m managing.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_010' }
                ]
            },
            {
                id: 'sub_branch2_1_010',
                title: 'Taking Your Medication?',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: 'Have you been taking your medication regularly?',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_011' }
                ]
            },
            {
                id: 'sub_branch2_1_011',
                title: 'Yes',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: 'Yes.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_012' }
                ]
            },
            {
                id: 'sub_branch2_1_012',
                title: 'Memory Supplements',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: 'All of it? The mood stabilizers and the memory supplements?',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_013' }
                ]
            },
            {
                id: 'sub_branch2_1_013',
                title: 'Memory Supplements',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'Memory supplements. That\'s what she calls them. But Rumi has never been entirely clear on why he needs medication to help with memory. His grief, yes. His sleep, yes. But memory?',
                themeIntensity: 5,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_014' }
                ]
            },
            {
                id: 'sub_branch2_1_014',
                title: 'Why Do I Take Medication for Memory?',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: 'Marzia, why do I take medication for memory?',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_015' }
                ]
            },
            {
                id: 'sub_branch2_1_015',
                title: 'Memory Fragmentation',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: '(clinical tone) Trauma can cause memory fragmentation. The medication helps prevent intrusive flashbacks and false memories from forming.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_016' }
                ]
            },
            {
                id: 'sub_branch2_1_016',
                title: 'False Memories of What?',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: 'False memories of what?',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_017' }
                ]
            },
            {
                id: 'sub_branch2_1_017',
                title: 'Ways You Might Have Saved Her',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: '(pause) Of things that might have been different. Ways you might have saved her. Your mind sometimes creates scenarios that didn\'t happen.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_018' }
                ]
            },
            {
                id: 'sub_branch2_1_018',
                title: 'Not Telling Everything',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'But something in her tone suggests she\'s not telling him everything.',
                themeIntensity: 5,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_019' }
                ]
            },
            {
                id: 'sub_branch2_1_019',
                title: 'Turning Point',
                timestamp: 'INT. RUMI\'S HOUSE - LIVING ROOM - CONTINUOUS (8:45 PM)',
                speaker: 'NARRATOR',
                content: 'The conversation has reached a turning point. Both Rumi and Marzia seem to be waiting for the other to reveal something.',
                themeIntensity: 5,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_020' }
                ]
            },
            {
                id: 'sub_branch2_1_020',
                title: 'Strange Dreams',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: 'I\'ve been having strange dreams lately.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_021' }
                ]
            },
            {
                id: 'sub_branch2_1_021',
                title: 'What Kind of Dreams?',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: '(alert) What kind of dreams?',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_022' }
                ]
            },
            {
                id: 'sub_branch2_1_022',
                title: 'About That Night',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: 'About that night. About things I can\'t quite remember.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_023' }
                ]
            },
            {
                id: 'sub_branch2_1_023',
                title: 'Reaches for Medical Bag',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'Marzia reaches for her medical bag - she always carries it when visiting him.',
                themeIntensity: 5,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_024' }
                ]
            },
            {
                id: 'sub_branch2_1_024',
                title: 'Adjust Your Dosage',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: 'Maybe we should adjust your dosage. Increase the memory stabilizers.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_025' }
                ]
            },
            {
                id: 'sub_branch2_1_025',
                title: 'Stop Taking Them',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: 'Or maybe I should stop taking them altogether. See what I remember.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_026' }
                ]
            },
            {
                id: 'sub_branch2_1_026',
                title: 'Clearly Alarms Her',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'The suggestion clearly alarms her.',
                themeIntensity: 5,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_027' }
                ]
            },
            {
                id: 'sub_branch2_1_027',
                title: 'Very Dangerous',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: 'That would be very dangerous, Rumi. Some memories are suppressed for good reasons.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_028' }
                ]
            },
            {
                id: 'sub_branch2_1_028',
                title: 'Police Call',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: 'I was on the phone with the police earlier today. Just a follow-up call.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_029' }
                ]
            },
            {
                id: 'sub_branch2_1_029',
                title: 'About What?',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: '(trying to appear casual) Oh? About what?',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_030' }
                ]
            },
            {
                id: 'sub_branch2_1_030',
                title: 'Anonymous Tip',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: 'They told me something interesting. The case was never officially closed. Recently, they received an anonymous tip about another car being seen near Shyamoli Square that night.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_031' }
                ]
            },
            {
                id: 'sub_branch2_1_031',
                title: 'Color Drains',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'The color drains from Marzia\'s face.',
                themeIntensity: 5,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_032' }
                ]
            },
            {
                id: 'sub_branch2_1_032',
                title: 'That\'s Impossible',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: 'That\'s impossible. It was a deserted road. It was raining. No one was there.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_033' }
                ]
            },
            {
                id: 'sub_branch2_1_033',
                title: 'Death Sentence',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'The words hang in the air like a death sentence.',
                themeIntensity: 5,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_034' }
                ]
            },
            {
                id: 'sub_branch2_1_034',
                title: 'How Would You Know?',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: '(voice dropping to whisper) How would you know no one was there, Marzia? The police report said you were on call at the hospital all night.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_035' }
                ]
            },
            {
                id: 'sub_branch2_1_035',
                title: 'Not Making Sense',
                timestamp: 'INT. RUMI\'S HOUSE - LIVING ROOM - CONTINUOUS (9:15 PM)',
                speaker: 'MARZIA',
                content: '(forcing smile) Rumi, you\'re not making sense. The grief is making you paranoid. Maybe you should take your medication.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_036' }
                ]
            },
            {
                id: 'sub_branch2_1_036',
                title: 'Call Detective Hassan',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: 'Maybe I should call Detective Hassan right now. Ask him about that anonymous tip.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_037' }
                ]
            },
            {
                id: 'sub_branch2_1_037',
                title: 'Mask Begins to Slip',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'Marzia\'s mask begins to slip. Her hands tremble as she sets down her teacup.',
                themeIntensity: 5,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_038' }
                ]
            },
            {
                id: 'sub_branch2_1_038',
                title: 'You Don\'t Want to Do That',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: 'You don\'t want to do that, Rumi.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_039' }
                ]
            },
            {
                id: 'sub_branch2_1_039',
                title: 'What Are You Afraid Of?',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: 'Why not? What are you afraid they\'ll find?',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_040' }
                ]
            },
            {
                id: 'sub_branch2_1_040',
                title: 'Voice Changing',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: '(voice changing, becoming colder) I\'m not afraid of anything. But you should be.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_041' }
                ]
            },
            {
                id: 'sub_branch2_1_041',
                title: 'Reaching into Handbag',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'She stands slowly, reaching into her large handbag by the door.',
                themeIntensity: 5,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_042' }
                ]
            },
            {
                id: 'sub_branch2_1_042',
                title: 'Charade Is Over',
                timestamp: 'INT. RUMI\'S HOUSE - LIVING ROOM - CONTINUOUS (9:45 PM)',
                speaker: 'NARRATOR',
                content: 'The charade is over. Marzia\'s expression shifts completely - the caring friend melting away to reveal something predatory and cold.',
                themeIntensity: 5,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_043' }
                ]
            },
            {
                id: 'sub_branch2_1_043',
                title: 'Smarter Than She Was',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: '(chilling smile) You were always smarter than she was.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_044' }
                ]
            },
            {
                id: 'sub_branch2_1_044',
                title: 'What Did You Just Say?',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: '(standing) What did you just say?',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_045' }
                ]
            },
            {
                id: 'sub_branch2_1_045',
                title: 'I Was There',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: 'Yes, I was there. I followed her. I watched her die. And I\'m the one who made sure she died.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_046' }
                ]
            },
            {
                id: 'sub_branch2_1_046',
                title: 'You Killed Her',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: '(barely breathing) You killed her.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_047' }
                ]
            },
            {
                id: 'sub_branch2_1_047',
                title: 'Corrected a Cosmic Error',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: '(voice dripping venom) I corrected a cosmic error! I loved you! While you were wasting your life on her, I was building a career, making myself worthy of you!',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_048' }
                ]
            },
            {
                id: 'sub_branch2_1_048',
                title: 'Blood-Stained Tire Iron',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'She pulls a blood-stained tire iron from her bag.',
                themeIntensity: 5,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_049' }
                ]
            },
            {
                id: 'sub_branch2_1_049',
                title: 'She Was a Placeholder',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: 'She was a placeholder, and her time was up.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_050' }
                ]
            },
            {
                id: 'sub_branch2_1_050',
                title: 'Activating Voice Recorder',
                timestamp: 'INT. RUMI\'S HOUSE - LIVING ROOM - CONTINUOUS (10:15 PM)',
                speaker: 'NARRATOR',
                content: 'Rumi subtly places his phone on the armrest, activating the voice recorder as Marzia continues her confession with horrifying pride.',
                themeIntensity: 5,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_051' }
                ]
            },
            {
                id: 'sub_branch2_1_051',
                title: 'Lured Her to Hospital',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: 'I lured her to the hospital parking garage. Told her I needed to give her a prenatal checkup.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_052' }
                ]
            },
            {
                id: 'sub_branch2_1_052',
                title: 'Prenatal?',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: '(shocked) Prenatal?',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_053' }
                ]
            },
            {
                id: 'sub_branch2_1_053',
                title: 'She Was Pregnant',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: '(theatrical gasp) Oh, did I forget to mention? She was pregnant, Rumi. Three months. She was going to tell you that night. She was carrying your son.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_054' }
                ]
            },
            {
                id: 'sub_branch2_1_054',
                title: 'World Collapses',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'Rumi feels the world collapse beneath him.',
                themeIntensity: 5,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_055' }
                ]
            },
            {
                id: 'sub_branch2_1_055',
                title: 'Couldn\'t Let Her Have That',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: 'I couldn\'t let her have that. So I took this tire iron to her head. I destroyed her beautiful face so you would forget her faster.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_056' }
                ]
            },
            {
                id: 'sub_branch2_1_056',
                title: 'Caresses the Weapon',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'She caresses the weapon lovingly.',
                themeIntensity: 5,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_057' }
                ]
            },
            {
                id: 'sub_branch2_1_057',
                title: 'Author of Your Freedom',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: 'Then I drove her to Shyamoli Square and staged the crash. I am the author of your freedom, Rumi.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_058' }
                ]
            },
            {
                id: 'sub_branch2_1_058',
                title: 'Moving Toward Door',
                timestamp: 'INT. RUMI\'S HOUSE - LIVING ROOM - CONTINUOUS (10:50 PM)',
                speaker: 'MARZIA',
                content: '(moving toward door) The pills I gave you weren\'t just for grief. They were to keep you in a fog. To keep you dependent. To keep you mine.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_059' }
                ]
            },
            {
                id: 'sub_branch2_1_059',
                title: 'Raises Tire Iron',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'She raises the tire iron menacingly.',
                themeIntensity: 5,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_060' }
                ]
            },
            {
                id: 'sub_branch2_1_060',
                title: 'Evidence of Devotion',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: 'I kept this as evidence of my devotion. I wanted it here tonight when you finally understood everything I\'ve done for you.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_061' }
                ]
            },
            {
                id: 'sub_branch2_1_061',
                title: 'You\'re Insane',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: '(backing away) You\'re insane.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_062' }
                ]
            },
            {
                id: 'sub_branch2_1_062',
                title: 'I\'M DEVOTED!',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: '(screaming) I\'M DEVOTED! And now you will finally thank me!',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_063' }
                ]
            },
            {
                id: 'sub_branch2_1_063',
                title: 'She Lunges',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'She lunges. Rumi throws a heavy glass tabletop, shattering it at her feet and making her stumble.',
                themeIntensity: 5,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_064' }
                ]
            },
            {
                id: 'sub_branch2_1_064',
                title: 'Kitchen Fight',
                timestamp: 'INT. RUMI\'S HOUSE - KITCHEN - CONTINUOUS (11:25 PM)',
                speaker: 'NARRATOR',
                content: 'Blinded by pain, Marzia swings the tire iron wildly, connecting with Rumi\'s ribs. He crashes into the refrigerator, gasping as something cracks inside his chest.',
                themeIntensity: 5,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_065' }
                ]
            },
            {
                id: 'sub_branch2_1_065',
                title: 'Kill You Slowly',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: '(voice guttural through ruined lips) I\'ll kill you slowly! I\'ll peel the skin from your bones the way you\'ve peeled it from my face!',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_066' }
                ]
            },
            {
                id: 'sub_branch2_1_066',
                title: 'Cast Iron Pan',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'She corners him, raising the tire iron for a killing blow. Rumi sees Jannat\'s face in his mind - alive, smiling, carrying the child he never knew existed. With desperate strength, he grabs a heavy cast iron pan.',
                themeIntensity: 5,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_067' }
                ]
            },
            {
                id: 'sub_branch2_1_067',
                title: 'Sickening Impact',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'The impact is sickening. The pan connects with Marzia\'s jaw, shattering it on contact. Blood and teeth spray across the kitchen tiles.',
                themeIntensity: 5,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_068' }
                ]
            },
            {
                id: 'sub_branch2_1_068',
                title: 'We Belong Together',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: '(choking on bone fragments) We... belong... together...',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_069' }
                ]
            },
            {
                id: 'sub_branch2_1_069',
                title: 'Sirens Wail',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'Neighbors have called police - sirens wail in the distance. Marzia advances on raw determination, face boiled, jaw shattered.',
                themeIntensity: 5,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_070' }
                ]
            },
            {
                id: 'sub_branch2_1_070',
                title: 'It\'s Over',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: '(cornered, breaking chair leg) It\'s over, Marzia!',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_071' }
                ]
            },
            {
                id: 'sub_branch2_1_071',
                title: 'Final Lunge',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'As she lunges one final time, he drives the splintered wood upward, catching her under the chin. It penetrates through her throat.',
                themeIntensity: 5,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_072' }
                ]
            },
            {
                id: 'sub_branch2_1_072',
                title: 'Blood Fountains',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'Blood fountains between them. Her eyes go wide with shock. The tire iron falls with a clatter.',
                themeIntensity: 5,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_073' }
                ]
            },
            {
                id: 'sub_branch2_1_073',
                title: 'Dying Whisper',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: '(dying whisper) I... only... wanted... you...',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_074' }
                ]
            },
            {
                id: 'sub_branch2_1_074',
                title: 'She Collapses',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'She collapses forward, dead.',
                themeIntensity: 5,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_075' }
                ]
            },
            {
                id: 'sub_branch2_1_075',
                title: 'Police Burst Through',
                timestamp: 'INT. RUMI\'S HOUSE - KITCHEN - CONTINUOUS (11:45 PM)',
                speaker: 'NARRATOR',
                content: 'Police burst through the front door, finding a nightmare scene. The kitchen is painted in blood and viscera. Marzia lies face-down in a crimson pool, chair leg protruding from her throat.',
                themeIntensity: 5,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_076' }
                ]
            },
            {
                id: 'sub_branch2_1_076',
                title: 'She Killed My Wife',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'Rumi sits against the wall, clutching broken ribs, phone in trembling hand - the audio recording still playing.',
                themeIntensity: 5,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_077' }
                ]
            },
            {
                id: 'sub_branch2_1_077',
                title: 'She Killed My Baby',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: '(simply) She killed my wife. She killed my baby.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_078' }
                ]
            },
            {
                id: 'sub_branch2_1_078',
                title: 'Put Your Hands Where We Can See',
                timestamp: 'CONTINUOUS',
                speaker: 'POLICE OFFICER',
                content: 'Sir, we need you to put your hands where we can see them.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_079' }
                ]
            },
            {
                id: 'sub_branch2_1_079',
                title: 'The Recording Has Her Confession',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: '(complying) The recording has her confession. Check her apartment - she kept evidence.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_080' }
                ]
            },
            {
                id: 'sub_branch2_1_080',
                title: 'Hospital Room - Dawn',
                timestamp: 'INT. HOSPITAL ROOM - DAWN (6:00 AM)',
                speaker: 'NARRATOR',
                content: 'Rumi lies in a hospital bed as DETECTIVE HASSAN (40s) sits nearby with a notepad.',
                themeIntensity: 3,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_081' }
                ]
            },
            {
                id: 'sub_branch2_1_081',
                title: 'Audio Recording Corroborates',
                timestamp: 'CONTINUOUS',
                speaker: 'DETECTIVE HASSAN',
                content: 'The audio recording corroborates everything. We searched Dr. Rahman\'s apartment and found... disturbing evidence.',
                themeIntensity: 3,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_082' }
                ]
            },
            {
                id: 'sub_branch2_1_082',
                title: 'What Kind of Evidence?',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: 'What kind of evidence?',
                themeIntensity: 3,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_083' }
                ]
            },
            {
                id: 'sub_branch2_1_083',
                title: 'Journals and Photos',
                timestamp: 'CONTINUOUS',
                speaker: 'DETECTIVE HASSAN',
                content: 'Journals documenting her obsession with you dating back years. Photos of you she\'d stolen. Medical records showing unauthorized prescriptions. And a lock box.',
                themeIntensity: 3,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_084' }
                ]
            },
            {
                id: 'sub_branch2_1_084',
                title: 'Detective Pauses',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'The detective pauses, clearly disturbed.',
                themeIntensity: 3,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_085' }
                ]
            },
            {
                id: 'sub_branch2_1_085',
                title: 'Tire Iron and Trophies',
                timestamp: 'CONTINUOUS',
                speaker: 'DETECTIVE HASSAN',
                content: 'Inside we found the original tire iron, still bearing traces of your wife\'s blood. Photos she took of the crime scene as trophies. And a prenatal ultrasound with your wife\'s name - with "OBSTACLE ELIMINATED" written across it in red ink.',
                themeIntensity: 3,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_086' }
                ]
            },
            {
                id: 'sub_branch2_1_086',
                title: 'So It\'s Over',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: '(closing eyes) So it\'s over.',
                themeIntensity: 3,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_087' }
                ]
            },
            {
                id: 'sub_branch2_1_087',
                title: 'Reopening Case',
                timestamp: 'CONTINUOUS',
                speaker: 'DETECTIVE HASSAN',
                content: 'We\'re reopening your wife\'s case. We\'ll exhume the body for proper autopsy. Given the evidence, it\'s clear you acted in self-defense tonight.',
                themeIntensity: 3,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_088' }
                ]
            },
            {
                id: 'sub_branch2_1_088',
                title: 'Cemetery - One Week Later',
                timestamp: 'EXT. CEMETERY - DAY (One Week Later)',
                speaker: 'NARRATOR',
                content: 'News vans line the street. Headlines visible on newspapers: "DOCTOR\'S DEADLY OBSESSION" and "MURDERED PREGNANT WIFE, DRUGGED HUSBAND FOR YEARS."',
                themeIntensity: 2,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_089' }
                ]
            },
            {
                id: 'sub_branch2_1_089',
                title: 'Ignoring Media Circus',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'Rumi stands alone at Jannat\'s grave, ignoring the media circus.',
                themeIntensity: 2,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_090' }
                ]
            },
            {
                id: 'sub_branch2_1_090',
                title: 'I Know the Truth Now',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: '(to gravestone) I know the truth now. All of it. About the baby, about what she did to you, about the three years of lies.',
                themeIntensity: 2,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_091' }
                ]
            },
            {
                id: 'sub_branch2_1_091',
                title: 'Jasmine Flowers',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'He places a small bouquet of jasmine flowers on the grave.',
                themeIntensity: 2,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_092' }
                ]
            },
            {
                id: 'sub_branch2_1_092',
                title: 'I\'m Sorry',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: 'I\'m sorry I couldn\'t protect you. I\'m sorry I never knew about our child.',
                themeIntensity: 2,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_093' }
                ]
            },
            {
                id: 'sub_branch2_1_093',
                title: 'Three Months Later',
                timestamp: 'EXT. CEMETERY - CONTINUOUS (Three Months Later)',
                speaker: 'NARRATOR',
                content: 'The media has moved on. Rumi stands beside two graves now - Jannat\'s and a smaller one reading "Baby Bin Imran - Never Born But Always Loved." He places tiny baby shoes on the small mound.',
                themeIntensity: 2,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_094' }
                ]
            },
            {
                id: 'sub_branch2_1_094',
                title: 'Truth Is Out',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: 'The truth is out now. She can\'t hurt anyone anymore. The whole world knows what she did.',
                themeIntensity: 2,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_095' }
                ]
            },
            {
                id: 'sub_branch2_1_095',
                title: 'Gentle Warmth',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'As he turns to leave, he feels a gentle warmth, like being embraced by sunlight. The scent of jasmine fills the air momentarily.',
                themeIntensity: 2,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_096' }
                ]
            },
            {
                id: 'sub_branch2_1_096',
                title: 'Brief Vision',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'For a brief moment, he sees them - Jannat, whole and healthy, holding a small child with his eyes. They don\'t speak but smile at him before fading into the light of the setting sun.',
                themeIntensity: 2,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_097' }
                ]
            },
            {
                id: 'sub_branch2_1_097',
                title: 'Rest Now',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: '(whisper) Rest now. Both of you.',
                themeIntensity: 2,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_098' }
                ]
            },
            {
                id: 'sub_branch2_1_098',
                title: 'First Time in Three Years',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'For the first time in three years, the echo of her voice in his mind isn\'t filled with questions or pain. It\'s a gentle whisper of peace, of closure, of love that transcends death.',
                themeIntensity: 2,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_099' }
                ]
            },
            {
                id: 'sub_branch2_1_099',
                title: 'Walking to His Car',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'Rumi walks to his car with steady steps. He has a life to rebuild, a truth to honor, and a future to face - not with the numbing fog of manipulation, but with the clarity that comes from finally knowing the whole, terrible truth.',
                themeIntensity: 1,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_1_100' }
                ]
            },
            {
                id: 'sub_branch2_1_100',
                title: 'Echo Comforts',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'The echo of her love will always be with him, but now it comforts rather than haunts.',
                themeIntensity: 1,
                effects: ['fade-in'],
                choices: [
                    { id: 'end', text: 'THE END', nextScene: null }
                ]
            }
        ]
    },   
 // Sub-branch 2.2: The Suppressed Truth (Psychological Crime)
    sub_branch2_2: {
        id: 'sub_branch2_2',
        title: 'The Suppressed Truth',
        type: 'crime',
        subType: 'suppressed_truth',
        scenes: [
            {
                id: 'sub_branch2_2_001',
                title: 'What Are You Doing Here?',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: '(confused) Marzia? What are you doing here so late?',
                themeIntensity: 3,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_002' }
                ]
            },
            {
                id: 'sub_branch2_2_002',
                title: 'I Was Worried',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: 'I was worried. Today is... well, you know what day it is.',
                themeIntensity: 3,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_003' }
                ]
            },
            {
                id: 'sub_branch2_2_003',
                title: 'Notices the Mess',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'She notices the spilled tea and broken kettle on the floor.',
                themeIntensity: 3,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_004' }
                ]
            },
            {
                id: 'sub_branch2_2_004',
                title: 'What Happened Here?',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: 'What happened here?',
                themeIntensity: 3,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_005' }
                ]
            },
            {
                id: 'sub_branch2_2_005',
                title: 'I\'m Not Sure',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: 'I... I\'m not sure. I was making tea and then... I think I heard something outside.',
                themeIntensity: 3,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_006' }
                ]
            },
            {
                id: 'sub_branch2_2_006',
                title: 'Clinical Concern',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'Marzia studies his face with clinical concern.',
                themeIntensity: 3,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_007' }
                ]
            },
            {
                id: 'sub_branch2_2_007',
                title: 'Taking Your Medication?',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: 'Rumi, have you been taking your medication?',
                themeIntensity: 3,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_008' }
                ]
            },
            {
                id: 'sub_branch2_2_008',
                title: 'Helping Clean Up',
                timestamp: 'INT. RUMI\'S HOUSE - LIVING ROOM - CONTINUOUS (8:15 PM)',
                speaker: 'NARRATOR',
                content: 'As Marzia helps clean up the mess, Rumi sits on the sofa, looking distant and confused.',
                themeIntensity: 3,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_009' }
                ]
            },
            {
                id: 'sub_branch2_2_009',
                title: 'Having Episodes Again',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: '(concerned) You\'re having one of your episodes again, aren\'t you? You seem disoriented.',
                themeIntensity: 3,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_010' }
                ]
            },
            {
                id: 'sub_branch2_2_010',
                title: 'I\'m Fine',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: '(hollow voice) I\'m fine. Just tired.',
                themeIntensity: 3,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_011' }
                ]
            },
            {
                id: 'sub_branch2_2_011',
                title: 'It\'s the Anniversary',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: 'It\'s the anniversary. It\'s understandable that today would be difficult for you.',
                themeIntensity: 3,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_012' }
                ]
            },
            {
                id: 'sub_branch2_2_012',
                title: 'Retrieving Pill Bottle',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'She moves to her medical bag, retrieving a pill bottle.',
                themeIntensity: 3,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_013' }
                ]
            },
            {
                id: 'sub_branch2_2_013',
                title: 'Need to Take Medication',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: 'But you need to take your medication, Rumi. It helps keep the bad memories from overwhelming you.',
                themeIntensity: 3,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_014' }
                ]
            },
            {
                id: 'sub_branch2_2_014',
                title: 'I Was Home, Right?',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: '(frowning, memory gaps troubling him) Marzia, that night... the night of the accident. I was home, right?',
                themeIntensity: 4,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_015' }
                ]
            },
            {
                id: 'sub_branch2_2_015',
                title: 'Of Course',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: '(voice slightly too quick) Yes, of course. You were here, asleep. The police called you, then you called me in a panic.',
                themeIntensity: 4,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_016' }
                ]
            },
            {
                id: 'sub_branch2_2_016',
                title: 'Everything Before Is Blank',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: 'I remember the morgue. But everything before that is... blank.',
                themeIntensity: 4,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_017' }
                ]
            },
            {
                id: 'sub_branch2_2_017',
                title: 'Trauma Response',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: '(handing him pills and water) It\'s a trauma response. Your mind is protecting you from the pain.',
                themeIntensity: 4,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_018' }
                ]
            },
            {
                id: 'sub_branch2_2_018',
                title: 'Troubling Thought',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'As Rumi swallows the pills, a troubling thought surfaces: What kind of pain needs this much protection?',
                themeIntensity: 4,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_019' }
                ]
            },
            {
                id: 'sub_branch2_2_019',
                title: 'Watching TV',
                timestamp: 'INT. RUMI\'S HOUSE - LIVING ROOM - CONTINUOUS (9:00 PM)',
                speaker: 'NARRATOR',
                content: 'As Marzia prepares his medication, Rumi stares at the black television screen. In the reflection, his face looks distorted. For a moment, he sees another image - his own face, contorted with rage.',
                themeIntensity: 4,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_020' }
                ]
            },
            {
                id: 'sub_branch2_2_020',
                title: 'That Night Again',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: '(suddenly) Marzia, that night... the night of the accident. I was home, right? You came and got me.',
                themeIntensity: 4,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_021' }
                ]
            },
            {
                id: 'sub_branch2_2_021',
                title: 'Yes Of Course',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: '(voice slightly too quick) Yes, of course. You were here, asleep. The police called you, then you called me in a panic. I drove you to the hospital.',
                themeIntensity: 4,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_022' }
                ]
            },
            {
                id: 'sub_branch2_2_022',
                title: 'A Fog',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: 'I remember the morgue. But everything before that is... blank. A fog.',
                themeIntensity: 4,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_023' }
                ]
            },
            {
                id: 'sub_branch2_2_023',
                title: 'For the Best',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: '(handing him pills and water) It\'s a trauma response. Your mind is protecting you from the pain. It\'s for the best.',
                themeIntensity: 4,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_024' }
                ]
            },
            {
                id: 'sub_branch2_2_024',
                title: 'Rogue Thought',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'As he swallows the pills, a rogue thought surfaces: Protecting me from what? The pain of loss, or the pain of knowledge?',
                themeIntensity: 4,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_025' }
                ]
            },
            {
                id: 'sub_branch2_2_025',
                title: 'Watching TV in Silence',
                timestamp: 'INT. RUMI\'S HOUSE - LIVING ROOM - CONTINUOUS (9:45 PM)',
                speaker: 'NARRATOR',
                content: 'They watch television in near silence. A news report about domestic violence catches Rumi\'s attention - a man who killed his wife upon discovering her affair.',
                themeIntensity: 4,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_026' }
                ]
            },
            {
                id: 'sub_branch2_2_026',
                title: 'Vivid Image Flashes',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'Suddenly, an image flashes in Rumi\'s mind, vivid and terrifying. JANNAT standing in their bedroom, her face defiant.',
                themeIntensity: 5,
                effects: ['psychological-distortion'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_027' }
                ]
            },
            {
                id: 'sub_branch2_2_027',
                title: 'Yes I Love Him',
                timestamp: 'CONTINUOUS',
                speaker: 'JANNAT (MEMORY)',
                content: '(screaming) Yes, I love him! And I\'m pregnant with his child!',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_028' }
                ]
            },
            {
                id: 'sub_branch2_2_028',
                title: 'Another Flash',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'Another flash - the heavy feel of a sledgehammer from his toolbox. The sickening crunch of bone. Blood spraying across floral wallpaper.',
                themeIntensity: 5,
                effects: ['psychological-distortion'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_029' }
                ]
            },
            {
                id: 'sub_branch2_2_029',
                title: 'The Wallpaper',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: '(gasping) The wallpaper.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_030' }
                ]
            },
            {
                id: 'sub_branch2_2_030',
                title: 'Sharp with Alarm',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: '(sharp with alarm) Rumi? What is it? You\'re pale as a sheet.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_031' }
                ]
            },
            {
                id: 'sub_branch2_2_031',
                title: 'Painted Over Wallpaper',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: '(staring at living room wall) We painted over the wallpaper in the bedroom. Why did we do that?',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_032' }
                ]
            },
            {
                id: 'sub_branch2_2_032',
                title: 'It Was Old',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: '(eyes darting nervously) It was old. You wanted a change after... after she was gone. To help you move on.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_033' }
                ]
            },
            {
                id: 'sub_branch2_2_033',
                title: 'Cover the Bloodstains',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: '(standing up) No. We painted it to cover the bloodstains.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_034' }
                ]
            },
            {
                id: 'sub_branch2_2_034',
                title: 'Going to Bedroom',
                timestamp: 'INT. RUMI\'S HOUSE - BEDROOM - CONTINUOUS (10:30 PM)',
                speaker: 'NARRATOR',
                content: 'Rumi stumbles toward the bedroom, Marzia following, pleading with him.',
                themeIntensity: 5,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_035' }
                ]
            },
            {
                id: 'sub_branch2_2_035',
                title: 'Not Thinking Clearly',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: 'Rumi, you\'re not thinking clearly! You\'re having a psychotic break!',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_036' }
                ]
            },
            {
                id: 'sub_branch2_2_036',
                title: 'Finding the Sledgehammer',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'He ignores her, going to the closet, digging until his hand closes around a sledgehammer handle. The memories flood back like a dam bursting.',
                themeIntensity: 5,
                effects: ['psychological-distortion'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_037' }
                ]
            },
            {
                id: 'sub_branch2_2_037',
                title: 'Coming Home Early',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'Coming home early. Jannat with another man in their bed. The confession of the affair, the baby that wasn\'t his. The blinding, consuming rage.',
                themeIntensity: 5,
                effects: ['psychological-distortion'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_038' }
                ]
            },
            {
                id: 'sub_branch2_2_038',
                title: 'I Killed Him Too',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: '(choked whisper, turning to face Marzia) I didn\'t just kill her. I killed him too. What did we do with his body, Marzia?',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_039' }
                ]
            },
            {
                id: 'sub_branch2_2_039',
                title: 'We Staged It',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: '(face crumpling, lie no longer sustainable) We staged it. Her on the street, him in J-Block. I helped you. You weren\'t... you weren\'t yourself.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_040' }
                ]
            },
            {
                id: 'sub_branch2_2_040',
                title: 'I Did It to Protect You',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: 'I did it to protect you!',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_041' }
                ]
            },
            {
                id: 'sub_branch2_2_041',
                title: 'Final Awful Truth',
                timestamp: 'INT. RUMI\'S HOUSE - BEDROOM - CONTINUOUS (11:00 PM)',
                speaker: 'NARRATOR',
                content: 'The final, awful truth settles between them like a poisonous cloud.',
                themeIntensity: 5,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_042' }
                ]
            },
            {
                id: 'sub_branch2_2_042',
                title: 'Let Me Believe I Was a Victim',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: '(knuckles white on sledgehammer handle) You let me believe I was a victim.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_043' }
                ]
            },
            {
                id: 'sub_branch2_2_043',
                title: 'I Love You',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: '(sobbing) I love you! I\'ve always loved you. I couldn\'t let them send you to prison!',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_044' }
                ]
            },
            {
                id: 'sub_branch2_2_044',
                title: 'Mirror of His Own Rage',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'In her desperate, twisted love, he sees a mirror of his own possessive rage that led to murder.',
                themeIntensity: 5,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_045' }
                ]
            },
            {
                id: 'sub_branch2_2_045',
                title: 'I Did What I Had to Do',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: 'I did what I had to do!',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_046' }
                ]
            },
            {
                id: 'sub_branch2_2_046',
                title: 'Didn\'t Want Me to Heal',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: 'You didn\'t want me to heal. You wanted me broken so you could hold the pieces together.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_047' }
                ]
            },
            {
                id: 'sub_branch2_2_047',
                title: 'Reaches for Syringe',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'She reaches for a syringe in her medical bag.',
                themeIntensity: 5,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_048' }
                ]
            },
            {
                id: 'sub_branch2_2_048',
                title: 'What Now Rumi?',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: 'What now, Rumi? We can go on as we have. I can increase the dosage. You can forget again.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_049' }
                ]
            },
            {
                id: 'sub_branch2_2_049',
                title: 'Looking at Syringe and Sledgehammer',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'He looks from the syringe to the sledgehammer. Forgetfulness was a prison. Truth was a death sentence. But it was his truth.',
                themeIntensity: 5,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_050' }
                ]
            },
            {
                id: 'sub_branch2_2_050',
                title: 'No More Lies',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: 'No more lies.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_051' }
                ]
            },
            {
                id: 'sub_branch2_2_051',
                title: 'Please Rumi',
                timestamp: 'INT. RUMI\'S HOUSE - BEDROOM - CONTINUOUS (11:15 PM)',
                speaker: 'MARZIA',
                content: '(panicked) Please, Rumi. Think about what you\'re doing. We\'ve kept this secret for three years. We can keep it forever.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_052' }
                ]
            },
            {
                id: 'sub_branch2_2_052',
                title: 'Impossibly Heavy',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'The sledgehammer feels impossibly heavy - not just from its weight, but from the memories it carries.',
                themeIntensity: 5,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_053' }
                ]
            },
            {
                id: 'sub_branch2_2_053',
                title: 'I Killed Them Both',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: '(more to himself) I killed them both. I came home early. I heard them in our bedroom...',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_054' }
                ]
            },
            {
                id: 'sub_branch2_2_054',
                title: 'Flashback Begins',
                timestamp: 'FLASHBACK - BEDROOM - NIGHT (March 13, 2022)',
                speaker: 'NARRATOR',
                content: 'Younger Rumi opens the bedroom door. JANNAT (22) and a MAN (30s) are in bed together. They freeze, caught.',
                themeIntensity: 5,
                effects: ['psychological-distortion'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_055' }
                ]
            },
            {
                id: 'sub_branch2_2_055',
                title: 'I Can Explain',
                timestamp: 'CONTINUOUS',
                speaker: 'JANNAT (FLASHBACK)',
                content: 'Rumi! I can explain—',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_056' }
                ]
            },
            {
                id: 'sub_branch2_2_056',
                title: 'How Long?',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI (FLASHBACK)',
                content: '(voice shaking with rage) How long?',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_057' }
                ]
            },
            {
                id: 'sub_branch2_2_057',
                title: 'Six Months',
                timestamp: 'CONTINUOUS',
                speaker: 'JANNAT (FLASHBACK)',
                content: '(climbing out of bed) Six months. I\'m pregnant, Rumi. It\'s his child.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_058' }
                ]
            },
            {
                id: 'sub_branch2_2_058',
                title: 'Look Man',
                timestamp: 'CONTINUOUS',
                speaker: 'MAN (FLASHBACK)',
                content: '(standing) Look, man, we didn\'t mean for you to find out this way—',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_059' }
                ]
            },
            {
                id: 'sub_branch2_2_059',
                title: 'Past-Rumi Returns with Sledgehammer',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'Past-Rumi disappears, returning with the sledgehammer.',
                themeIntensity: 5,
                effects: ['psychological-distortion'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_060' }
                ]
            },
            {
                id: 'sub_branch2_2_060',
                title: 'Please We Can Work This Out',
                timestamp: 'CONTINUOUS',
                speaker: 'JANNAT (FLASHBACK)',
                content: '(pleading) Rumi, please! We can work this out!',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_061' }
                ]
            },
            {
                id: 'sub_branch2_2_061',
                title: 'First Swing',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'The first swing takes the man in the temple. He drops instantly.',
                themeIntensity: 5,
                effects: ['psychological-distortion'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_062' }
                ]
            },
            {
                id: 'sub_branch2_2_062',
                title: 'NO! RUMI, NO!',
                timestamp: 'CONTINUOUS',
                speaker: 'JANNAT (FLASHBACK)',
                content: '(screaming, running) NO! RUMI, NO!',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_063' }
                ]
            },
            {
                id: 'sub_branch2_2_063',
                title: 'Catches Her in Hallway',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'He catches her in the hallway. The second swing ends her screams forever.',
                themeIntensity: 5,
                effects: ['psychological-distortion'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_064' }
                ]
            },
            {
                id: 'sub_branch2_2_064',
                title: 'Back to Present',
                timestamp: 'INT. RUMI\'S HOUSE - BEDROOM - PRESENT (11:30 PM)',
                speaker: 'RUMI',
                content: '(tears streaming) She told me she was pregnant with his child. That they were starting a new life together.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_065' }
                ]
            },
            {
                id: 'sub_branch2_2_065',
                title: 'She Deserved What She Got',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: '(step toward him) She betrayed you. She deserved what she got.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_066' }
                ]
            },
            {
                id: 'sub_branch2_2_066',
                title: 'What Did You Deserve?',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: '(sharp accusation) And what did you deserve, Marzia? You didn\'t call the police. You didn\'t try to stop me. You helped me. Why?',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_067' }
                ]
            },
            {
                id: 'sub_branch2_2_067',
                title: 'Loved You Since Childhood',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: '(complex emotion - devotion and possession) Because I\'ve loved you since we were children. I watched you waste that love on her, and she repaid you with betrayal.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_068' }
                ]
            },
            {
                id: 'sub_branch2_2_068',
                title: 'So You Saw an Opportunity',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: 'So you saw an opportunity.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_069' }
                ]
            },
            {
                id: 'sub_branch2_2_069',
                title: 'I Saw a Chance to Save You',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: 'I saw a chance to save you! I knew how to make it look like an accident. I knew how to help you forget.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_070' }
                ]
            },
            {
                id: 'sub_branch2_2_070',
                title: 'Bitter Laugh',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: '(bitter laugh) You didn\'t want me to forget to heal me. You wanted me to forget so I\'d be dependent on you.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_071' }
                ]
            },
            {
                id: 'sub_branch2_2_071',
                title: 'What Did We Do With Bodies?',
                timestamp: 'INT. RUMI\'S HOUSE - BEDROOM - CONTINUOUS (11:50 PM)',
                speaker: 'RUMI',
                content: 'What did we do with their bodies? Tell me everything. No more sedatives, no more half-truths.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_072' }
                ]
            },
            {
                id: 'sub_branch2_2_072',
                title: 'Professional Demeanor Crumbles',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'Marzia\'s professional demeanor crumbles. Her hands shake as she begins to speak.',
                themeIntensity: 5,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_073' }
                ]
            },
            {
                id: 'sub_branch2_2_073',
                title: 'You Killed Them Both Here',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: 'You killed them both in here. He died first - one blow to the temple. But Jannat... she tried to run. You caught her in the hallway.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_074' }
                ]
            },
            {
                id: 'sub_branch2_2_074',
                title: 'Clinical Detachment Returns',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'Her clinical detachment returns as she recounts the details.',
                themeIntensity: 5,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_075' }
                ]
            },
            {
                id: 'sub_branch2_2_075',
                title: 'Multiple Blunt Force Traumas',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: 'Multiple blunt force traumas to the cranium. Catastrophic brain injury. Death was immediate.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_076' }
                ]
            },
            {
                id: 'sub_branch2_2_076',
                title: 'And Then I Called You',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: 'And then I called you.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_077' }
                ]
            },
            {
                id: 'sub_branch2_2_077',
                title: 'You Were Incoherent',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: 'You were incoherent. Covered in blood. I came immediately. I knew what to do.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_078' }
                ]
            },
            {
                id: 'sub_branch2_2_078',
                title: 'Flicker of Pride',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'A flicker of pride crosses her features.',
                themeIntensity: 5,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_079' }
                ]
            },
            {
                id: 'sub_branch2_2_079',
                title: 'Cleaned You Up First',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: 'I cleaned you up first. Then we wrapped his body in plastic from the garage. Put him in my car trunk.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_080' }
                ]
            },
            {
                id: 'sub_branch2_2_080',
                title: 'And Jannat?',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: 'And Jannat?',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_081' }
                ]
            },
            {
                id: 'sub_branch2_2_081',
                title: 'Made It Look Like Car Crash',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: 'We made it look like she\'d been in his car. Like they were running away together and crashed. I used my medical knowledge to ensure the injuries matched a high-speed collision.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_082' }
                ]
            },
            {
                id: 'sub_branch2_2_082',
                title: 'Not a Grieving Widower',
                timestamp: 'INT. RUMI\'S HOUSE - LIVING ROOM - NIGHT (12:15 AM) April 4, 2025',
                speaker: 'NARRATOR',
                content: 'Rumi sinks onto the sofa, sledgehammer sliding from his grip. The full weight of his actions crushes down on him.',
                themeIntensity: 5,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_083' }
                ]
            },
            {
                id: 'sub_branch2_2_083',
                title: 'I\'m a Murderer',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: 'I\'m not a grieving widower. I\'m a murderer.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_084' }
                ]
            },
            {
                id: 'sub_branch2_2_084',
                title: 'Increase Your Medication',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: '(desperate) We can increase your medication. You can forget again. We can move away, start fresh.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_085' }
                ]
            },
            {
                id: 'sub_branch2_2_085',
                title: 'Did You Ever Feel Guilt?',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: 'Did you ever feel guilt? Even once in three years?',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_086' }
                ]
            },
            {
                id: 'sub_branch2_2_086',
                title: 'Guilt For What?',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: 'Guilt? For what? For protecting you? For loving you enough to save you from yourself?',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_087' }
                ]
            },
            {
                id: 'sub_branch2_2_087',
                title: 'Sees Her Clearly',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'In that moment, Rumi sees her clearly - not as his friend or caretaker, but as someone whose love had mutated into monstrous possession.',
                themeIntensity: 5,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_088' }
                ]
            },
            {
                id: 'sub_branch2_2_088',
                title: 'Calling the Police',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: '(quietly, reaching for phone) I\'m calling the police.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_089' }
                ]
            },
            {
                id: 'sub_branch2_2_089',
                title: 'Lunging, Knocking Phone Away',
                timestamp: 'CONTINUOUS',
                speaker: 'MARZIA',
                content: '(lunging, knocking phone away) You can\'t! I won\'t let you throw everything away!',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_090' }
                ]
            },
            {
                id: 'sub_branch2_2_090',
                title: 'Brief but Violent Struggle',
                timestamp: 'INT. RUMI\'S HOUSE - LIVING ROOM - CONTINUOUS (12:30 AM)',
                speaker: 'NARRATOR',
                content: 'The struggle is brief but violent. Marzia fights with desperate strength, clawing at his face, screaming about sacrifice and devotion.',
                themeIntensity: 5,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_091' }
                ]
            },
            {
                id: 'sub_branch2_2_091',
                title: 'Something Snaps',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'When she reaches for the fallen sledgehammer, something in Rumi snaps.',
                themeIntensity: 5,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_092' }
                ]
            },
            {
                id: 'sub_branch2_2_092',
                title: 'Doesn\'t Remember',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'He doesn\'t remember grabbing her throat. Doesn\'t remember squeezing until her eyes bulge and face turns purple. Doesn\'t remember the crack as her trachea collapses.',
                themeIntensity: 5,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_093' }
                ]
            },
            {
                id: 'sub_branch2_2_093',
                title: 'Awareness Returns',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'When awareness returns, Marzia lies motionless, eyes fixed on the ceiling. Her medical bag is spilled - pills, syringes, and the fiction of his innocence scattered like confetti.',
                themeIntensity: 5,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_094' }
                ]
            },
            {
                id: 'sub_branch2_2_094',
                title: 'Picks Up Phone',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'Rumi stares at what he\'s done, then picks up his phone with mechanical precision.',
                themeIntensity: 5,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_095' }
                ]
            },
            {
                id: 'sub_branch2_2_095',
                title: 'Emergency Services',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: '(dialing) Emergency services.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_096' }
                ]
            },
            {
                id: 'sub_branch2_2_096',
                title: 'Emergency Services Response',
                timestamp: 'CONTINUOUS',
                speaker: 'OPERATOR (V.O.)',
                content: 'Emergency services.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_097' }
                ]
            },
            {
                id: 'sub_branch2_2_097',
                title: 'Report a Murder',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: '(voice steady) I need to report a murder. Three murders, actually.',
                themeIntensity: 5,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_098' }
                ]
            },
            {
                id: 'sub_branch2_2_098',
                title: 'Police Station - Dawn',
                timestamp: 'INT. POLICE STATION - INTERROGATION ROOM - DAWN (6:00 AM)',
                speaker: 'NARRATOR',
                content: 'Dawn breaks through the windows. Rumi has been talking for hours, his voice raw from confession. DETECTIVE HASSAN sits across from him, recording everything.',
                themeIntensity: 3,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_099' }
                ]
            },
            {
                id: 'sub_branch2_2_099',
                title: 'Evidence Supports Story',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'The evidence supports his story. In Marzia\'s apartment, they find journals documenting her childhood obsession with Rumi. Medical records showing unauthorized prescriptions. A lock box containing trophies - Jannat\'s wedding ring, a blood-stained shirt, secret photos from the crime scene.',
                themeIntensity: 3,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_100' }
                ]
            },
            {
                id: 'sub_branch2_2_100',
                title: 'Reading Rights',
                timestamp: 'CONTINUOUS',
                speaker: 'DETECTIVE HASSAN',
                content: '(reading him rights) Rumi Bin Imran, you\'re under arrest for three counts of homicide...',
                themeIntensity: 3,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_101' }
                ]
            },
            {
                id: 'sub_branch2_2_101',
                title: 'Morning Light Strengthens',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'As morning light strengthens, Rumi feels neither relief nor redemption. Justice is being served, but it cannot resurrect the dead.',
                themeIntensity: 3,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_102' }
                ]
            },
            {
                id: 'sub_branch2_2_102',
                title: 'Prison Cell - Weeks Later',
                timestamp: 'INT. PRISON CELL - DAY (Weeks Later)',
                speaker: 'NARRATOR',
                content: 'The cell is small, sterile. Rumi sits on the narrow cot, alone with his memories at last.',
                themeIntensity: 2,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_103' }
                ]
            },
            {
                id: 'sub_branch2_2_103',
                title: 'Three Years of Lies',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'For three years, he lived a lie constructed by toxic devotion. Now, facing consequences, he\'s finally free from manipulation, false memories, and the drugs that kept him prisoner in his own mind.',
                themeIntensity: 2,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_104' }
                ]
            },
            {
                id: 'sub_branch2_2_104',
                title: 'Truth Is Better',
                timestamp: 'CONTINUOUS',
                speaker: 'RUMI',
                content: '(to himself) The truth of what I did will haunt me until I die. But the truth is better than the comfortable lie.',
                themeIntensity: 2,
                effects: ['typewriter'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_105' }
                ]
            },
            {
                id: 'sub_branch2_2_105',
                title: 'Thinks of Jannat',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'He thinks of Jannat - not as she was in death, but alive, laughing, real. Her voice will follow him into old age, into whatever afterlife awaits. But now it\'s her true voice he hears - not the distorted whisper planted in his drugged mind.',
                themeIntensity: 2,
                effects: ['fade-in'],
                choices: [
                    { id: 'continue', text: 'Continue', nextScene: 'sub_branch2_2_106' }
                ]
            },
            {
                id: 'sub_branch2_2_106',
                title: 'Cell Door Is Locked',
                timestamp: 'CONTINUOUS',
                speaker: 'NARRATOR',
                content: 'The cell door is locked, but for the first time in three years, there are no more lies.',
                themeIntensity: 1,
                effects: ['fade-in'],
                choices: [
                    { id: 'end', text: 'THE END', nextScene: null }
                ]
            }
        ]
    }
};

// Export the story data
if (typeof module !== 'undefined' && module.exports) {
    module.exports = STORY_DATA;
}
