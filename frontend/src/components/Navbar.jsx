import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openPop, setOpenPop] = useState(false);

  return (
    <div className="bg-secondary w-full  top-0">
      <div className="flex items-center justify-center md:justify-start relative ">
        {/* nav menu bar  */}
        <div
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white
         hover:border-white hover:border text-2xl hover:bg-secondary rounded-full p-2
         cursor-pointer  active:scale-90 transition-all duration-200"
          onClick={() => setOpenPop(true)}
        >
          <IoMdMenu />
        </div>

        {/* logo goes here huh*/}
        <Link to="/home">
          <div
            className="font-dancing cursor-pointer p-2 md:pl-20 rounded-lg 
          text-white text-[1.8rem] font-[1000] bg-secondaryt"
          >
            Inner Beats
          </div>
        </Link>
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
          className="border text-white rounded-md mb-4 bg-red-600 hover:bg-white hover:text-red-600 w-full py-1
          active:scale-90 transition-all duration-200 flex justify-between px-3 items-center"
        >
          <p className=" font-sans font-bold">Close Menu</p>
          <IoMdClose
            className=" text-[1.8rem]   
          "
          />
        </button>
        <div className="flex font-bold font-sans flex-col gap-[6px]">
          <Link to="/home">
            <button
              className="bg-primary  text-secondary hover:bg-opacity-60 rounded-md 
             py-1 px-20 border w-full active:scale-90 transition-all duration-200"
              onClick={closePop}
            >
              HomePage
            </button>
          </Link>
          <Link to="/login">
            <button
              className="bg-primary text-secondary hover:bg-opacity-60 rounded-md 
             py-1 px-20 border w-full active:scale-90 transition-all duration-200"
              onClick={closePop}
            >
              Log in
            </button>
          </Link>
          <Link to="/signup">
            <button
              className="bg-primary text-secondary hover:bg-opacity-60 rounded-md 
             py-1 px-20 border w-full active:scale-90 transition-all duration-200"
              onClick={closePop}
            >
              Sign up
            </button>
          </Link>
          <Link to="/doctors">
            <button
              className="bg-primary text-secondary hover:bg-opacity-60 rounded-md 
             py-1 px-20 border w-full active:scale-90 transition-all duration-200"
              onClick={closePop}
            >
              Psychiatric Help
            </button>
          </Link>
          <Link to="/ai">
            <button
              className="bg-primary text-secondary hover:bg-opacity-60 rounded-md 
             py-1 px-20 border w-full active:scale-90 transition-all duration-200"
              onClick={closePop}
            >
              AI Assistant
            </button>
          </Link>
          <Link to="/about">
            <button
              className="bg-primary text-secondary hover:bg-opacity-60 rounded-md 
             py-1 px-20 border w-full active:scale-90 transition-all duration-200"
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
