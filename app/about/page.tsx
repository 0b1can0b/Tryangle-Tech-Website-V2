'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, Heart, Code } from 'lucide-react';

export default function About() {
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
              About <span className="text-brand-blue">Tryangle Tech</span>
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We are a team of passionate innovators dedicated to helping businesses thrive in the digital age.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Our Journey to <span className="text-brand-blue">Excellence</span>
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Founded with a vision to bridge the gap between complex technology and business needs, Tryangle Tech has grown into a trusted partner for hundreds of clients worldwide.
              </p>
              <p>
                Our approach is simple: we listen, we innovate, and we deliver. Every project we undertake is an opportunity to create something exceptional that drives real value for our clients.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center text-brand-blue">
                  <Award className="h-6 w-6" />
                </div>
                <span className="font-bold text-gray-900">7+ Years</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center text-brand-blue">
                  <Users className="h-6 w-6" />
                </div>
                <span className="font-bold text-gray-900">Expert Team</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-zoho">
              <img 
                alt="Our Team" 
                className="w-full hover:scale-105 transition-transform duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvkYhcrKw84fOkbz1aHZER3kgNyq0g8axM-I6O723PVpc97e0NtzG5BsEi_1BLd_sctJ0ClG8xwVPhBe2Jq3Wr00ydLWjcEqonSLJnnIqYzMiuymdO_u7YGGl33mvzBixBZK4sqQzOhCABeQFtBEoTDdL_v9aUP7X53NOPio4Y49Fl1dM0aJMSKPVsMRGH5CbkX7zgk9mLzmhWoG3TGJdu9HyUAWxaTlySWb4NUXVBNLkqpM8wWay86O_vMgQs2XDeRi6voUoPAq4"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 bg-white/5 rounded-2xl border border-white/10"
          >
            <Target className="h-12 w-12 text-brand-blue mb-8" />
            <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              To provide innovative and high-quality IT solutions that empower businesses to achieve their full potential in the digital landscape.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-10 bg-white/5 rounded-2xl border border-white/10"
          >
            <Eye className="h-12 w-12 text-brand-blue mb-8" />
            <h3 className="text-2xl font-bold mb-6">Our Vision</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              To be the most trusted and innovative IT partner globally, recognized for transforming ideas into digital success stories.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600 text-lg">The principles that drive everything we do.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Innovation", desc: "We constantly push boundaries to find creative solutions for complex problems.", icon: <Code className="h-8 w-8" /> },
              { title: "Integrity", desc: "We believe in honest communication and building long-term trust with our clients.", icon: <Heart className="h-8 w-8" /> },
              { title: "Excellence", desc: "We are committed to delivering high-quality work that exceeds expectations.", icon: <Award className="h-8 w-8" /> }
            ].map((value, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="zoho-card p-10 group"
              >
                <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue mb-8 group-hover:bg-brand-blue group-hover:text-white transition-all">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
