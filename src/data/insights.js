// Analytics and insights from 9 real user interviews

export const analyticsData = {
  totalParticipants: 9,

  userTypes: {
    'Advanced': 2,  // Ramesh, Praneeth (recovering from advanced)
    'Intermediate': 4,  // Aniket, Majid, Jessica, Dhananjay
    'Power User': 2,  // Dhruv (fitness professional), Shubham (trainer/coach)
    'Beginner': 1  // Reyena
  },

  gender: {
    'Male': 7,  // Ramesh, Aniket, Majid, Dhananjay, Dhruv, Shubham, Praneeth
    'Female': 2  // Jessica, Reyena
  },

  fitnessLevels: {
    'Very High': 2,  // Dhruv (8-15 workouts/month, professional), Shubham (6 days, 25-30 sets, trainer)
    'High': 1,  // Ramesh (6 days, 2hrs)
    'Medium': 4,  // Aniket (4 days), Majid (3-4 days), Jessica (3-4 days), Dhananjay (2-3 days + swimming)
    'Low': 1,  // Praneeth (yoga, meditation, light cardio - recovery mode)
    'Beginner': 1  // Reyena (7k steps daily, no structured routine)
  },

  budgets: {
    'Very High ($180-240/month)': 1,  // Ramesh
    'Medium-High': 1,  // Dhananjay (with GDPR privacy requirements)
    'Medium': 4,  // Majid, Jessica, Shubham (would pay for value), Praneeth
    'Low-Medium ($60/year)': 1,  // Dhruv
    'Medium-Low ($2.50-4/month)': 1,  // Aniket
    'Low': 1  // Reyena (budget-conscious homemaker)
  },

  techAdoption: {
    'Very High': 4,  // Ramesh (ChatGPT power user), Dhruv (5+ apps, Whoop, understands HRV), Shubham (ChatGPT, smart ring), Praneeth (UX strategist, ChatGPT user)
    'Medium-High': 2,  // Aniket, Jessica (Apple Watch)
    'Medium': 3  // Majid, Dhananjay (Fitbit, cautious about AI), Reyena (uses step tracker app)
  },

  commonGoals: {
    'Weight Loss': 3,  // Jessica, Dhruv (25%→20% body fat), Reyena
    'Weight Gain': 1,  // Aniket
    'Weight Maintenance': 3,  // Ramesh, Dhananjay (prevent degeneration), Shubham (12% body fat)
    'Muscle Building': 5,  // Ramesh, Aniket, Majid, Dhruv, Shubham
    'Athletic Fitness': 1,  // Majid
    'Work-Life Balance': 1,  // Jessica
    'Cardio': 1,  // Ramesh
    'Performance (Strength PRs)': 1,  // Dhruv
    'Prevent Degeneration': 1,  // Dhananjay
    'Manage Chronic Conditions': 1,  // Dhananjay (back pain)
    'Body Fat Control': 1,  // Shubham (maintain 12%, photoshoot body)
    'Mental Wellness': 1,  // Praneeth (primary focus)
    'Holistic Health': 1,  // Praneeth (mental + physical + nutritional)
    'Recovery': 1,  // Praneeth (from health crisis)
    'Consistency': 1  // Reyena (building sustainable routine)
  },

  commonChallenges: {
    'Nutrition Tracking': 7,  // Ramesh, Aniket, Majid, Jessica, Dhruv, Shubham, Reyena (calorie tracking)
    'App Fragmentation': 3,  // Ramesh, Dhruv (5+ apps each), Praneeth (tried many, none stuck)
    'Work Stress': 2,  // Majid (9-10hr), Jessica (teaching)
    'Travel Disruption': 2,  // Ramesh, Aniket
    'Meal Prep Time': 3,  // Ramesh, Jessica, Shubham
    'Time Constraints': 6,  // Ramesh, Aniket, Majid, Jessica, Dhruv, Reyena (kids schedule)
    'Notification Fatigue': 6,  // Ramesh, Aniket, Jessica, Dhruv, Shubham, Reyena (wants minimal)
    'Home Workout Motivation': 3,  // Aniket, Jessica, Dhananjay
    'Chronic Injuries': 3,  // Jessica (knee), Dhananjay (back), Shubham (lower back pain)
    'Lack of Personalization': 6,  // Ramesh, Majid, Jessica, Dhananjay, Praneeth (apps too mechanical), Reyena
    'AI Trust Issues': 3,  // Dhananjay (prefers human), Dhruv (not specific enough), Reyena (prefers human touch)
    'Bad Sleep': 1,  // Dhruv
    'Frequent Illness': 1,  // Dhruv
    'Cravings Management': 2,  // Shubham (sweet cravings), Reyena (junk food cravings - PRIMARY challenge)
    'Hunger Management': 1,  // Shubham
    'Health Recovery': 1,  // Praneeth (recovering from serious health issues)
    'Over-tracking Stress': 1,  // Praneeth (micromanagement creates anxiety)
    'Wearable Health Concerns': 1,  // Praneeth (radiation/laser concerns)
    'Finding Holistic Solution': 1,  // Praneeth (mental + physical + nutrition in one)
    'Equipment Availability': 1,  // Reyena (home workout barriers)
    'Consistency': 1  // Reyena (maintaining routine with daily disruptions)
  },

  preferredActivities: {
    'Gym': 7,  // Ramesh, Aniket, Majid, Dhananjay, Dhruv, Shubham (7 of original participants prefer gym)
    'Group Classes': 2,  // Jessica, Dhananjay (HIIT)
    'Boxing': 1,  // Ramesh
    'Walking': 3,  // Jessica (Sunday group), Praneeth (morning walks), Reyena (7k steps daily)
    'Cycling': 1,  // Ramesh
    'Hiking': 1,  // Majid
    'Running/Sprinting': 2,  // Majid, Shubham (Sunday sprints)
    'Swimming': 1,  // Dhananjay
    'HIIT Classes': 1,  // Dhananjay
    'Resistance Training': 1,  // Dhruv
    'Yoga': 3,  // Praneeth (daily), Reyena (did during pregnancy, interested), Jessica
    'Meditation': 1,  // Praneeth (daily morning practice)
    'Home Workouts': 1  // Reyena (seeking 30-min follow-along videos)
  },

  willingnessToPay: {
    'Very High ($180-240/month)': 1,  // Ramesh
    'Medium-High (with data privacy)': 1,  // Dhananjay (wants free trial first)
    'Medium ($20-50/month)': 4,  // Majid, Jessica, Shubham, Praneeth
    'Low-Medium ($60/year)': 1,  // Dhruv
    'Low ($2.50-4/month)': 1,  // Aniket
    'Budget-Conscious': 1  // Reyena (homemaker, looking for value)
  },

  socialPreferences: {
    'Solo': 5,  // Ramesh, Dhruv (strong preference), Shubham (loves working alone), Praneeth (prefers solo but values human guidance), Reyena (works out alone at home)
    'Partner': 1,  // Aniket
    'Community': 2,  // Majid, Dhananjay (gym classes with familiar faces)
    'Group Classes': 1  // Jessica
  },

  painPointFrequency: {
    'Nutrition tracking difficulty': 7,  // 78% (7/9)
    'App fragmentation': 3,  // 33% (3/9)
    'Accuracy concerns': 3,  // 33% (3/9)
    'Work stress impact': 2,  // 22% (2/9)
    'Travel disruption': 2,  // 22% (2/9)
    'Meal prep time': 3,  // 33% (3/9)
    'Notification fatigue': 6,  // 67% (6/9)
    'Lack of personalization': 6,  // 67% (6/9)
    'Chronic injury management': 3,  // 33% (3/9)
    'AI trust concerns': 3,  // 33% (3/9)
    'Cravings/hunger management': 2,  // 22% (2/9)
    'Finding holistic solution': 1,  // 11% (1/9) - Praneeth's primary need
    'Wearable health concerns': 1,  // 11% (1/9) - Praneeth
    'Time constraints with family': 1  // 11% (1/9) - Reyena (childcare)
  }
}

