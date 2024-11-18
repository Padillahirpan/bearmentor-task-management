import { statusGoals } from "@/cons/dummydata";
import { ListGoal } from "./list-goal";
import { Button } from "../ui/button";
import { GoalData } from "@/data/goals-data";
import { Link } from "react-router-dom";
import { ADD_GOAL_PAGE } from "@/data/goals-management";

export const ListGoalByStatus = ({ listGoal }: { listGoal: GoalData[] }) => {
  const statusTask = statusGoals;

  return (
    <>
      <div className="w-full">
        <div className="mt-10 mb-2 flex justify-between items-center">
          <h3 className="scroll-m-20 pb-2 text-2xl font-semibold tracking-tight first:mt-0 text-left">
            Your Goals 🎯
          </h3>
          <Link to={ADD_GOAL_PAGE}>
            <Button>Create Goal</Button>
          </Link>
        </div>

        <div className="">
          {statusTask.map((item) => {
            const goals = listGoal.filter((goal) => goal.status === item.id);

            return <ListGoal key={item.id} status={item} listGoal={goals} />;
          })}
        </div>
      </div>
    </>
  );
};
