import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import GroupCard from "@/components/GroupCard";

import { IoMdSend } from "react-icons/io";
import ChatCard from "@/components/ChatCard";

const page = () => {
  return (
    <div className="h-full flex flex-col gap-y-8">
      <div className="w-full flex justify-between">
        <IoIosArrowBack size={18} className="text-black cursor-pointer" />
        <h1 className=" text-primary text-sm ml-1 w-[90%] text-center">
          Community Chat
        </h1>
      </div>
      <div className="no-scrollbar flex w-full gap-x-4 overflow-x-scroll">
        <GroupCard docnum={25} title={"Cancer "} />
        <GroupCard docnum={41} title={"HIV "} />
        <GroupCard docnum={17} title={"Diabest"} />
        <GroupCard docnum={75} title={"Hyper tension"} />
        <GroupCard docnum={37} title={"Mental health"} />
      </div>
      <div className="h-[55vh] border border-black/35 rounded-xl flex flex-col gap-y-2 justify-between px-4 relative overflow-y-scroll no-scrollbar">
        <h2 className="py-2 text-xs text-center sticky top-0 bg-white flex-1">
          Cancer chat room
        </h2>
        <div className="flex flex-col w-full gap-y-4">
          <ChatCard
            name={"Anonums"}
            message={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus nulla totam veritatis aliquid officia nesciunt, ipsaiure."
            }
            justify={""}
          />
          <ChatCard
            name={"Anonums"}
            message={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus nulla totam veritatis aliquid officia nesciunt, ipsaiure."
            }
            justify={""}
          />
          <ChatCard
            name={"abebe"}
            message={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus nulla totam veritatis aliquid officia nesciunt, ipsaiure."
            }
            justify={"justify-end"}
          />
          <ChatCard
            name={"chala"}
            message={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus nulla totam veritatis aliquid officia nesciunt, ipsaiure."
            }
            justify={""}
          />
        </div>
        <div className="w-full sticky bottom-0">
          <input
            type={"text"}
            placeholder={"write something"}
            className="w-full px-3 py-2 rounded-xl outline-none border-black/25 border-[1px]"
          />
          <IoMdSend
            size={24}
            className="text-primary  absolute right-2 top-1/2 -translate-y-1/2"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
