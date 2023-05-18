import { Task } from "@/models/task";
import { useRouter } from "next/navigation";
type TaskCardProps = {
  task: Task;
};

export default function TaskCard({ task }: TaskCardProps) {
  const router = useRouter();
  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <button>Delete</button>
      <button onClick={() => router.push(`/todo/edit/${task.id}`)}>Edit</button>
    </div>
  );
}
