import React from "react";
import Navigation from "@/components/Navigation";

import { IoIosArrowBack } from "react-icons/io";
import DoctorCard from "@/components/DoctorCard";

import doc from "../../assets/doc1.png";

const page = () => {
  return (
    <main className="h-full">
      <div className="h-full flex flex-col gap-y-8">
        <div className="flex w-full items-center justify-between">
          <IoIosArrowBack size={18} className="text-black cursor-pointer" />
          <h2 className="text-xl text-primary min-w-[90%] text-center ">
            Booking
          </h2>
        </div>
        <DoctorCard
          img={doc}
          name={"Daniel aman"}
          exp={"3"}
          desc={
            "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying"
          }
          rate={"⭐⭐⭐⭐⭐"}
        />
        <div className="flex flex-col gap-y-3 w-full">
          <h2 className="text-black/55 font-medium text-sm">
            Appointment type
          </h2>
          <div className="w-full flex gap-x-2 bg-primary/25 rounded-xl p-2">
            <div className="flex justify-center items-center cursor-pointer  rounded-xl text-sm bg-primary w-[50%] py-2 px-4">
              <p className="text-white"> Online</p>
            </div>
            <div className="flex justify-center items-center cursor-pointer rounded-xl text-sm  w-[50%] py-2 px-4">
              <p className="text-black">In person</p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-between gap-x-2 bg-black/15 rounded-xl p-3">
          <p className="text-xs">Mon</p>
          <p className="text-xs">Tue</p>
          <p className="text-xs">Wed</p>
          <p className="text-xs">Thu</p>
          <p className="text-xs">Fri</p>
          <p className="text-xs">Sat</p>
          <p className="text-xs">Sun</p>
        </div>
        <div className="flex flex-col gap-y-3 w-full">
          <h2 className="text-black/55 font-medium text-sm">Book</h2>
          <div className="w-full flex gap-x-2 bg-primary/25 rounded-xl p-2">
            <div className="flex justify-center items-center cursor-pointer  rounded-xl text-sm bg-primary w-[50%] py-2 px-4">
              <p className="text-white text-center">With others(group)</p>
            </div>
            <div className="flex justify-center items-center cursor-pointer rounded-xl text-sm  w-[50%] py-2 px-4">
              <p className="text-black text-center">Individual</p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-between gap-x-4 bg-black/15 rounded-xl p-3">
          <div className="flex flex-col justify-around items-center gap-y-4">
            <p className="text-xs">Mon</p>
            <div className="flex flex-col  items-center gap-y-2">
              <p className="text-xs">af</p>
              <p className="text-xs">6:00 - 8:00</p>
            </div>
          </div>
          <div className="flex flex-col  justify-around items-center gap-y-4">
            <p className="text-xs">Tue</p>
            <div className="flex flex-col  gap-y-2 items-center">
              <p className="text-xs">af</p>
              <p className="text-xs">6:00 - 8:00</p>
            </div>
          </div>

          <div className="flex flex-col  justify-around items-center gap-y-4">
            <p className="text-xs">Fri</p>
            <div className="flex flex-col  gap-y-2 items-center">
              <p className="text-xs">af</p>
              <p className="text-xs">6:00 - 8:00</p>
            </div>
          </div>
          <div className="flex flex-col  justify-around items-center gap-y-4">
            <p className="text-xs">Sat</p>
            <div className="flex flex-col  gap-y-2 items-center">
              <p className="text-xs">af</p>
              <p className="text-xs">6:00 - 8:00</p>
            </div>
          </div>
        </div>
        <button className="text-white bg-primary text-center p-3 rounded-xl">
          Next
        </button>
        <Navigation nextLink="booking" />
      </div>
    </main>
  );
};

export default page;
