import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Filter } from 'lucide-react';
import { SOURCING_EXAMPLES } from '@/constants';
import { FoodProductCard } from '@/components/FoodProductCard';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
type FoodType = 'all' | 'conventional' | 'organic' | 'gluten-free';

const ITEMS_PER_PAGE = 8;

export const Food = () => {
  const [activeFilter, setActiveFilter] = useState<FoodType>('all');

  const [currentPage, setCurrentPage] = useState(1);
const productsRef = useRef(null);
  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter]);

const handlePageChange = (page) => {
  setCurrentPage(page);

  setTimeout(() => {
    productsRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }, 0);
};

  const foodProducts = SOURCING_EXAMPLES.filter(p => p.category === 'food');

  const filteredProducts = activeFilter === 'all'
    ? foodProducts
    : foodProducts.filter(p => p.type === activeFilter);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const filterOptions: { label: string; value: FoodType }[] = [
    { label: 'All Products', value: 'all' },
    { label: 'Conventional', value: 'conventional' },
    { label: 'Organic', value: 'organic' },
    { label: 'Gluten-Free', value: 'gluten-free' },
  ];


  return (
    <div className="pt-20 bg-white min-h-screen">
      {/* Hero Section - Image 1 Style */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="lg:w-1/3">
            <span className="text-terracotta text-sm font-bold uppercase tracking-[0.2em] mb-6 block">Explore Our Products</span>
            <h1 className="text-5xl lg:text-6xl font-bold mb-10 leading-[1.1] text-nordic-black font-display">
              Organic <br />
              Conventional <br />
              and Gluten-Free <br />
              Food Ingredients
            </h1>
            <button className="px-10 py-4 border border-nordic-black text-nordic-black text-xs font-bold uppercase tracking-widest rounded-full hover:bg-nordic-black hover:text-white transition-all flex items-center group">
              ALL PRODUCTS <ArrowRight size={16} className="ml-3 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {[
              {
                title: 'Conventional Food Ingredients',
                color: 'bg-[#3D2B1F]',
                desc: 'We source all of our food ingredients directly from approved suppliers, ensuring the highest quality.',
                img: '/images/conventional.jpg',
                offset: 'mt-0'
              },
              {
                title: 'Organic Food Ingredients',
                color: 'bg-[#D97757]',
                desc: 'Organic raw materials undergo rigorous analysis in external laboratories, guaranteeing their organic origin.',
                img: '/images/organic.jpg',
                offset: 'mt-12'
              },
              {
                title: 'Gluten-Free Food Ingredients',
                color: 'bg-[#9C8E7F]',
                desc: 'Our range of products is carefully produced in dedicated gluten-free facilities, specialized in pseudocereals.',
                img: '/images/gluten-free.jpg',
                offset: 'mt-0'
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={cn("flex flex-col rounded-t-2xl rounded-b-[12rem] overflow-hidden shadow-xl", card.color, card.offset)}
              >
                <div className="p-8 flex flex-col h-full text-white">
                  <h3 className="text-xl font-bold mb-6 leading-tight min-h-[3rem]">{card.title}</h3>
                  <p className="text-xs leading-relaxed opacity-90 mb-8 min-h-[5rem]">{card.desc}</p>
                  <button className="w-full py-4 border border-white/40 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center justify-center hover:bg-white hover:text-nordic-black transition-all group/btn mb-8">
                    CHECK OUR PRODUCTS <ArrowRight size={14} className="ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
                <div className="flex-1">
                  <div className="h-72 overflow-hidden">
                    <img src={card.img} alt={card.title} className="w-full h-full object-cover" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketplace Section - Image 3 Style */}
<section ref={productsRef} className="py-24 bg-cream grainy-bg">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-terracotta text-[10px] font-bold uppercase tracking-widest mb-4 block">Marketplace</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-nordic-black font-display">Check our offers</h2>
          </div>

          {/* Filter Bar - Image 3 Style */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {filterOptions.filter(o => o.value !== 'all').map((option) => (
              <button
                key={option.value}
                onClick={() => setActiveFilter(option.value)}
                className={cn(
                  "px-8 py-3 border rounded-full text-[10px] font-bold uppercase tracking-widest transition-all flex items-center",
                  activeFilter === option.value
                    ? "bg-nordic-black text-white border-nordic-black"
                    : "bg-white text-nordic-black border-nordic-black hover:bg-beige"
                )}
              >
                {option.label} Products <ArrowRight size={14} className="ml-2" />
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid gap-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid gap-8"
              >
                {currentProducts.map((product) => (
                  <FoodProductCard key={product.id} product={product} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <div className="flex justify-center items-center gap-6 mt-16">

        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, i) => (
          <span
            key={i}
onClick={() => handlePageChange(i + 1)}
            className={`cursor-pointer text-lg ${currentPage === i + 1
              ? "text-black font-bold"
              : "text-gray-400"
              }`}
          >
            {i + 1}
          </span>
        ))}

        {/* Next Button */}
        <div
          onClick={() =>
          currentPage < totalPages && handlePageChange(currentPage + 1)
        }
                  
        
        className="w-10 h-10 flex items-center justify-center border border-black rounded-full cursor-pointer hover:bg-black hover:text-white transition"
        >
          →
        </div>

      </div>

      {/* Custom Request Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-6">Can't find a specific ingredient?</h3>
          <p className="text-nordic-grey mb-10 leading-relaxed">
            Our sourcing network is vast. If you require a specific product, origin, or certification not listed here, our procurement team will find it for you.
          </p>
          <Link
            to="/contact"
            className="inline-flex px-10 py-5 bg-terracotta text-white font-bold uppercase tracking-widest text-xs rounded-full hover:bg-terracotta/90 transition-all shadow-xl"
          >
            Start Custom Sourcing Request
          </Link>
        </div>
      </section>
    </div>
  );
};
