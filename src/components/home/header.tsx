import { Link } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";
import { HOME_PAGE } from "@/data/goals-management";

export const NavBar = () => {
  return (
    <>
      <div className="flex items-center justify-between my-4">
        <Link
          to={HOME_PAGE}
          className="text-2xl font-bold hover:bg-slate-100 p-2 rounded-xl dark:hover:bg-slate-900"
        >
          Goals Tracker Management 🚀
        </Link>
        <div>
          <ModeToggle />
        </div>
      </div>
    </>
  );
};
