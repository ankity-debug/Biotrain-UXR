// Analytics and insights from 4 real user interviews

export const analyticsData = {
  totalParticipants: 4,

  userTypes: {
    'Advanced': 1,  // Amish
    'Intermediate': 3  // Aniket, Majid, Jessica
  },

  gender: {
    'Male': 3,  // Amish, Aniket, Majid
    'Female': 1  // Jessica
  },

  fitnessLevels: {
    'High': 1,  // Amish (6 days, 2hrs)
    'Medium': 3  // Aniket (4 days), Majid (3-4 days), Jessica (3-4 days)
  },

  budgets: {
    'Very High ($180-240/month)': 1,  // Amish
    'Medium': 2,  // Majid, Jessica
    'Medium-Low ($2.50-4/month)': 1  // Aniket
  },

  techAdoption: {
    'Very High': 1,  // Amish (ChatGPT power user)
    'Medium-High': 2,  // Aniket, Jessica (Apple Watch)
    'Medium': 1  // Majid
  },

  commonGoals: {
    'Weight Loss': 1,  // Jessica
    'Weight Gain': 1,  // Aniket
    'Weight Maintenance': 1,  // Amish
    'Muscle Building': 3,  // Amish, Aniket, Majid
    'Athletic Fitness': 1,  // Majid
    'Work-Life Balance': 1,  // Jessica
    'Cardio': 1  // Amish
  },

  commonChallenges: {
    'Nutrition Tracking': 4,  // ALL participants
    'Work Stress': 2,  // Majid (9-10hr), Jessica (teaching)
    'Travel Disruption': 2,  // Amish, Aniket
    'Meal Prep Time': 2,  // Amish, Jessica
    'Time Constraints': 4,  // ALL participants
    'Notification Fatigue': 3,  // Amish, Aniket, Jessica
    'Home Workout Motivation': 2  // Aniket, Jessica
  },

  preferredActivities: {
    'Gym': 4,  // ALL participants prefer gym
    'Group Classes': 1,  // Jessica
    'Boxing': 1,  // Amish
    'Walking': 1,  // Jessica (Sunday group)
    'Cycling': 1,  // Amish
    'Hiking': 1,  // Majid
    'Running/Sprinting': 1  // Majid
  },

  willingnessToPay: {
    'Very High ($180-240/month)': 1,  // Amish
    'Medium ($20-50/month)': 2,  // Majid, Jessica
    'Low ($2.50-4/month)': 1  // Aniket
  },

  socialPreferences: {
    'Solo': 1,  // Amish
    'Partner': 1,  // Aniket
    'Community': 1,  // Majid
    'Group Classes': 1  // Jessica
  },

  painPointFrequency: {
    'Nutrition tracking difficulty': 4,  // 100%
    'Accuracy concerns': 3,  // 75%
    'Work stress impact': 2,  // 50%
    'Travel disruption': 2,  // 50%
    'Meal prep time': 2,  // 50%
    'Notification fatigue': 3  // 75%
  }
}

export const keyInsights = [
  {
    id: 'insight-1',
    title: 'Nutrition Tracking is Universal #1 Pain Point',
    description: '100% of participants (4/4) struggle with nutrition tracking. This is the BIGGEST opportunity. Amish: no personalized guidance. Aniket: cannot meet targets when traveling. Majid: needs systematic accountable way. Jessica: meal prep time/energy constraints.',
    category: 'Critical Pain Point',
    priority: 'Critical',
    impact: 'Very High',
    affectedUsers: 4,
    percentage: '100%'
  },
  {
    id: 'insight-2',
    title: 'Extreme Price Sensitivity: 60-96x Range',
    description: 'Willingness to pay varies dramatically from $2.50/month (Aniket) to $240/month (Amish). MUST have tiered pricing strategy: Free tier, $5-10, $20-30, $50-100, $150-250.',
    category: 'Business Model',
    priority: 'Critical',
    impact: 'Very High',
    affectedUsers: 4,
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
    percentage: '25% of sample, 50% of market'
  },
  {
    id: 'insight-4',
    title: 'Social Preferences are Completely Polarized',
    description: 'Amish: Solo (hates social features). Aniket: Partner-focused. Majid: Community-oriented. Jessica: Group classes. Solution: Flexible social settings with private/community toggle.',
    category: 'Features',
    priority: 'High',
    impact: 'Very High',
    affectedUsers: 4,
    percentage: '100%'
  },
  {
    id: 'insight-5',
    title: 'Notification Fatigue Affects 75% of Users',
    description: 'Amish: annoying, has internal clock. Aniket: keeps notifications OFF. Jessica: does not engage with app reminders. Solution: Context-aware, flexible time windows, opt-in only.',
    category: 'UX Design',
    priority: 'High',
    impact: 'High',
    affectedUsers: 3,
    percentage: '75%'
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
    description: 'ALL 4 participants prefer gym/group classes. Home workouts: no motivation (Jessica, Aniket), no space (Majid), only during lockdown (Amish). BUT still need travel-friendly no-equipment options.',
    category: 'Market Opportunity',
    priority: 'Medium',
    impact: 'High',
    affectedUsers: 4,
    percentage: '100%'
  },
  {
    id: 'insight-8',
    title: 'AI Trust is High But Conditional',
    description: 'Amish: 90-99% trusts ChatGPT. Aniket: tried ChatGPT, found helpful. Majid: good thing if tailored to individual. Jessica: does not interact with AI. Condition: must be personalized, not generic.',
    category: 'Features',
    priority: 'High',
    impact: 'High',
    affectedUsers: 3,
    percentage: '75%'
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
    percentage: '25% of sample, 50% of market'
  }
]

