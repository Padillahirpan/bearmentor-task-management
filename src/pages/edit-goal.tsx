import { GoalData } from "@/data/goals-data";
import { editGoalById, getGoalById, HOME_PAGE } from "@/data/goals-management";
import { useLoaderData, useNavigate } from "react-router-dom";
import { LayoutBase } from "@/components/layout";
import EditForm, { formSchema } from "@/components/create/edit-form";
import { z } from "zod";
import { cn } from "@/lib/utils";

async function loader({ params }: { params: any }): Promise<{
  goalData: GoalData | null;
}> {
  const goalData = await getGoalById(params.goalId);
  return { goalData };
}

export const EditGoal = () => {
  const navigate = useNavigate();

  const { goalData } = useLoaderData() as { goalData: GoalData };

  const onSubmit = async (
    values: z.infer<typeof formSchema>,
    data: GoalData
  ) => {
    try {
      let status;
      if (values.status === "planned") {
        status = 1;
      } else if (values.status === "in-progress") {
        status = 2;
      } else {
        status = 3;
      }

      const payload: GoalData = {
        title: values.goal,
        context: values.context,
        target: values.target,
        timelineDate: values.timeline.getTime(),
        status: status,
      };

      if (!data.id) return;
      await editGoalById(data.id, payload);
      navigate(HOME_PAGE);
    } catch (error) {
      console.error("Form submission error", error);
    }
  };

  return (
    <LayoutBase>
      <div className="mt-10 mb-4 ml-2 lr-2 pb-4 flex justify-between items-center border-b">
        <h3 className="scroll-m-20 pb-2 text-2xl font-semibold tracking-tight first:mt-0 text-left">
          Edit Goal 📝
        </h3>
      </div>
      <div
        className={cn(
          "rounded-lg p-4",
          goalData.status === 1 && "bg-neutral-200 dark:bg-neutral-700",
          goalData.status === 2 && "bg-blue-200 dark:bg-blue-700",
          goalData.status === 3 && "bg-emerald-200 dark:bg-emerald-700"
        )}
      >
        <EditForm
          goalData={goalData}
          onSubmit={(data) => {
            onSubmit(data, goalData);
          }}
        />
      </div>
    </LayoutBase>
  );
};

EditGoal.loader = loader;
