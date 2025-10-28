// Analytics and insights from 7 real user interviews

export const analyticsData = {
  totalParticipants: 7,

  userTypes: {
    'Advanced': 1,  // Amish
    'Intermediate': 4,  // Aniket, Majid, Jessica, Dhananjay
    'Power User': 2  // Dhruv (fitness professional), Shubham (trainer/coach)
  },

  gender: {
    'Male': 6,  // Amish, Aniket, Majid, Dhananjay, Dhruv, Shubham
    'Female': 1  // Jessica
  },

  fitnessLevels: {
    'Very High': 2,  // Dhruv (8-15 workouts/month, professional), Shubham (6 days, 25-30 sets, trainer)
    'High': 1,  // Amish (6 days, 2hrs)
    'Medium': 4  // Aniket (4 days), Majid (3-4 days), Jessica (3-4 days), Dhananjay (2-3 days + swimming)
  },

  budgets: {
    'Very High ($180-240/month)': 1,  // Amish
    'Medium-High': 1,  // Dhananjay (with GDPR privacy requirements)
    'Medium': 3,  // Majid, Jessica, Shubham (would pay for value)
    'Low-Medium ($60/year)': 1,  // Dhruv
    'Medium-Low ($2.50-4/month)': 1  // Aniket
  },

  techAdoption: {
    'Very High': 3,  // Amish (ChatGPT power user), Dhruv (5+ apps, Whoop, understands HRV), Shubham (ChatGPT, smart ring)
    'Medium-High': 2,  // Aniket, Jessica (Apple Watch)
    'Medium': 2  // Majid, Dhananjay (Fitbit, cautious about AI)
  },

  commonGoals: {
    'Weight Loss': 2,  // Jessica, Dhruv (25%→20% body fat)
    'Weight Gain': 1,  // Aniket
    'Weight Maintenance': 3,  // Amish, Dhananjay (prevent degeneration), Shubham (12% body fat)
    'Muscle Building': 5,  // Amish, Aniket, Majid, Dhruv, Shubham
    'Athletic Fitness': 1,  // Majid
    'Work-Life Balance': 1,  // Jessica
    'Cardio': 1,  // Amish
    'Performance (Strength PRs)': 1,  // Dhruv
    'Prevent Degeneration': 1,  // Dhananjay
    'Manage Chronic Conditions': 1,  // Dhananjay (back pain)
    'Body Fat Control': 1  // Shubham (maintain 12%, photoshoot body)
  },

  commonChallenges: {
    'Nutrition Tracking': 6,  // Amish, Aniket, Majid, Jessica, Dhruv, Shubham (needs raw ingredients)
    'App Fragmentation': 2,  // Amish, Dhruv (5+ apps each)
    'Work Stress': 2,  // Majid (9-10hr), Jessica (teaching)
    'Travel Disruption': 2,  // Amish, Aniket
    'Meal Prep Time': 3,  // Amish, Jessica, Shubham
    'Time Constraints': 5,  // Amish, Aniket, Majid, Jessica, Dhruv
    'Notification Fatigue': 5,  // Amish, Aniket, Jessica, Dhruv, Shubham
    'Home Workout Motivation': 3,  // Aniket, Jessica, Dhananjay
    'Chronic Injuries': 3,  // Jessica (knee), Dhananjay (back), Shubham (lower back pain)
    'Lack of Personalization': 4,  // Amish, Majid, Jessica, Dhananjay
    'AI Trust Issues': 2,  // Dhananjay (prefers human), Dhruv (not specific enough)
    'Bad Sleep': 1,  // Dhruv
    'Frequent Illness': 1,  // Dhruv
    'Cravings Management': 1,  // Shubham (sweet cravings)
    'Hunger Management': 1  // Shubham
  },

  preferredActivities: {
    'Gym': 7,  // ALL participants prefer gym
    'Group Classes': 2,  // Jessica, Dhananjay (HIIT)
    'Boxing': 1,  // Amish
    'Walking': 1,  // Jessica (Sunday group)
    'Cycling': 1,  // Amish
    'Hiking': 1,  // Majid
    'Running/Sprinting': 2,  // Majid, Shubham (Sunday sprints)
    'Swimming': 1,  // Dhananjay
    'HIIT Classes': 1,  // Dhananjay
    'Resistance Training': 1  // Dhruv
  },

  willingnessToPay: {
    'Very High ($180-240/month)': 1,  // Amish
    'Medium-High (with data privacy)': 1,  // Dhananjay (wants free trial first)
    'Medium ($20-50/month)': 3,  // Majid, Jessica, Shubham
    'Low-Medium ($60/year)': 1,  // Dhruv
    'Low ($2.50-4/month)': 1  // Aniket
  },

  socialPreferences: {
    'Solo': 3,  // Amish, Dhruv (strong preference, dislikes distractions), Shubham (loves working alone)
    'Partner': 1,  // Aniket
    'Community': 2,  // Majid, Dhananjay (gym classes with familiar faces)
    'Group Classes': 1  // Jessica
  },

  painPointFrequency: {
    'Nutrition tracking difficulty': 6,  // 86% (6/7)
    'App fragmentation': 2,  // 29% (2/7)
    'Accuracy concerns': 3,  // 43% (3/7)
    'Work stress impact': 2,  // 29% (2/7)
    'Travel disruption': 2,  // 29% (2/7)
    'Meal prep time': 3,  // 43% (3/7)
    'Notification fatigue': 5,  // 71% (5/7)
    'Lack of personalization': 4,  // 57% (4/7)
    'Chronic injury management': 3,  // 43% (3/7)
    'AI trust concerns': 2,  // 29% (2/7)
    'Cravings/hunger management': 1  // 14% (1/7)
  }
}

