import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import { SourcingCategory } from '@/constants';

interface FoodProductCardProps {
  product: SourcingCategory;
  onClick: () => void;
}

export const FoodProductCard: React.FC<FoodProductCardProps> = ({ product, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      onClick={onClick}
      className="group bg-white rounded-3xl overflow-hidden soft-shadow transition-all duration-300 cursor-pointer border border-beige/50 flex flex-col h-full"
    >
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden relative shrink-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Tag badges */}
        {product.tags && product.tags.length > 0 && (
          <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
            {product.tags.slice(0, 2).map(tag => (
              <span
                key={tag}
                className="px-3 py-1 bg-white/95 backdrop-blur-sm text-nordic-black text-[10px] font-bold uppercase tracking-wider rounded-full shadow-sm border border-beige/20"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        {/* Organic / Gluten-Free indicator */}
        {(product.isOrganic || product.isGlutenFree) && (
          <div className="absolute top-4 right-4 flex flex-col gap-1.5">
            {product.isOrganic && (
              <span className="px-2.5 py-1 bg-sage text-white text-[9px] font-bold uppercase tracking-wider rounded-full shadow-sm">
                Organic
              </span>
            )}
            {product.isGlutenFree && (
              <span className="px-2.5 py-1 bg-terracotta text-white text-[9px] font-bold uppercase tracking-wider rounded-full shadow-sm">
                GF
              </span>
            )}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display text-lg font-bold text-nordic-black leading-tight mb-2 group-hover:text-terracotta transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-nordic-grey line-clamp-2 mb-4 leading-relaxed flex-1">
          {product.description}
        </p>

        {/* Origin row */}
        {product.origin && (
          <div className="flex items-center gap-1.5 text-xs text-nordic-grey/80 mb-5">
            <MapPin size={12} className="text-terracotta" />
            <span className="font-semibold uppercase tracking-widest">{product.origin}</span>
          </div>
        )}

        <div className="pt-2 mt-auto">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
            className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-terracotta hover:text-terracotta/80 transition-colors"
          >
            View Details <ArrowRight size={14} className="ml-2 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
