export const request = {
  emotions: [
    {
      type: "Sad",
      reasons: [
        "lost someone close to you", // maps to response index 3 - "You're not alone"
        "going through a breakup", // maps to response index 5 - "Honor your feelings"
        "feeling lonely and isolated", // maps to response index 0 - "Feeling low?"
        "disappointed by life circumstances", // maps to response index 4 - "Tomorrow is a new day"
        "dealing with rejection", // maps to response index 2 - "Gentle with yourself"
        "feeling overwhelmed by responsibilities", // maps to response index 6 - "Small steps matter"
        "missing someone far away", // maps to response index 1 - "This too shall pass"
      ],
    },
    {
      type: "Angry",
      reasons: [
        "someone betrayed your trust", // maps to response index 3 - "Find the root cause"
        "missed an opportunity you deserved", // maps to response index 7 - "Transform the energy"
        "lost something precious to you", // maps to response index 0 - "Breathe in, breathe out"
        "messed up something important", // maps to response index 2 - "Count to ten"
        "being treated unfairly", // maps to response index 1 - "Channel that fire"
        "dealing with injustice or discrimination", // maps to response index 5 - "Choose your battles"
        "frustrated with lack of progress", // maps to response index 4 - "Physical release"
        "feeling disrespected or dismissed", // maps to response index 6 - "Cool down time"
      ],
    },
    {
      type: "Lost",
      reasons: [
        "unsure about your life direction", // maps to response index 0 - "It's okay not to know"
        "questioning your career path", // maps to response index 6 - "Look for clues in your past"
        "feeling stuck in routine", // maps to response index 3 - "Explore possibilities"
        "lost sense of purpose or meaning", // maps to response index 4 - "Connect with your inner compass"
        "confused about relationships", // maps to response index 5 - "Embrace uncertainty"
        "uncertain about major life decisions", // maps to response index 1 - "One step at a time"
        "feeling disconnected from yourself", // maps to response index 2 - "Trust the process"
        "overwhelmed by too many choices", // maps to response index 7 - "Be patient with yourself"
      ],
    },
    {
      type: "Scared",
      reasons: [
        "afraid of upcoming changes", // maps to response index 0 - "Feel the fear and do it anyway"
        "anxious about the future", // maps to response index 1 - "Ground yourself in the present"
        "worried about failing", // maps to response index 3 - "Remember your strength"
        "concerned about loved ones' safety", // maps to response index 5 - "Seek support"
        "facing a difficult conversation", // maps to response index 6 - "Prepare and take action"
        "dealing with health concerns", // maps to response index 4 - "Breathe through it"
        "nervous about new responsibilities", // maps to response index 2 - "Break it down"
        "intimidated by new challenges", // maps to response index 7 - "Reframe your thoughts"
        "afraid of being judged", // maps to response index 8 - "Trust yourself"
      ],
    },
    {
      type: "Happy",
      reasons: [
        "achieved a personal goal", // maps to response index 8 - "Celebrate yourself"
        "received good news", // maps to response index 0 - "Savor this moment"
        "spending time with loved ones", // maps to response index 1 - "Spread the joy"
        "celebrating a special occasion", // maps to response index 2 - "Dance like nobody's watching"
        "feeling grateful for what you have", // maps to response index 3 - "Capture the good vibes"
        "accomplished something meaningful", // maps to response index 6 - "Create and express"
        "experiencing new adventures", // maps to response index 7 - "Connect with nature"
        "feeling loved and appreciated", // maps to response index 5 - "Be present in your joy"
        "enjoying simple pleasures", // maps to response index 4 - "Play and be silly"
        "feeling optimistic about the future", // maps to response index 9 - "Pay it forward"
      ],
    },
  ],
  //reason: "lost someone close to you", // selected reason
};

// Direct mapping: each reason index corresponds to the same response index
// Example: reasons[0] -> response[0], reasons[1] -> response[1], etc.
