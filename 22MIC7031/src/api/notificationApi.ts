import type { NotificationType } from "../types/notification";

export const notifications: NotificationType[] = [
  {
    id: 1,
    title: "Internship Interview Scheduled",
    message:
      "Your internship interview is scheduled for next Tuesday.",
    priority: "High",
    read: false,
    category: "Internship/job activities",
  },
  {
    id: 2,
    title: "Club Fair Registration",
    message:
      "Register now for the campus club fair and student organizations.",
    priority: "Medium",
    read: true,
    category: "Event/club activities",
  },
  {
    id: 3,
    title: "Midterm Evaluation",
    message:
      "Your evaluation activities for the midterm test are now available.",
    priority: "High",
    read: false,
    category: "Test/evaluation activities",
  },
  {
    id: 4,
    title: "Resume Workshop",
    message:
      "Attend the extracurricular resume workshop to strengthen your application.",
    priority: "Low",
    read: false,
    category: "Resume extracurricular activities",
  },
  {
    id: 5,
    title: "Final Evaluation Reminder",
    message:
      "Test evaluation results will be published later this afternoon.",
    priority: "Medium",
    read: false,
    category: "Test/evaluation activities",
  },
];