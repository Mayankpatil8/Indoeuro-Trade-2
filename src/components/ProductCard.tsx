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
      className={cn("group bg-white rounded-3xl overflow-hidden soft-shadow transition-all duration-300 border border-beige/50 flex flex-col h-full", className)}
    >
      <div className="aspect-[4/3] overflow-hidden relative shrink-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
          {product.tags?.map(tag => (
            <span key={tag} className="px-3 py-1 bg-white/95 backdrop-blur-sm text-nordic-black text-[10px] font-bold uppercase tracking-wider rounded-full shadow-sm border border-beige/20">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="p-8 flex flex-col flex-1">
        <h3 className="font-display text-xl font-bold text-nordic-black leading-tight mb-3 group-hover:text-terracotta transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-nordic-grey mb-6 leading-relaxed flex-1">
          {product.description}
        </p>
        <div className="pt-2 mt-auto">
          <Link 
            to="/contact"
            className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-terracotta hover:text-terracotta/80 transition-colors"
          >
            Inquire Now <ArrowRight size={14} className="ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
