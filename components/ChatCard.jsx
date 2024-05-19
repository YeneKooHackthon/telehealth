import React from "react";

const ChatCard = ({ name, message, justify }) => {
  return (
    <div className={`flex gap-x-2 ${justify}`}>
      <p className="min-w-7 min-h-7 bg-primary rounded-full self-start"></p>
      <div className="flex flex-col max-w-[60%]">
        <h2 className="text-black font-bold text-xs">{name}</h2>
        <p className="text-xs text-black">{message}</p>
      </div>
    </div>
  );
};

export default ChatCard;
