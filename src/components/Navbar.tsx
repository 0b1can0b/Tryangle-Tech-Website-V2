'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/portfolio' },
    { name: 'Journal', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md border-b border-outline-variant py-4 shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-on-surface flex items-center justify-center group-hover:bg-primary transition-colors duration-500">
            <div className="w-4 h-4 border-2 border-white rotate-45"></div>
          </div>
          <span className="text-lg lg:text-xl font-headline font-bold tracking-tighter text-on-surface uppercase">
            TRYANGLE TECH
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-10 items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href}
              className={`font-label font-bold uppercase text-[11px] tracking-[0.2em] transition-all duration-300 relative group ${pathname === link.href ? 'text-primary' : 'text-on-surface-variant hover:text-on-surface'}`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-[1px] bg-primary transition-all duration-300 ${pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden md:block">
          <Link href="/contact" className="border border-on-surface text-on-surface px-8 py-2.5 font-label font-bold text-[11px] uppercase tracking-[0.2em] hover:bg-on-surface hover:text-white transition-all duration-500">
            Initiate
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-on-surface flex items-center" onClick={() => setIsOpen(!isOpen)}>
          <span className="material-symbols-outlined text-3xl">
            {isOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-white border-b border-outline-variant overflow-hidden md:hidden shadow-2xl"
          >
            <div className="p-8 flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-headline font-bold uppercase text-2xl tracking-tighter ${pathname === link.href ? 'text-primary' : 'text-on-surface-variant'}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                href="/contact" 
                className="bg-on-surface text-white py-5 font-label font-bold text-center uppercase tracking-[0.2em] text-xs"
                onClick={() => setIsOpen(false)}
              >
                Initiate Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
