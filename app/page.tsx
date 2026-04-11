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
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-white">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-zoho-bg-light -skew-x-12 translate-x-1/4 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[1000px] h-[1000px] bg-zoho-blue/5 rounded-full blur-[180px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-12 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-zoho-blue/10 border border-zoho-blue/20 text-zoho-blue text-[11px] font-black uppercase tracking-[0.3em] mb-12">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zoho-blue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-zoho-blue"></span>
              </span>
              The Operating System for Business
            </div>
            <h1 className="text-7xl lg:text-[110px] font-black mb-12 leading-[0.85] text-zoho-dark tracking-[-0.05em]">
              Transforming <br />
              <span className="text-zoho-blue">ideas into</span> <br />
              impact.
            </h1>
            <p className="text-zoho-muted text-2xl mb-16 leading-relaxed max-w-2xl font-medium">
              Tryangle ERP unifies your entire business ecosystem into a single, intelligent platform. From finance to HR, we deliver the tools you need to scale with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-8">
              <Link href="/contact" className="btn-primary text-xl px-16 py-6 group">
                Get Started <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link href="/services" className="btn-secondary text-xl px-16 py-6">
                Our Services
              </Link>
            </div>
            <div className="mt-20 flex items-center gap-10">
              <div className="flex -space-x-5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <img key={i} src={`https://i.pravatar.cc/100?img=${i+20}`} className="w-16 h-16 rounded-full border-4 border-white shadow-zoho-lg" alt="User" />
                ))}
              </div>
              <div className="text-base font-black text-zoho-dark">
                <div className="flex items-center gap-1.5 text-zoho-yellow mb-1.5">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                Trusted by 50,000+ global teams
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative z-10">
              <div className="glass-panel p-6 rounded-[3rem] shadow-zoho-xl rotate-6 hover:rotate-0 transition-all duration-1000 group">
                <img 
                  alt="ERP Dashboard" 
                  className="w-full h-auto rounded-[2.5rem] shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-1000" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGfYJlnGKuWELiIXwKRszIsdt9qixan4sgwlP8Q_JiFoFKCriKvMz2dJ_aYr8tjHIjav_2bZzQxU2XlCgOvcS5Jcnx8GrImpRZNjIfBgnUlsodrRiLHI21cIO8v186miQ2hrmvPZxlx26p_a4QTodyyKv91RNOjBFcV2lZ-mdR8TrQJ71M6sP7bhA42rchZFmUPlu5N1Q0GNremRVYdQjP5JOe8UYF9jFuy4-6NQ9ntR1Hj2OqH_pQqTbq3oh5j8k0lz2reYF5jns"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Floating Elements */}
              <motion.div 
                animate={{ y: [0, -30, 0], rotate: [0, 8, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-16 -right-12 glass-panel p-8 rounded-[2rem] z-20 hidden xl:block"
              >
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-zoho-green/10 rounded-2xl flex items-center justify-center text-zoho-green">
                    <BarChart3 className="h-8 w-8" />
                  </div>
                  <div>
                    <div className="text-lg font-black text-zoho-dark">1600k+</div>
                    <div className="text-xs font-bold text-zoho-muted uppercase tracking-widest">Proven Track Record</div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 30, 0], rotate: [0, -8, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-16 -left-12 glass-panel p-8 rounded-[2rem] z-20 hidden xl:block"
              >
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-zoho-blue/10 rounded-2xl flex items-center justify-center text-zoho-blue">
                    <Shield className="h-8 w-8" />
                  </div>
                  <div>
                    <div className="text-lg font-black text-zoho-dark">98%</div>
                    <div className="text-xs font-bold text-zoho-muted uppercase tracking-widest">Project Success Rate</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { label: "Experience", value: "12y", icon: <Award className="h-8 w-8" />, color: "bg-zoho-blue" },
    { label: "Projects completed", value: "2k+", icon: <Check className="h-8 w-8" />, color: "bg-zoho-green" },
    { label: "Worldwide clients", value: "1k+", icon: <Globe className="h-8 w-8" />, color: "bg-zoho-red" },
    { label: "Clients Reviews", value: "80k", icon: <Users className="h-8 w-8" />, color: "bg-zoho-yellow" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 rounded-[2.5rem] bg-zoho-bg-light border border-gray-100 group hover:bg-zoho-blue transition-all duration-500"
            >
              <div className={`w-16 h-16 ${stat.color}/10 rounded-2xl flex items-center justify-center ${stat.color.replace('bg-', 'text-')} mb-8 group-hover:bg-white group-hover:scale-110 transition-all duration-500`}>
                {stat.icon}
              </div>
              <div className="text-sm font-black text-zoho-muted uppercase tracking-[0.2em] mb-2 group-hover:text-white/60 transition-colors">{stat.label}</div>
              <div className="text-5xl font-black text-zoho-dark group-hover:text-white transition-colors tracking-tighter">{stat.value}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Partners = () => {
  const partners = [
    { name: "Google", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCWUsGOUcEJrDJOA7985S6NwfnPC6f-5igyjwClZvmE52_xbZhBVFA0KxLHXqFgML6GTlqPLNmq8tU1UGOU7JcI9GiT-XEnIUb5U9lTknosttCGSo-NR0qqcre2BaeWyseePW0RsFNXcrN8lGk6WcJT0q3VdvnhudP-fqx6MhSdf-wpcSSXnRs6N1m36t1wwimkV69jGSgGCK3RxEq6uviRS5BBZQR5knkqcLbe5ISOO2g0hBNHnDXBu_oi08TF9vlyruPNEKI3-MA" },
    { name: "SpaceX", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnm4fDL00GqVVQ9zmPFtg1gfvl6JU2y_Z0UKenFm7Fgf4m3sRSnw3ba0EgqV_hIG62LhdoYYnHcMAaA5Oxju29Ah3AGaRR9_MfShdPMbnOfLcsj9YYnEByvhY74Mbf5y23fKVNxstq-Ic_xfbDobIex57X7_MhzIGjdauteOFipJVwPDkVJggNOQuEhlAR2CYkE1RuSj8umudN794d5CLPe2L3WXgZl2otI58gZW3M5Dsc9zMLfdfljLrjGh2shKQNnFpH6FMPDsg" },
    { name: "Amazon", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCAxm0ZJgrq7p2SLyMEna-uFEp51hdZIOqRJdr0h0ICViAVlLOs_aFR_d6lkUiaKhCOZMw6BZ7meUWTfiQDTWBaOfJkZ9YW3Picu0Ymjjzg3pzaldahLbs_dF9WhhnVoGJ8gfOFfUXblGSOG8uUOtINnANVzalnuonW70IQm-MPa3AgaQAmZvhRglbpVzT_OQo8Y7aZ4I5yfHH2CJ71olKIikSPLEDc-MGKXBGVt9qvMCX4hCGjN-AyO5PPntNj0-cOFbxFGU0KGB0" },
    { name: "Microsoft", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJCCgEI_Grk8EM5waKSODDlqlcZy36oKtlq0z3ezuTcJ37a6nHPGSU4YHp6lzI8u9ya_UihrA2wXreHRVGEue8Zs-MBJL1GQk7cDSE3v8xV6B4-jX2EG-SCi8RtdhGahngc6gbCJaWpHZk8m0vXvK5MXuXAfOmHqeFfFSzTHmn-F_RJY66UuuvSjDpbARM7Glz8zkyhnCXXY-HKIMS8XbIRIkLfWD64nzXGg97aztnw5PwgPjFfWLU1GPLyuB1-659XyO2R7QWiv8" },
  ];

  return (
    <section className="py-24 bg-white border-y border-gray-100">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
          <div className="shrink-0 text-zoho-muted font-black uppercase text-[11px] tracking-[0.4em] lg:border-r lg:border-gray-200 lg:pr-16">
            Our Partners
          </div>
          <div className="flex flex-wrap justify-center lg:justify-between items-center gap-16 lg:gap-24 flex-grow">
            {partners.map((partner, idx) => (
              <img 
                key={idx} 
                alt={partner.name} 
                className="h-8 object-contain grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-700 cursor-pointer hover:scale-110" 
                src={partner.src}
                referrerPolicy="no-referrer"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      title: "Finance",
      desc: "Automate accounting, manage taxes, and get real-time insights into your fiscal health.",
      icon: <BarChart3 className="h-10 w-10" />,
      color: "bg-zoho-blue",
      large: true
    },
    {
      title: "Inventory",
      desc: "Optimize stock and fulfillment across multiple channels.",
      icon: <RefreshCw className="h-10 w-10" />,
      color: "bg-zoho-green",
      large: false
    },
    {
      title: "HR & People",
      desc: "Manage lifecycle and payroll seamlessly.",
      icon: <Users className="h-10 w-10" />,
      color: "bg-zoho-red",
      large: false
    },
    {
      title: "Sales CRM",
      desc: "Close deals faster with an integrated sales pipeline.",
      icon: <Zap className="h-10 w-10" />,
      color: "bg-zoho-yellow",
      large: false
    },
    {
      title: "Operations",
      desc: "Streamline your entire production and supply chain with intelligent automation.",
      icon: <Cpu className="h-10 w-10" />,
      color: "bg-zoho-dark",
      large: true
    }
  ];

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-32">
          <div className="max-w-3xl">
            <div className="text-zoho-blue font-black uppercase text-xs tracking-[0.3em] mb-6">The Ecosystem</div>
            <h2 className="text-6xl lg:text-8xl font-black text-zoho-dark leading-[0.9] tracking-tighter">
              Tailored <span className="text-zoho-blue">services</span> for <br /> every vision.
            </h2>
          </div>
          <p className="text-zoho-muted text-2xl max-w-md leading-relaxed font-medium">
            Our modular architecture allows you to build the perfect ERP system for your unique business needs.
          </p>
        </div>

        <div className="bento-grid">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={`bento-item group ${feature.large ? 'bento-item-large' : ''}`}
            >
              <div className={`absolute top-0 right-0 w-64 h-64 ${feature.color} opacity-5 -translate-y-1/2 translate-x-1/2 rounded-full group-hover:scale-150 transition-transform duration-1000`} />
              <div className="relative z-10 h-full flex flex-col">
                <div className={`w-20 h-20 rounded-[2rem] flex items-center justify-center mb-12 group-hover:scale-110 transition-transform duration-700 bg-gray-50 text-zoho-dark group-hover:bg-zoho-blue group-hover:text-white shadow-zoho-sm`}>
                  {feature.icon}
                </div>
                <div className="flex-grow">
                  <h3 className="text-4xl font-black mb-6 text-zoho-dark group-hover:text-zoho-blue transition-colors tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-zoho-muted text-xl mb-12 leading-relaxed max-w-sm font-medium">
                    {feature.desc}
                  </p>
                </div>
                <Link href="/services" className="inline-flex items-center gap-4 text-zoho-blue font-black uppercase text-[10px] tracking-[0.3em] group-hover:gap-6 transition-all">
                  Explore Module <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { number: "01", title: "Understanding your needs", desc: "We listen closely to your goals, challenges, and vision to deliver the perfect solution." },
    { number: "02", title: "Detailed timeline & quote", desc: "We provide transparent project timelines and accurate cost estimates for your approval." },
    { number: "03", title: "Expertly Built With Care", desc: "Every structure we build reflects our commitment to quality and craftsmanship." },
    { number: "04", title: "Final Check & Handover", desc: "Before delivery, we conduct a thorough final inspection to ensure everything is perfect." },
  ];

  return (
    <section className="section-padding bg-zoho-bg-light relative overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-32">
          <div className="text-zoho-blue font-black uppercase text-xs tracking-[0.3em] mb-6">Our Process</div>
          <h2 className="text-6xl lg:text-8xl font-black text-zoho-dark leading-[0.9] tracking-tighter mb-10">
            Simplifying IT, <br /> <span className="text-zoho-blue">Step by Step.</span>
          </h2>
          <p className="text-zoho-muted text-2xl max-w-2xl mx-auto leading-relaxed font-medium">
            Our proven 4-step process ensures a smooth transition to your new intelligent operating system.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative group"
            >
              <div className="text-[120px] font-black text-zoho-blue/5 leading-none mb-[-40px] tracking-tighter group-hover:text-zoho-blue/10 transition-colors duration-500">
                {step.number}
              </div>
              <div className="relative z-10 pl-4">
                <h4 className="text-2xl font-black text-zoho-dark mb-6 tracking-tight">{step.title}</h4>
                <p className="text-zoho-muted text-lg leading-relaxed font-medium">{step.desc}</p>
              </div>
            </motion.div>
          ))}
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
      content: "Tryangle ERP has completely transformed how we manage our supply chain. The real-time visibility and automation have saved us thousands of hours.",
      image: "https://i.pravatar.cc/150?u=rajesh"
    },
    {
      name: "Ananya Sharma",
      role: "CFO, FinTech Solutions",
      content: "The financial reporting in Tryangle ERP is world-class. We now have a clear picture of our cash flow and profitability across all our global entities.",
      image: "https://i.pravatar.cc/150?u=ananya"
    },
    {
      name: "Vikram Singh",
      role: "CEO, Manufacturing Hub",
      content: "Switching to Tryangle ERP was the best decision for our growth. The implementation was smooth, and the support team is exceptional.",
      image: "https://i.pravatar.cc/150?u=vikram"
    }
  ];

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-32">
          <div className="text-zoho-blue font-black uppercase text-xs tracking-[0.3em] mb-6">Testimonials</div>
          <h2 className="text-6xl lg:text-8xl font-black mb-10 text-zoho-dark tracking-tighter leading-[0.9]">
            What Our <br /> <span className="text-zoho-blue">Clients Say.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="zoho-card p-12 flex flex-col group hover:bg-zoho-dark hover:text-white transition-all duration-700"
            >
              <div className="flex gap-1.5 mb-10">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-zoho-yellow text-zoho-yellow" />
                ))}
              </div>
              <p className="text-2xl mb-16 leading-relaxed italic flex-grow font-medium">
                "{t.content}"
              </p>
              <div className="flex items-center gap-6 pt-10 border-t border-gray-100 group-hover:border-white/10">
                <img src={t.image} alt={t.name} className="w-20 h-20 rounded-[2rem] object-cover border-4 border-white shadow-zoho-lg group-hover:border-white/20" />
                <div>
                  <div className="font-black text-xl mb-1">{t.name}</div>
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] opacity-50">{t.role}</div>
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
    <section className="py-48 bg-zoho-blue relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-[1000px] h-[1000px] bg-white rounded-full blur-[200px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[1000px] h-[1000px] bg-white rounded-full blur-[200px] translate-x-1/2 translate-y-1/2" />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-7xl lg:text-[120px] font-black text-white mb-12 leading-[0.85] tracking-tighter">
            Ready to Build <br /> Your Vision?
          </h2>
          <p className="text-white/80 text-3xl mb-20 max-w-3xl mx-auto leading-relaxed font-medium">
            Join over 50,000 companies that trust Tryangle ERP to run their operations with precision and scale.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <Link href="/contact" className="bg-white text-zoho-blue px-20 py-7 rounded-[2rem] font-black text-2xl hover:bg-zoho-dark hover:text-white transition-all shadow-2xl hover:-translate-y-2 active:scale-95">
              Request a Quote
            </Link>
            <Link href="/services" className="bg-zoho-dark text-white px-20 py-7 rounded-[2rem] font-black text-2xl hover:bg-white hover:text-zoho-blue transition-all shadow-2xl hover:-translate-y-2 active:scale-95">
              Our Services
            </Link>
          </div>
          <div className="mt-24 flex justify-center items-center gap-12 text-white/60 text-base font-black uppercase tracking-widest">
            <div className="flex items-center gap-3"><Check className="h-6 w-6 text-zoho-green" /> No credit card</div>
            <div className="flex items-center gap-3"><Check className="h-6 w-6 text-zoho-green" /> 15-day trial</div>
            <div className="flex items-center gap-3"><Check className="h-6 w-6 text-zoho-green" /> Cancel anytime</div>
          </div>
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
      <Stats />
      <Features />
      <Process />
      <Testimonials />
      <FinalCTA />
    </main>
  );
}