// All insights with scoring for intelligent top 10 selection
const allInsights = [
  {
    id: 'insight-1',
    title: 'Nutrition Tracking is Universal #1 Pain Point',
    description: '78% of participants (7/9) struggle with nutrition tracking. This is the BIGGEST opportunity. Ramesh: no personalized guidance. Aniket: cannot meet targets when traveling. Majid: needs systematic accountable way. Jessica: meal prep time/energy constraints. Dhruv: diet consistency is hardest challenge. Shubham: CRITICAL need for raw ingredient tracking. Reyena: wants calorie tracking to make better food choices. This need spans ALL user types from beginners to advanced.',
    category: 'Critical Pain Point',
    priority: 'Critical',
    impact: 'Very High',
    affectedUsers: 7,
    percentage: '78%'
  },
  {
    id: 'insight-2',
    title: 'Extreme Price Sensitivity: 60-96x Range',
    description: 'Willingness to pay varies dramatically from $2.50/month (Aniket) to $240/month (Ramesh). Dhruv would pay $60/year. Dhananjay wants free trial first with GDPR. Shubham & Praneeth: medium range ($20-50). Reyena: budget-conscious homemaker. MUST have tiered pricing strategy: Free tier, $5-10, $20-30, $50-100, $150-250.',
    category: 'Business Model',
    priority: 'Critical',
    impact: 'Very High',
    affectedUsers: 9,
    percentage: '100%'
  },
  {
    id: 'insight-3',
    title: 'Female Users Have Unique Needs',
    description: '22% of sample (Jessica, Reyena) are female with distinct needs. Jessica: menstrual cycle awareness, social validation, group classes, meal prep constraints, scale demotivation. Reyena: homemaker schedule flexibility, childcare time constraints, food cravings, home workout preference, menstrual cycle affects energy. 50% of market has these needs.',
    category: 'User Segmentation',
    priority: 'High',
    impact: 'High',
    affectedUsers: 2,
    percentage: '22% of sample, 50% of market'
  },
  {
    id: 'insight-4',
    title: 'Social Preferences are Completely Polarized',
    description: 'Solo preference (56%): Ramesh, Dhruv, Shubham, Praneeth (values human guidance but not social comparison), Reyena (home workouts alone). Partner-focused: Aniket. Community-oriented: Majid, Dhananjay (gym classes). Group classes: Jessica. Solution: Flexible social settings with private/community toggle.',
    category: 'Features',
    priority: 'High',
    impact: 'Very High',
    affectedUsers: 9,
    percentage: '100%'
  },
  {
    id: 'insight-5',
    title: 'Notification Fatigue Affects 67% of Users',
    description: 'Ramesh: annoying, has internal clock. Aniket: keeps notifications OFF. Jessica: does not engage. Dhruv: frustrating, reminds of failure. Shubham: annoying during busy schedules. Reyena: wants ONLY 1 pre-workout + 1 post-workout notification, continuous = delete app. BUT Dhananjay: notifications helpful for visual confirmation. Solution: Context-aware, minimal frequency, opt-in only.',
    category: 'UX Design',
    priority: 'High',
    impact: 'High',
    affectedUsers: 6,
    percentage: '67%'
  },
  {
    id: 'insight-6',
    title: 'Work Stress Derails Routine',
    description: 'Jessica: stressful school weeks throw off routine. Majid: 9-10 hour standing job limits time. Aniket: business travel disrupts. Need work stress integration and calendar-based adjustments.',
    category: 'Features',
    priority: 'High',
    impact: 'High',
    affectedUsers: 3,
    percentage: '75%'
  },
  {
    id: 'insight-7',
    title: '100% Prefer Gym Over Home Workouts',
    description: 'ALL 7 participants prefer gym/group classes. Home workouts: no motivation (Jessica, Aniket, Dhananjay), no space (Majid), only during lockdown (Ramesh, Shubham with limited equipment), don\'t enjoy bodyweight (Dhruv). BUT still need travel-friendly no-equipment options.',
    category: 'Market Opportunity',
    priority: 'Medium',
    impact: 'High',
    affectedUsers: 7,
    percentage: '100%'
  },
  {
    id: 'insight-8',
    title: 'AI Trust is Polarized: High Trust vs Need Human Oversight',
    description: 'High trust: Ramesh 90-99%, Shubham (ChatGPT for nutrition, body fat estimation), Aniket tried ChatGPT. Conditional: Majid (if tailored), Dhruv (gets general not specific answers). Low trust: Dhananjay prefers human-reviewed AI, Jessica doesn\'t use AI. KEY: Power users want it, older users need human touch, must be personalized.',
    category: 'Features',
    priority: 'High',
    impact: 'High',
    affectedUsers: 6,
    percentage: '86%'
  },
  {
    id: 'insight-9',
    title: 'Accuracy Concerns with Tracking',
    description: 'Majid: How do they calculate 600 calories? Aniket: Mi watch used 2-3 days. Jessica: smart scale demotivates. Solution: transparency about limitations, ranges not exact numbers, focus on trends.',
    category: 'Product Design',
    priority: 'Medium',
    impact: 'Medium',
    affectedUsers: 3,
    percentage: '75%'
  },
  {
    id: 'insight-10',
    title: 'Menstrual Cycle Awareness = Female Market Opportunity',
    description: 'Jessica tracks cycle with Flo app, energy varies by phase, interested in cycle-aware workout/diet suggestions. First-mover advantage in 50% of market (females).',
    category: 'Market Opportunity',
    priority: 'High',
    impact: 'Medium',
    affectedUsers: 1,
    percentage: '17% of sample, 50% of market'
  },
  {
    id: 'insight-11',
    title: 'App Fragmentation is Critical Pain Point for Power Users',
    description: 'Ramesh & Dhruv each use 5+ apps (MyFitnessPal, Apple Watch, ChatGPT / Whoop, HealthifyMe, Hevy, Apple Health, Excel). Dhruv: "HUGE GAP between apps. Always wished for ONE application." This is THE opportunity for integrated solution targeting power users willing to pay premium.',
    category: 'Product Strategy',
    priority: 'Critical',
    impact: 'Very High',
    affectedUsers: 2,
    percentage: '33%'
  },
  {
    id: 'insight-12',
    title: 'Injury-Adaptive Training is High-Value Need',
    description: 'Jessica: knee injury stopped PT. Dhananjay: chronic back pain, needs careful exercise selection. Both would find EXTREMELY helpful: tailored workout plans considering chronic conditions. Opportunity: injury-adaptive AI recommendations.',
    category: 'Features',
    priority: 'High',
    impact: 'High',
    affectedUsers: 2,
    percentage: '33%'
  },
  {
    id: 'insight-13',
    title: 'Fitness Professionals Need Dual Personal + Client Features',
    description: 'Dhruv & Shubham (both trainers): want ONE app for both personal tracking AND client management dashboard. Shubham uses Fitter for both coaching and personal use. Current gap: separate apps for personal use vs client management. Opportunity: B2B2C model targeting fitness professionals as power users and customer acquisition channel.',
    category: 'Market Opportunity',
    priority: 'High',
    impact: 'Very High',
    affectedUsers: 2,
    percentage: '29% (fitness professionals = significant market segment + gateway to their clients)'
  },
  {
    id: 'insight-14',
    title: 'GDPR Compliance is Requirement for European Market',
    description: 'Dhananjay (UK-based): Will only share health data if GDPR compliant, data privacy assured, organization is liable. Wants free trial before paid subscription. European market requires robust data privacy assurances.',
    category: 'Compliance',
    priority: 'High',
    impact: 'High',
    affectedUsers: 1,
    percentage: '17% of sample, represents EU market'
  },
  {
    id: 'insight-15',
    title: 'Age-Based Feature Preferences: Competition vs Health Management',
    description: 'Dhananjay: Younger generation wants competition/leaderboards. Older users (40s-50s+) focus on health management, preventing degeneration, NOT competition. Age-based UI/feature toggles needed.',
    category: 'User Segmentation',
    priority: 'Medium',
    impact: 'High',
    affectedUsers: 7,
    percentage: '100% (affects all age groups differently)'
  },
  {
    id: 'insight-16',
    title: 'Raw Ingredient Tracking is Critical for Accuracy',
    description: 'Shubham (trainer with nutrition diploma): MUST track raw ingredients, not generic "one bowl of dal" because oil content unknown. Accurate macro tracking requires raw measurements. Other apps fail by using vague portion sizes. This is a key differentiator for serious fitness users and professionals.',
    category: 'Product Design',
    priority: 'High',
    impact: 'Very High',
    affectedUsers: 3,
    percentage: '43% (all serious trackers + trainers)'
  },
  {
    id: 'insight-17',
    title: 'Workout Set Compensation Feature Requested',
    description: 'Shubham: If fourth day workout missed (e.g., chest workout), app should redesign next two days to compensate those sets. Mindset: "I have to complete this many sets this week." This addresses consistency challenges during disruptions.',
    category: 'Features',
    priority: 'High',
    impact: 'High',
    affectedUsers: 4,
    percentage: '57% (advanced users who track volume)'
  },
  {
    id: 'insight-18',
    title: 'Muscle Pump Addiction as Primary Motivator',
    description: 'Shubham: "I can\'t live even a single day without workout. That muscle pump is my addiction." Workout is essential for mood management, not optional. Similar to Ramesh (survival/mental health). For highly disciplined users, intrinsic motivation > external gamification. Progress visibility (week-over-week comparison) works better than notifications/streaks.',
    category: 'User Psychology',
    priority: 'Medium',
    impact: 'High',
    affectedUsers: 3,
    percentage: '43% (highly disciplined users)'
  },
  {
    id: 'insight-19',
    title: 'Smart Ring Adoption for Recovery Tracking',
    description: 'Shubham uses HART smart ring (Fitter company) for HRV, sleep, recovery tracking. Checks recovery every morning. Found it highly accurate (HRV dropped when dehydrated, rose after drinking water). Wearable integration + recovery insights are valuable for advanced users. Missing feature: Find My Ring (lost it multiple times).',
    category: 'Product Integration',
    priority: 'Medium',
    impact: 'Medium',
    affectedUsers: 3,
    percentage: '43% (tech-savvy users)'
  },
  {
    id: 'insight-20',
    title: 'Holistic Wellness (Mental + Physical + Nutrition) is Missing Market Need',
    description: 'Praneeth: "There was not a one point solution. I had to run after a lot of people - for mental wellness, for physical wellness, for dietitians." Current apps fragment the solution. Key realization: "Unless you are mentally fit, physical fitness alone is insufficient." This represents a MAJOR market gap - no app integrates mental health support with fitness and nutrition. Opportunity: First-mover advantage in holistic wellness platform.',
    category: 'Product Strategy',
    priority: 'Critical',
    impact: 'Very High',
    affectedUsers: 1,
    percentage: '11% of sample, but represents growing wellness market trend'
  },
  {
    id: 'insight-21',
    title: 'Wearable Health Concerns: Radiation & Over-tracking Anxiety',
    description: 'Praneeth: Doctor advised against smartwatches due to laser/radiation health concerns. Also experienced: over-tracking creates unhealthy obsession ("You will actually have over exhausted trying to hit 1000 steps when 800 is enough"). Used Noise and Samsung watches but stopped. Switched to manual journaling which felt "more human" and connected. Some health-conscious users AVOID wearables - must support non-wearable tracking paths.',
    category: 'User Segmentation',
    priority: 'High',
    impact: 'Medium',
    affectedUsers: 1,
    percentage: '11% of sample, growing health-conscious segment'
  },
  {
    id: 'insight-22',
    title: 'Recovery from Health Crisis Requires Adaptive Fitness Plans',
    description: 'Praneeth: Had to stop intense training due to health crisis (fainting, autoimmune issues, hospital admissions). Sleep issues (1-2hrs → 7hrs took 6-7 months to fix). Body now opposes high-intensity workouts after 5-6 years of static lifestyle. Needs baby-step progression starting from basic cardio. Diet changes frequently with body conditions - plans need REAL-TIME adaptability, not static plans based on height/weight.',
    category: 'Features',
    priority: 'High',
    impact: 'High',
    affectedUsers: 1,
    percentage: '11% (recovery users), but critical unmet need'
  },
  {
    id: 'insight-23',
    title: 'Human Touch > Pure AI: Apps Feel Too Mechanical',
    description: 'Praneeth tried multiple apps but none stuck because they felt "mechanical and impersonal." Prefers physical trainer who can see him, adjust based on yesterday\'s issues, provide Ayurvedic remedies. Reyena: "AI is okay but human touch would be great. So that I could know 100% genuine." Both want live chat support for doubts during workouts. Solution: Hybrid model with AI recommendations + human coach oversight/chat support.',
    category: 'Product Design',
    priority: 'High',
    impact: 'Very High',
    affectedUsers: 2,
    percentage: '22%'
  },
  {
    id: 'insight-24',
    title: 'Food Cravings are #1 Diet Adherence Barrier for Beginners',
    description: 'Reyena: "I\'m kind of a foodie. Even if I try to eat healthy, I crave junk. So I end up cheating." Main challenge is not knowledge or time - it\'s CRAVINGS. Wants healthier alternatives to satisfy cravings. "If there are two things and less calories, I would opt for the second option." Opportunity: AI-powered craving substitution recommendations (e.g., if craving chips, suggest baked alternatives with similar taste/texture but lower calories).',
    category: 'Features',
    priority: 'High',
    impact: 'High',
    affectedUsers: 2,
    percentage: '22% (Reyena, Shubham sweet cravings)'
  },
  {
    id: 'insight-25',
    title: 'Homemakers Need Time-Efficient Home Workout Solutions',
    description: 'Reyena (30, homemaker, 2 kids): Free in mornings/evenings but tied to kids\' playtime. Does 7k steps on terrace while supervising kids. Wants 30-minute follow-along workout videos (not short clips). Prefers 3 days/week frequency. Equipment is a barrier - needs upfront list. No gym access due to childcare. Opportunity: Homemaker-optimized fitness (minimal equipment, kid-friendly timing, home-based).',
    category: 'Market Opportunity',
    priority: 'High',
    impact: 'High',
    affectedUsers: 1,
    percentage: '11% of sample, represents significant homemaker market segment'
  },
  {
    id: 'insight-26',
    title: 'Live Chat Support Builds Trust for Non-Power Users',
    description: 'Reyena: "If we could chat with somebody, we could just drop them a text... it would be great." Wants live support for posture doubts during workouts, nutrition questions. Praneeth values human guidance over pure AI. This is different from power users (Ramesh, Dhruv) who prefer autonomous control. Beginner/intermediate users need safety net of human expert availability.',
    category: 'Features',
    priority: 'High',
    impact: 'Medium',
    affectedUsers: 2,
    percentage: '22% (beginner/intermediate segment)'
  },
  {
    id: 'insight-27',
    title: 'Regional Food Awareness Essential for Practical Diet Plans',
    description: 'Praneeth (Kerala): Trainer asked "In Kerala, you get this thing?" and adapted diet to local ingredients. Staple food is rice. Reyena (Pune): Uses step tracking app but wants precise measurements - "In Indian households, one cup means different measurements." Generic Western-centric meal plans don\'t work. Need regional Indian food database with accurate portions and local ingredient availability.',
    category: 'Product Design',
    priority: 'High',
    impact: 'Medium',
    affectedUsers: 2,
    percentage: '22%, critical for Indian market penetration'
  },
  {
    id: 'insight-28',
    title: 'Self-Progress Comparison > Social Leaderboards for Most Users',
    description: 'Reyena: "I would go for myself. I\'ll get to know what I have improved or maybe demotivated." Prefers weekly self-comparison over competing with others. Praneeth: "Comparing with a different individual doesn\'t make sense. Different body structures, different situations." Social comparison demotivates. Both want to see their own progress trends. Only community-oriented users (Majid, Dhananjay, Jessica) appreciate social features.',
    category: 'UX Design',
    priority: 'High',
    impact: 'High',
    affectedUsers: 7,
    percentage: '78% prefer self-comparison over social comparison'
  }
]

