import React from "react";
import personImg from "../assets/aboutus.png";
import doctorImg from "../assets/doctor.png";

const Footer = () => {
  return (
    <footer
      class="bg-[#222222] text-white 
     py-8 px-4 space-y-2  flex-col  text-sm sm:text-base"
    >
      <div className="md:px-[10vw]">
        <p
          className="cursor-pointer hover:text-secondary 
        hover:underline transition flex gap-1 mb-1"
        >
          <span>
            <img src={personImg} className="w-5" alt="person icon" />
          </span>
          <span>About Us - Your Friendly Listeners!</span>
        </p>
        <p
          className="cursor-pointer hover:text-secondary 
        hover:underline transition flex gap-1"
        >
          <span>
            <img src={doctorImg} alt="doctor icon" className="w-5" />
          </span>
          <span>Trusted Psychiatric Help</span>
        </p>
      </div>

      <div className="p-2">
        <p className="text-center  text-gray-300/80">
          Powered by{" "}
          <span className="font-dancing text-secondary text-[1.3rem]">
            {" "}
            Inner Beats
          </span>
        </p>
      </div>
      <div className="text-center  text-gray-400 text-sm ">
        <p>No login! No tracking! Only safe emotional space.</p>
        <p>Your emotions matter! Let’s make space for them.</p>
      </div>
    </footer>
  );
};

export default Footer;
