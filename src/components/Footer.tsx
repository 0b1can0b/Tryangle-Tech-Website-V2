import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer id="contact" className="bg-brand-dark text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <img 
              alt="Footer Logo" 
              className="h-10 brightness-0 invert mb-8" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYgNYxh-aVMj0I0io_KwnJ57kN2kwyoPmaV4ft3HudqBq677Rkqwb9I9w1XrSRzsFoWaeV3MJfMf3AWrMw_ivsOtFUgJ4tewfg4lPe78m2MYloU8fFo2nS23T_3ujRxbzivJHfiNY0LVQgsXVn0_vzAa8abK_FA3XOVFyfZRB2Hi8XdUXflQTLgnRiUpOgIBlQPhXX1I8zQCHNQPbkNxNHWCFyN5MoL_wmVYwgXttQANUIn3eQWtkrEGBxnyawD7C4q38cwhd7bjc"
              referrerPolicy="no-referrer"
            />
            <p className="text-gray-400 leading-relaxed mb-8">
              Empowering businesses with innovative IT solutions. We bridge the gap between technology and your business goals.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-blue transition-all duration-300" href="#">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-8">Company</h4>
            <ul className="space-y-4 text-gray-400">
              {["About Us", "Our Team", "Careers", "Contact Us", "Blog"].map((item, i) => (
                <li key={i}>
                  <Link href={`/${item.toLowerCase().replace(" ", "-")}`} className="hover:text-brand-blue transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8">Services</h4>
            <ul className="space-y-4 text-gray-400">
              {["Web Development", "Mobile Apps", "Digital Marketing", "Cloud Solutions", "IT Consulting"].map((item, i) => (
                <li key={i}>
                  <Link href="/services" className="hover:text-brand-blue transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8">Get in Touch</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin className="h-5 w-5 text-brand-blue shrink-0" />
                <span className="text-gray-400 text-sm">1st Floor-29/Vithal Plaza, New Naroda, Ahmedabad</span>
              </li>
              <li className="flex gap-4">
                <Phone className="h-5 w-5 text-brand-blue shrink-0" />
                <span className="text-gray-400 text-sm">+91 90338 78806</span>
              </li>
              <li className="flex gap-4">
                <Mail className="h-5 w-5 text-brand-blue shrink-0" />
                <span className="text-gray-400 text-sm">info.tryangletech@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            © 2024 Tryangle Tech. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-gray-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
