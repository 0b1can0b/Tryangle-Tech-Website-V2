'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden architectural-grid">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-3 mb-8">
              <span className="w-12 h-[1px] bg-primary"></span>
              <span className="text-xs font-label uppercase tracking-[0.3em] text-primary font-bold">ESTABLISHED 2004</span>
            </div>
            <h1 className="text-6xl lg:text-8xl font-headline font-bold mb-8 leading-[0.9] text-on-surface tracking-tighter">
              Architecting <br />
              <span className="text-gradient">Digital Excellence.</span>
            </h1>
            <p className="text-on-surface-variant text-xl mb-12 leading-relaxed max-w-xl font-sans">
              Ahmedabad's premier technology partner. We build robust, scalable, and aesthetically superior digital infrastructures for the modern enterprise.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link href="/contact" className="bg-primary text-white px-10 py-4 rounded-none font-bold text-sm uppercase tracking-widest hover:bg-primary-dim shadow-lg active:scale-95 transition-all text-center">
                Start Consultation
              </Link>
              <Link href="/portfolio" className="bg-white text-on-surface border border-outline-variant px-10 py-4 rounded-none font-bold text-sm uppercase tracking-widest hover:bg-surface-container-low transition-all text-center">
                View Portfolio
              </Link>
            </div>
            
            <div className="mt-20 grid grid-cols-3 gap-12 border-t border-outline-variant pt-12">
              <div>
                <div className="text-3xl font-headline font-bold text-on-surface">20+</div>
                <div className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant mt-1">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-headline font-bold text-on-surface">500+</div>
                <div className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant mt-1">Projects Built</div>
              </div>
              <div>
                <div className="text-3xl font-headline font-bold text-on-surface">98%</div>
                <div className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant mt-1">Retention Rate</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
              <div className="absolute inset-0 border-[20px] border-white shadow-2xl z-10 overflow-hidden rounded-sm">
                <Image 
                  src="https://picsum.photos/seed/architecture/800/1000" 
                  alt="Architectural Tech" 
                  fill 
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 -z-10 rounded-sm"></div>
              <div className="absolute -top-10 -left-10 w-40 h-40 border border-primary/20 -z-10 rounded-sm"></div>
              
              {/* Floating Badge */}
              <div className="absolute -right-6 top-1/4 z-20 glass-effect p-6 rounded-none border border-white/20 shadow-xl hidden xl:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-none flex items-center justify-center text-white">
                    <span className="material-symbols-outlined">verified</span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-on-surface">ISO Certified</div>
                    <div className="text-[10px] font-label text-on-surface-variant uppercase tracking-widest">Quality Standard</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Systems Engineering",
      desc: "Robust backend architectures built for high-concurrency and absolute reliability.",
      icon: "settings_input_component",
      tag: "INFRASTRUCTURE"
    },
    {
      title: "Experience Design",
      desc: "Aesthetic interfaces that prioritize clarity, function, and emotional resonance.",
      icon: "architecture",
      tag: "INTERFACE"
    },
    {
      title: "Cloud Strategies",
      desc: "Scalable cloud solutions that optimize performance while minimizing overhead.",
      icon: "cloud_done",
      tag: "DEPLOYMENT"
    },
    {
      title: "Data Intelligence",
      desc: "Advanced analytics and AI integration to drive architectural decision making.",
      icon: "analytics",
      tag: "INSIGHTS"
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-24">
          <div className="max-w-2xl">
            <div className="text-primary font-label font-bold uppercase text-xs tracking-[0.3em] mb-6">CORE EXPERTISE</div>
            <h2 className="text-5xl lg:text-7xl font-headline font-bold text-on-surface leading-[0.9] tracking-tighter">
              Precision <span className="text-on-surface-variant">Engineering.</span>
            </h2>
          </div>
          <p className="text-on-surface-variant text-lg max-w-sm leading-relaxed font-sans">
            Our services are modular, scalable, and designed to integrate seamlessly into your existing business framework.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 border border-outline-variant hover:border-primary transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="material-symbols-outlined text-8xl">{service.icon}</span>
              </div>
              <div className="text-[10px] font-label font-bold text-primary uppercase tracking-[0.3em] mb-12">{service.tag}</div>
              <span className="material-symbols-outlined text-4xl text-on-surface mb-8 group-hover:text-primary transition-colors">{service.icon}</span>
              <h3 className="text-2xl font-headline font-bold mb-6 text-on-surface">{service.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-10">{service.desc}</p>
              <Link href="/services" className="inline-flex items-center gap-3 text-[10px] font-label font-bold uppercase tracking-widest text-on-surface group-hover:text-primary transition-colors">
                Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PortfolioPreview = () => {
  return (
    <section className="py-32 bg-surface-container-lowest modular-grid">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-24">
          <div className="text-primary font-label font-bold uppercase text-xs tracking-[0.3em] mb-6">SELECTED WORKS</div>
          <h2 className="text-5xl lg:text-7xl font-headline font-bold text-on-surface tracking-tighter">Architectural <span className="text-primary">Benchmarks.</span></h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div 
            whileHover={{ y: -10 }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-[16/10] overflow-hidden mb-8 border border-outline-variant">
              <Image 
                src="https://picsum.photos/seed/tech1/1200/800" 
                alt="Project 1" 
                fill 
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-on-surface/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <div className="text-[10px] font-label font-bold text-primary uppercase tracking-[0.3em] mb-2">FINTECH INFRASTRUCTURE</div>
                <h3 className="text-3xl font-headline font-bold text-on-surface">Global Ledger System</h3>
              </div>
              <span className="material-symbols-outlined text-3xl text-on-surface-variant group-hover:text-primary transition-colors">north_east</span>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -10 }}
            className="group cursor-pointer lg:mt-24"
          >
            <div className="relative aspect-[16/10] overflow-hidden mb-8 border border-outline-variant">
              <Image 
                src="https://picsum.photos/seed/tech2/1200/800" 
                alt="Project 2" 
                fill 
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-on-surface/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <div className="text-[10px] font-label font-bold text-primary uppercase tracking-[0.3em] mb-2">E-COMMERCE ECOSYSTEM</div>
                <h3 className="text-3xl font-headline font-bold text-on-surface">Omni-Channel Platform</h3>
              </div>
              <span className="material-symbols-outlined text-3xl text-on-surface-variant group-hover:text-primary transition-colors">north_east</span>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-24 text-center">
          <Link href="/portfolio" className="inline-flex items-center gap-4 bg-on-surface text-white px-12 py-5 rounded-none font-bold text-sm uppercase tracking-widest hover:bg-primary transition-all shadow-xl">
            View All Projects <span className="material-symbols-outlined">grid_view</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-40 bg-on-surface relative overflow-hidden">
      <div className="absolute inset-0 architectural-grid opacity-10"></div>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-6xl lg:text-9xl font-headline font-bold text-white mb-12 leading-[0.85] tracking-tighter">
            Build Your <br /> <span className="text-primary">Legacy.</span>
          </h2>
          <p className="text-outline-variant text-xl mb-16 max-w-2xl mx-auto leading-relaxed font-sans">
            Ready to architect your digital future? Connect with our senior partners for a strategic consultation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <Link href="/contact" className="bg-primary text-white px-16 py-6 rounded-none font-bold text-lg uppercase tracking-widest hover:bg-primary-dim shadow-2xl active:scale-95 transition-all">
              Request Consultation
            </Link>
            <Link href="/about" className="bg-transparent border border-outline-variant text-white px-16 py-6 rounded-none font-bold text-lg uppercase tracking-widest hover:bg-white/10 transition-all">
              Our Philosophy
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <Services />
      <PortfolioPreview />
      <CTA />
    </main>
  );
}
