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

  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Close mobile menu when clicking outside
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

  // Prevent body scroll when menu is open
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
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 font-sans overflow-x-hidden">
      {/* Floating Sticky Navigation with Glass Effect */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'py-2' : 'py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`backdrop-blur-xl shadow-2xl rounded-full px-4 sm:px-6 py-3 transition-all duration-500 border ${
            isScrolled 
              ? 'bg-card/90 shadow-2xl border-border/60 backdrop-blur-2xl' 
              : 'bg-card/85 shadow-xl border-border/40'
          }`}>
            <div className="flex justify-between items-center h-12">
              {/* Logo with Dynamic Theme-based Images */}
              <Link to="/" className="flex items-center space-x-3 group">
                <div className={`transition-all duration-500 group-hover:scale-105 ${
                  isScrolled ? 'backdrop-blur-sm bg-opacity-90' : ''
                }`}>
                  <img
                    src={isDark ? "/Asset 2.png" : "/Asset 1.png"}
                    alt="AdGrades Logo"
                    className="h-8 sm:h-10 w-auto object-contain transition-all duration-300 group-hover:brightness-110"
                  />
                </div>
              </Link>

              {/* Desktop Navigation with Enhanced Visibility */}
              <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`font-semibold transition-all duration-500 relative group px-3 py-2 rounded-xl text-xs xl:text-sm flex items-center ${
                      location.pathname === item.path
                        ? 'text-primary bg-primary/10 border border-primary/20'
                        : 'text-card-foreground hover:text-primary hover:bg-primary/5 border border-transparent hover:border-primary/10'
                    } ${
                      isScrolled 
                        ? 'backdrop-blur-sm hover:bg-primary/10' 
                        : ''
                    } ${
                      item.isSpecial 
                        ? 'bg-success/10 text-success hover:bg-success/20 border-success/20' 
                        : ''
                    }`}
                  >
                    {item.icon && <item.icon className="w-4 h-4 mr-2" />}
                    {item.name}
                    <span className={`absolute -bottom-1 left-3 right-3 h-0.5 bg-primary transition-all duration-300 ${
                      location.pathname === item.path ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`} />
                  </Link>
                ))}
              </div>

              {/* Medium Screen Navigation (md to lg) */}
              <div className="hidden md:flex lg:hidden items-center space-x-2">
                {navItems.slice(0, 4).map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`font-medium transition-all duration-500 relative group px-3 py-2 rounded-lg text-xs ${
                      location.pathname === item.path
                        ? 'text-primary bg-primary/10'
                        : 'text-card-foreground hover:text-primary hover:bg-primary/5'
                    }`}
                  >
                    {item.name === 'About Us' ? 'About' : item.name === 'Contact Us' ? 'Contact' : item.name}
                  </Link>
                ))}
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="mobile-menu-button p-2 rounded-lg text-muted-foreground hover:text-primary transition-all duration-500 bg-muted/60 backdrop-blur-sm border border-border/30"
                >
                  {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
                </button>
              </div>
              
              {/* Right side buttons with Glass Effect */}
              <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
                <button
                  onClick={toggleTheme}
                  className={`p-2 sm:p-2.5 rounded-xl text-muted-foreground hover:text-primary transition-all duration-500 hover:scale-105 ${
                    isScrolled 
                      ? 'bg-muted/70 backdrop-blur-sm border border-border/40 hover:bg-muted/90' 
                      : 'bg-muted/60 hover:bg-muted/80 border border-border/30'
                  }`}
                  aria-label="Toggle dark mode"
                >
                  {isDark ? <Sun size={18} /> : <Moon size={18} />}
                </button>
                
                <Link 
                  to="/contact" 
                  className={`inline-flex items-center px-4 lg:px-6 py-2 sm:py-2.5 bg-professional-gradient hover:shadow-lg text-white font-semibold rounded-full transition-all duration-500 shadow-md hover:shadow-primary/25 transform hover:scale-105 text-sm lg:text-base ${
                    isScrolled ? 'backdrop-blur-sm bg-opacity-90' : ''
                  }`}
                >
                  <span className="hidden sm:inline">Start a Project</span>
                  <span className="sm:hidden">Start</span>
                </Link>
              </div>

              {/* Mobile Menu Button with Glass Effect */}
              <div className="md:hidden flex items-center space-x-2">
                <button
                  onClick={toggleTheme}
                  className={`p-2 rounded-lg text-muted-foreground transition-all duration-500 ${
                    isScrolled 
                      ? 'bg-muted/70 backdrop-blur-sm border border-border/40' 
                      : 'bg-muted/60 border border-border/30'
                  }`}
                  aria-label="Toggle dark mode"
                >
                  {isDark ? <Sun size={18} /> : <Moon size={18} />}
                </button>
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={`mobile-menu-button p-2 rounded-lg text-muted-foreground transition-all duration-500 ${
                    isScrolled 
                      ? 'bg-muted/70 backdrop-blur-sm border border-border/40' 
                      : 'bg-muted/60 border border-border/30'
                  }`}
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Sidebar Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Sidebar */}
            <div className="mobile-menu absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-card/95 backdrop-blur-2xl border-l border-border/40 shadow-2xl transform transition-transform duration-300 ease-out">
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-border/30">
                  <img
                    src={isDark ? "/Asset 2.png" : "/Asset 1.png"}
                    alt="AdGrades Logo"
                    className="h-8 w-auto object-contain"
                  />
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted/50 transition-all duration-300"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Navigation Links */}
                <div className="flex-1 px-6 py-6 space-y-2 overflow-y-auto">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center px-4 py-4 rounded-xl font-medium transition-all duration-300 ${
                        location.pathname === item.path
                          ? 'text-primary bg-primary/15 border border-primary/30 shadow-lg'
                          : 'text-card-foreground hover:text-primary hover:bg-primary/8 border border-transparent hover:border-primary/15'
                      } ${
                        item.isSpecial 
                          ? 'bg-success/10 text-success hover:bg-success/20 border-success/20' 
                          : ''
                      }`}
                    >
                      {item.icon && <item.icon className="w-5 h-5 mr-3" />}
                      <span className="text-lg">{item.name}</span>
                    </Link>
                  ))}
                </div>

                {/* Footer Actions */}
                <div className="p-6 border-t border-border/30 space-y-4">
                  <Link
                    to="/contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-center px-6 py-4 bg-professional-gradient text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Start a Project
                  </Link>
                  
                  {/* Social Links */}
                  <div className="flex justify-center space-x-4">
                    <a
                      href="https://www.linkedin.com/company/ad-grades"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-muted rounded-xl text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href="#"
                      className="p-3 bg-muted rounded-xl text-muted-foreground hover:text-secondary hover:bg-secondary/10 transition-all duration-300"
                    >
                      <Instagram size={20} />
                    </a>
                    <a
                      href="https://wa.me/919686314869"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-muted rounded-xl text-muted-foreground hover:text-success hover:bg-success/10 transition-all duration-300"
                    >
                      <MessageCircle size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Medium Screen Dropdown Menu */}
        {isMenuOpen && (
          <div className="hidden md:block lg:hidden bg-card/95 backdrop-blur-2xl border border-border/40 shadow-2xl mt-2 mx-4 rounded-2xl animate-slide-up">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navItems.slice(4).map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center px-4 py-3 rounded-xl font-medium transition-all duration-300 backdrop-blur-sm ${
                    location.pathname === item.path
                      ? 'text-primary bg-primary/15 border border-primary/30'
                      : 'text-card-foreground hover:text-primary hover:bg-primary/8 border border-transparent hover:border-primary/15'
                  } ${
                    item.isSpecial 
                      ? 'bg-success/10 text-success hover:bg-success/20 border-success/20' 
                      : ''
                  }`}
                >
                  {item.icon && <item.icon className="w-5 h-5 mr-3" />}
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="overflow-x-hidden">{children}</main>

      {/* Footer */}
      <footer className="bg-card border-t border-border overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img
                  src={isDark ? "/Asset 2.png" : "/Asset 1.png"}
                  alt="AdGrades Logo"
                  className="h-8 sm:h-10 w-auto object-contain"
                />
              </div>
              <p className="text-muted-foreground mb-6 lg:mb-8 max-w-md leading-relaxed text-sm sm:text-base">
                We help startups become the next big name through creative marketing, data-driven ads, and stunning web design.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6 lg:mb-8">
                <div className="flex items-start text-muted-foreground text-sm sm:text-base">
                  <Phone className="h-4 w-4 mr-3 mt-0.5 text-primary flex-shrink-0" />
                  <div>
                    <div>+91 80736 98913</div>
                    <div>+91 9686314869</div>
                  </div>
                </div>
                <div className="flex items-start text-muted-foreground text-sm sm:text-base">
                  <Mail className="h-4 w-4 mr-3 mt-0.5 text-primary flex-shrink-0" />
                  <div className="break-all">
                    <div>info@adgrades.in</div>
                    <div>adgradesweb@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-start text-muted-foreground text-sm sm:text-base">
                  <MapPin className="h-4 w-4 mr-3 mt-1 text-primary flex-shrink-0" />
                  <div>
                    <div>Vinayaka Industries</div>
                    <div>Behind KMF Cattle Feed Factory</div>
                    <div>K Hoskoppalu, Hassan 573201</div>
                    <div>Karnataka, India</div>
                  </div>
                </div>
              </div>
              
              {/* Newsletter */}
              <div className="mb-6 lg:mb-8">
                <h4 className="font-semibold text-card-foreground mb-4 text-sm sm:text-base">Stay Updated</h4>
                <div className="flex flex-col sm:flex-row max-w-md gap-2 sm:gap-0">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-muted border border-border rounded-xl sm:rounded-l-xl sm:rounded-r-none focus:outline-none focus:border-primary text-card-foreground placeholder-muted-foreground transition-colors duration-300 text-sm"
                  />
                  <button className="px-4 sm:px-6 py-3 bg-professional-gradient text-white font-semibold rounded-xl sm:rounded-l-none sm:rounded-r-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 text-sm">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-card-foreground mb-6 text-sm sm:text-base">Quick Links</h4>
              <ul className="space-y-3">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 transform inline-block text-sm sm:text-base flex items-center"
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
              <h4 className="font-semibold text-card-foreground mb-6 text-sm sm:text-base">Connect & Hours</h4>
              <div className="flex space-x-3 sm:space-x-4 mb-6">
                <a
                  href="https://www.linkedin.com/company/ad-grades"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 sm:p-3 bg-muted rounded-xl text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="#"
                  className="p-2 sm:p-3 bg-muted rounded-xl text-muted-foreground hover:text-secondary hover:bg-secondary/10 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://wa.me/919686314869"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 sm:p-3 bg-muted rounded-xl text-muted-foreground hover:text-success hover:bg-success/10 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={18} />
                </a>
              </div>
              
              <div className="text-xs sm:text-sm text-muted-foreground">
                <div className="font-medium text-card-foreground mb-2">Business Hours</div>
                <div>Mon - Sat: 9:00 AM - 9:00 PM</div>
                <div>Sun: 9:00 AM - 1:30 PM</div>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 lg:mt-12 pt-6 lg:pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-xs sm:text-sm text-center md:text-left">
              © {new Date().getFullYear()} AdGrades. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary text-xs sm:text-sm transition-colors duration-300 text-center">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary text-xs sm:text-sm transition-colors duration-300 text-center">
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