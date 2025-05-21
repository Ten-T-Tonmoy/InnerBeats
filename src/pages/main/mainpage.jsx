import React from "react";
import { Routes, Route, Link } from "react-router-dom";

const page = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Skeleton Daisy+React Router</h1>

      <div className="flex gap-2 mb-4">
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
            Psychs
          </button>
        </Link>
        <button className="bg-blue-400 p-2 text-white rounded-md">
          Click Me
        </button>
      </div>
    </div>
  );
};

export default page;
