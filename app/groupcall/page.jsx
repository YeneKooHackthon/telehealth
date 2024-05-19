import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";
import { FaMicrophone, FaVideo } from "react-icons/fa";

export default function page() {
  return (
    <div>
      <div className="bg-primary relative w-full h-[55vh] rounded-2xl">
        <div className="absolute p-2 rounded-xl bg-blue-300 top-3 left-3">
          <IoIosArrowBack color="white" />
        </div>
      </div>
      <div className="bg-primary/20 flex justify-center items-center flex-col relative w-full h-[15vh] mt-4 rounded-2xl">
        <h1>Dentist</h1>
        <h1>Dr. Lema Kebed</h1>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="bg-primary/20 w-full h-[6em] p-4 rounded-2xl"></div>
        <div className="bg-primary/20 w-full h-[6em] p-4 rounded-2xl"></div>
        <div className="bg-primary/20 w-full h-[6em] p-4 rounded-2xl"></div>
        <div className="bg-primary/20 w-full h-[6em] p-4 rounded-2xl"></div>
        <div className="bg-primary/20 w-full h-[6em] p-4 rounded-2xl"></div>
        <div className="bg-primary/20 w-full h-[6em] p-4 rounded-2xl"></div>
      </div>
      <div className="mb-[4.5em]"></div>
      <div className="z-10 flex justify-between items-center fixed bottom-2 gap-4 w-full">
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
    </div>
  );
}
