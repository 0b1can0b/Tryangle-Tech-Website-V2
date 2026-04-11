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
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Dramatic Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-zoho-bg-light -skew-x-12 translate-x-1/4 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-zoho-blue/5 rounded-full blur-[150px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-zoho-blue/10 border border-zoho-blue/20 text-zoho-blue text-[10px] font-black uppercase tracking-[0.2em] mb-10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zoho-blue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-zoho-blue"></span>
              </span>
              The Future of Enterprise Software
            </div>
            <h1 className="text-6xl lg:text-8xl font-black mb-10 leading-[0.9] text-zoho-dark tracking-tighter">
              Run your <br />
              <span className="text-zoho-blue">entire business</span> <br />
              on one platform.
            </h1>
            <p className="text-zoho-muted text-xl mb-12 leading-relaxed max-w-xl font-medium">
              Tryangle ERP unifies your finance, HR, sales, and operations into a single, intelligent operating system. No more silos. Just growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link href="/contact" className="btn-primary text-lg px-12 py-5">
                Get Started Free
              </Link>
              <Link href="/services" className="btn-secondary text-lg px-12 py-5 group">
                Explore Modules <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="mt-12 flex items-center gap-8">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-12 h-12 rounded-full border-4 border-white shadow-zoho-sm" alt="User" />
                ))}
              </div>
              <div className="text-sm font-bold text-zoho-dark">
                <div className="flex items-center gap-1 text-zoho-yellow mb-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-3 w-3 fill-current" />)}
                </div>
                Trusted by 50,000+ teams
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative z-10">
              <div className="glass-panel p-4 rounded-[2rem] shadow-zoho-lg rotate-3 hover:rotate-0 transition-transform duration-700">
                <img 
                  alt="ERP Dashboard" 
                  className="w-full h-auto rounded-[1.5rem] shadow-2xl" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGfYJlnGKuWELiIXwKRszIsdt9qixan4sgwlP8Q_JiFoFKCriKvMz2dJ_aYr8tjHIjav_2bZzQxU2XlCgOvcS5Jcnx8GrImpRZNjIfBgnUlsodrRiLHI21cIO8v186miQ2hrmvPZxlx26p_a4QTodyyKv91RNOjBFcV2lZ-mdR8TrQJ71M6sP7bhA42rchZFmUPlu5N1Q0GNremRVYdQjP5JOe8UYF9jFuy4-6NQ9ntR1Hj2OqH_pQqTbq3oh5j8k0lz2reYF5jns"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Floating Elements */}
              <motion.div 
                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-12 -right-8 glass-panel p-6 rounded-2xl z-20 hidden xl:block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-zoho-green/10 rounded-xl flex items-center justify-center text-zoho-green">
                    <BarChart3 className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-sm font-black text-zoho-dark">Real-time ROI</div>
                    <div className="text-xs text-zoho-muted">Automated reporting</div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-12 -left-8 glass-panel p-6 rounded-2xl z-20 hidden xl:block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-zoho-blue/10 rounded-xl flex items-center justify-center text-zoho-blue">
                    <Shield className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-sm font-black text-zoho-dark">Bank-Grade Security</div>
                    <div className="text-xs text-zoho-muted">End-to-end encryption</div>
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

