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
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="hidden lg:block bg-brand-blue text-white py-2 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs font-medium">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Mail className="h-3.5 w-3.5" />
              <span>info.tryangletech@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-3.5 w-3.5" />
              <span>+91 90338 78806</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span>Follow Us:</span>
            <div className="flex gap-3">
              {/* Social icons could go here */}
            </div>
          </div>
        </div>
      </div>

      <nav className={`transition-all duration-300 ${
        scrolled ? 'bg-white py-3 shadow-md' : 'bg-white py-5'
      } px-6`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <img 
              alt="Tryangle Tech Logo" 
              className="h-12 transition-transform group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqZ8OWsUlvXeLUPvTyL8gGLff0liDy3qc046YpubkrEIo9bUeeGQQqu5JYOECY-UuMrZbJRn3fA6Le5luyXN9VLzZWq0oQIvovCvvQ9cN8FS-5_KkzLjzVXvNAx2BavQeS5-PcgSAygat3Prsg9-yidxqyvAaYormu2J1yPEtnzJVxC0K0-pwPXJHiddgXi2ghAovQsBybA1lDrWT7AjjYpKwGLCWJQTh12H8Ipl3ABGQJO-AB9FB0drGDM07DWpPV_cA-Llx_6rg"
              referrerPolicy="no-referrer"
            />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center space-x-10 text-[15px] font-bold uppercase tracking-wide">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link 
                  href={link.path} 
                  className={`transition-colors ${
                    pathname === link.path ? 'text-brand-blue' : 'text-gray-800 hover:text-brand-blue'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <Link href="/contact" className="hidden sm:flex bg-brand-blue text-white px-8 py-3 rounded-full text-sm font-bold items-center gap-2 hover:bg-brand-dark transition-all duration-300 shadow-button">
              Get a Quote
            </Link>

            {/* Mobile Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-800 hover:text-brand-blue transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <ul className="px-6 py-8 space-y-4">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link 
                      href={link.path} 
                      className={`block text-lg font-bold transition-colors ${
                        pathname === link.path ? 'text-brand-blue' : 'text-gray-800 hover:text-brand-blue'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
                <li className="pt-4">
                  <Link href="/contact" className="w-full bg-brand-blue text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2">
                    Get a Quote
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
