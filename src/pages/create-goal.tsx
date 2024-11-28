import MyForm, { formSchema } from "@/components/create/form";
import { LayoutBase } from "@/components/layout";
import { GoalData } from "@/data/goals-data";
import { createGoal, HOME_PAGE } from "@/data/goals-management";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

export const AddGoal = () => {
  const navigate = useNavigate();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
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

      await createGoal(payload);
      navigate(HOME_PAGE);
    } catch (error) {
      console.error("Form submission error", error);
    }
  };

  return (
    <LayoutBase>
      <div className="mt-10 mb-4 ml-2 lr-2 pb-4 flex justify-between items-center border-b">
        <h3 className="scroll-m-20 pb-2 text-2xl font-semibold tracking-tight first:mt-0 text-left">
          Add Goal 🎯
        </h3>
      </div>
      <div className=" dark:bg-slate-700 rounded-lg p-4">
        <MyForm onSubmit={onSubmit} />
      </div>
    </LayoutBase>
  );
};
