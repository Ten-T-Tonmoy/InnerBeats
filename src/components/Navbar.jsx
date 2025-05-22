import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openPop, setOpenPop] = useState(false);

  return (
    <div className="bg-primary relative">
      <div className="flex items-center justify-center relative ">
        {/* nav menu bar  */}
        <div
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500
         hover:text-black text-2xl hover:bg-secondary rounded-full p-2
         cursor-pointer  active:scale-90 transition-all duration-200"
          onClick={() => setOpenPop(true)}
        >
          <IoMdMenu />
        </div>

        {/* logo goes here huh*/}
        <div
          className="font-dancing cursor-pointer p-2 rounded-lg 
        text-white text-[1.8rem] font-[1000] bg-secondary"
        >
          Inner Beats
        </div>
      </div>

      {openPop && (
        <Popup openPop={openPop} closePop={() => setOpenPop(false)} />
      )}
    </div>
  );
};

export default Navbar;

const Popup = ({ openPop, closePop }) => {
  return (
    <div className="h-[100vh] flex items-center justify-center top-0 w-[100vw] bg-black bg-opacity-50 z-50 fixed">
      <div
        className="bg-secondary rounded-md  p-3
      flex flex-col items-center
      "
      >
        <button
          onClick={closePop}
          className="border rounded-full mb-4  active:scale-90 transition-all duration-200"
        >
          <IoMdClose
            className="text-white text-[2rem]  hover:bg-white hover:text-secondary rounded-full 
          "
          />
        </button>
        <div className="flex font-[1000] flex-col gap-2">
          <Link to="/home">
            <button
              className="hover:bg-slate-300 hover:bg-opacity-60 rounded-md 
            text-white py-3 px-20 border w-full active:scale-90 transition-all duration-200"
              onClick={closePop}
            >
              HomePage
            </button>
          </Link>
          <Link to="/doctors">
            <button
              className="hover:bg-slate-300 hover:bg-opacity-60 rounded-md 
            text-white py-3 px-20 border w-full active:scale-90 transition-all duration-200"
              onClick={closePop}
            >
              Psychiatric Help
            </button>
          </Link>
          <Link to="/about">
            <button
              className="hover:bg-slate-300 hover:bg-opacity-60 rounded-md 
            text-white py-3 px-20 border w-full active:scale-90 transition-all duration-200"
              onClick={closePop}
            >
              About Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
