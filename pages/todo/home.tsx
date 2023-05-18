"use client";
import TaskCard from "@/components/taskcard";
import TodoNavBar from "@/components/todonavbar";
import { useData } from "@/context/taskprovider";

export default function TodoHome() {
  const { tasks } = useData();

  return (
    <div>
      <TodoNavBar></TodoNavBar>
      {tasks.map((task) => (
        <TaskCard key={`task-id-${task.id}`} task={task}></TaskCard>
      ))}
    </div>
  );
}
