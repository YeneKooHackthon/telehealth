"use client";

import React from "react";
import { useRouter } from "next/router";

export default function Fakesearchbar() {
  const route = useRouter();
  return (
    <input
      type={"text"}
      placeholder={"search"}
      onClick={() => route.push("home/doctorlist")}
      className="px-3 py-2 rounded-xl outline-none border-black/25 border-[1px] w-full"
    />
  );
}
