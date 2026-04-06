import { motion } from 'motion/react';
import { Check, Target, Eye, Award, Users, Heart } from 'lucide-react';

const About = () => {
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
            <p className="text-brand-blue font-semibold text-sm tracking-widest mb-4 uppercase">■ About Our Company ■</p>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Empowering Businesses Through <br />
              <span className="text-brand-blue">Digital Innovation</span>
            </h1>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Tryangle Tech is a leading IT solutions provider in Ahmedabad, dedicated to helping businesses navigate the complexities of the digital world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Founded with a vision to bridge the gap between complex technology and business needs, Tryangle Tech has grown into a trusted partner for hundreds of clients worldwide. We started as a small team of passionate developers and have evolved into a full-service IT powerhouse.
              </p>
              <p>
                Our approach is simple: we listen, we innovate, and we deliver. Every project we undertake is an opportunity to create something exceptional that drives real value for our clients.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-brand-blue">
                    <Award className="h-5 w-5" />
                  </div>
                  <span className="font-semibold text-gray-800">Award Winning</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-brand-blue">
                    <Users className="h-5 w-5" />
                  </div>
                  <span className="font-semibold text-gray-800">Expert Team</span>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              alt="Our Team Working" 
              className="rounded-2xl shadow-2xl" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvkYhcrKw84fOkbz1aHZER3kgNyq0g8axM-I6O723PVpc97e0NtzG5BsEi_1BLd_sctJ0ClG8xwVPhBe2Jq3Wr00ydLWjcEqonSLJnnIqYzMiuymdO_u7YGGl33mvzBixBZK4sqQzOhCABeQFtBEoTDdL_v9aUP7X53NOPio4Y49Fl1dM0aJMSKPVsMRGH5CbkX7zgk9mLzmhWoG3TGJdu9HyUAWxaTlySWb4NUXVBNLkqpM8wWay86O_vMgQs2XDeRi6voUoPAq4"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -left-10 bg-brand-blue text-white p-8 rounded-2xl hidden md:block">
              <p className="text-4xl font-bold mb-1">7+</p>
              <p className="text-sm uppercase tracking-widest">Years Experience</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-900 text-white py-24 mb-32">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 p-10 rounded-2xl border border-white/10"
          >
            <div className="w-14 h-14 bg-brand-blue rounded-xl flex items-center justify-center mb-6">
              <Target className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-400 leading-relaxed">
              To provide innovative and high-quality IT solutions that empower businesses to achieve their full potential in the digital landscape through creativity, technical excellence, and unwavering commitment.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 p-10 rounded-2xl border border-white/10"
          >
            <div className="w-14 h-14 bg-brand-blue rounded-xl flex items-center justify-center mb-6">
              <Eye className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-400 leading-relaxed">
              To be the most trusted and innovative IT partner globally, recognized for transforming ideas into digital success stories and setting new standards for excellence in the technology industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
          <p className="text-gray-500">The principles that guide everything we do at Tryangle Tech.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Innovation", desc: "We constantly push boundaries to find creative solutions for complex problems.", icon: <Code className="h-6 w-6" /> },
            { title: "Integrity", desc: "We believe in honest communication and building long-term trust with our clients.", icon: <Heart className="h-6 w-6" /> },
            { title: "Excellence", desc: "We are committed to delivering high-quality work that exceeds expectations.", icon: <Award className="h-6 w-6" /> }
          ].map((value, idx) => (
            <div key={idx} className="p-8 rounded-2xl border border-gray-100 hover:border-brand-blue/30 transition-colors group">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-brand-blue mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                {value.icon}
              </div>
              <h4 className="text-xl font-bold mb-3">{value.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const Code = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

export default About;
