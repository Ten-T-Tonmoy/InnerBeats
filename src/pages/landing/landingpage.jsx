import React from "react";
import { Typewriter } from "react-simple-typewriter";

const page = () => {
  return (
    <div className="bg-primary">
      <TypingText />
    </div>
  );
};

const TypingText = () => {
  return (
    <div>
      <h1>Let your heart speak</h1>
      <Typewriter
        words={["We are Listening 💖💗💝"]}
        loop={0}
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </div>
  );
};

export default page;
