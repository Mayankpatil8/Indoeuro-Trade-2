import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Electronics', path: '/electronics' },
  { name: 'Mechanical', path: '/mechanical' },
  { name: 'Food', path: '/food' },
  { name: 'Digital', path: '/digital' },
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  return (
<nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#F6F1E8] to-[#F2ECE2] backdrop-blur-xl border-b border-[#E5DED3] shadow-lg">        <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="font-display text-xl font-bold tracking-tighter text-nordic-black">
            INDOEURO <span className="text-terracotta">TRADE HUB</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-terracotta",
                  location.pathname === link.path ? "text-terracotta" : "text-nordic-grey"
                )}
              >
                {link.name}
              </Link>
            ))}
            <button className="p-2 text-nordic-black hover:text-terracotta transition-colors">
              <ShoppingBag size={20} />
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <button className="p-2 text-nordic-black">
              <ShoppingBag size={20} />
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-nordic-black">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-cream border-b border-beige px-6 py-8 space-y-6 shadow-lg"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                "block text-lg font-medium",
                location.pathname === link.path ? "text-terracotta" : "text-nordic-grey"
              )}
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
};