// Intelligent scoring function to rank insights
const calculateInsightScore = (insight) => {
  // Extract numeric percentage (handle formats like "86%", "43% (tech-savvy users)")
  const percentageMatch = insight.percentage.match(/(\d+)%/)
  const percentageValue = percentageMatch ? parseInt(percentageMatch[1]) : 0
  
  // Priority scores
  const priorityScores = {
    'Critical': 100,
    'High': 75,
    'Medium': 50,
    'Low': 25
  }
  
  // Impact scores
  const impactScores = {
    'Very High': 100,
    'High': 75,
    'Medium': 50,
    'Low': 25
  }
  
  const priorityScore = priorityScores[insight.priority] || 50
  const impactScore = impactScores[insight.impact] || 50
  
  // Weighted score: 40% percentage, 35% priority, 25% impact
  const totalScore = (percentageValue * 0.4) + (priorityScore * 0.35) + (impactScore * 0.25)
  
  return {
    ...insight,
    score: totalScore,
    percentageValue
  }
}

// Export top 10 key insights based on intelligent scoring
export const keyInsights = (allInsights || [])
  .map(calculateInsightScore)
  .sort((a, b) => {
    // First sort by score
    if (b.score !== a.score) return b.score - a.score
    // Then by percentage if scores are equal
    if (b.percentageValue !== a.percentageValue) return b.percentageValue - a.percentageValue
    // Then by affected users
    return b.affectedUsers - a.affectedUsers
  })
  .slice(0, 10) // Take only top 10
  .map(({ score, percentageValue, ...insight }) => insight) // Remove scoring fields from export

