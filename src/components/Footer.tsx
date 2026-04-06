import { Mail, Phone, MapPin, ChevronRight, Instagram, Facebook, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

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
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Our Services", path: "/services" },
                { name: "Projects", path: "/projects" },
                { name: "Blog", path: "/blog" },
                { name: "Contact", path: "/contact" }
              ].map((link, idx) => (
                <li key={idx}><Link className="hover:text-brand-blue transition" to={link.path}>{link.name}</Link></li>
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

export default Footer;
