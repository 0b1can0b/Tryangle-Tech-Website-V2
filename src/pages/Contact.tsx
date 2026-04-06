import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, User, Globe, CheckCircle2, ChevronDown } from 'lucide-react';

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
    <div className="pb-32">
      {/* Header Section */}
      <section className="relative py-32 overflow-hidden bg-gray-50/50">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/5 -skew-x-12 translate-x-1/4 pointer-events-none" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block text-brand-blue font-bold text-xs tracking-[0.3em] mb-8 uppercase border-b-2 border-brand-blue/20 pb-2">
              Contact Us
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-[1.1] text-balance">
              Let's Start a <span className="text-brand-blue">Conversation</span>
            </h1>
            <p className="text-gray-500 max-w-3xl mx-auto text-xl leading-relaxed">
              Have a project in mind or just want to say hello? We'd love to hear from you. Our team is ready to help you with your next big idea.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-start">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block text-brand-blue font-bold text-xs tracking-[0.3em] mb-6 uppercase border-b-2 border-brand-blue/20 pb-2">
              Get in Touch
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              Ready to <span className="text-brand-blue">Innovate?</span>
            </h2>
            <p className="text-gray-500 mb-12 text-lg leading-relaxed">
              We are committed to providing exceptional service and support. Whether you're a startup or an established enterprise, we have the expertise to help you succeed in the digital landscape.
            </p>

            <div className="space-y-10">
              <div className="flex items-start gap-8 group">
                <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-500 shadow-sm">
                  <Phone className="h-7 w-7" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Phone Number</h4>
                  <p className="text-gray-500 text-lg">+91 90338 78806</p>
                  <p className="text-gray-500 text-lg">+91 99745 54406</p>
                </div>
              </div>

              <div className="flex items-start gap-8 group">
                <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-500 shadow-sm">
                  <Mail className="h-7 w-7" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Email Address</h4>
                  <p className="text-gray-500 text-lg">info.tryangletech@gmail.com</p>
                  <p className="text-gray-500 text-lg">support@tryangletech.com</p>
                </div>
              </div>

              <div className="flex items-start gap-8 group">
                <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-500 shadow-sm">
                  <MapPin className="h-7 w-7" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Office Address</h4>
                  <p className="text-gray-500 text-lg leading-relaxed">1st Floor-29/Vithal Plaza, New Naroda, Ahmedabad, Gujarat 382330</p>
                </div>
              </div>
            </div>

            <div className="mt-16 p-10 bg-gray-900 rounded-[2.5rem] text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-40 h-40 bg-brand-blue/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
              <h4 className="text-2xl font-bold mb-6 relative z-10">Working Hours</h4>
              <ul className="space-y-4 text-gray-400 relative z-10 text-lg">
                <li className="flex justify-between items-center">
                  <span className="font-medium">Monday - Friday</span> 
                  <span className="text-white font-bold">09:00 AM - 07:00 PM</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-medium">Saturday</span> 
                  <span className="text-white font-bold">10:00 AM - 04:00 PM</span>
                </li>
                <li className="flex justify-between items-center text-brand-blue font-bold">
                  <span>Sunday</span> 
                  <span className="bg-brand-blue/20 px-3 py-1 rounded-full text-xs uppercase tracking-widest">Closed</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-[3rem] p-10 lg:p-16 shadow-2xl border border-gray-100 relative"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />
            
            {formState === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20 relative z-10">
                <div className="w-24 h-24 bg-green-50 text-green-500 rounded-3xl flex items-center justify-center mb-8 shadow-lg shadow-green-100">
                  <CheckCircle2 className="h-12 w-12" />
                </div>
                <h3 className="text-3xl font-bold mb-6">Message Sent Successfully!</h3>
                <p className="text-gray-500 mb-10 text-lg leading-relaxed">Thank you for reaching out. Our team will get back to you within 24 hours to discuss your project.</p>
                <button 
                  onClick={() => setFormState('idle')}
                  className="text-brand-blue font-bold text-lg hover:underline underline-offset-8"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-gray-700 flex items-center gap-2 uppercase tracking-widest">
                      <User className="h-4 w-4 text-brand-blue" /> Full Name
                    </label>
                    <input 
                      required
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 px-6 focus:outline-none focus:ring-4 focus:ring-brand-blue/10 focus:border-brand-blue transition-all duration-300 text-lg"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-gray-700 flex items-center gap-2 uppercase tracking-widest">
                      <Mail className="h-4 w-4 text-brand-blue" /> Email Address
                    </label>
                    <input 
                      required
                      type="email" 
                      placeholder="john@example.com" 
                      className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 px-6 focus:outline-none focus:ring-4 focus:ring-brand-blue/10 focus:border-brand-blue transition-all duration-300 text-lg"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-gray-700 flex items-center gap-2 uppercase tracking-widest">
                      <Phone className="h-4 w-4 text-brand-blue" /> Phone Number
                    </label>
                    <input 
                      type="tel" 
                      placeholder="+91 90338 78806" 
                      className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 px-6 focus:outline-none focus:ring-4 focus:ring-brand-blue/10 focus:border-brand-blue transition-all duration-300 text-lg"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-gray-700 flex items-center gap-2 uppercase tracking-widest">
                      <Globe className="h-4 w-4 text-brand-blue" /> Subject
                    </label>
                    <div className="relative">
                      <select className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 px-6 focus:outline-none focus:ring-4 focus:ring-brand-blue/10 focus:border-brand-blue transition-all duration-300 text-lg appearance-none cursor-pointer">
                        <option>Web Development</option>
                        <option>App Development</option>
                        <option>Digital Marketing</option>
                        <option>Graphic Design</option>
                        <option>Other</option>
                      </select>
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                        <ChevronDown className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-bold text-gray-700 flex items-center gap-2 uppercase tracking-widest">
                    <MessageSquare className="h-4 w-4 text-brand-blue" /> Your Message
                  </label>
                  <textarea 
                    required
                    rows={5}
                    placeholder="Tell us about your project goals and requirements..." 
                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 px-6 focus:outline-none focus:ring-4 focus:ring-brand-blue/10 focus:border-brand-blue transition-all duration-300 text-lg resize-none"
                  ></textarea>
                </div>

                <button 
                  disabled={formState === 'submitting'}
                  type="submit" 
                  className="w-full bg-brand-blue text-white py-5 rounded-2xl font-bold hover:bg-brand-blue/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed shadow-xl shadow-brand-blue/20 text-lg"
                >
                  {formState === 'submitting' ? (
                    <div className="w-7 h-7 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      Send Message <Send className="h-6 w-6" />
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
        <div className="rounded-[3rem] overflow-hidden h-[500px] shadow-2xl border border-gray-100 grayscale hover:grayscale-0 transition-all duration-1000 relative group">
          <div className="absolute inset-0 bg-brand-blue/5 pointer-events-none group-hover:bg-transparent transition-colors duration-1000" />
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
      </section>
    </div>
  );
};

export default Contact;
