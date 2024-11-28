import { GoalData, GoalDataByStatus } from "@/data/goals-data";

export const statusGoals = [
  {
    id: 1,
    name: "Planned",
    background: "",
  },
  {
    id: 2,
    name: "In progress",
    background: "",
  },
  {
    id: 3,
    name: "Done",
    background: "",
  },
];

export function getGoalsData(): GoalData[] {
  return [
    {
      id: '1',
      title: "Seminggu solat dhuha tidak lupa dan ingat selalu itu ",
      context: "Belajar membiasakan solat dhuha",
      target: "Sehari minimal 2 rakaat shalat dhuha",
      createdAt: 1731260774000,
      timelineDate: 1731260774000,
      status: 2,
      statusComplete: "33% in progress",
    },
    {
      id: '2',
      title: "Membaca 1 buku per bulan",
      context: "Membuat habit baru membaca buku",
      target: "Sehari minimal membaca 10 halaman",
      createdAt: 1731260774000,
      timelineDate: 1731260774000,
      status: 1,
      statusComplete: "Still 0%, let's start ",
    },
    {
      id: '3',
      title: "Badan BUGAR",
      context: "Badan tidak pegal-pegal dan bisa beraktivitas normal",
      target: "Menaikan berat badan ke 60kg",
      createdAt: 1731260774000,
      timelineDate: 1731260774000,
      status: 1,
      statusComplete: "Still 0%, let's start ",
    },
  ]

}
export function getGoalsDataByStatus(): GoalDataByStatus[] {
  return [
    {
      statusId: 1,
      goalData: [
        {
          id: '1',
          title: "Seminggu solat dhuha",
          context: "Belajar membiasakan solat dhuha",
          target: "Sehari minimal 2 rakaat shalat dhuha",
          createdAt: 1731249474,
          timelineDate: 1733841440,
          status: 1,
          statusComplete: "33% on to go",
        },
      ]
    },
  ]
}
