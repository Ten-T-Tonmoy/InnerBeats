const bgCodes = [
  "https://images.pexels.com/photos/33545/sunrise-phu-quoc-island-ocean.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/1563355/pexels-photo-1563355.jpeg",
  "https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/18023804/pexels-photo-18023804/free-photo-of-a-view-of-a-city-at-sunset-with-a-church-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/15736030/pexels-photo-15736030/free-photo-of-a-long-hallway-with-ornate-columns-and-doors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/17489383/pexels-photo-17489383/free-photo-of-a-view-of-a-snowy-mountain-with-clouds.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/1054289/pexels-photo-1054289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/2850287/pexels-photo-2850287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/16354148/pexels-photo-16354148/free-photo-of-a-sunset-over-the-ocean-with-waves-and-sand.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/66997/pexels-photo-66997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/19117866/pexels-photo-19117866/free-photo-of-a-photo-of-a-fence-in-the-snow.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/623919/pexels-photo-623919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/4737484/pexels-photo-4737484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
];

function getBg() {
  return bgCodes[Math.floor(Math.random() * bgCodes.length)];
}

export const response = {
  Sad: [
    [
      {
        advice: {
          heading: "Feeling low?",
          content: "It's okay to cry. Talk to someone you trust.",
        },
        quote: {
          content: "Every storm runs out of rain.",
          writer: "folklore",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=NdYWuo9OFAw&list=RDNdYWuo9OFAw&start_radio=1",
        todo: ["Take a walk", "Journal your thoughts"],
      },
      {
        advice: {
          heading: "Let it out",
          content: "Tears are healing. Find a safe space to express yourself.",
        },
        quote: {
          content: "Tears are words that need to be written.",
          writer: "Paulo Coelho",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=NdYWuo9OFAw&list=RDNdYWuo9OFAw&start_radio=1",
        todo: ["Write in a diary", "Call someone who cares"],
      },
      {
        advice: {
          heading: "It's natural to feel down",
          content:
            "Your emotions are valid. Allow yourself to process them fully.",
        },
        quote: {
          content: "The soul would have no rainbow if the eyes had no tears.",
          writer: "Native American Proverb",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=NdYWuo9OFAw&list=RDNdYWuo9OFAw&start_radio=1",
        todo: ["Breathe deeply", "Share your feelings with a friend"],
      },
      {
        advice: {
          heading: "Your feelings matter",
          content:
            "Don't suppress your sadness. It's your heart's way of healing.",
        },
        quote: {
          content:
            "Heavy hearts, like heavy clouds in the sky, are best relieved by the letting of a little water.",
          writer: "Christopher Morley",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=NdYWuo9OFAw&list=RDNdYWuo9OFAw&start_radio=1",
        todo: ["Listen to your heart", "Reach out for support"],
      },
      {
        advice: {
          heading: "Express yourself",
          content: "Your sadness deserves to be acknowledged and understood.",
        },
        quote: {
          content: "Tears are the summer showers to the soul.",
          writer: "Alfred Austin",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=NdYWuo9OFAw&list=RDNdYWuo9OFAw&start_radio=1",
        todo: ["Practice emotional honesty", "Find your support system"],
      },
    ],
    [
      {
        advice: {
          heading: "This too shall pass",
          content: "Allow yourself to feel, but remember healing takes time.",
        },
        quote: {
          content: "The wound is the place where the Light enters you.",
          writer: "Rumi",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=1lrFsXkT_rM&list=RD1lrFsXkT_rM&start_radio=1",
        todo: ["Call a friend", "Listen to calming music"],
      },
      {
        advice: {
          heading: "Time heals",
          content: "Be patient with yourself. Recovery isn't linear.",
        },
        quote: {
          content: "Healing is not linear, it's a spiral dance.",
          writer: "Unknown",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=1lrFsXkT_rM&list=RD1lrFsXkT_rM&start_radio=1",
        todo: ["Practice meditation", "Read something uplifting"],
      },
      {
        advice: {
          heading: "Trust the process",
          content: "Healing happens in waves. Ride them with grace.",
        },
        quote: {
          content: "The darker the night, the brighter the stars shine.",
          writer: "Fyodor Dostoevsky",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=1lrFsXkT_rM&list=RD1lrFsXkT_rM&start_radio=1",
        todo: ["Practice patience", "Focus on small progress"],
      },
      {
        advice: {
          heading: "Change is constant",
          content: "Nothing in life is permanent. This pain will transform.",
        },
        quote: {
          content: "Pain is inevitable. Suffering is optional.",
          writer: "Buddha",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=1lrFsXkT_rM&list=RD1lrFsXkT_rM&start_radio=1",
        todo: ["Embrace impermanence", "Look for signs of growth"],
      },
      {
        advice: {
          heading: "Have faith in tomorrow",
          content: "Today's pain is preparing you for tomorrow's strength.",
        },
        quote: {
          content: "Every ending is also a beginning.",
          writer: "Unknown",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=1lrFsXkT_rM&list=RD1lrFsXkT_rM&start_radio=1",
        todo: [
          "Visualize your future self",
          "Write a letter to tomorrow's you",
        ],
      },
    ],
    [
      {
        advice: {
          heading: "Gentle with yourself",
          content:
            "Sadness is not weakness, it's your heart processing change.",
        },
        quote: {
          content: "There is a sacredness in tears.",
          writer: "Washington Irving",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=1lrFsXkT_rM&list=RD1lrFsXkT_rM&start_radio=1",
        todo: ["Write down 3 things you're grateful for", "Take a warm bath"],
      },
      {
        advice: {
          heading: "Self-compassion",
          content: "Treat yourself with the same kindness you'd show a friend.",
        },
        quote: {
          content: "Be kind to yourself. You're doing the best you can.",
          writer: "Unknown",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=1lrFsXkT_rM&list=RD1lrFsXkT_rM&start_radio=1",
        todo: ["Practice self-forgiveness", "Do something nurturing"],
      },
      {
        advice: {
          heading: "You deserve kindness",
          content:
            "Speak to yourself with love, especially in difficult moments.",
        },
        quote: {
          content:
            "If you wouldn't say it to a good friend, don't say it to yourself.",
          writer: "Unknown",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=1lrFsXkT_rM&list=RD1lrFsXkT_rM&start_radio=1",
        todo: ["Practice positive self-talk", "Give yourself a hug"],
      },
      {
        advice: {
          heading: "Embrace your humanity",
          content:
            "Being gentle with yourself is a sign of wisdom, not weakness.",
        },
        quote: {
          content:
            "You yourself, as much as anybody in the entire universe, deserve your love and affection.",
          writer: "Buddha",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=1lrFsXkT_rM&list=RD1lrFsXkT_rM&start_radio=1",
        todo: ["Practice mindful self-care", "Acknowledge your efforts"],
      },
      {
        advice: {
          heading: "Love yourself first",
          content: "Self-compassion is the foundation of all healing.",
        },
        quote: {
          content: "To love oneself is the beginning of a lifelong romance.",
          writer: "Oscar Wilde",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=1lrFsXkT_rM&list=RD1lrFsXkT_rM&start_radio=1",
        todo: ["Create a self-love ritual", "Celebrate small victories"],
      },
    ],
    [
      {
        advice: {
          heading: "You're not alone",
          content: "Reach out. Sometimes sharing the burden makes it lighter.",
        },
        quote: {
          content: "Grief is the price we pay for love.",
          writer: "Queen Elizabeth II",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=7jMlFXouPk8&list=RD7jMlFXouPk8&start_radio=1",
        todo: ["Watch a comfort movie", "Hug a pet or loved one"],
      },
      {
        advice: {
          heading: "Community matters",
          content: "Connection is healing. You don't have to face this alone.",
        },
        quote: {
          content: "We need each other. This is no time for islands.",
          writer: "Terry Tempest Williams",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=7jMlFXouPk8&list=RD7jMlFXouPk8&start_radio=1",
        todo: ["Join a support group", "Volunteer to help others"],
      },
      {
        advice: {
          heading: "Shared burdens are lighter",
          content:
            "Your struggles don't define you, and you don't have to carry them alone.",
        },
        quote: {
          content: "A sorrow shared is a sorrow halved.",
          writer: "Unknown",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=7jMlFXouPk8&list=RD7jMlFXouPk8&start_radio=1",
        todo: ["Text someone you trust", "Attend a social gathering"],
      },
      {
        advice: {
          heading: "Connection heals",
          content: "Human connection is medicine for the soul.",
        },
        quote: {
          content:
            "No one can whistle a symphony. It takes a whole orchestra to play it.",
          writer: "H.E. Luccock",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=7jMlFXouPk8&list=RD7jMlFXouPk8&start_radio=1",
        todo: ["Schedule coffee with a friend", "Share your story"],
      },
      {
        advice: {
          heading: "Seek support",
          content: "Asking for help is a sign of courage, not weakness.",
        },
        quote: {
          content: "We are all just walking each other home.",
          writer: "Ram Dass",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=7jMlFXouPk8&list=RD7jMlFXouPk8&start_radio=1",
        todo: ["Reach out to family", "Consider professional help"],
      },
    ],
    [
      {
        advice: {
          heading: "Tomorrow is a new day",
          content: "Rest tonight. Tomorrow brings new possibilities.",
        },
        quote: {
          content: "Night is always darkest before the dawn.",
          writer: "Thomas Fuller",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=qnkuBUAwfe0&list=RDqnkuBUAwfe0&start_radio=1",
        todo: ["Get enough sleep", "Plan something small to look forward to"],
      },
      {
        advice: {
          heading: "Hope remains",
          content: "Even in darkness, seeds of tomorrow are taking root.",
        },
        quote: {
          content: "Hope is the thing with feathers that perches in the soul.",
          writer: "Emily Dickinson",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=qnkuBUAwfe0&list=RDqnkuBUAwfe0&start_radio=1",
        todo: [
          "Set a small goal for tomorrow",
          "Look at photos that make you smile",
        ],
      },
      {
        advice: {
          heading: "Fresh start awaits",
          content: "Each sunrise offers a chance to begin again.",
        },
        quote: {
          content:
            "Every day is a new beginning. Take a deep breath and start again.",
          writer: "Unknown",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=qnkuBUAwfe0&list=RDqnkuBUAwfe0&start_radio=1",
        todo: ["Watch the sunrise", "Make tomorrow's to-do list"],
      },
      {
        advice: {
          heading: "New opportunities ahead",
          content: "What feels like an ending might be a beautiful beginning.",
        },
        quote: {
          content:
            "The best time to plant a tree was 20 years ago. The second best time is now.",
          writer: "Chinese Proverb",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=qnkuBUAwfe0&list=RDqnkuBUAwfe0&start_radio=1",
        todo: ["Plan a small adventure", "Write down your dreams"],
      },
      {
        advice: {
          heading: "Endless possibilities",
          content: "Tomorrow holds infinite potential for joy and growth.",
        },
        quote: {
          content:
            "The future belongs to those who believe in the beauty of their dreams.",
          writer: "Eleanor Roosevelt",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=qnkuBUAwfe0&list=RDqnkuBUAwfe0&start_radio=1",
        todo: [
          "Visualize your ideal tomorrow",
          "Take one step toward your goals",
        ],
      },
    ],
    [
      {
        advice: {
          heading: "Honor your feelings",
          content:
            "Your emotions are valid. Feel them fully, then let them flow.",
        },
        quote: {
          content: "The only way out is through.",
          writer: "Robert Frost",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=qnkuBUAwfe0&list=RDqnkuBUAwfe0&start_radio=1",
        todo: ["Practice deep breathing", "Create something with your hands"],
      },
      {
        advice: {
          heading: "Emotional wisdom",
          content:
            "Your feelings are messengers. Listen to what they're telling you.",
        },
        quote: {
          content: "The cave you fear to enter holds the treasure you seek.",
          writer: "Joseph Campbell",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=qnkuBUAwfe0&list=RDqnkuBUAwfe0&start_radio=1",
        todo: [
          "Reflect on what you've learned",
          "Express yourself through art",
        ],
      },
      {
        advice: {
          heading: "Trust your inner voice",
          content:
            "Your emotions carry important information about your needs.",
        },
        quote: {
          content:
            "Your task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built against it.",
          writer: "Rumi",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=qnkuBUAwfe0&list=RDqnkuBUAwfe0&start_radio=1",
        todo: ["Journal about your feelings", "Practice mindfulness"],
      },
      {
        advice: {
          heading: "Embrace all emotions",
          content: "Sadness is part of the full spectrum of human experience.",
        },
        quote: {
          content:
            "The privilege of a lifetime is to become who you truly are.",
          writer: "Carl Jung",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=qnkuBUAwfe0&list=RDqnkuBUAwfe0&start_radio=1",
        todo: [
          "Explore your emotions without judgment",
          "Practice emotional acceptance",
        ],
      },
      {
        advice: {
          heading: "Feel deeply, live fully",
          content:
            "The depth of your sadness shows the depth of your capacity to love.",
        },
        quote: {
          content:
            "We cannot see our reflection in running water. It is only in still water that we can see.",
          writer: "Zen Proverb",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=qnkuBUAwfe0&list=RDqnkuBUAwfe0&start_radio=1",
        todo: ["Sit in quiet contemplation", "Honor your emotional depth"],
      },
    ],
    [
      {
        advice: {
          heading: "Small steps matter",
          content: "You don't have to climb the whole mountain today.",
        },
        quote: {
          content:
            "It is during our darkest moments that we must focus to see the light.",
          writer: "Aristotle",
        },
        bgCode:
          "https://images.pexels.com/photos/1408221/pexels-photo-1408221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        songUrl:
          "https://www.youtube.com/watch?v=qnkuBUAwfe0&list=RDqnkuBUAwfe0&start_radio=1",
        todo: ["Do one small act of self-care", "Step outside for fresh air"],
      },
      {
        advice: {
          heading: "Progress, not perfection",
          content: "Every small step forward is a victory worth celebrating.",
        },
        quote: {
          content: "A journey of a thousand miles begins with a single step.",
          writer: "Lao Tzu",
        },
        bgCode:
          "https://images.pexels.com/photos/1408221/pexels-photo-1408221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        songUrl:
          "https://www.youtube.com/watch?v=qnkuBUAwfe0&list=RDqnkuBUAwfe0&start_radio=1",
        todo: [
          "Celebrate one small win today",
          "Take things one moment at a time",
        ],
      },
      {
        advice: {
          heading: "One day at a time",
          content: "Focus on today. Tomorrow will take care of itself.",
        },
        quote: {
          content:
            "You don't have to see the whole staircase, just take the first step.",
          writer: "Martin Luther King Jr.",
        },
        bgCode:
          "https://images.pexels.com/photos/1408221/pexels-photo-1408221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        songUrl:
          "https://www.youtube.com/watch?v=qnkuBUAwfe0&list=RDqnkuBUAwfe0&start_radio=1",
        todo: ["Focus on the present moment", "Complete one simple task"],
      },
      {
        advice: {
          heading: "Gentle progress",
          content:
            "Healing doesn't happen overnight, and that's perfectly okay.",
        },
        quote: {
          content:
            "Be patient with yourself. Self-growth is tender; it's holy ground.",
          writer: "Unknown",
        },
        bgCode:
          "https://images.pexels.com/photos/1408221/pexels-photo-1408221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        songUrl:
          "https://www.youtube.com/watch?v=qnkuBUAwfe0&list=RDqnkuBUAwfe0&start_radio=1",
        todo: ["Set micro-goals", "Practice self-patience"],
      },
      {
        advice: {
          heading: "Every effort counts",
          content: "Even the smallest actions can create meaningful change.",
        },
        quote: {
          content: "Little strokes fell great oaks.",
          writer: "Benjamin Franklin",
        },
        bgCode:
          "https://images.pexels.com/photos/1408221/pexels-photo-1408221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        songUrl:
          "https://www.youtube.com/watch?v=qnkuBUAwfe0&list=RDqnkuBUAwfe0&start_radio=1",
        todo: [
          "Acknowledge your efforts",
          "Take just one small positive action",
        ],
      },
    ],
  ],
  Angry: [
    [
      {
        advice: {
          heading: "Breathe in, breathe out",
          content: "Try to focus on what you can control.",
        },
        quote: {
          content: "Holding onto anger is like drinking poison.",
          writer: "Marcus Aurelius",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=YLHpvjrFpe0&list=RDYLHpvjrFpe0&start_radio=1",
        todo: ["Punch a pillow", "Do some pushups"],
      },
      {
        advice: {
          heading: "Focus on your breath",
          content: "Let each inhale calm you, each exhale release the tension.",
        },
        quote: {
          content:
            "Breathing in, I calm body and mind. Breathing out, I smile.",
          writer: "Thich Nhat Hanh",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=YLHpvjrFpe0&list=RDYLHpvjrFpe0&start_radio=1",
        todo: ["Practice 4-7-8 breathing", "Count your breaths to 20"],
      },
      {
        advice: {
          heading: "Mindful breathing works",
          content: "Your breath is always available as an anchor to peace.",
        },
        quote: {
          content: "Breath is the bridge which connects life to consciousness.",
          writer: "Thich Nhat Hanh",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=YLHpvjrFpe0&list=RDYLHpvjrFpe0&start_radio=1",
        todo: ["Take 10 deep belly breaths", "Focus on your breathing rhythm"],
      },
      {
        advice: {
          heading: "Breathe through the storm",
          content:
            "When anger rises, let your breath be the calm in the chaos.",
        },
        quote: {
          content:
            "You have power over your mind - not outside events. Realize this, and you will find strength.",
          writer: "Marcus Aurelius",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=YLHpvjrFpe0&list=RDYLHpvjrFpe0&start_radio=1",
        todo: ["Practice box breathing", "Breathe and visualize calm"],
      },
      {
        advice: {
          heading: "Return to your center",
          content: "Your breath is your pathway back to inner peace.",
        },
        quote: {
          content: "Peace comes from within. Do not seek it without.",
          writer: "Buddha",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=YLHpvjrFpe0&list=RDYLHpvjrFpe0&start_radio=1",
        todo: ["Breathe with intention", "Find your breathing anchor"],
      },
    ],
    [
      {
        advice: {
          heading: "Channel that fire",
          content:
            "Use this energy for positive change instead of destruction.",
        },
        quote: {
          content:
            "Anger is an acid that can do more harm to the vessel than to anything on which it is poured.",
          writer: "Mark Twain",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=9Oa_mWpckns&list=RD9Oa_mWpckns&start_radio=1",
        todo: ["Go for a run", "Write an angry letter (don't send it)"],
      },
      {
        advice: {
          heading: "Transform the flame",
          content: "Your anger can become the fuel for meaningful action.",
        },
        quote: {
          content: "The best way to destroy an enemy is to make him a friend.",
          writer: "Abraham Lincoln",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=9Oa_mWpckns&list=RD9Oa_mWpckns&start_radio=1",
        todo: ["Start a positive project", "Volunteer for a cause"],
      },
      {
        advice: {
          heading: "Redirect your passion",
          content:
            "Turn your emotional intensity into creative or productive energy.",
        },
        quote: {
          content:
            "Anger is never without a reason, but seldom with a good one.",
          writer: "Benjamin Franklin",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=9Oa_mWpckns&list=RD9Oa_mWpckns&start_radio=1",
        todo: ["Create art from your feelings", "Plan a positive change"],
      },
      {
        advice: {
          heading: "Constructive expression",
          content:
            "Let your anger drive you toward solutions, not destruction.",
        },
        quote: {
          content: "Be the change you wish to see in the world.",
          writer: "Mahatma Gandhi",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=9Oa_mWpckns&list=RD9Oa_mWpckns&start_radio=1",
        todo: ["Focus on problem-solving", "Take constructive action"],
      },
      {
        advice: {
          heading: "Purpose from pain",
          content:
            "Sometimes anger shows us what needs to change in the world.",
        },
        quote: {
          content: "In the middle of difficulty lies opportunity.",
          writer: "Albert Einstein",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=9Oa_mWpckns&list=RD9Oa_mWpckns&start_radio=1",
        todo: ["Identify what needs changing", "Channel energy into advocacy"],
      },
    ],
    [
      {
        advice: {
          heading: "Count to ten",
          content:
            "Take a pause before reacting. Your future self will thank you.",
        },
        quote: {
          content:
            "For every minute you remain angry, you give up sixty seconds of peace of mind.",
          writer: "Ralph Waldo Emerson",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=9Oa_mWpckns&list=RD9Oa_mWpckns&start_radio=1",
        todo: ["Take 10 slow deep breaths", "Clench and release your fists"],
      },
      {
        advice: {
          heading: "Pause before you act",
          content: "That moment of hesitation can save you from regret.",
        },
        quote: {
          content:
            "Between stimulus and response there is a space. In that space is our power to choose our response.",
          writer: "Viktor Frankl",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=9Oa_mWpckns&list=RD9Oa_mWpckns&start_radio=1",
        todo: ["Count backwards from 20", "Take three deep breaths"],
      },
      {
        advice: {
          heading: "Sacred pause",
          content: "Give yourself the gift of time before responding.",
        },
        quote: {
          content: "Think before you speak. Read before you think.",
          writer: "Fran Lebowitz",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=9Oa_mWpckns&list=RD9Oa_mWpckns&start_radio=1",
        todo: [
          "Wait 5 minutes before responding",
          "Practice the STOP technique",
        ],
      },
      {
        advice: {
          heading: "Mindful pause",
          content: "In the space between trigger and response, wisdom lives.",
        },
        quote: {
          content:
            "Patience is not the ability to wait, but the ability to keep a good attitude while waiting.",
          writer: "Joyce Meyer",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=uPMLAdoGU0k&list=RDuPMLAdoGU0k&start_radio=1",
        todo: ["Practice mindful waiting", "Observe before reacting"],
      },
      {
        advice: {
          heading: "Thoughtful response",
          content:
            "Choose your response rather than letting anger choose for you.",
        },
        quote: {
          content:
            "The first to apologize is the bravest. The first to forgive is the strongest.",
          writer: "Unknown",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=uPMLAdoGU0k&list=RDuPMLAdoGU0k&start_radio=1",
        todo: ["Reflect before responding", "Choose wisdom over impulse"],
      },
    ],
    [
      {
        advice: {
          heading: "Find the root cause",
          content:
            "What's really bothering you? Address the source, not just the symptom.",
        },
        quote: {
          content:
            "Anger is often what pain looks like when it shows itself in public.",
          writer: "Krista Tippett",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=uPMLAdoGU0k&list=RDuPMLAdoGU0k&start_radio=1",
        todo: ["Identify what triggered you", "Talk to someone you trust"],
      },
      {
        advice: {
          heading: "Look beneath the surface",
          content:
            "Anger is often a messenger carrying information about deeper needs.",
        },
        quote: {
          content:
            "Your task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built against it.",
          writer: "Rumi",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=uPMLAdoGU0k&list=RDuPMLAdoGU0k&start_radio=1",
        todo: [
          "Ask 'What am I really feeling?'",
          "Journal about underlying emotions",
        ],
      },
      {
        advice: {
          heading: "Understand your triggers",
          content:
            "Knowledge of your patterns is the first step to changing them.",
        },
        quote: {
          content:
            "The curious paradox is that when I accept myself just as I am, then I can change.",
          writer: "Carl Rogers",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=uPMLAdoGU0k&list=RDuPMLAdoGU0k&start_radio=1",
        todo: ["Map your anger triggers", "Reflect on recurring patterns"],
      },
      {
        advice: {
          heading: "Emotional detective work",
          content: "Investigate what your anger is trying to tell you.",
        },
        quote: {
          content:
            "Everything that irritates us about others can lead us to an understanding of ourselves.",
          writer: "Carl Jung",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=uPMLAdoGU0k&list=RDuPMLAdoGU0k&start_radio=1",
        todo: ["Explore what you need", "Dig deeper into your feelings"],
      },
      {
        advice: {
          heading: "Wisdom from within",
          content:
            "Your anger contains important information about your values and boundaries.",
        },
        quote: {
          content:
            "The privilege of a lifetime is to become who you truly are.",
          writer: "Carl Jung",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=uPMLAdoGU0k&list=RDuPMLAdoGU0k&start_radio=1",
        todo: ["Listen to your anger's message", "Honor what matters to you"],
      },
    ],
    [
      {
        advice: {
          heading: "Physical release",
          content: "Your body is holding tension. Move it out of your system.",
        },
        quote: {
          content:
            "Speak when you are angry and you will make the best speech you will ever regret.",
          writer: "Ambrose Bierce",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=uPMLAdoGU0k&list=RDuPMLAdoGU0k&start_radio=1",
        todo: ["Do jumping jacks", "Scream into a pillow"],
      },
      {
        advice: {
          heading: "Move your body",
          content: "Physical movement can shift stuck emotional energy.",
        },
        quote: {
          content:
            "Exercise is a celebration of what your body can do. Not a punishment for what you ate.",
          writer: "Women's Health UK",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=uPMLAdoGU0k&list=RDuPMLAdoGU0k&start_radio=1",
        todo: ["Go for a vigorous walk", "Dance to energetic music"],
      },
      {
        advice: {
          heading: "Release the pressure",
          content: "Your body needs to discharge the stress hormones of anger.",
        },
        quote: {
          content: "The groundwork for all happiness is good health.",
          writer: "Leigh Hunt",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=uPMLAdoGU0k&list=RDuPMLAdoGU0k&start_radio=1",
        todo: ["Run up and down stairs", "Do burpees for 2 minutes"],
      },
      {
        advice: {
          heading: "Sweat it out",
          content:
            "Intense physical activity can metabolize anger effectively.",
        },
        quote: {
          content:
            "Strength does not come from physical capacity. It comes from an indomitable will.",
          writer: "Mahatma Gandhi",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=uPMLAdoGU0k&list=RDuPMLAdoGU0k&start_radio=1",
        todo: ["Do push-ups until exhausted", "Try kickboxing moves"],
      },
      {
        advice: {
          heading: "Active healing",
          content: "Let movement be your medicine for emotional overwhelm.",
        },
        quote: {
          content:
            "Take care of your body. It's the only place you have to live.",
          writer: "Jim Rohn",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=uPMLAdoGU0k&list=RDuPMLAdoGU0k&start_radio=1",
        todo: ["Find your favorite cardio", "Use physical activity as therapy"],
      },
    ],
    [
      {
        advice: {
          heading: "Choose your battles",
          content:
            "Not every hill is worth dying on. Save your energy for what matters.",
        },
        quote: {
          content: "The best fighter is never angry.",
          writer: "Lao Tzu",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=uPMLAdoGU0k&list=RDuPMLAdoGU0k&start_radio=1",
        todo: [
          "List what you can and can't control",
          "Practice progressive muscle relaxation",
        ],
      },
      {
        advice: {
          heading: "Strategic wisdom",
          content: "Wisdom knows when to engage and when to walk away.",
        },
        quote: {
          content:
            "Pick your battles. You don't have to fight every battle you're invited to.",
          writer: "Unknown",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=uPMLAdoGU0k&list=RDuPMLAdoGU0k&start_radio=1",
        todo: [
          "Evaluate if this is worth your energy",
          "Focus on what you can influence",
        ],
      },
      {
        advice: {
          heading: "Energy conservation",
          content: "Your emotional energy is precious. Spend it wisely.",
        },
        quote: {
          content:
            "You have power over your mind - not outside events. Realize this, and you will find strength.",
          writer: "Marcus Aurelius",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=sLe3xW0FN2M&list=RDsLe3xW0FN2M&start_radio=1",
        todo: [
          "Assess the importance of this issue",
          "Save energy for what matters",
        ],
      },
      {
        advice: {
          heading: "Selective engagement",
          content: "Not every provocation deserves your response.",
        },
        quote: {
          content: "The art of being wise is knowing what to overlook.",
          writer: "William James",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=sLe3xW0FN2M&list=RDsLe3xW0FN2M&start_radio=1",
        todo: [
          "Decide if response is necessary",
          "Choose your reactions carefully",
        ],
      },
      {
        advice: {
          heading: "Mindful priorities",
          content:
            "Focus your anger on issues that truly align with your values.",
        },
        quote: {
          content: "The main thing is to keep the main thing the main thing.",
          writer: "Stephen Covey",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=sLe3xW0FN2M&list=RDsLe3xW0FN2M&start_radio=1",
        todo: ["Clarify your priorities", "Focus on your core values"],
      },
    ],
    [
      {
        advice: {
          heading: "Cool down time",
          content: "Step away from the situation. Distance brings clarity.",
        },
        quote: {
          content: "When angry, count to four; when very angry, swear.",
          writer: "Mark Twain",
        },
        bgCode:
          "https://images.pexels.com/photos/459301/pexels-photo-459301.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
        songUrl:
          "https://www.youtube.com/watch?v=sLe3xW0FN2M&list=RDsLe3xW0FN2M&start_radio=1",
        todo: ["Take a cold shower", "Go somewhere quiet for 15 minutes"],
      },
      {
        advice: {
          heading: "Strategic retreat",
          content: "Sometimes the wisest warrior knows when to step back.",
        },
        quote: {
          content:
            "In the midst of winter, I found there was, within me, an invincible summer.",
          writer: "Albert Camus",
        },
        bgCode:
          "https://images.pexels.com/photos/459301/pexels-photo-459301.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
        songUrl:
          "https://www.youtube.com/watch?v=sLe3xW0FN2M&list=RDsLe3xW0FN2M&start_radio=1",
        todo: ["Leave the room for 10 minutes", "Take a walk around the block"],
      },
      {
        advice: {
          heading: "Time and space",
          content: "Give yourself the gift of perspective through distance.",
        },
        quote: {
          content:
            "Sometimes you need to step outside, get some air, and remind yourself of who you are and where you want to be.",
          writer: "Unknown",
        },
        bgCode:
          "https://images.pexels.com/photos/459301/pexels-photo-459301.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
        songUrl:
          "https://www.youtube.com/watch?v=sLe3xW0FN2M&list=RDsLe3xW0FN2M&start_radio=1",
        todo: ["Go outside for fresh air", "Change your physical environment"],
      },
      {
        advice: {
          heading: "Cooling strategy",
          content: "Let time be your ally in regaining emotional balance.",
        },
        quote: {
          content:
            "Patience is not the ability to wait, but the ability to keep a good attitude while waiting.",
          writer: "Joyce Meyer",
        },
        bgCode:
          "https://images.pexels.com/photos/459301/pexels-photo-459301.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
        songUrl:
          "https://www.youtube.com/watch?v=sLe3xW0FN2M&list=RDsLe3xW0FN2M&start_radio=1",
        todo: [
          "Set a timer for 20 minutes of quiet time",
          "Find a peaceful environment",
        ],
      },
      {
        advice: {
          heading: "Reset and refresh",
          content: "Use cooling down time to reset your emotional state.",
        },
        quote: {
          content:
            "Peace cannot be kept by force; it can only be achieved by understanding.",
          writer: "Albert Einstein",
        },
        bgCode:
          "https://images.pexels.com/photos/459301/pexels-photo-459301.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
        songUrl:
          "https://www.youtube.com/watch?v=sLe3xW0FN2M&list=RDsLe3xW0FN2M&start_radio=1",
        todo: ["Listen to calming music", "Do a mental visualization exercise"],
      },
    ],
    [
      {
        advice: {
          heading: "Transform the energy",
          content:
            "Anger can be fuel for positive action and necessary change.",
        },
        quote: {
          content: "Anger is a wind which blows out the lamp of the mind.",
          writer: "Robert Green Ingersoll",
        },
        bgCode:
          "https://images.pexels.com/photos/3394939/pexels-photo-3394939.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        songUrl:
          "https://www.youtube.com/watch?v=sLe3xW0FN2M&list=RDsLe3xW0FN2M&start_radio=1",
        todo: ["Clean or organize something", "Do a high-intensity workout"],
      },
      {
        advice: {
          heading: "Productive power",
          content:
            "Channel your intense emotions into meaningful productivity.",
        },
        quote: {
          content:
            "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
          writer: "Winston Churchill",
        },
        bgCode:
          "https://images.pexels.com/photos/3394939/pexels-photo-3394939.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        songUrl:
          "https://www.youtube.com/watch?v=sLe3xW0FN2M&list=RDsLe3xW0FN2M&start_radio=1",
        todo: [
          "Start a project you've been putting off",
          "Channel energy into work",
        ],
      },
      {
        advice: {
          heading: "Creative transformation",
          content: "Turn your emotional fire into creative expression.",
        },
        quote: {
          content:
            "Art enables us to find ourselves and lose ourselves at the same time.",
          writer: "Thomas Merton",
        },
        bgCode:
          "https://images.pexels.com/photos/3394939/pexels-photo-3394939.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        songUrl:
          "https://www.youtube.com/watch?v=sLe3xW0FN2M&list=RDsLe3xW0FN2M&start_radio=1",
        todo: ["Draw or paint your feelings", "Write poetry or music"],
      },
      {
        advice: {
          heading: "Solution focus",
          content:
            "Use your anger as fuel to find solutions rather than blame.",
        },
        quote: {
          content: "Be the change you wish to see in the world.",
          writer: "Mahatma Gandhi",
        },
        bgCode:
          "https://images.pexels.com/photos/3394939/pexels-photo-3394939.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        songUrl:
          "https://www.youtube.com/watch?v=sLe3xW0FN2M&list=RDsLe3xW0FN2M&start_radio=1",
        todo: [
          "Brainstorm three possible solutions",
          "Take one constructive action",
        ],
      },
      {
        advice: {
          heading: "Purpose from passion",
          content: "Let your anger illuminate what you care deeply about.",
        },
        quote: {
          content: "The only way to do great work is to love what you do.",
          writer: "Steve Jobs",
        },
        bgCode:
          "https://www.youtube.com/watch?v=sLe3xW0FN2M&list=RDsLe3xW0FN2M&start_radio=1",
        songUrl: "https://example.com/angry-song-8-v5",
        todo: [
          "Identify what matters to you",
          "Take action aligned with your values",
        ],
      },
    ],
  ],
  Lost: [
    [
      {
        advice: {
          heading: "It's okay not to know",
          content:
            "Being lost is often the first step to finding something better.",
        },
        quote: {
          content: "Not all those who wander are lost.",
          writer: "J.R.R. Tolkien",
        },
        bgCode:
          "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        songUrl:
          "https://www.youtube.com/watch?v=sLe3xW0FN2M&list=RDsLe3xW0FN2M&start_radio=1",
        todo: ["Write down your values", "Take a different route home"],
      },
      {
        advice: {
          heading: "Embrace the unknown",
          content: "Uncertainty is where all possibilities live. Stay open.",
        },
        quote: {
          content: "In the middle of difficulty lies opportunity.",
          writer: "Albert Einstein",
        },
        bgCode:
          "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        songUrl:
          "https://www.youtube.com/watch?v=sLe3xW0FN2M&list=RDsLe3xW0FN2M&start_radio=1",
        todo: ["List what you're curious about", "Explore a new interest"],
      },
      {
        advice: {
          heading: "Uncertainty is natural",
          content: "Not knowing your path doesn't mean you're off track.",
        },
        quote: {
          content:
            "The only way to make sense out of change is to plunge into it, move with it, and join the dance.",
          writer: "Alan Watts",
        },
        bgCode:
          "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        songUrl:
          "https://www.youtube.com/watch?v=sLe3xW0FN2M&list=RDsLe3xW0FN2M&start_radio=1",
        todo: [
          "Accept where you are right now",
          "Practice being comfortable with unknowing",
        ],
      },
      {
        advice: {
          heading: "Questions are okay",
          content: "Having more questions than answers is a sign of growth.",
        },
        quote: {
          content:
            "I would rather have questions that can't be answered than answers that can't be questioned.",
          writer: "Richard Feynman",
        },
        bgCode:
          "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        songUrl:
          "https://www.youtube.com/watch?v=w6Nf5BcAomY&list=RDw6Nf5BcAomY&start_radio=1",
        todo: ["Write down your biggest questions", "Celebrate your curiosity"],
      },
      {
        advice: {
          heading: "Comfortable with confusion",
          content:
            "Confusion often precedes clarity. Stay patient with the process.",
        },
        quote: {
          content:
            "Confusion is a word we have invented for an order which is not understood.",
          writer: "Henry Miller",
        },
        bgCode:
          "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        songUrl:
          "https://www.youtube.com/watch?v=w6Nf5BcAomY&list=RDw6Nf5BcAomY&start_radio=1",
        todo: ["Breathe through uncertainty", "Trust that clarity will come"],
      },
    ],
    [
      {
        advice: {
          heading: "One step at a time",
          content: "You don't need to see the whole path, just the next step.",
        },
        quote: {
          content: "The cave you fear to enter holds the treasure you seek.",
          writer: "Joseph Campbell",
        },
        bgCode:
          "https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        songUrl:
          "https://www.youtube.com/watch?v=w6Nf5BcAomY&list=RDw6Nf5BcAomY&start_radio=1",
        todo: ["Try something new today", "Ask someone about their journey"],
      },
      {
        advice: {
          heading: "Small moves forward",
          content:
            "Progress doesn't require giant leaps, just consistent small steps.",
        },
        quote: {
          content: "A journey of a thousand miles begins with a single step.",
          writer: "Lao Tzu",
        },
        bgCode:
          "https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        songUrl:
          "https://www.youtube.com/watch?v=w6Nf5BcAomY&list=RDw6Nf5BcAomY&start_radio=1",
        todo: ["Take one small action today", "Focus on the present moment"],
      },
      {
        advice: {
          heading: "Progress over perfection",
          content: "You don't need to have it all figured out to move forward.",
        },
        quote: {
          content:
            "You don't have to see the whole staircase, just take the first step.",
          writer: "Martin Luther King Jr.",
        },
        bgCode:
          "https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        songUrl:
          "https://www.youtube.com/watch?v=w6Nf5BcAomY&list=RDw6Nf5BcAomY&start_radio=1",
        todo: ["Do something imperfectly", "Celebrate small wins"],
      },
      {
        advice: {
          heading: "Gentle movement",
          content:
            "Sometimes the smallest step in the right direction ends up being the biggest step of your life.",
        },
        quote: {
          content:
            "It does not matter how slowly you go as long as you do not stop.",
          writer: "Confucius",
        },
        bgCode:
          "https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        songUrl:
          "https://www.youtube.com/watch?v=w6Nf5BcAomY&list=RDw6Nf5BcAomY&start_radio=1",
        todo: ["Take one tiny step today", "Be patient with your pace"],
      },
      {
        advice: {
          heading: "Trust the process",
          content:
            "Every step, even the uncertain ones, is part of your unique journey.",
        },
        quote: {
          content:
            "Trust the process. Your time is coming. Just do the work and the results will handle themselves.",
          writer: "Tony Gaskins",
        },
        bgCode:
          "https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        songUrl:
          "https://www.youtube.com/watch?v=w6Nf5BcAomY&list=RDw6Nf5BcAomY&start_radio=1",
        todo: ["Focus on effort over outcome", "Trust your journey"],
      },
    ],
    [
      {
        advice: {
          heading: "Find your North Star",
          content: "What values guide you? Use them as your compass.",
        },
        quote: {
          content:
            "Your only obligation in any lifetime is to be true to yourself.",
          writer: "Richard Bach",
        },
        bgCode:
          "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        songUrl:
          "https://www.youtube.com/watch?v=sLe3xW0FN2M&list=RDsLe3xW0FN2M&start_radio=1",
        todo: [
          "Define your core values",
          "Make decisions based on what matters most",
        ],
      },
      {
        advice: {
          heading: "Inner compass",
          content:
            "Your values are the true north that can guide you through any confusion.",
        },
        quote: {
          content:
            "When you know your values, making decisions becomes easier.",
          writer: "Roy Disney",
        },
        bgCode:
          "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        songUrl:
          "https://www.youtube.com/watch?v=sLe3xW0FN2M&list=RDsLe3xW0FN2M&start_radio=1",
        todo: ["List your top 5 values", "Align your choices with your values"],
      },
      {
        advice: {
          heading: "What matters most",
          content:
            "When you're lost, return to what you know matters deeply to you.",
        },
        quote: {
          content: "The main thing is to keep the main thing the main thing.",
          writer: "Stephen Covey",
        },
        bgCode:
          "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        songUrl:
          "https://www.youtube.com/watch?v=sLe3xW0FN2M&list=RDsLe3xW0FN2M&start_radio=1",
        todo: ["Identify your priorities", "Focus on what truly matters"],
      },
      {
        advice: {
          heading: "Authentic direction",
          content:
            "Let your authentic self be the guide when external directions fail.",
        },
        quote: {
          content:
            "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
          writer: "Ralph Waldo Emerson",
        },
        bgCode:
          "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        songUrl:
          "https://www.youtube.com/watch?v=sLe3xW0FN2M&list=RDsLe3xW0FN2M&start_radio=1",
        todo: ["Connect with your authentic self", "Honor your true nature"],
      },
      {
        advice: {
          heading: "Values as lighthouse",
          content:
            "Like a lighthouse guides ships to shore, your values can guide you home.",
        },
        quote: {
          content: "The way to get started is to quit talking and begin doing.",
          writer: "Walt Disney",
        },
        bgCode:
          "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        songUrl:
          "https://www.youtube.com/watch?v=sLe3xW0FN2M&list=RDsLe3xW0FN2M&start_radio=1",
        todo: [
          "Act according to your values",
          "Let principles guide decisions",
        ],
      },
    ],
    [
      {
        advice: {
          heading: "Trust the journey",
          content:
            "Sometimes getting lost leads to the most beautiful discoveries.",
        },
        quote: {
          content:
            "The real voyage of discovery consists not in seeking new landscapes, but in having new eyes.",
          writer: "Marcel Proust",
        },
        bgCode:
          "https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        songUrl:
          "https://www.youtube.com/watch?v=pGhwBFYtn1s&list=RDpGhwBFYtn1s&start_radio=1",
        todo: [
          "Reflect on past 'detours' that led to good things",
          "Be patient with yourself",
        ],
      },
      {
        advice: {
          heading: "Trust the process",
          content:
            "Sometimes we need to lose ourselves to find who we really are.",
        },
        quote: {
          content: "The journey of a thousand miles begins with one step.",
          writer: "Lao Tzu",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=pGhwBFYtn1s&list=RDpGhwBFYtn1s&start_radio=1",
        todo: [
          "Meditate for 10 minutes",
          "Read about someone who inspires you",
        ],
      },
      {
        advice: {
          heading: "Divine timing",
          content:
            "Everything happens in its own time. Trust that you're exactly where you need to be.",
        },
        quote: {
          content:
            "Timing is everything. If it's meant to happen it will, at the right time for the right reasons.",
          writer: "Unknown",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=pGhwBFYtn1s&list=RDpGhwBFYtn1s&start_radio=1",
        todo: ["Practice patience", "Trust in perfect timing"],
      },
      {
        advice: {
          heading: "Faith in the path",
          content:
            "Even when you can't see the road ahead, trust that it's leading somewhere meaningful.",
        },
        quote: {
          content:
            "Faith is taking the first step even when you don't see the whole staircase.",
          writer: "Martin Luther King Jr.",
        },
        bgCode:
          "https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        songUrl:
          "https://www.youtube.com/watch?v=pGhwBFYtn1s&list=RDpGhwBFYtn1s&start_radio=1",
        todo: ["Have faith in your journey", "Take the next step with trust"],
      },
      {
        advice: {
          heading: "Surrender to the flow",
          content:
            "Sometimes the best navigation is to stop fighting the current and flow with it.",
        },
        quote: {
          content:
            "Life is a series of natural and spontaneous changes. Don't resist them; that only creates sorrow.",
          writer: "Lao Tzu",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=pGhwBFYtn1s&list=RDpGhwBFYtn1s&start_radio=1",
        todo: ["Let go of the need to control", "Flow with life's changes"],
      },
    ],
    [
      {
        advice: {
          heading: "Explore possibilities",
          content:
            "Being lost means you're open to new directions and opportunities.",
        },
        quote: {
          content: "Adventure is worthwhile in itself.",
          writer: "Amelia Earhart",
        },
        bgCode:
          "https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        songUrl:
          "https://www.youtube.com/watch?v=pGhwBFYtn1s&list=RDpGhwBFYtn1s&start_radio=1",
        todo: [
          "Make a list of things you're curious about",
          "Visit somewhere you've never been",
        ],
      },
      {
        advice: {
          heading: "Seek new perspectives",
          content:
            "Sometimes we need to explore uncharted territory to find our way.",
        },
        quote: {
          content: "Life is either a daring adventure or nothing at all.",
          writer: "Helen Keller",
        },
        bgCode:
          "https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        songUrl:
          "https://www.youtube.com/watch?v=jGB-16XbpmA&list=RDjGB-16XbpmA&start_radio=1",
        todo: [
          "Talk to someone with a different perspective",
          "Challenge your assumptions",
        ],
      },
      {
        advice: {
          heading: "Embrace exploration",
          content:
            "Being lost is an invitation to explore parts of life you've never seen.",
        },
        quote: {
          content:
            "The purpose of life is to live it, to taste experience to the utmost.",
          writer: "Eleanor Roosevelt",
        },
        bgCode:
          "https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        songUrl:
          "https://www.youtube.com/watch?v=jGB-16XbpmA&list=RDjGB-16XbpmA&start_radio=1",
        todo: ["Try something completely new", "Step out of your comfort zone"],
      },
      {
        advice: {
          heading: "Curiosity as compass",
          content:
            "When you don't know where to go, follow what makes you curious.",
        },
        quote: {
          content: "I have no special talent. I am only passionately curious.",
          writer: "Albert Einstein",
        },
        bgCode:
          "https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        songUrl:
          "https://www.youtube.com/watch?v=jGB-16XbpmA&list=RDjGB-16XbpmA&start_radio=1",
        todo: ["Follow your curiosity", "Explore what interests you"],
      },
      {
        advice: {
          heading: "Open to discovery",
          content: "Every moment of being lost is a moment ripe for discovery.",
        },
        quote: {
          content:
            "Discovery consists of seeing what everybody has seen and thinking what nobody has thought.",
          writer: "Albert Szent-Györgyi",
        },
        bgCode:
          "https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        songUrl:
          "https://www.youtube.com/watch?v=DnGdoEa1tPg&list=RDDnGdoEa1tPg&start_radio=1",
        todo: ["Stay open to surprises", "Look for hidden opportunities"],
      },
    ],
    [
      {
        advice: {
          heading: "Allow transformation",
          content:
            "Being lost is often the prelude to becoming who you're meant to be.",
        },
        quote: {
          content:
            "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
          writer: "Ralph Waldo Emerson",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=DnGdoEa1tPg&list=RDDnGdoEa1tPg&start_radio=1",
        todo: ["Embrace change as growth", "Write about who you're becoming"],
      },
      {
        advice: {
          heading: "Growth through confusion",
          content:
            "Confusion is often the cocoon from which your new self emerges.",
        },
        quote: {
          content:
            "The butterfly counts not months but moments, and has time enough.",
          writer: "Rabindranath Tagore",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=DnGdoEa1tPg&list=RDDnGdoEa1tPg&start_radio=1",
        todo: ["Journal about your growth", "Celebrate your evolution"],
      },
      {
        advice: {
          heading: "Becoming process",
          content: "You're not lost, you're in the process of becoming.",
        },
        quote: {
          content:
            "The privilege of a lifetime is to become who you truly are.",
          writer: "Carl Jung",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=DnGdoEa1tPg&list=RDDnGdoEa1tPg&start_radio=1",
        todo: ["Embrace your becoming", "Trust your transformation"],
      },
      {
        advice: {
          heading: "Reinvention opportunity",
          content:
            "Being lost gives you permission to reinvent yourself completely.",
        },
        quote: {
          content:
            "Every day is a chance to begin again. Don't focus on the failures of yesterday, start today with positive thoughts.",
          writer: "Catherine Pulsifer",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=DnGdoEa1tPg&list=RDDnGdoEa1tPg&start_radio=1",
        todo: ["Imagine your ideal self", "Take steps toward reinvention"],
      },
      {
        advice: {
          heading: "Emergence wisdom",
          content:
            "Like a butterfly emerging from a chrysalis, your confusion may be transformation.",
        },
        quote: {
          content: "And all at once, summer collapsed into fall.",
          writer: "Oscar Wilde",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=DnGdoEa1tPg&list=RDDnGdoEa1tPg&start_radio=1",
        todo: ["Honor your transformation", "Trust the emergence process"],
      },
    ],
    [
      {
        advice: {
          heading: "Follow your intuition",
          content:
            "Your inner wisdom knows the way, even when your mind doesn't.",
        },
        quote: {
          content:
            "The privilege of a lifetime is to become who you truly are.",
          writer: "Carl Jung",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=DnGdoEa1tPg&list=RDDnGdoEa1tPg&start_radio=1",
        todo: ["Listen to your gut feelings", "Trust your instincts"],
      },
      {
        advice: {
          heading: "Inner voice guidance",
          content:
            "When external maps fail, your inner voice becomes your most reliable guide.",
        },
        quote: {
          content:
            "The intuitive mind is a sacred gift and the rational mind is a faithful servant.",
          writer: "Albert Einstein",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=DnGdoEa1tPg&list=RDDnGdoEa1tPg&start_radio=1",
        todo: ["Quiet your mind and listen", "Trust your first instinct"],
      },
      {
        advice: {
          heading: "Body wisdom",
          content:
            "Your body often knows the right direction before your mind catches up.",
        },
        quote: {
          content:
            "The body benefits from movement, and the mind benefits from stillness.",
          writer: "Sakyong Mipham",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=DnGdoEa1tPg&list=RDDnGdoEa1tPg&start_radio=1",
        todo: [
          "Notice what feels right in your body",
          "Pay attention to physical cues",
        ],
      },
      {
        advice: {
          heading: "Stillness speaks",
          content: "In quiet moments, clarity often emerges naturally.",
        },
        quote: {
          content:
            "In the depth of winter, I finally learned that there was in me an invincible summer.",
          writer: "Albert Camus",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=DnGdoEa1tPg&list=RDDnGdoEa1tPg&start_radio=1",
        todo: ["Spend time in silence", "Listen to your inner wisdom"],
      },
      {
        advice: {
          heading: "Trust your knowing",
          content: "Deep down, you often know more than you think you do.",
        },
        quote: {
          content:
            "You already have within you everything you need to deal with whatever the world can throw at you.",
          writer: "Brian Tracy",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=Ev8FCJ9U0YE&list=RDEv8FCJ9U0YE&start_radio=1",
        todo: ["Access your inner knowing", "Trust what feels true"],
      },
    ],
    [
      {
        advice: {
          heading: "Seek guidance",
          content:
            "Sometimes the path becomes clearer when we ask for directions.",
        },
        quote: {
          content:
            "A mentor is someone who allows you to see the hope inside yourself.",
          writer: "Oprah Winfrey",
        },
        bgCode:
          "https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        songUrl:
          "https://www.youtube.com/watch?v=Ev8FCJ9U0YE&list=RDEv8FCJ9U0YE&start_radio=1",
        todo: [
          "Reach out to a mentor",
          "Ask for advice from someone you trust",
        ],
      },
      {
        advice: {
          heading: "Learn from others",
          content:
            "Others who have walked similar paths can offer valuable insights.",
        },
        quote: {
          content:
            "If you want to go fast, go alone. If you want to go far, go together.",
          writer: "African Proverb",
        },
        bgCode:
          "https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        songUrl:
          "https://www.youtube.com/watch?v=Ev8FCJ9U0YE&list=RDEv8FCJ9U0YE&start_radio=1",
        todo: [
          "Connect with others on similar journeys",
          "Learn from their experiences",
        ],
      },
      {
        advice: {
          heading: "Community support",
          content: "You don't have to figure everything out alone.",
        },
        quote: {
          content:
            "We cannot live only for ourselves. A thousand fibers connect us with our fellow men.",
          writer: "Herman Melville",
        },
        bgCode:
          "https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        songUrl:
          "https://www.youtube.com/watch?v=Ev8FCJ9U0YE&list=RDEv8FCJ9U0YE&start_radio=1",
        todo: [
          "Join a supportive community",
          "Share your struggles with others",
        ],
      },
      {
        advice: {
          heading: "Wisdom from experience",
          content:
            "Those who have been lost and found their way have much to teach.",
        },
        quote: {
          content:
            "Experience is not what happens to you; it's what you do with what happens to you.",
          writer: "Aldous Huxley",
        },
        bgCode:
          "https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        songUrl:
          "https://www.youtube.com/watch?v=Ev8FCJ9U0YE&list=RDEv8FCJ9U0YE&start_radio=1",
        todo: [
          "Seek wisdom from those with experience",
          "Learn from others' journeys",
        ],
      },
      {
        advice: {
          heading: "Professional guidance",
          content:
            "Sometimes a professional perspective can illuminate the path forward.",
        },
        quote: {
          content:
            "The best way to find yourself is to lose yourself in the service of others.",
          writer: "Mahatma Gandhi",
        },
        bgCode:
          "https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        songUrl:
          "https://www.youtube.com/watch?v=Ev8FCJ9U0YE&list=RDEv8FCJ9U0YE&start_radio=1",
        todo: ["Consider professional guidance", "Invest in your growth"],
      },
    ],
  ],
  Scared: [
    [
      {
        advice: {
          heading: "Feel the fear and do it anyway",
          content: "Courage isn't the absence of fear, it's acting despite it.",
        },
        quote: {
          content:
            "You are braver than you believe, stronger than you seem, and smarter than you think.",
          writer: "A.A. Milne",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=Ev8FCJ9U0YE&list=RDEv8FCJ9U0YE&start_radio=1",
        todo: ["Name what you're afraid of", "Take one small brave action"],
      },
      {
        advice: {
          heading: "Ground yourself in the present",
          content:
            "Fear lives in the future. Come back to this moment. You're safe right now.",
        },
        quote: {
          content: "Anxiety is the dizziness of freedom.",
          writer: "Søren Kierkegaard",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=Ev8FCJ9U0YE&list=RDEv8FCJ9U0YE&start_radio=1",
        todo: [
          "Practice 5-4-3-2-1 grounding technique",
          "Hold something comforting",
        ],
      },
      {
        advice: {
          heading: "Face it with courage",
          content:
            "Bravery is not the absence of fear, but action in spite of it.",
        },
        quote: {
          content:
            "Courage is not the absence of fear, but rather the judgment that something else is more important than fear.",
          writer: "Ambrose Redmoon",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=Ev8FCJ9U0YE&list=RDEv8FCJ9U0YE&start_radio=1",
        todo: ["Remind yourself of your strength", "Take three deep breaths"],
      },
      {
        advice: {
          heading: "Stay in the now",
          content:
            "Fear thrives on future scenarios. Anchor yourself in the present.",
        },
        quote: {
          content:
            "If you want to conquer fear, don't sit home and think about it. Go out and get busy.",
          writer: "Dale Carnegie",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=Ev8FCJ9U0YE&list=RDEv8FCJ9U0YE&start_radio=1",
        todo: ["Focus on your five senses", "Practice mindful breathing"],
      },
      {
        advice: {
          heading: "Transform fear into power",
          content:
            "Use fear as fuel to propel you forward rather than hold you back.",
        },
        quote: {
          content: "Everything you want is on the other side of fear.",
          writer: "Jack Canfield",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=Ev8FCJ9U0YE&list=RDEv8FCJ9U0YE&start_radio=1",
        todo: ["Visualize success", "Channel fear into determination"],
      },
    ],
    [
      {
        advice: {
          heading: "Break it down",
          content:
            "Big fears become manageable when broken into smaller pieces.",
        },
        quote: {
          content: "The only thing we have to fear is fear itself.",
          writer: "Franklin D. Roosevelt",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=Ev8FCJ9U0YE&list=RDEv8FCJ9U0YE&start_radio=1",
        todo: [
          "Write down your specific worries",
          "Create a simple action plan",
        ],
      },
      {
        advice: {
          heading: "Remember your strength",
          content:
            "You've overcome challenges before. You have that same strength now.",
        },
        quote: {
          content: "Fear is temporary. Regret is forever.",
          writer: "Unknown",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=Ev8FCJ9U0YE&list=RDEv8FCJ9U0YE&start_radio=1",
        todo: [
          "List past challenges you've overcome",
          "Call someone who believes in you",
        ],
      },
      {
        advice: {
          heading: "Take it step by step",
          content:
            "You don't have to leap over the mountain - just climb it one step at a time.",
        },
        quote: {
          content:
            "You don't have to see the whole staircase, just take the first step.",
          writer: "Martin Luther King Jr.",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=HLm61p-VwIs&list=RDHLm61p-VwIs&start_radio=1",
        todo: ["Make a list of small steps", "Focus only on the next step"],
      },
      {
        advice: {
          heading: "Draw on past victories",
          content: "You're stronger than you know - your history proves it.",
        },
        quote: {
          content: "She believed she could, so she did.",
          writer: "Unknown",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=HLm61p-VwIs&list=RDHLm61p-VwIs&start_radio=1",
        todo: [
          "Write down your accomplishments",
          "Remember times you were brave",
        ],
      },
      {
        advice: {
          heading: "Make fear your friend",
          content:
            "Fear can be a compass pointing you toward what matters most.",
        },
        quote: {
          content: "The cave you fear to enter holds the treasure you seek.",
          writer: "Joseph Campbell",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=HLm61p-VwIs&list=RDHLm61p-VwIs&start_radio=1",
        todo: [
          "Ask what this fear is protecting",
          "Find the growth opportunity",
        ],
      },
    ],
    [
      {
        advice: {
          heading: "Embrace vulnerability",
          content:
            "Being scared is a sign that you're about to do something meaningful.",
        },
        quote: {
          content:
            "Vulnerability is not winning or losing; it's having the courage to show up and be seen when we have no control over the outcome.",
          writer: "Brené Brown",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=HLm61p-VwIs&list=RDHLm61p-VwIs&start_radio=1",
        todo: [
          "Acknowledge your vulnerability",
          "Share your fear with someone trusted",
        ],
      },
      {
        advice: {
          heading: "Honor your sensitivity",
          content:
            "Fear often shows up for those who care deeply. Your sensitivity is a strength.",
        },
        quote: {
          content:
            "The most sensitive people in this world are the most courageous.",
          writer: "Unknown",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=HLm61p-VwIs&list=RDHLm61p-VwIs&start_radio=1",
        todo: ["Celebrate your caring nature", "Use sensitivity as wisdom"],
      },
      {
        advice: {
          heading: "Feel fully, act anyway",
          content:
            "You can feel scared and still move forward. Both can be true.",
        },
        quote: {
          content: "Feel the fear and do it anyway.",
          writer: "Susan Jeffers",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=HLm61p-VwIs&list=RDHLm61p-VwIs&start_radio=1",
        todo: [
          "Accept your feelings without judgment",
          "Take action despite fear",
        ],
      },
      {
        advice: {
          heading: "Connect with courage",
          content: "Fear often signals that you're on the edge of growth.",
        },
        quote: {
          content:
            "You can't be brave if you've only had wonderful things happen to you.",
          writer: "Mary Tyler Moore",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=HLm61p-VwIs&list=RDHLm61p-VwIs&start_radio=1",
        todo: [
          "Recognize fear as a growth signal",
          "Connect with your inner courage",
        ],
      },
      {
        advice: {
          heading: "Trust your resilience",
          content:
            "You've survived every difficult moment so far. Trust your ability to handle this too.",
        },
        quote: {
          content:
            "You have been assigned this mountain to show others it can be moved.",
          writer: "Mel Robbins",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=HLm61p-VwIs&list=RDHLm61p-VwIs&start_radio=1",
        todo: ["Reflect on your resilience", "Trust your ability to cope"],
      },
    ],
    [
      {
        advice: {
          heading: "Create a safety plan",
          content:
            "Having a plan can help reduce fear and increase confidence.",
        },
        quote: {
          content: "By failing to prepare, you are preparing to fail.",
          writer: "Benjamin Franklin",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=HLm61p-VwIs&list=RDHLm61p-VwIs&start_radio=1",
        todo: ["Create a step-by-step plan", "Identify your support system"],
      },
      {
        advice: {
          heading: "Gather your resources",
          content:
            "Fear diminishes when you know what tools and support you have available.",
        },
        quote: {
          content: "Preparation prevents poor performance.",
          writer: "Unknown",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=HLm61p-VwIs&list=RDHLm61p-VwIs&start_radio=1",
        todo: [
          "List your available resources",
          "Connect with supportive people",
        ],
      },
      {
        advice: {
          heading: "Practice the scenario",
          content:
            "Mental rehearsal can help you feel more prepared and less afraid.",
        },
        quote: {
          content:
            "Success depends upon previous preparation, and without such preparation there is sure to be failure.",
          writer: "Confucius",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=HLm61p-VwIs&list=RDHLm61p-VwIs&start_radio=1",
        todo: [
          "Visualize handling the situation well",
          "Practice your response",
        ],
      },
      {
        advice: {
          heading: "Have backup plans",
          content:
            "Knowing you have alternatives reduces the pressure and fear.",
        },
        quote: {
          content: "Hope for the best, prepare for the worst.",
          writer: "Unknown",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=HLm61p-VwIs&list=RDHLm61p-VwIs&start_radio=1",
        todo: ["Create backup options", "Feel secure in your preparation"],
      },
      {
        advice: {
          heading: "Start with small tests",
          content:
            "Build confidence by starting with smaller, less scary versions of what you fear.",
        },
        quote: {
          content: "The way to get started is to quit talking and begin doing.",
          writer: "Walt Disney",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=Ev8FCJ9U0YE&list=RDEv8FCJ9U0YE&start_radio=1",
        todo: ["Take a small practice step", "Build confidence gradually"],
      },
    ],
    [
      {
        advice: {
          heading: "Reframe the narrative",
          content:
            "Fear is often based on stories we tell ourselves. Change the story.",
        },
        quote: {
          content:
            "The stories we tell ourselves about our circumstances determine how we experience our circumstances.",
          writer: "Unknown",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=Ev8FCJ9U0YE&list=RDEv8FCJ9U0YE&start_radio=1",
        todo: [
          "Question your fearful thoughts",
          "Create a more empowering story",
        ],
      },
      {
        advice: {
          heading: "Focus on possibility",
          content:
            "Instead of imagining what could go wrong, consider what could go right.",
        },
        quote: {
          content:
            "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.",
          writer: "Helen Keller",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=Ev8FCJ9U0YE&list=RDEv8FCJ9U0YE&start_radio=1",
        todo: ["List positive possibilities", "Visualize successful outcomes"],
      },
      {
        advice: {
          heading: "Challenge catastrophic thinking",
          content:
            "Fear often makes mountains out of molehills. See the situation clearly.",
        },
        quote: {
          content: "Worry is a misuse of imagination.",
          writer: "Dan Zadra",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=Ev8FCJ9U0YE&list=RDEv8FCJ9U0YE&start_radio=1",
        todo: ["Question worst-case scenarios", "Focus on realistic outcomes"],
      },
      {
        advice: {
          heading: "Find the learning opportunity",
          content:
            "Every scary situation is a chance to grow and learn something new.",
        },
        quote: {
          content: "In every difficulty lies opportunity.",
          writer: "Albert Einstein",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=Ev8FCJ9U0YE&list=RDEv8FCJ9U0YE&start_radio=1",
        todo: [
          "Identify what you could learn",
          "Embrace the growth opportunity",
        ],
      },
      {
        advice: {
          heading: "See fear as excitement",
          content:
            "Fear and excitement create similar sensations. Choose excitement.",
        },
        quote: {
          content:
            "The only difference between fear and excitement is breathing.",
          writer: "Fritz Perls",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=Ev8FCJ9U0YE&list=RDEv8FCJ9U0YE&start_radio=1",
        todo: ["Relabel fear as excitement", "Focus on the adventure"],
      },
    ],
    [
      {
        advice: {
          heading: "Connect with others",
          content:
            "Fear feels smaller when shared with people who care about you.",
        },
        quote: {
          content: "A problem shared is a problem halved.",
          writer: "Unknown",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=Ev8FCJ9U0YE&list=RDEv8FCJ9U0YE&start_radio=1",
        todo: ["Talk to a trusted friend", "Share your fears openly"],
      },
      {
        advice: {
          heading: "Seek wise counsel",
          content:
            "Others who have faced similar fears can offer valuable perspective.",
        },
        quote: {
          content:
            "The best way to find out if you can trust somebody is to trust them.",
          writer: "Ernest Hemingway",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=Ev8FCJ9U0YE&list=RDEv8FCJ9U0YE&start_radio=1",
        todo: [
          "Seek advice from someone experienced",
          "Learn from others' journeys",
        ],
      },
      {
        advice: {
          heading: "Build your support network",
          content:
            "Having people in your corner makes scary things feel more manageable.",
        },
        quote: {
          content: "Alone we can do so little; together we can do so much.",
          writer: "Helen Keller",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=dQ-UpV3dYMo&list=RDdQ-UpV3dYMo&start_radio=1",
        todo: ["Identify your support system", "Reach out for encouragement"],
      },
      {
        advice: {
          heading: "Find your cheerleaders",
          content:
            "Surround yourself with people who believe in your ability to overcome fear.",
        },
        quote: {
          content: "Surround yourself with people who believe in your dreams.",
          writer: "Unknown",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=dQ-UpV3dYMo&list=RDdQ-UpV3dYMo&start_radio=1",
        todo: ["Connect with positive people", "Ask for encouragement"],
      },
      {
        advice: {
          heading: "Share the journey",
          content:
            "Let others accompany you through scary times. You don't have to go alone.",
        },
        quote: {
          content:
            "If you want to go fast, go alone. If you want to go far, go together.",
          writer: "African Proverb",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=dQ-UpV3dYMo&list=RDdQ-UpV3dYMo&start_radio=1",
        todo: ["Invite someone to support you", "Accept help when offered"],
      },
    ],
    [
      {
        advice: {
          heading: "Celebrate small wins",
          content:
            "Every brave action, no matter how small, deserves recognition.",
        },
        quote: {
          content:
            "Success is the sum of small efforts repeated day in and day out.",
          writer: "Robert Collier",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=dQ-UpV3dYMo&list=RDdQ-UpV3dYMo&start_radio=1",
        todo: [
          "Acknowledge your brave moments",
          "Celebrate progress over perfection",
        ],
      },
      {
        advice: {
          heading: "Build courage gradually",
          content:
            "Each time you act despite fear, you build your courage muscle stronger.",
        },
        quote: {
          content: "Courage is like a muscle. We strengthen it by use.",
          writer: "Ruth Gordon",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=dQ-UpV3dYMo&list=RDdQ-UpV3dYMo&start_radio=1",
        todo: [
          "Notice your growing courage",
          "Take progressively braver actions",
        ],
      },
      {
        advice: {
          heading: "Honor your growth",
          content: "Facing fear changes you. Honor the person you're becoming.",
        },
        quote: {
          content:
            "The oak fought the wind and was broken; the willow bent and was saved.",
          writer: "Unknown",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=dQ-UpV3dYMo&list=RDdQ-UpV3dYMo&start_radio=1",
        todo: ["Reflect on your personal growth", "Honor your transformation"],
      },
      {
        advice: {
          heading: "Trust your evolution",
          content:
            "Every time you face fear, you become more resilient and wise.",
        },
        quote: {
          content: "What doesn't kill you makes you stronger.",
          writer: "Friedrich Nietzsche",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=dQ-UpV3dYMo&list=RDdQ-UpV3dYMo&start_radio=1",
        todo: ["Trust your growing wisdom", "Embrace your resilience"],
      },
      {
        advice: {
          heading: "Inspire others",
          content:
            "Your courage in facing fear can inspire others to face theirs.",
        },
        quote: {
          content: "Your courage gives others permission to be brave.",
          writer: "Unknown",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=dQ-UpV3dYMo&list=RDdQ-UpV3dYMo&start_radio=1",
        todo: ["Share your courage story", "Be an example for others"],
      },
    ],
  ],
  Happy: [
    [
      {
        advice: {
          heading: "Savor this moment",
          content:
            "Happiness is fleeting - take time to really feel and appreciate it.",
        },
        quote: {
          content:
            "Happiness is not something ready made. It comes from your own actions.",
          writer: "Dalai Lama",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=mzX0rhF8buo&list=RDmzX0rhF8buo&start_radio=1",
        todo: [
          "Share your joy with someone",
          "Take a photo to remember this feeling",
        ],
      },
      {
        advice: {
          heading: "Spread the joy",
          content:
            "Happiness multiplies when shared. Let your light shine on others.",
        },
        quote: {
          content: "The most wasted of days is one without laughter.",
          writer: "E.E. Cummings",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=mzX0rhF8buo&list=RDmzX0rhF8buo&start_radio=1",
        todo: ["Compliment a stranger", "Do something kind for someone"],
      },
      {
        advice: {
          heading: "Embrace the lightness",
          content:
            "Let this joy fill every part of you. You deserve this happiness.",
        },
        quote: {
          content:
            "Happiness is when what you think, what you say, and what you do are in harmony.",
          writer: "Mahatma Gandhi",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=mzX0rhF8buo&list=RDmzX0rhF8buo&start_radio=1",
        todo: ["Dance freely", "Smile at everyone you meet"],
      },
      {
        advice: {
          heading: "Multiply the magic",
          content: "Your happiness is contagious. Spread it generously.",
        },
        quote: {
          content:
            "Happiness is the only thing that multiplies when you share it.",
          writer: "Albert Schweitzer",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=mzX0rhF8buo&list=RDmzX0rhF8buo&start_radio=1",
        todo: ["Tell someone you love them", "Leave positive notes for others"],
      },
      {
        advice: {
          heading: "Treasure this feeling",
          content:
            "Store this moment in your heart for times when you need it most.",
        },
        quote: {
          content: "Be happy for this moment. This moment is your life.",
          writer: "Omar Khayyam",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=mzX0rhF8buo&list=RDmzX0rhF8buo&start_radio=1",
        todo: ["Create a happiness memory", "Write a gratitude letter"],
      },
    ],
    [
      {
        advice: {
          heading: "Dance like nobody's watching",
          content: "Let your body express the joy your heart is feeling.",
        },
        quote: {
          content: "Life is too important to be taken seriously.",
          writer: "Oscar Wilde",
        },
        bgCode:
          "https://images.pexels.com/photos/7728811/pexels-photo-7728811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        songUrl:
          "https://www.youtube.com/watch?v=mzX0rhF8buo&list=RDmzX0rhF8buo&start_radio=1",
        todo: ["Dance to your favorite song", "Sing out loud"],
      },
      {
        advice: {
          heading: "Capture the good vibes",
          content:
            "Write down what made you happy today so you can return to it later.",
        },
        quote: {
          content: "Collect moments, not things.",
          writer: "Unknown",
        },
        bgCode:
          "https://images.pexels.com/photos/355887/pexels-photo-355887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        songUrl:
          "https://www.youtube.com/watch?v=mzX0rhF8buo&list=RDmzX0rhF8buo&start_radio=1",
        todo: ["Start a gratitude journal", "Take a mental snapshot"],
      },
      {
        advice: {
          heading: "Move to the rhythm",
          content: "Let your body celebrate what your soul is feeling.",
        },
        quote: {
          content: "Dance is the hidden language of the soul.",
          writer: "Martha Graham",
        },
        bgCode:
          "https://images.pexels.com/photos/7728811/pexels-photo-7728811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        songUrl:
          "https://www.youtube.com/watch?v=mzX0rhF8buo&list=RDmzX0rhF8buo&start_radio=1",
        todo: ["Move your body freely", "Express yourself through movement"],
      },
      {
        advice: {
          heading: "Document the magic",
          content: "Preserve this beautiful moment for your future self.",
        },
        quote: {
          content:
            "The best things in life are the people we love, the places we've been, and the memories we've made.",
          writer: "Unknown",
        },
        bgCode:
          "https://images.pexels.com/photos/355887/pexels-photo-355887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        songUrl:
          "https://www.youtube.com/watch?v=Jey547kXXP8&list=RDJey547kXXP8&start_radio=1",
        todo: ["Write about this moment", "Create a happiness jar"],
      },
      {
        advice: {
          heading: "Celebrate life",
          content:
            "This is what being alive feels like. Celebrate every second.",
        },
        quote: {
          content:
            "Yesterday is history, tomorrow is a mystery, today is a gift.",
          writer: "Eleanor Roosevelt",
        },
        bgCode:
          "https://images.pexels.com/photos/7728811/pexels-photo-7728811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        songUrl:
          "https://www.youtube.com/watch?v=Jey547kXXP8&list=RDJey547kXXP8&start_radio=1",
        todo: ["Celebrate small wins", "Appreciate being alive"],
      },
    ],
    [
      {
        advice: {
          heading: "Express your gratitude",
          content:
            "Happiness grows when we acknowledge all the good in our lives.",
        },
        quote: {
          content: "Gratitude turns what we have into enough.",
          writer: "Unknown",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=Jey547kXXP8&list=RDJey547kXXP8&start_radio=1",
        todo: [
          "List 10 things you're grateful for",
          "Thank someone who matters to you",
        ],
      },
      {
        advice: {
          heading: "Count your blessings",
          content:
            "Take inventory of all the wonderful things surrounding you right now.",
        },
        quote: {
          content:
            "The unthankful heart discovers no mercies; but the thankful heart will find, in every hour, some heavenly blessings.",
          writer: "Henry Ward Beecher",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=Jey547kXXP8&list=RDJey547kXXP8&start_radio=1",
        todo: [
          "Notice small daily miracles",
          "Appreciate your health and abilities",
        ],
      },
      {
        advice: {
          heading: "Give thanks abundantly",
          content: "Let appreciation flow from your heart like a river of joy.",
        },
        quote: {
          content:
            "In ordinary life, we hardly realize that we receive a great deal more than we give, and that it is only with gratitude that life becomes rich.",
          writer: "Dietrich Bonhoeffer",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=Jey547kXXP8&list=RDJey547kXXP8&start_radio=1",
        todo: [
          "Express thanks to unexpected people",
          "Appreciate simple pleasures",
        ],
      },
      {
        advice: {
          heading: "Recognize abundance",
          content:
            "Happiness often comes from realizing how much we already have.",
        },
        quote: {
          content:
            "Reflect upon your present blessings, of which every man has many - not on your past misfortunes, of which all men have some.",
          writer: "Charles Dickens",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=Jey547kXXP8&list=RDJey547kXXP8&start_radio=1",
        todo: [
          "Focus on what you have, not what you lack",
          "Create a gratitude ritual",
        ],
      },
      {
        advice: {
          heading: "Honor your journey",
          content:
            "Be grateful for the path that led you to this moment of joy.",
        },
        quote: {
          content:
            "Sometimes we need to remind ourselves that thankfulness is indeed a virtue.",
          writer: "William Bennett",
        },
        bgCode:
          "https://images.pexels.com/photos/355887/pexels-photo-355887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        songUrl:
          "https://www.youtube.com/watch?v=Jey547kXXP8&list=RDJey547kXXP8&start_radio=1",
        todo: [
          "Appreciate your growth and resilience",
          "Thank your past self for persevering",
        ],
      },
    ],
    [
      {
        advice: {
          heading: "Create lasting memories",
          content:
            "Turn this happiness into a treasure you can revisit anytime.",
        },
        quote: {
          content: "Memory is the treasury and guardian of all things.",
          writer: "Cicero",
        },
        bgCode:
          "https://images.pexels.com/photos/7728811/pexels-photo-7728811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        songUrl:
          "https://www.youtube.com/watch?v=Jey547kXXP8&list=RDJey547kXXP8&start_radio=1",
        todo: ["Take photos with loved ones", "Write about this happy moment"],
      },
      {
        advice: {
          heading: "Build happiness archives",
          content:
            "Collect these joyful moments like precious gems for the future.",
        },
        quote: {
          content: "The best thing about memories is making them.",
          writer: "Unknown",
        },
        bgCode:
          "https://images.pexels.com/photos/355887/pexels-photo-355887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        songUrl:
          "https://www.youtube.com/watch?v=Jey547kXXP8&list=RDJey547kXXP8&start_radio=1",
        todo: [
          "Start a happiness scrapbook",
          "Record a voice memo of your joy",
        ],
      },
      {
        advice: {
          heading: "Immortalize the feeling",
          content: "Capture not just the moment, but the emotion behind it.",
        },
        quote: {
          content:
            "A picture is worth a thousand words, but a memory is priceless.",
          writer: "Unknown",
        },
        bgCode:
          "https://images.pexels.com/photos/7728811/pexels-photo-7728811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        songUrl:
          "https://www.youtube.com/watch?v=Jey547kXXP8&list=RDJey547kXXP8&start_radio=1",
        todo: [
          "Describe your feelings in detail",
          "Create an artwork of this moment",
        ],
      },
      {
        advice: {
          heading: "Store joy for later",
          content:
            "These happy memories will be medicine for difficult days ahead.",
        },
        quote: {
          content: "Happiness is not a destination, it is a way of life.",
          writer: "Burton Hills",
        },
        bgCode:
          "https://images.pexels.com/photos/355887/pexels-photo-355887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        songUrl:
          "https://www.youtube.com/watch?v=Jey547kXXP8&list=RDJey547kXXP8&start_radio=1",
        todo: [
          "Create a mental happiness vault",
          "Promise to remember this feeling",
        ],
      },
      {
        advice: {
          heading: "Weave joy into your story",
          content:
            "Let this happiness become part of who you are and how you see yourself.",
        },
        quote: {
          content:
            "Life isn't about waiting for the storm to pass, it's about learning to dance in the rain.",
          writer: "Vivian Greene",
        },
        bgCode:
          "https://images.pexels.com/photos/7728811/pexels-photo-7728811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        songUrl:
          "https://www.youtube.com/watch?v=Soa3gO7tL-c&list=RDSoa3gO7tL-c&start_radio=1",
        todo: [
          "Integrate this joy into your identity",
          "Let happiness define your narrative",
        ],
      },
    ],
    [
      {
        advice: {
          heading: "Radiate positive energy",
          content: "Your happiness is a gift to everyone around you.",
        },
        quote: {
          content: "Be a rainbow in someone else's cloud.",
          writer: "Maya Angelou",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=Soa3gO7tL-c&list=RDSoa3gO7tL-c&start_radio=1",
        todo: [
          "Smile at strangers",
          "Bring positive energy to every interaction",
        ],
      },
      {
        advice: {
          heading: "Be a joy ambassador",
          content: "Let your happiness inspire others to find their own.",
        },
        quote: {
          content: "Happiness is contagious. Be a carrier.",
          writer: "Unknown",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=Soa3gO7tL-c&list=RDSoa3gO7tL-c&start_radio=1",
        todo: ["Share your happiness story", "Encourage others to find joy"],
      },
      {
        advice: {
          heading: "Illuminate the world",
          content:
            "Your joy is a light that can brighten even the darkest corners.",
        },
        quote: {
          content:
            "Keep your face always toward the sunshine—and shadows will fall behind you.",
          writer: "Walt Whitman",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=Soa3gO7tL-c&list=RDSoa3gO7tL-c&start_radio=1",
        todo: ["Be a source of light for others", "Share uplifting content"],
      },
      {
        advice: {
          heading: "Elevate others",
          content: "Use your happiness as a ladder to lift others up.",
        },
        quote: {
          content: "A candle loses nothing by lighting another candle.",
          writer: "James Keller",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=Soa3gO7tL-c&list=RDSoa3gO7tL-c&start_radio=1",
        todo: [
          "Compliment others genuinely",
          "Help someone achieve their happiness",
        ],
      },
      {
        advice: {
          heading: "Create ripples of joy",
          content: "Your happiness can start a chain reaction of positivity.",
        },
        quote: {
          content: "Throw kindness around like confetti.",
          writer: "Unknown",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=Soa3gO7tL-c&list=RDSoa3gO7tL-c&start_radio=1",
        todo: ["Do random acts of kindness", "Spread joy wherever you go"],
      },
    ],
    [
      {
        advice: {
          heading: "Live in the present",
          content:
            "Happiness exists in the now. Don't let it slip away thinking about tomorrow.",
        },
        quote: {
          content:
            "The present moment is the only time over which we have dominion.",
          writer: "Thích Nhất Hạnh",
        },
        bgCode:
          "https://images.pexels.com/photos/355887/pexels-photo-355887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        songUrl:
          "https://www.youtube.com/watch?v=Soa3gO7tL-c&list=RDSoa3gO7tL-c&start_radio=1",
        todo: ["Focus on your five senses", "Breathe deeply and feel alive"],
      },
      {
        advice: {
          heading: "Mindful happiness",
          content:
            "Be fully present with your joy. Let it fill every cell of your being.",
        },
        quote: {
          content:
            "The secret of happiness is not in doing what one likes, but in liking what one does.",
          writer: "James M. Barrie",
        },
        bgCode:
          "https://images.pexels.com/photos/7728811/pexels-photo-7728811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        songUrl:
          "https://www.youtube.com/watch?v=Soa3gO7tL-c&list=RDSoa3gO7tL-c&start_radio=1",
        todo: ["Practice mindful awareness", "Savor each sensation of joy"],
      },
      {
        advice: {
          heading: "Absorb the bliss",
          content:
            "Let this happiness soak into your bones. Become one with the joy.",
        },
        quote: {
          content: "Happiness is not a goal; it is a by-product.",
          writer: "Eleanor Roosevelt",
        },
        bgCode:
          "https://images.pexels.com/photos/355887/pexels-photo-355887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        songUrl:
          "https://www.youtube.com/watch?v=Soa3gO7tL-c&list=RDSoa3gO7tL-c&start_radio=1",
        todo: [
          "Feel happiness in your body",
          "Let joy permeate your entire being",
        ],
      },
      {
        advice: {
          heading: "Embrace the now",
          content:
            "This moment of happiness is a gift. Unwrap it slowly and completely.",
        },
        quote: {
          content:
            "Happiness is a choice, not a result. Nothing will make you happy until you choose to be happy.",
          writer: "Ralph Marston",
        },
        bgCode:
          "https://images.pexels.com/photos/7728811/pexels-photo-7728811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        songUrl:
          "https://www.youtube.com/watch?v=Soa3gO7tL-c&list=RDSoa3gO7tL-c&start_radio=1",
        todo: ["Choose to be fully present", "Embrace this exact moment"],
      },
      {
        advice: {
          heading: "Honor the precious now",
          content:
            "This happy moment will never come again exactly like this. Honor its uniqueness.",
        },
        quote: {
          content:
            "Life is what happens to you while you're busy making other plans.",
          writer: "John Lennon",
        },
        bgCode:
          "https://images.pexels.com/photos/355887/pexels-photo-355887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        songUrl:
          "https://www.youtube.com/watch?v=Soa3gO7tL-c&list=RDSoa3gO7tL-c&start_radio=1",
        todo: [
          "Acknowledge the uniqueness of this moment",
          "Give this happiness your full attention",
        ],
      },
    ],
    [
      {
        advice: {
          heading: "Nurture more happiness",
          content:
            "Plant seeds of joy that will bloom into future moments of bliss.",
        },
        quote: {
          content:
            "Happiness is not something you postpone for the future; it is something you design for the present.",
          writer: "Jim Rohn",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=Soa3gO7tL-c&list=RDSoa3gO7tL-c&start_radio=1",
        todo: [
          "Identify what created this happiness",
          "Plan to do more of what brings you joy",
        ],
      },
      {
        advice: {
          heading: "Cultivate joy habits",
          content:
            "Turn the activities that make you happy into regular practices.",
        },
        quote: {
          content:
            "The secret to happiness is to count your blessings while others are adding up their troubles.",
          writer: "William Penn",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=Soa3gO7tL-c&list=RDSoa3gO7tL-c&start_radio=1",
        todo: [
          "Create a daily joy practice",
          "Schedule regular happiness activities",
        ],
      },
      {
        advice: {
          heading: "Build a happiness lifestyle",
          content:
            "Design your life around the things that consistently bring you joy.",
        },
        quote: {
          content:
            "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.",
          writer: "Marcus Aurelius",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=Soa3gO7tL-c&list=RDSoa3gO7tL-c&start_radio=1",
        todo: [
          "Align your life with what makes you happy",
          "Make joy a priority",
        ],
      },
      {
        advice: {
          heading: "Invest in your happiness",
          content:
            "Your joy is worth investing time, energy, and resources in.",
        },
        quote: {
          content: "Happiness is the highest form of health.",
          writer: "Dalai Lama",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=Soa3gO7tL-c&list=RDSoa3gO7tL-c&start_radio=1",
        todo: [
          "Invest in activities that bring joy",
          "Prioritize your happiness",
        ],
      },
      {
        advice: {
          heading: "Protect your joy",
          content: "Guard your happiness like the precious treasure it is.",
        },
        quote: {
          content:
            "Happiness is a butterfly, which when pursued, is always just beyond your grasp, but which, if you will sit down quietly, may alight upon you.",
          writer: "Nathaniel Hawthorne",
        },
        bgCode:
          "https://images.pexels.com/photos/355887/pexels-photo-355887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        songUrl:
          "https://www.youtube.com/watch?v=Soa3gO7tL-c&list=RDSoa3gO7tL-c&start_radio=1",
        todo: [
          "Set boundaries to protect your joy",
          "Choose happiness-supporting environments",
        ],
      },
    ],
    [
      {
        advice: {
          heading: "Transform through joy",
          content: "Let this happiness change you from the inside out.",
        },
        quote: {
          content: "The purpose of our lives is to be happy.",
          writer: "Dalai Lama",
        },
        bgCode:
          "https://images.pexels.com/photos/7728811/pexels-photo-7728811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        songUrl:
          "https://www.youtube.com/watch?v=Soa3gO7tL-c&list=RDSoa3gO7tL-c&start_radio=1",
        todo: [
          "Let happiness reshape your perspective",
          "Embrace the person joy is making you",
        ],
      },
      {
        advice: {
          heading: "Evolve with bliss",
          content:
            "Your happiness is not just a feeling—it's a catalyst for growth.",
        },
        quote: {
          content:
            "Happiness is not the absence of problems; it's the ability to deal with them.",
          writer: "Steve Maraboli",
        },
        bgCode:
          "https://images.pexels.com/photos/355887/pexels-photo-355887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        songUrl:
          "https://www.youtube.com/watch?v=Soa3gO7tL-c&list=RDSoa3gO7tL-c&start_radio=1",
        todo: [
          "Notice how happiness changes your outlook",
          "Use joy as fuel for personal growth",
        ],
      },
      {
        advice: {
          heading: "Become your happiest self",
          content:
            "This is who you are when you're truly alive. Remember this person.",
        },
        quote: {
          content:
            "There is only one happiness in this life, to love and be loved.",
          writer: "George Sand",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=Soa3gO7tL-c&list=RDSoa3gO7tL-c&start_radio=1",
        todo: [
          "Embrace your joyful identity",
          "Let happiness define who you are",
        ],
      },
      {
        advice: {
          heading: "Embody pure joy",
          content:
            "You are not just experiencing happiness—you are becoming it.",
        },
        quote: {
          content: "Most folks are as happy as they make up their minds to be.",
          writer: "Abraham Lincoln",
        },
        bgCode: getBg(),
        songUrl:
          "https://www.youtube.com/watch?v=Soa3gO7tL-c&list=RDSoa3gO7tL-c&start_radio=1",
        todo: [
          "Embody happiness in every action",
          "Become a living expression of joy",
        ],
      },
      {
        advice: {
          heading: "Radiate authentic joy",
          content:
            "This happiness is your true nature shining through. Let it illuminate everything.",
        },
        quote: {
          content:
            "Happiness is when what you think, what you say, and what you do are in harmony.",
          writer: "Mahatma Gandhi",
        },
        bgCode:
          "https://images.pexels.com/photos/7728811/pexels-photo-7728811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        songUrl:
          "https://www.youtube.com/watch?v=Soa3gO7tL-c&list=RDSoa3gO7tL-c&start_radio=1",
        todo: [
          "Align your whole being with joy",
          "Let happiness flow through all you do",
        ],
      },
    ],
  ],
};
