"use client";
import TaskCard from "@/components/taskcard";
import { useData } from "@/context/taskprovider";
import { useRouter } from "next/navigation";

export default function TodoHome() {
  const { tasks } = useData();

  const router = useRouter();

  return (
    <div>
      <button onClick={() => router.push("/todo/new")}> Agregar tarea </button>
      {tasks.map((task) => (
        <TaskCard key={`task-id-${task.id}`} task={task}></TaskCard>
      ))}
    </div>
  );
}
