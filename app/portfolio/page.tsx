'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Eye, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Portfolio() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Websites Development', 'App Development', 'Software Development', 'Graphic Design'];

  const projects = [
    { 
      id: "1",
      title: "VH ACCOUNTING", 
      category: "Websites Development", 
      color: "bg-blue-50", 
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnJ3V0siux16JVj0qksUJXzwdSbx9vtKsXPbO2PjhiuL7QENbx0Du6HYGF0doG4OxmJyoenvuih-gNHzYKf-QFJnrafemdDAtDgTaewB2lTbIv7QDu0QxvRPxTI6wyu7ikbJpc2Khxv14HdcbSjr9INjXGCadVe-OW4OlWNnpjknu80YmpZu-uNOM3SELhiiy_aq3JK82gvf25giMyfhjC_tA2BJQoS7xsXjEMUcUyvusLIKWjmHe-duq7dE6_t5rHtCaS3UtU9B8" 
    },
    { 
      id: "2",
      title: "VARNET ENTERPRISE", 
      category: "Websites Development", 
      color: "bg-red-50", 
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuChzD5NduZGGY6EUK001xaTDwuui_mdS-m0qgIwXKlsA6-bJAWBdrOj0gWWFOYMAcHxhcXFnhNnsHjjqHb7zEGJztDISNZIS9a3DFIQDUGdFrZLtIYdy7_9pJCyyQWsC-v9ZBwbBd2oMdbZQEB4mpTfbf3wc8KJ6xfkritRGKkJca35ZiaIQ4BnpB6KLHrgS4qLb-mCrr4OCOEl3qLrU_uR8fLuPY-R2ccK9RLx-mrBbomL3HEUyzQccouSM8DB-etdnriXUUFIDbo" 
    },
    { 
      id: "3",
      title: "SECURE EDGE", 
      category: "Software Development", 
      color: "bg-green-50", 
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQTMYBCLnpTzHZlagqeO-khy77hcqc81nPutnmFIJLxSobAKEZyxFn919v6JMTrqcDwBEjaj4APwXdU0dxnx-tAakdIanxoH40FbctbiHOZAimToNA2QOA3a4ydUU1aHnZ7T1JpQMo2idwc04bTcVNyYlfv8F7YnY2fvsOxP9tEj-TxYUWeKys2gY1r19Y-6l4GC5PAe3wkLmtKSR8Vt4rUd8B1Qs5vtvg3DEyGSJf9EoaodMHt2AAxsRjaGaf2PnkI9ZGuyc8fjI" 
    },
    { 
      id: "4",
      title: "DIGITAL HUB", 
      category: "App Development", 
      color: "bg-purple-50", 
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQnFZ4Gs0Y0vqO2XjJfeMJPzZAe0bpyZkMDEYdw3yU5A-bEIHWpcJ0Vxq9e_g_TcXD83K3KOmzb6h9mxhiONGflSNyE1EIf31i5FmJcVvtFhVIUtERFH9JXoOvLlhVRxY9apUTEPJZ3smiTYW571N7sgkk4D5wmkoja6y_tG2DOwewxT2xIBKmtTdIaCMAzHLwj9RGVb3TCAIKbTmJ8x-bPM-t-GgviKMlG7rt6YchHYcaUKOA_sZJ15yi6N_-vSTwcNP2Idcm3nw" 
    },
    { 
      id: "5",
      title: "CREATIVE STUDIO", 
      category: "Graphic Design", 
      color: "bg-orange-50", 
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpm0-v_mrWKYWIF6B5kqWMl9e19w4oeHT-l9dAXBn4tJQdWd0_5F7kX1qswhKVSMe-1hLQbq6uScRVUoO3GaNoeRaCmsQd_bVefshv0K_x8HZAUFMCOwV3sEIjwFhhOk4CvsZ1U9zv3UcwyjPfdmksahYDhJK4gC-fnWm39CdLNtV2iVIQ56lT2V454bfK5JZb28Vei0bxf_6U3zDMMfVadjLjxsT9hv_AsnApSHZQVJFEP3kyqEfPRYkqh08DUTIsbbCkuwAdZ3s" 
    },
    { 
      id: "6",
      title: "TECH SOLUTIONS", 
      category: "Software Development", 
      color: "bg-indigo-50", 
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgN8s5KBEzYkrfqlm3VJYjoxC8Znq23eAXUaai3txr9DdnABp7JyrgUFSJuPB-1KXNATjPiib4Uv0pmBp_s6d7zoEqQCnHjq4ZzFaRNpoM1Ps5mp-sSHi-qMeLMd5zmu2SjxqWa2oVsvxf4Bd3QaTc-0VKxicKNtOKoFDm5unndN26NYzJWHAtyUDCHuVR6jViIDAiiV2p7siskpI6Ow51hcddiNFkwJvtB1xlXcuY4cQJDYaT8NQ9OPq4PZgFDj7Zrg_8rR9RmVg" 
    }
  ];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="pb-32">
      {/* Header Section */}
      <section className="relative py-32 overflow-hidden bg-gray-50/50">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/5 -skew-x-12 translate-x-1/4 pointer-events-none" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block text-brand-blue font-bold text-xs tracking-[0.3em] mb-8 uppercase border-b-2 border-brand-blue/20 pb-2">
              Our Portfolio
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-[1.1] text-balance">
              Showcase of Our <br />
              <span className="text-brand-blue">Success Stories</span>
            </h1>
            <p className="text-gray-500 max-w-3xl mx-auto text-xl leading-relaxed">
              Explore our latest projects and see how we've helped businesses transform their digital presence with precision and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            {categories.map((cat, idx) => (
              <button 
                key={idx} 
                onClick={() => setFilter(cat)}
                className={`${filter === cat ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/20' : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-100'} px-10 py-4 rounded-full text-sm font-bold transition-all duration-300`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-12"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <motion.div 
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="group"
                >
                  <div className="bg-white rounded-[2.5rem] overflow-hidden card-shadow-hover transition-all duration-500 border border-gray-100 h-full flex flex-col">
                    <div className={`relative overflow-hidden aspect-[4/3] ${project.color} p-10 flex items-center justify-center`}>
                      <div className="absolute inset-0 bg-brand-blue/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-6 z-20 backdrop-blur-sm">
                        <button className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand-blue hover:scale-110 transition-transform shadow-xl">
                          <Eye className="h-6 w-6" />
                        </button>
                        <button className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand-blue hover:scale-110 transition-transform shadow-xl">
                          <ExternalLink className="h-6 w-6" />
                        </button>
                      </div>
                      <img 
                        alt={project.title} 
                        className="w-full h-full object-contain rounded-2xl shadow-2xl group-hover:scale-110 transition-transform duration-700" 
                        src={project.img}
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-10 flex-grow flex flex-col">
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <div className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.2em] mb-3">
                            {project.category}
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-brand-blue transition-colors leading-tight">
                            {project.title}
                          </h3>
                        </div>
                        <Link href="/contact" className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-all duration-500 group-hover:rotate-45">
                          <ArrowRight className="h-6 w-6" />
                        </Link>
                      </div>
                      <p className="text-gray-500 text-base leading-relaxed line-clamp-2 mb-8">
                        Delivering high-quality {project.category.toLowerCase()} solutions tailored to client needs.
                      </p>
                      <div className="mt-auto pt-8 border-t border-gray-50 flex items-center gap-4">
                        <div className="flex -space-x-3">
                          {[1,2,3].map(i => (
                            <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 overflow-hidden">
                              <img src={`https://i.pravatar.cc/100?u=${project.id}${i}`} alt="User" referrerPolicy="no-referrer" />
                            </div>
                          ))}
                        </div>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                          Client Satisfaction 100%
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-gray-900 rounded-[3rem] p-16 lg:p-24 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue rounded-full blur-[120px]"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue rounded-full blur-[120px]"></div>
          </div>
          <motion.div
            initial={{ y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="relative z-10"
          >
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">Have a Project in Mind?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-xl leading-relaxed">
              Let's work together to build something amazing. Our team is ready to turn your vision into reality with cutting-edge technology.
            </p>
            <Link href="/contact" className="bg-brand-blue text-white px-12 py-5 rounded-2xl font-bold hover:bg-brand-blue/90 hover:scale-105 transition-all duration-300 shadow-xl shadow-brand-blue/20 inline-block text-lg">
              Start Your Project Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
