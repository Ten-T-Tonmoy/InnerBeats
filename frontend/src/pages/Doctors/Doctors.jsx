import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaUserDoctor } from "react-icons/fa6";
import { MdOutlineAccessTime } from "react-icons/md";
import { PiHospital } from "react-icons/pi";
import { IoCallOutline } from "react-icons/io5";

const TextAnimation = () => {
  return (
    <Typewriter
      className="transition-all duration-200 ease-in-out"
      words={["Trusted Psychiatric Help ....."]}
      loop={0}
      cursor
      cursorStyle="|"
      typeSpeed={70}
      deleteSpeed={40}
      delaySpeed={1500}
    />
  );
};

const Doctors = () => {
  return (
    <div className="bg-primary">
      <div className="p-3 ">
        <p className="text-[1.4rem] flex  my-4 md:justify-center  font-[1000] ">
          <TextAnimation />
        </p>
        <p className="my-4 md:px-[7vw]">
          For those who need professional mental care, here are some verified
          Psychiatric chambers:
        </p>
        <p className="md:px-[7vw] md:mb-4">
          ( <i> Information may vary, please call before visiting </i>)
        </p>
      </div>

      <div
        className="grid text-[.9rem] grid-cols-1 
 md:grid-cols-2 mb-4 gap-4 w-full   justify-items-center "
      >
        <div
          className="h-full p-3 w-[90vw] md:w-[40vw]  bg-gradient-to-r from-primary via-secondary/10
           to-secondary/20 text-black rounded-md   justify-self-center"
        >
          <div className="flex justify-center">
            <FaUserDoctor className="text-[1.5rem] relative top-2 mx-1 lg:mx-4" />
            <h2 className="text-[1.6rem] font-black mb-2">
              Dr. Md. Shohedul Alam
            </h2>
          </div>
          <p>
            <PiHospital className="inline mx-1" />
            <strong>Chamber:</strong> Islami Bank Hospital, Rajshahi
          </p>
          <p>
            <FaMapLocationDot className="inline mx-1 " />
            <strong>Address:</strong> Medical Mor, Laxmipur, Rajshahi – 6000
          </p>
          <p>
            <MdOutlineAccessTime className="inline mx-1" />
            <strong>Visiting Time:</strong> 2 pm to 5.30 pm (Closed: Thu &
            Friday)
          </p>
          <p>
            <IoCallOutline className="inline mx-1" />
            <strong>Appointment:</strong> +8801711340582
          </p>
          <div className="mt-2 relative lg:top-4">
            <iframe
              src={
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1145.5858275089574!2d88.58215490866054!3d24.371874411004256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbef1d895bd4d5%3A0x4eb18177fbc1e8e2!2sIslami%20Bank%20Medical%20College%20Hospital%2C%20Rajshahi!5e0!3m2!1sen!2sbd!4v1747845473511!5m2!1sen!2sbd"
              }
              title="Google Map"
              allowFullScreen=""
              loading="lazy"
              className="rounded-md"
              width="100%"
              height="300"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/**Gradients need to be excluded  */}
        <div
          className="h-full p-3 w-[90vw] md:w-[40vw] bg-gradient-to-l justify-self-center
         from-primary via-secondary/10 to-secondary/20 text-black rounded-md "
        >
          <div className="flex justify-center">
            <FaUserDoctor className="text-[1.5rem] relative top-2 mx-1 lg:mx-4" />
            <h2 className="text-[1.6rem] font-black mb-2">
              Dr. Abdullah Al Mamun
            </h2>
          </div>
          <p>
            <PiHospital className="inline mx-1" />
            <strong>Chamber:</strong> Medipath Diagnostic Complex, Rajshahi
          </p>
          <p>
            <FaMapLocationDot className="inline mx-1 " />
            <strong>Address:</strong> Shuvecca View, Greater Road, Laxmipur,
            Kajihata, Rajshahi
          </p>
          <p>
            <MdOutlineAccessTime className="inline mx-1" />
            <strong>Visiting Time:</strong> 2 pm to 5.30 pm (Closed: Thu &
            Friday)
          </p>
          <p>
            <IoCallOutline className="inline mx-1" />
            <strong>Appointment:</strong> +8801712685297
          </p>
          <div className="mt-2">
            <iframe
              src={
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1045.0449084097456!2d88.58117804307487!3d24.37013377740325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbef8f6668d0fd%3A0xd779ef94ca41c796!2sMedipath%20Diagnostic%20Complex!5e0!3m2!1sen!2sbd!4v1747845381371!5m2!1sen!2sbd"
              }
              title="Google Map"
              allowFullScreen=""
              loading="lazy"
              className="rounded-md"
              width="100%"
              height="300"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
