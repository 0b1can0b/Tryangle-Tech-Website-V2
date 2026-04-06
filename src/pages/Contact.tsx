import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, User, Globe, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <div className="pt-12 pb-24">
      {/* Header Section */}
      <section className="bg-gray-50 py-20 mb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-brand-blue font-semibold text-sm tracking-widest mb-4 uppercase">■ Contact Us ■</p>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Let's Start a <span className="text-brand-blue">Conversation</span>
            </h1>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Have a project in mind or just want to say hello? We'd love to hear from you. Our team is ready to help you with your next big idea.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            <p className="text-gray-500 mb-12 leading-relaxed">
              We are committed to providing exceptional service and support. Whether you're a startup or an established enterprise, we have the expertise to help you succeed.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-500">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Phone Number</h4>
                  <p className="text-gray-500">+91 90338 78806</p>
                  <p className="text-gray-500">+91 99745 54406</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-500">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email Address</h4>
                  <p className="text-gray-500">info.tryangletech@gmail.com</p>
                  <p className="text-gray-500">support@tryangletech.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-500">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Office Address</h4>
                  <p className="text-gray-500">1st Floor-29/Vithal Plaza, New Naroda, Ahmedabad, Gujarat 382330</p>
                </div>
              </div>
            </div>

            <div className="mt-16 p-8 bg-gray-900 rounded-3xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <h4 className="text-xl font-bold mb-4 relative z-10">Working Hours</h4>
              <ul className="space-y-3 text-gray-400 relative z-10">
                <li className="flex justify-between"><span>Monday - Friday</span> <span>09:00 AM - 07:00 PM</span></li>
                <li className="flex justify-between"><span>Saturday</span> <span>10:00 AM - 04:00 PM</span></li>
                <li className="flex justify-between text-brand-blue font-bold"><span>Sunday</span> <span>Closed</span></li>
              </ul>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100"
          >
            {formState === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Message Sent Successfully!</h3>
                <p className="text-gray-500 mb-8">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                <button 
                  onClick={() => setFormState('idle')}
                  className="text-brand-blue font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                      <User className="h-4 w-4 text-brand-blue" /> Full Name
                    </label>
                    <input 
                      required
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                      <Mail className="h-4 w-4 text-brand-blue" /> Email Address
                    </label>
                    <input 
                      required
                      type="email" 
                      placeholder="john@example.com" 
                      className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                      <Phone className="h-4 w-4 text-brand-blue" /> Phone Number
                    </label>
                    <input 
                      type="tel" 
                      placeholder="+91 90338 78806" 
                      className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                      <Globe className="h-4 w-4 text-brand-blue" /> Subject
                    </label>
                    <select className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition appearance-none">
                      <option>Web Development</option>
                      <option>App Development</option>
                      <option>Digital Marketing</option>
                      <option>Graphic Design</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                    <MessageSquare className="h-4 w-4 text-brand-blue" /> Your Message
                  </label>
                  <textarea 
                    required
                    rows={5}
                    placeholder="Tell us about your project..." 
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition resize-none"
                  ></textarea>
                </div>

                <button 
                  disabled={formState === 'submitting'}
                  type="submit" 
                  className="w-full bg-brand-blue text-white py-4 rounded-xl font-bold hover:bg-brand-dark transition flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formState === 'submitting' ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
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
      <section className="max-w-7xl mx-auto px-6">
        <div className="rounded-3xl overflow-hidden h-[450px] shadow-xl border border-gray-100 grayscale hover:grayscale-0 transition-all duration-700">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.551103212009!2d72.651717314968!3d23.033504984947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e871f30000001%3A0x7000000000000000!2sVithal%20Plaza!5e0!3m2!1sen!2sin!4v1628000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
