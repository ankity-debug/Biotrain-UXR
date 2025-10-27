// Comprehensive Q&A Spreadsheet Data from all 4 interviews
// Maps standardized questionnaire to actual participant responses

export const questionnaire = [
  // Demographics & Background
  { id: 'Q1', category: 'Demographics', question: 'What is your name, age, and occupation?', journeyStage: 'Awareness' },
  { id: 'Q2', category: 'Demographics', question: 'Where are you located?', journeyStage: 'Awareness' },
  { id: 'Q3', category: 'Lifestyle', question: 'What does your typical day look like?', journeyStage: 'Awareness' },

  // Fitness Background
  { id: 'Q4', category: 'Fitness Background', question: 'Tell me about your fitness journey. When did you start?', journeyStage: 'Awareness' },
  { id: 'Q5', category: 'Fitness Background', question: 'What motivated you to start your fitness journey?', journeyStage: 'Awareness' },
  { id: 'Q6', category: 'Fitness Background', question: 'What are your current fitness goals?', journeyStage: 'Consideration' },
  { id: 'Q7', category: 'Fitness Background', question: 'How often do you work out per week?', journeyStage: 'Retention' },
  { id: 'Q8', category: 'Fitness Background', question: 'How long are your typical workout sessions?', journeyStage: 'Retention' },

  // Workout Preferences
  { id: 'Q9', category: 'Workout Preferences', question: 'Do you prefer working out at home or at the gym?', journeyStage: 'Consideration' },
  { id: 'Q10', category: 'Workout Preferences', question: 'Do you prefer working out alone or with others?', journeyStage: 'Consideration' },
  { id: 'Q11', category: 'Workout Preferences', question: 'What types of exercises do you enjoy?', journeyStage: 'Consideration' },
  { id: 'Q12', category: 'Workout Preferences', question: 'Have you worked with a personal trainer?', journeyStage: 'Consideration' },

  // Nutrition & Diet
  { id: 'Q13', category: 'Nutrition', question: 'Tell me about your current diet and eating habits', journeyStage: 'Retention' },
  { id: 'Q14', category: 'Nutrition', question: 'Do you track your nutrition? How?', journeyStage: 'Retention' },
  { id: 'Q15', category: 'Nutrition', question: 'What are your biggest challenges with nutrition?', journeyStage: 'Retention' },
  { id: 'Q16', category: 'Nutrition', question: 'Do you use any supplements?', journeyStage: 'Retention' },
  { id: 'Q17', category: 'Nutrition', question: 'Do you meal prep? What are the challenges?', journeyStage: 'Retention' },

  // Technology & Tracking
  { id: 'Q18', category: 'Technology', question: 'Do you use any fitness apps or trackers?', journeyStage: 'Consideration' },
  { id: 'Q19', category: 'Technology', question: 'What do you track? (steps, calories, workouts, etc.)', journeyStage: 'Retention' },
  { id: 'Q20', category: 'Technology', question: 'What do you like/dislike about current fitness apps?', journeyStage: 'Consideration' },
  { id: 'Q21', category: 'Technology', question: 'Do you use any wearable devices?', journeyStage: 'Consideration' },
  { id: 'Q22', category: 'Technology', question: 'Have you tried using AI tools for fitness?', journeyStage: 'Consideration' },

  // Challenges & Pain Points
  { id: 'Q23', category: 'Pain Points', question: 'What is your biggest fitness challenge?', journeyStage: 'Retention' },
  { id: 'Q24', category: 'Pain Points', question: 'What prevents you from being consistent?', journeyStage: 'Retention' },
  { id: 'Q25', category: 'Pain Points', question: 'How does work/life stress affect your fitness?', journeyStage: 'Retention' },
  { id: 'Q26', category: 'Pain Points', question: 'How does travel affect your routine?', journeyStage: 'Retention' },
  { id: 'Q27', category: 'Pain Points', question: 'Do you find fitness apps annoying? Why?', journeyStage: 'Retention' },

  // Motivation & Accountability
  { id: 'Q28', category: 'Motivation', question: 'What motivates you to stay consistent?', journeyStage: 'Retention' },
  { id: 'Q29', category: 'Motivation', question: 'Do you prefer self-motivation or external accountability?', journeyStage: 'Consideration' },
  { id: 'Q30', category: 'Motivation', question: 'Would you be interested in community features?', journeyStage: 'Consideration' },

  // Pricing & Budget
  { id: 'Q31', category: 'Pricing', question: 'How much do you currently spend on fitness per month?', journeyStage: 'Purchase' },
  { id: 'Q32', category: 'Pricing', question: 'How much would you pay for a fitness app?', journeyStage: 'Purchase' },
  { id: 'Q33', category: 'Pricing', question: 'What features would justify a higher price?', journeyStage: 'Purchase' }
]

