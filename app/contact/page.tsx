'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, User, CheckCircle2 } from 'lucide-react';

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
      <section className="bg-brand-gray/30 py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Contact <span className="text-brand-blue">Us</span>
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Have a project in mind? We'd love to hear from you. Let's build something great together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center text-brand-blue shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Call Us</h4>
                  <p className="text-gray-600">+91 90338 78806</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center text-brand-blue shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Email Us</h4>
                  <p className="text-gray-600">info.tryangletech@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center text-brand-blue shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Visit Us</h4>
                  <p className="text-gray-600 leading-relaxed">
                    1st Floor-29/Vithal Plaza, New Naroda, Ahmedabad, Gujarat 382330
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-brand-dark rounded-2xl text-white">
              <h4 className="text-xl font-bold mb-6">Working Hours</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="text-white">09:00 AM - 07:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-white">10:00 AM - 04:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-brand-blue font-bold">Closed</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="zoho-card p-8 lg:p-12"
          >
            {formState === 'success' ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent!</h3>
                <p className="text-gray-600 mb-8">Thank you for reaching out. We'll get back to you soon.</p>
                <button 
                  onClick={() => setFormState('idle')}
                  className="text-brand-blue font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Full Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full bg-gray-50 border border-gray-100 rounded-lg py-3 px-4 focus:outline-none focus:border-brand-blue transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Email Address</label>
                  <input 
                    required
                    type="email" 
                    placeholder="your@email.com" 
                    className="w-full bg-gray-50 border border-gray-100 rounded-lg py-3 px-4 focus:outline-none focus:border-brand-blue transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Your Message</label>
                  <textarea 
                    required
                    rows={5}
                    placeholder="How can we help you?" 
                    className="w-full bg-gray-50 border border-gray-100 rounded-lg py-3 px-4 focus:outline-none focus:border-brand-blue transition-all resize-none"
                  ></textarea>
                </div>
                <button 
                  disabled={formState === 'submitting'}
                  type="submit" 
                  className="w-full bg-brand-blue text-white py-4 rounded-lg font-bold hover:bg-brand-blue/90 transition-all flex items-center justify-center gap-2 disabled:opacity-70 shadow-button"
                >
                  {formState === 'submitting' ? 'Sending...' : (
                    <>
                      Send Message <Send className="h-5 w-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding pt-0">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-2xl overflow-hidden h-[450px] shadow-zoho grayscale hover:grayscale-0 transition-all duration-700">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.551103212009!2d72.651717314968!3d23.033504984947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e871f30000001%3A0x7000000000000000!2sVithal%20Plaza!5e0!3m2!1sen!2sin!4v1628000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="Office Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
