import { GoalData } from "@/data/goals-data";

export const ItemGoal = ({
  goalData,
  statusId,
}: {
  goalData: GoalData;
  statusId: number;
}) => {
  let bgColor;
  if (statusId == 1) {
    bgColor =
      "p-6 items-start max-w-sm bg-neutral-200 border border-gray-200 rounded-lg shadow dark:bg-neutral-700 dark:border-gray-700";
  } else if (statusId == 2) {
    bgColor =
      "p-6 items-start max-w-sm bg-blue-200 border border-gray-200 rounded-lg shadow dark:bg-blue-700 dark:border-gray-700";
  } else if (statusId == 3) {
    bgColor =
      "p-6 items-start max-w-sm bg-emerald-200 border border-gray-200 rounded-lg shadow dark:bg-emerald-700 dark:border-gray-700";
  } else {
    bgColor =
      "p-6 items-start max-w-sm bg-neutral-200 border border-gray-200 rounded-lg shadow dark:bg-neutral-700 dark:border-gray-700";
  }

  return (
    <>
      <a href="#">
        <div className={bgColor}>
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
