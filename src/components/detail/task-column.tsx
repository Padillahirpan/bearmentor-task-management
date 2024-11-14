import { TaskData } from "@/data/goals-data";
import { ColumnDef } from "@tanstack/react-table";
import { SelectedStatus } from "./status-content";

export const columns: ColumnDef<TaskData>[] = [
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => {
      return (
        <div className="font-medium text-start">{row.getValue("title")}</div>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const statusData: number = row.getValue("status");
      let statusDesc;
      if (statusData === 0) {
        statusDesc = "Planned";
      } else if (statusData === 1) {
        statusDesc = "In progress";
      } else {
        statusDesc = "Done";
      }

      return (
        <div className="text-start">
          <SelectedStatus selectedItem={statusDesc} />
        </div>
      );
    },
  },
  {
    accessorKey: "endDate",
    header: "Timeline",
    cell: ({ row }) => {
      const dateInNumber: number = row.getValue("endDate");

      const date = new Date(dateInNumber);
      const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      const formattedDate: string = date.toLocaleDateString(undefined, options);

      return <p className="text-start">{formattedDate}</p>;
    },
  },
];
