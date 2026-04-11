'use client';

import { useState, useEffect } from 'react';
import { Mail, Phone, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  
  useEffect(() => {
    console.log('Navbar mounted');
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
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Projects', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact us', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-sm py-3' : 'bg-white/90 backdrop-blur-md py-5'
    }`}>
      <nav className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <img 
            alt="Tryangle Tech Logo" 
            className="h-10 transition-transform group-hover:scale-105" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqZ8OWsUlvXeLUPvTyL8gGLff0liDy3qc046YpubkrEIo9bUeeGQQqu5JYOECY-UuMrZbJRn3fA6Le5luyXN9VLzZWq0oQIvovCvvQ9cN8FS-5_KkzLjzVXvNAx2BavQeS5-PcgSAygat3Prsg9-yidxqyvAaYormu2J1yPEtnzJVxC0K0-pwPXJHiddgXi2ghAovQsBybA1lDrWT7AjjYpKwGLCWJQTh12H8Ipl3ABGQJO-AB9FB0drGDM07DWpPV_cA-Llx_6rg"
            referrerPolicy="no-referrer"
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center space-x-8 text-[14px] font-medium text-gray-700">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link 
                href={link.path} 
                className={`transition-colors hover:text-brand-blue ${
                  pathname === link.path ? 'text-brand-blue font-semibold' : ''
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-6">
          <Link href="/contact" className="hidden sm:flex bg-brand-blue text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-brand-blue/90 transition-all shadow-button">
            Get Started
          </Link>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-800 hover:text-brand-blue transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl overflow-hidden"
          >
            <ul className="px-6 py-8 space-y-4">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    href={link.path} 
                    className={`block text-lg font-medium transition-colors ${
                      pathname === link.path ? 'text-brand-blue' : 'text-gray-800 hover:text-brand-blue'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="pt-4">
                <Link href="/contact" className="w-full bg-brand-blue text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2">
                  Get Started
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
