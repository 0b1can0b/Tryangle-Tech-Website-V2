'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, Shield, Globe, Zap, BarChart3 } from 'lucide-react';

export default function About() {
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
              Our Journey
            </div>
            <h1 className="text-7xl lg:text-[110px] font-black text-zoho-dark mb-12 leading-[0.85] tracking-[-0.05em]">
              We're on a mission to <br />
              <span className="text-zoho-blue">Simplify Business.</span>
            </h1>
            <p className="text-zoho-muted text-3xl leading-relaxed max-w-3xl font-medium">
              Tryangle Tech was born from a simple idea: that enterprise software shouldn't be complicated. We've spent over a decade building a platform that unifies every aspect of your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-zoho-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-zoho-blue rounded-full blur-[150px]" />
        </div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-20">
            {[
              { label: "Active Users", value: "1M+", icon: <Users className="h-8 w-8" /> },
              { label: "Countries", value: "150+", icon: <Globe className="h-8 w-8" /> },
              { label: "Employees", value: "5,000+", icon: <Zap className="h-8 w-8" /> },
              { label: "Uptime", value: "99.99%", icon: <Shield className="h-8 w-8" /> },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 rounded-[1.5rem] bg-white/10 flex items-center justify-center mb-8 text-zoho-blue group-hover:bg-zoho-blue group-hover:text-white transition-all duration-700">
                  {stat.icon}
                </div>
                <div className="text-6xl font-black mb-4 tracking-[-0.05em]">{stat.value}</div>
                <div className="text-[11px] font-black text-gray-500 uppercase tracking-[0.3em]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding overflow-hidden py-40">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-40 items-center">
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="text-zoho-blue font-black uppercase text-xs tracking-[0.3em] mb-8">The Story</div>
              <h2 className="text-6xl lg:text-[90px] font-black text-zoho-dark mb-12 leading-[0.85] tracking-tighter">
                A Decade of <br /> <span className="text-zoho-blue">Innovation.</span>
              </h2>
              <div className="space-y-10 text-zoho-muted text-2xl leading-relaxed font-medium">
                <p>
                  Founded in 2015, Tryangle Tech started as a small team of engineers with a big dream. We saw how fragmented business software was—finance in one app, HR in another, and sales in a third.
                </p>
                <p>
                  We decided to build something different. A truly unified ERP system where data flows seamlessly between departments, giving leaders the insights they need to grow with confidence.
                </p>
                <p className="p-12 bg-zoho-bg-light rounded-[2.5rem] border-l-[12px] border-zoho-blue italic text-zoho-dark font-black tracking-tight leading-tight">
                  "Our goal was never just to build software. It was to build the operating system for the modern business."
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 80, rotate: -5 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="rounded-[4rem] overflow-hidden shadow-zoho-xl border-[12px] border-white group">
                <img 
                  alt="Our Team" 
                  className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvkYhcrKw84fOkbz1aHZER3kgNyq0g8axM-I6O723PVpc97e0NtzG5BsEi_1BLd_sctJ0ClG8xwVPhBe2Jq3Wr00ydLWjcEqonSLJnnIqYzMiuymdO_u7YGGl33mvzBixBZK4sqQzOhCABeQFtBEoTDdL_v9aUP7X53NOPio4Y49Fl1dM0aJMSKPVsMRGH5CbkX7zgk9mLzmhWoG3TGJdu9HyUAWxaTlySWb4NUXVBNLkqpM8wWay86O_vMgQs2XDeRi6voUoPAq4"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-zoho-blue/20 rounded-full blur-[100px]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-zoho-bg-light relative overflow-hidden py-40">
        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-16 mb-32">
            <div className="max-w-3xl">
              <div className="text-zoho-blue font-black uppercase text-xs tracking-[0.3em] mb-6">Our DNA</div>
              <h2 className="text-6xl lg:text-[100px] font-black text-zoho-dark leading-[0.85] tracking-tighter">Our Core <br /> <span className="text-zoho-blue">Values.</span></h2>
            </div>
            <p className="text-zoho-muted text-2xl max-w-lg leading-relaxed font-medium">The principles that guide our product and our people every single day as we build the future.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "Privacy First", desc: "We never sell your data. Your privacy is built into our business model, not just our software.", icon: <Shield className="h-10 w-10" />, color: "bg-zoho-blue" },
              { title: "Customer Centric", desc: "We build for you. 90% of our features come directly from customer feedback and real-world needs.", icon: <Users className="h-10 w-10" />, color: "bg-zoho-green" },
              { title: "Continuous Innovation", desc: "We ship updates every week. Our platform evolves as fast as the market does, keeping you ahead.", icon: <Zap className="h-10 w-10" />, color: "bg-zoho-red" }
            ].map((value, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                className="zoho-card p-16 group relative overflow-hidden bg-white shadow-zoho-lg hover:shadow-zoho-xl rounded-[3rem]"
              >
                <div className={`absolute top-0 right-0 w-48 h-48 ${value.color} opacity-5 -translate-y-1/2 translate-x-1/2 rounded-full group-hover:scale-150 transition-transform duration-1000`} />
                <div className="relative z-10">
                  <div className="w-24 h-24 bg-zoho-bg-light rounded-[2rem] flex items-center justify-center text-zoho-dark mb-12 group-hover:bg-zoho-blue group-hover:text-white transition-all duration-700 shadow-zoho-sm group-hover:scale-110">
                    {value.icon}
                  </div>
                  <h4 className="text-4xl font-black text-zoho-dark mb-8 group-hover:text-zoho-blue transition-colors tracking-tight">{value.title}</h4>
                  <p className="text-zoho-muted text-xl leading-relaxed font-medium">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-zoho-dark text-white relative overflow-hidden py-40">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-zoho-blue)_0%,_transparent_70%)] opacity-30" />
        </div>
        <div className="container-custom relative z-10 grid md:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-20 bg-white/5 rounded-[4rem] border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-700 group"
          >
            <div className="w-24 h-24 rounded-[2rem] bg-zoho-blue/20 flex items-center justify-center text-zoho-blue mb-12 group-hover:scale-110 transition-transform duration-700">
              <Target className="h-12 w-12" />
            </div>
            <h3 className="text-5xl font-black mb-10 tracking-tighter">Our Mission</h3>
            <p className="text-gray-400 text-2xl leading-relaxed font-medium">
              To democratize enterprise software by providing powerful, affordable, and easy-to-use tools that help businesses of all sizes thrive in a digital-first world.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="p-20 bg-white/5 rounded-[4rem] border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-700 group"
          >
            <div className="w-24 h-24 rounded-[2rem] bg-zoho-blue/20 flex items-center justify-center text-zoho-blue mb-12 group-hover:scale-110 transition-transform duration-700">
              <Eye className="h-12 w-12" />
            </div>
            <h3 className="text-5xl font-black mb-10 tracking-tighter">Our Vision</h3>
            <p className="text-gray-400 text-2xl leading-relaxed font-medium">
              To be the global standard for business operations, creating a world where every entrepreneur has the tools they need to turn their vision into reality.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
