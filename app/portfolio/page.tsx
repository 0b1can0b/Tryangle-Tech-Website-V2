'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Portfolio() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Systems Engineering', 'Experience Design', 'Cloud Strategies', 'Data Intelligence'];

  const projects = [
    { 
      id: "1",
      title: "VH Accounting Core", 
      category: "Systems Engineering", 
      img: "https://picsum.photos/seed/accounting/800/600" 
    },
    { 
      id: "2",
      title: "Varnet Enterprise UI", 
      category: "Experience Design", 
      img: "https://picsum.photos/seed/enterprise/800/600" 
    },
    { 
      id: "3",
      title: "Secure Edge Cloud", 
      category: "Cloud Strategies", 
      img: "https://picsum.photos/seed/secure/800/600" 
    },
    { 
      id: "4",
      title: "Digital Hub Analytics", 
      category: "Data Intelligence", 
      img: "https://picsum.photos/seed/hub/800/600" 
    },
    { 
      id: "5",
      title: "Creative Studio Platform", 
      category: "Experience Design", 
      img: "https://picsum.photos/seed/creative/800/600" 
    },
    { 
      id: "6",
      title: "Tech Solutions Infrastructure", 
      category: "Systems Engineering", 
      img: "https://picsum.photos/seed/tech/800/600" 
    }
  ];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

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
              <span className="text-xs font-label uppercase tracking-[0.3em] text-primary font-bold">THE ARCHIVE</span>
            </div>
            <h1 className="text-6xl lg:text-9xl font-headline font-bold text-on-surface mb-12 leading-[0.85] tracking-tighter">
              Selected <br />
              <span className="text-gradient">Projects.</span>
            </h1>
            <p className="text-on-surface-variant text-2xl leading-relaxed max-w-3xl font-sans">
              A curated collection of our most complex architectural challenges and the digital solutions we engineered to solve them.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="pb-40">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap gap-4 mb-24 border-b border-outline-variant pb-8">
            {categories.map((cat, idx) => (
              <button 
                key={idx} 
                onClick={() => setFilter(cat)}
                className={`${filter === cat ? 'text-primary' : 'text-on-surface-variant hover:text-on-surface'} text-[11px] font-label font-bold uppercase tracking-[0.2em] transition-all duration-300 relative py-2`}
              >
                {cat}
                {filter === cat && (
                  <motion.div 
                    layoutId="activeFilter"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-12"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div 
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6 }}
                  className="group"
                >
                  <div className="relative aspect-[4/3] overflow-hidden mb-8 border border-outline-variant group-hover:border-primary transition-colors duration-500">
                    <Image 
                      src={project.img} 
                      alt={project.title} 
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-on-surface/0 group-hover:bg-on-surface/10 transition-colors duration-500" />
                  </div>
                  <div className="text-[10px] font-label font-bold text-primary uppercase tracking-[0.3em] mb-4">{project.category}</div>
                  <h3 className="text-3xl font-headline font-bold text-on-surface group-hover:text-primary transition-colors tracking-tight">{project.title}</h3>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 bg-on-surface text-white relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10 text-center">
          <h2 className="text-6xl lg:text-9xl font-headline font-bold mb-12 leading-[0.85] tracking-tighter">Ready to build <br /> your legacy?</h2>
          <p className="text-outline-variant text-2xl mb-20 max-w-3xl mx-auto leading-relaxed font-sans">
            Let's collaborate to engineer a digital structure that defines your industry.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-6 px-12 py-6 bg-primary text-white font-label font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-primary transition-all duration-500">
            Initiate Project <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
