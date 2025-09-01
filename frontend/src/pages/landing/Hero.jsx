import React from "react";
import hero2 from "../../assets/hero2.png";
import { FaHeartbeat } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const Typing = () => {
  return (
    <div
      className="text-[1.6rem] sm:text-[2rem] md:text-[2.5rem]
    lg:text-[3rem] "
    >
      <Typewriter
        className="transition-all duration-200 ease-in-out"
        words={[`💗💗💗`]}
        loop={0}
        cursor
        cursorStyle="."
        typeSpeed={70}
        deleteSpeed={40}
        delaySpeed={1500}
      />
    </div>
  );
};

const Hero = () => {
  return (
    <div
      className="flex md:flex-row items-center left-[7vw] 
     justify-center w-full md:w-[90vw] mx-auto relative lg:left-[7vw]"
    >
      {/* text part heere */}
      <div
        className="text-stone-800 font-bold text-[2rem] sm:text-[2.5rem]
       lg:text-[3rem] flex flex-col gap-1 items-start md:mr-10"
      >
        <div>WE</div>
        <div>ARE</div>
        <div>Listening</div>

        <div
          className="flex gap-2 text-red-500 text-[1.5rem]
          md:text-[2rem] lg:text-[2.5rem] "
        >
          <FaHeartbeat />
          <FaHeartbeat />
          <FaHeartbeat />
        </div>
      </div>
      {/**image part here */}
      <div className="mt-4 md:mt-0 w-[70%] md:w-[40%] flex justify-center">
        <img
          src={hero2}
          alt="png brain pic"
          className="w-full object-contain "
        />
      </div>
    </div>
  );
};

export default Hero;
