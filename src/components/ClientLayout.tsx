'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import WhatsAppButton from "@/src/components/WhatsAppButton";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isCMS = pathname?.startsWith('/cms');

  return (
    <>
      {!isCMS && <Navbar />}
      <main className="flex-grow">
        {children}
      </main>
      {!isCMS && <Footer />}
      {!isCMS && <WhatsAppButton />}
    </>
  );
}
