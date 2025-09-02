import React from "react";
import hero2 from "../../assets/hero2.png";
import Analytics from "./Analytics";

const Bottom = () => {
  return (
    <>
      <div>
        <Analytics />
      </div>
      <div
        className="flex md:flex-row items-center right-[7vw] 
      justify-center w-full md:w-[90vw] mx-auto relative lg:-right-[7vw]"
      >
        {/**image part here */}
        <div className="mt-4 md:mt-0 w-[70%] md:w-[40%] flex justify-center">
          <img
            src={hero2}
            alt="png brain pic"
            className="w-full scale-x-[-1] object-contain "
          />
        </div>
        {/* text part heere */}
        <div
          className="text-stone-800 font-bold text-[2rem] sm:text-[2.5rem]
        lg:text-[3rem] flex flex-col gap-1 items-end md:mr-10"
        >
          <div>Express</div>
          <div>Your </div>
          <div>Emotions</div>
          {/* 
        <div
        className="flex gap-2 text-red-500 text-[1.5rem]
        md:text-[2rem] lg:text-[2.5rem] "
        >
        <FaHeartbeat />
        <FaHeartbeat />
        <FaHeartbeat />
        </div> */}
        </div>
      </div>
    </>
  );
};

export default Bottom;
