import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-nordic-black text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <Link to="/" className="font-display text-xl font-bold tracking-tighter">
              INDOEURO <span className="text-terracotta">TRADE HUB</span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Your whole & sole sourcing partner in Finland. 
              Ask for any parts and we will deliver.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-8 text-sm uppercase tracking-widest">Solutions</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><Link to="/electronics" className="hover:text-white transition-colors">Electronic Parts</Link></li>
              <li><Link to="/mechanical" className="hover:text-white transition-colors">Mechanical Components</Link></li>
              <li><Link to="/mechanical" className="hover:text-white transition-colors">Custom Manufacturing</Link></li>
              <li><Link to="/food" className="hover:text-white transition-colors">Premium Food Products</Link></li>
              <li><Link to="/digital" className="hover:text-white transition-colors">Digital Marketing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-8 text-sm uppercase tracking-widest">Company</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Insights & Blog</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-8 text-sm uppercase tracking-widest">Newsletter</h4>
            <p className="text-white/50 text-sm mb-6">Stay updated with our latest industrial insights.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-terracotta"
              />
              <button className="px-4 py-2 bg-terracotta rounded-lg text-sm font-bold hover:bg-terracotta/90 transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/30 text-xs">
            © 2026 IndoEuro Trade Hub Oy. All rights reserved.
          </p>
          <div className="flex gap-8 text-white/30 text-xs">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="#" className="hover:text-white transition-colors">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
