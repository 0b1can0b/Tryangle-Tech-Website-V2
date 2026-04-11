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
              Get in Touch
            </div>
            <h1 className="text-7xl lg:text-[110px] font-black text-zoho-dark mb-12 leading-[0.85] tracking-[-0.05em]">
              Let's Talk <br />
              <span className="text-zoho-blue">Business.</span>
            </h1>
            <p className="text-zoho-muted text-3xl leading-relaxed max-w-3xl font-medium">
              Whether you have a question about features, pricing, or anything else, our team is ready to answer all your questions with precision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="pb-40 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-12 gap-32">
            {/* Info Side */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5"
            >
              <div className="space-y-24">
                <div>
                  <h2 className="text-5xl font-black text-zoho-dark mb-16 tracking-tight">Contact Information</h2>
                  <div className="grid gap-16">
                    {[
                      { label: "Sales & Support", value: "+91 90338 78806", icon: <Phone className="h-7 w-7" />, color: "bg-zoho-blue" },
                      { label: "Email Us", value: "info@tryangle.tech", icon: <Mail className="h-7 w-7" />, color: "bg-zoho-green" },
                      { label: "Headquarters", value: "1st Floor-29/Vithal Plaza, New Naroda, Ahmedabad, Gujarat 382330", icon: <MapPin className="h-7 w-7" />, color: "bg-zoho-red" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-10 group">
                        <div className={`w-20 h-20 ${item.color}/10 rounded-[2rem] flex items-center justify-center ${item.color.replace('bg-', 'text-')} shrink-0 group-hover:${item.color} group-hover:text-white transition-all duration-700 shadow-zoho-md group-hover:scale-110`}>
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="font-black text-zoho-dark mb-3 uppercase text-[11px] tracking-[0.4em] opacity-50">{item.label}</h4>
                          <p className="text-zoho-muted text-2xl font-bold leading-relaxed tracking-tight">{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-10">
                  <div className="p-12 bg-zoho-bg-light rounded-[2.5rem] group hover:bg-zoho-blue hover:text-white transition-all duration-700 shadow-zoho-sm hover:shadow-zoho-xl">
                    <MessageSquare className="h-12 w-12 text-zoho-blue mb-8 group-hover:text-white transition-transform duration-700 group-hover:scale-110" />
                    <h4 className="font-black text-2xl mb-4 tracking-tight">Live Chat</h4>
                    <p className="text-base opacity-60 font-bold">Average response time: 2 minutes.</p>
                  </div>
                  <div className="p-12 bg-zoho-bg-light rounded-[2.5rem] group hover:bg-zoho-blue hover:text-white transition-all duration-700 shadow-zoho-sm hover:shadow-zoho-xl">
                    <Clock className="h-12 w-12 text-zoho-blue mb-8 group-hover:text-white transition-transform duration-700 group-hover:scale-110" />
                    <h4 className="font-black text-2xl mb-4 tracking-tight">Hours</h4>
                    <p className="text-base opacity-60 font-bold">Mon - Fri: 9 AM - 7 PM IST</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form Side */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7"
            >
              <div className="zoho-card p-16 lg:p-20 relative overflow-hidden bg-white shadow-zoho-xl rounded-[3rem]">
                <div className="absolute top-0 left-0 w-full h-3 bg-zoho-blue" />
                
                {formState === 'success' ? (
                  <div className="text-center py-24">
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-32 h-32 bg-zoho-green/10 text-zoho-green rounded-full flex items-center justify-center mx-auto mb-10"
                    >
                      <CheckCircle2 className="h-16 w-16" />
                    </motion.div>
                    <h3 className="text-5xl font-black text-zoho-dark mb-8 tracking-tight">Message Sent!</h3>
                    <p className="text-zoho-muted mb-16 text-2xl font-medium">Thank you for reaching out. A solution expert will contact you within 24 hours.</p>
                    <button 
                      onClick={() => setFormState('idle')}
                      className="text-zoho-blue font-black uppercase text-xs tracking-[0.3em] hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-12">
                    <div className="grid sm:grid-cols-2 gap-12">
                      <div className="space-y-4">
                        <label className="text-[11px] font-black text-zoho-muted uppercase tracking-[0.4em]">Full Name</label>
                        <input 
                          required
                          type="text" 
                          placeholder="John Doe" 
                          className="w-full bg-gray-50 border-4 border-gray-50 rounded-[1.5rem] py-6 px-8 focus:outline-none focus:border-zoho-blue focus:bg-white transition-all font-bold text-lg"
                        />
                      </div>
                      <div className="space-y-4">
                        <label className="text-[11px] font-black text-zoho-muted uppercase tracking-[0.4em]">Email Address</label>
                        <input 
                          required
                          type="email" 
                          placeholder="john@company.com" 
                          className="w-full bg-gray-50 border-4 border-gray-50 rounded-[1.5rem] py-6 px-8 focus:outline-none focus:border-zoho-blue focus:bg-white transition-all font-bold text-lg"
                        />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <label className="text-[11px] font-black text-zoho-muted uppercase tracking-[0.4em]">Company Name</label>
                      <input 
                        type="text" 
                        placeholder="Acme Corp" 
                        className="w-full bg-gray-50 border-4 border-gray-50 rounded-[1.5rem] py-6 px-8 focus:outline-none focus:border-zoho-blue focus:bg-white transition-all font-bold text-lg"
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="text-[11px] font-black text-zoho-muted uppercase tracking-[0.4em]">Your Message</label>
                      <textarea 
                        required
                        rows={6}
                        placeholder="How can we help your business?" 
                        className="w-full bg-gray-50 border-4 border-gray-50 rounded-[1.5rem] py-6 px-8 focus:outline-none focus:border-zoho-blue focus:bg-white transition-all resize-none font-bold text-lg"
                      ></textarea>
                    </div>
                    <button 
                      disabled={formState === 'submitting'}
                      type="submit" 
                      className="w-full bg-zoho-dark text-white py-8 rounded-[1.5rem] font-black uppercase text-sm tracking-[0.3em] hover:bg-zoho-blue transition-all flex items-center justify-center gap-6 disabled:opacity-70 shadow-2xl hover:-translate-y-2 active:scale-95"
                    >
                      {formState === 'submitting' ? 'Sending Request...' : (
                        <>
                          Send Message <Send className="h-5 w-5" />
                        </>
                      )}
                    </button>
                    <p className="text-center text-[11px] font-bold text-zoho-muted uppercase tracking-[0.2em]">
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
