import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, MapPin, Package, Scale, ShieldCheck } from 'lucide-react';
import { SourcingCategory } from '@/constants';
import { cn } from '@/lib/utils';
import { createPortal } from 'react-dom';

interface FoodProductModalProps {
    product: SourcingCategory | null;
    isOpen: boolean;
    onClose: () => void;
}

export const FoodProductModal: React.FC<FoodProductModalProps> = ({ product, isOpen, onClose }) => {
    if (!product) return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-nordic-black/80 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-6xl bg-cream overflow-hidden border-2 border-nordic-black shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] flex flex-col lg:flex-row max-h-[90vh] z-10"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 z-10 p-2 bg-nordic-black text-white hover:bg-terracotta transition-colors"
                        >
                            <X size={24} />
                        </button>

                        {/* Left Side - Image */}
                        <div className="lg:w-1/2 relative h-64 lg:h-auto border-b-2 lg:border-b-0 lg:border-r-2 border-nordic-black">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover"
                                referrerPolicy="no-referrer"
                            />
                            <div className="absolute bottom-0 left-0 bg-nordic-black text-white px-6 py-3 text-xs font-bold uppercase tracking-[0.2em]">
                                {product.subcategory}
                            </div>
                        </div>

                        {/* Right Side - Details */}
                        <div className="lg:w-1/2 p-8 lg:p-16 overflow-y-auto">
                            <div className="mb-12">
                                <span className="text-terracotta text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">
                                    Product Details
                                </span>
                                <h2 className="text-4xl lg:text-6xl font-bold font-display uppercase tracking-tighter leading-none mb-6">
                                    {product.name}
                                </h2>
                                <div className="flex flex-wrap gap-3 mb-8">
                                    {product.isOrganic && (
                                        <span className="bg-sage text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest flex items-center">
                                            <ShieldCheck size={12} className="mr-1" /> Organic Certified
                                        </span>
                                    )}
                                    {product.isGlutenFree && (
                                        <span className="bg-terracotta text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest flex items-center">
                                            <ShieldCheck size={12} className="mr-1" /> Gluten-Free
                                        </span>
                                    )}
                                </div>
                                <p className="text-lg text-nordic-grey leading-relaxed">
                                    {product.description}
                                </p>
                            </div>

                            {/* Specs Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 border-t-2 border-nordic-black pt-12">
                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <div className="w-10 h-10 bg-nordic-black text-white flex items-center justify-center mr-4 shrink-0">
                                            <MapPin size={20} />
                                        </div>
                                        <div>
                                            <span className="block text-[10px] font-bold uppercase tracking-widest text-nordic-grey/60 mb-1">Origin</span>
                                            <span className="text-lg font-bold uppercase tracking-tight">{product.origin}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-10 h-10 bg-nordic-black text-white flex items-center justify-center mr-4 shrink-0">
                                            <Package size={20} />
                                        </div>
                                        <div>
                                            <span className="block text-[10px] font-bold uppercase tracking-widest text-nordic-grey/60 mb-1">Packaging</span>
                                            <span className="text-lg font-bold uppercase tracking-tight">{product.packaging}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <div className="w-10 h-10 bg-nordic-black text-white flex items-center justify-center mr-4 shrink-0">
                                            <Scale size={20} />
                                        </div>
                                        <div>
                                            <span className="block text-[10px] font-bold uppercase tracking-widest text-nordic-grey/60 mb-1">Delivery Unit</span>
                                            <span className="text-lg font-bold uppercase tracking-tight">{product.deliveryUnit}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-10 h-10 bg-nordic-black text-white flex items-center justify-center mr-4 shrink-0">
                                            <ShieldCheck size={20} />
                                        </div>
                                        <div>
                                            <span className="block text-[10px] font-bold uppercase tracking-widest text-nordic-grey/60 mb-1">Type</span>
                                            <span className="text-lg font-bold uppercase tracking-tight">{product.type}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href={`/contact?product=${encodeURIComponent(product.name)}`}
                                    className="flex-1 bg-nordic-black text-white py-5 px-8 text-xs font-bold uppercase tracking-[0.2em] text-center hover:bg-terracotta transition-colors flex items-center justify-center group"
                                >
                                    Request Supply <ArrowRight size={16} className="ml-3 transition-transform group-hover:translate-x-1" />
                                </a>
                                <button
                                    onClick={onClose}
                                    className="flex-1 border-2 border-nordic-black py-5 px-8 text-xs font-bold uppercase tracking-[0.2em] text-center hover:bg-nordic-black hover:text-white transition-all"
                                >
                                    Back to Showcase
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body
    );
};
