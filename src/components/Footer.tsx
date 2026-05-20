import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer
      className="bg-nordic-black text-white pt-24 pb-12"
      aria-label="Site footer"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="flex flex-row md:flex-col items-center md:items-start gap-6 md:gap-0 md:space-y-8">
  
  {/* Logo + Text */}
  <Link
    to="/"
    className="flex items-center gap-3 hover:opacity-90 transition-opacity shrink-0"
    aria-label="IndoEuro Trade Hub — Home"
  >
    <img
      src="/looo.png"
      alt="IndoEuro Core Oy"
      className="h-20 md:h-28 w-auto object-contain"
    />
  </Link>

  {/* Description */}
  <p className="text-white/50 text-xs md:text-sm leading-relaxed max-w-xs">
    Your trusted sourcing and business growth partner in Finland.
    Delivering industrial procurement and digital solutions for modern European businesses.
  </p>

</div>

          <nav aria-label="Solutions navigation">
            <h4 className="font-bold mb-8 text-sm uppercase tracking-widest">Solutions</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><Link to="/electronics" className="hover:text-white transition-colors">Electronic Parts</Link></li>
              <li><Link to="/mechanical" className="hover:text-white transition-colors">Mechanical Components</Link></li>
              <li><Link to="/mechanical" className="hover:text-white transition-colors">Custom Manufacturing</Link></li>
              <li><Link to="/food" className="hover:text-white transition-colors">Premium Food Products</Link></li>
              <li><Link to="/digital" className="hover:text-white transition-colors">Digital Marketing</Link></li>
            </ul>
          </nav>

          <nav aria-label="Company navigation">
            <h4 className="font-bold mb-8 text-sm uppercase tracking-widest">Company</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Insights &amp; Blog</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </nav>

          <div>
            <h4 className="font-bold mb-8 text-sm uppercase tracking-widest">Newsletter</h4>
            <p className="text-white/50 text-sm mb-6">Stay updated with our latest industrial insights.</p>
            <form
              className="flex gap-2"
              aria-label="Newsletter subscription form"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Email address"
                autoComplete="email"
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-terracotta"
                aria-label="Enter your email address"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-terracotta rounded-lg text-sm font-bold hover:bg-terracotta/90 transition-colors"
                aria-label="Subscribe to newsletter"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/30 text-xs">
            &copy; 2026 IndoEuro Core Oy. All rights reserved.
          </p>
          <nav aria-label="Legal navigation" className="flex gap-8 text-white/30 text-xs">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="#" className="hover:text-white transition-colors">Cookie Settings</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};
