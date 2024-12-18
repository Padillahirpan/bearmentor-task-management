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
  const isListEmpty = listGoal.length === 0;
  return (
    <div className="items-start p-2 mb-4 rounded-lg">
      <div className="py-2">
        <GoalStatus status={status} />
      </div>
      <div className="py-2">
        {isListEmpty ? (
          <EmptyCard />
        ) : (
          <ul>
            {listGoal.map((item) => {
              return (
                <div key={item.id} className="py-2">
                  <ItemGoal goalData={item} statusId={status.id} />
                </div>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};
