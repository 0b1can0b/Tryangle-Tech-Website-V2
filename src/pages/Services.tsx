import { motion } from 'motion/react';
import { 
  Globe, 
  Megaphone, 
  Search, 
  Layout as LayoutIcon, 
  Smartphone, 
  Code, 
  CheckCircle2, 
  ArrowRight,
  Monitor,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: "Web Design & Development",
      desc: "Tryangletech is a highly specialized team for website development and services. You will get high-performing, secure, and SEO-friendly websites tailored to your business goals.",
      icon: <Globe className="h-10 w-10" />,
      features: ["Custom UI/UX Design", "Responsive Layouts", "E-commerce Solutions", "CMS Integration"],
      color: "bg-blue-50",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGfYJlnGKuWELiIXwKRszIsdt9qixan4sgwlP8Q_JiFoFKCriKvMz2dJ_aYr8tjHIjav_2bZzQxU2XlCgOvcS5Jcnx8GrImpRZNjIfBgnUlsodrRiLHI21cIO8v186miQ2hrmvPZxlx26p_a4QTodyyKv91RNOjBFcV2lZ-mdR8TrQJ71M6sP7bhA42rchZFmUPlu5N1Q0GNremRVYdQjP5JOe8UYF9jFuy4-6NQ9ntR1Hj2OqH_pQqTbq3oh5j8k0lz2reYF5jns"
    },
    {
      title: "Digital Marketing",
      desc: "Tryangletech provides you with complete digital marketing services. It includes email & Content marketing to boost your brand visibility and reach your target audience effectively.",
      icon: <Megaphone className="h-10 w-10" />,
      features: ["Social Media Marketing", "Content Strategy", "Email Campaigns", "PPC Management"],
      color: "bg-purple-50",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYTDV809-IuxOJAXWV6P0JfSdLb2CpYzAotr-1oyb4WrfWbR0svJdGXJ0PjZAtq7XaMyFwY60J89YYVYX0tnBQwIabxXqr8Egvm4IsaQQE415rB72lJAUjqMaNxqsnRVIbapyKCE-d42bdw0vfAuFx5Y0y3f1v7BdsZkMn-eycupwyOTjuSXPcjJigZVymhRZyXUrLABy8ompxKytX4bkDSIxqba0D3sP22z64G8KbrPRWTyUZtOKDNTt0Ai3wFMncsVp8Y1E6Q0U"
    },
    {
      title: "Search Engine Optimization",
      desc: "SEO is important for online businesses as it provides companies with the visibility they require to attract customers and rank higher on search engine result pages.",
      icon: <Search className="h-10 w-10" />,
      features: ["Keyword Research", "On-Page SEO", "Technical SEO Audits", "Link Building"],
      color: "bg-green-50",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfHR9fIBPUg5aXQJ7Gkk_aliSdeexwtAdOtfdLgY2srotRaN8j8Jv-NQUeScpCc7LlIr9YoXSE6nc18OwKqARefEMM0Ba6hQDRybFFcm2CoTZbShbwyuMRVHW8ifY7nNDUwaYGB1yYOjbHIrXgkDz0OLYU14fTgizc4JYr1pBZbRpXRo3yuBtVAhYDi4WrDIRtu-dFimQkUmGeGUsdVUVNn2Uyxd5miGZE9PgC2U8nBE1N_jAx7TlHI786vGa8I8PWo8ET3UVJTmY"
    },
    {
      title: "Graphics Designing",
      desc: "A graphic designer is a professional within the graphic design and graphic arts industry who assembles together images, typography, or motion graphics to create a piece of design.",
      icon: <LayoutIcon className="h-10 w-10" />,
      features: ["Logo & Branding", "Marketing Collateral", "Social Media Graphics", "Print Design"],
      color: "bg-orange-50",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpm0-v_mrWKYWIF6B5kqWMl9e19w4oeHT-l9dAXBn4tJQdWd0_5F7kX1qswhKVSMe-1hLQbq6uScRVUoO3GaNoeRaCmsQd_bVefshv0K_x8HZAUFMCOwV3sEIjwFhhOk4CvsZ1U9zv3UcwyjPfdmksahYDhJK4gC-fnWm39CdLNtV2iVIQ56lT2V454bfK5JZb28Vei0bxf_6U3zDMMfVadjLjxsT9hv_AsnApSHZQVJFEP3kyqEfPRYkqh08DUTIsbbCkuwAdZ3s"
    },
    {
      title: "Mobile App Development",
      desc: "We are a Mobile App Design and Development Company in India working for brands across the globe. We create intuitive and high-performance apps for iOS and Android.",
      icon: <Smartphone className="h-10 w-10" />,
      features: ["Native iOS & Android", "Cross-Platform Apps", "App UI/UX Design", "App Store Optimization"],
      color: "bg-red-50",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQnFZ4Gs0Y0vqO2XjJfeMJPzZAe0bpyZkMDEYdw3yU5A-bEIHWpcJ0Vxq9e_g_TcXD83K3KOmzb6h9mxhiONGflSNyE1EIf31i5FmJcVvtFhVIUtERFH9JXoOvLlhVRxY9apUTEPJZ3smiTYW571N7sgkk4D5wmkoja6y_tG2DOwewxT2xIBKmtTdIaCMAzHLwj9RGVb3TCAIKbTmJ8x-bPM-t-GgviKMlG7rt6YchHYcaUKOA_sZJ15yi6N_-vSTwcNP2Idcm3nw"
    },
    {
      title: "Custom Development",
      desc: "Invent, integrate, build and upgrade your ideas with our services at Tryangletech. We help you to create high-quality custom software solutions that solve unique business challenges.",
      icon: <Code className="h-10 w-10" />,
      features: ["Enterprise Software", "API Integrations", "Legacy System Migration", "Cloud Solutions"],
      color: "bg-indigo-50",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgN8s5KBEzYkrfqlm3VJYjoxC8Znq23eAXUaai3txr9DdnABp7JyrgUFSJuPB-1KXNATjPiib4Uv0pmBp_s6d7zoEqQCnHjq4ZzFaRNpoM1Ps5mp-sSHi-qMeLMd5zmu2SjxqWa2oVsvxf4Bd3QaTc-0VKxicKNtOKoFDm5unndN26NYzJWHAtyUDCHuVR6jViIDAiiV2p7siskpI6Ow51hcddiNFkwJvtB1xlXcuY4cQJDYaT8NQ9OPq4PZgFDj7Zrg_8rR9RmVg"
    },
  ];

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
            <p className="text-brand-blue font-semibold text-sm tracking-widest mb-4 uppercase">■ Our Expertise ■</p>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Comprehensive <span className="text-brand-blue">IT Solutions</span> <br />
              for Your Business
            </h1>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              We offer a wide range of services to help you stay ahead in the digital world. From development to marketing, we've got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid lg:grid-cols-2 gap-16">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 2) * 0.2 }}
              className="bg-white rounded-3xl p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group"
            >
              <div className="flex flex-col md:flex-row gap-10">
                <div className="flex-grow">
                  <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center text-brand-blue mb-8 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-500`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-500 mb-8 leading-relaxed">
                    {service.desc}
                  </p>
                  <ul className="grid grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="h-4 w-4 text-brand-blue shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="text-brand-blue font-bold flex items-center gap-2 hover:gap-3 transition-all">
                    Get Started <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className="md:w-48 shrink-0">
                  <img 
                    alt={service.title} 
                    className="w-full h-auto rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-500" 
                    src={service.img}
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-brand-blue py-24 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose Tryangle Tech?</h2>
            <p className="text-blue-100">We deliver results that matter for your business.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "Expert Team", desc: "Our professionals are experts in their respective fields with years of experience.", icon: <Users className="h-8 w-8" /> },
              { title: "Quality Work", desc: "We maintain high standards of quality in every project we deliver.", icon: <ShieldCheck className="h-8 w-8" /> },
              { title: "Fast Delivery", desc: "We value your time and ensure timely delivery of all projects.", icon: <Zap className="h-8 w-8" /> }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-blue-100 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const Users = ({ className }: { className?: string }) => (
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
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export default Services;
