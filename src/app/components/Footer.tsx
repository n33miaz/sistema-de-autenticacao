"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 p-4 text-center mt-auto">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Sistema Autenticação. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}