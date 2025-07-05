import { useState } from "react";
import { useApi } from "../../hooks/useApi";
import MarkDown from "./Markdown";

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

  return (
    <div className="w-full bg-primary py-5 ">
      <div className="w-[90vw] rounded-xl  m-auto md:w-[60vw]  bg-primary">
        <h2 className="bg-[#222222] rounded-t-md  text-[1.2rem] font-extrabold p-2 text-center text-white ">
          ✨ AI Assistant ✨
        </h2>

        {/**chat box here */}
        <div
          className="overflow-y-scroll 
        min-h-[400px] border-2 max-h-[400px]
         border-[#ccc] p-3 mb-3"
        >
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