export const painPointAnalysis = {
  topPainPoints: [
    {
      painPoint: 'Nutrition tracking difficulty',
      frequency: 6,
      severity: 'Critical',
      users: ['Ramesh', 'Aniket', 'Majid', 'Jessica', 'Dhruv', 'Shubham'],
      journeyStage: 'Retention',
      percentage: '86%'
    },
    {
      painPoint: 'App fragmentation / lack of integration',
      frequency: 2,
      severity: 'Critical',
      users: ['Ramesh', 'Dhruv'],
      journeyStage: 'Retention',
      percentage: '29%'
    },
    {
      painPoint: 'Lack of personalization',
      frequency: 4,
      severity: 'High',
      users: ['Ramesh', 'Majid', 'Jessica', 'Dhananjay'],
      journeyStage: 'Consideration',
      percentage: '57%'
    },
    {
      painPoint: 'Notification fatigue',
      frequency: 5,
      severity: 'Medium-High',
      users: ['Ramesh', 'Aniket', 'Jessica', 'Dhruv', 'Shubham'],
      journeyStage: 'Retention',
      percentage: '71%'
    },
    {
      painPoint: 'Accuracy concerns with tracking apps',
      frequency: 3,
      severity: 'High',
      users: ['Majid', 'Aniket', 'Jessica'],
      journeyStage: 'Retention',
      percentage: '43%'
    },
    {
      painPoint: 'Home workout motivation',
      frequency: 3,
      severity: 'Medium',
      users: ['Aniket', 'Jessica', 'Dhananjay'],
      journeyStage: 'Onboarding',
      percentage: '43%'
    },
    {
      painPoint: 'Chronic injury management',
      frequency: 3,
      severity: 'High',
      users: ['Jessica', 'Dhananjay', 'Shubham'],
      journeyStage: 'Retention',
      percentage: '43%'
    },
    {
      painPoint: 'Work stress disrupts routine',
      frequency: 2,
      severity: 'High',
      users: ['Majid', 'Jessica'],
      journeyStage: 'Retention',
      percentage: '29%'
    },
    {
      painPoint: 'Travel disrupts consistency',
      frequency: 2,
      severity: 'High',
      users: ['Ramesh', 'Aniket'],
      journeyStage: 'Retention',
      percentage: '29%'
    },
    {
      painPoint: 'Meal prep time/energy constraints',
      frequency: 3,
      severity: 'High',
      users: ['Ramesh', 'Jessica', 'Shubham'],
      journeyStage: 'Retention',
      percentage: '43%'
    },
    {
      painPoint: 'AI trust concerns',
      frequency: 2,
      severity: 'Medium',
      users: ['Dhananjay', 'Dhruv'],
      journeyStage: 'Consideration',
      percentage: '29%'
    }
  ]
}

