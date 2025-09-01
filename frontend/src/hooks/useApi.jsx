import { useState } from "react";

const API_KEY = import.meta.env.VITE_OPENROUTER_KEY;
const API_URL = "https://openrouter.ai/api/v1/chat/completions";

export const useApi = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  //will catch the input
  const sendMessage = async (userInput) => {
    const updatedChat = [
      ...messages,
      {
        role: "user",
        content: userInput,
      },
    ];

    setMessages(updatedChat);
    try {
      setLoading(true);
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
          // "HTTP-Referer": "http://localhost",
          "X-Title": "PyschHelper",
        },
        body: JSON.stringify({
          model: "deepseek/deepseek-r1-0528:free",
          //   messages: [
          //     {
          //       role: "system",
          //       content: "You're seductive pretty old mommy lady.",
          //     }, //choosing role
          //     { role: "user", content: userMsg },
          //   ],
          messages: [
            {
              role: "system",
              content: "You're a helpful mental support assistant",
            },
            ...updatedChat,
          ],
        }),
      });

      const result = await response.json();
      console.log("Raw Response :", result);
      const reply = result.choices?.[0]?.message?.content;

      if (reply) {
        setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
      }
      setLoading(false);
    } catch (e) {
      console.error("Error occured while using API :", e);
    }
  };

  return { messages, sendMessage, loading };
};
