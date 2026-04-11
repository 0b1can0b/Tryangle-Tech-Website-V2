'use client';

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import WhatsAppButton from "@/src/components/WhatsAppButton";
import { usePathname } from 'next/navigation';
import MetadataLayout from "./metadata-layout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isCMS = pathname?.startsWith('/cms');

  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col antialiased overflow-x-hidden">
        <MetadataLayout>
          {!isCMS && <Navbar />}
          <main className="flex-grow">
            {children}
          </main>
          {!isCMS && <Footer />}
          {!isCMS && <WhatsAppButton />}
        </MetadataLayout>
      </body>
    </html>
  );
}
