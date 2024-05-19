import Navigation from "@/components/Navigation";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-full">
      <div className="h-full flex flex-col">
        <div className="flex flex-col gap-y-4 w-full h-full justify-center items-center">
          <h1 className="text-xl text-primary ">Logo</h1>
          <h1 className="text-2xl font-bold text-primary ">Company name</h1>
        </div>
        <Navigation nextLink="signup" />
      </div>
    </main>
  );
}
