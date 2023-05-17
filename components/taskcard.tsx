import { Task } from "@/models/task";

type TaskCardProps = {
  task: Task;
};

export default function TaskCard({ task }: TaskCardProps) {
  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <button>Delete</button>
      <button>Edit</button>
    </div>
  );
}
