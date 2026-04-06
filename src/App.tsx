/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ChevronRight, 
  Plus, 
  Minus, 
  Check, 
  ArrowRight, 
  Instagram, 
  Facebook, 
  Linkedin, 
  MessageCircle,
  Globe,
  Search,
  Layout,
  Smartphone,
  Code,
  Megaphone,
  FileText,
  Eye,
  Calendar
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img 
            alt="Tryangle Tech Logo" 
            className="h-10" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqZ8OWsUlvXeLUPvTyL8gGLff0liDy3qc046YpubkrEIo9bUeeGQQqu5JYOECY-UuMrZbJRn3fA6Le5luyXN9VLzZWq0oQIvovCvvQ9cN8FS-5_KkzLjzVXvNAx2BavQeS5-PcgSAygat3Prsg9-yidxqyvAaYormu2J1yPEtnzJVxC0K0-pwPXJHiddgXi2ghAovQsBybA1lDrWT7AjjYpKwGLCWJQTh12H8Ipl3ABGQJO-AB9FB0drGDM07DWpPV_cA-Llx_6rg"
            referrerPolicy="no-referrer"
          />
        </div>
        <ul className="hidden lg:flex items-center space-x-8 text-sm font-medium">
          <li><a className="text-brand-blue" href="#">Home</a></li>
          <li><a className="hover:text-brand-blue transition" href="#about">About</a></li>
          <li><a className="hover:text-brand-blue transition" href="#services">Our Services</a></li>
          <li><a className="hover:text-brand-blue transition" href="#projects">Projects</a></li>
          <li><a className="hover:text-brand-blue transition" href="#blog">Blog</a></li>
          <li><a className="hover:text-brand-blue transition" href="#contact">Contact us</a></li>
        </ul>
        <a className="bg-black text-white px-6 py-2.5 rounded text-sm font-medium flex items-center gap-2 hover:bg-gray-800 transition" href="#">
          <Mail className="h-4 w-4" />
          Get in Touch
        </a>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Tryangle Tech : <span className="text-brand-blue">The Best IT Company in Ahmedabad for Innovative IT Solutions</span>
          </h1>
          <p className="text-gray-600 text-lg mb-10 max-w-lg">
            Trynagletech is Best IT Company in Ahmedabad. Join us on this journey as we lead a new age of digital innovation, breaking limits to set unmatched standards for creativity in the digital world.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-black text-white px-8 py-3.5 rounded-md font-medium hover:bg-gray-800 transition">Contact Us Today!</button>
            <button className="border border-gray-200 text-gray-800 px-8 py-3.5 rounded-md font-medium hover:bg-gray-50 transition flex items-center gap-2">
              View Case Study <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <img 
            alt="IT Solutions Illustration" 
            className="w-full h-auto" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvkYhcrKw84fOkbz1aHZER3kgNyq0g8axM-I6O723PVpc97e0NtzG5BsEi_1BLd_sctJ0ClG8xwVPhBe2Jq3Wr00ydLWjcEqonSLJnnIqYzMiuymdO_u7YGGl33mvzBixBZK4sqQzOhCABeQFtBEoTDdL_v9aUP7X53NOPio4Y49Fl1dM0aJMSKPVsMRGH5CbkX7zgk9mLzmhWoG3TGJdu9HyUAWxaTlySWb4NUXVBNLkqpM8wWay86O_vMgQs2XDeRi6voUoPAq4"
            referrerPolicy="no-referrer"
          />
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
      desc: "Tryangletech is a highly specialized team for website development and services. You will get high-performing...",
      icon: <Globe className="h-8 w-8" />,
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGfYJlnGKuWELiIXwKRszIsdt9qixan4sgwlP8Q_JiFoFKCriKvMz2dJ_aYr8tjHIjav_2bZzQxU2XlCgOvcS5Jcnx8GrImpRZNjIfBgnUlsodrRiLHI21cIO8v186miQ2hrmvPZxlx26p_a4QTodyyKv91RNOjBFcV2lZ-mdR8TrQJ71M6sP7bhA42rchZFmUPlu5N1Q0GNremRVYdQjP5JOe8UYF9jFuy4-6NQ9ntR1Hj2OqH_pQqTbq3oh5j8k0lz2reYF5jns"
    },
    {
      title: "Digital Marketing",
      desc: "Tryangletech provides you with complete digital marketing services. It includes email & Content marketing...",
      icon: <Megaphone className="h-8 w-8" />,
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYTDV809-IuxOJAXWV6P0JfSdLb2CpYzAotr-1oyb4WrfWbR0svJdGXJ0PjZAtq7XaMyFwY60J89YYVYX0tnBQwIabxXqr8Egvm4IsaQQE415rB72lJAUjqMaNxqsnRVIbapyKCE-d42bdw0vfAuFx5Y0y3f1v7BdsZkMn-eycupwyOTjuSXPcjJigZVymhRZyXUrLABy8ompxKytX4bkDSIxqba0D3sP22z64G8KbrPRWTyUZtOKDNTt0Ai3wFMncsVp8Y1E6Q0U"
    },
    {
      title: "Search Engine Optimization",
      desc: "SEO is important for online businesses as it provides companies with the visibility they require to attract customers...",
      icon: <Search className="h-8 w-8" />,
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfHR9fIBPUg5aXQJ7Gkk_aliSdeexwtAdOtfdLgY2srotRaN8j8Jv-NQUeScpCc7LlIr9YoXSE6nc18OwKqARefEMM0Ba6hQDRybFFcm2CoTZbShbwyuMRVHW8ifY7nNDUwaYGB1yYOjbHIrXgkDz0OLYU14fTgizc4JYr1pBZbRpXRo3yuBtVAhYDi4WrDIRtu-dFimQkUmGeGUsdVUVNn2Uyxd5miGZE9PgC2U8nBE1N_jAx7TlHI786vGa8I8PWo8ET3UVJTmY"
    },
    {
      title: "Graphics Designing",
      desc: "A graphic designer is a professional within the graphic design and graphic arts industry who assembles together images...",
      icon: <Layout className="h-8 w-8" />,
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpm0-v_mrWKYWIF6B5kqWMl9e19w4oeHT-l9dAXBn4tJQdWd0_5F7kX1qswhKVSMe-1hLQbq6uScRVUoO3GaNoeRaCmsQd_bVefshv0K_x8HZAUFMCOwV3sEIjwFhhOk4CvsZ1U9zv3UcwyjPfdmksahYDhJK4gC-fnWm39CdLNtV2iVIQ56lT2V454bfK5JZb28Vei0bxf_6U3zDMMfVadjLjxsT9hv_AsnApSHZQVJFEP3kyqEfPRYkqh08DUTIsbbCkuwAdZ3s"
    },
    {
      title: "Mobile App Development",
      desc: "We are a Mobile App Design and Development Company in India working for brands across the globe. Tell us ...",
      icon: <Smartphone className="h-8 w-8" />,
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQnFZ4Gs0Y0vqO2XjJfeMJPzZAe0bpyZkMDEYdw3yU5A-bEIHWpcJ0Vxq9e_g_TcXD83K3KOmzb6h9mxhiONGflSNyE1EIf31i5FmJcVvtFhVIUtERFH9JXoOvLlhVRxY9apUTEPJZ3smiTYW571N7sgkk4D5wmkoja6y_tG2DOwewxT2xIBKmtTdIaCMAzHLwj9RGVb3TCAIKbTmJ8x-bPM-t-GgviKMlG7rt6YchHYcaUKOA_sZJ15yi6N_-vSTwcNP2Idcm3nw"
    },
    {
      title: "Custom Development",
      desc: "Invent, integrate, build and upgrade your ideas with our services at Tryangletech We help you to create high-quality ...",
      icon: <Code className="h-8 w-8" />,
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgN8s5KBEzYkrfqlm3VJYjoxC8Znq23eAXUaai3txr9DdnABp7JyrgUFSJuPB-1KXNATjPiib4Uv0pmBp_s6d7zoEqQCnHjq4ZzFaRNpoM1Ps5mp-sSHi-qMeLMd5zmu2SjxqWa2oVsvxf4Bd3QaTc-0VKxicKNtOKoFDm5unndN26NYzJWHAtyUDCHuVR6jViIDAiiV2p7siskpI6Ow51hcddiNFkwJvtB1xlXcuY4cQJDYaT8NQ9OPq4PZgFDj7Zrg_8rR9RmVg"
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-brand-blue font-semibold text-sm tracking-widest mb-4 uppercase">■ Our Popular Service ■</p>
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
          Tryangle Tech: <span className="text-brand-blue">Best Web development Services</span> for Limitless Growth
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-16">
          Unlock your business's potential with Tryangle Tech's top-tier web development services. Our innovative solutions for limitless growth and success in the digital landscape.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl card-shadow text-left group hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-blue transition-colors">
                <img 
                  alt={service.title} 
                  className="group-hover:invert group-hover:brightness-0 h-10 w-10 object-contain" 
                  src={service.img}
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {service.desc}
              </p>
              <a className="text-brand-blue font-semibold flex items-center gap-2 group-hover:gap-3 transition-all" href="#">
                Read More <span className="bg-brand-blue text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img 
            alt="Developer Illustration" 
            className="w-full" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMCLryjUyh4rBIPD-Jgbo3XADNEfOUQOkLkeNheY5v_GlIcrJIkIvlo7aEh1fmsIfPSZBBht6-H7PpOXSDUZSS4zixfL8UGT8d7GtIpjH2uXDUsX2vztu4tyTsXUcPKjowAjrOLZyGlKq2brOmxcqLsagSVkOKumaSGuCBGkhPByO5DKgDxHF1-yr52n2-AfLLGE1lPCJSN5uBRJKCBo2mqXqBuAGQb51zNcEVNIFP2-kTjefeVoDz0ScDxJSaQwmF9M5W3GfsW6Y"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-brand-blue font-semibold text-sm tracking-widest mb-4 uppercase">■ About TryangleTech ■</p>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Discover the <span className="text-brand-blue">Story and Vision</span> of Trynagletech
          </h2>
          <div className="space-y-4 text-gray-600 text-sm leading-relaxed mb-8">
            <p>Welcome to Trynagletech, your one-stop solution for IT services. From attractive website design and development to powerful marketing strategies, flawless app and software development, to profitable digital marketing and SEO solutions, we help businesses succeed in the digital world.</p>
            <p>Use our expertise to improve your online presence and unlock your full potential. At Tryangletech, we turn ideas into digital success stories.</p>
            <p className="italic text-gray-500">TryangleTech, recognized as the best IT company in Ahmedabad. We specialize in delivering cutting-edge IT solutions that elevate businesses, setting new benchmarks in innovation and reliability.</p>
          </div>
          <ul className="space-y-4 mb-10">
            {[
              "Elevate Your Business With Digital Innovation.",
              "Crafting Digital Experiences With Expert Website Development",
              "Transforming Ideas into Seamless Software Solutions."
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <span className="bg-blue-50 text-brand-blue p-1 rounded-full"><Check className="h-4 w-4" strokeWidth={3} /></span>
                <span className="font-medium text-gray-800">{item}</span>
              </li>
            ))}
          </ul>
          <button className="border border-gray-200 text-gray-800 px-8 py-3 rounded text-sm font-medium hover:bg-gray-50 transition">View more about us →</button>
        </motion.div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    "What industries does your IT company specialize in serving?",
    "Does your company offer ongoing support and maintenance after project completion?",
    "How does your IT consulting process work?",
    "What is the typical timeline for a software development project?",
    "What technologies does your development team specialize in?",
    "Does Your company provide free Domain & Hosting with website development?"
  ];

  return (
    <section className="py-24 bg-gray-50/30">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-brand-blue font-semibold text-sm tracking-widest mb-4 uppercase">■ Frequently Asked Questions ■</p>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Trynagletech's <span className="text-brand-blue font-normal italic">Informative</span> FAQ Section
          </h2>
          <p className="text-gray-500 mb-10">"Explore answers to common queries about Trynagletech's innovative services, guiding you toward informed decisions for your business's technological advancements."</p>
          <div className="space-y-2">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white border border-gray-100 rounded-lg overflow-hidden">
                <button 
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center font-semibold text-gray-800 hover:bg-gray-50 transition"
                >
                  {faq}
                  {openIdx === idx ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </button>
                <AnimatePresence>
                  {openIdx === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-4 text-sm text-gray-500"
                    >
                      Our team provides comprehensive solutions tailored to your specific business needs, ensuring high performance and scalability.
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <img 
            alt="Support Illustration" 
            className="w-full" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEYEzEdEZJiK6GWDgCMmb5ZxFDXjNg5ls-0pZFJs9x_W-KXNIXhvV9vAQlcgGb6Q9aWuF9uMoA8eYp6kZCOjszt5bAyJ-ssLWQ9mijuxswy2HZIBD6NQazv7G3w4PbP6gppZvhxoDtPpSjQcbhS8UAgptIJOyl5zF2JYs4qvkYcfwTue4mtwUd21G1daUYVeD0lF3Gbrpln8pmr6gFNu6vt4jZxniyzEW6FERfhkg7B6_ua_fbYkxkOc8ZXsJdKC5reXcmYuDLePU"
            referrerPolicy="no-referrer"
          />
        </div>
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
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-brand-blue font-semibold text-sm tracking-widest mb-4 uppercase">■ Our Case Study ■</p>
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
          Trynagletech's Showcase of <span className="text-brand-blue">Success Stories</span>
        </h2>
        <p className="text-gray-400 max-w-lg mx-auto mb-12 italic text-sm">
          "Navigating Success: Illuminating Trynagletech's Achievements Through Compelling Case Studies"
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {["Websites Development", "App Development", "Software Development", "Graphic Design"].map((cat, idx) => (
            <button key={idx} className={`${idx === 0 ? 'bg-brand-blue text-white' : 'border border-gray-200 text-gray-600 hover:bg-gray-50'} px-6 py-2.5 rounded-md text-sm font-medium transition`}>
              {cat}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="rounded-xl overflow-hidden shadow-lg border border-gray-100 group"
            >
              <div className={`${project.color} p-6 flex flex-col items-center`}>
                <h4 className="font-bold text-lg mb-4">{project.title}</h4>
                <a className="bg-brand-blue text-white text-[10px] px-4 py-1 rounded-full mb-4 hover:bg-brand-dark transition" href="#">CONTACT NOW</a>
                <img 
                  alt={project.title} 
                  className="rounded shadow-sm group-hover:scale-105 transition-transform duration-500" 
                  src={project.img}
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          ))}
        </div>
        <button className="bg-black text-white px-8 py-3.5 rounded-md font-medium flex items-center gap-2 mx-auto hover:bg-gray-800 transition">
          <Eye className="h-4 w-4" />
          View more case study
        </button>
      </div>
    </section>
  );
};

const Blog = () => {
  const blogs = [
    { title: "What is Digital Marketing? ...", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQRgdFElGqEqIJ9aOvPktYHjyHNf9i5rLomWbgDgWEaYdqVqRxc5Gt7IIMcs7IPjXpS9IqWN9Srt1nejx8tOF1er3a9CTXCR08chO4gZBlE8pvXBzZ6U1b96UfVsDpKcfM8OzEMSOdhmRnp9hamZ2M0uXVjfQAskwwgxOsHcGfiQ5aCzh3_pHiHCdgVVfUxVNn67x1XiJl2por4hzxpneZTl_B5YxT0YlQyUhYmSRo7fycRDKANvrY6VjdwGdUVJbNh2MLZ_DKNQ4" },
    { title: "How to Make Your Business ...", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXwCWoz6we1PlgKGh66nWOkLHRBxaH70Pslg6WxQDXQ7iqXQTVPTxnK9c0SIs0A9gUKGe8FLvjuCjiTZ7Ss7jynuDZOnhZiv9x66F_LJnMaal69YSBmat6PRNyNDitrDxZllakfO3LwW_AwSl-VW1JaK3O9m1H9UhmLrGr5a9RUiTvIUTMAQMol_1pvMAzsaPNk5KFL8D4leXsEOlGdJRLQ-Gbso3kJ1XbN5Fkwz_n69gjTkoGr27rAoCM8LCsRh1S-H0snkMYCG0" },
    { title: "5 Free Ways to Promote Yo...", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLpH25ivZ8JlO2DO3BKDB72a5-UPYjORhR2bBBsZ5V9TjjNXM24mPKcVEWCR3rM8v8tt6UEIBUg_5GcrxLiI_Wk0q_JuDWdZJ1ID0g_naurJdEwn_JpHSkJgpQCEXczIw5ugBscc4DVHMdWpMJTpuGYevubGsy-F4MOi9ms0kWBo7-ZRQ87xqIXw8Jb_l2xEKT5lCBtkBuq-e-j51Di74aDDJFZxycOV49Ok425gvVZ1PhFRQRzCb_HtwXCwx1OqmDFEQVgorDy4Y" },
    { title: "What is a Website Domain ...", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTp_LFzgWvxdClSq-7gbX05YtM0G4wyKoHhun027TUxmAQhCJUBN-i8G__iIkp5FGulSiYh3xA7qbl4-gFaD4cuxMWHiauuSQGEmDqv6pstDLp-etfer6XFf89uJJpi6FPAnITlKa35YJSRoMjoWI_8LZqAhv0FuSEZlqu_QwziOBSBe8Gfd-yvpOaHedOV-tPqfNay0Z6z1PCV767-JGLTlkf_nI6A9Q59IGrnwbYHlPog1TcupHlbZNWDND5-OxQpCQQHuRiqYY" }
  ];

  return (
    <section id="blog" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <div className="bg-brand-blue/10 p-2 rounded">
            <FileText className="h-6 w-6 text-brand-blue" />
          </div>
          <h2 className="text-3xl font-bold">Latest Blog & Updates</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogs.map((blog, idx) => (
            <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-sm group">
              <div className="relative overflow-hidden h-48">
                <img 
                  alt={blog.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  src={blog.img}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold mb-4 line-clamp-2 hover:text-brand-blue cursor-pointer transition">{blog.title}</h3>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <span className="bg-brand-blue text-white p-1 rounded-sm"><Calendar className="h-3 w-3" /></span>
                  August 14, 2023 · Uncategorized
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { label: "Years of Experience", value: "7+" },
    { label: "Happy Clients", value: "750+" },
    { label: "Countries We Serve In", value: "5+" },
    { label: "Website Developed", value: "350+" }
  ];

  return (
    <section className="py-20 gradient-blue text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className={idx !== 0 ? "lg:border-l border-white/20" : ""}>
              <motion.div 
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="text-5xl font-bold mb-2"
              >
                {stat.value}
              </motion.div>
              <div className="text-blue-100 uppercase tracking-widest text-xs">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-black text-white pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#111111] rounded-2xl p-8 mb-16 grid md:grid-cols-3 gap-8 items-center border border-gray-800">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-brand-blue flex items-center justify-center">
              <Phone className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase font-medium">Phone Number</p>
              <p className="font-semibold">+91 90338 78806</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-brand-blue flex items-center justify-center">
              <Mail className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase font-medium">Email</p>
              <p className="font-semibold">info.tryangletech@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-brand-blue flex items-center justify-center">
              <MapPin className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase font-medium">Address</p>
              <p className="font-semibold text-sm">1st Floor-29/Vithal Plaza, New Naroda, Ahmedabad</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-12 border-b border-gray-800 pb-16 mb-8">
          <div>
            <img 
              alt="Footer Logo" 
              className="h-10 mb-6 brightness-0 invert" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYgNYxh-aVMj0I0io_KwnJ57kN2kwyoPmaV4ft3HudqBq677Rkqwb9I9w1XrSRzsFoWaeV3MJfMf3AWrMw_ivsOtFUgJ4tewfg4lPe78m2MYloU8fFo2nS23T_3ujRxbzivJHfiNY0LVQgsXVn0_vzAa8abK_FA3XOVFyfZRB2Hi8XdUXflQTLgnRiUpOgIBlQPhXX1I8zQCHNQPbkNxNHWCFyN5MoL_wmVYwgXttQANUIn3eQWtkrEGBxnyawD7C4q38cwhd7bjc"
              referrerPolicy="no-referrer"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              At Tryangletech, we are about technology and dedicated to providing IT solutions for businesses of all sizes.
            </p>
            <div className="flex gap-4">
              <a className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center hover:bg-brand-blue transition" href="#"><Instagram className="h-4 w-4" /></a>
              <a className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center hover:bg-brand-blue transition" href="#"><Facebook className="h-4 w-4" /></a>
              <a className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center hover:bg-brand-blue transition" href="#"><Linkedin className="h-4 w-4" /></a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {["Home", "About Us", "Our Services", "Projects", "Blog", "Contact"].map((link, idx) => (
                <li key={idx}><a className="hover:text-brand-blue transition" href="#">{link}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {[
                "Website Development",
                "Website Design",
                "Application Development",
                "Digital Marketing",
                "Branding & Design"
              ].map((service, idx) => (
                <li key={idx} className="flex items-center gap-2 hover:text-brand-blue transition cursor-pointer">
                  <ChevronRight className="h-3 w-3 text-brand-blue" /> {service}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">Latest posts</h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                "https://lh3.googleusercontent.com/aida-public/AB6AXuCNYJSWbJxsoXZ-ytckzPisZkx7BNecCjZUe5s-rjeKrotIAVlT7GGUgBz2Qh_F5tSm5KeHMRfYkIfUMLzKN_4OEWehB0yB5DFNJWOsaGxQpZq_vjugfOEF6rXnh97WaG4rWuAxGtyWfYUyBQ-YIi_4coK59lEKaCAS3uy_Vsx0pOut_SW8XtsbsF2qh2Vhh_yta_e-2O5JFjJFmYFS4Hg1jV5lpBT6r8LHou90AJkpR2NV4URZpHG2uip5l6WADEtdbU5DCxhPlSA",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAAzlx58DyO-paXE-989Jh3oMlq-K92g8G4GWDKORBqFrnYioD9KABRKe0HQzo2cz3HhnIXApLcpQjBI6h9Ym3CfZt2dD3QIaBXEj73jkpmeIX5z0IgUdoM4eSwgibdHISf-bSBmSFHGCKhBOM8mzViuGp1qa72nb801_wLbarwMNgMV8dHDdFrg3uetAx4s_M29yYz_kS9oi-0zeeZvSV6cZbWdNCVWWlt1HWOIObh8_wmCWzZ8w16SjQAhjCRuL1zLMh65J01a1E",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuBscTBe3uKKmWubRah_a9RmZyHaw14SDrWNGrfDgr5y2JOmJPEo9m_-eJGqPgb-fbbVoimMrBQWhUM_GRWgoAQHStpcDnujGJtFONrFxIgJXikFrHcT-udeYVHwUwID0kL7gvdXuR4KVBiVHxkzaAM1GN6j4KOblJJLM5CXdRxZvSjhbZm2nI_1plslfCA_ZBa_fggWoR2Uh2pWXCnMrqBBACuEMhWoN9ISYVK9ZAnpGYkKFWMUQ2m01PYQZDuedWvW6yq8cMer5rQ",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuChKQY9xObovWzXOznANiDEjHVTPWtB8ZeCQEBOee_yRgKoNQB2SZSPtP3ueNQEsUebMfwmfT9q5Mb5EAJeV6PeL2LfKHzNtn_eAkWMzIISTemCDjNWmkTHoX68tauXG_NcsX-kDnlTp6EUi-LNB8E2jkChNOERTd7wWlWM4XRvl3YM5rpTclPdvsSiU8Dt1sKxM0t4Qlxy-V2_HST1pB17PFpU2hj85dxJiNY7v4P0UuROOpmyMbXRmGyVHG-X7Z9c4q2Wh-W3fYo"
              ].map((img, idx) => (
                <img key={idx} alt={`Post ${idx + 1}`} className="rounded w-full aspect-square object-cover" src={img} referrerPolicy="no-referrer" />
              ))}
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 text-xs">
          © 2024 Tryangle Tech. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => {
  return (
    <a className="fixed bottom-6 right-6 bg-[#25d366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition z-50" href="#">
      <MessageCircle className="h-6 w-6" />
    </a>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Partners />
      <Services />
      <About />
      <FAQ />
      <Portfolio />
      <Blog />
      <Stats />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