export const opportunityAnalysis = {
  topOpportunities: [
    {
      opportunity: 'Integrated All-in-One Platform (Replace 5+ Apps)',
      marketSize: 'Large',
      effort: 'Very High',
      impact: 'Critical',
      users: ['Ramesh', 'Dhruv', 'All power users'],
      priorityScore: 100,
      affectedUsers: 2,
      percentage: '29% of sample, targets power users willing to pay premium'
    },
    {
      opportunity: 'Raw Ingredient-Based Nutrition Tracking',
      marketSize: 'Large',
      effort: 'High',
      impact: 'Critical',
      users: ['Shubham', 'All serious trackers', 'Fitness professionals'],
      priorityScore: 99,
      affectedUsers: 6,
      percentage: '86% (key differentiator vs generic apps)'
    },
    {
      opportunity: 'Nutrition Tracking with Accountability',
      marketSize: 'Large',
      effort: 'High',
      impact: 'Critical',
      users: ['All except Dhananjay'],
      priorityScore: 98,
      affectedUsers: 6,
      percentage: '86%'
    },
    {
      opportunity: 'Tiered Pricing Strategy ($2.50 to $240/month)',
      marketSize: 'Large',
      effort: 'Low',
      impact: 'Critical',
      users: ['All'],
      priorityScore: 98,
      affectedUsers: 7,
      percentage: '100%'
    },
    {
      opportunity: 'AI-Powered Personalized Plans with Human Oversight Option',
      marketSize: 'Large',
      effort: 'High',
      impact: 'Very High',
      users: ['Ramesh', 'Aniket', 'Majid', 'Dhruv', 'Shubham', 'Dhananjay (with human review)'],
      priorityScore: 95,
      affectedUsers: 6,
      percentage: '86%'
    },
    {
      opportunity: 'Workout Set Compensation Algorithm',
      marketSize: 'Medium',
      effort: 'Medium',
      impact: 'Very High',
      users: ['Shubham', 'All volume trackers', 'Advanced users'],
      priorityScore: 93,
      affectedUsers: 4,
      percentage: '57% (addresses consistency challenges)'
    },
    {
      opportunity: 'Fitness Professional B2B2C Model (Trainer Dashboard)',
      marketSize: 'Large',
      effort: 'High',
      impact: 'Very High',
      users: ['Dhruv', 'Shubham', 'All trainers'],
      priorityScore: 92,
      affectedUsers: 2,
      percentage: '29% of sample, represents entire fitness professional market + their clients'
    },
    {
      opportunity: 'Injury-Adaptive Workout Plans',
      marketSize: 'Medium',
      effort: 'High',
      impact: 'Very High',
      users: ['Jessica', 'Dhananjay', 'Shubham', 'All users with chronic conditions'],
      priorityScore: 90,
      affectedUsers: 3,
      percentage: '43%'
    },
    {
      opportunity: 'Work Stress Integration',
      marketSize: 'Large',
      effort: 'Medium',
      impact: 'High',
      users: ['Majid', 'Jessica', 'Aniket'],
      priorityScore: 88,
      affectedUsers: 3,
      percentage: '43%'
    },
    {
      opportunity: 'Menstrual Cycle Awareness (Female-focused)',
      marketSize: 'Large (50% of market)',
      effort: 'Medium',
      impact: 'High',
      users: ['Jessica', 'All future female users'],
      priorityScore: 85,
      affectedUsers: 1,
      percentage: '14% of sample, 50% of total market'
    },
    {
      opportunity: 'Travel-Friendly Workout Mode',
      marketSize: 'Medium',
      effort: 'Medium',
      impact: 'High',
      users: ['Ramesh', 'Aniket'],
      priorityScore: 85,
      affectedUsers: 2,
      percentage: '29%'
    },
    {
      opportunity: 'Flexible Social Settings (Private/Community Toggle)',
      marketSize: 'Large',
      effort: 'Medium',
      impact: 'High',
      users: ['All'],
      priorityScore: 82,
      affectedUsers: 7,
      percentage: '100%'
    },
    {
      opportunity: 'Smart Context-Aware Nudges (Not Annoying)',
      marketSize: 'Large',
      effort: 'Medium',
      impact: 'Medium',
      users: ['All'],
      priorityScore: 75,
      affectedUsers: 7,
      percentage: '100%'
    },
    {
      opportunity: 'Meal Prep Service Integration',
      marketSize: 'Medium',
      effort: 'Medium',
      impact: 'High',
      users: ['Jessica', 'Ramesh', 'Shubham'],
      priorityScore: 75,
      affectedUsers: 3,
      percentage: '43%'
    },
    {
      opportunity: 'Trainer Marketplace',
      marketSize: 'Medium',
      effort: 'Medium',
      impact: 'Medium',
      users: ['Aniket', 'Majid'],
      priorityScore: 70,
      affectedUsers: 2,
      percentage: '29%'
    },
    {
      opportunity: 'AI Recipe Generator from Available Ingredients',
      marketSize: 'Medium',
      effort: 'Medium',
      impact: 'High',
      users: ['Shubham', 'All users seeking variety'],
      priorityScore: 78,
      affectedUsers: 4,
      percentage: '57%'
    }
  ]
}

