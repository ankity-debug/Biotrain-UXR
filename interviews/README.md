# User Interview Transcripts

This folder contains all raw interview transcripts from user research sessions for the BioTrain Dashboard project.

## Structure

- `transcripts/` - Raw interview transcript files (.txt format)
  - Each file contains the full conversation between interviewer and participant
  - Named by participant: Ramesh.txt, Aniket.txt, etc.
  - Question.txt contains the standardized questionnaire used across all interviews

## Participants (7 total)

1. **Ramesh** (Interview 1) - 27M, Dubai, Advanced User
2. **Aniket** (Interview 2) - Mid-20s M, Intermediate User
3. **Majid** (Interview 3) - Late 20s-30s M, Intermediate User
4. **Jessica** (Interview 4) - 36F, Intermediate User
5. **Dr. Dhananjay Kumar** (Interview 5) - 40s-50s M, Intermediate User
6. **Dhruv** (Interview 6) - 24-25M, Power User (Fitness Trainer)
7. **Shubham** (Interview 7) - Late 20s-30s M, Power User (Coach & Gym Owner)

## Data Processing

The raw transcripts are processed and structured into JavaScript objects located in:
`src/data/interviews/interview{N}_{name}.js`

These structured files contain:
- User profile (demographics, fitness level, goals, challenges)
- Interview metadata (date, duration, interviewer)
- Full Q&A transcript
- Key insights extracted from the conversation

## Usage

These raw transcripts serve as:
- Primary source material for user research
- Reference for validating insights and data points
- Training data for future AI/ML analysis
- Documentation of real user needs and pain points

