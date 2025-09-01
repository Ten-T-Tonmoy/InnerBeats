import React from "react";

import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";

const creators = [
  {
    name: "Seyam",
    fullName: "Abdullah Al Seyam ",
    session: "(ICE 2021-22)",
    phone: "01704425676",
    facebookUrl: "https://www.facebook.com/abdullah.al.seyam.73066",
  },
  {
    name: "Arnob",
    fullName: "Fidel Arnob",
    session: "(ICE 2021-22)",
    phone: "01326116245",
    facebookUrl: "https://www.facebook.com/arnob.521793",
  },
  {
    name: "Sujon",
    fullName: "Sujon Ahmed",
    session: "(ICE 2021-22)",
    phone: "01879495373",
    facebookUrl: "https://www.facebook.com/sujon.ahmed.217296",
  },
  {
    name: "Emon",
    fullName: "Md Yeasin Khandaker Emon",
    session: "(ICE 2021-22)",
    phone: "01518965418",
    facebookUrl: "https://www.facebook.com/mdyeasin.khandakar.3",
  },
];

const AboutUs = () => {
  return (
    <div
      className="min-h-screen flex flex-col 
     justify-center bg-primary p-6 space-y-10"
    >
      <h1
        className="text-4xl font-extrabold text-transparent bg-clip-text  md:text-center
                bg-gradient-to-r from-blue-400 via-secondary to-blue-700 bg-200 "
      >
        About Us - Your Friendly Listeners!
      </h1>
      <div className="items-center flex flex-col w-full">
        <p className="text-justify text-lg text-gray-700 max-w-xl">
          Need someone to talk to? You’re not alone.
          <br />
          <br />
          We - <strong> Seyam, Arnob, Sujon, and Emon </strong>- are here to
          offer free emotional support and friendly companionship,{" "}
          <strong> both online and on campus!</strong>
          <br />
          <br />
          Many students feel alone — we are here to make sure you don’t.
        </p>

        <h1
          className="
      text-3xl  font-black mt-8 mb-4
      "
        >
          Contact us directly:
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {creators.map((el, index) => (
            <div
              key={index}
              className="bg-indigo-200 hover:text-secondary rounded-2xl shadow-lg p-6 w-[87vw] sm:w-full
               flex flex-col items-center space-y-3 hover:scale-105 transition transform duration-300"
            >
              <h2 className="text-2xl font-semibold ">{el.name}</h2>
              <p className="text-gray-600">
                {el.fullName} {el.session}
              </p>
              <p className="text-gray-700 font-medium  gap-3 flex justify-start w-full items-center">
                <FaPhoneAlt className="text-[1.1rem] mt-1" />
                {el.phone}
              </p>
              <p className="text-gray-700 font-medium  gap-3 flex justify-start w-full items-centers">
                <IoLogoWhatsapp className="text-[1.4rem] text-green-500 " />
                {el.phone}
              </p>
              <p className="text-gray-700 font-medium  gap-3 flex justify-start w-full items-centers">
                <FaFacebook className="text-[1.4rem] text-blue-500 " />
                <a href={el.facebookUrl} className="hover:text-secondary">
                  {el.fullName}
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
