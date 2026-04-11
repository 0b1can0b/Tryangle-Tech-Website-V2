'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Users,
  BarChart3,
  Wallet,
  Truck,
  Building2,
  Cpu,
  LayoutDashboard
} from 'lucide-react';
import Link from 'next/link';

export default function Services() {
  const modules = [
    {
      title: "Finance",
      desc: "Manage your accounts, automate business workflows, and help you work collectively across departments.",
      icon: <Wallet className="h-10 w-10" />,
      features: ["Invoicing", "Expense Tracking", "Banking Integration", "Tax Compliance"],
      color: "text-zoho-blue",
      bgColor: "bg-zoho-blue/5",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGfYJlnGKuWELiIXwKRszIsdt9qixan4sgwlP8Q_JiFoFKCriKvMz2dJ_aYr8tjHIjav_2bZzQxU2XlCgOvcS5Jcnx8GrImpRZNjIfBgnUlsodrRiLHI21cIO8v186miQ2hrmvPZxlx26p_a4QTodyyKv91RNOjBFcV2lZ-mdR8TrQJ71M6sP7bhA42rchZFmUPlu5N1Q0GNremRVYdQjP5JOe8UYF9jFuy4-6NQ9ntR1Hj2OqH_pQqTbq3oh5j8k0lz2reYF5jns"
    },
    {
      title: "Inventory",
      desc: "An online inventory management software that helps you manage your orders and inventory.",
      icon: <Truck className="h-10 w-10" />,
      features: ["Stock Tracking", "Order Management", "Warehouse Control", "Multi-channel Sales"],
      color: "text-zoho-green",
      bgColor: "bg-zoho-green/5",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYTDV809-IuxOJAXWV6P0JfSdLb2CpYzAotr-1oyb4WrfWbR0svJdGXJ0PjZAtq7XaMyFwY60J89YYVYX0tnBQwIabxXqr8Egvm4IsaQQE415rB72lJAUjqMaNxqsnRVIbapyKCE-d42bdw0vfAuFx5Y0y3f1v7BdsZkMn-eycupwyOTjuSXPcjJigZVymhRZyXUrLABy8ompxKytX4bkDSIxqba0D3sP22z64G8KbrPRWTyUZtOKDNTt0Ai3wFMncsVp8Y1E6Q0U"
    },
    {
      title: "HR & People",
      desc: "A cloud-based HR software that helps you manage your employees and their data.",
      icon: <Users className="h-10 w-10" />,
      features: ["Employee Database", "Attendance Tracking", "Payroll Management", "Performance Reviews"],
      color: "text-zoho-red",
      bgColor: "bg-zoho-red/5",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfHR9fIBPUg5aXQJ7Gkk_aliSdeexwtAdOtfdLgY2srotRaN8j8Jv-NQUeScpCc7LlIr9YoXSE6nc18OwKqARefEMM0Ba6hQDRybFFcm2CoTZbShbwyuMRVHW8ifY7nNDUwaYGB1yYOjbHIrXgkDz0OLYU14fTgizc4JYr1pBZbRpXRo3yuBtVAhYDi4WrDIRtu-dFimQkUmGeGUsdVUVNn2Uyxd5miGZE9PgC2U8nBE1N_jAx7TlHI786vGa8I8PWo8ET3UVJTmY"
    },
    {
      title: "Sales CRM",
      desc: "Convert more leads, engage with customers, and grow your revenue with our CRM.",
      icon: <BarChart3 className="h-10 w-10" />,
      features: ["Lead Management", "Sales Forecasting", "Email Automation", "Customer Support"],
      color: "text-zoho-yellow",
      bgColor: "bg-zoho-yellow/5",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpm0-v_mrWKYWIF6B5kqWMl9e19w4oeHT-l9dAXBn4tJQdWd0_5F7kX1qswhKVSMe-1hLQbq6uScRVUoO3GaNoeRaCmsQd_bVefshv0K_x8HZAUFMCOwV3sEIjwFhhOk4CvsZ1U9zv3UcwyjPfdmksahYDhJK4gC-fnWm39CdLNtV2iVIQ56lT2V454bfK5JZb28Vei0bxf_6U3zDMMfVadjLjxsT9hv_AsnApSHZQVJFEP3kyqEfPRYkqh08DUTIsbbCkuwAdZ3s"
    },
    {
      title: "Operations",
      desc: "Streamline your production processes and manage your manufacturing operations efficiently.",
      icon: <Cpu className="h-10 w-10" />,
      features: ["Bill of Materials", "Production Planning", "Quality Control", "Shop Floor Management"],
      color: "text-zoho-blue",
      bgColor: "bg-zoho-blue/5",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQnFZ4Gs0Y0vqO2XjJfeMJPzZAe0bpyZkMDEYdw3yU5A-bEIHWpcJ0Vxq9e_g_TcXD83K3KOmzb6h9mxhiONGflSNyE1EIf31i5FmJcVvtFhVIUtERFH9JXoOvLlhVRxY9apUTEPJZ3smiTYW571N7sgkk4D5wmkoja6y_tG2DOwewxT2xIBKmtTdIaCMAzHLwj9RGVb3TCAIKbTmJ8x-bPM-t-GgviKMlG7rt6YchHYcaUKOA_sZJ15yi6N_-vSTwcNP2Idcm3nw"
    },
    {
      title: "Projects",
      desc: "Plan, track, and collaborate on projects across teams with ease.",
      icon: <LayoutDashboard className="h-10 w-10" />,
      features: ["Task Management", "Time Tracking", "Gantt Charts", "Resource Allocation"],
      color: "text-zoho-dark",
      bgColor: "bg-zoho-dark/5",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgN8s5KBEzYkrfqlm3VJYjoxC8Znq23eAXUaai3txr9DdnABp7JyrgUFSJuPB-1KXNATjPiib4Uv0pmBp_s6d7zoEqQCnHjq4ZzFaRNpoM1Ps5mp-sSHi-qMeLMd5zmu2SjxqWa2oVsvxf4Bd3QaTc-0VKxicKNtOKoFDm5unndN26NYzJWHAtyUDCHuVR6jViIDAiiV2p7siskpI6Ow51hcddiNFkwJvtB1xlXcuY4cQJDYaT8NQ9OPq4PZgFDj7Zrg_8rR9RmVg"
    },
  ];

  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Header Section */}
      <section className="bg-white py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-zoho-bg-light -skew-x-12 translate-x-1/4 pointer-events-none" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zoho-blue/10 border border-zoho-blue/10 text-zoho-blue text-[10px] font-black uppercase tracking-widest mb-10">
              The Ecosystem
            </div>
            <h1 className="text-6xl lg:text-8xl font-black text-zoho-dark mb-10 leading-[0.9] tracking-tighter">
              One Operating System <br />
              <span className="text-zoho-blue">For Everything.</span>
            </h1>
            <p className="text-zoho-muted text-2xl leading-relaxed max-w-2xl font-medium">
              Explore our comprehensive suite of modules designed to unify your departments and streamline your operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="section-padding relative overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {modules.map((module, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 2) * 0.1 }}
                className="zoho-card p-12 group hover:border-zoho-blue/20 transition-all duration-500 relative overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 ${module.bgColor} opacity-5 -translate-y-1/2 translate-x-1/2 rounded-full group-hover:scale-150 transition-transform duration-700`} />
                
                <div className="flex flex-col md:flex-row gap-12 relative z-10">
                  <div className="flex-grow">
                    <div className={`w-20 h-20 ${module.bgColor} ${module.color} rounded-[2rem] flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500 shadow-zoho-sm`}>
                      {module.icon}
                    </div>
                    <h3 className="text-3xl font-black text-zoho-dark mb-6 group-hover:text-zoho-blue transition-colors">
                      {module.title}
                    </h3>
                    <p className="text-zoho-muted text-lg mb-10 leading-relaxed font-medium">
                      {module.desc}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                      {module.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-3 text-sm text-zoho-muted font-bold">
                          <CheckCircle2 className="h-4 w-4 text-zoho-green shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact" className="inline-flex items-center gap-3 text-zoho-blue font-black uppercase text-xs tracking-widest group-hover:gap-5 transition-all">
                      Explore Module <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                  <div className="md:w-48 shrink-0 flex items-center">
                    <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden shadow-zoho-lg border-4 border-white">
                      <img 
                        alt={module.title} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                        src={module.img}
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-zoho-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-zoho-blue rounded-full blur-[150px] translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-24">
            <div className="text-zoho-blue font-black uppercase text-xs tracking-widest mb-4">The Advantage</div>
            <h2 className="text-5xl lg:text-7xl font-black mb-8 tracking-tighter leading-[0.9]">Built for <br /> <span className="text-zoho-blue">Scale.</span></h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed font-medium">Our platform is designed to grow with you, from your first employee to your ten-thousandth.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-16">
            {[
              { title: "Unified Data", desc: "No more data silos. Every module shares the same core database for real-time accuracy.", icon: <Cpu className="h-10 w-10" /> },
              { title: "Enterprise Security", desc: "Bank-grade encryption and multi-factor authentication protect your sensitive data.", icon: <ShieldCheck className="h-10 w-10" /> },
              { title: "Global Support", desc: "Our team of experts is available 24/7 to help you get the most out of our platform.", icon: <Users className="h-10 w-10" /> }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center group"
              >
                <div className="w-24 h-24 bg-white/5 rounded-[2rem] flex items-center justify-center mx-auto mb-10 border border-white/10 text-zoho-blue group-hover:bg-zoho-blue group-hover:text-white transition-all duration-500">
                  {item.icon}
                </div>
                <h4 className="text-2xl font-black mb-6 tracking-tight">{item.title}</h4>
                <p className="text-gray-400 text-lg leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-zoho-blue relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-white rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-5xl lg:text-7xl font-black text-white mb-10 leading-[0.9] tracking-tighter">Ready to transform <br /> your business?</h2>
          <p className="text-white/80 text-2xl mb-16 max-w-2xl mx-auto leading-relaxed font-medium">Join over 50,000 companies that trust Tryangle ERP to run their operations.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="bg-zoho-dark text-white px-14 py-6 rounded-2xl font-black text-xl hover:bg-zoho-dark/90 transition-all shadow-2xl hover:-translate-y-1 active:scale-95">
              Start Free Trial
            </Link>
            <Link href="/contact" className="bg-white text-zoho-blue px-14 py-6 rounded-2xl font-black text-xl hover:bg-gray-50 transition-all shadow-2xl hover:-translate-y-1 active:scale-95">
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
