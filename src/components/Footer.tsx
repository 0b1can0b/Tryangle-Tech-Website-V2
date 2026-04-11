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
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 mb-20">
          {footerSections.map((section) => (
            <div key={section.title} className="col-span-1">
              <h4 className="text-xs font-black text-zoho-muted tracking-widest mb-6">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-[14px] text-zoho-dark hover:text-zoho-blue transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-2">
            <h4 className="text-xs font-black text-zoho-muted tracking-widest mb-6">CONTACT US ON</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-zoho-muted">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-zoho-muted mb-1">Mon-Fri (9:00AM to 7:00PM)</div>
                  <div className="text-sm font-bold text-zoho-dark">Toll Free: 18005692979</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-zoho-muted">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-zoho-muted mb-1">Email us</div>
                  <div className="text-sm font-bold text-zoho-dark">info.tryangletech@gmail.com</div>
                </div>
              </div>
            </div>

            <h4 className="text-xs font-black text-zoho-muted tracking-widest mt-10 mb-6">FOLLOW US ON</h4>
            <div className="flex items-center gap-4">
              {[Twitter, Linkedin, Instagram, Youtube].map((Icon, i) => (
                <Link key={i} href="#" className="w-10 h-10 rounded-lg border border-gray-100 flex items-center justify-center text-zoho-muted hover:text-zoho-blue hover:border-zoho-blue transition-all">
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap justify-center gap-6 text-[12px] text-zoho-muted">
            <Link href="#" className="hover:text-zoho-blue">Contact</Link>
            <Link href="#" className="hover:text-zoho-blue">Security</Link>
            <Link href="#" className="hover:text-zoho-blue">Compliance</Link>
            <Link href="#" className="hover:text-zoho-blue">IPR Complaints</Link>
            <Link href="#" className="hover:text-zoho-blue">Anti-spam Policy</Link>
            <Link href="#" className="hover:text-zoho-blue">Terms of Service</Link>
            <Link href="#" className="hover:text-zoho-blue">Privacy Policy</Link>
            <Link href="#" className="hover:text-zoho-blue">Trademark Policy</Link>
            <Link href="#" className="hover:text-zoho-blue">Cookie Policy</Link>
            <Link href="#" className="hover:text-zoho-blue">GDPR Compliance</Link>
            <Link href="#" className="hover:text-zoho-blue">Abuse Policy</Link>
          </div>
          <div className="text-[12px] text-zoho-muted">
            © 2026, Tryangle Tech Pvt. Ltd. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
