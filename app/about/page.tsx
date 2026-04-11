'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, Shield, Globe, Zap, BarChart3 } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Header Section */}
      <section className="bg-zoho-bg-light py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white -skew-x-12 translate-x-1/4 pointer-events-none" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zoho-blue/10 border border-zoho-blue/10 text-zoho-blue text-xs font-black uppercase tracking-widest mb-8">
              Our Journey
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-zoho-dark mb-8 leading-tight tracking-tighter">
              We're on a mission to <br />
              <span className="text-zoho-blue">Simplify Business.</span>
            </h1>
            <p className="text-zoho-muted text-xl leading-relaxed">
              Tryangle Tech was born from a simple idea: that enterprise software shouldn't be complicated. We've spent over a decade building a platform that unifies every aspect of your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-b border-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { label: "Active Users", value: "1M+", icon: <Users className="h-6 w-6 text-zoho-blue" /> },
              { label: "Countries", value: "150+", icon: <Globe className="h-6 w-6 text-zoho-green" /> },
              { label: "Employees", value: "5,000+", icon: <Zap className="h-6 w-6 text-zoho-red" /> },
              { label: "Uptime", value: "99.99%", icon: <Shield className="h-6 w-6 text-zoho-yellow" /> },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-black text-zoho-dark mb-1">{stat.value}</div>
                <div className="text-sm font-bold text-zoho-muted uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-black text-zoho-dark mb-8 leading-tight">
              A Decade of <br /> <span className="text-zoho-blue">Innovation.</span>
            </h2>
            <div className="space-y-6 text-zoho-muted text-lg leading-relaxed">
              <p>
                Founded in 2015, Tryangle Tech started as a small team of engineers with a big dream. We saw how fragmented business software was—finance in one app, HR in another, and sales in a third.
              </p>
              <p>
                We decided to build something different. A truly unified ERP system where data flows seamlessly between departments, giving leaders the insights they need to grow.
              </p>
              <p>
                Today, Tryangle ERP is used by over 50,000 companies worldwide, from small startups to Fortune 500 enterprises.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-zoho-lg border border-gray-100">
              <img 
                alt="Our Team" 
                className="w-full h-auto" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvkYhcrKw84fOkbz1aHZER3kgNyq0g8axM-I6O723PVpc97e0NtzG5BsEi_1BLd_sctJ0ClG8xwVPhBe2Jq3Wr00ydLWjcEqonSLJnnIqYzMiuymdO_u7YGGl33mvzBixBZK4sqQzOhCABeQFtBEoTDdL_v9aUP7X53NOPio4Y49Fl1dM0aJMSKPVsMRGH5CbkX7zgk9mLzmhWoG3TGJdu9HyUAWxaTlySWb4NUXVBNLkqpM8wWay86O_vMgQs2XDeRi6voUoPAq4"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-zoho-bg-light">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black text-zoho-dark mb-6">Our Core Values</h2>
            <p className="text-zoho-muted text-lg max-w-2xl mx-auto">The principles that guide our product and our people.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Privacy First", desc: "We never sell your data. Your privacy is built into our business model, not just our software.", icon: <Shield className="h-8 w-8" /> },
              { title: "Customer Centric", desc: "We build for you. 90% of our features come directly from customer feedback.", icon: <Users className="h-8 w-8" /> },
              { title: "Continuous Innovation", desc: "We ship updates every week. Our platform evolves as fast as the market does.", icon: <Zap className="h-8 w-8" /> }
            ].map((value, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="zoho-card p-10 group"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-zoho-blue mb-8 group-hover:scale-110 transition-transform duration-300 shadow-zoho-sm">
                  {value.icon}
                </div>
                <h4 className="text-xl font-black text-zoho-dark mb-4">{value.title}</h4>
                <p className="text-zoho-muted leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-zoho-dark text-white">
        <div className="container-custom grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 bg-white/5 rounded-2xl border border-white/10"
          >
            <Target className="h-12 w-12 text-zoho-blue mb-8" />
            <h3 className="text-3xl font-black mb-6">Our Mission</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              To democratize enterprise software by providing powerful, affordable, and easy-to-use tools that help businesses of all sizes thrive in a digital-first world.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-12 bg-white/5 rounded-2xl border border-white/10"
          >
            <Eye className="h-12 w-12 text-zoho-blue mb-8" />
            <h3 className="text-3xl font-black mb-6">Our Vision</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              To be the global standard for business operations, creating a world where every entrepreneur has the tools they need to turn their vision into reality.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
