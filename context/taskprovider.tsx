import { Task } from "@/models/task";
import React, { createContext, ReactNode, useContext, useState } from "react";

interface DataProvider {
  tasks: Task[];
}

type TaskProviderProps = {
  children: ReactNode;
};

const TaskContext = createContext<DataProvider | null>({
  tasks: [
    { id: "1", title: "My first task", description: "tasks full empty" },
    { id: "2", title: "My second task", description: "tasks full empty" },
    { id: "3", title: "My third task", description: "tasks full empty" },
  ],
});

export function useData(): DataProvider {
  const context = useContext(TaskContext);
  console.log(context);
  if (!context) throw Error("Error al retornar el context");
  return context;
}

export default function TaskProvider({ children }: TaskProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([]);
  return (
    <TaskContext.Provider value={{ tasks }}>{children}</TaskContext.Provider>
  );
}