// All insights with scoring for intelligent top 10 selection
const allInsights = [
  {
    id: 'insight-1',
    title: 'Nutrition Tracking is Universal #1 Pain Point',
    description: '86% of participants (6/7) struggle with nutrition tracking. This is the BIGGEST opportunity. Amish: no personalized guidance. Aniket: cannot meet targets when traveling. Majid: needs systematic accountable way. Jessica: meal prep time/energy constraints. Dhruv: diet consistency is hardest challenge. Shubham: CRITICAL need for raw ingredient tracking (not "one bowl" measurements) for accuracy.',
    category: 'Critical Pain Point',
    priority: 'Critical',
    impact: 'Very High',
    affectedUsers: 6,
    percentage: '86%'
  },
  {
    id: 'insight-2',
    title: 'Extreme Price Sensitivity: 60-96x Range',
    description: 'Willingness to pay varies dramatically from $2.50/month (Aniket) to $240/month (Amish). Dhruv would pay $60/year for integrated solution. Dhananjay wants free trial first with GDPR compliance. Shubham would pay medium range for valuable features. MUST have tiered pricing strategy: Free tier, $5-10, $20-30, $50-100, $150-250.',
    category: 'Business Model',
    priority: 'Critical',
    impact: 'Very High',
    affectedUsers: 7,
    percentage: '100%'
  },
  {
    id: 'insight-3',
    title: 'Female Users Have Unique Needs',
    description: 'Jessica (only female) has distinct needs: menstrual cycle awareness, social validation > self-motivation, group classes, meal prep constraints, scale demotivation. 50% of market has these needs.',
    category: 'User Segmentation',
    priority: 'High',
    impact: 'High',
    affectedUsers: 1,
    percentage: '14% of sample, 50% of market'
  },
  {
    id: 'insight-4',
    title: 'Social Preferences are Completely Polarized',
    description: 'Amish, Dhruv & Shubham: Solo (hate social features, want ME time, love working alone). Aniket: Partner-focused. Majid & Dhananjay: Community-oriented (gym classes with familiar faces). Jessica: Group classes. Solution: Flexible social settings with private/community toggle.',
    category: 'Features',
    priority: 'High',
    impact: 'Very High',
    affectedUsers: 7,
    percentage: '100%'
  },
  {
    id: 'insight-5',
    title: 'Notification Fatigue Affects 71% of Users',
    description: 'Amish: annoying, has internal clock. Aniket: keeps notifications OFF. Jessica: does not engage with app reminders. Dhruv: finds them frustrating, reminds him of failure. Shubham: doesn\'t like notifications, finds them annoying during busy schedules. BUT Dhananjay: notifications helpful for visual confirmation. Solution: Context-aware, flexible time windows, opt-in only.',
    category: 'UX Design',
    priority: 'High',
    impact: 'High',
    affectedUsers: 5,
    percentage: '71%'
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
    description: 'ALL 7 participants prefer gym/group classes. Home workouts: no motivation (Jessica, Aniket, Dhananjay), no space (Majid), only during lockdown (Amish, Shubham with limited equipment), don\'t enjoy bodyweight (Dhruv). BUT still need travel-friendly no-equipment options.',
    category: 'Market Opportunity',
    priority: 'Medium',
    impact: 'High',
    affectedUsers: 7,
    percentage: '100%'
  },
  {
    id: 'insight-8',
    title: 'AI Trust is Polarized: High Trust vs Need Human Oversight',
    description: 'High trust: Amish 90-99%, Shubham (ChatGPT for nutrition, body fat estimation), Aniket tried ChatGPT. Conditional: Majid (if tailored), Dhruv (gets general not specific answers). Low trust: Dhananjay prefers human-reviewed AI, Jessica doesn\'t use AI. KEY: Power users want it, older users need human touch, must be personalized.',
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
    description: 'Amish & Dhruv each use 5+ apps (MyFitnessPal, Apple Watch, ChatGPT / Whoop, HealthifyMe, Hevy, Apple Health, Excel). Dhruv: "HUGE GAP between apps. Always wished for ONE application." This is THE opportunity for integrated solution targeting power users willing to pay premium.',
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
    description: 'Shubham: "I can\'t live even a single day without workout. That muscle pump is my addiction." Workout is essential for mood management, not optional. Similar to Amish (survival/mental health). For highly disciplined users, intrinsic motivation > external gamification. Progress visibility (week-over-week comparison) works better than notifications/streaks.',
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
      users: ['Amish', 'Aniket', 'Majid', 'Jessica', 'Dhruv', 'Shubham'],
      journeyStage: 'Retention',
      percentage: '86%'
    },
    {
      painPoint: 'App fragmentation / lack of integration',
      frequency: 2,
      severity: 'Critical',
      users: ['Amish', 'Dhruv'],
      journeyStage: 'Retention',
      percentage: '29%'
    },
    {
      painPoint: 'Lack of personalization',
      frequency: 4,
      severity: 'High',
      users: ['Amish', 'Majid', 'Jessica', 'Dhananjay'],
      journeyStage: 'Consideration',
      percentage: '57%'
    },
    {
      painPoint: 'Notification fatigue',
      frequency: 5,
      severity: 'Medium-High',
      users: ['Amish', 'Aniket', 'Jessica', 'Dhruv', 'Shubham'],
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
      users: ['Amish', 'Aniket'],
      journeyStage: 'Retention',
      percentage: '29%'
    },
    {
      painPoint: 'Meal prep time/energy constraints',
      frequency: 3,
      severity: 'High',
      users: ['Amish', 'Jessica', 'Shubham'],
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
      users: ['Amish', 'Dhruv', 'All power users'],
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
      users: ['Amish', 'Aniket', 'Majid', 'Dhruv', 'Shubham', 'Dhananjay (with human review)'],
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
      users: ['Amish', 'Aniket'],
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
      users: ['Jessica', 'Amish', 'Shubham'],
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
    representatives: ['Amish (Advanced)', 'Dhruv (Trainer)', 'Shubham (Coach)'],
    count: 3,
    percentage: '43% of sample',
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
    willingnessToPay: 'Wide range: $60/year (Dhruv) to $240/month (Amish). Medium-High average ($20-50/month)',
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
    percentage: '29% of sample',
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

  'Busy Professionals (Female-focused)': {
    description: 'Working professionals (primarily female, 30s-40s) balancing demanding careers with fitness. Prefer group classes and social validation. Need work-life balance support. Unique needs: menstrual cycle awareness, meal prep constraints, injury management. Value convenience and affordability.',
    representatives: ['Jessica (Teacher, Group Classes)'],
    count: 1,
    percentage: '14% of sample, represents 50% of total market (female segment)',
    keyNeeds: [
      'Menstrual cycle-aware workout/diet plans',
      'Meal prep solutions for busy schedules',
      'Group class integration',
      'Social validation features',
      'Injury-adaptive workouts',
      'Dietary restriction support (pescatarian, etc.)',
      'Work stress integration',
      'Affordable pricing'
    ],
    willingnessToPay: 'Medium (affordable, stopped PT due to cost)',
    techAdoption: 'Medium-High (Apple Watch user, but no AI interaction)',
    fitnessLevel: 'Medium (3-4 days/week group classes)',
    challenges: [
      'Work stress derails routine',
      'Meal prep time/energy after work',
      'Food waste (lives alone)',
      'Scale demotivation',
      'Knee injury history',
      'Limited meal service options for dietary needs'
    ],
    motivationDrivers: ['Group classes', 'Social feedback', 'External validation', 'Work-life balance', 'Stress management']
  },

  'Health-Conscious Experienced Professionals': {
    description: 'Mature professionals (40s-50s+) focused on health maintenance and preventing degeneration. NOT performance-focused. Value community but cautious about AI. Need human oversight, GDPR compliance, injury management. Prefer incremental changes over complete overhauls.',
    representatives: ['Dr. Dhananjay Kumar (40s-50s, Airbus)'],
    count: 1,
    percentage: '14% of sample, represents older demographic & European market',
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
  }
}
