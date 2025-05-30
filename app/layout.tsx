import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import StudentCounseling from '@/components/StudentCounseling';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sathyabama Institute of Science and Technology',
  description: 'A premier institution dedicated to excellence in education, research, and innovation',
  keywords: 'Sathyabama University, Engineering, Technology, Research, Higher Education',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <Footer />
          <ChatBot />
          <StudentCounseling />
        </ThemeProvider>
      </body>
    </html>
  );
}