import React from "react";
import Select from "react-select";
import InputField from "./InputField";
import DropDown from "./DropDown";

const Form = () => {
  const options = [
    { value: "Diabets", label: "Diabets" },
    { value: "Hiv", label: "Hiv" },
    { value: "Cancer", label: "Cancer" },
    { value: "Hiper tension", label: "Hiper tension" },
    { value: "Mental health", label: "Mental health" },
  ];
  return (
    <form className="flex flex-col gap-y-8">
      <div className="flex flex-col gap-y-2">
        <h1 className="text-primary text-xl font-bold text-center ">
          Create account
        </h1>
      </div>
      <InputField title={"Full Name"} typ={"text"} />
      <InputField title={"Age"} typ={"text"} />
      <InputField title={"Gender"} typ={"text"} />
      <div className="flex flex-col gap-y-2">
        <h1 className="text-primary text-sm ml-1">History</h1>
        <DropDown options={options} />
      </div>
      <InputField title={"Password"} typ={"text"} />
      <button className="text-primary px-3 py-2 rounded-xl outline-none border-black/25 border-[1px] self-center">
        Sumbit
      </button>
    </form>
  );
};

export default Form;
