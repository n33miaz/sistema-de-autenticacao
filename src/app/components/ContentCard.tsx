import { ReactNode } from 'react';

interface CardProps {
  title: string;
  children: ReactNode;
}

export default function ContentCard({ title, children }: CardProps) {
  return (
    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h3>
      <div className="font-normal text-gray-700 dark:text-gray-400">
        {children}
      </div>
    </div>
  );
}