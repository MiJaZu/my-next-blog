import { Task } from "@/models/task";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface DataProvider {
  tasks: Task[];
  createTask(task: Task): void;
  editTask(task: Task): void;
}

type TaskProviderProps = {
  children: ReactNode;
};

const TaskContext = createContext<DataProvider | null>(null);

export function useData(): DataProvider {
  const context = useContext(TaskContext);
  console.log(context);
  if (!context) throw Error("Error al retornar el context");
  return context;
}

export default function TaskProvider({ children }: TaskProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([]);

  const createTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  const editTask = (updatedTask: Task) => {
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  return (
    <TaskContext.Provider value={{ tasks, createTask, editTask }}>
      {children}
    </TaskContext.Provider>
  );
}
