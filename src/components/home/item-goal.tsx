import { calculateDate } from "@/cons/const";
import { GoalData } from "@/data/goals-data";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

export const ItemGoal = ({
  goalData,
  statusId,
}: {
  goalData: GoalData;
  statusId: number;
}) => {
  const createdAt = calculateDate(goalData.createdAt ? goalData.createdAt : 0);
  const timelineDate = calculateDate(
    goalData.timelineDate ? goalData.timelineDate : 0
  );
  return (
    <>
      <Link to={`/detail-goal/${goalData.id}`}>
        <div
          className={cn(
            "p-6 items-start w-full rounded-lg shadow border border-gray-200 dark:border-gray-700",
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
          <div className="font-normal text-left text-gray-700 dark:text-gray-200">
            {createdAt} {"->"} {timelineDate}
          </div>
        </div>
      </Link>
    </>
  );
};
