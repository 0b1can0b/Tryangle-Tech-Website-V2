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
      title: "Finance & Accounting",
      desc: "Manage your accounts, automate business workflows, and help you work collectively across departments.",
      icon: <Wallet className="h-10 w-10" />,
      features: ["Invoicing", "Expense Tracking", "Banking Integration", "Tax Compliance"],
      color: "text-zoho-blue",
      bgColor: "bg-zoho-blue/5",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGfYJlnGKuWELiIXwKRszIsdt9qixan4sgwlP8Q_JiFoFKCriKvMz2dJ_aYr8tjHIjav_2bZzQxU2XlCgOvcS5Jcnx8GrImpRZNjIfBgnUlsodrRiLHI21cIO8v186miQ2hrmvPZxlx26p_a4QTodyyKv91RNOjBFcV2lZ-mdR8TrQJ71M6sP7bhA42rchZFmUPlu5N1Q0GNremRVYdQjP5JOe8UYF9jFuy4-6NQ9ntR1Hj2OqH_pQqTbq3oh5j8k0lz2reYF5jns"
    },
    {
      title: "Inventory Management",
      desc: "An online inventory management software that helps you manage your orders and inventory.",
      icon: <Truck className="h-10 w-10" />,
      features: ["Stock Tracking", "Order Management", "Warehouse Control", "Multi-channel Sales"],
      color: "text-zoho-green",
      bgColor: "bg-zoho-green/5",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYTDV809-IuxOJAXWV6P0JfSdLb2CpYzAotr-1oyb4WrfWbR0svJdGXJ0PjZAtq7XaMyFwY60J89YYVYX0tnBQwIabxXqr8Egvm4IsaQQE415rB72lJAUjqMaNxqsnRVIbapyKCE-d42bdw0vfAuFx5Y0y3f1v7BdsZkMn-eycupwyOTjuSXPcjJigZVymhRZyXUrLABy8ompxKytX4bkDSIxqba0D3sP22z64G8KbrPRWTyUZtOKDNTt0Ai3wFMncsVp8Y1E6Q0U"
    },
    {
      title: "Human Resources",
      desc: "A cloud-based HR software that helps you manage your employees and their data.",
      icon: <Users className="h-10 w-10" />,
      features: ["Employee Database", "Attendance Tracking", "Payroll Management", "Performance Reviews"],
      color: "text-zoho-red",
      bgColor: "bg-zoho-red/5",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfHR9fIBPUg5aXQJ7Gkk_aliSdeexwtAdOtfdLgY2srotRaN8j8Jv-NQUeScpCc7LlIr9YoXSE6nc18OwKqARefEMM0Ba6hQDRybFFcm2CoTZbShbwyuMRVHW8ifY7nNDUwaYGB1yYOjbHIrXgkDz0OLYU14fTgizc4JYr1pBZbRpXRo3yuBtVAhYDi4WrDIRtu-dFimQkUmGeGUsdVUVNn2Uyxd5miGZE9PgC2U8nBE1N_jAx7TlHI786vGa8I8PWo8ET3UVJTmY"
    },
    {
      title: "Sales & CRM",
      desc: "Convert more leads, engage with customers, and grow your revenue with our CRM.",
      icon: <BarChart3 className="h-10 w-10" />,
      features: ["Lead Management", "Sales Forecasting", "Email Automation", "Customer Support"],
      color: "text-zoho-yellow",
      bgColor: "bg-zoho-yellow/5",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpm0-v_mrWKYWIF6B5kqWMl9e19w4oeHT-l9dAXBn4tJQdWd0_5F7kX1qswhKVSMe-1hLQbq6uScRVUoO3GaNoeRaCmsQd_bVefshv0K_x8HZAUFMCOwV3sEIjwFhhOk4CvsZ1U9zv3UcwyjPfdmksahYDhJK4gC-fnWm39CdLNtV2iVIQ56lT2V454bfK5JZb28Vei0bxf_6U3zDMMfVadjLjxsT9hv_AsnApSHZQVJFEP3kyqEfPRYkqh08DUTIsbbCkuwAdZ3s"
    },
    {
      title: "Manufacturing",
      desc: "Streamline your production processes and manage your manufacturing operations efficiently.",
      icon: <Cpu className="h-10 w-10" />,
      features: ["Bill of Materials", "Production Planning", "Quality Control", "Shop Floor Management"],
      color: "text-zoho-blue",
      bgColor: "bg-zoho-blue/5",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQnFZ4Gs0Y0vqO2XjJfeMJPzZAe0bpyZkMDEYdw3yU5A-bEIHWpcJ0Vxq9e_g_TcXD83K3KOmzb6h9mxhiONGflSNyE1EIf31i5FmJcVvtFhVIUtERFH9JXoOvLlhVRxY9apUTEPJZ3smiTYW571N7sgkk4D5wmkoja6y_tG2DOwewxT2xIBKmtTdIaCMAzHLwj9RGVb3TCAIKbTmJ8x-bPM-t-GgviKMlG7rt6YchHYcaUKOA_sZJ15yi6N_-vSTwcNP2Idcm3nw"
    },
    {
      title: "Project Management",
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
      <section className="bg-zoho-bg-light py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl lg:text-6xl font-black text-zoho-dark mb-6 leading-tight tracking-tighter">
              One Operating System <br />
              <span className="text-zoho-blue">For Your Entire Business.</span>
            </h1>
            <p className="text-zoho-muted text-xl leading-relaxed">
              Explore our comprehensive suite of modules designed to unify your departments and streamline your operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="section-padding">
        <div className="container-custom grid lg:grid-cols-2 gap-12">
          {modules.map((module, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 2) * 0.1 }}
              className="zoho-card p-10 group hover:border-zoho-blue/20 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-10">
                <div className="flex-grow">
                  <div className={`w-16 h-16 ${module.bgColor} ${module.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                    {module.icon}
                  </div>
                  <h3 className="text-2xl font-black text-zoho-dark mb-4 group-hover:text-zoho-blue transition-colors">
                    {module.title}
                  </h3>
                  <p className="text-zoho-muted mb-8 leading-relaxed">
                    {module.desc}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {module.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-sm text-zoho-muted font-medium">
                        <CheckCircle2 className="h-4 w-4 text-zoho-green shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="inline-flex items-center gap-2 text-zoho-blue font-black uppercase text-xs tracking-widest hover:gap-3 transition-all">
                    Explore Module <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className="md:w-40 shrink-0 flex items-center">
                  <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-zoho-sm border border-gray-100">
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
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-zoho-dark text-white">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black mb-6">Built for Scale</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Our platform is designed to grow with you, from your first employee to your ten-thousandth.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "Unified Data", desc: "No more data silos. Every module shares the same core database for real-time accuracy.", icon: <Cpu className="h-10 w-10" /> },
              { title: "Enterprise Security", desc: "Bank-grade encryption and multi-factor authentication protect your sensitive data.", icon: <ShieldCheck className="h-10 w-10" /> },
              { title: "Global Support", desc: "Our team of experts is available 24/7 to help you get the most out of our platform.", icon: <Users className="h-10 w-10" /> }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-white/10 text-zoho-blue">
                  {item.icon}
                </div>
                <h4 className="text-xl font-black mb-4">{item.title}</h4>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-zoho-blue text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl lg:text-5xl font-black mb-8">Ready to transform your business?</h2>
          <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto">Join over 50,000 companies that trust Tryangle ERP to run their operations.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-dark px-10 py-4 text-lg">
              Start Your Free Trial
            </Link>
            <Link href="/contact" className="bg-white text-zoho-blue font-black px-10 py-4 rounded-xl hover:bg-gray-100 transition-all text-lg">
              Schedule a Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
