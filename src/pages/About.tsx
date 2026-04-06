import { motion } from 'motion/react';
import { Check, Target, Eye, Award, Users, Heart, Code } from 'lucide-react';

const About = () => {
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
              About Our Company
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-[1.1] text-balance">
              Empowering Businesses Through <br />
              <span className="text-brand-blue">Digital Innovation</span>
            </h1>
            <p className="text-gray-500 max-w-3xl mx-auto text-xl leading-relaxed">
              Tryangle Tech is a leading IT solutions provider in Ahmedabad, dedicated to helping businesses navigate the complexities of the digital world with precision and creativity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-blue/10 rounded-full blur-3xl" />
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                alt="Our Team Working" 
                className="w-full hover:scale-105 transition-transform duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvkYhcrKw84fOkbz1aHZER3kgNyq0g8axM-I6O723PVpc97e0NtzG5BsEi_1BLd_sctJ0ClG8xwVPhBe2Jq3Wr00ydLWjcEqonSLJnnIqYzMiuymdO_u7YGGl33mvzBixBZK4sqQzOhCABeQFtBEoTDdL_v9aUP7X53NOPio4Y49Fl1dM0aJMSKPVsMRGH5CbkX7zgk9mLzmhWoG3TGJdu9HyUAWxaTlySWb4NUXVBNLkqpM8wWay86O_vMgQs2XDeRi6voUoPAq4"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-12 -right-12 bg-white p-10 rounded-3xl shadow-2xl border border-gray-100 z-20 hidden md:block">
              <div className="text-5xl font-bold text-brand-blue mb-2">7+</div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest leading-tight">
                Years of <br /> Excellence
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block text-brand-blue font-bold text-xs tracking-[0.3em] mb-6 uppercase border-b-2 border-brand-blue/20 pb-2">
              Our Journey
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              From Vision to <span className="text-brand-blue">Digital Reality</span>
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-10">
              <p>
                Founded with a vision to bridge the gap between complex technology and business needs, Tryangle Tech has grown into a trusted partner for hundreds of clients worldwide. We started as a small team of passionate developers and have evolved into a full-service IT powerhouse.
              </p>
              <p>
                Our approach is simple: we listen, we innovate, and we deliver. Every project we undertake is an opportunity to create something exceptional that drives real value for our clients.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div className="flex items-center gap-4 group">
                <div className="w-14 h-14 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors">
                  <Award className="h-6 w-6" />
                </div>
                <span className="font-bold text-gray-800">Award Winning</span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-14 h-14 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors">
                  <Users className="h-6 w-6" />
                </div>
                <span className="font-bold text-gray-800">Expert Team</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-900 text-white py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 p-12 rounded-3xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-500"
          >
            <div className="w-16 h-16 bg-brand-blue rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-brand-blue/20">
              <Target className="h-8 w-8" />
            </div>
            <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              To provide innovative and high-quality IT solutions that empower businesses to achieve their full potential in the digital landscape through creativity, technical excellence, and unwavering commitment.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 p-12 rounded-3xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-500"
          >
            <div className="w-16 h-16 bg-brand-blue rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-brand-blue/20">
              <Eye className="h-8 w-8" />
            </div>
            <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              To be the most trusted and innovative IT partner globally, recognized for transforming ideas into digital success stories and setting new standards for excellence in the technology industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <div className="inline-block text-brand-blue font-bold text-xs tracking-[0.3em] mb-6 uppercase border-b-2 border-brand-blue/20 pb-2">
              Our Core Values
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              The Principles That <span className="text-brand-blue">Drive Us</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "Innovation", desc: "We constantly push boundaries to find creative solutions for complex problems, ensuring our clients stay ahead of the curve.", icon: <Code className="h-8 w-8" /> },
              { title: "Integrity", desc: "We believe in honest communication and building long-term trust with our clients through transparency and accountability.", icon: <Heart className="h-8 w-8" /> },
              { title: "Excellence", desc: "We are committed to delivering high-quality work that exceeds expectations, setting new standards in every project.", icon: <Award className="h-8 w-8" /> }
            ].map((value, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 rounded-3xl border border-gray-100 hover:border-brand-blue/30 transition-all duration-500 group card-shadow-hover"
              >
                <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue mb-8 group-hover:bg-brand-blue group-hover:text-white transition-all duration-500">
                  {value.icon}
                </div>
                <h4 className="text-2xl font-bold mb-4 group-hover:text-brand-blue transition-colors">{value.title}</h4>
                <p className="text-gray-500 text-lg leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
