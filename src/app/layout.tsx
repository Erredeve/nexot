import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '../context/LanguageContext';
import Navbar from './components/Navbar';
import PageTransition from './components/PageTransition';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nexo Estudos Elétricos - Consultoria Especializada',
  description: 'Consultoria especializada em estudos elétricos para o setor de energia, com atuação nacional e internacional.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <LanguageProvider>
          <Navbar />
          <PageTransition>
            {children}
          </PageTransition>
        </LanguageProvider>
      </body>
    </html>
  );
}
