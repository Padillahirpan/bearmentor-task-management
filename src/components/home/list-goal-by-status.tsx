import { getGoalsData, statusGoals } from "@/cons/dummydata";
import { ListGoal } from "./list-goal";
import { Button } from "../ui/button";

export const ListGoalByStatus = () => {
  const listGoal = getGoalsData();
  const statusTask = statusGoals;

  return (
    <>
      <div className="">
        <div className="mt-10 mb-2 flex justify-between items-center">
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white text-left">
            Your Goals 🎯
          </h5>
          <Button>Create Goal</Button>
        </div>

        <div className="grid grid-cols-3 gap-4 border rounded-lg">
          {statusTask.map((item, index) => {
            const goals = listGoal.filter((goal) => goal.status === item.id);
            console.log("this is item : " + item.id);
            return <ListGoal key={item.id} status={item} listGoal={goals} />;
          })}
        </div>
      </div>
    </>
  );
};
