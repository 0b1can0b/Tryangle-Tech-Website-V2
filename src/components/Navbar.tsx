'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Search } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
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
    { name: 'Solutions', href: '/services', dropdown: true },
    { name: 'Verticals', href: '/portfolio', dropdown: true },
    { name: 'Infrastructure', href: '/about', dropdown: true },
    { name: 'Resources', href: '/blog', dropdown: true },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact us', href: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-zoho-sm py-3' : 'bg-zoho-bg-light py-5'}`}>
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center gap-12">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-zoho-blue rounded-lg flex items-center justify-center text-white font-black text-xl italic">
              T
            </div>
            <span className="text-2xl font-black tracking-tighter text-zoho-dark">
              Tryangle <span className="text-zoho-blue">Tech</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative group"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link 
                  href={link.href}
                  className={`flex items-center gap-1 text-[15px] font-medium transition-colors ${pathname === link.href ? 'text-zoho-blue' : 'text-zoho-dark hover:text-zoho-blue'}`}
                >
                  {link.name}
                  {link.dropdown && <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />}
                </Link>
                
                {link.dropdown && activeDropdown === link.name && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white shadow-zoho-lg rounded-xl border border-gray-100 p-4"
                  >
                    <div className="space-y-3">
                      {[1, 2, 3].map((i) => (
                        <Link key={i} href={link.href} className="block p-2 hover:bg-zoho-bg-light rounded-lg transition-colors">
                          <div className="font-bold text-sm">Feature Option {i}</div>
                          <div className="text-xs text-zoho-muted">Brief description of this feature.</div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <button className="text-zoho-dark hover:text-zoho-blue transition-colors">
            <Search className="h-5 w-5" />
          </button>
          <Link href="/login" className="text-[15px] font-bold text-zoho-dark hover:text-zoho-blue transition-colors">
            Sign in
          </Link>
          <Link href="/contact" className="bg-zoho-blue text-white px-6 py-2.5 rounded-md font-bold hover:bg-zoho-blue/90 transition-all shadow-button">
            Sign up now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-zoho-dark" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="container-custom py-8 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-lg font-bold text-zoho-dark"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-6 border-t border-gray-100 flex flex-col gap-4">
                <Link href="/login" className="text-center font-bold text-zoho-dark">Sign in</Link>
                <Link href="/contact" className="btn-primary w-full">Sign up now</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
