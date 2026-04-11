'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="pt-48 pb-32 architectural-grid">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-3 mb-8">
              <span className="w-12 h-[1px] bg-primary"></span>
              <span className="text-xs font-label uppercase tracking-[0.3em] text-primary font-bold">THE FIRM</span>
            </div>
            <h1 className="text-6xl lg:text-9xl font-headline font-bold text-on-surface mb-12 leading-[0.85] tracking-tighter">
              Architecting <br />
              <span className="text-gradient">Digital Legacies.</span>
            </h1>
            <p className="text-on-surface-variant text-2xl leading-relaxed max-w-3xl font-sans">
              Since 2004, Tryangle Tech has been the silent architect behind Ahmedabad's most successful digital transformations. We don't just build software; we engineer the foundations of modern business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-on-surface text-white relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { label: "Active Nodes", value: "1.2M+", icon: "hub" },
              { label: "Global Reach", value: "150+", icon: "public" },
              { label: "Specialists", value: "500+", icon: "engineering" },
              { label: "Uptime Integrity", value: "99.99%", icon: "verified_user" },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <span className="material-symbols-outlined text-4xl text-primary mb-6">{stat.icon}</span>
                <div className="text-5xl lg:text-6xl font-headline font-bold mb-2 tracking-tighter">{stat.value}</div>
                <div className="text-[10px] font-label font-bold text-outline-variant uppercase tracking-[0.3em]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-40 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-primary font-label font-bold uppercase text-xs tracking-[0.3em] mb-8">OUR PHILOSOPHY</div>
              <h2 className="text-5xl lg:text-7xl font-headline font-bold text-on-surface mb-12 leading-[0.9] tracking-tighter">
                Structural <br /> <span className="text-primary">Integrity</span> in Code.
              </h2>
              <div className="space-y-8 text-on-surface-variant text-lg leading-relaxed font-sans">
                <p>
                  We believe that technology should be as enduring as great architecture. Our approach is rooted in the principles of modularity, scalability, and aesthetic precision.
                </p>
                <p>
                  Every line of code we write is a brick in a digital structure designed to withstand the pressures of growth and the evolution of the market. We don't chase trends; we build benchmarks.
                </p>
                <div className="p-10 border-l-4 border-primary bg-surface-container-lowest italic text-on-surface font-headline font-bold text-xl leading-relaxed">
                  "Our mission is to provide the architectural framework that allows businesses to scale without compromise."
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-[4/5] w-full max-w-lg mx-auto"
            >
              <div className="absolute inset-0 border-[15px] border-white shadow-2xl z-10 overflow-hidden">
                <Image 
                  alt="The Studio" 
                  fill
                  className="object-cover transition-all duration-1000" 
                  src="https://picsum.photos/seed/studio/800/1000"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary/10 -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-40 bg-surface-container-lowest modular-grid">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-24">
            <div className="max-w-2xl">
              <div className="text-primary font-label font-bold uppercase text-xs tracking-[0.3em] mb-6">THE BLUEPRINT</div>
              <h2 className="text-5xl lg:text-8xl font-headline font-bold text-on-surface leading-[0.85] tracking-tighter">Core <span className="text-primary">Principles.</span></h2>
            </div>
            <p className="text-on-surface-variant text-xl max-w-sm leading-relaxed font-sans">The architectural standards that define our work and our culture.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Privacy Protocol", desc: "Data security is not a feature; it is the foundation. We architect systems with zero-trust integrity.", icon: "security" },
              { title: "Client Alignment", desc: "We don't just work for you; we work with you. Our solutions are tailored to your unique structural needs.", icon: "handshake" },
              { title: "Iterative Excellence", desc: "We believe in continuous refinement. Every deployment is an opportunity to optimize and evolve.", icon: "auto_mode" }
            ].map((value, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-12 bg-white border border-outline-variant hover:border-primary transition-all duration-500 group"
              >
                <span className="material-symbols-outlined text-5xl text-on-surface mb-10 group-hover:text-primary transition-colors">{value.icon}</span>
                <h4 className="text-3xl font-headline font-bold text-on-surface mb-6 group-hover:text-primary transition-colors tracking-tight">{value.title}</h4>
                <p className="text-on-surface-variant text-base leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
