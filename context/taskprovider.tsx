import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Task } from "@/models/task";
import React, { createContext, ReactNode, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

interface DataProvider {
  tasks: Task[];
  createTask(task: Task): void;
  editTask(task: Task): void;
  deleteTask(task: Task): void;
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

const TASKS_KEY = "tasks";

export default function TaskProvider({ children }: TaskProviderProps) {
  const [tasks, setTasks] = useLocalStorage<Task[]>(TASKS_KEY, []);
  console.log("Montando Task Provider");
  const createTask = (task: Task) => {
    setTasks([...tasks, task]);
    toast.success("Tarea creada");
  };

  const editTask = (updatedTask: Task) => {
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
    toast.success("Tarea actualizada");
  };

  const deleteTask = (toDeleteTask: Task) => {
    const accepted = window.confirm("Seguro que desea eliminar la tarea?");
    if (accepted) {
      setTasks(tasks.filter((task) => task.id !== toDeleteTask.id));
      toast.success("Tarea eliminada");
    }
  };

  return (
    <TaskContext.Provider value={{ tasks, createTask, editTask, deleteTask }}>
      {children}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </TaskContext.Provider>
  );
}
