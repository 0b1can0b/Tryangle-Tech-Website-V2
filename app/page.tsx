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
  Users,
  MessageSquare,
  Star
} from 'lucide-react';
import Link from 'next/link';
import { blogPosts as staticPosts } from '@/src/data/blogs';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-gray/30 -skew-x-12 translate-x-1/4 pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-blue/5 border border-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-wider mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
              </span>
              Trusted by 750+ Businesses
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-[1.1] text-gray-900 tracking-tight">
              Your Partner in <br />
              <span className="text-brand-blue">Digital Evolution</span>
            </h1>
            <p className="text-gray-600 text-xl mb-10 leading-relaxed max-w-xl">
              From custom software to digital marketing, we provide the tools and expertise you need to scale your business in the modern era.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="bg-brand-blue text-white px-10 py-4 rounded-lg font-bold hover:bg-brand-blue/90 transition-all shadow-button text-lg">
                Get Started Free
              </Link>
              <Link href="/services" className="bg-white text-gray-700 border border-gray-200 px-10 py-4 rounded-lg font-bold hover:bg-gray-50 transition-all text-lg">
                Explore Services
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-zoho border border-gray-100 bg-white p-2">
              <img 
                alt="Digital Innovation" 
                className="w-full h-auto rounded-xl" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGfYJlnGKuWELiIXwKRszIsdt9qixan4sgwlP8Q_JiFoFKCriKvMz2dJ_aYr8tjHIjav_2bZzQxU2XlCgOvcS5Jcnx8GrImpRZNjIfBgnUlsodrRiLHI21cIO8v186miQ2hrmvPZxlx26p_a4QTodyyKv91RNOjBFcV2lZ-mdR8TrQJ71M6sP7bhA42rchZFmUPlu5N1Q0GNremRVYdQjP5JOe8UYF9jFuy4-6NQ9ntR1Hj2OqH_pQqTbq3oh5j8k0lz2reYF5jns"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-zoho border border-gray-50 z-20 hidden lg:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center text-brand-green">
                  <Check className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">Project Delivered</div>
                  <div className="text-xs text-gray-500">Just now</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
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
    <section className="py-16 bg-white border-b border-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-[0.3em] mb-12">Trusted by 500+ Companies Worldwide</p>
        <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24">
          {partners.map((partner, idx) => (
            <img 
              key={idx} 
              alt={partner.name} 
              className="h-8 object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer" 
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
      title: "Web Development",
      desc: "High-performance, secure, and SEO-friendly websites tailored to your goals.",
      icon: <Globe className="h-8 w-8 text-brand-blue" />,
      color: "bg-brand-blue/10",
      link: "/services"
    },
    {
      title: "Digital Marketing",
      desc: "Boost your brand visibility and reach your target audience effectively.",
      icon: <Megaphone className="h-8 w-8 text-brand-red" />,
      color: "bg-brand-red/10",
      link: "/services"
    },
    {
      title: "SEO Optimization",
      desc: "Rank higher on search engine result pages and attract more customers.",
      icon: <Search className="h-8 w-8 text-brand-green" />,
      color: "bg-brand-green/10",
      link: "/services"
    },
    {
      title: "Mobile Apps",
      desc: "Intuitive and high-performance apps for iOS and Android platforms.",
      icon: <Smartphone className="h-8 w-8 text-brand-yellow" />,
      color: "bg-brand-yellow/10",
      link: "/services"
    },
    {
      title: "Custom Software",
      desc: "Bespoke software solutions to solve your unique business challenges.",
      icon: <Code className="h-8 w-8 text-brand-blue" />,
      color: "bg-brand-blue/10",
      link: "/services"
    },
    {
      title: "Graphic Design",
      desc: "Creative visual designs that communicate your brand's unique story.",
      icon: <LayoutIcon className="h-8 w-8 text-brand-red" />,
      color: "bg-brand-red/10",
      link: "/services"
    }
  ];

  return (
    <section id="services" className="section-padding bg-brand-gray/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Solutions for Every <span className="text-brand-blue">Business Need</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We offer a comprehensive suite of IT services designed to help your business thrive in the digital age.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="zoho-card p-10 group"
            >
              <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-brand-blue transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {service.desc}
              </p>
              <Link href={service.link} className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:gap-3 transition-all">
                Learn More <ArrowRight className="h-4 w-4" />
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
    <section id="about" className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
            <img 
              alt="Our Team" 
              className="w-full h-auto" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvkYhcrKw84fOkbz1aHZER3kgNyq0g8axM-I6O723PVpc97e0NtzG5BsEi_1BLd_sctJ0ClG8xwVPhBe2Jq3Wr00ydLWjcEqonSLJnnIqYzMiuymdO_u7YGGl33mvzBixBZK4sqQzOhCABeQFtBEoTDdL_v9aUP7X53NOPio4Y49Fl1dM0aJMSKPVsMRGH5CbkX7zgk9mLzmhWoG3TGJdu9HyUAWxaTlySWb4NUXVBNLkqpM8wWay86O_vMgQs2XDeRi6voUoPAq4"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 bg-brand-blue p-8 rounded-2xl shadow-2xl z-20 hidden md:block text-white">
            <div className="text-4xl font-bold mb-1">7+</div>
            <div className="text-xs font-bold uppercase tracking-widest opacity-80">Years of Excellence</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight text-gray-900">
            Empowering Businesses Through <span className="text-brand-blue">Innovation</span>
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Tryangle Tech is a leading IT solutions provider dedicated to helping businesses navigate the complexities of the digital world. Our mission is to provide innovative and high-quality solutions that empower our clients to achieve their full potential.
          </p>
          <div className="space-y-6 mb-10">
            {[
              { title: "Expert Team", desc: "Our professionals are experts in their respective fields with years of experience." },
              { title: "Quality Work", desc: "We maintain high standards of quality in every project we deliver." },
              { title: "Fast Delivery", desc: "We value your time and ensure timely delivery of all projects." }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0 mt-1">
                  <Check className="h-3.5 w-3.5 text-brand-blue" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <Link href="/about" className="inline-flex items-center gap-2 text-brand-blue font-bold hover:gap-3 transition-all">
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
      q: "What industries do you specialize in?",
      a: "Tryangle Tech serves a diverse range of industries, including e-commerce, healthcare, finance, education, and manufacturing, providing tailored IT solutions for each sector."
    },
    {
      q: "Do you offer ongoing support?",
      a: "Yes, we provide comprehensive post-launch support and maintenance services to ensure your digital solutions remain secure, updated, and perform at their best."
    },
    {
      q: "How does your consulting process work?",
      a: "Our consulting process begins with a deep dive into your business goals, followed by a strategic roadmap, technology selection, and a clear execution plan."
    },
    {
      q: "What is the typical project timeline?",
      a: "Project timelines vary based on complexity. A standard website might take 4-6 weeks, while complex custom software can range from 3 to 6 months."
    }
  ];

  return (
    <section className="section-padding bg-brand-gray/30">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">Everything you need to know about our services and processes.</p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="zoho-card overflow-hidden">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-gray-900 text-lg">{faq.q}</span>
                <div className={`w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center transition-transform duration-300 ${openIdx === idx ? 'rotate-180 bg-brand-blue border-brand-blue text-white' : 'text-gray-400'}`}>
                  <ChevronDown className="h-5 w-5" />
                </div>
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-8 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const projects = [
    { title: "VH Accounting", category: "Web Development", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnJ3V0siux16JVj0qksUJXzwdSbx9vtKsXPbO2PjhiuL7QENbx0Du6HYGF0doG4OxmJyoenvuih-gNHzYKf-QFJnrafemdDAtDgTaewB2lTbIv7QDu0QxvRPxTI6wyu7ikbJpc2Khxv14HdcbSjr9INjXGCadVe-OW4OlWNnpjknu80YmpZu-uNOM3SELhiiy_aq3JK82gvf25giMyfhjC_tA2BJQoS7xsXjEMUcUyvusLIKWjmHe-duq7dE6_t5rHtCaS3UtU9B8" },
    { title: "Varnet Enterprise", category: "Web Development", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuChzD5NduZGGY6EUK001xaTDwuui_mdS-m0qgIwXKlsA6-bJAWBdrOj0gWWFOYMAcHxhcXFnhNnsHjjqHb7zEGJztDISNZIS9a3DFIQDUGdFrZLtIYdy7_9pJCyyQWsC-v9ZBwbBd2oMdbZQEB4mpTfbf3wc8KJ6xfkritRGKkJca35ZiaIQ4BnpB6KLHrgS4qLb-mCrr4OCOEl3qLrU_uR8fLuPY-R2ccK9RLx-mrBbomL3HEUyzQccouSM8DB-etdnriXUUFIDbo" },
    { title: "Secure Edge", category: "Web Development", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQTMYBCLnpTzHZlagqeO-khy77hcqc81nPutnmFIJLxSobAKEZyxFn919v6JMTrqcDwBEjaj4APwXdU0dxnx-tAakdIanxoH40FbctbiHOZAimToNA2QOA3a4ydUU1aHnZ7T1JpQMo2idwc04bTcVNyYlfv8F7YnY2fvsOxP9tEj-TxYUWeKys2gY1r19Y-6l4GC5PAe3wkLmtKSR8Vt4rUd8B1Qs5vtvg3DEyGSJf9EoaodMHt2AAxsRjaGaf2PnkI9ZGuyc8fjI" }
  ];

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Recent <span className="text-brand-blue">Success Stories</span>
            </h2>
            <p className="text-gray-600 text-lg">
              We take pride in delivering exceptional results for our clients. Here are some of our latest projects.
            </p>
          </div>
          <Link href="/portfolio" className="bg-brand-blue text-white px-8 py-3 rounded-lg font-bold hover:bg-brand-blue/90 transition-all shadow-button">
            View All Projects
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 shadow-zoho group-hover:shadow-zoho-hover transition-all duration-500">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-blue/0 group-hover:bg-brand-blue/10 transition-colors duration-500" />
              </div>
              <div className="text-xs font-bold text-brand-blue uppercase tracking-wider mb-2">{project.category}</div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-blue transition-colors">{project.title}</h3>
            </motion.div>
          ))}
        </div>
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
        const localResponse = await fetch('/api/local-blogs');
        if (localResponse.ok) {
          const localPosts = await localResponse.json();
          if (localPosts && localPosts.length > 0) {
            setPosts(localPosts);
            setLoading(false);
            return;
          }
        }
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
    <section id="blog" className="section-padding bg-brand-gray/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Latest from <span className="text-brand-blue">Our Blog</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Stay updated with the latest trends and insights in the digital world.
            </p>
          </div>
          <Link href="/blog" className="bg-white text-brand-blue border border-brand-blue px-8 py-3 rounded-lg font-bold hover:bg-brand-blue hover:text-white transition-all">
            Read All Posts
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="zoho-card overflow-hidden group"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                    <span>{post.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-brand-blue transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link href={`/blog/${post.id}`} className="inline-flex items-center gap-2 text-brand-blue font-bold hover:gap-3 transition-all">
                    Read More <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
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
    { label: "Years Experience", value: "7+", icon: <Award className="h-8 w-8" /> },
    { label: "Happy Clients", value: "750+", icon: <Users className="h-8 w-8" /> },
    { label: "Countries Served", value: "5+", icon: <Globe className="h-8 w-8" /> },
    { label: "Websites Developed", value: "350+", icon: <Code className="h-8 w-8" /> }
  ];

  return (
    <section className="py-20 bg-brand-blue relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0">
          {stats.map((stat, idx) => (
            <div key={idx} className={`flex flex-col items-center text-center ${idx !== 0 ? "lg:border-l lg:border-white/20" : ""}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white/70 font-medium text-sm">
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

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      role: "CEO, TechCorp",
      content: "Tryangle Tech transformed our digital presence. Their expertise in web development and AI integration is unmatched. Highly recommended for any business looking to scale.",
      image: "https://i.pravatar.cc/150?u=john"
    },
    {
      name: "Sarah Smith",
      role: "Marketing Director, Global Solutions",
      content: "The team at Tryangle Tech is professional, creative, and highly skilled. They delivered our project on time and exceeded our expectations in every way.",
      image: "https://i.pravatar.cc/150?u=sarah"
    },
    {
      name: "Michael Brown",
      role: "Founder, StartupHub",
      content: "Working with Tryangle Tech was a game-changer for us. Their innovative approach to software development helped us launch our MVP in record time.",
      image: "https://i.pravatar.cc/150?u=michael"
    }
  ];

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Trusted by <span className="text-brand-blue">Industry Leaders</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="zoho-card p-10 flex flex-col"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-brand-yellow text-brand-yellow" />
                ))}
              </div>
              <p className="text-gray-600 mb-8 leading-relaxed italic flex-grow">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border border-gray-100" />
                <div>
                  <div className="font-bold text-gray-900">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role}</div>
                </div>
              </div>
            </motion.div>
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
      <Testimonials />
      <Blog />
      <Stats />
    </>
  );
}
