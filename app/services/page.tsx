'use client';

import { motion } from 'framer-motion';
import { 
  Globe, 
  Megaphone, 
  Search, 
  Layout as LayoutIcon, 
  Smartphone, 
  Code, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Users
} from 'lucide-react';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: "Web Design & Development",
      desc: "High-performing, secure, and SEO-friendly websites tailored to your business goals.",
      icon: <Globe className="h-10 w-10" />,
      features: ["Custom UI/UX Design", "Responsive Layouts", "E-commerce Solutions", "CMS Integration"],
      color: "bg-blue-50",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGfYJlnGKuWELiIXwKRszIsdt9qixan4sgwlP8Q_JiFoFKCriKvMz2dJ_aYr8tjHIjav_2bZzQxU2XlCgOvcS5Jcnx8GrImpRZNjIfBgnUlsodrRiLHI21cIO8v186miQ2hrmvPZxlx26p_a4QTodyyKv91RNOjBFcV2lZ-mdR8TrQJ71M6sP7bhA42rchZFmUPlu5N1Q0GNremRVYdQjP5JOe8UYF9jFuy4-6NQ9ntR1Hj2OqH_pQqTbq3oh5j8k0lz2reYF5jns"
    },
    {
      title: "Digital Marketing",
      desc: "Complete digital marketing services to boost your brand visibility and reach.",
      icon: <Megaphone className="h-10 w-10" />,
      features: ["Social Media Marketing", "Content Strategy", "Email Campaigns", "PPC Management"],
      color: "bg-purple-50",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYTDV809-IuxOJAXWV6P0JfSdLb2CpYzAotr-1oyb4WrfWbR0svJdGXJ0PjZAtq7XaMyFwY60J89YYVYX0tnBQwIabxXqr8Egvm4IsaQQE415rB72lJAUjqMaNxqsnRVIbapyKCE-d42bdw0vfAuFx5Y0y3f1v7BdsZkMn-eycupwyOTjuSXPcjJigZVymhRZyXUrLABy8ompxKytX4bkDSIxqba0D3sP22z64G8KbrPRWTyUZtOKDNTt0Ai3wFMncsVp8Y1E6Q0U"
    },
    {
      title: "Search Engine Optimization",
      desc: "Improve your online visibility and rank higher on search engine result pages.",
      icon: <Search className="h-10 w-10" />,
      features: ["Keyword Research", "On-Page SEO", "Technical SEO Audits", "Link Building"],
      color: "bg-green-50",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfHR9fIBPUg5aXQJ7Gkk_aliSdeexwtAdOtfdLgY2srotRaN8j8Jv-NQUeScpCc7LlIr9YoXSE6nc18OwKqARefEMM0Ba6hQDRybFFcm2CoTZbShbwyuMRVHW8ifY7nNDUwaYGB1yYOjbHIrXgkDz0OLYU14fTgizc4JYr1pBZbRpXRo3yuBtVAhYDi4WrDIRtu-dFimQkUmGeGUsdVUVNn2Uyxd5miGZE9PgC2U8nBE1N_jAx7TlHI786vGa8I8PWo8ET3UVJTmY"
    },
    {
      title: "Graphics Designing",
      desc: "Creative visual solutions including images, typography, and motion graphics.",
      icon: <LayoutIcon className="h-10 w-10" />,
      features: ["Logo & Branding", "Marketing Collateral", "Social Media Graphics", "Print Design"],
      color: "bg-orange-50",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpm0-v_mrWKYWIF6B5kqWMl9e19w4oeHT-l9dAXBn4tJQdWd0_5F7kX1qswhKVSMe-1hLQbq6uScRVUoO3GaNoeRaCmsQd_bVefshv0K_x8HZAUFMCOwV3sEIjwFhhOk4CvsZ1U9zv3UcwyjPfdmksahYDhJK4gC-fnWm39CdLNtV2iVIQ56lT2V454bfK5JZb28Vei0bxf_6U3zDMMfVadjLjxsT9hv_AsnApSHZQVJFEP3kyqEfPRYkqh08DUTIsbbCkuwAdZ3s"
    },
    {
      title: "Mobile App Development",
      desc: "Intuitive and high-performance apps for iOS and Android platforms.",
      icon: <Smartphone className="h-10 w-10" />,
      features: ["Native iOS & Android", "Cross-Platform Apps", "App UI/UX Design", "App Store Optimization"],
      color: "bg-red-50",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQnFZ4Gs0Y0vqO2XjJfeMJPzZAe0bpyZkMDEYdw3yU5A-bEIHWpcJ0Vxq9e_g_TcXD83K3KOmzb6h9mxhiONGflSNyE1EIf31i5FmJcVvtFhVIUtERFH9JXoOvLlhVRxY9apUTEPJZ3smiTYW571N7sgkk4D5wmkoja6y_tG2DOwewxT2xIBKmtTdIaCMAzHLwj9RGVb3TCAIKbTmJ8x-bPM-t-GgviKMlG7rt6YchHYcaUKOA_sZJ15yi6N_-vSTwcNP2Idcm3nw"
    },
    {
      title: "Custom Development",
      desc: "High-quality custom software solutions that solve unique business challenges.",
      icon: <Code className="h-10 w-10" />,
      features: ["Enterprise Software", "API Integrations", "Legacy System Migration", "Cloud Solutions"],
      color: "bg-indigo-50",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgN8s5KBEzYkrfqlm3VJYjoxC8Znq23eAXUaai3txr9DdnABp7JyrgUFSJuPB-1KXNATjPiib4Uv0pmBp_s6d7zoEqQCnHjq4ZzFaRNpoM1Ps5mp-sSHi-qMeLMd5zmu2SjxqWa2oVsvxf4Bd3QaTc-0VKxicKNtOKoFDm5unndN26NYzJWHAtyUDCHuVR6jViIDAiiV2p7siskpI6Ow51hcddiNFkwJvtB1xlXcuY4cQJDYaT8NQ9OPq4PZgFDj7Zrg_8rR9RmVg"
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="bg-brand-gray/30 py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-brand-blue">Services</span>
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Comprehensive IT solutions designed to help your business grow and succeed in the digital landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 2) * 0.1 }}
              className="zoho-card p-10 group"
            >
              <div className="flex flex-col md:flex-row gap-10">
                <div className="flex-grow">
                  <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center text-brand-blue mb-8 group-hover:bg-brand-blue group-hover:text-white transition-all`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-brand-blue transition-colors">{service.title}</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {service.desc}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="h-4 w-4 text-brand-blue shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="inline-flex items-center gap-2 text-brand-blue font-bold hover:gap-3 transition-all">
                    Get Started <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className="md:w-40 shrink-0 flex items-center">
                  <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-zoho">
                    <img 
                      alt={service.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                      src={service.img}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-gray-400 text-lg">We deliver results that matter for your business.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "Expert Team", desc: "Our professionals are experts in their respective fields with years of experience.", icon: <Users className="h-10 w-10" /> },
              { title: "Quality Work", desc: "We maintain high standards of quality in every project we deliver.", icon: <ShieldCheck className="h-10 w-10" /> },
              { title: "Fast Delivery", desc: "We value your time and ensure timely delivery of all projects.", icon: <Zap className="h-10 w-10" /> }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-white/10 text-brand-blue">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
