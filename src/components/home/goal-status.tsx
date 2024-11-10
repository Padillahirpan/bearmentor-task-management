import { GoalStatusData } from "@/data/goals-data";

export const GoalStatus = ({ status }: { status: GoalStatusData }) => {
  let bgColor;
  let dotColor;

  if (status.id == 1) {
    bgColor =
      "flex w-fit py-1 px-3 items-center border-0 rounded-full bg-neutral-200 dark:bg-neutral-400";
    dotColor = "w-4 h-4 rounded-full mr-2 bg-neutral-400 dark:bg-neutral-600";
  } else if (status.id == 2) {
    bgColor =
      "flex w-fit py-1 px-3 items-center border-0 rounded-full bg-blue-200 dark:bg-blue-400";
    dotColor = "w-4 h-4 rounded-full mr-2 bg-blue-400 dark:bg-blue-600";
  } else if (status.id == 3) {
    bgColor =
      "flex w-fit py-1 px-3 items-center border-0 rounded-full bg-emerald-200 dark:bg-emerald-400";
    dotColor = "w-4 h-4 rounded-full mr-2 bg-emerald-400 dark:bg-emerald-600";
  } else {
    bgColor =
      "flex w-fit py-1 px-3 items-center border-0 rounded-full bg-neutral-200 dark:bg-neutral-400";
    dotColor = "w-4 h-4 rounded-full mr-2 bg-neutral-400 dark:bg-neutral-600";
  }

  return (
    <>
      <div className={bgColor}>
        <div className={dotColor}></div>
        <p className="text-start text-black dark:text-white">{status.name}</p>
      </div>
    </>
  );
};