export const interviewResponses = [
  // AMISH (Interview 1)
  {
    participant: 'Amish',
    age: 27,
    gender: 'Male',
    location: 'Dubai',
    userType: 'Advanced',
    responses: {
      'Q1': 'My name is Amish, I am from India, working in Dubai in e-commerce sector. My age is 27.',
      'Q2': 'Dubai',
      'Q3': 'I work in e-commerce, follow strict routine. Wake up early, work 8-9 hours, gym 6 days per week 2 hours, meal timing is important but I eat late at 11pm which I want to fix.',
      'Q4': '6-7 years fitness journey. Started in 2018 lockdown when gained 10kg. Lost weight in 1 year by going to gym consistently and following diet.',
      'Q5': 'Weight gain during COVID lockdown - gained 10kg eating junk food. Wanted to lose weight and improve health.',
      'Q6': 'Weight maintenance, muscle building, cardio fitness. Want personalized macros and late dinner timing (currently 11pm, want 8-9pm).',
      'Q7': '6 days per week',
      'Q8': '2 hours per session',
      'Q9': 'Gym 100%. Only did home workouts during lockdown out of necessity. Prefer gym environment.',
      'Q10': 'I prefer working out alone. I hate any social features in fitness apps. I am disciplined and self-motivated.',
      'Q11': 'Gym workouts (6 days), boxing (1-2 times/week), cycling occasionally',
      'Q12': 'Yes, currently working with PT who helps with form and provides workout and diet plans.',
      'Q13': 'Strict diet. Biggest problem is late dinner timing at 11pm. Want to shift to 8-9pm but work schedule makes it difficult.',
      'Q14': 'Yes, I track using MyFitnessPal app religiously. Track all meals and macros.',
      'Q15': 'Late dinner timing (eat at 11pm due to work). Want personalized guidance on meal timing. Current apps give generic advice.',
      'Q16': 'Yes, taking whey protein but not seeing results. Want guidance on whether to continue or change supplements.',
      'Q17': 'Do not meal prep much. Eat out or simple meals. Time is constraint for meal prep.',
      'Q18': 'Yes - MyFitnessPal for nutrition tracking, Apple Watch for activity tracking, some workout apps.',
      'Q19': 'Track everything - steps, calories burned, macros, protein intake, workouts, heart rate via Apple Watch.',
      'Q20': 'Like: Data tracking. Dislike: No integration between apps, no personalized guidance, generic advice, annoying notifications.',
      'Q21': 'Yes, Apple Watch. Trust the data 90-99%. Want all health data integrated in one place.',
      'Q22': 'Yes! I use ChatGPT heavily - trust it 90-99%. Ask fitness questions, meal ideas, workout advice. Would love AI fitness app if personalized.',
      'Q23': 'Late meal timing and lack of integrated personalized platform.',
      'Q24': 'Actually I am very consistent. My challenge is optimizing timing (meals, workouts) rather than consistency.',
      'Q25': 'Work does not really affect my fitness much. I have strong discipline. Even when busy, I make time.',
      'Q26': 'Travel disrupts routine significantly. Need travel-friendly workout and meal options.',
      'Q27': 'YES. Notifications are very annoying. I have internal clock, do not need reminders. Would prefer app without push notifications.',
      'Q28': 'Self-discipline and mental health benefits. Fitness helps me with focus and productivity at work.',
      'Q29': 'Self-motivation 100%. Do not need external accountability or social features. Actually dislike social features.',
      'Q30': 'NO. I hate community features. I want solo, private experience. Social features would make me not use the app.',
      'Q31': 'Gym membership, PT sessions, supplements, apps - approximately AED 800-900/month ($220-245/month)',
      'Q32': 'Would pay ₹15,000-20,000/month ($180-240/month) if app provides: integrated health data, AI personalization, meal timing guidance, no social features.',
      'Q33': 'Integration with Apple Health, AI personalized plans (not generic), macro optimization, meal timing guidance, NO SOCIAL FEATURES.'
    }
  },

  // ANIKET (Interview 2)
  {
    participant: 'Aniket',
    age: 'Mid-20s',
    gender: 'Male',
    location: 'India',
    userType: 'Intermediate',
    responses: {
      'Q1': 'My name is Aniket, mid-20s, I run family business in India.',
      'Q2': 'India',
      'Q3': 'Work in family business, gym 4 times per week for 1.5 hours, travel frequently for work which disrupts routine.',
      'Q4': '2 years gym experience. Started to gain weight as I was thin.',
      'Q5': 'Wanted to gain weight and build muscle. Was very thin, wanted to look better.',
      'Q6': 'Weight gain (muscle), body building, increase strength',
      'Q7': '4 times per week when not traveling',
      'Q8': '1.5 hours per session',
      'Q9': 'Gym definitely. Home workouts lack motivation. Gym environment helps with consistency.',
      'Q10': 'Prefer gym with partner. My friend comes with me which helps motivation. Not interested in large community.',
      'Q11': 'Weight training, compound exercises',
      'Q12': 'Not currently but interested in finding trainer through app marketplace. Need someone for form correction and guidance.',
      'Q13': 'Try to eat high protein for muscle gain. Struggle when traveling for business - cannot maintain meal timing and portions.',
      'Q14': 'Try to track mentally but not systematic. Too difficult to track everything.',
      'Q15': 'Biggest challenge is nutrition tracking and meal timing when traveling. Very hard to meet targets on road.',
      'Q16': 'No supplements currently',
      'Q17': 'Do not meal prep. Biggest challenge is consistency when traveling.',
      'Q18': 'Used Mi Band watch for 2-3 days only then stopped. Too much effort to maintain.',
      'Q19': 'Tried tracking steps and calories with Mi Band but stopped. Not consistent.',
      'Q20': 'Tracking is too much effort. Apps feel like extra work. Need something simpler.',
      'Q21': 'Tried Mi Band for 2-3 days. Stopped because charging, syncing felt like extra work.',
      'Q22': 'Yes tried ChatGPT for diet and workout advice. Found it helpful but not personalized to my body/goals.',
      'Q23': 'Nutrition tracking and consistency when traveling',
      'Q24': 'Business travel disrupts everything - meal timing, gym access, routine',
      'Q25': 'Work travel is the biggest disruptor. 9-5 office work would be easier to manage.',
      'Q26': 'Travel is my biggest challenge. Need travel-friendly workouts and meal options.',
      'Q27': 'Yes notifications are annoying. I keep all notifications OFF. They feel like pressure.',
      'Q28': 'Visual progress in mirror and gym partner motivation',
      'Q29': 'Partner accountability helps. Having friend at gym keeps me consistent.',
      'Q30': 'Not really interested in large community. Partner features would be good.',
      'Q31': 'Gym membership around ₹2,000/month ($24/month)',
      'Q32': 'Would pay ₹2,500-4,000/year ($2.50-4/month). Not more than ₹5,000/year.',
      'Q33': 'Travel-friendly features, trainer marketplace, partner features, simple nutrition tracking'
    }
  },

  // MAJID (Interview 3)
  {
    participant: 'Majid',
    age: 'Late 20s-30s',
    gender: 'Male',
    location: 'UAE',
    userType: 'Intermediate',
    responses: {
      'Q1': 'My name is Majid, I work in UAE as sales promoter in retail. I do 9-10 hours job.',
      'Q2': 'UAE',
      'Q3': 'Work 9-10 hours retail sales (standing job), hit gym 3-4 days per week after work.',
      'Q4': '2-3 years serious gym experience. Used to play cricket before moving to UAE.',
      'Q5': 'Gained weight during COVID eating junk food. Could not fit formal shirt for job interview - that was wake up call.',
      'Q6': 'Athletic fitness, strength, endurance, conditioning. Not bodybuilding - more functional fitness.',
      'Q7': '3-4 days per week',
      'Q8': 'Around 1-1.5 hours',
      'Q9': 'Gym. No space at home, no equipment, no motivation. Gym has everything needed.',
      'Q10': 'Prefer gym environment with other people around but not necessarily working out together. Like the energy.',
      'Q11': 'Compound exercises - squats, deadlifts, chest press, pull-ups. Also hiking, running, sprinting.',
      'Q12': 'No, but pursuing personal trainer certification as hobby. Want to learn proper techniques.',
      'Q13': 'Eat out mostly - grilled chicken, soups, rotis. Watch portions, avoid junk, no artificial sugar. Need carbs because of standing job.',
      'Q14': 'Do not track systematically. Too difficult. This is my biggest challenge.',
      'Q15': 'Nutrition tracking is THE biggest challenge. Need systematic, accountable way. I believe this is main problem for EVERYONE.',
      'Q16': 'Yes - whey protein, creatine (best thing, gives me more power), multivitamins',
      'Q17': 'Do not cook much, eat out. Time constraints due to 9-10 hour job.',
      'Q18': 'Used I Muscle 2 and Workout Planner apps to learn anatomy and exercises.',
      'Q19': 'Use Garmin watch to track steps, heart rate, calories as guideline',
      'Q20': 'Apps are too generic, not customized to individual needs. Accuracy concerns - how do they calculate 600 calories?',
      'Q21': 'Yes, Garmin watch. More accurate than others but still not 100% dependable.',
      'Q22': 'Not extensively. But if AI can tailor plan to my routine and goals, everyone should try it.',
      'Q23': 'Nutrition tracking - need systematic, accountable way',
      'Q24': 'Time constraints from 9-10 hour standing job',
      'Q25': '9-10 hour standing retail job is exhausting. Affects energy for gym.',
      'Q26': 'Do not travel much for work',
      'Q27': 'Not if they are helpful and flexible. Should not be too frequent or annoying.',
      'Q28': 'Discipline from work routine, wanting to look better, learning about fitness (pursuing certifications)',
      'Q29': 'Community would be helpful. Learning from others, sharing experiences.',
      'Q30': 'Yes, interested in community features for learning and motivation',
      'Q31': 'Gym membership, supplements - around AED 200-300/month ($54-82/month)',
      'Q32': 'Depends on services. Flexible options - 1 month, 3 months, 6 months, 1 year. Do not pressure client, let them try 1 month first.',
      'Q33': 'Personalized/tailored plans, nutrition accountability system, flexible pricing, education content for beginners'
    }
  },

  // JESSICA (Interview 4)
  {
    participant: 'Jessica',
    age: 36,
    gender: 'Female',
    location: 'Dubai',
    userType: 'Intermediate',
    responses: {
      'Q1': 'I am Jessica, 36 years old, I teach English at school (Grade 1).',
      'Q2': 'Dubai',
      'Q3': 'Wake up 5am for work, teach grade 1 (very active with kids), go to gym after work for group classes. Walk 10,000 steps daily.',
      'Q4': 'Joined gym in March during Ramadan offer, extended for 6 months. Part of Sunday walking group since last year.',
      'Q5': 'Some weight gain and wanting better work-life balance. Teaching is stressful, needed fitness for stress relief.',
      'Q6': 'Weight loss, better work-life balance, stress management',
      'Q7': '3-4 days per week group classes',
      'Q8': 'Varies - group class duration',
      'Q9': 'Gym 100%. Group classes specifically. No motivation for home workouts.',
      'Q10': 'Prefer group classes with other people. More affordable and social than PT. Feedback from others helps more than visual progress.',
      'Q11': 'Gym group classes, Sunday walking group',
      'Q12': 'Yes, did one-on-one PT sessions but stopped due to cost, time, and knee injury.',
      'Q13': 'Nutritionist designed meal plan but struggle to execute. Do not feel like cooking after stressful work.',
      'Q14': 'Do not track systematically. Have meal plan but hard to follow.',
      'Q15': 'Meal prep time/energy after work, food waste (live alone), dietary restrictions (pescatarian) limit meal service options.',
      'Q16': 'Not mentioned',
      'Q17': 'Struggle with meal prep. Lives alone so cooking creates food waste. Pescatarian so meal services have limited options.',
      'Q18': 'Yes, Apple Watch, gym app, Flo app for cycle tracking, smart scale',
      'Q19': 'Track steps with Apple Watch mostly. Track menstrual cycle with Flo app.',
      'Q20': 'Smart scale is demotivating when weight goes up even though building muscle. Do not engage with gym app notifications.',
      'Q21': 'Yes, Apple Watch for steps. Have smart scale but it is demotivating.',
      'Q22': 'No, do not interact with AI',
      'Q23': 'Work stress derails routine and meal prep time/energy',
      'Q24': 'Stressful weeks at school throw me off. If I have stuff to do at school, puts me off from getting things done.',
      'Q25': 'Work stress is major factor. Stressful weeks at school disrupt routine significantly.',
      'Q26': 'Not mentioned as major issue',
      'Q27': 'Yes, do not engage with gym app reminders even though they send daily protein and step reminders.',
      'Q28': 'Group classes, social validation. Feedback from other people - they notice changes before I do.',
      'Q29': 'External feedback and social validation more motivating than self-motivation',
      'Q30': 'Yes, prefer group classes and social aspects. Sunday walking group member.',
      'Q31': 'Gym membership (group classes). Stopped PT due to cost. Medium budget.',
      'Q32': 'Medium range. Stopped PT due to cost, continues gym group classes as more affordable.',
      'Q33': 'Menstrual cycle-aware workout/diet suggestions, meal prep service for dietary restrictions, injury-adaptive recommendations, social validation features'
    }
  }
]

// Helper function to get all responses for a specific question
export const getResponsesByQuestion = (questionId) => {
  return interviewResponses.map(interview => ({
    participant: interview.participant,
    age: interview.age,
    gender: interview.gender,
    userType: interview.userType,
    response: interview.responses[questionId] || 'Not answered'
  }))
}

// Helper function to get all questions by category
export const getQuestionsByCategory = (category) => {
  return questionnaire.filter(q => q.category === category)
}

// Helper function to get all questions by journey stage
export const getQuestionsByJourneyStage = (stage) => {
  return questionnaire.filter(q => q.journeyStage === stage)
}

// Export categories for filtering
export const categories = [
  'Demographics',
  'Lifestyle',
  'Fitness Background',
  'Workout Preferences',
  'Nutrition',
  'Technology',
  'Pain Points',
  'Motivation',
  'Pricing'
]

export const journeyStages = [
  'Awareness',
  'Consideration',
  'Purchase',
  'Onboarding',
  'Retention'
]
