export type GoalStatusData = {
  id: number;
  name: string;
  background: string;
}

export type GoalData = {
   id: number;
   title: string;
   context: string;
   target: string;
   createAt: number;
   timelineDate: number;
   status: number;
   statusComplete: string;
   task: TaskData[];
}


export type TaskData = {
   id: number;
   title: string;
   status: number;
   endDate: number;
}

export interface GoalDataByStatus {
  statusId: number,
  goalData: GoalData[]
}