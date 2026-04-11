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
      <section className="bg-zoho-bg-light py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-zoho-blue/5 -skew-x-12 translate-x-1/4 pointer-events-none" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl lg:text-6xl font-black text-zoho-dark mb-6 leading-tight tracking-tighter">
              Let's Talk <br />
              <span className="text-zoho-blue">Business.</span>
            </h1>
            <p className="text-zoho-muted text-xl leading-relaxed">
              Whether you have a question about features, pricing, or anything else, our team is ready to answer all your questions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section-padding">
        <div className="container-custom grid lg:grid-cols-2 gap-24">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-black text-zoho-dark mb-8">Contact Information</h2>
                <div className="grid gap-8">
                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 bg-zoho-blue/10 rounded-xl flex items-center justify-center text-zoho-blue shrink-0 group-hover:bg-zoho-blue group-hover:text-white transition-all duration-300">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-black text-zoho-dark mb-1 uppercase text-xs tracking-widest">Sales & Support</h4>
                      <p className="text-zoho-muted text-lg">+91 90338 78806</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 bg-zoho-green/10 rounded-xl flex items-center justify-center text-zoho-green shrink-0 group-hover:bg-zoho-green group-hover:text-white transition-all duration-300">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-black text-zoho-dark mb-1 uppercase text-xs tracking-widest">Email Us</h4>
                      <p className="text-zoho-muted text-lg">info.tryangletech@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 bg-zoho-red/10 rounded-xl flex items-center justify-center text-zoho-red shrink-0 group-hover:bg-zoho-red group-hover:text-white transition-all duration-300">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-black text-zoho-dark mb-1 uppercase text-xs tracking-widest">Headquarters</h4>
                      <p className="text-zoho-muted leading-relaxed">
                        1st Floor-29/Vithal Plaza, New Naroda,<br /> Ahmedabad, Gujarat 382330
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                <div className="p-8 bg-zoho-bg-light rounded-2xl">
                  <MessageSquare className="h-8 w-8 text-zoho-blue mb-4" />
                  <h4 className="font-black text-zoho-dark mb-2">Live Chat</h4>
                  <p className="text-sm text-zoho-muted">Average response time: 2 minutes.</p>
                </div>
                <div className="p-8 bg-zoho-bg-light rounded-2xl">
                  <Clock className="h-8 w-8 text-zoho-blue mb-4" />
                  <h4 className="font-black text-zoho-dark mb-2">Business Hours</h4>
                  <p className="text-sm text-zoho-muted">Mon - Fri: 9 AM - 7 PM IST</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="zoho-card p-8 lg:p-12 relative"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-zoho-blue rounded-t-2xl" />
            {formState === 'success' ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-zoho-green/10 text-zoho-green rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <h3 className="text-3xl font-black text-zoho-dark mb-4">Message Sent!</h3>
                <p className="text-zoho-muted mb-8 text-lg">Thank you for reaching out. A solution expert will contact you within 24 hours.</p>
                <button 
                  onClick={() => setFormState('idle')}
                  className="text-zoho-blue font-black uppercase text-xs tracking-widest hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-zoho-muted uppercase tracking-widest">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full bg-gray-50 border border-gray-100 rounded-xl py-4 px-5 focus:outline-none focus:border-zoho-blue focus:bg-white transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-zoho-muted uppercase tracking-widest">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="john@company.com" 
                      className="w-full bg-gray-50 border border-gray-100 rounded-xl py-4 px-5 focus:outline-none focus:border-zoho-blue focus:bg-white transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-zoho-muted uppercase tracking-widest">Company Name</label>
                  <input 
                    type="text" 
                    placeholder="Acme Corp" 
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl py-4 px-5 focus:outline-none focus:border-zoho-blue focus:bg-white transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-zoho-muted uppercase tracking-widest">Your Message</label>
                  <textarea 
                    required
                    rows={4}
                    placeholder="How can we help your business?" 
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl py-4 px-5 focus:outline-none focus:border-zoho-blue focus:bg-white transition-all resize-none"
                  ></textarea>
                </div>
                <button 
                  disabled={formState === 'submitting'}
                  type="submit" 
                  className="w-full bg-zoho-dark text-white py-5 rounded-xl font-black uppercase text-xs tracking-widest hover:bg-zoho-blue transition-all flex items-center justify-center gap-3 disabled:opacity-70 shadow-button"
                >
                  {formState === 'submitting' ? 'Sending Request...' : (
                    <>
                      Send Message <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
                <p className="text-center text-xs text-zoho-muted">
                  By submitting this form, you agree to our <span className="text-zoho-blue cursor-pointer">Privacy Policy</span>.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="rounded-2xl overflow-hidden h-[500px] shadow-zoho-lg border border-gray-100 relative group">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.551103212009!2d72.651717314968!3d23.033504984947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e871f30000001%3A0x7000000000000000!2sVithal%20Plaza!5e0!3m2!1sen!2sin!4v1628000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="Office Location"
              className="grayscale group-hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
