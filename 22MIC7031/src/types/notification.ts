export interface NotificationType {
  id: number;
  title: string;
  message: string;
  priority: "High" | "Medium" | "Low";
  read: boolean;
  category:
    | "Internship/job activities"
    | "Event/club activities"
    | "Test/evaluation activities"
    | "Resume extracurricular activities";
}