import { GoalData } from "@/data/goals-data";
import { Button } from "../components/ui/button";
import { ItemGoalContent } from "../components/detail/item-goal";
import { calculateDate } from "@/cons/const";
import {
  deleteGoalById,
  getGoalById,
  HOME_PAGE,
} from "@/data/goals-management";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { LayoutBase } from "@/components/layout";
import { cn } from "@/lib/utils";
import { DeleteModal } from "@/components/delete/delete-modal";

async function loader({ params }: { params: any }): Promise<{
  goalData: GoalData | null;
}> {
  const goalData = await getGoalById(params.goalId);
  return { goalData };
}

export const DetailGoal = () => {
  const { goalData } = useLoaderData() as { goalData: GoalData };
  const navigate = useNavigate();

  const handleDeleteGoal = async () => {
    await deleteGoalById(goalData.id ? goalData.id : "");
    navigate(HOME_PAGE);
  };

  let statusDesc;
  let bgCard;
  if (goalData.status === 1) {
    statusDesc = "Planned";
    bgCard = "bg-neutral-200 dark:bg-neutral-700 ";
  } else if (goalData.status === 2) {
    statusDesc = "In progress";
    bgCard = "bg-blue-200 dark:bg-blue-700";
  } else {
    statusDesc = "Done";
    bgCard = "bg-emerald-200 dark:bg-emerald-700";
  }

  const startDate = calculateDate(goalData.createdAt ? goalData.createdAt : 0);
  const endDate = calculateDate(goalData.timelineDate);
  const timeline: string = `${startDate} -> ${endDate}`;

  return (
    <LayoutBase>
      <div className="">
        <div className="mt-10 mb-4 pb-4 flex justify-between items-center border-b">
          <h3 className="scroll-m-20 pb-2 text-2xl font-semibold tracking-tight first:mt-0 text-left">
            🎯 {goalData.title}
          </h3>
          <div className="flex flex-wrap gap-2">
            <Link to={`/edit-goal/${goalData.id}`}>
              <Button>Edit Goal</Button>
            </Link>
            <Button
              variant={"outline"}
              onClick={() => {
                (
                  document?.getElementById("delete-modal") as HTMLDialogElement
                ).showModal();
              }}
            >
              Remove Goal
            </Button>
          </div>
        </div>

        <div className={cn("p-2 rounded-lg", bgCard)}>
          <div className="bg-slate-100 dark:bg-slate-700 rounded-lg">
            <div className="flex flex-wrap gap-2 p-2 items-center">
              <h3 className="w-1/5 scroll-m-20 text-gray-400 text-lg font-semibold tracking-tight text-start">
                Status
              </h3>
              <div
                className={cn(
                  "py-2 px-4 items-start rounded-lg border-gray-200 dark:border-gray-700",
                  bgCard
                )}
              >
                {statusDesc}
              </div>
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
        </div>
      </div>
      <DeleteModal handleDelete={handleDeleteGoal} />
    </LayoutBase>
  );
};

DetailGoal.loader = loader;
