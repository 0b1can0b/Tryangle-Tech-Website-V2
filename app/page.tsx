'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  Minus, 
  Check, 
  ArrowRight, 
  Globe,
  Search,
  Layout as LayoutIcon,
  Smartphone,
  Code,
  Megaphone,
  FileText,
  Eye,
  Calendar,
  ChevronDown,
  Award,
  Users
} from 'lucide-react';
import Link from 'next/link';
import { blogPosts as staticPosts } from '@/src/data/blogs';
import { client } from '@/src/sanity/lib/client';
import { postsQuery } from '@/src/sanity/lib/queries';

const Hero = () => {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/5 -skew-x-12 translate-x-1/4 pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative">
        <motion.div 
          initial={{ y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 bg-brand-blue/10 text-brand-blue px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
            </span>
            Best IT Solutions in Ahmedabad
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-8 text-balance">
            Tryangle Tech: <span className="text-brand-blue">Innovating</span> Your Digital Future
          </h1>
          <p className="text-gray-600 text-xl mb-10 max-w-lg leading-relaxed">
            We lead a new age of digital innovation, breaking limits to set unmatched standards for creativity and technical excellence.
          </p>
          <div className="flex flex-wrap gap-6">
            <Link href="/contact" className="bg-black text-white px-10 py-4 rounded-full font-bold hover:bg-brand-blue transition-all duration-300 shadow-lg hover:shadow-brand-blue/20">
              Start Your Project
            </Link>
            <Link href="/portfolio" className="group flex items-center gap-3 text-gray-900 font-bold hover:text-brand-blue transition-colors">
              <span className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-brand-blue transition-colors">
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
              View Case Studies
            </Link>
          </div>
        </motion.div>
        <motion.div 
          initial={{ scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-brand-blue/20 rounded-3xl blur-2xl -rotate-3 scale-95" />
          <img 
            alt="IT Solutions Illustration" 
            className="w-full h-auto relative z-10 rounded-3xl shadow-2xl" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvkYhcrKw84fOkbz1aHZER3kgNyq0g8axM-I6O723PVpc97e0NtzG5BsEi_1BLd_sctJ0ClG8xwVPhBe2Jq3Wr00ydLWjcEqonSLJnnIqYzMiuymdO_u7YGGl33mvzBixBZK4sqQzOhCABeQFtBEoTDdL_v9aUP7X53NOPio4Y49Fl1dM0aJMSKPVsMRGH5CbkX7zgk9mLzmhWoG3TGJdu9HyUAWxaTlySWb4NUXVBNLkqpM8wWay86O_vMgQs2XDeRi6voUoPAq4"
            referrerPolicy="no-referrer"
          />
          {/* Floating elements */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-50 text-green-500 rounded-full flex items-center justify-center">
                <Check className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase">Projects Done</p>
                <p className="text-xl font-bold">350+</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Partners = () => {
  const partners = [
    { name: "Patel Associates", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJ35-6QC-U8lRN5ktrRxfK847stohuh7wRmiiAlQXaSKtxjb1ukies1BXWSyfWqqHDluWh1nkFH-k1MQPYQkdsSCHadnUNLWt7RAiGMlTKN_JYn87jWvwNXvTFekp5SkfDP03EtbBK7mjVdeWgzyokrcjmSoNlpwt1UlSv7UN8SiK8JdFKel5kw1Th1-TKoAF0csvbzmwam270VDDxq_bPnTv90OZg2--JmvMed5p-XzptwQ966NvmMWE53iruRT6MzV7vac2XOgk" },
    { name: "Evon", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCWUsGOUcEJrDJOA7985S6NwfnPC6f-5igyjwClZvmE52_xbZhBVFA0KxLHXqFgML6GTlqPLNmq8tU1UGOU7JcI9GiT-XEnIUb5U9lTknosttCGSo-NR0qqcre2BaeWyseePW0RsFNXcrN8lGk6WcJT0q3VdvnhudP-fqx6MhSdf-wpcSSXnRs6N1m36t1wwimkV69jGSgGCK3RxEq6uviRS5BBZQR5knkqcLbe5ISOO2g0hBNHnDXBu_oi08TF9vlyruPNEKI3-MA" },
    { name: "Toestrand", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnm4fDL00GqVVQ9zmPFtg1gfvl6JU2y_Z0UKenFm7Fgf4m3sRSnw3ba0EgqV_hIG62LhdoYYnHcMAaA5Oxju29Ah3AGaRR9_MfShdPMbnOfLcsj9YYnEByvhY74Mbf5y23fKVNxstq-Ic_xfbDobIex57X7_MhzIGjdauteOFipJVwPDkVJggNOQuEhlAR2CYkE1RuSj8umudN794d5CLPe2L3WXgZl2otI58gZW3M5Dsc9zMLfdfljLrjGh2shKQNnFpH6FMPDsg" },
    { name: "AquaFinest", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCAxm0ZJgrq7p2SLyMEna-uFEp51hdZIOqRJdr0h0ICViAVlLOs_aFR_d6lkUiaKhCOZMw6BZ7meUWTfiQDTWBaOfJkZ9YW3Picu0Ymjjzg3pzaldahLbs_dF9WhhnVoGJ8gfOFfUXblGSOG8uUOtINnANVzalnuonW70IQm-MPa3AgaQAmZvhRglbpVzT_OQo8Y7aZ4I5yfHH2CJ71olKIikSPLEDc-MGKXBGVt9qvMCX4hCGjN-AyO5PPntNj0-cOFbxFGU0KGB0" },
    { name: "HRK Air Compressor", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJCCgEI_Grk8EM5waKSODDlqlcZy36oKtlq0z3ezuTcJ37a6nHPGSU4YHp6lzI8u9ya_UihrA2wXreHRVGEue8Zs-MBJL1GQk7cDSE3v8xV6B4-jX2EG-SCi8RtdhGahngc6gbCJaWpHZk8m0vXvK5MXuXAfOmHqeFfFSzTHmn-F_RJY66UuuvSjDpbARM7Glz8zkyhnCXXY-HKIMS8XbIRIkLfWD64nzXGg97aztnw5PwgPjFfWLU1GPLyuB1-659XyO2R7QWiv8" },
  ];

  return (
    <section className="py-12 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center opacity-70">
          {partners.map((partner, idx) => (
            <img 
              key={idx} 
              alt={partner.name} 
              className="h-10 object-contain grayscale hover:grayscale-0 transition duration-300" 
              src={partner.src}
              referrerPolicy="no-referrer"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Web Design & Development",
      desc: "High-performing, secure, and SEO-friendly websites tailored to your business goals.",
      icon: <Globe className="h-8 w-8" />,
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGfYJlnGKuWELiIXwKRszIsdt9qixan4sgwlP8Q_JiFoFKCriKvMz2dJ_aYr8tjHIjav_2bZzQxU2XlCgOvcS5Jcnx8GrImpRZNjIfBgnUlsodrRiLHI21cIO8v186miQ2hrmvPZxlx26p_a4QTodyyKv91RNOjBFcV2lZ-mdR8TrQJ71M6sP7bhA42rchZFmUPlu5N1Q0GNremRVYdQjP5JOe8UYF9jFuy4-6NQ9ntR1Hj2OqH_pQqTbq3oh5j8k0lz2reYF5jns"
    },
    {
      title: "Digital Marketing",
      desc: "Complete digital marketing services including email & content marketing to boost visibility.",
      icon: <Megaphone className="h-8 w-8" />,
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYTDV809-IuxOJAXWV6P0JfSdLb2CpYzAotr-1oyb4WrfWbR0svJdGXJ0PjZAtq7XaMyFwY60J89YYVYX0tnBQwIabxXqr8Egvm4IsaQQE415rB72lJAUjqMaNxqsnRVIbapyKCE-d42bdw0vfAuFx5Y0y3f1v7BdsZkMn-eycupwyOTjuSXPcjJigZVymhRZyXUrLABy8ompxKytX4bkDSIxqba0D3sP22z64G8KbrPRWTyUZtOKDNTt0Ai3wFMncsVp8Y1E6Q0U"
    },
    {
      title: "Search Engine Optimization",
      desc: "Strategic SEO to provide companies with the visibility they require to attract customers.",
      icon: <Search className="h-8 w-8" />,
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfHR9fIBPUg5aXQJ7Gkk_aliSdeexwtAdOtfdLgY2srotRaN8j8Jv-NQUeScpCc7LlIr9YoXSE6nc18OwKqARefEMM0Ba6hQDRybFFcm2CoTZbShbwyuMRVHW8ifY7nNDUwaYGB1yYOjbHIrXgkDz0OLYU14fTgizc4JYr1pBZbRpXRo3yuBtVAhYDi4WrDIRtu-dFimQkUmGeGUsdVUVNn2Uyxd5miGZE9PgC2U8nBE1N_jAx7TlHI786vGa8I8PWo8ET3UVJTmY"
    },
    {
      title: "Graphics Designing",
      desc: "Professional graphic design assembling images, typography, and motion graphics.",
      icon: <LayoutIcon className="h-8 w-8" />,
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpm0-v_mrWKYWIF6B5kqWMl9e19w4oeHT-l9dAXBn4tJQdWd0_5F7kX1qswhKVSMe-1hLQbq6uScRVUoO3GaNoeRaCmsQd_bVefshv0K_x8HZAUFMCOwV3sEIjwFhhOk4CvsZ1U9zv3UcwyjPfdmksahYDhJK4gC-fnWm39CdLNtV2iVIQ56lT2V454bfK5JZb28Vei0bxf_6U3zDMMfVadjLjxsT9hv_AsnApSHZQVJFEP3kyqEfPRYkqh08DUTIsbbCkuwAdZ3s"
    },
    {
      title: "Mobile App Development",
      desc: "Intuitive and high-performance mobile apps for iOS and Android platforms.",
      icon: <Smartphone className="h-8 w-8" />,
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQnFZ4Gs0Y0vqO2XjJfeMJPzZAe0bpyZkMDEYdw3yU5A-bEIHWpcJ0Vxq9e_g_TcXD83K3KOmzb6h9mxhiONGflSNyE1EIf31i5FmJcVvtFhVIUtERFH9JXoOvLlhVRxY9apUTEPJZ3smiTYW571N7sgkk4D5wmkoja6y_tG2DOwewxT2xIBKmtTdIaCMAzHLwj9RGVb3TCAIKbTmJ8x-bPM-t-GgviKMlG7rt6YchHYcaUKOA_sZJ15yi6N_-vSTwcNP2Idcm3nw"
    },
    {
      title: "Custom Development",
      desc: "Bespoke software solutions integrated and upgraded to fit your unique ideas.",
      icon: <Code className="h-8 w-8" />,
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgN8s5KBEzYkrfqlm3VJYjoxC8Znq23eAXUaai3txr9DdnABp7JyrgUFSJuPB-1KXNATjPiib4Uv0pmBp_s6d7zoEqQCnHjq4ZzFaRNpoM1Ps5mp-sSHi-qMeLMd5zmu2SjxqWa2oVsvxf4Bd3QaTc-0VKxicKNtOKoFDm5unndN26NYzJWHAtyUDCHuVR6jViIDAiiV2p7siskpI6Ow51hcddiNFkwJvtB1xlXcuY4cQJDYaT8NQ9OPq4PZgFDj7Zrg_8rR9RmVg"
    },
  ];

  return (
    <section id="services" className="py-32 bg-gray-50/50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="inline-block text-brand-blue font-bold text-xs tracking-[0.3em] mb-6 uppercase border-b-2 border-brand-blue/20 pb-2">
          Our Popular Services
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
          Tryangle Tech: <span className="text-brand-blue">Best Web Development</span> for Limitless Growth
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-20 text-lg">
          Unlock your business's potential with Tryangle Tech's top-tier web development services. Our innovative solutions for limitless growth and success.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="bg-white p-10 rounded-3xl card-shadow text-left group hover:-translate-y-3 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-blue/5 rounded-bl-full -translate-y-full translate-x-full group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-500" />
              
              <div className="w-20 h-20 bg-brand-blue/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-blue transition-colors duration-500">
                <img 
                  alt={service.title} 
                  className="group-hover:invert group-hover:brightness-0 h-12 w-12 object-contain transition-all duration-500" 
                  src={service.img}
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-blue transition-colors">{service.title}</h3>
              <p className="text-gray-500 text-base leading-relaxed mb-8">
                {service.desc}
              </p>
              <Link className="inline-flex items-center gap-3 text-brand-blue font-bold group-hover:gap-4 transition-all" href="/services">
                Read More <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
        <motion.div 
          initial={{ x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-blue/10 rounded-full blur-3xl" />
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
            <img 
              alt="Developer Illustration" 
              className="w-full hover:scale-105 transition-transform duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMCLryjUyh4rBIPD-Jgbo3XADNEfOUQOkLkeNheY5v_GlIcrJIkIvlo7aEh1fmsIfPSZBBht6-H7PpOXSDUZSS4zixfL8UGT8d7GtIpjH2uXDUsX2vztu4tyTsXUcPKjowAjrOLZyGlKq2brOmxcqLsagSVkOKumaSGuCBGkhPByO5DKgDxHF1-yr52n2-AfLLGE1lPCJSN5uBRJKCBo2mqXqBuAGQb51zNcEVNIFP2-kTjefeVoDz0ScDxJSaQwmF9M5W3GfsW6Y"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-12 -right-12 bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 z-20 hidden md:block">
            <div className="flex items-center gap-6">
              <div className="text-5xl font-bold text-brand-blue">7+</div>
              <div className="text-sm font-bold text-gray-400 uppercase tracking-widest leading-tight">
                Years of <br /> Excellence
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block text-brand-blue font-bold text-xs tracking-[0.3em] mb-6 uppercase border-b-2 border-brand-blue/20 pb-2">
            About TryangleTech
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
            Discover the <span className="text-brand-blue">Story and Vision</span> of Trynagletech
          </h2>
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-10">
            <p>Welcome to Trynagletech, your one-stop solution for IT services. From attractive website design and development to powerful marketing strategies, flawless app and software development, to profitable digital marketing and SEO solutions, we help businesses succeed in the digital world.</p>
            <p className="italic text-gray-500 border-l-4 border-brand-blue/30 pl-6">TryangleTech, recognized as the best IT company in Ahmedabad. We specialize in delivering cutting-edge IT solutions that elevate businesses, setting new benchmarks in innovation and reliability.</p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-6 mb-12">
            {[
              "Digital Innovation",
              "Expert Web Dev",
              "Seamless Software",
              "Strategic Marketing"
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-4 group">
                <span className="w-8 h-8 bg-brand-blue/10 text-brand-blue rounded-full flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-colors">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <span className="font-bold text-gray-800">{item}</span>
              </li>
            ))}
          </ul>
          <Link href="/about" className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-full font-bold hover:bg-brand-blue transition-all duration-300 shadow-lg hover:shadow-brand-blue/20">
            Learn More About Us <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "What industries does your IT company specialize in serving?",
      a: "Tryangle Tech serves a diverse range of industries, including e-commerce, healthcare, finance, education, and manufacturing, providing tailored IT solutions for each sector."
    },
    {
      q: "Does your company offer ongoing support and maintenance?",
      a: "Yes, we provide comprehensive post-launch support and maintenance services to ensure your digital solutions remain secure, updated, and perform at their best."
    },
    {
      q: "How does your IT consulting process work?",
      a: "Our consulting process begins with a deep dive into your business goals, followed by a strategic roadmap, technology selection, and a clear execution plan."
    },
    {
      q: "What is the typical timeline for a software project?",
      a: "Project timelines vary based on complexity. A standard website might take 4-6 weeks, while complex custom software can range from 3 to 6 months."
    },
    {
      q: "What technologies does your development team specialize in?",
      a: "We specialize in modern stacks including React, Node.js, Python, Flutter, and cloud platforms like AWS and Azure to build robust and scalable applications."
    },
    {
      q: "Do you provide free Domain & Hosting with development?",
      a: "We offer various packages that include complimentary domain registration and high-speed hosting for the first year to help you get started quickly."
    }
  ];

  return (
    <section className="py-32 bg-gray-50/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
        <motion.div
          initial={{ x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block text-brand-blue font-bold text-xs tracking-[0.3em] mb-6 uppercase border-b-2 border-brand-blue/20 pb-2">
            Common Questions
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
            Tryangle Tech's <span className="text-brand-blue">Informative</span> FAQ Section
          </h2>
          <p className="text-gray-500 mb-12 text-lg leading-relaxed">
            "Explore answers to common queries about Tryangle Tech's innovative services, guiding you toward informed decisions for your business's technological advancements."
          </p>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div 
                key={idx} 
                className="bg-white rounded-2xl overflow-hidden card-shadow border border-gray-100"
              >
                <button 
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center group transition-colors"
                >
                  <span className={`text-lg font-bold transition-colors ${openIdx === idx ? 'text-brand-blue' : 'text-gray-800 group-hover:text-brand-blue'}`}>
                    {faq.q}
                  </span>
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openIdx === idx ? 'bg-brand-blue text-white rotate-180' : 'bg-gray-100 text-gray-400'}`}>
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>
                <AnimatePresence>
                  {openIdx === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-8 pb-8 text-gray-500 text-base leading-relaxed border-t border-gray-50 pt-6">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div 
          initial={{ scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-brand-blue/10 rounded-3xl blur-3xl -rotate-6 scale-95" />
          <img 
            alt="Support Illustration" 
            className="w-full relative z-10 rounded-3xl shadow-2xl" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEYEzEdEZJiK6GWDgCMmb5ZxFDXjNg5ls-0pZFJs9x_W-KXNIXhvV9vAQlcgGb6Q9aWuF9uMoA8eYp6kZCOjszt5bAyJ-ssLWQ9mijuxswy2HZIBD6NQazv7G3w4PbP6gppZvhxoDtPpSjQcbhS8UAgptIJOyl5zF2JYs4qvkYcfwTue4mtwUd21G1daUYVeD0lF3Gbrpln8pmr6gFNu6vt4jZxniyzEW6FERfhkg7B6_ua_fbYkxkOc8ZXsJdKC5reXcmYuDLePU"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const projects = [
    { title: "VH ACCOUNTING", color: "bg-blue-50", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnJ3V0siux16JVj0qksUJXzwdSbx9vtKsXPbO2PjhiuL7QENbx0Du6HYGF0doG4OxmJyoenvuih-gNHzYKf-QFJnrafemdDAtDgTaewB2lTbIv7QDu0QxvRPxTI6wyu7ikbJpc2Khxv14HdcbSjr9INjXGCadVe-OW4OlWNnpjknu80YmpZu-uNOM3SELhiiy_aq3JK82gvf25giMyfhjC_tA2BJQoS7xsXjEMUcUyvusLIKWjmHe-duq7dE6_t5rHtCaS3UtU9B8" },
    { title: "VARNET ENTERPRISE", color: "bg-red-50", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuChzD5NduZGGY6EUK001xaTDwuui_mdS-m0qgIwXKlsA6-bJAWBdrOj0gWWFOYMAcHxhcXFnhNnsHjjqHb7zEGJztDISNZIS9a3DFIQDUGdFrZLtIYdy7_9pJCyyQWsC-v9ZBwbBd2oMdbZQEB4mpTfbf3wc8KJ6xfkritRGKkJca35ZiaIQ4BnpB6KLHrgS4qLb-mCrr4OCOEl3qLrU_uR8fLuPY-R2ccK9RLx-mrBbomL3HEUyzQccouSM8DB-etdnriXUUFIDbo" },
    { title: "SECURE EDGE", color: "bg-green-50", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQTMYBCLnpTzHZlagqeO-khy77hcqc81nPutnmFIJLxSobAKEZyxFn919v6JMTrqcDwBEjaj4APwXdU0dxnx-tAakdIanxoH40FbctbiHOZAimToNA2QOA3a4ydUU1aHnZ7T1JpQMo2idwc04bTcVNyYlfv8F7YnY2fvsOxP9tEj-TxYUWeKys2gY1r19Y-6l4GC5PAe3wkLmtKSR8Vt4rUd8B1Qs5vtvg3DEyGSJf9EoaodMHt2AAxsRjaGaf2PnkI9ZGuyc8fjI" }
  ];

  return (
    <section id="projects" className="py-32">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="inline-block text-brand-blue font-bold text-xs tracking-[0.3em] mb-6 uppercase border-b-2 border-brand-blue/20 pb-2">
          Our Case Studies
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
          Trynagletech's Showcase of <span className="text-brand-blue">Success Stories</span>
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-20 text-lg italic">
          "Navigating Success: Illuminating Trynagletech's Achievements Through Compelling Case Studies"
        </p>
        
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.2 }}
              className="rounded-3xl overflow-hidden shadow-xl border border-gray-100 group bg-white hover:shadow-2xl transition-all duration-500"
            >
              <div className={`${project.color} p-10 flex flex-col items-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4 z-10">
                  <Link href="/portfolio" className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-brand-blue hover:scale-110 transition-transform">
                    <Eye className="h-6 w-6" />
                  </Link>
                </div>
                <h4 className="font-bold text-xl mb-6">{project.title}</h4>
                <img 
                  alt={project.title} 
                  className="rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-700 w-full aspect-[4/3] object-cover" 
                  src={project.img}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 flex justify-between items-center">
                <div className="text-left">
                  <p className="text-xs font-bold text-brand-blue uppercase tracking-widest mb-1">Web Development</p>
                  <h5 className="font-bold text-gray-900">{project.title}</h5>
                </div>
                <Link href="/contact" className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-colors">
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <Link href="/portfolio" className="inline-flex items-center gap-3 bg-gray-900 text-white px-10 py-4 rounded-full font-bold hover:bg-brand-blue transition-all duration-300 shadow-lg hover:shadow-brand-blue/20">
          View All Case Studies <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
};

const Blog = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        // 1. Try Sanity
        const sanityPosts = await client.fetch(postsQuery);
        if (sanityPosts && sanityPosts.length > 0) {
          const mappedPosts = sanityPosts.map((post: any) => ({
            id: post.slug,
            title: post.title,
            category: post.category,
            image: post.image,
            date: new Date(post.publishedAt).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric'
            })
          }));
          setPosts(mappedPosts);
          setLoading(false);
          return;
        }

        // 2. Try Local API (Dynamic MDX)
        const localResponse = await fetch('/api/local-blogs');
        if (localResponse.ok) {
          const localPosts = await localResponse.json();
          if (localPosts && localPosts.length > 0) {
            setPosts(localPosts);
            setLoading(false);
            return;
          }
        }

        // 3. Fallback to Static Data
        setPosts(staticPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setPosts(staticPosts);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  return (
    <section id="blog" className="py-32 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="inline-block text-brand-blue font-bold text-xs tracking-[0.3em] mb-6 uppercase border-b-2 border-brand-blue/20 pb-2">
              Our Latest News
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              AI Philosophy and <span className="text-brand-blue">Future Insights</span> from Our Blog
            </h2>
          </div>
          <Link href="/blog" className="group flex items-center gap-3 text-gray-900 font-bold hover:text-brand-blue transition-colors">
            View All Posts
            <span className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-brand-blue transition-colors">
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {loading ? (
            <div className="col-span-full flex justify-center py-10">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-brand-blue"></div>
            </div>
          ) : (
            posts.slice(0, 3).map((post, idx) => (
              <motion.div
                key={post.id}
                initial={{ y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link href={`/blog/${post.id}`} className="bg-white rounded-3xl overflow-hidden card-shadow group block h-full">
                  <div className="relative overflow-hidden h-56">
                    <img 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                      src={post.image}
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-brand-blue uppercase tracking-widest">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-4">
                      <Calendar className="h-3 w-3 text-brand-blue" />
                      {post.date}
                    </div>
                    <h3 className="font-bold text-lg mb-4 line-clamp-2 group-hover:text-brand-blue transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <div className="inline-flex items-center gap-2 text-brand-blue text-xs font-bold group-hover:gap-3 transition-all">
                      Read More <ArrowRight className="h-3 w-3" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { label: "Years of Experience", value: "7+", icon: <Award className="h-8 w-8" /> },
    { label: "Happy Clients", value: "750+", icon: <Users className="h-8 w-8" /> },
    { label: "Countries Served", value: "5+", icon: <Globe className="h-8 w-8" /> },
    { label: "Websites Developed", value: "350+", icon: <Code className="h-8 w-8" /> }
  ];

  return (
    <section className="py-32 bg-brand-blue relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-black/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0">
          {stats.map((stat, idx) => (
            <div key={idx} className={`flex flex-col items-center text-center ${idx !== 0 ? "lg:border-l lg:border-white/20" : ""}`}>
              <motion.div
                initial={{ y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md border border-white/10 text-white">
                  {stat.icon}
                </div>
                <div className="text-5xl lg:text-6xl font-bold text-white mb-3 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-white/70 font-bold uppercase tracking-[0.2em] text-[10px]">
                  {stat.label}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  console.log('Home page rendering');
  return (
    <>
      <Hero />
      <Partners />
      <Services />
      <About />
      <FAQ />
      <Portfolio />
      <Blog />
      <Stats />
    </>
  );
}
