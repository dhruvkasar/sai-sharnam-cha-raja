import { useState, useEffect, useRef, type MouseEvent } from 'react';
import { Menu, X, PhoneCall, Sparkles, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { societyDetails } from '../data';

export default function Nav() {
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);

  // Exact section order matching website structure
  const links = [
    { name: 'मुख्यपान', href: '#home', id: 'home' },
    { name: 'निमंत्रण', href: '#invitation', id: 'invitation' },
    { name: 'स्पर्धा', href: '#competitions', id: 'competitions' },
    { name: 'वेळापत्रक', href: '#schedule', id: 'schedule' },
    { name: 'समिती', href: '#committee', id: 'committee' },
  ];

  // Scroll listener: Hide navbar at the very top (Hero), slide down smoothly on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Reveal navbar only once user starts scrolling (past 90px threshold)
      if (currentScrollY > 90) {
        setIsVisible(true);
        setIsScrolled(true);
      } else {
        setIsVisible(false);
        setIsScrolled(false);
      }
      lastScrollY.current = currentScrollY;

      // Track active section for indicator
      const sectionIds = ['home', 'overview', 'invitation', 'competitions', 'schedule', 'committee', 'contact'];
      const scrollPosition = currentScrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            const mappedId = sectionIds[i] === 'overview' ? 'home' : sectionIds[i];
            setActiveSection(mappedId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* 
        ========================================================================
        MINIMALIST CAPSULE NAVBAR WITH SMOOTH SCROLL ENTRANCE FROM UP
        ========================================================================
      */}
      <motion.header 
        initial={{ y: -90, opacity: 0 }}
        animate={{ 
          y: isVisible ? 0 : -90, 
          opacity: isVisible ? 1 : 0 
        }}
        transition={{ 
          duration: 1.4, 
          ease: [0.22, 1, 0.36, 1] 
        }}
        className="fixed top-3 sm:top-5 left-0 right-0 z-40 flex justify-center px-3 sm:px-6 pointer-events-none"
      >
        <nav 
          className={`pointer-events-auto flex items-center justify-between gap-2 sm:gap-4 md:gap-5 transition-all duration-300 rounded-full max-w-fit mx-auto ${
            isScrolled 
              ? 'bg-[#18110D]/95 backdrop-blur-2xl border border-sona/45 shadow-[0_20px_50px_rgba(0,0,0,0.8)] py-1.5 px-2.5 sm:py-2 sm:px-3.5 ring-1 ring-sona/20' 
              : 'bg-[#18110D]/85 backdrop-blur-xl border border-sona/30 shadow-[0_12px_35px_rgba(0,0,0,0.6)] py-2 px-3 sm:py-2.5 sm:px-4'
          }`}
        >
          {/* Left: Circular Logo Button with sscr.png */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-black/80 via-[#2A170F] to-black/90 p-1 flex items-center justify-center shadow-inner border border-sona/40 hover:scale-105 active:scale-95 transition-transform shrink-0 group relative overflow-hidden"
            aria-label="मुख्यपान (Go to Home)"
          >
            <div className="absolute inset-0 bg-sona/15 opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
            <img 
              src="/sscr.png" 
              alt="साई शरणम चा राजा" 
              className="w-full h-full object-contain drop-shadow select-none pointer-events-none"
              onError={(e) => {
                const img = e.currentTarget;
                if (!img.src.endsWith('/sscr.png')) {
                  img.src = '/sscr.png';
                }
              }}
            />
          </a>

          {/* Center: Desktop Navigation Links in Correct Website Order */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {links.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative px-3.5 py-1.5 rounded-full text-sm lg:text-base font-medium transition-all duration-200 ${
                    isActive 
                      ? 'text-white font-semibold' 
                      : 'text-haldi/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="relative z-10 whitespace-nowrap">{link.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activePillIndicator"
                      className="absolute inset-0 bg-white/12 rounded-full border border-sona/40 shadow-inner"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right Action Capsule: Contact / Donation Pill & Instagram */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {societyDetails.instagram && (
              <a
                href={societyDetails.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="साई शरणम चा राजा Instagram"
                title="Instagram: @saisharnamcharaja"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-tr from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white flex items-center justify-center shadow-md hover:scale-110 active:scale-95 transition-transform border border-white/20 shrink-0"
              >
                <Instagram size={15} />
              </a>
            )}

            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="bg-gradient-to-r from-kesari via-[#FF8833] to-kesari text-white hover:brightness-110 active:scale-95 transition-all duration-200 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide shadow-md border border-yellow-200/40 flex items-center gap-1.5 sm:gap-2 whitespace-nowrap"
            >
              <Sparkles size={14} className="text-yellow-200 animate-pulse hidden sm:inline-block" />
              <span>संपर्क / देणगी</span>
            </a>

            {/* Mobile Hamburger Toggle Button (Inside Capsule) */}
            <button
              type="button"
              aria-label="Open Navigation Menu"
              onClick={() => setIsOpen(true)}
              className="md:hidden w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 text-haldi flex items-center justify-center p-1.5 transition-colors border border-sona/20"
            >
              <Menu size={20} />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* 
        ========================================================================
        MOBILE FULLSCREEN MENU MODAL
        ========================================================================
      */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 w-screen h-[100dvh] bg-[#18110D]/95 backdrop-blur-2xl z-[9999] flex flex-col justify-between p-6 select-none overflow-y-auto"
          >
            {/* Top Bar with sscr.png Logo & Close Button */}
            <div className="flex justify-between items-center w-full max-w-md mx-auto">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-black/60 p-1 flex items-center justify-center shadow-md border border-sona/40">
                  <img 
                    src="/sscr.png" 
                    alt="साई शरणम चा राजा" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-haldi font-display text-xl tracking-wide font-bold">
                  {societyDetails.name}
                </span>
              </div>

              <button 
                type="button"
                aria-label="Close Navigation Menu"
                className="text-haldi/80 hover:text-kesari p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-sona/20" 
                onClick={() => setIsOpen(false)}
              >
                <X size={26} />
              </button>
            </div>

            {/* Centered Navigation Links in Exact Sequential Order */}
            <div className="flex flex-col items-center justify-center gap-3.5 text-center my-auto py-6 w-full max-w-xs mx-auto">
              {links.map((link, index) => {
                const isActive = activeSection === link.id;
                return (
                  <motion.a 
                    key={link.name} 
                    href={link.href} 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.2 }}
                    onClick={(e) => handleLinkClick(e, link.href)} 
                    className={`w-full py-3 px-6 rounded-full text-xl font-display font-medium transition-all text-center border ${
                      isActive 
                        ? 'bg-gradient-to-r from-kesari/30 to-sindoor/30 text-white border-sona/50 shadow-md' 
                        : 'bg-white/5 text-haldi/90 border-sona/15 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </motion.a>
                );
              })}

              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: links.length * 0.05, duration: 0.2 }}
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="w-full py-3 px-6 rounded-full text-lg font-semibold bg-gradient-to-r from-kesari to-sindoor text-white border border-yellow-200/40 shadow-lg mt-2 flex items-center justify-center gap-2"
              >
                <PhoneCall size={18} />
                <span>संपर्क व देणगी</span>
              </motion.a>

              {societyDetails.instagram && (
                <motion.a
                  href={societyDetails.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (links.length + 1) * 0.05, duration: 0.2 }}
                  className="w-full py-2.5 px-6 rounded-full text-base font-semibold bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white border border-white/20 shadow-lg flex items-center justify-center gap-2"
                >
                  <Instagram size={18} />
                  <span>Instagram: @{societyDetails.instagram.handle}</span>
                </motion.a>
              )}
            </div>

            {/* Bottom Footer Info inside Menu */}
            <div className="text-center text-haldi/60 text-sm max-w-xs mx-auto pb-4">
              <p className="font-semibold text-sona mb-1">॥ गणपती बाप्पा मोरया ॥</p>
              <p>गणेशोत्सव {societyDetails.year} • {societyDetails.address}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