export const painPointAnalysis = {
  topPainPoints: [
    {
      painPoint: 'Nutrition tracking difficulty',
      frequency: 4,
      severity: 'Critical',
      users: ['Amish', 'Aniket', 'Majid', 'Jessica'],
      journeyStage: 'Retention',
      percentage: '100%'
    },
    {
      painPoint: 'Accuracy concerns with tracking apps',
      frequency: 3,
      severity: 'High',
      users: ['Majid', 'Aniket', 'Jessica'],
      journeyStage: 'Retention',
      percentage: '75%'
    },
    {
      painPoint: 'Notification fatigue',
      frequency: 3,
      severity: 'Medium-High',
      users: ['Amish', 'Aniket', 'Jessica'],
      journeyStage: 'Retention',
      percentage: '75%'
    },
    {
      painPoint: 'Work stress disrupts routine',
      frequency: 2,
      severity: 'High',
      users: ['Majid', 'Jessica'],
      journeyStage: 'Retention',
      percentage: '50%'
    },
    {
      painPoint: 'Travel disrupts consistency',
      frequency: 2,
      severity: 'High',
      users: ['Amish', 'Aniket'],
      journeyStage: 'Retention',
      percentage: '50%'
    },
    {
      painPoint: 'Meal prep time/energy constraints',
      frequency: 2,
      severity: 'High',
      users: ['Amish', 'Jessica'],
      journeyStage: 'Retention',
      percentage: '50%'
    },
    {
      painPoint: 'Home workout motivation',
      frequency: 2,
      severity: 'Medium',
      users: ['Aniket', 'Jessica'],
      journeyStage: 'Onboarding',
      percentage: '50%'
    },
    {
      painPoint: 'Lack of personalized plans',
      frequency: 3,
      severity: 'High',
      users: ['Amish', 'Majid', 'Jessica'],
      journeyStage: 'Consideration',
      percentage: '75%'
    }
  ]
}

