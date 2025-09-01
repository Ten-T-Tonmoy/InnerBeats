import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import UnderConstruction from "./UnderConstruction";
import Notfound from "./Notfound";

const page = () => {
  return (
    <div className="flex relative flex-col bg-primary justify-center items-center py-5 ">
      <div className="p-4  justify-start sm:text-center w-full ">
        Available Pages :{" "}
      </div>
      <div className="mb-4 grid grid-cols-2 gap-4">
        <Link to="/home" className="w-full">
          <button className="bg-green-400 p-2 text-white rounded-md w-full">
            Go to Home
          </button>
        </Link>
        <Link to="/about" className="w-full">
          <button className="bg-red-400 p-2 text-white rounded-md w-full">
            About Us
          </button>
        </Link>
        <Link to="/login" className="w-full">
          <button className="bg-amber-500 p-2 text-white rounded-md w-full">
            Log in
          </button>
        </Link>

        <Link to="/signup" className="w-full">
          <button className="bg-blue-400 p-2 text-white rounded-md w-full">
            Sing up
          </button>
        </Link>
        <Link to="/ai" className="w-full">
          <button className="bg-yellow-400 p-2 text-white rounded-md w-full">
            AI assistant
          </button>
        </Link>
        <Link to="/doctors" className="w-full">
          <button className="bg-pink-400 p-2 text-white rounded-md w-full">
            Doctors
          </button>
        </Link>
      </div>
      <h1 className="p-4 text-xl ">
        Ignore this part if not a Dev and click on buttons to redirect
      </h1>

      <UnderConstruction />
    </div>
  );
};

export default page;
