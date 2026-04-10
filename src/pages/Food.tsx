import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SOURCING_EXAMPLES, SourcingCategory } from '@/constants';
import { FoodProductCard } from '@/components/FoodProductCard';
import { FoodProductModal } from '@/components/FoodProductModal';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { useSEO } from '@/lib/useSEO';

type FoodType = 'all' | 'conventional' | 'organic' | 'gluten-free';

export const Food = () => {
  useSEO({
    title: 'Premium Food Ingredients Supplier – IndoEuro Trade Hub',
    description: 'Organic & conventional food ingredients: seeds, pulses, pseudocereals & flours. Certified global food sourcing — flaxseed, lentils, buckwheat, chia & more from IndoEuro Trade Hub.',
    keywords: 'food ingredient sourcing, organic food, conventional food, gluten-free ingredients, flaxseed, lentils, buckwheat, chia seeds, food supplier Finland',
  });
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
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Page Header */}
        <header className="mb-16 text-center max-w-3xl mx-auto">
          <span className="text-terracotta text-xs font-bold uppercase tracking-widest mb-4 block">
            Premium Ingredients
          </span>
          <h1 className="text-5xl font-bold mb-6">
            Premium Natural Food Ingredients Supplier.
          </h1>
          <p className="text-lg text-nordic-grey leading-relaxed">
            We supply high-quality natural, organic, and conventional food ingredients to global industries.
            Reliable sourcing, sustainable farms, and premium-grade products delivered worldwide.
          </p>
        </header>

        {/* Hero CTA Block — matches Mechanical dark card style */}
        <section className="mb-24 bg-nordic-black rounded-[2rem] overflow-hidden text-white soft-shadow">
          <div className="grid lg:grid-cols-2 items-center">
            <div className="p-12 lg:p-20">
              <span className="text-terracotta text-xs font-bold uppercase tracking-widest mb-4 block">
                Bespoke Sourcing
              </span>
              <h2 className="text-4xl font-bold mb-6">Any Ingredient. Any Origin.</h2>
              <p className="text-white/70 mb-10 leading-relaxed">
                Our global sourcing network connects you to premium conventional, organic, and gluten-free
                ingredients from certified farms across Europe and beyond. Tell us what you need — we handle
                verification, packaging, and worldwide delivery.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'Conventional & Organic Certified',
                  'Gluten-Free Processing Lines',
                  'Bulk & Custom Packaging',
                  'EU & Non-EU Origin Options',
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <CheckCircle2 size={18} className="text-sage" /> {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                {(['conventional', 'organic', 'gluten-free'] as FoodType[]).map(type => (
                  <button
                    key={type}
                    onClick={() => {
                      const element = document.getElementById('marketplace');
                      element?.scrollIntoView({ behavior: 'smooth' });
                      setActiveFilter(type);
                    }}
                    className={cn(
                      "px-6 py-3 text-xs font-bold uppercase tracking-widest rounded-full transition-all",
                      activeFilter === type
                        ? "bg-terracotta text-white"
                        : "bg-white/10 text-white hover:bg-white/20"
                    )}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
            <div className="h-full min-h-[400px]">
              <img
                src="/food-hero.png"
                alt="Premium natural food ingredients sourced globally"
                className="w-full h-full object-cover opacity-90"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </section>

        {/* Marketplace / Products Section */}
        <section id="marketplace">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row items-baseline justify-between mb-12 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Showcase</h2>
              <p className="text-nordic-grey">
                Exploring our{' '}
                <span className="text-terracotta font-bold">{activeFilter}</span> collection
              </p>
            </div>

            {/* Sub-Filter Bar */}
            <div className="flex flex-wrap gap-2">
              {subCategories.map(f => (
                <button
                  key={f}
                  onClick={() => setSubFilter(f)}
                  className={cn(
                    "px-5 py-2 text-xs font-bold uppercase tracking-widest rounded-full transition-all",
                    subFilter === f
                      ? "bg-nordic-black text-white"
                      : "bg-cream text-nordic-grey border border-beige hover:border-nordic-black/30 hover:text-nordic-black"
                  )}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 4) * 0.08 }}
              >
                <FoodProductCard
                  product={product}
                  onClick={() => {
                    setSelectedProduct(product);
                    setIsModalOpen(true);
                  }}
                />
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      <FoodProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Custom Request Section */}
      <section className="mt-24 py-24 bg-beige/30 border-y border-beige">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-terracotta text-xs font-bold uppercase tracking-widest mb-4 block">
            Custom Procurement
          </span>
          <h3 className="text-4xl font-bold mb-6 text-nordic-black">
            Can't find a specific ingredient?
          </h3>
          <p className="text-nordic-grey mb-10 leading-relaxed max-w-2xl mx-auto">
            Our sourcing network is vast. If you require a specific product, origin, or certification not listed here,
            our procurement team will find it for you.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-terracotta text-white font-bold rounded-full hover:bg-terracotta/90 transition-all soft-shadow"
          >
            Start Custom Sourcing Request <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};
