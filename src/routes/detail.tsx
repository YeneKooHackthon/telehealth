import React from "react";
import { useLocation } from "react-router-dom";

export default function Detail() {
  const { state } = useLocation();
  console.log(state);
  return (
    <div>
      <div className="bg-primary h-[15vh] w-full"></div>
    </div>
  );
}
