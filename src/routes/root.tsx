import { Outlet, NavLink } from "react-router-dom";
import { Calendar, Home, Bot, User, Pill } from "lucide-react";

export default function Root() {
  const cls =
    "flex items-center gap-3 my-2 rounded-lg px-8 py-3 text-muted-foreground transition-all hover:text-primary";
  const activecls =
    "flex items-center gap-3 my-2 rounded-lg px-8 py-3 transition-all bg-primary text-muted hover:text-muted";

  const navLinks = [
    // bg-muted text-primary
    {
      text: "home",
      icon: <Home className="h-5 w-5" />,
      className: cls,
      to: "/home",
    },
    {
      text: "schedule",
      icon: <Calendar className="h-5 w-5" />,
      className: cls,
      to: "/schedule",
    },
    {
      text: "store",
      icon: <Pill className="h-5 w-5" />,
      className: cls,
      to: "/store",
    },
    {
      text: "account",
      icon: <User className="h-5 w-5" />,
      className: cls,
      to: "/account",
    },
  ];

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="flex flex-col">
        <main className="z-0 pb-[5em] flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <Outlet />
        </main>
        <footer className="w-full fixed ">
          <nav className="flex h-[3.5em] bg-white border-t-2 border-secondary fixed bottom-0 px-2 w-full justify-around items-center capitalize gap-2 text-lg font-medium">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                className={({ isActive }) =>
                  isActive ? activecls : link.className
                }
                to={link.to}
              >
                {link.icon}
              </NavLink>
            ))}
          </nav>

          <NavLink
            className={
              " fixed bg-primary rounded-full bottom-[4.5em] h-[3em] w-[3em] flex justify-center items-center right-[.5em]"
            }
            to={"/chat"}
          >
            <Bot className="h-5 w-5 text-white" />
          </NavLink>
        </footer>
      </div>
    </div>
  );
}
