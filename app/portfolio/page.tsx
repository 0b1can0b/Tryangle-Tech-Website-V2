'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Portfolio() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Websites Development', 'App Development', 'Software Development', 'Graphic Design'];

  const projects = [
    { 
      id: "1",
      title: "VH Accounting", 
      category: "Websites Development", 
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnJ3V0siux16JVj0qksUJXzwdSbx9vtKsXPbO2PjhiuL7QENbx0Du6HYGF0doG4OxmJyoenvuih-gNHzYKf-QFJnrafemdDAtDgTaewB2lTbIv7QDu0QxvRPxTI6wyu7ikbJpc2Khxv14HdcbSjr9INjXGCadVe-OW4OlWNnpjknu80YmpZu-uNOM3SELhiiy_aq3JK82gvf25giMyfhjC_tA2BJQoS7xsXjEMUcUyvusLIKWjmHe-duq7dE6_t5rHtCaS3UtU9B8" 
    },
    { 
      id: "2",
      title: "Varnet Enterprise", 
      category: "Websites Development", 
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuChzD5NduZGGY6EUK001xaTDwuui_mdS-m0qgIwXKlsA6-bJAWBdrOj0gWWFOYMAcHxhcXFnhNnsHjjqHb7zEGJztDISNZIS9a3DFIQDUGdFrZLtIYdy7_9pJCyyQWsC-v9ZBwbBd2oMdbZQEB4mpTfbf3wc8KJ6xfkritRGKkJca35ZiaIQ4BnpB6KLHrgS4qLb-mCrr4OCOEl3qLrU_uR8fLuPY-R2ccK9RLx-mrBbomL3HEUyzQccouSM8DB-etdnriXUUFIDbo" 
    },
    { 
      id: "3",
      title: "Secure Edge", 
      category: "Software Development", 
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQTMYBCLnpTzHZlagqeO-khy77hcqc81nPutnmFIJLxSobAKEZyxFn919v6JMTrqcDwBEjaj4APwXdU0dxnx-tAakdIanxoH40FbctbiHOZAimToNA2QOA3a4ydUU1aHnZ7T1JpQMo2idwc04bTcVNyYlfv8F7YnY2fvsOxP9tEj-TxYUWeKys2gY1r19Y-6l4GC5PAe3wkLmtKSR8Vt4rUd8B1Qs5vtvg3DEyGSJf9EoaodMHt2AAxsRjaGaf2PnkI9ZGuyc8fjI" 
    },
    { 
      id: "4",
      title: "Digital Hub", 
      category: "App Development", 
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQnFZ4Gs0Y0vqO2XjJfeMJPzZAe0bpyZkMDEYdw3yU5A-bEIHWpcJ0Vxq9e_g_TcXD83K3KOmzb6h9mxhiONGflSNyE1EIf31i5FmJcVvtFhVIUtERFH9JXoOvLlhVRxY9apUTEPJZ3smiTYW571N7sgkk4D5wmkoja6y_tG2DOwewxT2xIBKmtTdIaCMAzHLwj9RGVb3TCAIKbTmJ8x-bPM-t-GgviKMlG7rt6YchHYcaUKOA_sZJ15yi6N_-vSTwcNP2Idcm3nw" 
    },
    { 
      id: "5",
      title: "Creative Studio", 
      category: "Graphic Design", 
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpm0-v_mrWKYWIF6B5kqWMl9e19w4oeHT-l9dAXBn4tJQdWd0_5F7kX1qswhKVSMe-1hLQbq6uScRVUoO3GaNoeRaCmsQd_bVefshv0K_x8HZAUFMCOwV3sEIjwFhhOk4CvsZ1U9zv3UcwyjPfdmksahYDhJK4gC-fnWm39CdLNtV2iVIQ56lT2V454bfK5JZb28Vei0bxf_6U3zDMMfVadjLjxsT9hv_AsnApSHZQVJFEP3kyqEfPRYkqh08DUTIsbbCkuwAdZ3s" 
    },
    { 
      id: "6",
      title: "Tech Solutions", 
      category: "Software Development", 
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgN8s5KBEzYkrfqlm3VJYjoxC8Znq23eAXUaai3txr9DdnABp7JyrgUFSJuPB-1KXNATjPiib4Uv0pmBp_s6d7zoEqQCnHjq4ZzFaRNpoM1Ps5mp-sSHi-qMeLMd5zmu2SjxqWa2oVsvxf4Bd3QaTc-0VKxicKNtOKoFDm5unndN26NYzJWHAtyUDCHuVR6jViIDAiiV2p7siskpI6Ow51hcddiNFkwJvtB1xlXcuY4cQJDYaT8NQ9OPq4PZgFDj7Zrg_8rR9RmVg" 
    }
  ];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Header Section */}
      <section className="bg-white py-40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-zoho-bg-light -skew-x-12 translate-x-1/4 pointer-events-none" />
        <div className="absolute top-1/2 left-0 w-[1000px] h-[1000px] bg-zoho-blue/5 rounded-full blur-[180px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl"
          >
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-zoho-blue/10 border border-zoho-blue/20 text-zoho-blue text-[11px] font-black uppercase tracking-[0.3em] mb-12">
              Our Work
            </div>
            <h1 className="text-7xl lg:text-[110px] font-black text-zoho-dark mb-12 leading-[0.85] tracking-[-0.05em]">
              Our <span className="text-zoho-blue">Portfolio.</span>
            </h1>
            <p className="text-zoho-muted text-3xl leading-relaxed max-w-3xl font-medium">
              A showcase of our best work, delivering innovative solutions across various industries with precision and craft.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="pb-40 relative overflow-hidden">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-6 mb-24">
            {categories.map((cat, idx) => (
              <button 
                key={idx} 
                onClick={() => setFilter(cat)}
                className={`${filter === cat ? 'bg-zoho-blue text-white shadow-zoho-md' : 'bg-white text-zoho-muted hover:bg-zoho-bg-light border border-gray-100'} px-10 py-4 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-500`}
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
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden mb-8 shadow-zoho-lg group-hover:shadow-zoho-xl transition-all duration-700 border-8 border-white group-hover:rotate-2">
                    <img 
                      src={project.img} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125 grayscale group-hover:grayscale-0"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-zoho-blue/0 group-hover:bg-zoho-blue/10 transition-colors duration-700" />
                  </div>
                  <div className="text-[10px] font-black text-zoho-blue uppercase tracking-[0.3em] mb-4">{project.category}</div>
                  <h3 className="text-3xl font-black text-zoho-dark group-hover:text-zoho-blue transition-colors tracking-tight">{project.title}</h3>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-48 bg-zoho-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-[1000px] h-[1000px] bg-zoho-blue rounded-full blur-[200px] -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-6xl lg:text-[110px] font-black text-white mb-12 leading-[0.85] tracking-tighter">Ready to start <br /> your project?</h2>
          <p className="text-gray-400 text-3xl mb-20 max-w-3xl mx-auto leading-relaxed font-medium">
            Let's work together to build something amazing. Our team is ready to turn your vision into reality.
          </p>
          <Link href="/contact" className="bg-zoho-blue text-white px-20 py-7 rounded-[2rem] font-black text-2xl hover:bg-white hover:text-zoho-blue transition-all shadow-2xl hover:-translate-y-2 active:scale-95 inline-block">
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
}
