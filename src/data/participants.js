// Real interview data from actual user research
import { amishProfile, amishInterview } from './interview1_amish.js'
import { aniketProfile, aniketInterview } from './interview2_aniket.js'
import { majidProfile, majidInterview } from './interview3_majid.js'
import { jessicaProfile, jessicaInterview } from './interview4_jessica.js'

// Export all participant data
export const participants = [
  {
    profile: amishProfile,
    interview: amishInterview
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
  }
]

// Export individual profiles and interviews for easy access
export {
  amishProfile,
  amishInterview,
  aniketProfile,
  aniketInterview,
  majidProfile,
  majidInterview,
  jessicaProfile,
  jessicaInterview
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
