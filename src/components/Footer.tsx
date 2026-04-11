'use client';

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-outline-variant pt-24 pb-12">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
        <div className="space-y-8">
          <div className="flex items-center gap-3 group">
            <div className="w-6 h-6 bg-on-surface flex items-center justify-center">
              <div className="w-3 h-3 border-2 border-white rotate-45"></div>
            </div>
            <span className="text-xl font-headline font-bold tracking-tighter text-on-surface uppercase">
              TRYANGLE TECH
            </span>
          </div>
          <p className="text-sm text-on-surface-variant leading-relaxed font-sans">Ahmedabad's leading technology consultancy, setting the architectural benchmark for digital innovation since 2004.</p>
          <div className="flex gap-6">
            <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-xl">public</span>
            </a>
            <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-xl">link</span>
            </a>
            <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-xl">mail</span>
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="font-label font-bold text-on-surface mb-8 uppercase text-[10px] tracking-[0.3em]">The Firm</h4>
          <ul className="space-y-4">
            <li><Link href="/about" className="text-sm text-on-surface-variant hover:text-primary transition-colors font-sans">Mission</Link></li>
            <li><Link href="/about" className="text-sm text-on-surface-variant hover:text-primary transition-colors font-sans">Approach</Link></li>
            <li><Link href="/portfolio" className="text-sm text-on-surface-variant hover:text-primary transition-colors font-sans">Expertise</Link></li>
            <li><Link href="/contact" className="text-sm text-on-surface-variant hover:text-primary transition-colors font-sans">Careers</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-label font-bold text-on-surface mb-8 uppercase text-[10px] tracking-[0.3em]">Services</h4>
          <ul className="space-y-4">
            <li><Link href="/services" className="text-sm text-on-surface-variant hover:text-primary transition-colors font-sans">Systems Engineering</Link></li>
            <li><Link href="/services" className="text-sm text-on-surface-variant hover:text-primary transition-colors font-sans">Experience Design</Link></li>
            <li><Link href="/services" className="text-sm text-on-surface-variant hover:text-primary transition-colors font-sans">Cloud Strategies</Link></li>
            <li><Link href="/services" className="text-sm text-on-surface-variant hover:text-primary transition-colors font-sans">Data Intelligence</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-label font-bold text-on-surface mb-8 uppercase text-[10px] tracking-[0.3em]">Headquarters</h4>
          <div className="space-y-6">
            <p className="text-sm text-on-surface-variant leading-relaxed font-sans">1st Floor-29/Vithal Plaza,<br/>New Naroda, Ahmedabad,<br/>Gujarat 382330</p>
            <p className="text-lg text-primary font-bold font-headline tracking-tight">+91 90338 78806</p>
            <p className="text-[10px] font-label uppercase text-on-surface-variant tracking-widest">info@tryangle.tech</p>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-8 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] font-label text-on-surface-variant uppercase tracking-widest">© 2026 Tryangle Tech. Architectural Integrity Guaranteed.</p>
        <div className="flex gap-10">
          <Link href="/privacy" className="text-[9px] font-label uppercase text-on-surface-variant hover:text-primary tracking-widest">Privacy Protocol</Link>
          <Link href="/terms" className="text-[9px] font-label uppercase text-on-surface-variant hover:text-primary tracking-widest">Legal Framework</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
