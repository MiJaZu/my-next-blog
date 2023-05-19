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
    <div className="flex justify-center text-white bg-slate-400 w-2/4 m-2 p-2 max-md:w-full h-32">
      <div className="w-3/4">
        <h2 className="text-center">{task.title}</h2>
        <p>{task.description}</p>
      </div>
      <div className="flex flex-col justify-center items-center w-1/4 max-md:w-3/1">
        <button
          className="hover:bg-red-600 bg-red-400 p-1 w-2/3 m-1 max-md:w-full"
          onClick={() => deleteTask(task)}
        >
          Eliminar
        </button>
        <button
          className="hover:bg-green-600 bg-green-400 p-1 w-2/3 m-1 max-md:w-full"
          onClick={() => editTask(task)}
        >
          Editar
        </button>
      </div>
    </div>
  );
}
