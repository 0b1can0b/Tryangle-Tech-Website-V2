'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Services() {
  const services = [
    {
      title: "Systems Engineering",
      desc: "We architect robust backend infrastructures designed for high-concurrency and absolute reliability. Our systems are the foundation of your digital scale.",
      icon: "settings_input_component",
      features: ["Microservices Architecture", "Real-time Data Processing", "API Ecosystem Design", "Legacy System Integration"],
      tag: "INFRASTRUCTURE"
    },
    {
      title: "Experience Design",
      desc: "Aesthetic interfaces that prioritize clarity, function, and emotional resonance. We build interfaces that are as beautiful as they are intuitive.",
      icon: "architecture",
      features: ["User Research & Strategy", "Architectural UI Design", "Interactive Prototyping", "Design System Governance"],
      tag: "INTERFACE"
    },
    {
      title: "Cloud Strategies",
      desc: "Scalable cloud solutions that optimize performance while minimizing overhead. We architect your cloud for maximum efficiency and security.",
      icon: "cloud_done",
      features: ["Multi-Cloud Orchestration", "Serverless Architectures", "Cloud Security Audits", "Performance Optimization"],
      tag: "DEPLOYMENT"
    },
    {
      title: "Data Intelligence",
      desc: "Advanced analytics and AI integration to drive architectural decision making. We turn your data into a strategic asset.",
      icon: "analytics",
      features: ["Predictive Modeling", "AI/ML Integration", "Data Warehouse Design", "Real-time Dashboards"],
      tag: "INSIGHTS"
    },
  ];

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
              <span className="text-xs font-label uppercase tracking-[0.3em] text-primary font-bold">OUR CAPABILITIES</span>
            </div>
            <h1 className="text-6xl lg:text-9xl font-headline font-bold text-on-surface mb-12 leading-[0.85] tracking-tighter">
              Precision <br />
              <span className="text-gradient">Engineering.</span>
            </h1>
            <p className="text-on-surface-variant text-2xl leading-relaxed max-w-3xl font-sans">
              We provide a comprehensive suite of architectural services designed to unify your digital ecosystem and streamline your operations with absolute precision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-40">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 2) * 0.1 }}
                className="p-16 border border-outline-variant hover:border-primary transition-all duration-700 group relative overflow-hidden bg-white"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <span className="material-symbols-outlined text-[12rem]">{service.icon}</span>
                </div>
                
                <div className="relative z-10">
                  <div className="text-[10px] font-label font-bold text-primary uppercase tracking-[0.4em] mb-12">{service.tag}</div>
                  <span className="material-symbols-outlined text-6xl text-on-surface mb-10 group-hover:text-primary transition-colors">{service.icon}</span>
                  <h3 className="text-4xl font-headline font-bold text-on-surface mb-8 group-hover:text-primary transition-colors tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-on-surface-variant text-xl mb-12 leading-relaxed font-sans max-w-xl">
                    {service.desc}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-6 mb-16">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-4 text-sm text-on-surface font-bold font-headline">
                        <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Link href="/contact" className="inline-flex items-center gap-4 text-[11px] font-label font-bold uppercase tracking-[0.3em] text-on-surface group-hover:text-primary transition-all">
                    Request Specification <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-40 bg-on-surface text-white relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-32">
            <div className="text-primary font-label font-bold uppercase text-xs tracking-[0.4em] mb-8">THE ADVANTAGE</div>
            <h2 className="text-6xl lg:text-9xl font-headline font-bold mb-12 tracking-tighter leading-[0.85]">Built for <br /> <span className="text-primary">Scale.</span></h2>
            <p className="text-outline-variant text-2xl max-w-3xl mx-auto leading-relaxed font-sans">Our architectural frameworks are designed to grow with you, from your first node to your ten-thousandth, with zero performance compromise.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-16">
            {[
              { title: "Unified Core", desc: "No more data silos. Every module shares the same architectural core for real-time accuracy and reporting.", icon: "hub" },
              { title: "Structural Security", desc: "Military-grade encryption and multi-factor authentication protect your sensitive data at every layer.", icon: "shield_lock" },
              { title: "Strategic Support", desc: "Our team of senior architects is available 24/7 to help you optimize your digital infrastructure.", icon: "support_agent" }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center group"
              >
                <div className="w-24 h-24 border border-white/10 flex items-center justify-center mx-auto mb-10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-700">
                  <span className="material-symbols-outlined text-4xl">{item.icon}</span>
                </div>
                <h4 className="text-3xl font-headline font-bold mb-6 tracking-tight">{item.title}</h4>
                <p className="text-outline-variant text-lg leading-relaxed font-sans">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
