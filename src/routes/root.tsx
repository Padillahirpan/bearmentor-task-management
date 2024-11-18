import { ListGoalByStatus } from "@/components/home/list-goal-by-status";
import { LayoutBase } from "@/components/layout";
import { GoalData } from "@/data/goals-data";
import { getGoals } from "@/data/goals-management";
import { useLoaderData } from "react-router-dom";

async function loader(): Promise<{
  goals: GoalData[];
}> {
  const goals = await getGoals();
  return { goals };
}

export const Root = () => {
  const { goals } = useLoaderData() as { goals: GoalData[] };

  return (
    <LayoutBase>
      <ListGoalByStatus listGoal={goals} />
    </LayoutBase>
  );
};

Root.loader = loader;
