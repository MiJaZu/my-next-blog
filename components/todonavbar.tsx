import Link from "next/link";
import { useRouter } from "next/navigation";

import styles from "./todonavbar.module.css";

export default function TodoNavBar() {
  const router = useRouter();

  return (
    <nav className="flex justify-around items-center h-20 bg-slate-600 text-white">
      <h1 className={`font-serif text-4xl p-2 w-30 m-1 hover:animate-bounce`}>
        <Link
          className="no-underline hover:no-underline focus:no-underline text-blue-200"
          href={"/todo/home"}
        >
          Todo al Día
        </Link>
      </h1>
      <h1></h1>
      <button
        className="hover:bg-blue-600 bg-blue-400 p-2 w-30 m-1"
        onClick={() => router.push("/todo/new")}
      >
        Agregar tarea
      </button>
    </nav>
  );
}
