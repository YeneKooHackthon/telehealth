import GroupCard from "@/components/GroupCard";
import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";

import doc from "../../assets/doc1.png";
import DoctorCard from "@/components/DoctorCard";
import Link from "next/link";
// import Fakesearchbar from "@/components/fakesearchbar";

const page = () => {
  return (
    <main className="h-full">
      <div className="h-full flex flex-col">
        <div className="flex flex-col gap-y-8 w-full h-full justify-center items-center">
          <div className="w-full flex justify-between items-center">
            <div className="flex gap-x-3 cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-primary"></div>
              <div className="flex flex-col justify-center">
                <h2 className="text-sm font-bolds">Daniel aman</h2>
                <h2 className="text-xs text-black/65">📍Addis ababa, jemo</h2>
              </div>
            </div>
            <div>
              <IoMdNotificationsOutline size={24} className="cursor-pointer" />
            </div>
          </div>

          <Link href="home/doctorlist">
            <input
              type={"text"}
              placeholder={"search"}
              className="px-3 py-2 rounded-xl outline-none border-black/25 border-[1px] w-full"
            />
          </Link>

          <div className="p-6 w-full bg-primary rounded-xl flex flex-col gap-y-4">
            <h2 className="text-white font-medium text-base">
              Near Medical Centers
            </h2>
            <p className="text-white/90 text-xs">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying
            </p>
          </div>
          <div className="flex flex-col gap-y-3 w-full">
            <h2 className="text-black/55 font-medium text-sm">
              Community Groups
            </h2>
            <div className="no-scrollbar flex w-full gap-x-4 overflow-x-scroll">
              <GroupCard docnum={25} title={"Cancer "} />
              <GroupCard docnum={41} title={"HIV "} />
              <GroupCard docnum={17} title={"Diabest"} />
              <GroupCard docnum={75} title={"Hyper tension"} />
              <GroupCard docnum={37} title={"Mental health"} />
            </div>
          </div>

          <div className="flex flex-col gap-y-3 w-full">
            <h2 className="text-black/55 font-medium text-sm">
              Medical doctors
            </h2>
            <div className="no-scrollbar flex w-full gap-x-4 overflow-x-scroll">
              <div className="min-w-[70%]">
                <DoctorCard
                  img={doc}
                  name={"Eyob naol"}
                  exp={"6"}
                  desc={"In publishing and graphic design, Lorem ipsum is a"}
                  rate={"⭐⭐⭐⭐⭐"}
                />
              </div>
              <div className="min-w-[70%]">
                <DoctorCard
                  img={doc}
                  name={"Daniel aman"}
                  exp={"3"}
                  desc={"In publishing and graphic design, Lorem ipsum is a"}
                  rate={"⭐⭐⭐"}
                />
              </div>
            </div>
          </div>
        </div>
        {/* <Navigation nextLink="booking" /> */}
      </div>
    </main>
  );
};

export default page;
