"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/context/AuthContext';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import ContentCard from '@/app/components/ContentCard';
import Loading from '@/app/components/Loading';

export default function DefaultPage() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return <Loading />;
  }
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="container flex-grow p-4 mx-auto">
        <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
          Página Principal
        </h2>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ContentCard title="Seção 1: Boas-vindas">
            <p>Este é o dashboard. A autenticação foi um sucesso!</p>
          </ContentCard>
          
          <ContentCard title="Seção 2: Funcionalidades">
            <ul>
              <li>- Login Persistente</li>
              <li>- Rotas Protegidas</li>
            </ul>
          </ContentCard>
        </div>
      </main>
      <Footer />
    </div>
  );
}