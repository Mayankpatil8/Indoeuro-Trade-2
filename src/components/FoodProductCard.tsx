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
      className="group bg-white rounded-2xl overflow-hidden soft-shadow transition-all duration-300 cursor-pointer"
    >
      {/* Image */}
      <div className="aspect-[4/5] overflow-hidden relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Tag badges */}
        {product.tags && product.tags.length > 0 && (
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {product.tags.slice(0, 2).map(tag => (
              <span
                key={tag}
                className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        {/* Organic / Gluten-Free indicator */}
        {(product.isOrganic || product.isGlutenFree) && (
          <div className="absolute top-4 right-4 flex flex-col gap-1">
            {product.isOrganic && (
              <span className="px-2 py-1 bg-sage text-white text-[9px] font-bold uppercase tracking-wider rounded-full">
                Organic
              </span>
            )}
            {product.isGlutenFree && (
              <span className="px-2 py-1 bg-terracotta text-white text-[9px] font-bold uppercase tracking-wider rounded-full">
                GF
              </span>
            )}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-2">
          <h3 className="font-display text-lg font-bold text-nordic-black leading-tight">
            {product.name}
          </h3>
        </div>
        <p className="text-sm text-nordic-grey line-clamp-2 mb-4">
          {product.description}
        </p>

        {/* Origin row */}
        {product.origin && (
          <div className="flex items-center gap-1.5 text-xs text-nordic-grey/70 mb-4">
            <MapPin size={12} />
            <span className="font-medium uppercase tracking-widest">{product.origin}</span>
          </div>
        )}

        <button
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
          className="flex items-center text-xs font-bold uppercase tracking-widest text-nordic-black group-hover:text-terracotta transition-colors"
        >
          View Details <ArrowRight size={14} className="ml-2 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </motion.div>
  );
};
