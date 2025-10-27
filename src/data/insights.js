// Analytics and insights from 6 real user interviews

export const analyticsData = {
  totalParticipants: 6,

  userTypes: {
    'Advanced': 1,  // Amish
    'Intermediate': 4,  // Aniket, Majid, Jessica, Dhananjay
    'Power User': 1  // Dhruv (fitness professional)
  },

  gender: {
    'Male': 5,  // Amish, Aniket, Majid, Dhananjay, Dhruv
    'Female': 1  // Jessica
  },

  fitnessLevels: {
    'Very High': 1,  // Dhruv (8-15 workouts/month, professional)
    'High': 1,  // Amish (6 days, 2hrs)
    'Medium': 4  // Aniket (4 days), Majid (3-4 days), Jessica (3-4 days), Dhananjay (2-3 days + swimming)
  },

  budgets: {
    'Very High ($180-240/month)': 1,  // Amish
    'Medium-High': 1,  // Dhananjay (with GDPR privacy requirements)
    'Medium': 2,  // Majid, Jessica
    'Low-Medium ($60/year)': 1,  // Dhruv
    'Medium-Low ($2.50-4/month)': 1  // Aniket
  },

  techAdoption: {
    'Very High': 2,  // Amish (ChatGPT power user), Dhruv (5+ apps, Whoop, understands HRV)
    'Medium-High': 2,  // Aniket, Jessica (Apple Watch)
    'Medium': 2  // Majid, Dhananjay (Fitbit, cautious about AI)
  },

  commonGoals: {
    'Weight Loss': 2,  // Jessica, Dhruv (25%→20% body fat)
    'Weight Gain': 1,  // Aniket
    'Weight Maintenance': 2,  // Amish, Dhananjay (prevent degeneration)
    'Muscle Building': 4,  // Amish, Aniket, Majid, Dhruv
    'Athletic Fitness': 1,  // Majid
    'Work-Life Balance': 1,  // Jessica
    'Cardio': 1,  // Amish
    'Performance (Strength PRs)': 1,  // Dhruv
    'Prevent Degeneration': 1,  // Dhananjay
    'Manage Chronic Conditions': 1  // Dhananjay (back pain)
  },

  commonChallenges: {
    'Nutrition Tracking': 5,  // Amish, Aniket, Majid, Jessica, Dhruv
    'App Fragmentation': 2,  // Amish, Dhruv (5+ apps each)
    'Work Stress': 2,  // Majid (9-10hr), Jessica (teaching)
    'Travel Disruption': 2,  // Amish, Aniket
    'Meal Prep Time': 2,  // Amish, Jessica
    'Time Constraints': 5,  // Amish, Aniket, Majid, Jessica, Dhruv
    'Notification Fatigue': 4,  // Amish, Aniket, Jessica, Dhruv
    'Home Workout Motivation': 3,  // Aniket, Jessica, Dhananjay
    'Chronic Injuries': 2,  // Jessica (knee), Dhananjay (back)
    'Lack of Personalization': 4,  // Amish, Majid, Jessica, Dhananjay
    'AI Trust Issues': 2,  // Dhananjay (prefers human), Dhruv (not specific enough)
    'Bad Sleep': 1,  // Dhruv
    'Frequent Illness': 1  // Dhruv
  },

  preferredActivities: {
    'Gym': 6,  // ALL participants prefer gym
    'Group Classes': 2,  // Jessica, Dhananjay (HIIT)
    'Boxing': 1,  // Amish
    'Walking': 1,  // Jessica (Sunday group)
    'Cycling': 1,  // Amish
    'Hiking': 1,  // Majid
    'Running/Sprinting': 1,  // Majid
    'Swimming': 1,  // Dhananjay
    'HIIT Classes': 1,  // Dhananjay
    'Resistance Training': 1  // Dhruv
  },

  willingnessToPay: {
    'Very High ($180-240/month)': 1,  // Amish
    'Medium-High (with data privacy)': 1,  // Dhananjay (wants free trial first)
    'Medium ($20-50/month)': 2,  // Majid, Jessica
    'Low-Medium ($60/year)': 1,  // Dhruv
    'Low ($2.50-4/month)': 1  // Aniket
  },

  socialPreferences: {
    'Solo': 2,  // Amish, Dhruv (strong preference, dislikes distractions)
    'Partner': 1,  // Aniket
    'Community': 2,  // Majid, Dhananjay (gym classes with familiar faces)
    'Group Classes': 1  // Jessica
  },

  painPointFrequency: {
    'Nutrition tracking difficulty': 5,  // 83% (5/6)
    'App fragmentation': 2,  // 33% (2/6)
    'Accuracy concerns': 3,  // 50% (3/6)
    'Work stress impact': 2,  // 33% (2/6)
    'Travel disruption': 2,  // 33% (2/6)
    'Meal prep time': 2,  // 33% (2/6)
    'Notification fatigue': 4,  // 67% (4/6)
    'Lack of personalization': 4,  // 67% (4/6)
    'Chronic injury management': 2,  // 33% (2/6)
    'AI trust concerns': 2  // 33% (2/6)
  }
}

