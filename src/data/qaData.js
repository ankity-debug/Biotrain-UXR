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
  },

  // DHANANJAY (Interview 5)
  {
    participant: 'Dr. Dhananjay Kumar',
    age: '40s-50s',
    gender: 'Male',
    location: 'UK (near London)',
    userType: 'Intermediate',
    responses: {
      'Q1': 'Dr. Dhananjay Kumar, Department Head for Airbus working on safety and reliability of aircrafts.',
      'Q2': 'UK, near London',
      'Q3': 'Wake up, 10 min garden walk, Surya Namaskar, meditation. Work: emails, meetings, manufacturing line walks, desk work. After work gym 2-3x/week. Evening: nap, dinner, reading/TV.',
      'Q4': 'Most active since 2018. Before that very busy with extensive travel (2-3 weeks/month across continents). Burned out 2014-2018. Morning routine started 3-4 years ago. Regular gym since COVID ended (2022). During COVID walked 10-15km daily.',
      'Q5': 'Burnout from extensive travel and demanding job. Reached point where felt "I can\'t do this, I need to change." Also motivated by seeing fit peers doing well.',
      'Q6': 'Not trying to build up, trying to DECELERATE DEGENERATION of muscle. Want to maintain at certain level, not be the best in fitness. Some goals like 2km run in 10-14 min but not hard and fast.',
      'Q7': '2-3 times per week at gym, plus swimming on Sunday',
      'Q8': 'Saturday HIIT class 30 min, plus 10 min treadmill cooldown, 10-15 min stretching. Other days similar duration.',
      'Q9': 'Gym 100%. Tried home workouts but no motivation. When feeling down at home can\'t get motivated. At gym, seeing other people working out makes me keep going.',
      'Q10': 'Community and alone both. Community means gym classes with same people repeatedly - familiar faces help. Age range 25-70. Comfortable environment with jokes.',
      'Q11': 'HIIT classes (favorite), swimming, tried yoga/ballet/pilates but enjoys HIIT most',
      'Q12': 'No personal trainer currently',
      'Q13': 'Manage diet by myself. Strongly believe my diet is right for me. Don\'t track calories/macros/protein. Not interested in structured diet plans.',
      'Q14': 'Do not track nutrition systematically',
      'Q15': 'Not interested in complete diet overhaul. Want to know CURRENT diet, current health parameters, identify GAP, make SMALL CHANGES. Not something completely new. Regionally aware adjustments to existing diet would help.',
      'Q16': 'No supplements or multivitamins',
      'Q17': 'Do not meal prep. Not interested in it.',
      'Q18': 'Yes - Fitbit watch and app',
      'Q19': 'Fitbit tracks: heart rate, steps, cardio, specific exercises (swimming laps/time, running, cycling, boot camp, etc.). Uses historical data as baseline to motivate.',
      'Q20': 'Fitbit is good for tracking but apps in general are too generic, not customized for individual needs. Want personalized guidance, not generic advice.',
      'Q21': 'Yes, Fitbit watch. Tried other wearables 4-5 years ago but not impressed.',
      'Q22': 'NO trust in AI currently. AI needs more training. Sometimes get rubbish answers. If you don\'t know subject, can be fully misguided. Time hasn\'t come to rely 100% on AI. Prefer HUMAN who can use AI and give evaluated feedback.',
      'Q23': 'Lack of unified personalized platform. Multiple scattered sources for recovery, exercises, diet. Chronic back pain requiring careful exercise selection.',
      'Q24': 'Actually quite consistent. When miss workouts feel bad because used to doing it and feel happier after. That feeling of missing out brings me back.',
      'Q25': 'Work used to affect fitness heavily pre-2018 (extensive travel, burnout). Now work is R&D type so doesn\'t require much travel.',
      'Q26': 'Travel used to be huge issue pre-2018 (2-3 weeks/month across continents, different time zones, biological clock messed up). Not current issue.',
      'Q27': 'Notifications definitely help. Gives physical/visible confirmation that I\'ve done or missed something. Visual confirmation is helpful.',
      'Q28': 'Feeling good after workout, preventing muscle degeneration, gym community environment, seeing fit peers, historical data showing progress',
      'Q29': 'Gym community provides motivation. Prefer human touch for guidance over AI.',
      'Q30': 'Yes - gym classes with familiar faces are motivating. But not interested in competitive features like leaderboards. Age-based approach needed - younger people more into competition, older focus on health management.',
      'Q31': 'Gym membership, no other major fitness expenses mentioned',
      'Q32': 'Would pay if data privacy assured (GDPR compliant). Want at least 1 month FREE trial first to test. Then would consider annual subscription.',
      'Q33': 'Data privacy assurance (GDPR compliant), injury-adaptive plans (chronic back pain), unified platform replacing scattered sources, human-reviewed AI recommendations, small incremental diet changes, recovery guidance centralized, free trial period'
    }
  },

  // DHRUV (Interview 6)
  {
    participant: 'Dhruv',
    age: '24-25',
    gender: 'Male',
    location: 'Dubai (from Mumbai)',
    userType: 'Power User',
    responses: {
      'Q1': 'Dhruv, 24-25 years old, fitness trainer at MyPT brand in Dubai. From Mumbai, been in Dubai 6 months.',
      'Q2': 'Dubai (from Mumbai)',
      'Q3': 'Wake 5am for 6am clients. Work 6-10am peak hours. Depending on shift, either leave 3pm or return 5-8pm for evening peak. Squeeze own workouts during gaps. Track steps and calories when have mental capacity.',
      'Q4': 'Athletic background, 5-7 years fitness experience. Started because curious about learning and studying fitness. Enrolled in internationally renowned courses.',
      'Q5': 'Passion from athletic background. Curious about learning and studying more about fitness. Wanted to make it profession.',
      'Q6': 'Performance: certain bench press KG for certain reps. Looks: want to look certain way. Health last priority (cholesterol/BP monitored). Current: 25% body fat → 20%, retain muscle, moderate weight increases (2.5-5kg).',
      'Q7': '8 workouts/month on low side, 12-15 on high side depending on health and mental capacity',
      'Q8': 'Resistance training session with 18-25 working sets total',
      'Q9': 'Gym 100%. During COVID ordered weights at home (no bodyweight). Open chain movements (dumbbells) work better than closed chain (bodyweight). Don\'t enjoy pump/muscle-mind connection with bodyweight.',
      'Q10': 'I WANT workouts to be ALONE. It\'s my ME time. Don\'t like distractions or talking to people. Okay with people thinking I\'m arrogant. Just put in earphones and get work done.',
      'Q11': 'Resistance training/hypertrophy. Machine-based, dumbbells, cables. 3-4 sets per exercise. Split: Push (chest/shoulder/tricep), Pull (back/biceps), Lower body.',
      'Q12': 'No, I AM a trainer. Work as PT at MyPT.',
      'Q13': 'Track calories - give myself 2300 calorie budget. Keep mostly clean, try hit protein goals. Flexible dieting, not chicken-broccoli-rice every day. If constrain to same stuff, can\'t do it more than 10 days.',
      'Q14': 'Yes track with HealthifyMe. Recently got Whoop for sleep/HRV/steps. Use Hevy for workout tracking. Some Excel sheets for client calculations.',
      'Q15': 'DIET part is biggest challenge. Never workouts or steps - always the diet. Following calories, hitting protein goal, eating clean.',
      'Q16': 'Currently no but top tier would be: whey protein, creatine, omega-3. On cruise mode due to work commitment not giving time to focus on everything.',
      'Q17': 'Do not meal prep much. Diet consistency when not tracking is the challenge.',
      'Q18': 'Yes - Whoop, HealthifyMe, Hevy, Apple Health, Excel sheets',
      'Q19': 'Whoop: sleep, HRV, steps. Hevy: workout sets/reps/weights/RPE/drop sets/failure sets. HealthifyMe: calories and macros. Apple Health: heart rate and steps overview.',
      'Q20': 'HUGE GAP between apps is problem. Always wished for ONE application for everything. HealthifyMe has great UI and flexibility - did 120kg→83kg transformation with it. Would still stick to app with worse features if UI is better. User interface is critical.',
      'Q21': 'Yes, Whoop (subscription model - pay yearly, device free). Interested because of HRV (heart rate variability) - shows parasympathetic vs sympathetic tone.',
      'Q22': 'Yes use ChatGPT for fitness advice. As professional I know certain answers - AI gets MAJORITY right but not the NICHE specific answer I need. Gives generally correct, not specific.',
      'Q23': 'Diet consistency. App fragmentation (5+ apps for different tracking). Bad sleep. Frequent illness. High cholesterol.',
      'Q24': 'Promote sustainability - if supposed to eat 1800 deficit, make it 2200-2300 so can sustain. Don\'t beat myself up. Don\'t track perfectly all the time.',
      'Q25': 'Work doesn\'t affect much currently. Just affects mental capacity to track everything consistently.',
      'Q26': 'Not major issue currently',
      'Q27': 'Would be FRUSTRATING. When don\'t track and HealthifyMe shows "you\'re back" popup, get 1% negative feeling - reminds me I\'m failure. Maybe neutral overall.',
      'Q28': 'Performance PRs (strength numbers), visible progress (physique), data and metrics, understanding science, solo focus time, learning from mentors, client success',
      'Q29': 'Self-motivation. Want solo private experience. Reach out to mentors when need help but generally self-driven.',
      'Q30': 'NO. Dislike social features. Want solo private experience. Streaks/leaderboards not important to me. What would hurt: seeing weight I used to lift going down, or calorie tracking going down.',
      'Q31': 'Gym membership as employee. Considered HealthifyMe Pro (₹3000/year) for micronutrient tracking but haven\'t paid yet.',
      'Q32': '₹5000/year ($60/year) if it combines Hevy and HealthifyMe the way I like it with good UI.',
      'Q33': 'ONE integrated app replacing 5+ tools, micronutrient tracking→illness correlation, sleep→diet correlation, culturally relevant meal variety (Indian), simple intuitive UI (CRITICAL), trainer dashboard for clients, both personal and professional features, annual subscription model, advanced data like MRV'
    }
  },

  // SHUBHAM (Interview 7)
  {
    participant: 'Shubham',
    age: 'Late 20s-Early 30s',
    gender: 'Male',
    location: 'Gurgaon, India',
    userType: 'Power User',
    responses: {
      'Q1': 'Shubham, fitness trainer and coach at Fitter, gym owner in Gurgaon',
      'Q2': 'Gurgaon, India',
      'Q3': 'Wake early, own gym workout 1.5-2hrs, design client plans, manage gym, Sunday running/sprinting, maintain 10,000+ steps daily',
      'Q4': 'Working out 8-10 years total, very seriously last 2.5 years after completing diploma in nutrition and fitness',
      'Q5': 'Initially followed traditional routines, but after diploma learned proper science. Workout is essential for mood - "muscle pump is my addiction, can\'t live even a single day without workout"',
      'Q6': 'Muscle building, maintain 12% body fat, photoshoot body periodically (1-2 months fat loss cycles)',
      'Q7': '6 days per week weight training, plus Sunday running/sprinting',
      'Q8': '25-30 sets for large muscles, 20 sets for smaller muscles, all effective sets training to failure',
      'Q9': 'Gym 100%. Worked at home during lockdown with 10kg dumbbells using supersets/compound sets but missed equipment, mirrors, music, people, variety. Need gym environment.',
      'Q10': 'Love working out ALONE in my own gym. A few people motivate but too much crowd is bad - can\'t get equipment. Definitely solo preference.',
      'Q11': 'Weight training (25-30 sets), running/sprinting on Sundays, 10k+ steps daily',
      'Q12': 'I AM a trainer/coach at Fitter. Use Fitter for both personal tracking and coaching clients.',
      'Q13': 'Follow structured diet 24/7, 365 days. Track macros (mainly protein - 2x bodyweight), sometimes fiber. Do blood work every 6 months. Sweet cravings and hunger are big challenges.',
      'Q14': 'Yes, track macros rigorously. CRITICAL: need RAW ingredient tracking, not "one bowl of dal" because oil content unknown. Use Fitter app, also ChatGPT for food replacements.',
      'Q15': 'Sweet cravings (see 700 cal cheesecake, can\'t afford it). Hunger management - eat lots of veggies and protein to stay full. Meal prep time - want variety within macros.',
      'Q16': 'Only protein shake and creatine. No pre-workout, no BCAA, no multivitamins. Supplement based on blood work deficiencies.',
      'Q17': 'Want variety but time consuming. Use ChatGPT to find replacements (50g paneer = 200g curd = 2 eggs). AI recipe generator from available ingredients would help.',
      'Q18': 'Yes - Fitter app for pictures/progress tracking, HART smart ring for recovery, iPhone Health app for steps, ChatGPT for nutrition',
      'Q19': 'HART ring: HRV, resting heart rate, sleep quality, recovery. Check recovery every morning - very accurate (HRV dropped when dehydrated). Steps via Health app synced with ring. Progressive overload: track weight and reps. Progress via pictures and weight.',
      'Q20': 'Other apps use generic measurements (one bowl). Need RAW ingredients for accuracy. Like Fitter for picture tracking and progress comparison.',
      'Q21': 'Yes, HART smart ring from Fitter company. Tracks HRV, sleep, recovery. Very accurate. Wish it had Find My Ring feature (lost it multiple times).',
      'Q22': 'YES - ChatGPT power user. Use for food replacements, body fat estimation from photos (within 2-5% error like other methods). Since ChatGPT, everything is very easy.',
      'Q23': 'Need accurate raw ingredient tracking. Sweet cravings and hunger. Meal prep time. Want set compensation if miss workout (reschedule missed sets to future days).',
      'Q24': 'Cannot remember last day I skipped workout. If I skip (rare), I squeeze it into next day or week. Mindset: "I have to complete this many sets this week otherwise no muscle growth."',
      'Q25': 'Not major issue. Fitness is priority for mood management.',
      'Q26': 'Not mentioned as major challenge',
      'Q27': 'YES - I don\'t like notifications. If busy and tracking everything, notifications like "have your meal" or "drink water" are annoying. Personally don\'t want them.',
      'Q28': 'Muscle pump addiction - essential for good mood. Visible results (pictures week-over-week). Progressive overload numbers. Cannot skip - it\'s my daily routine.',
      'Q29': 'Highly self-motivated. Don\'t need external. Result/visible progress is best motivator. Week-over-week comparison helpful but no notifications/streaks.',
      'Q30': 'NO for me. Maybe for others. Healthy competition works with 4-5 friends who joined together, but NOT with unknown people - that\'s not comfortable. Leaderboards not for me.',
      'Q31': 'Own gym. Previously would have paid for Fitter coaching if knew about it before becoming coach.',
      'Q32': 'Medium range ($20-50/month) if provides real value. Would have paid for Fitter-quality platform.',
      'Q33': 'RAW ingredient tracking (CRITICAL), workout set compensation when miss days, AI recipe generator from ingredients, ChatGPT-like food replacements, client management dashboard, recovery tips by soreness type, progress comparison week-over-week, blood work integration, accurate macro tracking, no annoying notifications'
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
