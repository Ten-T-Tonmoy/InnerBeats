import React from "react";

const Footer = () => {
  return (
    <footer
      class="bg-[#222222] text-white 
     py-8 px-4 space-y-2 text-sm sm:text-base"
    >
      <div className="">
        <p
          className="cursor-pointer hover:text-secondary 
        hover:underline transition"
        >
          About Us - Your Friendly Listeners!
        </p>
        <p
          className="cursor-pointer hover:text-secondary 
        hover:underline transition"
        >
          Trusted Psychiatric Help
        </p>
      </div>
      <p className="text-center text-gray-300/80">Powered by InnerBeats</p>
      <div className="text-center text-gray-400 text-sm ">
        <p>No login! No tracking! Only safe emotional space.</p>
        <p>Your emotions matter! Let’s make space for them.</p>
      </div>
    </footer>
  );
};

export default Footer;