const Partners = () => {
  const partners = [
    { name: "Patel Associates", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJ35-6QC-U8lRN5ktrRxfK847stohuh7wRmiiAlQXaSKtxjb1ukies1BXWSyfWqqHDluWh1nkFH-k1MQPYQkdsSCHadnUNLWt7RAiGMlTKN_JYn87jWvwNXvTFekp5SkfDP03EtbBK7mjVdeWgzyokrcjmSoNlpwt1UlSv7UN8SiK8JdFKel5kw1Th1-TKoAF0csvbzmwam270VDDxq_bPnTv90OZg2--JmvMed5p-XzptwQ966NvmMWE53iruRT6MzV7vac2XOgk" },
    { name: "Evon", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCWUsGOUcEJrDJOA7985S6NwfnPC6f-5igyjwClZvmE52_xbZhBVFA0KxLHXqFgML6GTlqPLNmq8tU1UGOU7JcI9GiT-XEnIUb5U9lTknosttCGSo-NR0qqcre2BaeWyseePW0RsFNXcrN8lGk6WcJT0q3VdvnhudP-fqx6MhSdf-wpcSSXnRs6N1m36t1wwimkV69jGSgGCK3RxEq6uviRS5BBZQR5knkqcLbe5ISOO2g0hBNHnDXBu_oi08TF9vlyruPNEKI3-MA" },
    { name: "Toestrand", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnm4fDL00GqVVQ9zmPFtg1gfvl6JU2y_Z0UKenFm7Fgf4m3sRSnw3ba0EgqV_hIG62LhdoYYnHcMAaA5Oxju29Ah3AGaRR9_MfShdPMbnOfLcsj9YYnEByvhY74Mbf5y23fKVNxstq-Ic_xfbDobIex57X7_MhzIGjdauteOFipJVwPDkVJggNOQuEhlAR2CYkE1RuSj8umudN794d5CLPe2L3WXgZl2otI58gZW3M5Dsc9zMLfdfljLrjGh2shKQNnFpH6FMPDsg" },
    { name: "AquaFinest", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCAxm0ZJgrq7p2SLyMEna-uFEp51hdZIOqRJdr0h0ICViAVlLOs_aFR_d6lkUiaKhCOZMw6BZ7meUWTfiQDTWBaOfJkZ9YW3Picu0Ymjjzg3pzaldahLbs_dF9WhhnVoGJ8gfOFfUXblGSOG8uUOtINnANVzalnuonW70IQm-MPa3AgaQAmZvhRglbpVzT_OQo8Y7aZ4I5yfHH2CJ71olKIikSPLEDc-MGKXBGVt9qvMCX4hCGjN-AyO5PPntNj0-cOFbxFGU0KGB0" },
    { name: "HRK Air Compressor", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJCCgEI_Grk8EM5waKSODDlqlcZy36oKtlq0z3ezuTcJ37a6nHPGSU4YHp6lzI8u9ya_UihrA2wXreHRVGEue8Zs-MBJL1GQk7cDSE3v8xV6B4-jX2EG-SCi8RtdhGahngc6gbCJaWpHZk8m0vXvK5MXuXAfOmHqeFfFSzTHmn-F_RJY66UuuvSjDpbARM7Glz8zkyhnCXXY-HKIMS8XbIRIkLfWD64nzXGg97aztnw5PwgPjFfWLU1GPLyuB1-659XyO2R7QWiv8" },
  ];

  return (
    <section className="py-20 bg-gray-50/50 border-y border-gray-100">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="shrink-0 text-zoho-muted font-black uppercase text-[10px] tracking-[0.3em] lg:border-r lg:border-gray-200 lg:pr-12">
            Trusted by global teams
          </div>
          <div className="flex flex-wrap justify-center lg:justify-between items-center gap-12 lg:gap-16 flex-grow">
            {partners.map((partner, idx) => (
              <img 
                key={idx} 
                alt={partner.name} 
                className="h-7 object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer" 
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
      desc: "Automate accounting, manage taxes, and get real-time insights.",
      icon: <BarChart3 className="h-8 w-8" />,
      color: "bg-zoho-blue",
      size: "lg"
    },
    {
      title: "Inventory",
      desc: "Optimize stock and fulfillment.",
      icon: <RefreshCw className="h-8 w-8" />,
      color: "bg-zoho-green",
      size: "sm"
    },
    {
      title: "HR & People",
      desc: "Manage lifecycle and payroll.",
      icon: <Users className="h-8 w-8" />,
      color: "bg-zoho-red",
      size: "sm"
    },
    {
      title: "Sales CRM",
      desc: "Close deals faster with integrated CRM.",
      icon: <Zap className="h-8 w-8" />,
      color: "bg-zoho-yellow",
      size: "sm"
    },
    {
      title: "Operations",
      desc: "Streamline your entire production and supply chain.",
      icon: <Cpu className="h-8 w-8" />,
      color: "bg-zoho-dark",
      size: "lg"
    }
  ];

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-24">
          <div className="max-w-2xl">
            <div className="text-zoho-blue font-black uppercase text-xs tracking-widest mb-4">Powerful Modules</div>
            <h2 className="text-5xl lg:text-6xl font-black text-zoho-dark leading-tight tracking-tighter">
              Everything you need <br /> to <span className="text-zoho-blue">scale your empire.</span>
            </h2>
          </div>
          <p className="text-zoho-muted text-xl max-w-md leading-relaxed">
            A modular ERP system that grows with your business. Choose the modules you need today and add more as you expand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`zoho-card p-12 group relative overflow-hidden ${feature.size === 'lg' ? 'lg:col-span-2' : ''}`}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 ${feature.color} opacity-5 -translate-y-1/2 translate-x-1/2 rounded-full group-hover:scale-150 transition-transform duration-700`} />
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500 bg-gray-50 text-zoho-dark group-hover:bg-zoho-blue group-hover:text-white`}>
                  {feature.icon}
                </div>
                <h3 className="text-3xl font-black mb-6 text-zoho-dark group-hover:text-zoho-blue transition-colors">
                  {feature.title}
                </h3>
                <p className="text-zoho-muted text-lg mb-10 leading-relaxed max-w-sm">
                  {feature.desc}
                </p>
                <Link href="/services" className="inline-flex items-center gap-3 text-zoho-blue font-black uppercase text-xs tracking-widest group-hover:gap-5 transition-all">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SplitSection = () => {
  return (
    <section className="section-padding bg-zoho-dark text-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-zoho-blue rounded-full blur-[120px] translate-x-1/2" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-white text-[10px] font-black uppercase tracking-widest mb-8">
              Built for Security
            </div>
            <h2 className="text-5xl lg:text-7xl font-black mb-10 leading-[0.9] tracking-tighter">
              Enterprise-Grade <br />
              <span className="text-zoho-blue">Security.</span>
            </h2>
            <p className="text-gray-400 text-xl mb-12 leading-relaxed max-w-lg">
              Your data is your most valuable asset. We protect it with multi-layered security, end-to-end encryption, and global compliance standards.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-12">
              {[
                { label: "ISO 27001 Certified", desc: "Global security standard" },
                { label: "GDPR Compliant", desc: "Data privacy protection" },
                { label: "SOC 2 Type II", desc: "Operational excellence" },
                { label: "HIPAA Ready", desc: "Healthcare data safety" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-zoho-blue/20 flex items-center justify-center text-zoho-blue shrink-0">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-black text-lg">{item.label}</div>
                    <div className="text-sm text-gray-500">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/about" className="btn-primary">
              Learn About Our Security
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50, rotate: 5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 p-4 bg-white/5 backdrop-blur-sm">
              <img 
                alt="Security Infrastructure" 
                className="w-full h-auto rounded-[2rem]" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvkYhcrKw84fOkbz1aHZER3kgNyq0g8axM-I6O723PVpc97e0NtzG5BsEi_1BLd_sctJ0ClG8xwVPhBe2Jq3Wr00ydLWjcEqonSLJnnIqYzMiuymdO_u7YGGl33mvzBixBZK4sqQzOhCABeQFtBEoTDdL_v9aUP7X53NOPio4Y49Fl1dM0aJMSKPVsMRGH5CbkX7zgk9mLzmhWoG3TGJdu9HyUAWxaTlySWb4NUXVBNLkqpM8wWay86O_vMgQs2XDeRi6voUoPAq4"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-zoho-blue/30 rounded-full blur-[100px]" />
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
    <section className="section-padding bg-zoho-bg-light relative overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-24">
          <div className="text-zoho-blue font-black uppercase text-xs tracking-widest mb-4">Success Stories</div>
          <h2 className="text-5xl lg:text-7xl font-black mb-8 text-zoho-dark tracking-tighter leading-[0.9]">
            Loved by <br /> <span className="text-zoho-blue">Industry Leaders.</span>
          </h2>
          <p className="text-zoho-muted text-xl max-w-2xl mx-auto leading-relaxed">
            Join thousands of businesses that trust Tryangle ERP to power their daily operations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="zoho-card p-12 flex flex-col group hover:bg-zoho-blue hover:text-white transition-all duration-500"
            >
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-zoho-yellow text-zoho-yellow" />
                ))}
              </div>
              <p className="text-xl mb-12 leading-relaxed italic flex-grow font-medium">
                "{t.content}"
              </p>
              <div className="flex items-center gap-5 pt-8 border-t border-gray-100 group-hover:border-white/20">
                <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover border-4 border-white shadow-md" />
                <div>
                  <div className="font-black text-lg">{t.name}</div>
                  <div className="text-[10px] font-black uppercase tracking-widest opacity-60">{t.role}</div>
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
    <section className="py-32 bg-zoho-blue relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-white rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-white rounded-full blur-[150px] translate-x-1/2 translate-y-1/2" />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl lg:text-8xl font-black text-white mb-10 leading-[0.9] tracking-tighter">
            Ready to unify <br /> your operations?
          </h2>
          <p className="text-white/80 text-2xl mb-16 max-w-2xl mx-auto leading-relaxed font-medium">
            Start your 15-day free trial today. No credit card required. No strings attached.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/contact" className="bg-white text-zoho-blue px-14 py-6 rounded-2xl font-black text-xl hover:bg-gray-100 transition-all shadow-2xl hover:-translate-y-1 active:scale-95">
              Get Started Free
            </Link>
            <Link href="/contact" className="bg-zoho-dark text-white px-14 py-6 rounded-2xl font-black text-xl hover:bg-zoho-dark/90 transition-all shadow-2xl hover:-translate-y-1 active:scale-95">
              Contact Sales
            </Link>
          </div>
          <div className="mt-16 flex justify-center items-center gap-8 text-white/60 text-sm font-bold">
            <div className="flex items-center gap-2"><Check className="h-5 w-5 text-zoho-green" /> No credit card</div>
            <div className="flex items-center gap-2"><Check className="h-5 w-5 text-zoho-green" /> 15-day trial</div>
            <div className="flex items-center gap-2"><Check className="h-5 w-5 text-zoho-green" /> Cancel anytime</div>
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
      <Features />
      <SplitSection />
      <Testimonials />
      <FinalCTA />
    </main>
  );
}
