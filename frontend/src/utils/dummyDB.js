export const request = {
  emotions: [
    {
      type: "Sad",
      reasons: ["someone hurted", "lost someone", "something bad happened"],
    },
    {
      type: "Angry",
      reasons: [
        "someone betrayed you ?",
        "missed something you deserved ?",
        "lost something precious ?",
        "messed something up ?",
      ],
    },
  ],
  //reason: "lost someone", // selected reason
};

export const response = {
  Sad: [
    {
      advice: {
        heading: "Feeling low?",
        content: "It's okay to cry. Talk to someone.",
      },
      quote: {
        content: "Every storm runs out of rain.",
        writer: "folklore",
      },
      bgCode: "bg-slate-600",
      songUrl: "https://example.com/sad-song",
      todo: ["Take a walk", "Journal your thoughts"],
    },
    {
      advice: {
        heading: "2 Feeling low? 2",
        content: "2 It's okay to cry. Talk to someone. 2",
      },
      quote: {
        content: "Every storm runs out of rain.2",
        writer: "folklore",
      },
      bgCode: "bg-slate-600",
      songUrl: "https://example.com/sad-song 2",
      todo: ["Take a walk", "Journal your thoughts"],
    },
  ],
  Angry: [
    {
      advice: {
        heading: "Breathe in, breathe out.",
        content: "Try to focus on what you can control.",
      },
      quote: {
        content: "Holding onto anger is like drinking poison.",
        writer: "Marcus Aurelias",
      },
      bgCode: "bg-red-600",
      songUrl: "https://example.com/angry-song", //this will be youtube code to iframe
      todo: ["Punch a pillow", "Do some pushups"],
    },
    {
      advice: {
        heading: "2 Breathe in, breathe out.",
        content: "2 Try to focus on what you can control.",
      },
      quote: {
        content: "2 Holding onto anger is like drinking poison.",
        writer: "Marcus Aurelias",
      },
      bgCode: "bg-red-600",
      songUrl: "https://example.com/angry-song", //this will be youtube code to iframe
      todo: ["Punch a pillow", "Do some pushups"],
    },
  ],
};
