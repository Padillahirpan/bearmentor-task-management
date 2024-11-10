import { GoalStatus } from "./goal-status";
import { ItemGoal } from "./item-goal";
import { EmptyCard } from "./item-empty-goal";
import { GoalData, GoalStatusData } from "@/data/goals-data";

export const ListGoal = ({
  status,
  listGoal,
}: {
  status: GoalStatusData;
  listGoal: GoalData[];
}) => {
  if (listGoal.length === 0) {
    return (
      <div className="items-start p-2 rounded-lg">
        <div className="py-4">
          <GoalStatus status={status} />
        </div>
        <div className="py-2">
          <EmptyCard />
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="items-start p-2 rounded-lg">
        <div className="py-4">
          <GoalStatus status={status} />
        </div>
        <ul>
          {listGoal.map((item) => {
            return (
              <div key={item.id} className="py-2">
                <ItemGoal goalData={item} statusId={status.id} />
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
