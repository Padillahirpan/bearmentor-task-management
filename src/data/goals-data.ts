export type GoalStatusData = {
  id: number;
  name: string;
  background: string;
}

export type GoalData = {
   id?: string;
   title: string;
   context: string;
   target: string;
   createdAt?: number;
   timelineDate: number;
   status: number;
   statusComplete?: string;
  //  task: TaskData[];
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

export type RouteError = {
  internal: boolean;
  status: number;
  statusText: string;
  message: string;
};