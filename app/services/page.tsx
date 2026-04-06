'use client';

import { motion } from 'motion/react';
import { 
  Globe, 
  Megaphone, 
  Search, 
  Layout as LayoutIcon, 
  Smartphone, 
  Code, 
  CheckCircle2, 
  ArrowRight,
  Monitor,
  ShieldCheck,
  Zap,
  Users
} from 'lucide-react';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: "Web Design & Development",
      desc: "Tryangle Tech is a highly specialized team for website development and services. You will get high-performing, secure, and SEO-friendly websites tailored to your business goals.",
      icon: <Globe className="h-10 w-10" />,
      features: ["Custom UI/UX Design", "Responsive Layouts", "E-commerce Solutions", "CMS Integration"],
      color: "bg-blue-50",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGfYJlnGKuWELiIXwKRszIsdt9qixan4sgwlP8Q_JiFoFKCriKvMz2dJ_aYr8tjHIjav_2bZzQxU2XlCgOvcS5Jcnx8GrImpRZNjIfBgnUlsodrRiLHI21cIO8v186miQ2hrmvPZxlx26p_a4QTodyyKv91RNOjBFcV2lZ-mdR8TrQJ71M6sP7bhA42rchZFmUPlu5N1Q0GNremRVYdQjP5JOe8UYF9jFuy4-6NQ9ntR1Hj2OqH_pQqTbq3oh5j8k0lz2reYF5jns"
    },
    {
      title: "Digital Marketing",
      desc: "Tryangle Tech provides you with complete digital marketing services. It includes email & Content marketing to boost your brand visibility and reach your target audience effectively.",
      icon: <Megaphone className="h-10 w-10" />,
      features: ["Social Media Marketing", "Content Strategy", "Email Campaigns", "PPC Management"],
      color: "bg-purple-50",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYTDV809-IuxOJAXWV6P0JfSdLb2CpYzAotr-1oyb4WrfWbR0svJdGXJ0PjZAtq7XaMyFwY60J89YYVYX0tnBQwIabxXqr8Egvm4IsaQQE415rB72lJAUjqMaNxqsnRVIbapyKCE-d42bdw0vfAuFx5Y0y3f1v7BdsZkMn-eycupwyOTjuSXPcjJigZVymhRZyXUrLABy8ompxKytX4bkDSIxqba0D3sP22z64G8KbrPRWTyUZtOKDNTt0Ai3wFMncsVp8Y1E6Q0U"
    },
    {
      title: "Search Engine Optimization",
      desc: "SEO is important for online businesses as it provides companies with the visibility they require to attract customers and rank higher on search engine result pages.",
      icon: <Search className="h-10 w-10" />,
      features: ["Keyword Research", "On-Page SEO", "Technical SEO Audits", "Link Building"],
      color: "bg-green-50",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfHR9fIBPUg5aXQJ7Gkk_aliSdeexwtAdOtfdLgY2srotRaN8j8Jv-NQUeScpCc7LlIr9YoXSE6nc18OwKqARefEMM0Ba6hQDRybFFcm2CoTZbShbwyuMRVHW8ifY7nNDUwaYGB1yYOjbHIrXgkDz0OLYU14fTgizc4JYr1pBZbRpXRo3yuBtVAhYDi4WrDIRtu-dFimQkUmGeGUsdVUVNn2Uyxd5miGZE9PgC2U8nBE1N_jAx7TlHI786vGa8I8PWo8ET3UVJTmY"
    },
    {
      title: "Graphics Designing",
      desc: "A graphic designer is a professional within the graphic design and graphic arts industry who assembles together images, typography, or motion graphics to create a piece of design.",
      icon: <LayoutIcon className="h-10 w-10" />,
      features: ["Logo & Branding", "Marketing Collateral", "Social Media Graphics", "Print Design"],
      color: "bg-orange-50",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpm0-v_mrWKYWIF6B5kqWMl9e19w4oeHT-l9dAXBn4tJQdWd0_5F7kX1qswhKVSMe-1hLQbq6uScRVUoO3GaNoeRaCmsQd_bVefshv0K_x8HZAUFMCOwV3sEIjwFhhOk4CvsZ1U9zv3UcwyjPfdmksahYDhJK4gC-fnWm39CdLNtV2iVIQ56lT2V454bfK5JZb28Vei0bxf_6U3zDMMfVadjLjxsT9hv_AsnApSHZQVJFEP3kyqEfPRYkqh08DUTIsbbCkuwAdZ3s"
    },
    {
      title: "Mobile App Development",
      desc: "We are a Mobile App Design and Development Company in India working for brands across the globe. We create intuitive and high-performance apps for iOS and Android.",
      icon: <Smartphone className="h-10 w-10" />,
      features: ["Native iOS & Android", "Cross-Platform Apps", "App UI/UX Design", "App Store Optimization"],
      color: "bg-red-50",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQnFZ4Gs0Y0vqO2XjJfeMJPzZAe0bpyZkMDEYdw3yU5A-bEIHWpcJ0Vxq9e_g_TcXD83K3KOmzb6h9mxhiONGflSNyE1EIf31i5FmJcVvtFhVIUtERFH9JXoOvLlhVRxY9apUTEPJZ3smiTYW571N7sgkk4D5wmkoja6y_tG2DOwewxT2xIBKmtTdIaCMAzHLwj9RGVb3TCAIKbTmJ8x-bPM-t-GgviKMlG7rt6YchHYcaUKOA_sZJ15yi6N_-vSTwcNP2Idcm3nw"
    },
    {
      title: "Custom Development",
      desc: "Invent, integrate, build and upgrade your ideas with our services at Tryangle Tech. We help you to create high-quality custom software solutions that solve unique business challenges.",
      icon: <Code className="h-10 w-10" />,
      features: ["Enterprise Software", "API Integrations", "Legacy System Migration", "Cloud Solutions"],
      color: "bg-indigo-50",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgN8s5KBEzYkrfqlm3VJYjoxC8Znq23eAXUaai3txr9DdnABp7JyrgUFSJuPB-1KXNATjPiib4Uv0pmBp_s6d7zoEqQCnHjq4ZzFaRNpoM1Ps5mp-sSHi-qMeLMd5zmu2SjxqWa2oVsvxf4Bd3QaTc-0VKxicKNtOKoFDm5unndN26NYzJWHAtyUDCHuVR6jViIDAiiV2p7siskpI6Ow51hcddiNFkwJvtB1xlXcuY4cQJDYaT8NQ9OPq4PZgFDj7Zrg_8rR9RmVg"
    },
  ];

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
              Our Expertise
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-[1.1] text-balance">
              Comprehensive <span className="text-brand-blue">IT Solutions</span> <br />
              for Your Business
            </h1>
            <p className="text-gray-500 max-w-3xl mx-auto text-xl leading-relaxed">
              We offer a wide range of services to help you stay ahead in the digital world. From development to marketing, we've got you covered with precision and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 2) * 0.1 }}
              className="bg-white rounded-[2.5rem] p-10 lg:p-12 border border-gray-100 card-shadow-hover transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-bl-[5rem] -mr-10 -mt-10 group-hover:bg-brand-blue/10 transition-colors duration-500" />
              
              <div className="flex flex-col md:flex-row gap-12 relative z-10">
                <div className="flex-grow">
                  <div className={`w-20 h-20 ${service.color} rounded-3xl flex items-center justify-center text-brand-blue mb-10 group-hover:bg-brand-blue group-hover:text-white transition-all duration-500 shadow-sm`}>
                    {service.icon}
                  </div>
                  <h3 className="text-3xl font-bold mb-6 group-hover:text-brand-blue transition-colors">{service.title}</h3>
                  <p className="text-gray-500 mb-10 text-lg leading-relaxed">
                    {service.desc}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-3 text-base text-gray-700 font-medium">
                        <div className="w-6 h-6 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0">
                          <CheckCircle2 className="h-3.5 w-3.5 text-brand-blue" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="inline-flex items-center gap-3 text-brand-blue font-bold text-lg group-hover:gap-5 transition-all">
                    Get Started <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
                <div className="md:w-56 shrink-0 flex items-center">
                  <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-xl">
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
      <section className="bg-gray-900 py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-blue/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/4 h-full bg-brand-blue/5 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <div className="inline-block text-brand-blue font-bold text-xs tracking-[0.3em] mb-6 uppercase border-b-2 border-brand-blue/20 pb-2">
              Why Choose Us
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              We Deliver Results That <br /> <span className="text-brand-blue">Matter</span> for Your Business
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-16">
            {[
              { title: "Expert Team", desc: "Our professionals are experts in their respective fields with years of experience and a passion for innovation.", icon: <Users className="h-10 w-10" /> },
              { title: "Quality Work", desc: "We maintain high standards of quality in every project we deliver, ensuring robust and scalable solutions.", icon: <ShieldCheck className="h-10 w-10" /> },
              { title: "Fast Delivery", desc: "We value your time and ensure timely delivery of all projects without compromising on quality or detail.", icon: <Zap className="h-10 w-10" /> }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center group"
              >
                <div className="w-24 h-24 bg-white/5 rounded-3xl flex items-center justify-center mx-auto mb-10 border border-white/10 group-hover:bg-brand-blue group-hover:border-brand-blue transition-all duration-500 shadow-lg">
                  <div className="text-brand-blue group-hover:text-white transition-colors duration-500">
                    {item.icon}
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-white mb-6 group-hover:text-brand-blue transition-colors">{item.title}</h4>
                <p className="text-gray-400 text-lg leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
