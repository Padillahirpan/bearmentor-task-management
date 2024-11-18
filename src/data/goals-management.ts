import localforage from "localforage";
import { GoalData } from "./goals-data";
import { matchSorter } from "match-sorter";

const GOAL_ITEMS = 'goal-items';

export const ADD_GOAL_PAGE = "/add-goal"
export const HOME_PAGE = "/"

export async function getGoals(query?: string) {
   let goals = (await localforage.getItem(GOAL_ITEMS)) as GoalData[];
   
   if(!goals) goals = [];
   if(query) {
      goals = matchSorter(goals, query, { keys: ['first', 'last']})
   }

   return goals;
}

export async function createGoal(payload: GoalData) {
   const { title, context, target, timelineDate, status } = payload;
   const statusComplete: string = ""
   const id: string = Math.random().toString(36).substring(2, 9);
   const goal: GoalData = {
     id,
     title,
     context,
     target,
     createdAt: Date.now(),
     timelineDate,
     status,
     statusComplete
   };

   const goals = await getGoals();
   goals.unshift(goal);
   await set(goals);
   return goal;
 }

function set(goalData: GoalData[]) {
   return localforage.setItem(GOAL_ITEMS, goalData);
 }

