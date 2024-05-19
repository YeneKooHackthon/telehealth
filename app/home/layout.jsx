import { RiRobot2Line } from "react-icons/ri";

export default function RootLayout({ children }) {
  return (
    <div>
      <div className="pb-[3.3em]">{children}</div>
      <RiRobot2Line
        className="h-10 w-10 rounded-xl p-2 bg-primary fixed right-3 bottom-[3.3em]"
        color="white"
      />
      <div className="flex justify-between items-center gap-2 fixed bottom-0 left-0 w-full h-[3em] bg-red-300"></div>
    </div>
  );
}
