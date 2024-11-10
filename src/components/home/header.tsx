import { ModeToggle } from "./mode-toggle";

export const NavBar = () => {
  return (
    <>
      <div className="flex items-center justify-between my-4">
        <div className="text-2xl font-bold">Goals Tracker Management 🚀</div>
        <div>
          <ModeToggle />
        </div>
      </div>
    </>
  );
};
