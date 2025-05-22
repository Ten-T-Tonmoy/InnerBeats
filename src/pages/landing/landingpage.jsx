import React, { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import Hero from "./Hero";
import Bottom from "./Bottom";
//icons here
import { IoMdClose } from "react-icons/io";

import { FaRegFaceSadCry as Sad1 } from "react-icons/fa6";
import { FaRegFaceAngry as Angry } from "react-icons/fa6";
import { IoHappyOutline as Happy } from "react-icons/io5";
import { RiEmotionSadLine as Sad2 } from "react-icons/ri"; //sad tears single
import { PiSmileySadLight as Regret1 } from "react-icons/pi"; //regret
import { HiOutlineEmojiSad as Regret2 } from "react-icons/hi";
import { PiSmileyNervousBold as Scared } from "react-icons/pi";

//logic imports and shits

import { request } from "../../utils/requestDb";
import { getResult } from "../../hooks/useResponse";

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
    <div className="bg-primary flex flex-col items-center">
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
        <div className="flex  gap-[1px] w-full justify-center md:justify-center md:gap-2 p-2">
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
        setEmotion={() => setEmotion(val)}
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
         overflow-y-scroll scrollbar-hide h-[75vh]
       backdrop-blur-lg bg-clip-padding bg-opacity-0  md:h-[60vh]
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
           ? " border-stone-900 "
           : ""
       }`}
      >
        <div
          className={` text-white py-2 px-4
            flex justify-between items-center

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
          <p>What made you {emotion} ?</p>
          <div
            className="text-[1.7rem] hover:bg-white hover:text-red-600 
          rounded-full cursor-pointer active:scale-90"
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
        {/**content goes here request part */}
        <div className="flex flex-col gap-1 items-center py-3 ">
          {response.bgCode !== "" ? (
            <div>response exists</div>
          ) : (
            request.emotions
              .find((val) => val.type === emotion)
              ?.reasons.map((reason, idx) => (
                <div
                  onClick={() => {
                    setResponse(getResult({ emotion, reasonIdx: idx }));
                  }}
                  key={idx}
                  className=" w-[90%]
            cursor-pointer py-1 px-2 text-white bg-red-400 bg-opacity-50 
            rounded-sm hover:scale-105"
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

const InputBox = ({ emotion, openSesame, setEmotion }) => {
  return (
    <div
      className=" border-[.5px] my-4 border-black rounded-md 
    max-w-[90vw] flex text-[.9rem] bg-yellow-100/40 justify-center"
    >
      <input
        value={emotion}
        type="text"
        onChange={(e) => setEmotion(e.target.data)}
        onSubmit={(val) => setEmotion(val)}
        placeholder="emotion name ..."
        className="p-2  w-full bg-yellow-100/40 rounded-l-md"
      />
      <button
        onClick={openSesame}
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
