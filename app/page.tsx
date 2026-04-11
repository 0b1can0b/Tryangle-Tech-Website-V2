'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, 
  ArrowRight, 
  Globe,
  Search,
  Layout as LayoutIcon,
  Smartphone,
  Code,
  Megaphone,
  Award,
  Users,
  Star,
  Shield,
  Zap,
  BarChart3,
  RefreshCw,
  Cpu
} from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-zoho-bg-light">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white -skew-x-12 translate-x-1/4 pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-zoho-blue/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zoho-blue/10 border border-zoho-blue/10 text-zoho-blue text-xs font-black uppercase tracking-widest mb-8">
              <Zap className="h-3 w-3 fill-zoho-blue" />
              Next-Gen Enterprise Resource Planning
            </div>
            <h1 className="text-5xl lg:text-7xl font-black mb-8 leading-[1.05] text-zoho-dark tracking-tighter">
              One Operating System for <br />
              <span className="text-zoho-blue">Your Entire Business.</span>
            </h1>
            <p className="text-zoho-muted text-xl mb-10 leading-relaxed max-w-xl">
              Unify your business operations with a single, comprehensive ERP solution. From finance and HR to supply chain and sales—manage it all from one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary text-lg px-10">
                Start Your Free Trial
              </Link>
              <Link href="/services" className="btn-secondary text-lg px-10">
                Watch Demo Video
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-zoho-muted font-medium">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-zoho-green" /> No credit card required
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-zoho-green" /> 15-day free trial
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-zoho-lg border border-gray-100 bg-white p-3">
              <img 
                alt="Zoho ERP Dashboard" 
                className="w-full h-auto rounded-xl" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGfYJlnGKuWELiIXwKRszIsdt9qixan4sgwlP8Q_JiFoFKCriKvMz2dJ_aYr8tjHIjav_2bZzQxU2XlCgOvcS5Jcnx8GrImpRZNjIfBgnUlsodrRiLHI21cIO8v186miQ2hrmvPZxlx26p_a4QTodyyKv91RNOjBFcV2lZ-mdR8TrQJ71M6sP7bhA42rchZFmUPlu5N1Q0GNremRVYdQjP5JOe8UYF9jFuy4-6NQ9ntR1Hj2OqH_pQqTbq3oh5j8k0lz2reYF5jns"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Floating Status Cards */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 bg-white p-6 rounded-2xl shadow-zoho-lg border border-gray-50 z-20 hidden xl:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-zoho-green/10 rounded-xl flex items-center justify-center text-zoho-green">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm font-black text-zoho-dark">+24% Revenue</div>
                  <div className="text-xs text-zoho-muted">Vs last quarter</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-zoho-lg border border-gray-50 z-20 hidden xl:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-zoho-blue/10 rounded-xl flex items-center justify-center text-zoho-blue">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm font-black text-zoho-dark">12 New Leads</div>
                  <div className="text-xs text-zoho-muted">Just synchronized</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Partners = () => {
  const partners = [
    { name: "Patel Associates", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJ35-6QC-U8lRN5ktrRxfK847stohuh7wRmiiAlQXaSKtxjb1ukies1BXWSyfWqqHDluWh1nkFH-k1MQPYQkdsSCHadnUNLWt7RAiGMlTKN_JYn87jWvwNXvTFekp5SkfDP03EtbBK7mjVdeWgzyokrcjmSoNlpwt1UlSv7UN8SiK8JdFKel5kw1Th1-TKoAF0csvbzmwam270VDDxq_bPnTv90OZg2--JmvMed5p-XzptwQ966NvmMWE53iruRT6MzV7vac2XOgk" },
    { name: "Evon", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCWUsGOUcEJrDJOA7985S6NwfnPC6f-5igyjwClZvmE52_xbZhBVFA0KxLHXqFgML6GTlqPLNmq8tU1UGOU7JcI9GiT-XEnIUb5U9lTknosttCGSo-NR0qqcre2BaeWyseePW0RsFNXcrN8lGk6WcJT0q3VdvnhudP-fqx6MhSdf-wpcSSXnRs6N1m36t1wwimkV69jGSgGCK3RxEq6uviRS5BBZQR5knkqcLbe5ISOO2g0hBNHnDXBu_oi08TF9vlyruPNEKI3-MA" },
    { name: "Toestrand", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnm4fDL00GqVVQ9zmPFtg1gfvl6JU2y_Z0UKenFm7Fgf4m3sRSnw3ba0EgqV_hIG62LhdoYYnHcMAaA5Oxju29Ah3AGaRR9_MfShdPMbnOfLcsj9YYnEByvhY74Mbf5y23fKVNxstq-Ic_xfbDobIex57X7_MhzIGjdauteOFipJVwPDkVJggNOQuEhlAR2CYkE1RuSj8umudN794d5CLPe2L3WXgZl2otI58gZW3M5Dsc9zMLfdfljLrjGh2shKQNnFpH6FMPDsg" },
    { name: "AquaFinest", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCAxm0ZJgrq7p2SLyMEna-uFEp51hdZIOqRJdr0h0ICViAVlLOs_aFR_d6lkUiaKhCOZMw6BZ7meUWTfiQDTWBaOfJkZ9YW3Picu0Ymjjzg3pzaldahLbs_dF9WhhnVoGJ8gfOFfUXblGSOG8uUOtINnANVzalnuonW70IQm-MPa3AgaQAmZvhRglbpVzT_OQo8Y7aZ4I5yfHH2CJ71olKIikSPLEDc-MGKXBGVt9qvMCX4hCGjN-AyO5PPntNj0-cOFbxFGU0KGB0" },
    { name: "HRK Air Compressor", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJCCgEI_Grk8EM5waKSODDlqlcZy36oKtlq0z3ezuTcJ37a6nHPGSU4YHp6lzI8u9ya_UihrA2wXreHRVGEue8Zs-MBJL1GQk7cDSE3v8xV6B4-jX2EG-SCi8RtdhGahngc6gbCJaWpHZk8m0vXvK5MXuXAfOmHqeFfFSzTHmn-F_RJY66UuuvSjDpbARM7Glz8zkyhnCXXY-HKIMS8XbIRIkLfWD64nzXGg97aztnw5PwgPjFfWLU1GPLyuB1-659XyO2R7QWiv8" },
  ];

  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="container-custom">
        <p className="text-center text-[10px] font-black text-zoho-muted uppercase tracking-[0.4em] mb-12">TRUSTED BY 50,000+ CUSTOMERS WORLDWIDE</p>
        <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24">
          {partners.map((partner, idx) => (
            <img 
              key={idx} 
              alt={partner.name} 
              className="h-8 object-contain grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer" 
              src={partner.src}
              referrerPolicy="no-referrer"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      title: "Financial Management",
      desc: "Automate your accounting, manage taxes, and get real-time financial insights.",
      icon: <BarChart3 className="h-7 w-7 text-zoho-blue" />,
      link: "/services"
    },
    {
      title: "Supply Chain & Inventory",
      desc: "Optimize your stock levels, manage vendors, and streamline fulfillment.",
      icon: <RefreshCw className="h-7 w-7 text-zoho-green" />,
      link: "/services"
    },
    {
      title: "HR & Payroll",
      desc: "Manage employee life cycles, attendance, and complex payroll structures.",
      icon: <Users className="h-7 w-7 text-zoho-red" />,
      link: "/services"
    },
    {
      title: "Sales & CRM",
      desc: "Track leads, manage pipelines, and close deals faster with integrated CRM.",
      icon: <Zap className="h-7 w-7 text-zoho-yellow" />,
      link: "/services"
    },
    {
      title: "Project Management",
      desc: "Plan tasks, track time, and collaborate with your team in real-time.",
      icon: <LayoutIcon className="h-7 w-7 text-zoho-blue" />,
      link: "/services"
    },
    {
      title: "Advanced Analytics",
      desc: "Make data-driven decisions with powerful, customizable business reports.",
      icon: <Cpu className="h-7 w-7 text-zoho-dark" />,
      link: "/services"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-black mb-6 text-zoho-dark">
            Everything You Need to <span className="text-zoho-blue">Scale.</span>
          </h2>
          <p className="text-zoho-muted text-lg max-w-2xl mx-auto">
            A modular ERP system that grows with your business. Choose the modules you need today and add more as you expand.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="zoho-card p-10 group cursor-pointer"
            >
              <div className="w-14 h-14 bg-zoho-bg-light rounded-xl flex items-center justify-center mb-8 group-hover:bg-zoho-blue/5 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-black mb-4 text-zoho-dark group-hover:text-zoho-blue transition-colors">
                {feature.title}
              </h3>
              <p className="text-zoho-muted mb-8 leading-relaxed">
                {feature.desc}
              </p>
              <Link href={feature.link} className="inline-flex items-center gap-2 text-zoho-blue font-bold hover:gap-3 transition-all">
                Explore Module <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SplitSection = () => {
  return (
    <section className="section-padding bg-zoho-dark text-white overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-white text-xs font-black uppercase tracking-widest mb-8">
              Built for Security
            </div>
            <h2 className="text-4xl lg:text-6xl font-black mb-8 leading-tight">
              Enterprise-Grade <br />
              <span className="text-zoho-blue">Security & Compliance.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Your data is your most valuable asset. We protect it with multi-layered security, end-to-end encryption, and global compliance standards.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-zoho-blue" />
                  <span className="font-bold">ISO 27001 Certified</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-zoho-blue" />
                  <span className="font-bold">GDPR Compliant</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-zoho-blue" />
                  <span className="font-bold">SOC 2 Type II</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-zoho-blue" />
                  <span className="font-bold">HIPAA Ready</span>
                </div>
              </div>
            </div>
            <Link href="/about" className="btn-primary">
              Learn About Our Security
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img 
                alt="Security Infrastructure" 
                className="w-full h-auto" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvkYhcrKw84fOkbz1aHZER3kgNyq0g8axM-I6O723PVpc97e0NtzG5BsEi_1BLd_sctJ0ClG8xwVPhBe2Jq3Wr00ydLWjcEqonSLJnnIqYzMiuymdO_u7YGGl33mvzBixBZK4sqQzOhCABeQFtBEoTDdL_v9aUP7X53NOPio4Y49Fl1dM0aJMSKPVsMRGH5CbkX7zgk9mLzmhWoG3TGJdu9HyUAWxaTlySWb4NUXVBNLkqpM8wWay86O_vMgQs2XDeRi6voUoPAq4"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-zoho-blue/20 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Operations Head, Global Logistics",
      content: "Zoho ERP has completely transformed how we manage our supply chain. The real-time visibility and automation have saved us thousands of hours.",
      image: "https://i.pravatar.cc/150?u=rajesh"
    },
    {
      name: "Ananya Sharma",
      role: "CFO, FinTech Solutions",
      content: "The financial reporting in Zoho ERP is world-class. We now have a clear picture of our cash flow and profitability across all our global entities.",
      image: "https://i.pravatar.cc/150?u=ananya"
    },
    {
      name: "Vikram Singh",
      role: "CEO, Manufacturing Hub",
      content: "Switching to Zoho ERP was the best decision for our growth. The implementation was smooth, and the support team is exceptional.",
      image: "https://i.pravatar.cc/150?u=vikram"
    }
  ];

  return (
    <section className="section-padding bg-zoho-bg-light">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-black mb-6 text-zoho-dark">
            Loved by <span className="text-zoho-blue">Industry Leaders.</span>
          </h2>
          <p className="text-zoho-muted text-lg max-w-2xl mx-auto">
            Join thousands of businesses that trust Zoho ERP to power their daily operations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="zoho-card p-10 flex flex-col"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-zoho-yellow text-zoho-yellow" />
                ))}
              </div>
              <p className="text-zoho-muted mb-10 leading-relaxed italic flex-grow text-lg">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4 pt-6 border-t border-gray-50">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" />
                <div>
                  <div className="font-black text-zoho-dark">{t.name}</div>
                  <div className="text-xs font-bold text-zoho-muted uppercase tracking-wider">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section className="py-24 bg-zoho-blue relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />
      </div>
      
      <div className="container-custom relative z-10 text-center">
        <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 leading-tight">
          Ready to Unify Your <br /> Business Operations?
        </h2>
        <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto">
          Start your 15-day free trial today. No credit card required. No strings attached.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/contact" className="bg-white text-zoho-blue px-12 py-5 rounded-lg font-black text-xl hover:bg-gray-50 transition-all shadow-xl">
            Get Started for Free
          </Link>
          <Link href="/contact" className="bg-zoho-dark text-white px-12 py-5 rounded-lg font-black text-xl hover:bg-zoho-dark/90 transition-all shadow-xl">
            Contact Sales
          </Link>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Partners />
      <Features />
      <SplitSection />
      <Testimonials />
      <FinalCTA />
    </main>
  );
}
