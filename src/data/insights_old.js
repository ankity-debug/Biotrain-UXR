export const analyticsData = {
  userTypes: {
    'Advanced': 2,  // Ramesh, Amish
    'Intermediate': 2,  // Aniket, Aniket
    'Beginner': 1  // Majid
  },
  fitnessLevels: {
    'High': 2,  // Ramesh, Amish
    'Medium': 2,  // Aniket, Aniket
    'Low': 1  // Majid
  },
  budgets: {
    'High': 2,  // Ramesh, Amish
    'Medium-Low': 1,  // Aniket
    'Medium': 1,  // Aniket
    'Low': 1  // Majid
  },
  techAdoption: {
    'High': 3,  // Ramesh, Amish, Aniket
    'Medium-High': 1,  // Aniket
    'Low': 1  // Majid
  },
  commonGoals: {
    'Weight Loss': 3,  // Ramesh, Aniket, Majid
    'Weight Gain': 1,  // Aniket
    'Muscle Building': 3,  // Ramesh, Amish, Aniket
    'Weight Maintenance': 1,  // Amish
    'General Fitness': 1,  // Aniket
    'Health Improvement': 1,  // Majid
    'Cardio': 1,  // Amish
    'Consistency': 1,  // Aniket
    'Stay Active': 1  // Aniket
  },
  commonChallenges: {
    'Motivation': 2,  // Aniket, Majid
    'Time Management': 1,  // Ramesh
    'Late Meal Timing': 1,  // Amish
    'Travel Disruption': 1,  // Aniket
    'Meal Timing When Traveling': 1,  // Aniket
    'Home Workout Motivation': 1,  // Aniket
    'Sedentary Lifestyle': 1,  // Aniket
    'Knowledge Gap': 1,  // Majid
    'Stress Management': 1  // Aniket
  },
  preferredActivities: {
    'Gym': 4,  // Ramesh, Amish, Aniket, Aniket
    'Walking': 3,  // Aniket, Majid, Aniket (evening walks)
    'Boxing': 1,  // Amish
    'Cycling': 2,  // Amish, Aniket
    'Swimming': 2,  // Ramesh, Majid
    'Running': 1,  // Ramesh
    'Home Workouts': 1,  // Aniket
    'Group Classes': 1,  // Majid
    'Resistance Bands': 1  // Aniket (COVID)
  },
  willingnessToPay: {
    'Very High ($180-240/month)': 1,  // Amish
    'High ($50-100/month)': 1,  // Ramesh
    'Medium ($10-20/month)': 1,  // Aniket
    'Medium-Low ($2.50-4/month)': 1,  // Aniket
    'Low ($5-10/month)': 1  // Majid
  },
  trainerUsage: {
    'Has Trainer': 1,  // Aniket
    'No Trainer (Self-guided)': 2,  // Amish, Ramesh
    'No Trainer (Beginner)': 1  // Majid
  },
  workoutPreference: {
    'Solo': 1,  // Amish
    'With Partner': 1,  // Aniket
    'Flexible': 2  // Ramesh, Aniket
  },
  dietApproach: {
    'Self-created': 1,  // Amish
    'Trainer-designed': 1,  // Aniket
    'App-based': 1,  // Ramesh
    'Flexible': 1  // Aniket
  }
}

