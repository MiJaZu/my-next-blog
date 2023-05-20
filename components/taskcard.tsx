import { Task } from "@/models/task";
import { FaTrash, FaEdit } from "react-icons/fa";

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
    <div className=" w-3/4 mx-auto m-3 bg-white rounded-xl shadow-md overflow-hidden p-4 md:min-w-30">
      <div className="flex flex-row m-1">
        <h1 className="block mt-1 text-lg leading-tight font-medium text-black hover:underline w-3/4">
          {task.title}
        </h1>
        <div className="flex justify-around gap-1 text-white w-1/4">
          <button
            className="hover:bg-green-400 bg-green-600 p-1 rounded w-6 h-6"
            onClick={() => editTask(task)}
          >
            <FaEdit />
          </button>
          <button
            className="hover:bg-red-400 bg-red-600 p-1 rounded w-6 h-6"
            onClick={() => deleteTask(task)}
          >
            <FaTrash />
          </button>
        </div>
      </div>
      <hr />
      <p className="mt-2 text-slate-500">{task.description}</p>
    </div>
  );
}
