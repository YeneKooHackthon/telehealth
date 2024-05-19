import React from "react";
import DoctorCard from "../../../components/DoctorCard";
import doc from "../../../assets/doc1.png";
import { IoIosArrowBack } from "react-icons/io";

const page = () => {
  return (
    <div className="flex flex-col gap-y-8">
      <div className="w-full flex justify-between">
        <IoIosArrowBack size={18} className="text-black cursor-pointer" />
        <h1 className=" text-primary text-sm ml-1 w-[90%] text-center">
          search doctor
        </h1>
      </div>

      <input
        type={"text"}
        autoFocus
        placeholder={"search doctor"}
        className="px-3 py-2 rounded-xl outline-none border-black/25 border-[1px]"
      />
      <DoctorCard
        img={doc}
        name={"Eyob naol"}
        exp={"4"}
        desc={"In publishing and graphic design, Lorem ipsum is a"}
        rate={"⭐⭐⭐⭐⭐"}
      />
      <DoctorCard
        img={doc}
        name={"Aman daniel"}
        exp={"5"}
        desc={"In publishing and graphic design, Lorem ipsum is a"}
        rate={"⭐⭐⭐"}
      />
      <DoctorCard
        img={doc}
        name={"Naol aman"}
        exp={"6"}
        desc={"In publishing and graphic design, Lorem ipsum is a"}
        rate={"⭐⭐⭐⭐⭐"}
      />
      <DoctorCard
        img={doc}
        name={"Daniel eyob"}
        exp={"3"}
        desc={"In publishing and graphic design, Lorem ipsum is a"}
        rate={"⭐⭐⭐"}
      />
    </div>
  );
};

export default page;
