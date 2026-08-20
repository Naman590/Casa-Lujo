import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onOpenConsultation: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Press', href: '#press' },
    { name: 'Contact', href: '#contact', isAction: true },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof navLinks[0]) => {
    if (link.isAction) {
      e.preventDefault();
      onOpenConsultation();
    }
  };

  return (
    <header 
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-black/10 py-4 shadow-sm text-black' 
          : 'bg-black/90 backdrop-blur-sm border-b border-white/10 py-5 text-white'
      }`}
    >
      <div className="max-w-[1270px] mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Identity */}
        <a 
          href="#home" 
          id="brand-logo-link"
          className="flex flex-col items-start focus:outline-none group"
        >
          <span className={`font-heading text-lg sm:text-xl font-bold tracking-[0.22em] uppercase transition-colors ${
            isScrolled ? 'text-black' : 'text-white'
          }`}>
            CASA LUJO
          </span>
          <span className={`text-[8px] sm:text-[9px] tracking-[0.35em] uppercase font-medium mt-0.5 ${
            isScrolled ? 'text-black/50' : 'text-white/60'
          }`}>
            HOME LUXURY
          </span>
        </a>

        {/* Desktop Navigation: Home | About Us | Portfolio | Press | Contact */}
        <nav id="desktop-navigation" className="hidden md:flex items-center space-x-7 lg:space-x-9">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link)}
              className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-200 cursor-pointer ${
                isScrolled 
                  ? 'text-black/80 hover:text-[#906060]' 
                  : 'text-white/80 hover:text-[#c48e8e]'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="hidden sm:flex items-center">
          <button
            id="header-consultation-btn"
            onClick={onOpenConsultation}
            className="bg-black hover:bg-black/80 text-white text-xs uppercase tracking-[0.2em] font-medium px-5 py-2.5 rounded-[8px] transition-all active:scale-[0.98] cursor-pointer shadow-sm border border-white/10"
          >
            Book Consultation
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center md:hidden space-x-3">
          <button
            id="mobile-consult-btn"
            onClick={onOpenConsultation}
            className="bg-black text-white text-[10px] uppercase tracking-[0.18em] px-3.5 py-1.5 rounded-[8px] border border-white/10"
          >
            Book
          </button>
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 focus:outline-none transition-colors ${
              isScrolled ? 'text-black' : 'text-white'
            }`}
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div 
          id="mobile-navigation-drawer"
          className="md:hidden fixed inset-x-0 top-full bg-white text-black border-b border-black/10 shadow-2xl px-6 py-8 animate-in fade-in duration-200"
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  setIsMobileMenuOpen(false);
                  handleNavClick(e, link);
                }}
                className="text-xs uppercase tracking-[0.22em] font-medium text-black hover:text-[#906060] py-2 border-b border-black/5 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-black/40" />
              </a>
            ))}
            <div className="pt-3">
              <button
                id="drawer-consultation-btn"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full bg-black hover:bg-neutral-800 text-white text-xs uppercase tracking-[0.22em] font-medium py-3.5 rounded-[8px] flex items-center justify-center space-x-2"
              >
                <span>Book Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
