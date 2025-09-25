"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext"; 

export default function Header() {
  const router = useRouter();
  const { isAuthenticated, logout } = useAuth(); 

  return (
    <header className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold cursor-pointer" onClick={() => router.push('/default')}>
          Sistema de Autenticação
        </h1>
        <nav className="flex items-center gap-4">
          {isAuthenticated && (
            <>
              <button
                onClick={() => router.push('/default')}
                className="hover:underline"
              >
                Home
              </button>
              <button
                onClick={logout} 
                className="hover:underline"
              >
                Sair
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}