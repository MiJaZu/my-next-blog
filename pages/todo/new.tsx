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
    <>
      <TodoNavBar></TodoNavBar>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="nombre de la tarea"
          {...register("title", { required: true })}
        ></input>
        {errors.title && <span>Este campo es requerido</span>}

        <textarea
          placeholder="agregar descripcion"
          cols={30}
          rows={10}
          {...register("description")}
        ></textarea>
        <button type="submit">Guardar Tarea</button>
      </form>
    </>
  );
}
