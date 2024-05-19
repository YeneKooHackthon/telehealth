import React from "react";
import Navigation from "@/components/Navigation";
import Form from "@/components/Form";

const page = () => {
  return (
    <main className="h-full">
      <div className="h-full flex flex-col">
        <div className="flex flex-col gap-y-4 w-full h-full my-2">
          <Form />
        </div>
        <Navigation nextLink="home" />
      </div>
    </main>
  );
};

export default page;