export const keyInsights = [
  {
    id: 'insight-1',
    title: 'Nutrition Tracking is Universal #1 Pain Point',
    description: '83% of participants (5/6) struggle with nutrition tracking. This is the BIGGEST opportunity. Amish: no personalized guidance. Aniket: cannot meet targets when traveling. Majid: needs systematic accountable way. Jessica: meal prep time/energy constraints. Dhruv: diet consistency is hardest challenge.',
    category: 'Critical Pain Point',
    priority: 'Critical',
    impact: 'Very High',
    affectedUsers: 5,
    percentage: '83%'
  },
  {
    id: 'insight-2',
    title: 'Extreme Price Sensitivity: 60-96x Range',
    description: 'Willingness to pay varies dramatically from $2.50/month (Aniket) to $240/month (Amish). Dhruv would pay $60/year for integrated solution. Dhananjay wants free trial first with GDPR compliance. MUST have tiered pricing strategy: Free tier, $5-10, $20-30, $50-100, $150-250.',
    category: 'Business Model',
    priority: 'Critical',
    impact: 'Very High',
    affectedUsers: 6,
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
    description: 'Amish & Dhruv: Solo (hate social features, want ME time). Aniket: Partner-focused. Majid & Dhananjay: Community-oriented (gym classes with familiar faces). Jessica: Group classes. Solution: Flexible social settings with private/community toggle.',
    category: 'Features',
    priority: 'High',
    impact: 'Very High',
    affectedUsers: 6,
    percentage: '100%'
  },
  {
    id: 'insight-5',
    title: 'Notification Fatigue Affects 67% of Users',
    description: 'Amish: annoying, has internal clock. Aniket: keeps notifications OFF. Jessica: does not engage with app reminders. Dhruv: finds them frustrating, reminds him of failure. BUT Dhananjay: notifications helpful for visual confirmation. Solution: Context-aware, flexible time windows, opt-in only.',
    category: 'UX Design',
    priority: 'High',
    impact: 'High',
    affectedUsers: 4,
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
    description: 'ALL 6 participants prefer gym/group classes. Home workouts: no motivation (Jessica, Aniket, Dhananjay), no space (Majid), only during lockdown (Amish), don\'t enjoy bodyweight (Dhruv). BUT still need travel-friendly no-equipment options.',
    category: 'Market Opportunity',
    priority: 'Medium',
    impact: 'High',
    affectedUsers: 6,
    percentage: '100%'
  },
  {
    id: 'insight-8',
    title: 'AI Trust is Polarized: High Trust vs Need Human Oversight',
    description: 'High trust: Amish 90-99%, Aniket tried ChatGPT. Conditional: Majid (if tailored), Dhruv (gets general not specific answers). Low trust: Dhananjay prefers human-reviewed AI, Jessica doesn\'t use AI. KEY: Power users want it, older users need human touch, must be personalized.',
    category: 'Features',
    priority: 'High',
    impact: 'High',
    affectedUsers: 5,
    percentage: '83%'
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
    description: 'Dhruv (trainer): wants ONE app for both personal tracking AND client management dashboard. Current gap: separate apps for personal use vs client management. Opportunity: B2B2C model targeting fitness professionals as power users and customer acquisition channel.',
    category: 'Market Opportunity',
    priority: 'High',
    impact: 'Very High',
    affectedUsers: 1,
    percentage: '17% (fitness professionals = significant market segment)'
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
    affectedUsers: 6,
    percentage: '100% (affects all age groups differently)'
  }
]