export const keyInsights = [
  {
    id: 'insight-1',
    title: 'Diverse User Types Require Different Approaches',
    description: 'We have three distinct user types: Advanced (Ramesh, Amish), Intermediate (Aniket, Aniket), and Beginner (Majid). Each requires different onboarding and features.',
    category: 'User Segmentation',
    priority: 'High',
    impact: 'High',
    affectedUsers: 5
  },
  {
    id: 'insight-2',
    title: 'Extreme Price Sensitivity Range ($2.50 to $240/month)',
    description: 'Willingness to pay varies 60-96x from $2.50/month (Aniket) to $240/month (Amish). Critical tiered pricing needed.',
    category: 'Business Model',
    priority: 'High',
    impact: 'High',
    affectedUsers: 5
  },
  {
    id: 'insight-3',
    title: 'Advanced Users Split: Solo vs Social',
    description: 'Advanced users have opposing needs: Amish prefers solo/private workouts, while Ramesh wants community features. Requires flexible social settings.',
    category: 'User Segmentation',
    priority: 'High',
    impact: 'High',
    affectedUsers: 2
  },
  {
    id: 'insight-4',
    title: 'Health Data Integration is Premium Feature',
    description: 'Advanced users (Amish) willing to pay premium for blood work analysis and health clinic integration. Beginner/Intermediate users less interested.',
    category: 'Features',
    priority: 'High',
    impact: 'Medium',
    affectedUsers: 2
  },
  {
    id: 'insight-5',
    title: 'Travel Disruption is Major Pain Point',
    description: '2 out of 5 users struggle with consistency during travel. Need travel-friendly workouts and flexible meal timing.',
    category: 'Features',
    priority: 'High',
    impact: 'High',
    affectedUsers: 2
  },
  {
    id: 'insight-6',
    title: 'Notification Fatigue is Universal',
    description: 'Both Amish and Aniket find excessive notifications annoying. Smart, context-aware nudges needed, not constant reminders.',
    category: 'UX Design',
    priority: 'High',
    impact: 'Medium',
    affectedUsers: 2
  },
  {
    id: 'insight-7',
    title: 'AI Trust is High Among Tech-Savvy Users',
    description: 'Amish trusts ChatGPT 90-99% for fitness advice. Aniket tried ChatGPT and found it helpful. AI recommendations viable for 60% of users.',
    category: 'Features',
    priority: 'Medium',
    impact: 'High',
    affectedUsers: 3
  },
  {
    id: 'insight-8',
    title: 'Gym-Based Users Dominate (80%)',
    description: '4 out of 5 participants prefer gym over home workouts. Home workout solutions less critical than initially thought.',
    category: 'Market Opportunity',
    priority: 'Medium',
    impact: 'High',
    affectedUsers: 4
  },
  {
    id: 'insight-9',
    title: 'Weight Gain Market Underserved',
    description: 'Aniket seeks weight gain support (62kg → 70kg). Most apps focus on weight loss. Calorie surplus tracking needed.',
    category: 'Market Opportunity',
    priority: 'Medium',
    impact: 'Medium',
    affectedUsers: 1
  },
  {
    id: 'insight-10',
    title: 'Trainer Marketplace Opportunity',
    description: 'Aniket wants online trainer matching platform. Intermediate users value trainer guidance but face accessibility issues.',
    category: 'Features',
    priority: 'Medium',
    impact: 'Medium',
    affectedUsers: 2
  }
]

export const painPointAnalysis = {
  topPainPoints: [
    {
      painPoint: 'Lack of integrated platform (fragmented apps)',
      frequency: 3,
      severity: 'High',
      users: ['Ramesh', 'Amish', 'Aniket'],
      journeyStage: 'Consideration/Onboarding'
    },
    {
      painPoint: 'Travel disrupts routine/meal timing',
      frequency: 2,
      severity: 'High',
      users: ['Amish', 'Aniket'],
      journeyStage: 'Retention'
    },
    {
      painPoint: 'Lack of personalized guidance',
      frequency: 3,
      severity: 'High',
      users: ['Ramesh', 'Amish', 'Majid'],
      journeyStage: 'Retention'
    },
    {
      painPoint: 'Difficulty maintaining consistency',
      frequency: 3,
      severity: 'High',
      users: ['Aniket', 'Majid', 'Aniket'],
      journeyStage: 'Retention'
    },
    {
      painPoint: 'Late meal timing / meal prep challenges',
      frequency: 2,
      severity: 'Medium',
      users: ['Amish', 'Aniket'],
      journeyStage: 'Retention'
    },
    {
      painPoint: 'Home workout motivation',
      frequency: 1,
      severity: 'Medium',
      users: ['Aniket'],
      journeyStage: 'Onboarding'
    },
    {
      painPoint: 'Lack of fitness knowledge',
      frequency: 1,
      severity: 'High',
      users: ['Majid'],
      journeyStage: 'Awareness'
    },
    {
      painPoint: 'Trainer availability/accessibility',
      frequency: 1,
      severity: 'Medium',
      users: ['Aniket'],
      journeyStage: 'Consideration'
    }
  ]
}

