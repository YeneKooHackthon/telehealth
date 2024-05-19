import React from "react";

const InputField = ({ title, typ }) => {
  return (
    <div className="flex flex-col gap-y-2">
      <h1 className=" text-primary text-sm ml-1">{title}</h1>
      <input
        type={typ}
        placeholder={title}
        className="px-3 py-2 rounded-xl outline-none border-black/25 border-[1px]"
      />
    </div>
  );
};

export default InputField;
