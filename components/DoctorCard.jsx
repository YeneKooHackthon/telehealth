import React from "react";
import { CiHeart } from "react-icons/ci";
import Image from "next/image";

const DoctorCard = ({ showbook = true, img, name, desc, exp, rate }) => {
  return (
    <div className="w-[100%] flex items-center flex-col gap-4 p-3 bg-primary/25 rounded-xl">
      <div className="flex justify-between items-center">
        <div className="w-[40%] h-full flex justify-end items-end">
          <Image src={img} alt="doctor" className="rounded-md" />
        </div>
        <div className="w-[60%] flex flex-col gap-y-3">
          <div className="flex justify-between items-center">
            <h2 className="text-black/90 text-sm font-bold">Dr. {name}</h2>
            <CiHeart
              size={18}
              className="cursor-pointer text-primary font-bold"
            />
          </div>
          <p className="text-black/80 text-xs font-bold">
            Years of experince {exp}
          </p>
          <p className="text-black/80 text-xs font-bold">{rate}</p>
          <p className="text-black/80 text-xs">{desc}</p>
        </div>
      </div>

      <div className="flex flex-row justify-between gap-4 items-center w-full">
        <p
          className={` ${
            !showbook ? " bg-primary/60 " : "text-white bg-primary "
          } w-full text-xs px-4 py-4 rounded-xl text-center self-start cursor-pointer`}
        >
          {showbook ? "Book" : "Cancle"}
        </p>
        <p
          className={`text-black ${
            showbook ? " bg-primary/60 " : "text-white bg-primary "
          } w-full text-xs px-4 py-4 rounded-xl text-center self-start cursor-pointer`}
        >
          {showbook ? "Profile" : "Reschedule"}
        </p>
      </div>
    </div>
  );
};

export default DoctorCard;
