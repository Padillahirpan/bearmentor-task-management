import { GoalData } from "@/data/goals-data";
import { Button } from "../ui/button";
import { TaskList } from "./detail-goal-task";
import { ItemGoalContent } from "./item-goal";
import { SelectedStatus } from "./status-content";
import { calculateDate } from "@/cons/const";

export const DetailGoal = ({ goalData }: { goalData: GoalData }) => {
  let statusDesc;
  if (goalData.status === 0) {
    statusDesc = "Planned";
  } else if (goalData.status === 1) {
    statusDesc = "In progress";
  } else {
    statusDesc = "Done";
  }

  const startDate = calculateDate(goalData.createAt);
  const endDate = calculateDate(goalData.timelineDate);
  const timeline: string = `${startDate} -> ${endDate}`;

  return (
    <>
      <div className="">
        <div className="mt-10 mb-4 pb-4 flex justify-between items-center border-b">
          <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-left">
            🎯 {goalData.title}
          </h2>
          <div className="flex flex-wrap gap-2">
            <Button variant={"outline"}>Remove Goal</Button>
            <Button>Edit Goal</Button>
          </div>
        </div>

        <div className="bg-slate-100 dark:bg-slate-700 rounded-lg">
          <div className="flex flex-wrap gap-2 p-2 items-center">
            <h3 className="w-1/5 scroll-m-20 text-gray-400 text-lg font-semibold tracking-tight text-start">
              Status
            </h3>
            <SelectedStatus selectedItem={statusDesc} />
          </div>
          <div className="flex flex-wrap gap-2 p-2 items-center">
            <h3 className="w-1/5 scroll-m-20 text-gray-400 text-lg font-semibold tracking-tight text-start">
              % Complete
            </h3>
            <h2 className="w-1/5 scroll-m-20 text-lg font-semibold tracking-tight text-start">
              {goalData.statusComplete}
            </h2>
          </div>
          <div className="flex flex-wrap gap-2 p-2 items-center">
            <h3 className="w-1/5 scroll-m-20 text-gray-400 text-lg font-semibold tracking-tight text-start">
              Timeline
            </h3>
            <h2 className="scroll-m-20 text-lg font-semibold tracking-tight text-start">
              {timeline}
            </h2>
          </div>
        </div>

        <ItemGoalContent title="Context" desc={goalData.context} />
        <ItemGoalContent title="Target" desc={goalData.target} />

        <div className="p-4 items-start">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-start">
            Task List
          </h3>
          <div className="pt-4">
            <TaskList taskList={goalData.task} />
          </div>
        </div>
      </div>
    </>
  );
};
