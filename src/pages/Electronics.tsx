import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SOURCING_EXAMPLES } from '@/constants';
import { ProductCard } from '@/components/ProductCard';

export const Electronics = () => {
  const electronics = SOURCING_EXAMPLES.filter(p => p.category === 'electronics');

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <header className="mb-16 text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Electronic Sourcing</h1>
          <p className="text-lg text-nordic-grey leading-relaxed">
            From microcontrollers to complex sensor arrays, we source any electronic component you need. 
            If it exists, we can find it and deliver it to you.
          </p>
        </header>

        <div className="mb-24">
          <div className="bg-cream rounded-[3rem] p-12 lg:p-20 border border-beige flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6">Need a specific part?</h2>
              <p className="text-nordic-grey mb-8 leading-relaxed">
                Our extensive network of suppliers across Finland and Europe allows us to procure even the most specialized electronic components. 
                Simply tell us your requirements, and we'll handle the rest.
              </p>
              <Link 
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-terracotta text-white font-bold rounded-full hover:bg-terracotta/90 transition-all soft-shadow"
              >
                Submit a Sourcing Request <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
            <div className="w-full lg:w-1/3 aspect-square rounded-3xl overflow-hidden soft-shadow">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" 
                alt="Electronics Sourcing" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-12">Examples of what we source</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {electronics.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
