import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import { ImFilesEmpty } from "react-icons/im";
import { useNavigate } from "react-router-dom";

const UserHistory = () => {
  const [loading, setLoading] = useState(true);
  const [userHistory, setUserHistory] = useState([]);
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const getHistory = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/gethistory", {
          credentials: "include",
        });
        if (!res.ok) {
          setIsLogged(false);
          return;
        }
        setIsLogged(true);
        const UserHistory = await res.json();
        /**
     *  emotion      String
        ChosenReason String
        isHelpful    Boolean
     */
        setUserHistory(UserHistory || []);
      } catch (e) {
        setIsLogged(false);
        console.log("unauthorized !");
      } finally {
        setLoading(false);
      }
    };
    getHistory();
  }, []);

  if (isLogged) {
    return (
      <div className="flex-1 flex py-32 items-center justify-center bg-primary min-h-[60vh]">
        <div className="bg-white rounded-md shadow-xl p-8 max-w-md text-center">
          <h2 className="text-2xl font-bold mb-4 text-footer">
            You are not logged in
          </h2>
          <p className="text-footer mb-6">
            Sign up or log in to keep track of your history and access all your
            past choices.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => navigate("/login")}
              className="bg-secondary hover:bg-secondary/90 text-white font-semibold 
              px-6 py-2 rounded-md shadow-md transition"
            >
              Log In
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="bg-footer hover:bg-footer/90 text-white
               font-semibold px-6 py-2 rounded-md shadow-md transition"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full mx-auto flex flex-col items-center justify-center py-20 flex-1 bg-primary">
      <div className=" items-center justify-center flex flex-col">
        <h2 className="text-2xl font-bold mb-8 text-footer text-center">
          Your History
        </h2>
        {!userHistory ||
          (userHistory.length === 0 && (
            <div
              className="flex flex-col gap-4 justify-center
            p-20 md:p-32 bg-white rounded-xl  items-center"
            >
              <ImFilesEmpty className="text-[4rem]" />
              <p className="text-center">
                Your history seems Empty <br /> Try Browsing more
              </p>
            </div>
          ))}
        <ul className="space-y-4">
          {userHistory.map((choice) => (
            <li
              key={choice.id}
              className="p-4 rounded-lg shadow flex flex-col md:flex-row justify-between items-start md:items-center bg-primary hover:shadow-lg transition-shadow"
            >
              <div>
                <p className="font-semibold text-secondary">
                  Emotion: {choice.emotion}
                </p>
                <p className="text-footer">Reason: {choice.ChosenReason}</p>
              </div>

              <div className="mt-2 md:mt-0 flex items-center gap-3">
                <span
                  className={`px-3 py-1 rounded-full text-white font-medium ${
                    choice.isHelpful ? "bg-green-500" : "bg-red-500"
                  }`}
                >
                  {choice.isHelpful ? "Helpful" : "Not Helpful"}
                </span>
                <span className="text-footer text-sm">
                  {new Date(choice.createdAt).toLocaleDateString()}{" "}
                  {new Date(choice.createdAt).toLocaleTimeString()}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserHistory;
