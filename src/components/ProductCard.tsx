import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SourcingCategory } from '@/constants';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: SourcingCategory;
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, className }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className={cn("group bg-white rounded-2xl overflow-hidden soft-shadow transition-all duration-300", className)}
    >
      <div className="aspect-[4/5] overflow-hidden relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          {product.tags?.map(tag => (
            <span key={tag} className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-display text-lg font-bold text-nordic-black leading-tight">
            {product.name}
          </h3>
        </div>
        <p className="text-sm text-nordic-grey line-clamp-2 mb-6">
          {product.description}
        </p>
        <Link 
          to="/contact"
          className="flex items-center text-xs font-bold uppercase tracking-widest text-nordic-black group-hover:text-terracotta transition-colors"
        >
          Inquire Now <ArrowRight size={14} className="ml-2 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
};
