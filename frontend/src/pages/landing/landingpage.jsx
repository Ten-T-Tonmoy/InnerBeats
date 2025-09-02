import React, { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import Hero from "./Hero";
import Bottom from "./Bottom";
//icons here
import { IoMdClose } from "react-icons/io";

import { FaRegFaceSadCry as Sad1 } from "react-icons/fa6";
import { FaRegFaceAngry as Angry } from "react-icons/fa6";
import { IoHappyOutline as Happy, IoArrowRedoOutline } from "react-icons/io5";
import { RiEmotionSadLine as Sad2 } from "react-icons/ri"; //sad tears single
import { PiSmileySadLight as Regret1 } from "react-icons/pi"; //regret
import { HiOutlineEmojiSad as Regret2 } from "react-icons/hi";
import { PiSmileyNervousBold as Scared } from "react-icons/pi";
import { IoMdSend } from "react-icons/io";

import { IoMdArrowBack } from "react-icons/io";

//logic imports and shits

import { request } from "../../utils/requestDb.js";
import { response } from "../../utils/responseDb.js";
import { getResult } from "../../hooks/useResponse";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

//image imports
import quotebg1 from "../../assets/quotebg/quotebg1.png";

export default function page() {
  //set back to empty and false asap
  const [emotion, setEmotion] = useState("");
  const [openPop, setOpenPop] = useState(false);
  const [response, setResponse] = useState({
    advice: {
      heading: "",
      content: "",
    },
    quote: {
      content: "",
      writer: "",
    },
    bgCode: "",
    songUrl: "", //this will be youtube code to iframe
    todo: [""],
  });

  //since state change is asynchronus so yeah
  useEffect(() => {
    console.log("New response:", response);
  }, [response]);
  return (
    <div className="bg-primary flex flex-col items-center pt-20">
      {openPop && (
        <PopUp
          emotion={emotion}
          response={response}
          setResponse={(val) => setResponse(val)}
          setOpenPop={(val) => setOpenPop(val)}
        />
      )}
      <div className="flex flex-col py-5 items-center justify-center font-semibold text-slate-700">
        <TypingText />
      </div>
      <Hero />
      <div>
        <h1
          className="text-center  font-extrabold text-[1.2rem] text-slate-950
      py-3"
        >
          How are you feeling today?
        </h1>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-[4px] w-full  md:gap-2 p-2">
          <div
            onClick={() => setEmotion("Angry")}
            className={`border-2 border-red-600  text-red-600 py-2 px-4 text-[1.8rem] rounded-md 
              hover:bg-red-600  justify-center items-center flex flex-col cursor-pointer hover:text-white
              transition-all duration-200 ease-in-out active:scale-95 ${
                emotion === "Angry" ? "bg-red-600 text-white" : ""
              } `}
          >
            <h1 className=" text-[1rem]">Angry</h1>
            <Angry />
          </div>
          <div
            onClick={() => setEmotion("Lost")}
            className={`border-2 border-stone-900  text-stone-900 py-2 px-4 text-[1.8rem] rounded-md 
          hover:bg-stone-900 justify-center items-center flex flex-col cursor-pointer hover:text-white
          transition-all duration-200 ease-in-out active:scale-95 ${
            emotion === "Lost" ? "bg-stone-900 text-white" : ""
          }`}
          >
            <h1 className=" text-[1rem]">Lost</h1>

            <Regret2 />
          </div>
          <div
            onClick={() => setEmotion("Happy")}
            className={`border-2 border-blue-600  text-blue-600 py-2 px-4 text-[1.8rem] rounded-md 
              hover:bg-blue-600 justify-center items-center flex flex-col cursor-pointer hover:text-white
              transition-all duration-200 ease-in-out active:scale-95 ${
                emotion === "Happy" ? "bg-blue-600 text-white" : ""
              }`}
          >
            <h1 className=" text-[1rem]">Happy</h1>

            <Happy />
          </div>
          <div
            onClick={() => setEmotion("Sad")}
            className={`border-2 border-slate-600  text-slate-600 py-2 px-4 text-[1.8rem] rounded-md 
          hover:bg-slate-600 justify-center items-center flex flex-col cursor-pointer hover:text-white
          transition-all duration-200 ease-in-out active:scale-95  ${
            emotion === "Sad" ? "bg-slate-600 text-white" : ""
          }`}
          >
            <h1 className=" text-[1rem]">Sad</h1>

            <Sad2 />
          </div>
          <div
            onClick={() => setEmotion("Scared")}
            className={`border-2 border-green-600  text-green-600 py-2 px-4 text-[1.8rem] rounded-md 
          hover:bg-green-600 justify-center items-center flex flex-col cursor-pointer hover:text-white
          transition-all duration-200 ease-in-out active:scale-95  ${
            emotion === "Scared" ? "bg-green-600 text-white" : ""
          }`}
          >
            <h1 className=" text-[1rem]">Scared</h1>

            <Scared />
          </div>
        </div>
      </div>
      <InputBox
        setEmotion={(val) => setEmotion(val)}
        emotion={emotion}
        openSesame={() => setOpenPop(true)}
      />
      {openPop && <div> pop is open bro</div>}
      <Bottom />
    </div>
  );
}

const TypingText = () => {
  return (
    <div>
      <Typewriter
        className="transition-all duration-200 ease-in-out"
        words={["Let your Heart speak ......."]}
        loop={0}
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={40}
        delaySpeed={1500}
      />
    </div>
  );
};

const PopUp = ({ emotion, setOpenPop, response, setResponse }) => {
  return (
    <div
      className={`
    fixed bg-black bg-opacity-50 h-[120vh] -top-[10vh] z-10
    w-[100vw] flex flex-col justify-center items-center 
    
    `}
    >
      <div
        className={`relative w-[85vw] md:w-[50vw] overflow-hidden rounded-md  border-b-8
         overflow-y-scroll scrollbar-custom h-[75vh]
       backdrop-blur-lg bg-clip-padding bg-opacity-0  
       ${
         emotion === "Angry"
           ? " border-red-600 "
           : emotion === "Sad"
           ? " border-slate-600 "
           : emotion === "Scared"
           ? " border-green-600 "
           : emotion === "Happy"
           ? " border-blue-600 "
           : emotion === "Lost"
           ? " border-stone-950 "
           : ""
       }`}
      >
        <div
          className={` text-white py-2 px-4
            flex justify-between items-center
            font-sans

          ${
            emotion === "Angry"
              ? "bg-red-600"
              : emotion === "Sad"
              ? "bg-slate-600"
              : emotion === "Scared"
              ? "bg-green-600"
              : emotion === "Happy"
              ? "bg-blue-600"
              : emotion === "Lost"
              ? "bg-stone-900"
              : ""
          } `}
        >
          {" "}
          {response.bgCode !== "" ? (
            <div>I see you are {emotion} </div>
          ) : (
            <div> What made you {emotion} ? </div>
          )}
          <div className="flex gap-1 justify-center items-center">
            <div
              onClick={() => {
                setResponse({
                  advice: {
                    heading: "",
                    content: "",
                  },
                  quote: {
                    content: "",
                    writer: "",
                  },
                  bgCode: "",
                  songUrl: "",
                  todo: [""],
                });
              }}
              className="text-[1.7rem] hover:bg-white hover:text-blue-600 
            rounded-full cursor-pointer active:scale-90 "
            >
              <IoMdArrowBack />
            </div>
            <div
              className="text-[1.7rem] hover:bg-white hover:text-red-600 
            rounded-full cursor-pointer active:scale-90 "
              onClick={() => {
                setOpenPop(false);
                setResponse({
                  advice: {
                    heading: "",
                    content: "",
                  },
                  quote: {
                    content: "",
                    writer: "",
                  },
                  bgCode: "",
                  songUrl: "",
                  todo: [""],
                });
              }}
            >
              <IoMdClose />
            </div>
          </div>
        </div>
        {/**content goes here request part  also AI assistant Redirection*/}
        <div className="flex flex-col gap-2 items-center  py-3 ">
          {/* -------------------ai assi--------------------- */}
          {response.bgCode === "" && (
            <Link to="/ai" className="w-[90%] ">
              <div
                className={` bg-gray-300   px-3 py-3 text-[1.1rem] 
                cursor-pointer  active:scale-90 rounded-md ease-in-out transition-all
                duration-300  flex justify-between items-center shadow-md
                ${
                  emotion === "Angry"
                    ? "text-red-600 hover:text-white hover:bg-gradient-to-tr from-black to-red-600"
                    : emotion === "Sad"
                    ? "text-slate-600 hover:text-white hover:bg-gradient-to-tr from-black to-slate-600"
                    : emotion === "Scared"
                    ? "text-green-600 hover:text-white hover:bg-gradient-to-tr from-black to-green-600"
                    : emotion === "Happy"
                    ? "text-blue-600 hover:text-white hover:bg-gradient-to-tr from-black to-blue-600"
                    : emotion === "Lost"
                    ? "text-stone-900 hover:text-white hover:bg-gradient-to-tr from-black to-stone-700"
                    : ""
                }
                `}
              >
                {" "}
                Speak with Ai assistant
                <IoMdSend className=" text-[1.2rem]" />
              </div>
            </Link>
          )}
          {response.bgCode !== "" ? (
            <ResponseLayout emotion={emotion} response={response} />
          ) : (
            request.emotions
              .find((val) => val.type === emotion)
              ?.reasons.map((reason, idx) => (
                <div
                  onClick={() => {
                    setResponse(getResult({ emotion, reasonIdx: idx }));
                  }}
                  key={idx}
                  className={` w-[90%] text-[1.05rem] sm:text-[1rem]
            cursor-pointer py-3 px-4 text-white  bg-opacity-50
            rounded-md hover:scale-105 hover:bg-opacity-100 shadow-lg
            capitalize
            ${
              emotion === "Angry"
                ? "bg-red-600"
                : emotion === "Sad"
                ? "bg-slate-600"
                : emotion === "Scared"
                ? "bg-green-600"
                : emotion === "Happy"
                ? "bg-blue-600"
                : emotion === "Lost"
                ? "bg-stone-900"
                : ""
            }`}
                >
                  {reason}
                </div>
              ))
          )}
        </div>
      </div>
    </div>
  );
};

/**
 * {
      advice: {
        heading: "Feeling low?",
        content: "It's okay to cry. Talk to someone you trust.",
      },
      quote: {
        content: "Every storm runs out of rain.",
        writer: "folklore",
      },
      bgCode: "bg-slate-600",
      songUrl: "https://example.com/sad-song-1",
      todo: ["Take a walk", "Journal your thoughts"],
    },

    iframe use korbo wait for it

 */
const ResponseLayout = ({ emotion, response }) => {
  return (
    <div className="flex flex-col justify-center w-[95%] md:w-[85%]">
      {/**advice part goes here  */}
      <div
        className={`px-2 my-3 py-1 w-full rounded-md bg-opacity-40 bg-black   `}
      >
        <div className="text-white">{response.advice.heading}</div>
        <div
          className={`bg-primary  p-2 rounded-md
        my-1
        ${
          emotion === "Angry"
            ? "text-red-600"
            : emotion === "Sad"
            ? "text-slate-600"
            : emotion === "Scared"
            ? "text-green-600"
            : emotion === "Happy"
            ? "text-blue-600"
            : emotion === "Lost"
            ? "text-stone-900"
            : ""
        }`}
        >
          <Typewriter
            className="transition-all duration-200 ease-in-out"
            words={[`${response.advice.content}`]}
            loop={1}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            delaySpeed={1500}
          />
        </div>
      </div>
      {/**quote part */}
      <div
        className="relative w-full h-[30vh] bg-cover bg-center
         text-white p-4 flex flex-col justify-between rounded-md "
        style={{
          backgroundImage: `url(${response.bgCode})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="bg-black/50 p-2 rounded">
          <p className="mt-2 text-md font-bold">{response.quote.content}</p>
        </div>
        {/**mt auto to push shit to bottom */}
        <div
          className="bg-black/50 mt-auto p-1 rounded text-right
         text-sm italic"
        >
          — {response.quote.writer || "Collected"}
        </div>
      </div>

      {/**song  part converting  embedding part suks*/}
      <div className="aspect-video my-2">
        <div className="text-md text-white italic p-1">
          Here's a song for your mood:
        </div>
        <iframe
          className="w-full h-full rounded-md"
          src={`https://www.youtube.com/embed/${
            response.songUrl.split("v=")[1]
          }`}
          title="Relaxing Beach Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/**To do part */}
      <div className="mb-2 mt-8">
        <h1 className="text-md text-white italic p-1">
          Things You can do in this situation:
        </h1>
        <div className="grid grid-cols-2 gap-2 justify-center items-center">
          {response.todo.map((el, idx) => (
            <div
              className={`p-2 text-white h-full rounded-md bg-opacity-70
              ${
                emotion === "Angry"
                  ? "bg-red-600"
                  : emotion === "Sad"
                  ? "bg-slate-600"
                  : emotion === "Scared"
                  ? "bg-green-600"
                  : emotion === "Happy"
                  ? "bg-blue-600"
                  : emotion === "Lost"
                  ? "bg-stone-900"
                  : ""
              }`}
              key={idx}
            >
              {el}
            </div>
          ))}
        </div>
      </div>

      {/**need professional consultation */}
      <div className="flex justify-center w-full">
        <Link to="/doctors">
          <button
            className="rounded-md font-mono flex gap-2 items-center
            active:scale-95 hover:bg-black bg-black/60 p-2 m-4 text-white
          "
          >
            Professional Consultation
            <IoMdSend className="text-white text-[1.2rem]" />
          </button>
        </Link>
      </div>
    </div>
  );
};

const InputBox = ({ emotion, openSesame, setEmotion }) => {
  const handleError = () => {
    setEmotion(emotion.trim());
    if (
      emotion !== "Sad" &&
      emotion !== "Happy" &&
      emotion !== "Angry" &&
      emotion !== "Lost" &&
      emotion !== "Scared"
    ) {
      toast.error("Please choose a valid option");
      return;
    }
    openSesame();
  };
  return (
    <div
      className=" border-[.5px] my-4 border-black rounded-md 
    max-w-[90vw] flex text-[.9rem] bg-yellow-100/40 justify-center"
    >
      <input
        value={emotion}
        type="text"
        onChange={(e) => setEmotion(e.target.value)}
        onSubmit={(val) => setEmotion(val)}
        placeholder="emotion name ..."
        className="p-2  w-full bg-yellow-100/40 rounded-l-md"
      />
      <button
        onClick={handleError}
        type="submit"
        className="py-1 px-2 rounded-r-md hover:scale-105 
      transition-all
      duration-200 ease-in-out active:scale-90 bg-secondary  text-white"
      >
        Hear my <span className="font-dancing ">Inner Beat</span>
      </button>
    </div>
  );
};
