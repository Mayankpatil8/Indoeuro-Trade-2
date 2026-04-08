import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SourcingCategory } from '@/constants';



interface FoodProductCardProps {
  product: SourcingCategory;
}

export const FoodProductCard: React.FC<FoodProductCardProps> = ({ product }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg border border-beige overflow-hidden flex flex-col lg:flex-row items-stretch soft-shadow group min-h-[260px]"    >
      {/* Left Content */}
      <div className="flex-1 p-4 lg:p-5 flex flex-col justify-between h-full">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-text-xl lg:text-2xl font-bold text-nordic-black font-display">
            {product.name}
          </h3>
          <span className="text-terracotta font-bold text-sm">
            07 APR, 2026
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-0 border-t border-b border-beige py-3 mb-4">
          <div className="space-y-3">
            <div className="flex justify-between text-[10px] uppercase tracking-widest border-b border-beige/50 pb-2">
              <span className="text-nordic-grey/60">Category:</span>
              <span className="text-nordic-black font-bold text-right">{product.type} products</span>
            </div>
            <div className="flex justify-between text-[10px] uppercase tracking-widest border-b border-beige/50 pb-2">
              <span className="text-nordic-grey/60">Subcategory:</span>
              <span className="text-nordic-black font-bold text-right">{product.subcategory}</span>
            </div>
            <div className="flex justify-between text-[10px] uppercase tracking-widest border-b border-beige/50 pb-2">
              <span className="text-nordic-grey/60">Origin:</span>
              <span className="text-nordic-black font-bold text-right">{product.origin}</span>
            </div>
            <div className="flex justify-between text-[10px] uppercase tracking-widest">
              <span className="text-nordic-grey/60">Organic:</span>
              <span className="text-nordic-black font-bold text-right">{product.isOrganic ? 'YES' : 'NO'}</span>
            </div>
          </div>
          <div className="space-y-3 mt-3 md:mt-0">
            <div className="flex justify-between text-[10px] uppercase tracking-widest border-b border-beige/50 pb-2">
              <span className="text-nordic-grey/60">Delivery Unit:</span>
              <span className="text-nordic-black font-bold text-right">{product.deliveryUnit}</span>
            </div>
            <div className="flex justify-between text-[10px] uppercase tracking-widest">
              <span className="text-nordic-grey/60">Packaging:</span>
              <span className="text-nordic-black font-bold text-right">{product.packaging}</span>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <Link
            to="/contact"
            className="px-5 py-2 border border-nordic-black text-nordic-black text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-nordic-black hover:text-white transition-all"
          >
            READ MORE
          </Link>
          <Link
            to="/contact"
            className="px-5 py-2 bg-terracotta text-white text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-terracotta/90 transition-all flex items-center group/order"
          >
            ORDER <ArrowRight size={14} className="ml-2 transition-transform group-hover/order:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Right Image - Pill Shape */}
      <div className="lg:w-[30%] relative min-h-[180px] lg:min-h-full">
        <div className="absolute inset-0 lg:inset-y-4 lg:right-4 overflow-hidden rounded-t-[10rem] lg:rounded-t-none lg:rounded-l-[20rem] lg:rounded-r-[2rem]">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </motion.div>
  );
};
