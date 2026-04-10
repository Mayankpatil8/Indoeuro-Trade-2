import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SourcingCategory } from '@/constants';


interface FoodProductCardProps {
  product: SourcingCategory;
  onClick: () => void;
}

export const FoodProductCard: React.FC<FoodProductCardProps> = ({ product, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative flex flex-col bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer"
    >
      {/* Image */}
      <div className="relative aspect-[1/1] overflow-hidden border-b">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
        />
        <div className="absolute top-2 left-2 bg-terracotta text-white px-2 py-1 text-[9px]">
          {product.subcategory}
        </div>
      </div>

      {/* Content */}
      <div className="p-3 flex flex-col flex-1">
        <h3 className="text-lg font-bold mb-2">{product.name}</h3>

        <div className="mt-auto pt-3 flex justify-between items-center">
          <span className="text-[9px] opacity-70">{product.origin}</span>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
            className="text-[9px] text-terracotta flex items-center"
          >
            Details <ArrowRight size={12} className="ml-1" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
