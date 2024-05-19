import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";
import { FaMicrophone, FaVideo } from "react-icons/fa";

export default function page() {
  return (
    <div className="w-full">
      <div className="bg-primary relative w-full h-[68vh] rounded-2xl">
        <div className="absolute p-2 rounded-xl bg-blue-300 top-3 left-3">
          <IoIosArrowBack color="white" />
        </div>
        <div className="absolute bottom-3 right-3 w-[5em] h-[7em] rounded-xl bg-blue-300"></div>
      </div>
      <div className="bg-primary/20 flex justify-center items-center flex-col relative w-full mt-[1.5vh] h-[15vh] rounded-2xl">
        <h1>Dentist</h1>
        <h1>Dr. Lema Kebed</h1>
      </div>

      <div className="z-10 fixed bottom-2 flex justify-between items-center gap-4 w-[90%]">
        <div className="bg-blue-300 w-full h-[3.5em] rounded-2xl flex justify-center items-center">
          <FaVideo size="30px" color="black" />
        </div>
        <div className="bg-primary w-full h-[3.5em] rounded-2xl flex justify-center items-center">
          <IoCallSharp size="30px" color="white" />
        </div>
        <div className="bg-blue-300 w-full h-[3.5em] rounded-2xl flex justify-center items-center">
          <FaMicrophone size="30px" color="black" />
        </div>
      </div>
    </div>
  );
}
