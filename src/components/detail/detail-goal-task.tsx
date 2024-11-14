import { TaskData } from "@/data/goals-data";
import { columns } from "./task-column";
import { DataTable } from "./task-table";

export const TaskList = ({ taskList }: { taskList: TaskData[] }) => {
  return (
    <>
      <div>
        <DataTable columns={columns} data={taskList} />
      </div>
    </>
  );
};
