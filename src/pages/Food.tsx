import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, Leaf, ShieldAlert, Award, Globe } from 'lucide-react';
import { SOURCING_EXAMPLES, SourcingCategory } from '@/constants';
import { FoodProductCard } from '@/components/FoodProductCard';
import { FoodProductModal } from '@/components/FoodProductModal';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { useSEO } from '@/lib/useSEO';
import { PageTransition } from '@/components/PageTransition';


type FoodType = 'all' | 'conventional' | 'organic' | 'gluten-free';

export const Food = () => {
  useSEO({
    title: 'Certified Food Ingredients Sourcing & Wholesale | IndoEuro Core Oy',
    description: 'Bulk supply of organic and conventional food ingredients: seeds, pseudocereals, pulses, and flours. HACCP certified global food sourcing by IndoEuro Core Oy.',
    keywords: 'wholesale food ingredient sourcing, bulk conventional seeds, organic grains supply Europe, gluten-free pulses, food ingredients distributor Finland',
  });
  
  const [activeFilter, setActiveFilter] = useState<FoodType>('conventional');
  const [subFilter, setSubFilter] = useState<string>('All');
  const [selectedProduct, setSelectedProduct] = useState<SourcingCategory | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const foodProducts = SOURCING_EXAMPLES.filter(p => p.category === 'food');

  // Filter by type tab
  const filteredByType = activeFilter === 'all'
    ? foodProducts
    : foodProducts.filter(p => p.type === activeFilter);

  // Build available sub-categories dynamically from what actually exists in current type
  const availableSubcats = ['All', ...Array.from(
    new Set(filteredByType.map(p => p.subcategory).filter(Boolean) as string[])
  ).sort()];

  // Filter by subcategory
  const filteredProducts = subFilter === 'All'
    ? filteredByType
    : filteredByType.filter(p => p.subcategory === subFilter);

  // When active type changes: reset subcategory to 'All'
  const handleTypeChange = (type: FoodType) => {
    setActiveFilter(type);
    setSubFilter('All');
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isModalOpen]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 90, damping: 14 } }
  };

  // Structured Technical SEO Schema (JSON-LD) for Food Sourcing Service
  const foodSchemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Bespoke Food Sourcing & Agricultural Ingredients Supply",
    "description": "Certified bulk procurement of organic, conventional, and gluten-free agricultural ingredients, seeds, pulses, and flours.",
    "provider": {
      "@type": "Organization",
      "name": "IndoEuro Core Oy",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Mannerheimintie 12",
        "addressLocality": "Finland ",
        "postalCode": "00100",
        "addressCountry": "FI"
      }
    },
    "areaServed": "Europe",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Food Ingredients Portfolio",
      "itemListElement": foodProducts.map((item) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": item.name,
          "description": item.description,
          "category": item.subcategory
        }
      }))
    }
  };

  return (
    <PageTransition>
      <div className="pt-24 pb-24 bg-cream grainy-bg min-h-screen">
      {/* Inject Structured Technical SEO Schema */}
      <script type="application/ld+json">
        {JSON.stringify(foodSchemaMarkup)}
      </script>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Page Header */}
        <header className="mb-20 text-center max-w-4xl mx-auto">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-5 py-2 bg-white text-nordic-black text-xs font-bold uppercase tracking-[0.15em] rounded-full mb-6 shadow-sm border border-beige"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-600 hover:bg-emerald-700 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600 hover:bg-emerald-700"></span>
            </span>
            Global Agriculture Supply
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight text-nordic-black"
          >
            Premium Natural <span className="text-terracotta">Food Ingredients.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-nordic-grey leading-relaxed"
          >
            We coordinate strict agricultural supply chains to source premium conventional, organic certified, and certified gluten-free bulk ingredients directly from audited farms to global food manufacturers.
          </motion.p>
        </header>

        {/* Hero CTA Block — matches Mechanical dark card style */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-24"
        >
          <div className="bg-white rounded-[2.5rem] border border-beige shadow-sm overflow-hidden grid lg:grid-cols-2 items-center gap-0">
            <div className="p-10 lg:p-16 relative">
              <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none" style={{ background: "radial-gradient(circle, rgba(197, 102, 79, 0.05) 0%, rgba(197, 102, 79, 0) 70%)", willChange: "transform" }} />
              
              <span className="text-xs font-bold uppercase tracking-widest text-terracotta mb-4 block">Bulk Sourcing Partnership</span>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-nordic-black">Any Origin. Vetted Quality.</h2>
              <p className="text-nordic-grey mb-8 leading-relaxed">
                Connect directly with verified growers. Our direct farm integration and central quality checking setups enable food production lines to source stable bulk supplies without handling raw origin complex trade issues.
              </p>
              
              <ul className="grid grid-cols-2 gap-4 mb-8">
                {[
                  'Conventional & Organic CoC',
                  'Dedicated Gluten-Free Lines',
                  'Bulk Moisture-Barrier Packaging',
                  'FSSC 22000 Audited Suppliers',
                  'Third-Party Lab Reports',
                  'European & Non-EU Origin Options'
                ].map(item => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-nordic-black font-semibold">
                    <CheckCircle2 size={16} className="text-sage shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-3 mb-6">
                {(['all', 'conventional', 'organic', 'gluten-free'] as FoodType[]).map(type => (
                  <button
                    key={type}
                    onClick={() => {
                      const element = document.getElementById('marketplace');
                      element?.scrollIntoView({ behavior: 'smooth' });
                      handleTypeChange(type);
                    }}
                    className={cn(
                      "px-5 py-2.5 text-[10px] font-bold uppercase tracking-widest rounded-full transition-all border",
                      activeFilter === type
                        ? "bg-terracotta text-white border-terracotta shadow-sm"
                        : "bg-white text-nordic-black border-beige hover:bg-beige/40"
                    )}
                  >
                    {type === 'all' ? 'All Products' : type}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="h-full min-h-[450px] relative">
              <img
                src="food-hero.png"
                alt="Organic farming and premium bulk grain agricultural sourcing"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </motion.div>

        {/* Agricultural Auditing Bento Grid */}
        <div className="mb-24">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-terracotta text-xs font-bold uppercase tracking-widest mb-3 block">Compliance Audit</span>
            <h3 className="text-3xl font-bold">Rigorous Food Quality Validation</h3>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Leaf, title: 'Organic Certification', desc: 'Sourcing backed by trusted Euro-leaf certifications and certified origin documentation.' },
              { icon: ShieldAlert, title: 'Contaminant Testing', desc: 'Rigorous third-party lab screening for heavy metals, pesticides, and microbial counts for every batch.' },
              { icon: Award, title: 'FSSC 22000 Standards', desc: 'All farm processing facilities are required to adhere strictly to premium GFSI food safety audits.' },
              { icon: Globe, title: 'DDP Shipping Setup', desc: 'Secure temperature-controlled bulk cargo configurations delivered directly to your production hubs.' }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-nordic-black text-white rounded-3xl border border-white/5 soft-shadow hover:border-terracotta/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-terracotta mb-6 group-hover:scale-105 transition-transform duration-300">
                  <feature.icon size={24} />
                </div>
                <h4 className="text-lg font-bold mb-3">{feature.title}</h4>
                <p className="text-sm text-white/70 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Marketplace / Products Section */}
        <section id="marketplace" className="scroll-mt-24">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-10 gap-6 border-b border-beige pb-6">
            <div>
              <span className="text-terracotta text-xs font-bold uppercase tracking-widest mb-2 block">Catalog Collection</span>
              <h2 className="text-3xl font-bold">
                Exploring{' '}
                <span className="text-terracotta font-extrabold capitalize">
                  {activeFilter === 'all' ? 'All' : activeFilter}
                </span>{' '}Sourcing
              </h2>
              <p className="text-sm text-nordic-grey mt-1">
                {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
              </p>
            </div>

            {/* Sub-Filter Pill Bar — animated active indicator */}
            <div className="-mx-1 px-1">
              <div className="flex flex-wrap md:flex-nowrap items-center gap-1.5 bg-beige/30 p-1.5 rounded-[1.5rem] md:rounded-full border border-beige/60 w-full md:w-max">
                {availableSubcats.map(f => {
                  const isActive = subFilter === f;
                  return (
                    <button
                      key={f}
                      onClick={() => setSubFilter(f)}
                      className={cn(
                        'relative whitespace-nowrap px-4 py-2 text-[11px] font-bold uppercase tracking-wider rounded-full transition-colors duration-200',
                        isActive ? 'text-white' : 'text-nordic-grey hover:text-nordic-black'
                      )}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="foodSubFilterBg"
                          className="absolute inset-0 bg-nordic-black rounded-full -z-10"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10">{f}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Products Grid — re-animates on every filter change */}
          <AnimatePresence mode="wait">
            {filteredProducts.length > 0 ? (
              <motion.div
                key={`${activeFilter}-${subFilter}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
              >
                {filteredProducts.map((product, idx) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: idx * 0.05 }}
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
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-20 bg-white rounded-3xl border border-beige"
              >
                <div className="text-5xl mb-4">🌾</div>
                <h4 className="text-lg font-bold text-nordic-black mb-2">No products in this category</h4>
                <p className="text-sm text-nordic-grey max-w-xs mx-auto">
                  Try selecting a different type or subcategory above.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </div>

      <FoodProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Custom Request Section */}
      <section className="mt-24 py-24 bg-white border-y border-beige relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 pointer-events-none" style={{ background: "radial-gradient(circle, rgba(197, 102, 79, 0.05) 0%, rgba(197, 102, 79, 0) 70%)", willChange: "transform" }} />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <span className="text-terracotta text-xs font-bold uppercase tracking-widest mb-4 block">
            Bespoke Procurement
          </span>
          <h3 className="text-4xl font-bold mb-6 text-nordic-black">
            Can't find a specific ingredient?
          </h3>
          <p className="text-nordic-grey mb-10 leading-relaxed max-w-2xl mx-auto">
            Our agricultural network is vast. If you require a specific crop, unique origin, or specialized food certification not listed in our standard catalogue, our Finland  procurement team will secure a custom batch for you.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-terracotta text-white font-bold rounded-full hover:bg-terracotta/90 transition-all soft-shadow group"
          >
            Start Custom Sourcing Request <ArrowRight size={18} className="ml-3 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
    </PageTransition>
  );
};
