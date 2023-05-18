import Link from "next/link";
import { useRouter } from "next/navigation";

export default function TodoNavBar() {
  const router = useRouter();

  return (
    <nav>
      <h1>
        <Link href={"/todo/home"}>To do List</Link>
      </h1>
      <button onClick={() => router.push("/todo/new")}> Agregar tarea </button>
    </nav>
  );
}