export const opportunityAnalysis = {
  topOpportunities: [
    {
      opportunity: 'Integrated all-in-one platform (workout + nutrition + health tracking)',
      marketSize: 'Large',
      effort: 'High',
      impact: 'High',
      users: ['All'],
      priorityScore: 95
    },
    {
      opportunity: 'AI-powered personalization engine',
      marketSize: 'Large',
      effort: 'High',
      impact: 'High',
      users: ['Ramesh', 'Amish', 'Aniket', 'Aniket'],
      priorityScore: 92
    },
    {
      opportunity: 'Health data integration (blood work analysis + clinic partnerships)',
      marketSize: 'Medium',
      effort: 'High',
      impact: 'Medium',
      users: ['Amish', 'Ramesh'],
      priorityScore: 75
    },
    {
      opportunity: 'Travel-friendly workout mode',
      marketSize: 'Medium',
      effort: 'Medium',
      impact: 'High',
      users: ['Amish', 'Aniket'],
      priorityScore: 85
    },
    {
      opportunity: 'Trainer marketplace & matching',
      marketSize: 'Medium',
      effort: 'Medium',
      impact: 'Medium',
      users: ['Aniket', 'Majid'],
      priorityScore: 70
    },
    {
      opportunity: 'Weight gain focused features (calorie surplus tracking)',
      marketSize: 'Small',
      effort: 'Low',
      impact: 'High',
      users: ['Aniket'],
      priorityScore: 65
    },
    {
      opportunity: 'Smart context-aware nudges (not annoying notifications)',
      marketSize: 'Large',
      effort: 'Medium',
      impact: 'Medium',
      users: ['All'],
      priorityScore: 80
    },
    {
      opportunity: 'Flexible social settings (solo mode + community mode)',
      marketSize: 'Large',
      effort: 'Medium',
      impact: 'High',
      users: ['Amish', 'Ramesh', 'Aniket'],
      priorityScore: 82
    },
    {
      opportunity: 'Tiered pricing strategy ($2.50 to $240/month)',
      marketSize: 'Large',
      effort: 'Low',
      impact: 'High',
      users: ['All'],
      priorityScore: 90
    },
    {
      opportunity: 'Home-based workout solutions',
      marketSize: 'Small',
      effort: 'Medium',
      impact: 'Medium',
      users: ['Aniket', 'Majid'],
      priorityScore: 60
    },
    {
      opportunity: 'Beginner-friendly guidance',
      marketSize: 'Medium',
      effort: 'Medium',
      impact: 'Medium',
      users: ['Majid'],
      priorityScore: 65
    }
  ]
}

export const userPersonas = {
  'The Advanced Enthusiast': {
    description: 'Experienced fitness enthusiasts who want comprehensive tools and advanced features. Split into Solo and Social variants.',
    representatives: ['Ramesh (Social)', 'Amish (Solo)'],
    keyNeeds: {
      shared: ['Advanced tracking', 'Personalization', 'AI recommendations', 'Health data integration'],
      solo: ['Private experience', 'No social features', 'Self-paced', 'Internal motivation'],
      social: ['Community features', 'Leaderboards', 'Social challenges', 'External motivation']
    },
    willingnessToPay: 'Very High ($50-240/month)',
    techAdoption: 'Very High',
    fitnessLevel: 'High (6 days/week, 2+ hours)',
    challenges: ['Travel disruption', 'Late meal timing', 'Need for integration'],
    count: 2
  },
  'The Busy Professional': {
    description: 'Working professionals who want efficient, time-saving fitness solutions. Split into Office and Business variants.',
    representatives: ['Aniket (Office)', 'Aniket (Business)'],
    keyNeeds: {
      shared: ['Time efficiency', 'Convenience', 'Simple tracking', 'Trainer guidance'],
      office: ['Home workout solutions', 'Sedentary lifestyle solutions'],
      business: ['Travel-friendly workouts', 'Gym environment motivation', 'Partner features']
    },
    willingnessToPay: 'Medium ($2.50-20/month)',
    techAdoption: 'Medium-High',
    fitnessLevel: 'Medium (4 days/week, 1-1.5 hours)',
    challenges: ['Consistency', 'Travel', 'Motivation', 'Meal timing during travel'],
    count: 2
  },
  'The Fitness Beginner': {
    description: 'New to fitness and need guidance, education, and simple tools',
    representative: 'Majid',
    keyNeeds: ['Education', 'Guidance', 'Simplicity', 'Beginner-friendly content'],
    willingnessToPay: 'Low ($5-10/month)',
    techAdoption: 'Low',
    fitnessLevel: 'Low',
    challenges: ['Knowledge gap', 'Motivation', 'Overwhelmed by information'],
    count: 1
  }
}
