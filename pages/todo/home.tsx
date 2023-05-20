"use client";
import TaskCard from "@/components/taskcard";
import TodoNavBar from "@/components/todonavbar";
import { useRouter } from "next/navigation";
import { useData } from "@/context/taskprovider";
import { Task } from "@/models/task";

export default function TodoHome() {
  const router = useRouter();
  const { tasks, deleteTask } = useData();

  const deleteTaskCard = (task: Task) => {
    deleteTask(task);
  };

  const editTask = (task: Task) => {
    router.push(`/todo/edit/${task.id}`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <TodoNavBar></TodoNavBar>
      <div className="flex flex-col lg:grid lg:grid-cols-3 lg:grid-flow-row ">
        {tasks.map((task) => (
          <TaskCard
            key={`task-id-${task.id}`}
            task={task}
            deleteTask={deleteTaskCard}
            editTask={editTask}
          ></TaskCard>
        ))}
      </div>
    </div>
  );
}
