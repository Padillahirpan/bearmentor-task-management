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
      id: 1,
      title: "Seminggu solat dhuha",
      context: "Belajar membiasakan solat dhuha",
      target: "Sehari minimal 2 rakaat shalat dhuha",
      createAt: 1731249474,
      timelineDate: 1733841440,
      status: 2,
      statusComplete: "33% in progress",
      task: [
        {
          id: 0,
          title: "Wudhu setelah mandi",
          status: 1,
          endDate: 1733841440,
        },
        {
          id: 0,
          title: "Baca Quran setelah solat subuh",
          status: 1,
          endDate: 1733841440,
        },
      ]
    },
    {
      id: 2,
      title: "Membaca 1 buku per bulan",
      context: "Membuat habit baru membaca buku",
      target: "Sehari minimal membaca 10 halaman",
      createAt: 1731249474,
      timelineDate: 1733841440,
      status: 1,
      statusComplete: "Still 0%, let's start ",
      task: [
        {
          id: 3,
          title: "Beli buku Self-Dev",
          status: 0,
          endDate: 1733841440,
        },
        {
          id: 4,
          title: "Membaca buku di pagi hari 5 halaman",
          status: 0,
          endDate: 1733841440,
        },        
      ]
    },
    {
      id: 3,
      title: "Badan BUGAR",
      context: "Badan tidak pegal-pegal dan bisa beraktivitas normal",
      target: "Menaikan berat badan ke 60kg",
      createAt: 1731249474,
      timelineDate: 1733841440,
      status: 1,
      statusComplete: "Still 0%, let's start ",
      task: [
        {
          id: 5,
          title: "Beli dada ayam 5kg",
          status: 0,
          endDate: 1733841440,
        },
        {
          id: 6,
          title: "Workout 150 menit / minggu",
          status: 0,
          endDate: 1733841440,
        },
        {
          id: 7,
          title: "Jalan tiap pagi 5k",
          status: 0,
          endDate: 1733841440,
        },        
      ]
    },
  ]

}
export function getGoalsDataByStatus(): GoalDataByStatus[] {
  return [
    {
      statusId: 1,
      goalData: [
        {
          id: 1,
          title: "Seminggu solat dhuha",
          context: "Belajar membiasakan solat dhuha",
          target: "Sehari minimal 2 rakaat shalat dhuha",
          createAt: 1731249474,
          timelineDate: 1733841440,
          status: 1,
          statusComplete: "33% on to go",
          task: [
            {
              id: 1,
              title: "Wudhu setelah mandi",
              status: 1,
              endDate: 1733841440,
            },
            {
              id: 1,
              title: "Baca Quran setelah solat subuh",
              status: 1,
              endDate: 1733841440,
            },
          ]
        },
      ]
    },
  ]
}
