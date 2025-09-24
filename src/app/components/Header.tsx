"use client";

import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { Moon, Sun } from "lucide-react";

export default function Header() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  const handleLogout = () => {
    console.log("Logout a ser implementado");
    router.push("/login");
  };

  return (
    <header className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold cursor-pointer" onClick={() => router.push('/default')}>
          Meu App
        </h1>
        <nav className="flex items-center gap-4">
          <button
            onClick={() => router.push('/default')}
            className="hover:underline"
          >
            Home
          </button>
          <button
            onClick={handleLogout}
            className="hover:underline"
          >
            Sair
          </button>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>
      </div>
    </header>
  );
}