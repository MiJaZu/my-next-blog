"use client";
import TaskCard from "@/components/taskcard";
import { useData } from "@/context/taskprovider";

export default function Home() {
  const { tasks } = useData();

  return (
    <div className="bg-gray-700">
      {tasks.map((task) => (
        <TaskCard key={`task-id-${task.id}`} task={task}></TaskCard>
      ))}
    </div>
  );
}
