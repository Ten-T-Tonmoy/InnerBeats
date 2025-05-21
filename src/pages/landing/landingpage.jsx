import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaRegFaceSadCry as Sad1 } from "react-icons/fa6";
import { FaRegFaceAngry as Angry } from "react-icons/fa6";
import { IoHappyOutline as Happy } from "react-icons/io5";
import { RiEmotionSadLine as Sad2 } from "react-icons/ri"; //sad tears single
import { PiSmileySadLight as Regret1 } from "react-icons/pi"; //regret
import { HiOutlineEmojiSad as Regret2 } from "react-icons/hi";
import { PiSmileyNervousBold as Scared } from "react-icons/pi";

const page = () => {
  return (
    <div className="bg-primary flex flex-col items-center">
      <div className="flex flex-col py-3 items-center justify-center font-semibold text-slate-700">
        <h1>Let your heart speak</h1>

        <TypingText />
      </div>
      <div>
        <h1
          className="text-center font-extrabold text-[1.2rem] text-slate-950
      py-3"
        >
          How are you feeling today?
        </h1>
        <div className="flex gap-[1px] w-full justify-between md:justify-center md:gap-4 p-2">
          <div
            className="border-2 border-red-400  text-red-600 py-2 px-4 text-[1.8rem] rounded-md 
          hover:bg-red-400  justify-center items-center flex flex-col cursor-pointer hover:text-white
          transition-all duration-200 ease-in-out active:scale-95 "
          >
            <h1 className=" text-[1rem]">Angry</h1>
            <Angry />
          </div>
          <div
            className="border-2 border-stone-900  text-stone-900 py-2 px-4 text-[1.8rem] rounded-md 
          hover:bg-stone-900 justify-center items-center flex flex-col cursor-pointer hover:text-white
          transition-all duration-200 ease-in-out active:scale-95"
          >
            <h1 className=" text-[1rem]">Lost</h1>

            <Regret2 />
          </div>
          <div
            className="border-2 border-blue-400  text-blue-600 py-2 px-4 text-[1.8rem] rounded-md 
          hover:bg-blue-400 justify-center items-center flex flex-col cursor-pointer hover:text-white
          transition-all duration-200 ease-in-out active:scale-95"
          >
            <h1 className=" text-[1rem]">Happy</h1>

            <Happy />
          </div>
          <div
            className="border-2 border-slate-400  text-slate-600 py-2 px-4 text-[1.8rem] rounded-md 
          hover:bg-slate-400 justify-center items-center flex flex-col cursor-pointer hover:text-white
          transition-all duration-200 ease-in-out active:scale-95"
          >
            <h1 className=" text-[1rem]">Sad</h1>

            <Sad2 />
          </div>
          <div
            className="border-2 border-green-400  text-green-600 py-2 px-4 text-[1.8rem] rounded-md 
          hover:bg-green-400 justify-center items-center flex flex-col cursor-pointer hover:text-white
          transition-all duration-200 ease-in-out active:scale-95"
          >
            <h1 className=" text-[1rem]">Scared</h1>

            <Scared />
          </div>
        </div>
      </div>
      <InputBox />
    </div>
  );
};

const TypingText = () => {
  return (
    <div>
      <Typewriter
        className="transition-all duration-200 ease-in-out"
        words={["We are Listening 💖💗💝"]}
        loop={0}
        cursor
        cursorStyle="█"
        typeSpeed={70}
        deleteSpeed={40}
        delaySpeed={1500}
      />
    </div>
  );
};

const InputBox = () => {
  return (
    <div
      className=" border-[.5px] my-4 border-black rounded-md 
    max-w-[90vw] flex text-[.9rem] bg-yellow-100/40 justify-center"
    >
      <input
        type="text"
        className="p-2  w-full bg-yellow-100/40 rounded-l-md"
      />
      <button
        className="py-1 px-2 rounded-r-md hover:scale-105 
      transition-all
      duration-200 ease-in-out active:scale-90 bg-secondary  text-white"
      >
        Hear my <span className="font-dancing ">Inner Beat</span>
      </button>
    </div>
  );
};

export default page;
