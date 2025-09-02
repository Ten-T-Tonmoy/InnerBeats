import React, { useEffect, useState } from "react";

import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { MdVolunteerActivism } from "react-icons/md";

const AdditionalHelp = () => {
  const [volunteers, setVolunteers] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/user/allusers");
        const data = await res.json();
        setVolunteers(data);
      } catch (err) {
        console.error("Error fetching users:", err);
      }
    };
    fetchUsers();
  }, [volunteers]);
  // <div
  //   className=" flex flex-col w-full
  //  justify-center bg-primary  space-y-10"
  // >
  //   <h1
  //     className="text-center
  //   text-xl text-transparent bg-clip-text  md:text-center
  //             bg-gradient-to-r from-blue-400 via-secondary to-blue-700  font-black my-8
  //   "
  //   >
  //     More volunteers if you need assistance :
  //   </h1>
  //   </div>
  return (
    <>
      {volunteers?.map((el, index) => (
        <div
          key={index}
          className="bg-gray-300 hover:text-secondary rounded-2xl shadow-lg p-6 w-[87vw] sm:w-full
                   flex flex-col items-center space-y-3 hover:scale-105 transition transform duration-300"
        >
          <h2 className="text-2xl font-semibold ">{el.name}</h2>
          <p className="text-gray-600">{el.email}</p>
          <p className="text-gray-700 font-medium  gap-3 flex justify-start w-full items-center">
            <FaPhoneAlt className="text-[1.1rem] mt-1" />
            {el.whatsapp}
          </p>
          <p className="text-gray-700 font-medium  gap-3 flex justify-start w-full items-centers">
            <IoLogoWhatsapp className="text-[1.4rem] text-green-500 " />
            {el.whatsapp}
          </p>
          <p className="text-gray-700 font-medium  gap-3 flex justify-start w-full items-centers">
            <FaFacebook className="text-[1.4rem] text-blue-500 " />
            <a href={el.facebookUrl} className="hover:text-secondary">
              {el.facebook}
            </a>
          </p>
          <p className="text-gray-700 font-medium  gap-3 flex justify-start w-full items-centers">
            <MdVolunteerActivism className="text-[1.4rem] text-blue-500 " />
            <p className="hover:text-secondary">Volunteer</p>
          </p>
        </div>
      ))}
    </>
  );
};

export default AdditionalHelp;
