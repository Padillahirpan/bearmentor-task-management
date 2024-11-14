import { GoalData } from "@/data/goals-data";
import { cn } from "@/lib/utils";

export const ItemGoal = ({
  goalData,
  statusId,
}: {
  goalData: GoalData;
  statusId: number;
}) => {
  return (
    <>
      <a href="#">
        <div
          className={cn(
            "p-6 items-start max-w-sm rounded-lg shadow border border-gray-200 dark:border-gray-700",
            statusId === 1 && "bg-neutral-200 dark:bg-neutral-700 ",
            statusId === 2 && "bg-blue-200 dark:bg-blue-700",
            statusId === 3 && "bg-emerald-200 dark:bg-emerald-700"
          )}
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-left">
            {goalData.title}
          </h5>

          <p className="mb-3 font-normal text-left text-gray-700 dark:text-gray-200">
            {goalData.context}
          </p>
        </div>
      </a>
    </>
  );
};