export const painPointAnalysis = {
  topPainPoints: [
    {
      painPoint: 'Nutrition tracking difficulty',
      frequency: 5,
      severity: 'Critical',
      users: ['Amish', 'Aniket', 'Majid', 'Jessica', 'Dhruv'],
      journeyStage: 'Retention',
      percentage: '83%'
    },
    {
      painPoint: 'App fragmentation / lack of integration',
      frequency: 2,
      severity: 'Critical',
      users: ['Amish', 'Dhruv'],
      journeyStage: 'Retention',
      percentage: '33%'
    },
    {
      painPoint: 'Lack of personalization',
      frequency: 4,
      severity: 'High',
      users: ['Amish', 'Majid', 'Jessica', 'Dhananjay'],
      journeyStage: 'Consideration',
      percentage: '67%'
    },
    {
      painPoint: 'Notification fatigue',
      frequency: 4,
      severity: 'Medium-High',
      users: ['Amish', 'Aniket', 'Jessica', 'Dhruv'],
      journeyStage: 'Retention',
      percentage: '67%'
    },
    {
      painPoint: 'Accuracy concerns with tracking apps',
      frequency: 3,
      severity: 'High',
      users: ['Majid', 'Aniket', 'Jessica'],
      journeyStage: 'Retention',
      percentage: '50%'
    },
    {
      painPoint: 'Home workout motivation',
      frequency: 3,
      severity: 'Medium',
      users: ['Aniket', 'Jessica', 'Dhananjay'],
      journeyStage: 'Onboarding',
      percentage: '50%'
    },
    {
      painPoint: 'Chronic injury management',
      frequency: 2,
      severity: 'High',
      users: ['Jessica', 'Dhananjay'],
      journeyStage: 'Retention',
      percentage: '33%'
    },
    {
      painPoint: 'Work stress disrupts routine',
      frequency: 2,
      severity: 'High',
      users: ['Majid', 'Jessica'],
      journeyStage: 'Retention',
      percentage: '33%'
    },
    {
      painPoint: 'Travel disrupts consistency',
      frequency: 2,
      severity: 'High',
      users: ['Amish', 'Aniket'],
      journeyStage: 'Retention',
      percentage: '33%'
    },
    {
      painPoint: 'Meal prep time/energy constraints',
      frequency: 2,
      severity: 'High',
      users: ['Amish', 'Jessica'],
      journeyStage: 'Retention',
      percentage: '33%'
    },
    {
      painPoint: 'AI trust concerns',
      frequency: 2,
      severity: 'Medium',
      users: ['Dhananjay', 'Dhruv'],
      journeyStage: 'Consideration',
      percentage: '33%'
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
      percentage: '33% of sample, targets power users willing to pay premium'
    },
    {
      opportunity: 'Nutrition Tracking with Accountability',
      marketSize: 'Large',
      effort: 'High',
      impact: 'Critical',
      users: ['All except Dhananjay'],
      priorityScore: 98,
      affectedUsers: 5,
      percentage: '83%'
    },
    {
      opportunity: 'Tiered Pricing Strategy ($2.50 to $240/month)',
      marketSize: 'Large',
      effort: 'Low',
      impact: 'Critical',
      users: ['All'],
      priorityScore: 98,
      affectedUsers: 6,
      percentage: '100%'
    },
    {
      opportunity: 'AI-Powered Personalized Plans with Human Oversight Option',
      marketSize: 'Large',
      effort: 'High',
      impact: 'Very High',
      users: ['Amish', 'Aniket', 'Majid', 'Dhruv', 'Dhananjay (with human review)'],
      priorityScore: 95,
      affectedUsers: 5,
      percentage: '83%'
    },
    {
      opportunity: 'Fitness Professional B2B2C Model (Trainer Dashboard)',
      marketSize: 'Large',
      effort: 'High',
      impact: 'Very High',
      users: ['Dhruv', 'All trainers'],
      priorityScore: 92,
      affectedUsers: 1,
      percentage: '17% of sample, represents entire fitness professional market'
    },
    {
      opportunity: 'Injury-Adaptive Workout Plans',
      marketSize: 'Medium',
      effort: 'High',
      impact: 'Very High',
      users: ['Jessica', 'Dhananjay', 'All users with chronic conditions'],
      priorityScore: 90,
      affectedUsers: 2,
      percentage: '33%'
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
    percentage: '17%',
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
    percentage: '17%',
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
    percentage: '17%',
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
    percentage: '17% of sample, represents 50% of total market',
    keyNeeds: ['Menstrual cycle awareness', 'Meal prep solutions', 'Social validation', 'Group classes', 'Injury management'],
    willingnessToPay: 'Medium (affordable options)',
    techAdoption: 'Medium-High',
    fitnessLevel: 'Medium (3-4 days/week group classes)',
    challenges: ['Work stress', 'Meal prep time', 'Scale demotivation', 'Dietary restrictions (pescatarian)']
  },
  'Experienced Professional (Older Demographic)': {
    description: 'Mature professional (40s-50s+) focused on health maintenance and preventing degeneration. Values community but cautious about AI. Requires privacy compliance (GDPR). Prefers human oversight.',
    representative: 'Dr. Dhananjay Kumar',
    count: 1,
    percentage: '17% of sample, represents older demographic segment',
    keyNeeds: ['Chronic injury management (back pain)', 'Small incremental diet changes', 'Unified information source', 'Human-reviewed AI', 'GDPR compliance', 'Free trial period', 'Community/group classes'],
    willingnessToPay: 'Medium-High (with data privacy assurance and free trial)',
    techAdoption: 'Medium (Fitbit user, cautious about AI)',
    fitnessLevel: 'Medium (2-3x gym + swimming weekly)',
    challenges: ['Chronic back pain', 'Scattered information sources', 'AI trust issues', 'Home workout motivation', 'Generic apps not personalized']
  },
  'Fitness Professional Power User': {
    description: 'Fitness trainer/professional with dual needs: personal tracking + client management. Extremely data-driven, uses 5+ apps. Athletic background. Wants integrated solution for personal and professional use.',
    representative: 'Dhruv',
    count: 1,
    percentage: '17% of sample, represents fitness professional market + gateway to their clients',
    keyNeeds: ['ONE integrated app (replace Whoop + HealthifyMe + Hevy + Apple Health + Excel)', 'Client dashboard for trainer work', 'Micronutrient tracking → illness correlation', 'Advanced metrics (HRV, MRV)', 'Culturally relevant meals (Indian)', 'Simple intuitive UI (CRITICAL)', 'Annual subscription model'],
    willingnessToPay: 'Low-Medium ($60/year for integrated solution with good UI)',
    techAdoption: 'Very High (5+ apps, understands HRV science, uses ChatGPT)',
    fitnessLevel: 'Very High (8-15 workouts/month, fitness professional)',
    challenges: ['HUGE app fragmentation gap', 'Diet consistency (not workouts)', 'Bad sleep', 'Frequent illness', 'High cholesterol', 'AI gives general not specific answers', 'Notification frustration']
  }
}
