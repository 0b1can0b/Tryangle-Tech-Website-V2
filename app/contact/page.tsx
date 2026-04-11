'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="pt-48 pb-32 architectural-grid">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-3 mb-8">
              <span className="w-12 h-[1px] bg-primary"></span>
              <span className="text-xs font-label uppercase tracking-[0.3em] text-primary font-bold">COMMUNICATION</span>
            </div>
            <h1 className="text-6xl lg:text-9xl font-headline font-bold text-on-surface mb-12 leading-[0.85] tracking-tighter">
              Initiate <br />
              <span className="text-gradient">Consultation.</span>
            </h1>
            <p className="text-on-surface-variant text-2xl leading-relaxed max-w-3xl font-sans">
              Whether you are architecting a new digital ecosystem or optimizing an existing infrastructure, our specialists are ready to provide technical guidance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="pb-40">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-24">
            {/* Info Side */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5"
            >
              <div className="space-y-16">
                <div>
                  <h2 className="text-4xl font-headline font-bold text-on-surface mb-12 tracking-tight">Technical Nodes</h2>
                  <div className="grid gap-12">
                    {[
                      { label: "Direct Line", value: "+91 90338 78806", icon: "call" },
                      { label: "Digital Mail", value: "info@tryangle.tech", icon: "mail" },
                      { label: "Physical Node", value: "1st Floor-29/Vithal Plaza, New Naroda, Ahmedabad, Gujarat 382330", icon: "location_on" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-8 group">
                        <div className="w-16 h-16 border border-outline-variant flex items-center justify-center text-on-surface shrink-0 group-hover:border-primary group-hover:text-primary transition-all duration-500">
                          <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                        </div>
                        <div>
                          <h4 className="font-label font-bold text-primary mb-2 uppercase text-[10px] tracking-[0.4em]">{item.label}</h4>
                          <p className="text-on-surface-variant text-xl font-headline font-bold leading-relaxed tracking-tight">{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="p-10 border border-outline-variant hover:border-primary transition-all duration-500">
                    <span className="material-symbols-outlined text-4xl text-primary mb-6">forum</span>
                    <h4 className="font-headline font-bold text-xl mb-2 tracking-tight">Live Protocol</h4>
                    <p className="text-sm text-on-surface-variant font-sans">Response latency: &lt; 120s.</p>
                  </div>
                  <div className="p-10 border border-outline-variant hover:border-primary transition-all duration-500">
                    <span className="material-symbols-outlined text-4xl text-primary mb-6">schedule</span>
                    <h4 className="font-headline font-bold text-xl mb-2 tracking-tight">Operating Hours</h4>
                    <p className="text-sm text-on-surface-variant font-sans">Mon - Fri: 09:00 - 19:00 IST</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form Side */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <div className="p-12 lg:p-16 border border-outline-variant bg-surface-container-lowest relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-primary" />
                
                {formState === 'success' ? (
                  <div className="text-center py-24">
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-24 h-24 bg-primary/10 text-primary flex items-center justify-center mx-auto mb-8"
                    >
                      <span className="material-symbols-outlined text-5xl">check_circle</span>
                    </motion.div>
                    <h3 className="text-4xl font-headline font-bold text-on-surface mb-6 tracking-tight">Transmission Successful</h3>
                    <p className="text-on-surface-variant mb-12 text-xl font-sans">Your request has been logged. A specialist will initiate contact within 24 hours.</p>
                    <button 
                      onClick={() => setFormState('idle')}
                      className="text-primary font-label font-bold uppercase text-[10px] tracking-[0.3em] hover:underline"
                    >
                      New Transmission
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-10">
                    <div className="grid sm:grid-cols-2 gap-10">
                      <div className="space-y-3">
                        <label className="text-[10px] font-label font-bold text-on-surface-variant uppercase tracking-[0.4em]">Identity</label>
                        <input 
                          required
                          type="text" 
                          placeholder="Full Name" 
                          className="w-full bg-white border border-outline-variant py-5 px-6 focus:outline-none focus:border-primary transition-all font-headline font-bold text-lg"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-label font-bold text-on-surface-variant uppercase tracking-[0.4em]">Digital Address</label>
                        <input 
                          required
                          type="email" 
                          placeholder="Email Address" 
                          className="w-full bg-white border border-outline-variant py-5 px-6 focus:outline-none focus:border-primary transition-all font-headline font-bold text-lg"
                        />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-label font-bold text-on-surface-variant uppercase tracking-[0.4em]">Organization</label>
                      <input 
                        type="text" 
                        placeholder="Company Name" 
                        className="w-full bg-white border border-outline-variant py-5 px-6 focus:outline-none focus:border-primary transition-all font-headline font-bold text-lg"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-label font-bold text-on-surface-variant uppercase tracking-[0.4em]">Specification</label>
                      <textarea 
                        required
                        rows={5}
                        placeholder="Project requirements or inquiry details..." 
                        className="w-full bg-white border border-outline-variant py-5 px-6 focus:outline-none focus:border-primary transition-all resize-none font-headline font-bold text-lg"
                      ></textarea>
                    </div>
                    <button 
                      disabled={formState === 'submitting'}
                      type="submit" 
                      className="w-full bg-on-surface text-white py-6 font-label font-bold uppercase text-xs tracking-[0.3em] hover:bg-primary transition-all flex items-center justify-center gap-4 disabled:opacity-70"
                    >
                      {formState === 'submitting' ? 'Transmitting...' : (
                        <>
                          Send Request <span className="material-symbols-outlined text-xl">send</span>
                        </>
                      )}
                    </button>
                    <p className="text-center text-[9px] font-label font-bold text-on-surface-variant uppercase tracking-[0.2em]">
                      Data handled according to <span className="text-primary cursor-pointer">Security Protocols</span>.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-40">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-outline-variant h-[500px] relative group overflow-hidden"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.551103212009!2d72.651717314968!3d23.033504984947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e871f30000001%3A0x7000000000000000!2sVithal%20Plaza!5e0!3m2!1sen!2sin!4v1628000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="Office Location"
              className="group-hover:grayscale-0 transition-all duration-1000"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
