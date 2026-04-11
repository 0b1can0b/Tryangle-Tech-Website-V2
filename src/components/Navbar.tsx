'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Search, ArrowRight } from 'lucide-react';

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
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-xl shadow-zoho-sm py-4' : 'bg-transparent py-8'}`}>
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center gap-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="relative">
              <div className="w-14 h-14 bg-zoho-blue rounded-[1.25rem] flex items-center justify-center text-white font-black text-2xl italic group-hover:rotate-12 transition-transform duration-700 shadow-zoho-md">
                T
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-zoho-green rounded-lg border-4 border-white shadow-zoho-sm" />
            </div>
            <span className="text-3xl font-black tracking-[-0.05em] text-zoho-dark">
              Tryangle<span className="text-zoho-blue">.</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link 
                  href={link.href}
                  className={`flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] transition-all ${pathname === link.href ? 'text-zoho-blue' : 'text-zoho-dark hover:text-zoho-blue'}`}
                >
                  {link.name}
                  {link.dropdown && <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-700 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />}
                </Link>
                
                <AnimatePresence>
                  {link.dropdown && activeDropdown === link.name && (
                    <motion.div 
                      initial={{ opacity: 0, y: 30, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 20, scale: 0.95 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-8 w-[700px] bg-white shadow-zoho-xl rounded-[3rem] border border-gray-100 p-12 grid grid-cols-2 gap-12"
                    >
                      <div className="space-y-8">
                        <h4 className="text-[10px] font-black text-zoho-muted uppercase tracking-[0.4em] mb-6">Popular Modules</h4>
                        {[
                          { title: 'Finance', desc: 'Accounting & Invoicing', color: 'bg-zoho-blue' },
                          { title: 'Inventory', desc: 'Stock & Warehouse', color: 'bg-zoho-green' },
                          { title: 'HR & People', desc: 'Employee Management', color: 'bg-zoho-red' }
                        ].map((item, i) => (
                          <Link key={i} href={link.href} className="flex items-center gap-6 p-5 hover:bg-zoho-bg-light rounded-[2rem] transition-all group/item">
                            <div className={`w-14 h-14 ${item.color} rounded-2xl shrink-0 group-hover/item:scale-110 transition-transform shadow-zoho-sm`} />
                            <div>
                              <div className="font-black text-base text-zoho-dark">{item.title}</div>
                              <div className="text-xs text-zoho-muted font-medium">{item.desc}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="bg-zoho-bg-light rounded-[2.5rem] p-10 flex flex-col justify-between relative overflow-hidden group/featured">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-zoho-blue/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover/featured:scale-150 transition-transform duration-1000" />
                        <div className="relative z-10">
                          <h4 className="text-[10px] font-black text-zoho-muted uppercase tracking-[0.4em] mb-6">Featured</h4>
                          <div className="font-black text-2xl text-zoho-dark mb-4 leading-[1.1] tracking-tight">Enterprise <br /> Dashboard 2.0</div>
                          <p className="text-sm text-zoho-muted font-medium leading-relaxed">Experience the next generation of business intelligence with our updated analytics engine.</p>
                        </div>
                        <Link href="/services" className="text-zoho-blue font-black text-[11px] uppercase tracking-[0.2em] flex items-center gap-3 group/link relative z-10">
                          Learn More <ArrowRight className="h-4 w-4 group-hover/link:translate-x-2 transition-transform" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-10">
          <button className="text-zoho-dark hover:text-zoho-blue transition-all hover:scale-125">
            <Search className="h-5 w-5" />
          </button>
          <Link href="/contact" className="text-[11px] font-black uppercase tracking-[0.2em] text-zoho-dark hover:text-zoho-blue transition-colors">
            Sign in
          </Link>
          <Link href="/contact" className="bg-zoho-blue text-white px-10 py-5 rounded-2xl font-black uppercase text-[11px] tracking-[0.2em] hover:bg-zoho-dark transition-all shadow-zoho-md hover:-translate-y-1 active:scale-95">
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-zoho-dark w-12 h-12 flex items-center justify-center bg-white rounded-xl shadow-zoho-sm" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 lg:hidden bg-white z-[60] p-10 flex flex-col"
          >
            <div className="flex items-center justify-between mb-20">
              <Link href="/" className="flex items-center gap-3">
                <div className="w-10 h-10 bg-zoho-blue rounded-xl flex items-center justify-center text-white font-black text-xl italic">T</div>
                <span className="text-2xl font-black tracking-tighter text-zoho-dark">Tryangle.</span>
              </Link>
              <button onClick={() => setIsOpen(false)} className="w-12 h-12 flex items-center justify-center bg-zoho-bg-light rounded-xl">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flex-grow space-y-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-4xl font-black text-zoho-dark hover:text-zoho-blue transition-colors tracking-tighter"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="pt-10 border-t border-gray-100 flex flex-col gap-6">
              <Link href="/contact" className="text-center font-black uppercase text-xs tracking-widest text-zoho-dark">Sign in</Link>
              <Link href="/contact" className="bg-zoho-blue text-white py-6 rounded-2xl text-center font-black uppercase text-xs tracking-widest shadow-zoho-lg">Get Started</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
