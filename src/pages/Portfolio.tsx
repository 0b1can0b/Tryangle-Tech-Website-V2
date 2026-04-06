import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Eye, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Websites Development', 'App Development', 'Software Development', 'Graphic Design'];

  const projects = [
    { 
      title: "VH ACCOUNTING", 
      category: "Websites Development", 
      color: "bg-blue-50", 
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnJ3V0siux16JVj0qksUJXzwdSbx9vtKsXPbO2PjhiuL7QENbx0Du6HYGF0doG4OxmJyoenvuih-gNHzYKf-QFJnrafemdDAtDgTaewB2lTbIv7QDu0QxvRPxTI6wyu7ikbJpc2Khxv14HdcbSjr9INjXGCadVe-OW4OlWNnpjknu80YmpZu-uNOM3SELhiiy_aq3JK82gvf25giMyfhjC_tA2BJQoS7xsXjEMUcUyvusLIKWjmHe-duq7dE6_t5rHtCaS3UtU9B8" 
    },
    { 
      title: "VARNET ENTERPRISE", 
      category: "Websites Development", 
      color: "bg-red-50", 
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuChzD5NduZGGY6EUK001xaTDwuui_mdS-m0qgIwXKlsA6-bJAWBdrOj0gWWFOYMAcHxhcXFnhNnsHjjqHb7zEGJztDISNZIS9a3DFIQDUGdFrZLtIYdy7_9pJCyyQWsC-v9ZBwbBd2oMdbZQEB4mpTfbf3wc8KJ6xfkritRGKkJca35ZiaIQ4BnpB6KLHrgS4qLb-mCrr4OCOEl3qLrU_uR8fLuPY-R2ccK9RLx-mrBbomL3HEUyzQccouSM8DB-etdnriXUUFIDbo" 
    },
    { 
      title: "SECURE EDGE", 
      category: "Software Development", 
      color: "bg-green-50", 
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQTMYBCLnpTzHZlagqeO-khy77hcqc81nPutnmFIJLxSobAKEZyxFn919v6JMTrqcDwBEjaj4APwXdU0dxnx-tAakdIanxoH40FbctbiHOZAimToNA2QOA3a4ydUU1aHnZ7T1JpQMo2idwc04bTcVNyYlfv8F7YnY2fvsOxP9tEj-TxYUWeKys2gY1r19Y-6l4GC5PAe3wkLmtKSR8Vt4rUd8B1Qs5vtvg3DEyGSJf9EoaodMHt2AAxsRjaGaf2PnkI9ZGuyc8fjI" 
    },
    { 
      title: "DIGITAL HUB", 
      category: "App Development", 
      color: "bg-purple-50", 
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQnFZ4Gs0Y0vqO2XjJfeMJPzZAe0bpyZkMDEYdw3yU5A-bEIHWpcJ0Vxq9e_g_TcXD83K3KOmzb6h9mxhiONGflSNyE1EIf31i5FmJcVvtFhVIUtERFH9JXoOvLlhVRxY9apUTEPJZ3smiTYW571N7sgkk4D5wmkoja6y_tG2DOwewxT2xIBKmtTdIaCMAzHLwj9RGVb3TCAIKbTmJ8x-bPM-t-GgviKMlG7rt6YchHYcaUKOA_sZJ15yi6N_-vSTwcNP2Idcm3nw" 
    },
    { 
      title: "CREATIVE STUDIO", 
      category: "Graphic Design", 
      color: "bg-orange-50", 
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpm0-v_mrWKYWIF6B5kqWMl9e19w4oeHT-l9dAXBn4tJQdWd0_5F7kX1qswhKVSMe-1hLQbq6uScRVUoO3GaNoeRaCmsQd_bVefshv0K_x8HZAUFMCOwV3sEIjwFhhOk4CvsZ1U9zv3UcwyjPfdmksahYDhJK4gC-fnWm39CdLNtV2iVIQ56lT2V454bfK5JZb28Vei0bxf_6U3zDMMfVadjLjxsT9hv_AsnApSHZQVJFEP3kyqEfPRYkqh08DUTIsbbCkuwAdZ3s" 
    },
    { 
      title: "TECH SOLUTIONS", 
      category: "Software Development", 
      color: "bg-indigo-50", 
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgN8s5KBEzYkrfqlm3VJYjoxC8Znq23eAXUaai3txr9DdnABp7JyrgUFSJuPB-1KXNATjPiib4Uv0pmBp_s6d7zoEqQCnHjq4ZzFaRNpoM1Ps5mp-sSHi-qMeLMd5zmu2SjxqWa2oVsvxf4Bd3QaTc-0VKxicKNtOKoFDm5unndN26NYzJWHAtyUDCHuVR6jViIDAiiV2p7siskpI6Ow51hcddiNFkwJvtB1xlXcuY4cQJDYaT8NQ9OPq4PZgFDj7Zrg_8rR9RmVg" 
    }
  ];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="pt-12 pb-24">
      {/* Header Section */}
      <section className="bg-gray-50 py-20 mb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-brand-blue font-semibold text-sm tracking-widest mb-4 uppercase">■ Our Portfolio ■</p>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Showcase of Our <br />
              <span className="text-brand-blue">Success Stories</span>
            </h1>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Explore our latest projects and see how we've helped businesses transform their digital presence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((cat, idx) => (
            <button 
              key={idx} 
              onClick={() => setFilter(cat)}
              className={`${filter === cat ? 'bg-brand-blue text-white' : 'border border-gray-200 text-gray-600 hover:bg-gray-50'} px-8 py-3 rounded-full text-sm font-medium transition duration-300`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div 
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="rounded-3xl overflow-hidden shadow-lg border border-gray-100 group bg-white"
              >
                <div className={`${project.color} p-8 flex flex-col items-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-10">
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-blue hover:scale-110 transition">
                      <Eye className="h-6 w-6" />
                    </button>
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-blue hover:scale-110 transition">
                      <ExternalLink className="h-6 w-6" />
                    </button>
                  </div>
                  <h4 className="font-bold text-xl mb-2">{project.title}</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-6">{project.category}</p>
                  <img 
                    alt={project.title} 
                    className="rounded-xl shadow-md group-hover:scale-105 transition-transform duration-500" 
                    src={project.img}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 flex justify-between items-center">
                  <div>
                    <h5 className="font-bold text-gray-800">{project.title}</h5>
                    <p className="text-sm text-gray-500">{project.category}</p>
                  </div>
                  <Link to="/contact" className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-colors">
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-gray-900 rounded-3xl p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-10 left-10 w-64 h-64 bg-brand-blue rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-64 h-64 bg-brand-blue rounded-full blur-3xl"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">Have a Project in Mind?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10 relative z-10">
            Let's work together to build something amazing. Our team is ready to turn your vision into reality.
          </p>
          <Link to="/contact" className="bg-brand-blue text-white px-10 py-4 rounded-full font-bold hover:bg-brand-dark transition relative z-10 inline-block">
            Start Your Project Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
