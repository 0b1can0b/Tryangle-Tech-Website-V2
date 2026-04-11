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
      ],
    },
  ];

  return (
    <footer className="bg-zoho-dark text-white pt-32 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-zoho-blue rounded-full blur-[150px] -translate-x-1/2 translate-y-1/2" />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-16 mb-32">
          {footerSections.map((section) => (
            <div key={section.title} className="col-span-1">
              <h4 className="text-[10px] font-black text-zoho-blue tracking-[0.2em] mb-10 uppercase">{section.title}</h4>
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

          <div className="col-span-2">
            <h4 className="text-[10px] font-black text-zoho-blue tracking-[0.2em] mb-10 uppercase">CONTACT US</h4>
            <div className="space-y-10">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-zoho-blue border border-white/10 group-hover:bg-zoho-blue group-hover:text-white transition-all duration-500">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-[10px] font-black text-gray-500 mb-2 uppercase tracking-widest">Mon-Fri (9AM to 7PM IST)</div>
                  <div className="text-xl font-black text-white tracking-tight">1800 569 2979</div>
                </div>
              </div>
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-zoho-blue border border-white/10 group-hover:bg-zoho-blue group-hover:text-white transition-all duration-500">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-[10px] font-black text-gray-500 mb-2 uppercase tracking-widest">Email us</div>
                  <div className="text-xl font-black text-white tracking-tight">info.tryangletech@gmail.com</div>
                </div>
              </div>
            </div>

            <h4 className="text-[10px] font-black text-zoho-blue tracking-[0.2em] mt-16 mb-10 uppercase">FOLLOW US</h4>
            <div className="flex items-center gap-4">
              {[Twitter, Linkedin, Instagram, Youtube].map((Icon, i) => (
                <Link key={i} href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-zoho-blue hover:border-zoho-blue transition-all duration-500">
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-16 border-t border-white/5 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="flex flex-wrap justify-center gap-8 text-[10px] font-black text-gray-500 uppercase tracking-widest">
            <Link href="#" className="hover:text-zoho-blue transition-colors">Security</Link>
            <Link href="#" className="hover:text-zoho-blue transition-colors">Compliance</Link>
            <Link href="#" className="hover:text-zoho-blue transition-colors">Terms</Link>
            <Link href="#" className="hover:text-zoho-blue transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-zoho-blue transition-colors">Cookies</Link>
            <Link href="#" className="hover:text-zoho-blue transition-colors">GDPR</Link>
          </div>
          <div className="text-[10px] font-black text-gray-600 uppercase tracking-[0.2em]">
            © 2026, Tryangle Tech Pvt. Ltd. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
