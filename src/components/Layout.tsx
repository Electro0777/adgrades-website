import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Instagram, Linkedin, MessageCircle, Mail, Phone, MapPin, Shield } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('.mobile-menu') && !target.closest('.mobile-menu-button')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Clients', path: '/portfolio' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Careers', path: '/careers' },
    { name: 'Verify Certificate', path: '/verify', icon: Shield, isSpecial: true },
  ];

  return (
    <div className="min-h-screen text-foreground transition-colors duration-300 font-sans overflow-x-hidden" style={{ background: 'linear-gradient(to right, #0B1120, #0F172A)' }}>
      {/* Clean Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'py-2' : 'py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`nav-glass rounded-2xl px-6 py-4 transition-all duration-500 ${
            isScrolled ? 'shadow-2xl' : 'shadow-xl'
          }`}>
            <div className="flex justify-between items-center h-12">
              {/* Logo */}
              <Link to="/" className="flex items-center space-x-3 group">
                <img
                  src={isDark ? "/Asset 2.png" : "/Asset 1.png"}
                  alt="AdGrades Logo"
                  className="h-8 sm:h-10 w-auto object-contain transition-all duration-300 group-hover:brightness-110"
                />
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`font-medium transition-all duration-300 relative group px-3 py-2 rounded-lg flex items-center ${
                      location.pathname === item.path
                        ? 'text-[#00B5FF]'
                        : 'text-[#F1F5F9] hover:text-[#00B5FF]'
                    } ${
                      item.isSpecial 
                        ? 'text-[#01F9C6] hover:text-[#00B5FF]' 
                        : ''
                    }`}
                  >
                    {item.icon && <item.icon className="w-4 h-4 mr-2" />}
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Right side buttons */}
              <div className="hidden lg:flex items-center space-x-4">
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg text-[#94A3B8] hover:text-[#00B5FF] transition-all duration-300"
                  aria-label="Toggle dark mode"
                >
                  {isDark ? <Sun size={18} /> : <Moon size={18} />}
                </button>
                
                <Link 
                  to="/contact" 
                  className="brand-button"
                >
                  Start a Project
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <div className="lg:hidden flex items-center space-x-2">
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg text-[#94A3B8] hover:text-[#00B5FF] transition-all duration-300"
                  aria-label="Toggle dark mode"
                >
                  {isDark ? <Sun size={18} /> : <Moon size={18} />}
                </button>
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="mobile-menu-button p-2 rounded-lg text-[#94A3B8] hover:text-[#00B5FF] transition-all duration-300"
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Sidebar */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-40 lg:hidden">
            <div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />
            
            <div className="mobile-menu absolute top-0 right-0 h-full w-80 max-w-[85vw] nav-glass transform transition-transform duration-300 ease-out">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-[#1E293B]">
                  <img
                    src={isDark ? "/Asset 2.png" : "/Asset 1.png"}
                    alt="AdGrades Logo"
                    className="h-8 w-auto object-contain"
                  />
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-lg text-[#94A3B8] hover:text-[#00B5FF] transition-all duration-300"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="flex-1 px-6 py-6 space-y-2 overflow-y-auto">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center px-4 py-4 rounded-xl font-medium transition-all duration-300 ${
                        location.pathname === item.path
                          ? 'text-[#00B5FF] bg-[#00B5FF]/10'
                          : 'text-[#F1F5F9] hover:text-[#00B5FF] hover:bg-[#00B5FF]/5'
                      } ${
                        item.isSpecial 
                          ? 'text-[#01F9C6] hover:text-[#00B5FF]' 
                          : ''
                      }`}
                    >
                      {item.icon && <item.icon className="w-5 h-5 mr-3" />}
                      <span className="text-lg">{item.name}</span>
                    </Link>
                  ))}
                </div>

                <div className="p-6 border-t border-[#1E293B] space-y-4">
                  <Link
                    to="/contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="brand-button w-full text-center"
                  >
                    Start a Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="overflow-x-hidden">{children}</main>

      {/* Clean Footer */}
      <footer className="bg-[#0F172A]/80 border-t border-[#1E293B] overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img
                  src={isDark ? "/Asset 2.png" : "/Asset 1.png"}
                  alt="AdGrades Logo"
                  className="h-10 w-auto object-contain"
                />
              </div>
              <p className="text-[#94A3B8] mb-8 max-w-md leading-relaxed">
                We help startups become the next big name through creative marketing, data-driven ads, and stunning web design.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-8">
                <div className="flex items-start text-[#94A3B8]">
                  <Phone className="h-4 w-4 mr-3 mt-0.5 text-[#00B5FF] flex-shrink-0" />
                  <div>
                    <div>+91 80736 98913</div>
                    <div>+91 9686314869</div>
                  </div>
                </div>
                <div className="flex items-start text-[#94A3B8]">
                  <Mail className="h-4 w-4 mr-3 mt-0.5 text-[#00B5FF] flex-shrink-0" />
                  <div>
                    <div>info@adgrades.in</div>
                    <div>adgradesweb@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-start text-[#94A3B8]">
                  <MapPin className="h-4 w-4 mr-3 mt-1 text-[#00B5FF] flex-shrink-0" />
                  <div>
                    <div>Vinayaka Industries</div>
                    <div>Behind KMF Cattle Feed Factory</div>
                    <div>K Hoskoppalu, Hassan 573201</div>
                    <div>Karnataka, India</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-[#F1F5F9] mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="text-[#94A3B8] hover:text-[#00B5FF] transition-colors duration-300 flex items-center"
                    >
                      {item.icon && <item.icon className="w-4 h-4 mr-2" />}
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links & Hours */}
            <div>
              <h4 className="font-semibold text-[#F1F5F9] mb-6">Connect & Hours</h4>
              <div className="flex space-x-4 mb-6">
                <a
                  href="https://www.linkedin.com/company/ad-grades"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#1E293B] rounded-xl text-[#94A3B8] hover:text-[#00B5FF] hover:bg-[#00B5FF]/10 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="#"
                  className="p-3 bg-[#1E293B] rounded-xl text-[#94A3B8] hover:text-[#01F9C6] hover:bg-[#01F9C6]/10 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://wa.me/919686314869"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#1E293B] rounded-xl text-[#94A3B8] hover:text-[#01F9C6] hover:bg-[#01F9C6]/10 transition-all duration-300"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={18} />
                </a>
              </div>
              
              <div className="text-sm text-[#94A3B8]">
                <div className="font-medium text-[#F1F5F9] mb-2">Business Hours</div>
                <div>Mon - Sat: 9:00 AM - 9:00 PM</div>
                <div>Sun: 9:00 AM - 1:30 PM</div>
              </div>
            </div>
          </div>

          <div className="border-t border-[#1E293B] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[#94A3B8] text-sm text-center md:text-left">
              © {new Date().getFullYear()} AdGrades. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-[#94A3B8] hover:text-[#00B5FF] text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-[#94A3B8] hover:text-[#00B5FF] text-sm transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;