export const opportunityAnalysis = {
  topOpportunities: [
    {
      opportunity: 'Nutrition Tracking with Accountability',
      marketSize: 'Large',
      effort: 'High',
      impact: 'Critical',
      users: ['All'],
      priorityScore: 100,
      affectedUsers: 4,
      percentage: '100%'
    },
    {
      opportunity: 'Tiered Pricing Strategy ($2.50 to $240/month)',
      marketSize: 'Large',
      effort: 'Low',
      impact: 'Critical',
      users: ['All'],
      priorityScore: 98,
      affectedUsers: 4,
      percentage: '100%'
    },
    {
      opportunity: 'AI-Powered Personalized Plans',
      marketSize: 'Large',
      effort: 'High',
      impact: 'Very High',
      users: ['Amish', 'Aniket', 'Majid'],
      priorityScore: 95,
      affectedUsers: 3,
      percentage: '75%'
    },
    {
      opportunity: 'Work Stress Integration',
      marketSize: 'Large',
      effort: 'Medium',
      impact: 'High',
      users: ['Majid', 'Jessica', 'Aniket'],
      priorityScore: 88,
      affectedUsers: 3,
      percentage: '75%'
    },
    {
      opportunity: 'Menstrual Cycle Awareness (Female-focused)',
      marketSize: 'Large (50% of market)',
      effort: 'Medium',
      impact: 'High',
      users: ['Jessica', 'All future female users'],
      priorityScore: 85,
      affectedUsers: 1,
      percentage: '25% of sample, 50% of total market'
    },
    {
      opportunity: 'Travel-Friendly Workout Mode',
      marketSize: 'Medium',
      effort: 'Medium',
      impact: 'High',
      users: ['Amish', 'Aniket'],
      priorityScore: 85,
      affectedUsers: 2,
      percentage: '50%'
    },
    {
      opportunity: 'Flexible Social Settings (Private/Community Toggle)',
      marketSize: 'Large',
      effort: 'Medium',
      impact: 'High',
      users: ['All'],
      priorityScore: 82,
      affectedUsers: 4,
      percentage: '100%'
    },
    {
      opportunity: 'Smart Context-Aware Nudges (Not Annoying)',
      marketSize: 'Large',
      effort: 'Medium',
      impact: 'Medium',
      users: ['All'],
      priorityScore: 75,
      affectedUsers: 4,
      percentage: '100%'
    },
    {
      opportunity: 'Meal Prep Service Integration',
      marketSize: 'Medium',
      effort: 'Medium',
      impact: 'High',
      users: ['Jessica', 'Amish'],
      priorityScore: 75,
      affectedUsers: 2,
      percentage: '50%'
    },
    {
      opportunity: 'Trainer Marketplace',
      marketSize: 'Medium',
      effort: 'Medium',
      impact: 'Medium',
      users: ['Aniket', 'Majid'],
      priorityScore: 70,
      affectedUsers: 2,
      percentage: '50%'
    }
  ]
}

export const userPersonas = {
  'Solo Advanced User': {
    description: 'Highly disciplined, self-motivated fitness enthusiast. Values privacy, efficiency, and health data integration. Willing to pay premium.',
    representative: 'Amish',
    count: 1,
    percentage: '25%',
    keyNeeds: ['Health data integration', 'AI personalization', 'Integrated platform', 'NO social features', 'Privacy'],
    willingnessToPay: 'Very High ($180-240/month)',
    techAdoption: 'Very High',
    fitnessLevel: 'High (6 days/week, 2 hours)',
    challenges: ['Late meal timing', 'Travel disruption', 'Need for integration']
  },
  'Business Traveler': {
    description: 'Busy professional who travels frequently for work. Needs gym environment motivation and partner support. Price-sensitive.',
    representative: 'Aniket',
    count: 1,
    percentage: '25%',
    keyNeeds: ['Travel-friendly workouts', 'Trainer marketplace', 'Partner features', 'Weight gain support'],
    willingnessToPay: 'Medium-Low ($2.50-4/month)',
    techAdoption: 'Medium-High',
    fitnessLevel: 'Medium (4 days/week, 1.5 hours)',
    challenges: ['Travel disruption', 'Meal timing when away', 'Home workout motivation']
  },
  'Educated Learner': {
    description: 'Intermediate user pursuing fitness education (certifications). Values community, learning, and accountability. Athletic focus.',
    representative: 'Majid',
    count: 1,
    percentage: '25%',
    keyNeeds: ['Nutrition tracking/accountability', 'Tailored plans', 'Community features', 'Education content'],
    willingnessToPay: 'Medium (flexible based on value)',
    techAdoption: 'Medium',
    fitnessLevel: 'Medium (3-4 days/week)',
    challenges: ['Nutrition accuracy', 'Time constraints (9-10hr job)', 'Generic apps']
  },
  'Busy Professional Female': {
    description: 'Female professional with demanding job. Values group classes, social validation, and work-life balance. Unique female-specific needs.',
    representative: 'Jessica',
    count: 1,
    percentage: '25% of sample, represents 50% of total market',
    keyNeeds: ['Menstrual cycle awareness', 'Meal prep solutions', 'Social validation', 'Group classes', 'Injury management'],
    willingnessToPay: 'Medium (affordable options)',
    techAdoption: 'Medium-High',
    fitnessLevel: 'Medium (3-4 days/week group classes)',
    challenges: ['Work stress', 'Meal prep time', 'Scale demotivation', 'Dietary restrictions (pescatarian)']
  }
}
