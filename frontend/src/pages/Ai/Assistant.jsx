import { useState, useRef, useEffect } from "react";
import { useApi } from "../../hooks/useApi";
import MarkDown from "./Markdown";

import { GiBrain } from "react-icons/gi";
import { PiBrainFill } from "react-icons/pi";
import { RiMentalHealthFill } from "react-icons/ri";
import { RiMentalHealthLine } from "react-icons/ri";
import { DiAtom } from "react-icons/di";

const Assistant = () => {
  const { messages, sendMessage, loading } = useApi();
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      sendMessage(input);
      setInput("");
    }
  };

  const chatRef = useRef(null);
  //   const loadRef = useRef(null);
  useEffect(() => {
    if (loading) {
      chatRef.current.scrollTo({
        top: chatRef.current.scrollHeight,
        behavior: "smooth",
      });
    } else {
      chatRef.current.scrollTo({
        top: chatRef.current.scrollTop + chatRef.current.scrollHeight * 0.05,
        behavior: "smooth",
      });
    }
  }, [messages, loading]);

  return (
    <div className="w-full bg-primary pb-20 pt-28">
      <div className="w-[90vw] rounded-xl  m-auto md:w-[60vw]  bg-primary">
        <h2 className="bg-[#222222] justify-center flex items-center gap-2 rounded-t-md  text-[1.2rem] font-extrabold p-2 text-center text-white ">
          <PiBrainFill /> AI Assistant
        </h2>

        {/**chat box here */}
        <div
          ref={chatRef}
          className="overflow-y-scroll 
        min-h-[400px] border-2 max-h-[400px]
         border-[#ccc] p-3 mb-3"
        >
          {messages.length === 0 && (
            <div className="justify-center items-center w-full h-full">
              <DiAtom className="text-[16rem] m-auto text-white" />
              <h1 className=" text-center font-bold">
                How can I help you Today ?
              </h1>
            </div>
          )}
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`
                ${
                  msg.role === "user"
                    ? "ml-auto bg-secondary text-white my-4 rounded-tl-md rounded-br-md px-3 py-1 w-fit"
                    : " bg-gray-100 my-4 rounded-tr-md rounded-bl-md p-4 text-justify "
                }
                `}
            >
              {msg.role !== "user" && <strong>Response:</strong>}
              <MarkDown msg={msg.content}></MarkDown>
            </div>
          ))}

          {/**loading spinner  */}
          {loading && (
            <div className="flex justify-center items-center py-2">
              <div
                className="w-6 h-6 border-4 border-t-4
           border-gray-300 border-t-blue-500 rounded-full
            animate-spin"
              ></div>
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} style={{ display: "flex" }}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="rounded-tr-md rounded-bl-md px-3 flex-1"
          />
          <button
            type="submit"
            className="
            bg-secondary hover:scale-105 active:scale-95 text-white rounded-tl-md rounded-br-md"
            style={{ padding: "8px 12px", marginLeft: "8px" }}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Assistant;
