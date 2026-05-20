import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Electronics', path: '/electronics' },
  { name: 'Mechanical', path: '/mechanical' },
  { name: 'Food', path: '/food' },
  { name: 'Digital', path: '/digital' },
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [hoveredLink, setHoveredLink] = React.useState<string | null>(null);
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 pointer-events-none"
      aria-label="Main navigation"
      role="navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-500 pointer-events-auto">
        <div
          className={cn(
            "mx-auto transition-all duration-500 flex justify-between items-center border border-transparent",
            scrolled
              ? "max-w-5xl mt-4 rounded-full border-beige/60 bg-white/80 backdrop-blur-xl shadow-lg px-8 py-3 h-16"
              : "max-w-7xl border-b border-beige/40 bg-cream/90 backdrop-blur-md px-6 lg:px-12 py-5 h-22"
          )}
        >
          {/* Logo Area */}
          <Link
            to="/"
            className="flex items-center hover:opacity-90 transition-opacity shrink-0"
            aria-label="IndoEuro Trade Hub — Home"
          >
            <img
              src="/logo_@.png"
              alt="IndoEuro Hub"
              className={cn(
                "w-auto object-contain transition-all duration-500",
                scrolled ? "h-16" : "h-19"
              )}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8" role="list">
            <div 
              className="flex items-center space-x-1 relative" 
              onMouseLeave={() => setHoveredLink(null)}
            >
              {NAV_LINKS.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    role="listitem"
                    onMouseEnter={() => setHoveredLink(link.path)}
                    aria-current={isActive ? 'page' : undefined}
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full z-10",
                      isActive ? "text-terracotta font-semibold" : "text-nordic-grey hover:text-nordic-black"
                    )}
                  >
                    {/* Sliding Hover Pill */}
                    {hoveredLink === link.path && (
                      <motion.span
                        layoutId="navHoverPill"
                        className="absolute inset-0 bg-beige/40 rounded-full -z-10"
                        transition={{ type: "spring", stiffness: 350, damping: 28 }}
                      />
                    )}
                    
                    {/* Text Label & Active Dot */}
                    <span className="relative">
                      {link.name}
                      {isActive && (
                        <motion.span
                          layoutId="activeDot"
                          className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-terracotta rounded-full"
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        />
                      )}
                    </span>
                  </Link>
                );
              })}
            </div>
            
            {/* Divider and Styled B2B CTA */}
            <div className="flex items-center space-x-5 border-l border-beige/60 pl-6 shrink-0">
          
              
              <Link
                to="/contact"
                className="px-5 py-2.5 bg-terracotta text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-terracotta/90 hover:scale-103 active:scale-98 transition-all shadow-sm shrink-0"
              >
                Request Quote
              </Link>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center space-x-3 pointer-events-auto">
            <button
              className="p-2 text-nordic-black hover:text-terracotta transition-colors"
              aria-label="View shopping bag"
            >
              <ShoppingBag size={18} aria-hidden="true" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-nordic-black hover:text-terracotta transition-colors rounded-full bg-white/20 border border-beige/30"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-nordic-black/50 backdrop-blur-sm z-40 pointer-events-auto"
            />
            
            {/* Drawer */}
            <motion.div
              id="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-cream/95 backdrop-blur-xl border-l border-beige/60 px-8 py-20 flex flex-col justify-between shadow-2xl z-50 pointer-events-auto"
              role="list"
            >
              <div className="space-y-8">
                <div className="flex items-center justify-between pb-6 border-b border-beige/40">
                  <span className="text-xs font-bold uppercase tracking-widest text-terracotta">Navigation Menu</span>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="p-2 -mr-2 text-nordic-black hover:text-terracotta transition-colors"
                    aria-label="Close menu"
                  >
                    <X size={20} />
                  </button>
                </div>
                
                <div className="flex flex-col space-y-4">
                  {NAV_LINKS.map((link, i) => {
                    const isActive = location.pathname === link.path;
                    return (
                      <motion.div
                        key={link.path}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                      >
                        <Link
                          to={link.path}
                          role="listitem"
                          onClick={() => setIsOpen(false)}
                          aria-current={isActive ? 'page' : undefined}
                          className={cn(
                            "block text-xl font-bold transition-all duration-300 py-1.5",
                            isActive 
                              ? "text-terracotta pl-2 border-l-2 border-terracotta" 
                              : "text-nordic-grey hover:text-nordic-black hover:pl-2"
                          )}
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
              
              <div className="space-y-4 pt-6 border-t border-beige/40">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-4 bg-terracotta text-white font-bold rounded-full text-center hover:bg-terracotta/90 transition-all flex items-center justify-center gap-2"
                >
                  Request Quote <ArrowRight size={16} />
                </Link>
                
                <div className="text-[10px] text-center text-nordic-grey tracking-wider uppercase font-bold">
                  IndoEuro Core Oy • Helsinki
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};
