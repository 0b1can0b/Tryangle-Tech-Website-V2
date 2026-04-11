'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Youtube, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'SOLUTIONS',
      links: [
        { name: 'Core financials', href: '/services' },
        { name: 'Supply Chain Management', href: '/services' },
        { name: 'Billing management', href: '/services' },
        { name: 'People and payroll operations', href: '/services' },
        { name: 'Spend management', href: '/services' },
        { name: 'Omnichannel commerce', href: '/services' },
      ],
    },
    {
      title: 'VERTICALS',
      links: [
        { name: 'Manufacturing', href: '/portfolio' },
        { name: 'Distribution', href: '/portfolio' },
        { name: 'Retail', href: '/portfolio' },
        { name: 'Non-profits', href: '/portfolio' },
      ],
    },
    {
      title: 'QUICK LINKS',
      links: [
        { name: 'Pricing', href: '/pricing' },
        { name: 'AI in ERP', href: '/about' },
        { name: 'All features', href: '/services' },
        { name: 'Taxes and filing', href: '/services' },
      ],
    },
    {
      title: 'RESOURCES',
      links: [
        { name: 'Help document', href: '/blog' },
        { name: 'Quick access guides', href: '/blog' },
        { name: 'Community', href: '/blog' },
        { name: 'Webinars', href: '/blog' },
      ],
    },
    {
      title: 'COMPANY',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/about' },
        { name: 'Press', href: '/about' },
        { name: 'Contact', href: '/contact' },
      ],
    },
  ];

  return (
    <footer className="bg-zoho-dark text-white pt-40 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-zoho-blue rounded-full blur-[200px] -translate-x-1/2 translate-y-1/2" />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-16 mb-40">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-4 group mb-12">
              <div className="w-14 h-14 bg-zoho-blue rounded-[1.25rem] flex items-center justify-center text-white font-black text-2xl italic group-hover:rotate-12 transition-transform duration-700 shadow-zoho-md">
                T
              </div>
              <span className="text-3xl font-black tracking-[-0.05em] text-white">
                Tryangle<span className="text-zoho-blue">.</span>
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-10 font-medium">
              The intelligent operating system for modern business. Unify your ecosystem and scale with confidence.
            </p>
            <div className="flex items-center gap-4">
              {[Twitter, Linkedin, Instagram, Youtube].map((Icon, i) => (
                <Link key={i} href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-zoho-blue hover:border-zoho-blue transition-all duration-500">
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title} className="col-span-1">
              <h4 className="text-[10px] font-black text-zoho-blue tracking-[0.4em] mb-12 uppercase">{section.title}</h4>
              <ul className="space-y-6">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors font-medium">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-2 lg:col-span-1">
            <h4 className="text-[10px] font-black text-zoho-blue tracking-[0.4em] mb-12 uppercase">CONTACT</h4>
            <div className="space-y-10">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-zoho-blue border border-white/10 group-hover:bg-zoho-blue group-hover:text-white transition-all duration-500">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-[10px] font-black text-gray-500 mb-2 uppercase tracking-widest">Call us</div>
                  <div className="text-lg font-black text-white tracking-tight">1800 569 2979</div>
                </div>
              </div>
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-zoho-blue border border-white/10 group-hover:bg-zoho-blue group-hover:text-white transition-all duration-500">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-[10px] font-black text-gray-500 mb-2 uppercase tracking-widest">Email</div>
                  <div className="text-lg font-black text-white tracking-tight">info@tryangle.tech</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-20 border-t border-white/5 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex flex-wrap justify-center gap-10 text-[10px] font-black text-gray-600 uppercase tracking-[0.2em]">
            <Link href="#" className="hover:text-zoho-blue transition-colors">Security</Link>
            <Link href="#" className="hover:text-zoho-blue transition-colors">Compliance</Link>
            <Link href="#" className="hover:text-zoho-blue transition-colors">Terms</Link>
            <Link href="#" className="hover:text-zoho-blue transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-zoho-blue transition-colors">GDPR</Link>
          </div>
          <div className="text-[10px] font-black text-gray-700 uppercase tracking-[0.3em]">
            © 2026, Tryangle Tech Pvt. Ltd. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
