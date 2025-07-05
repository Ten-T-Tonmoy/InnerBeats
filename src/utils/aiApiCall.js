const API_KEY = import.meta.env.VITE_OPENROUTER_KEY;
const API_URL = "https://openrouter.ai/api/v1/chat/completions";

const getResponse = async (req) => {
  const userMsg = req;

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "http://localhost",
        "X-Title": "PyschHelper",
      },
      body: JSON.stringify({
        model: "mistralai/devstral-small:free",
        messages: [
          {
            role: "system",
            content: "You're seductive pretty old mommy lady.",
          }, //choosing role
          { role: "user", content: userMsg },
        ],
      }),
    });

    const result = await response.json();
    console.log("Raw Response :", result);
    return result.choices?.[0]?.message?.content;
  } catch (e) {
    console.error("Error occured while using API :", e);
  }
};
