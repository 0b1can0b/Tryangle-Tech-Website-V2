'use client';

import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import WhatsAppButton from "@/src/components/WhatsAppButton";
import { usePathname } from 'next/navigation';
import MetadataLayout from "./metadata-layout";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isCMS = pathname?.startsWith('/cms');

  return (
    <html lang="en" className={outfit.variable}>
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
