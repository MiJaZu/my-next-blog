import { useData } from "@/context/taskprovider";
import { useRouter as useRouterRoutes } from "next/router";
import { useRouter as useRouterNav } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import TodoNavBar from "@/components/todonavbar";

export default function NewTask() {
  const { query } = useRouterRoutes();
  const routerNavigation = useRouterNav();
  const { tasks, createTask, editTask } = useData();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (task) => {
    if (query.id) {
      editTask(task);
    } else createTask({ ...task, id: uuidv4() });
    routerNavigation.push("/todo/home");
  };

  useEffect(() => {
    if (query.id) {
      console.log();
      const taskFound = tasks.find((task) => task.id === query.id);
      if (taskFound) {
        setValue("id", taskFound.id);
        setValue("title", taskFound.title);
        setValue("description", taskFound.description);
      }
    }
  });

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <TodoNavBar></TodoNavBar>
      <section className="flex flex-col justify-center items-center text-white bg-gray-700 self-center mt-10 p-3">
        <h1 className="text-2xl font-extrabold dark:text-white">Nueva Tarea</h1>
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="m-1 p-2 bg-gray-500"
            placeholder="nombre de la tarea"
            {...register("title", { required: true })}
          ></input>
          {errors.title && (
            <span className="text-red-400">el titulo es requerido</span>
          )}

          <textarea
            className="m-1 p-2 bg-gray-500"
            placeholder="agregar descripcion"
            cols={30}
            rows={10}
            {...register("description")}
          ></textarea>
          <button
            className="hover:bg-green-600 m-1 p-2 bg-green-400 text-white "
            type="submit"
          >
            Guardar Tarea
          </button>
        </form>
      </section>
    </div>
  );
}