// Consolidated user personas - intelligently grouped by behavior patterns
export const userPersonas = {
  'Power Users & Fitness Professionals': {
    description: 'Elite fitness enthusiasts and trainers with deep expertise. Highly disciplined, workout 5-6+ days/week. Need advanced features, precision tracking, and client management tools. Value integration over fragmentation. Solo-focused, dislike social features. Tech-savvy AI power users.',
    representatives: ['Ramesh (Advanced)', 'Dhruv (Trainer)', 'Shubham (Coach)'],
    count: 3,
    percentage: '33% of sample',
    keyNeeds: [
      'ONE integrated platform (replace 5+ apps)',
      'Raw ingredient nutrition tracking',
      'Advanced metrics (HRV, MRV, recovery)',
      'Client management dashboard (trainers)',
      'AI-powered personalization (ChatGPT-level)',
      'NO social features / solo private experience',
      'Health data integration (blood work)',
      'Workout set compensation algorithm',
      'Simple intuitive UI (CRITICAL)'
    ],
    willingnessToPay: 'Wide range: $60/year (Dhruv) to $240/month (Ramesh). Medium-High average ($20-50/month)',
    techAdoption: 'Very High (5+ apps, ChatGPT, wearables, understands science)',
    fitnessLevel: 'Very High (5-6 days/week, 2+ hours, 15-30 sets)',
    challenges: [
      'App fragmentation (HUGE gap)',
      'Diet consistency and accuracy',
      'Notification fatigue',
      'Generic AI answers (need specific)',
      'Late meal timing',
      'Need for precise macro tracking'
    ],
    motivationDrivers: ['Performance metrics', 'Visible results', 'Data/science', 'Muscle pump addiction', 'Client success', 'Self-improvement']
  },

  'Intermediate Fitness Enthusiasts': {
    description: 'Regular gym-goers working out 3-4 days/week. Mix of social preferences (partner, community, solo). Pursuing fitness education or specific body composition goals. Value accountability, learning, and personalized plans. Medium tech adoption.',
    representatives: ['Aniket (Business Traveler)', 'Majid (Educated Learner)'],
    count: 2,
    percentage: '22% of sample',
    keyNeeds: [
      'Nutrition tracking with accountability',
      'Travel-friendly workout options',
      'Trainer marketplace / matching',
      'Community features (flexible)',
      'Tailored plans for goals (weight gain, athletic fitness)',
      'Education content',
      'Partner/buddy features'
    ],
    willingnessToPay: 'Low-Medium ($2.50-4/month annual to medium flexible)',
    techAdoption: 'Medium to Medium-High (tried ChatGPT, cautious adopters)',
    fitnessLevel: 'Medium (3-4 days/week, 1-1.5 hours)',
    challenges: [
      'Travel disruption',
      'Meal timing when away from home',
      'Home workout motivation',
      'Time constraints (long work hours)',
      'Accuracy concerns',
      'Generic apps not personalized'
    ],
    motivationDrivers: ['Partner motivation', 'Gym environment', 'Personal progress', 'Trainer guidance', 'Community accountability']
  },

  'Busy Women (Professionals & Homemakers)': {
    description: 'Women (30s-40s) balancing demanding careers or childcare with fitness. Prefer group classes/home workouts depending on schedule flexibility. Need work-life balance support or kid-friendly timing. Unique needs: menstrual cycle awareness, meal prep constraints, food cravings management, injury management. Value convenience and affordability.',
    representatives: ['Jessica (Teacher, Group Classes)', 'Reyena (Homemaker, Home Workouts)'],
    count: 2,
    percentage: '22% of sample, represents 50% of total market (female segment)',
    keyNeeds: [
      'Menstrual cycle-aware workout/diet plans',
      'Meal prep solutions for busy schedules',
      'Group class integration OR home workout videos (30-min follow-along)',
      'Social validation features OR self-progress tracking',
      'Injury-adaptive workouts',
      'Dietary restriction support (pescatarian, etc.)',
      'Work stress integration OR childcare time flexibility',
      'Affordable pricing',
      'Craving substitution recommendations',
      'Equipment-minimal home workouts'
    ],
    willingnessToPay: 'Low-Medium (affordable, budget-conscious)',
    techAdoption: 'Medium (Apple Watch user, step tracking apps, prefers human touch over pure AI)',
    fitnessLevel: 'Beginner to Medium (7k steps daily OR 3-4 days/week group classes)',
    challenges: [
      'Work stress OR childcare schedule derails routine',
      'Meal prep time/energy constraints',
      'Food cravings (#1 diet adherence barrier)',
      'Scale demotivation',
      'Chronic injuries OR menstrual cycle energy fluctuations',
      'Time constraints with family/work',
      'Equipment availability',
      'Consistency challenges'
    ],
    motivationDrivers: ['Group classes OR solo home workouts', 'Social feedback AND self-progress', 'External validation', 'Work-life balance OR family schedule', 'Stress management', 'Weight loss goals']
  },

  'Health-Conscious Experienced Professionals': {
    description: 'Mature professionals (40s-50s+) focused on health maintenance and preventing degeneration. NOT performance-focused. Value community but cautious about AI. Need human oversight, GDPR compliance, injury management. Prefer incremental changes over complete overhauls.',
    representatives: ['Dr. Dhananjay Kumar (40s-50s, Airbus)'],
    count: 1,
    percentage: '11% of sample, represents older demographic & European market',
    keyNeeds: [
      'Chronic injury management (back pain)',
      'Small incremental diet changes (NOT complete overhaul)',
      'Unified information platform (replace scattered sources)',
      'Human-reviewed AI (not pure AI)',
      'GDPR compliance & data privacy',
      'Free trial period required',
      'Community gym classes (familiar faces)',
      'Recovery guidance centralized'
    ],
    willingnessToPay: 'Medium-High (with privacy assurance + free trial first)',
    techAdoption: 'Medium (Fitbit user, cautious about AI, prefers human touch)',
    fitnessLevel: 'Medium (2-3x gym + swimming weekly)',
    challenges: [
      'Chronic back pain requiring exercise selection',
      'Scattered information sources',
      'AI trust issues (prefers human)',
      'Home workout motivation',
      'Generic apps not personalized',
      'Previous burnout from work travel'
    ],
    motivationDrivers: ['Feeling good after workout', 'Preventing degeneration', 'Gym community', 'Seeing fit peers', 'Historical progress data', 'NOT competition']
  },

  'Holistic Wellness Seekers (Recovery & Mental Health Focus)': {
    description: 'Tech-savvy professionals (late 20s-30s) recovering from health crises or focused on holistic wellness. Previously advanced users now prioritizing mental health as foundation for physical fitness. Anti-over-tracking, value human touch despite tech proficiency. Seek ONE integrated solution for mental + physical + nutritional health. Prefer manual journaling over wearables. Need adaptive plans that respond to changing body conditions.',
    representatives: ['Praneeth (UX Strategist, Holistic Wellness)'],
    count: 1,
    percentage: '11% of sample, represents growing wellness-first market segment',
    keyNeeds: [
      'Holistic integration: Mental health + Physical fitness + Nutrition in ONE app',
      'Adaptive plans for changing body conditions (not static height/weight plans)',
      'Human touch + live chat support (despite being tech-savvy)',
      'Non-wearable tracking options (health/radiation concerns)',
      'Positive solution-focused messaging (not problem/fear-based)',
      'Regional food awareness (Kerala staples, etc.)',
      'Anti-over-tracking features (avoid micromanagement anxiety)',
      'Recovery-focused gradual progression (baby steps from basics)',
      'Ayurvedic/traditional wisdom integration',
      'Self-progress comparison (NO social leaderboards)',
      'Manual journaling option ("more human" feeling)'
    ],
    willingnessToPay: 'Medium ($20-50/month for right holistic solution)',
    techAdoption: 'Very High (UX professional, ChatGPT user) BUT prefers human guidance',
    fitnessLevel: 'Low-Intermediate (yoga, meditation, walking, light jogging - recovery mode)',
    challenges: [
      'Finding ONE holistic solution (had to run after multiple people)',
      'Apps feel mechanical and impersonal (tried many, none stuck)',
      'Body adaptation after health crisis and long break',
      'Over-tracking creates unhealthy stress',
      'Wearable health concerns (radiation/laser from smartwatches)',
      'Frequent diet changes as body conditions fluctuate',
      'Sleep recovery (1-2hrs → 7hrs took 6-7 months)',
      'Mental wellness is foundation - physical alone insufficient'
    ],
    motivationDrivers: ['Mental peace', 'Holistic health', 'Recovery from crisis', 'Human connection', 'Natural/traditional approaches', 'Self-improvement without stress', 'Avoiding past health problems']
  }
}
