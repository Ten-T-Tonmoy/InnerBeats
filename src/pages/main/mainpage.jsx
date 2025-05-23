import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import UnderConstruction from "./UnderConstruction";
import Notfound from "./Notfound";

const page = () => {
  return (
    <div className="flex relative flex-col bg-primary justify-center items-center py-5">
      <div className="p-4  justify-start sm:text-center w-full ">
        Available Pages :{" "}
      </div>
      <div className="flex gap-2 mb-4 justify-center items-center">
        <Link to="/home">
          <button className="bg-green-400 p-2 text-white rounded-md">
            Go to Home
          </button>
        </Link>
        <Link to="/about">
          <button className="bg-red-400 p-2 text-white rounded-md">
            About Us
          </button>
        </Link>
        <Link to="/doctors">
          <button className="bg-pink-400 p-2 text-white rounded-md">
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
