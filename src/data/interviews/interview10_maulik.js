// Interview 10: Maulik Raja - IT Professional, Lapsed Advanced User

export const maulikProfile = {
  name: 'Maulik Raja',
  age: '30',
  gender: 'Male',
  location: 'India',
  occupation: 'IT Professional (Mobile App Development)',
  userType: 'Lapsed Advanced',
  fitnessLevel: 'Currently Sedentary (Was Advanced)',
  goals: [
    'Previously achieved 115kg → 70-75kg transformation',
    'Currently no fitness goals',
    'Looking to regain motivation'
  ],
  challenges: [
    'Lack of motivation after returning from Singapore',
    'Slipped disc (L4-L5 gap reduced from 12mm to <2mm)',
    'Cultural environment shift',
    'Smoking habit',
    'Sedentary work routine (300-400 steps/day)'
  ],
  preferredActivities: [
    'Used to run 5km daily',
    'Used to workout 3-3.5 hours at midnight gym',
    'Learned from YouTube tutorials',
    'Prefers empty gyms (midnight)',
    'Never motivated for home workouts despite buying equipment'
  ],
  techSavvy: 'Very High',
  budget: 'Would not pay currently (not fitness-focused), but open if motivated',
  painPoints: [
    'Lost motivation completely after moving back to India',
    'Singapore culture inspired fitness, Indian environment lacks motivation',
    'Slipped disc became excuse not to workout',
    'Bought weights at home but never touched them',
    'Nutrition tracking fails for Indian food (dal, roti, sabzi portions)',
    'Wants recipe-based tracking with exact measurements',
    'Does not trust AI due to IT background',
    '"BioTrain" name sounds scary/invasive',
    'Dislikes freemium models - wants clear free vs paid',
    'Reminders create guilt, sometimes annoying',
    'Visual progress more important than external validation'
  ]
}

export const maulikInterview = {
  id: 'INT-010',
  date: '2024',
  duration: '70 minutes',
  interviewer: 'UX Research Team',
  transcript: `DETAILED INTERVIEW INSIGHTS:

**Background & Current Routine:**
- 30-year-old IT professional in mobile app development
- Wake up 7:30 AM, play with cats (only physical activity)
- Work from home 9:30 AM - 8:30 PM
- Evening drive with wife
- Lives on 9th floor, walks 300-400 steps/day
- Has been inactive since COVID

**Past Fitness Routine (Singapore):**
- Ran 5km daily + 3-3.5 hours gym workout
- Worked out at midnight (12 AM - 3:30 AM) when gym was empty
- Achieved massive transformation: 115kg → 70-75kg
- Followed strict diet: no sugar, lean protein only
- Used YouTube tutorials instead of trainer
- Motivation came from Singapore's fitness culture
- Saw blind man swimming daily - inspired him

**Motivation Loss:**
- Completely stopped after returning to India
- Culture shift was primary reason
- Slipped disc became "excuse" to avoid fitness
- Bought home equipment but never touched it
- No internal drive to workout at home

**Technology Use:**
- Used YouTube extensively for workout tutorials
- Tracked heart rate during cardio on treadmill
- Set reminders on phone (mixed feelings - helpful when willing, annoying/guilt-inducing when not)
- Used nutrition tracking app but failed for Indian homemade food
- Samsung Galaxy smartwatch but turned off all health notifications
- Family pushed for 10,000 steps/day tracking but guilt made him stop checking

**Nutrition Tracking Pain Point:**
- Major frustration: "Dal, roti, sabzi" portions impossible to track
- Homemade Indian food has no accurate nutritional data
- Used app briefly but stopped due to inaccuracy
- Wants RECIPE-BASED approach with exact measurements
- Example: "Use 2 spoons refined groundnut oil, this much tomato, etc."
- Prefers structured recipes over manual ingredient logging
- Took protein, creatine, pre-workout (never professionally recommended)

**AI & Privacy Concerns:**
- DOES NOT trust AI due to IT background
- Knows AI trained on data, can give false recommendations
- Worried about allergen suggestions for unknown ingredients
- Comfortable sharing basic data (blood group) but NOT intimate health data
- Fears data will be used to train models without consent
- Prefers recipe approach because ingredients listed upfront

**App Preferences:**
- Wants clear FREE vs PAID separation (not freemium with usage caps)
- Never explores apps beyond core functionality
- If focused on nutrition, won't explore workout features
- Dislikes video tutorials IN-app; prefers simple instructions
- Wants suggestions based on cravings/schedule (e.g., "You're craving kadai, try this recipe")
- Recipe variations keeping ingredients same would increase engagement
- Must consider taste preferences (he likes spicy food)

**"BioTrain" Name Feedback:**
- Describes it as "SCARY"
- "Bio" suggests molecular/cell level invasion
- Feels it will take too much personal information
- Concerned about data being used to train datasets
- Regardless of better outputs, the name creates fear
- Suggests avoiding "bio" or "smart" prefixes
- Wants non-mutant, soothing name

**Gamification:**
- Mixed feelings on streaks/badges
- Can be motivating OR guilt-inducing depending on mood
- How message is conveyed matters most
- "You missed your streak" = annoying
- Neutral/positive framing = helpful

**Other Insights:**
- Never consulted dietitian or trainer
- Would give hypothetical app a shot if free/reasonable price
- Needs TAILORED recommendations considering body attributes, diet, routine, schedule
- Raw ingredient tracking is MUST-HAVE for Indians
- Wants app to suggest products by composition, not brand
- Prefers private, self-paced experience
- Live chat with nutritionist might help as "head start" but won't fully rely on it
- Positive social influence worked in Singapore (culture matters most)
- Casting workout videos on TV helpful for general sessions, not personalized training`,
  
  insights: [
    {
      category: 'Cultural Motivation',
      insight: 'Singapore\'s fitness culture (government encouragement, gyms everywhere, seeing blind man swim daily) was sole motivation driver. Completely lost upon return to India.',
      priority: 'High',
      frequency: 'Unique but represents international market'
    },
    {
      category: 'Nutrition Tracking',
      insight: 'Recipe-based tracking with exact measurements (oil type, spoon count, ingredient weights) needed for Indian homemade food. Manual logging fails for "dal, roti, sabzi".',
      priority: 'Critical',
      frequency: '100% of Indian users struggle with this'
    },
    {
      category: 'AI Trust',
      insight: 'IT professionals deeply skeptical of AI. Knows about training data, false recommendations, allergen risks. Wants human-verified recipes, not AI suggestions.',
      priority: 'High',
      frequency: 'Tech-savvy segment (33% of users)'
    },
    {
      category: 'Product Naming',
      insight: '"BioTrain" name creates FEAR. Sounds invasive, molecular-level tracking, privacy concerns. Name must be soothing, not scientific.',
      priority: 'Critical',
      frequency: 'Affects first impression for all users'
    },
    {
      category: 'Home Workout Failure',
      insight: 'Bought equipment but never used. No motivation at home despite convenience. Needs gym environment or strong cultural push.',
      priority: 'Medium',
      frequency: 'Common post-pandemic experience'
    },
    {
      category: 'Freemium Models',
      insight: 'Strongly dislikes usage caps (e.g., "Track 15 days free, then pay"). Wants clear free vs paid. Either fully free or upfront paid.',
      priority: 'Medium',
      frequency: 'Business model preference'
    }
  ]
}

