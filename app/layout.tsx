'use client';

import { Inter, Space_Grotesk, Manrope, JetBrains_Mono } from "next/font/google";
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

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isCMS = pathname?.startsWith('/cms');

  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${manrope.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" />
      </head>
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
