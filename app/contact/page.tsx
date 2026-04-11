'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, Globe, MessageSquare, Clock } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

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
              Get in Touch
            </div>
            <h1 className="text-6xl lg:text-8xl font-black text-zoho-dark mb-10 leading-[0.9] tracking-tighter">
              Let's Talk <br />
              <span className="text-zoho-blue">Business.</span>
            </h1>
            <p className="text-zoho-muted text-2xl leading-relaxed max-w-2xl font-medium">
              Whether you have a question about features, pricing, or anything else, our team is ready to answer all your questions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section-padding relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-12 gap-24">
            {/* Info Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5"
            >
              <div className="space-y-16">
                <div>
                  <h2 className="text-4xl font-black text-zoho-dark mb-12 tracking-tight">Contact Information</h2>
                  <div className="grid gap-12">
                    {[
                      { label: "Sales & Support", value: "+91 90338 78806", icon: <Phone className="h-6 w-6" />, color: "bg-zoho-blue" },
                      { label: "Email Us", value: "info.tryangletech@gmail.com", icon: <Mail className="h-6 w-6" />, color: "bg-zoho-green" },
                      { label: "Headquarters", value: "1st Floor-29/Vithal Plaza, New Naroda, Ahmedabad, Gujarat 382330", icon: <MapPin className="h-6 w-6" />, color: "bg-zoho-red" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-8 group">
                        <div className={`w-14 h-14 ${item.color}/10 rounded-2xl flex items-center justify-center ${item.color.replace('bg-', 'text-')} shrink-0 group-hover:${item.color} group-hover:text-white transition-all duration-500 shadow-zoho-sm`}>
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="font-black text-zoho-dark mb-2 uppercase text-[10px] tracking-[0.2em] opacity-50">{item.label}</h4>
                          <p className="text-zoho-muted text-xl font-bold leading-relaxed">{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="p-10 bg-zoho-bg-light rounded-[2rem] group hover:bg-zoho-blue hover:text-white transition-all duration-500">
                    <MessageSquare className="h-10 w-10 text-zoho-blue mb-6 group-hover:text-white" />
                    <h4 className="font-black text-xl mb-3">Live Chat</h4>
                    <p className="text-sm opacity-60 font-bold">Average response time: 2 minutes.</p>
                  </div>
                  <div className="p-10 bg-zoho-bg-light rounded-[2rem] group hover:bg-zoho-blue hover:text-white transition-all duration-500">
                    <Clock className="h-10 w-10 text-zoho-blue mb-6 group-hover:text-white" />
                    <h4 className="font-black text-xl mb-3">Business Hours</h4>
                    <p className="text-sm opacity-60 font-bold">Mon - Fri: 9 AM - 7 PM IST</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <div className="zoho-card p-12 lg:p-16 relative overflow-hidden bg-white">
                <div className="absolute top-0 left-0 w-full h-2 bg-zoho-blue" />
                
                {formState === 'success' ? (
                  <div className="text-center py-20">
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-24 h-24 bg-zoho-green/10 text-zoho-green rounded-full flex items-center justify-center mx-auto mb-8"
                    >
                      <CheckCircle2 className="h-12 w-12" />
                    </motion.div>
                    <h3 className="text-4xl font-black text-zoho-dark mb-6 tracking-tight">Message Sent!</h3>
                    <p className="text-zoho-muted mb-12 text-xl font-medium">Thank you for reaching out. A solution expert will contact you within 24 hours.</p>
                    <button 
                      onClick={() => setFormState('idle')}
                      className="text-zoho-blue font-black uppercase text-xs tracking-widest hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-10">
                    <div className="grid sm:grid-cols-2 gap-10">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-zoho-muted uppercase tracking-[0.2em]">Full Name</label>
                        <input 
                          required
                          type="text" 
                          placeholder="John Doe" 
                          className="w-full bg-gray-50 border-2 border-gray-50 rounded-2xl py-5 px-6 focus:outline-none focus:border-zoho-blue focus:bg-white transition-all font-bold"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-zoho-muted uppercase tracking-[0.2em]">Email Address</label>
                        <input 
                          required
                          type="email" 
                          placeholder="john@company.com" 
                          className="w-full bg-gray-50 border-2 border-gray-50 rounded-2xl py-5 px-6 focus:outline-none focus:border-zoho-blue focus:bg-white transition-all font-bold"
                        />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-zoho-muted uppercase tracking-[0.2em]">Company Name</label>
                      <input 
                        type="text" 
                        placeholder="Acme Corp" 
                        className="w-full bg-gray-50 border-2 border-gray-50 rounded-2xl py-5 px-6 focus:outline-none focus:border-zoho-blue focus:bg-white transition-all font-bold"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-zoho-muted uppercase tracking-[0.2em]">Your Message</label>
                      <textarea 
                        required
                        rows={5}
                        placeholder="How can we help your business?" 
                        className="w-full bg-gray-50 border-2 border-gray-50 rounded-2xl py-5 px-6 focus:outline-none focus:border-zoho-blue focus:bg-white transition-all resize-none font-bold"
                      ></textarea>
                    </div>
                    <button 
                      disabled={formState === 'submitting'}
                      type="submit" 
                      className="w-full bg-zoho-dark text-white py-6 rounded-2xl font-black uppercase text-xs tracking-[0.2em] hover:bg-zoho-blue transition-all flex items-center justify-center gap-4 disabled:opacity-70 shadow-2xl hover:-translate-y-1 active:scale-95"
                    >
                      {formState === 'submitting' ? 'Sending Request...' : (
                        <>
                          Send Message <Send className="h-4 w-4" />
                        </>
                      )}
                    </button>
                    <p className="text-center text-[10px] font-bold text-zoho-muted uppercase tracking-widest">
                      By submitting this form, you agree to our <span className="text-zoho-blue cursor-pointer">Privacy Policy</span>.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding pt-0">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[3rem] overflow-hidden h-[600px] shadow-zoho-lg border-8 border-white relative group"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.551103212009!2d72.651717314968!3d23.033504984947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e871f30000001%3A0x7000000000000000!2sVithal%20Plaza!5e0!3m2!1sen!2sin!4v1628000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="Office Location"
              className="grayscale group-hover:grayscale-0 transition-all duration-1000"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
