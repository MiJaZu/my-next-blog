import { Task } from "@/models/task";

type TaskCardProps = {
  task: Task;
  deleteTask(task: Task);
  editTask(task: Task);
};

export default function TaskCard({
  task,
  editTask,
  deleteTask,
}: TaskCardProps) {
  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <button onClick={() => deleteTask(task)}>Delete</button>
      <button onClick={() => editTask(task)}>Edit</button>
    </div>
  );
}
