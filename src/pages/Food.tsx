import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { SOURCING_EXAMPLES, SourcingCategory } from '@/constants'; // ✅ ADD THIS
import { FoodProductCard } from '@/components/FoodProductCard';
import { FoodProductModal } from '@/components/FoodProductModal';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

type FoodType = 'all' | 'conventional' | 'organic' | 'gluten-free';

export const Food = () => {
  const [activeFilter, setActiveFilter] = useState<FoodType>('conventional');
  const [subFilter, setSubFilter] = useState<string>('All');
  const [selectedProduct, setSelectedProduct] = useState<SourcingCategory | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const foodProducts = SOURCING_EXAMPLES.filter(p => p.category === 'food');

  const filteredByType = activeFilter === 'all'
    ? foodProducts
    : foodProducts.filter(p => p.type === activeFilter);

  const filteredProducts = subFilter === 'All'
    ? filteredByType
    : filteredByType.filter(p => p.subcategory === subFilter);

  const subCategories = ['All', 'Flours', 'Pseudocereals', 'Pulses', 'Seeds'];
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isModalOpen]);

  return (
    <div className="pt-20 bg-cream min-h-screen font-sans grainy-bg">
      {/* Hero Section - Editorial Split Style */}
      <section className="relative flex flex-col lg:flex-row min-h-[90vh] border-b-2 border-nordic-black">
        {/* Left Side - Massive Vertical Text */}
        <div className="hidden lg:flex w-32 border-r-2 border-nordic-black items-center justify-center bg-sage text-white">
          <h1 className="writing-mode-vertical rotate-270 text-6xl font-bold uppercase tracking-[0.2em] font-display">
            Sourcing
          </h1>
        </div>

        {/* Middle Content */}
        <div className="flex-1 flex flex-col bg-beige/30">
          <div className="flex-1 flex flex-col justify-center p-12 lg:p-24">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-terracotta text-xs font-bold uppercase tracking-[0.4em] mb-8 block"
            >
              Premium Ingredients
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-[3rem] font-bold leading-[0.85] uppercase tracking-tighter font-display mb-12 text-nordic-black"
            >
              Premium  Natural  Food <br />
              Ingredients  Supplier.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg lg:text-xl text-nordic-grey max-w-xl leading-relaxed mb-12"
            >
              <p>
                We supply high-quality natural, organic, and conventional food ingredients to global industries.
                Reliable sourcing, sustainable farms, and premium-grade products delivered worldwide.
              </p>
            </motion.p>

            <div className="flex flex-wrap gap-4">
              {['conventional', 'organic', 'gluten-free'].map((type, i) => (
                <button
                  key={type}
                  onClick={() => {
                    const element = document.getElementById('marketplace');
                    element?.scrollIntoView({ behavior: 'smooth' });
                    setActiveFilter(type as any);
                  }}
                  className={cn(
                    "px-8 py-4 border-2 border-nordic-black text-[10px] font-bold uppercase tracking-widest transition-all",
                    activeFilter === type ? "bg-terracotta text-white border-terracotta" : "bg-white/50 hover:bg-nordic-black hover:text-white"
                  )}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Large Image */}
        <div className="lg:w-1/3 border-l-2 border-nordic-black relative overflow-hidden bg-sand">
          <img
            src="/food-hero.png"
            alt="Premium Sourced Ingredients"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
          />
        </div>
      </section>

      {/* Marketplace Section */}
      <section id="marketplace" className="py-32 bg-cream">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row items-baseline justify-between mb-24 gap-12 border-b-2 border-nordic-black pb-12">
            <div>
              <h2 className="text-6xl lg:text-8xl font-bold font-display uppercase tracking-tighter text-nordic-black">
                Showcase
              </h2>
              <p className="text-nordic-grey mt-4 text-lg">Exploring our <span className="text-terracotta font-bold">{activeFilter}</span> collection</p>
            </div>

            {/* Sub-Filter Bar */}
            <div className="flex flex-wrap gap-2">
              {subCategories.map((f) => (
                <button
                  key={f}
                  onClick={() => setSubFilter(f)}
                  className={cn(
                    "px-6 py-2 text-[10px] font-bold uppercase tracking-widest transition-all border border-transparent",
                    subFilter === f
                      ? "bg-terracotta text-white"
                      : "text-nordic-grey hover:text-nordic-black hover:border-nordic-black/20 rounded-full"
                  )}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid - Staggered Masonry feel */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}   // 🔥 CHANGE HERE
                transition={{ delay: (i % 4) * 0.1 }}
                viewport={{ once: true }}
                className={cn(i % 2 === 1 ? "lg:mt-12" : "")}
              >
                <FoodProductCard
                  product={product}
                  onClick={() => {
                    setSelectedProduct(() => product);   // 🔥 important
                    setIsModalOpen(true);
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FoodProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Custom Request Section */}
      <section className="py-24 bg-beige/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-6 text-nordic-black">Can't find a specific ingredient?</h3>
          <p className="text-nordic-grey mb-10 leading-relaxed">
            Our sourcing network is vast. If you require a specific product, origin, or certification not listed here, our procurement team will find it for you.
          </p>
          <Link
            to="/contact"
            className="inline-flex px-10 py-5 bg-terracotta text-white font-bold uppercase tracking-widest text-xs rounded-full hover:bg-nordic-black transition-all shadow-xl"
          >
            Start Custom Sourcing Request
          </Link>
        </div>
      </section>
    </div>
  );
};
