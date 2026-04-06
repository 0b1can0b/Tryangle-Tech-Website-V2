import { Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact us', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img 
            alt="Tryangle Tech Logo" 
            className="h-10" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqZ8OWsUlvXeLUPvTyL8gGLff0liDy3qc046YpubkrEIo9bUeeGQQqu5JYOECY-UuMrZbJRn3fA6Le5luyXN9VLzZWq0oQIvovCvvQ9cN8FS-5_KkzLjzVXvNAx2BavQeS5-PcgSAygat3Prsg9-yidxqyvAaYormu2J1yPEtnzJVxC0K0-pwPXJHiddgXi2ghAovQsBybA1lDrWT7AjjYpKwGLCWJQTh12H8Ipl3ABGQJO-AB9FB0drGDM07DWpPV_cA-Llx_6rg"
            referrerPolicy="no-referrer"
          />
        </Link>
        <ul className="hidden lg:flex items-center space-x-8 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link 
                to={link.path} 
                className={`${location.pathname === link.path ? 'text-brand-blue' : 'hover:text-brand-blue'} transition`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <Link to="/contact" className="bg-black text-white px-6 py-2.5 rounded text-sm font-medium flex items-center gap-2 hover:bg-gray-800 transition">
          <Mail className="h-4 w-4" />
          Get in Touch
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
