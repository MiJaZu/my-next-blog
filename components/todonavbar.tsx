import Link from "next/link";
import React from "react";

export default function TodoNavBar() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-sky-600 p-6">
      <div className="flex items-center flex-shrink-0 mr-6">
        <Link
          className="text-white no-underline focus:no-underline hover:no-underline hover:animate-bounce"
          href={"/todo/home"}
        >
          <span className="font-semibold text-xl tracking-tight">
            Todo al Día
          </span>
        </Link>
      </div>
      <div className="block">
        <div className="text-sm lg:flex-grow">
          <Link
            href="/todo/new"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Agregar tarea
          </Link>
        </div>
      </div>
    </nav>
  );
}
