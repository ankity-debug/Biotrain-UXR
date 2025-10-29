// Real interview data from actual user research
import { rameshProfile, rameshInterview } from './interviews/interview1_ramesh.js'
import { aniketProfile, aniketInterview } from './interviews/interview2_aniket.js'
import { majidProfile, majidInterview } from './interviews/interview3_majid.js'
import { jessicaProfile, jessicaInterview } from './interviews/interview4_jessica.js'
import { dhananjayProfile, dhananjayInterview } from './interviews/interview5_dhananjay.js'
import { dhruvProfile, dhruvInterview } from './interviews/interview6_dhruv.js'
import { shubhamProfile, shubhamInterview } from './interviews/interview7_shubham.js'

// Export all participant data
export const participants = [
  {
    profile: rameshProfile,
    interview: rameshInterview
  },
  {
    profile: aniketProfile,
    interview: aniketInterview
  },
  {
    profile: majidProfile,
    interview: majidInterview
  },
  {
    profile: jessicaProfile,
    interview: jessicaInterview
  },
  {
    profile: dhananjayProfile,
    interview: dhananjayInterview
  },
  {
    profile: dhruvProfile,
    interview: dhruvInterview
  },
  {
    profile: shubhamProfile,
    interview: shubhamInterview
  }
]

// Export individual profiles and interviews for easy access
export {
  rameshProfile,
  rameshInterview,
  aniketProfile,
  aniketInterview,
  majidProfile,
  majidInterview,
  jessicaProfile,
  jessicaInterview,
  dhananjayProfile,
  dhananjayInterview,
  dhruvProfile,
  dhruvInterview,
  shubhamProfile,
  shubhamInterview
}

// Helper functions for data analysis
export const getParticipantsByUserType = (userType) => {
  return participants.filter(p => p.profile.userType === userType)
}

export const getParticipantsByFitnessLevel = (level) => {
  return participants.filter(p => p.profile.fitnessLevel === level)
}

export const getParticipantsByBudget = (budget) => {
  return participants.filter(p => p.profile.budget === budget)
}

export const getParticipantsByTechSavvy = (techSavvy) => {
  return participants.filter(p => p.profile.techSavvy === techSavvy)
}
