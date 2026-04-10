import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SOURCING_EXAMPLES } from '@/constants';
import { ProductCard } from '@/components/ProductCard';

export const Mechanical = () => {
  const mechanical = SOURCING_EXAMPLES.filter(p => p.category === 'mechanical');

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <header className="mb-16 text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Mechanical Component Sourcing Worldwide</h1>
          <p className="text-lg text-nordic-grey leading-relaxed">
            From CNC-machined parts to high-performance industrial components, we source and deliver precision-engineered mechanical solutions globally. No matter the complexity, we ensure quality, accuracy, and reliability in every order.
          </p>
        </header>

        {/* Custom Sourcing Section */}
        <section className="mb-24 bg-nordic-black rounded-[2rem] overflow-hidden text-white soft-shadow">
          <div className="grid lg:grid-cols-2 items-center">
            <div className="p-12 lg:p-20">
              <span className="text-terracotta text-xs font-bold uppercase tracking-widest mb-4 block">Bespoke Sourcing</span>
              <h2 className="text-4xl font-bold mb-6">Any Part. Any Specification.</h2>
              <p className="text-white/70 mb-10 leading-relaxed">
                We go beyond catalogs. Our global network of trusted manufacturers enables us to source exact mechanical components tailored to your requirements. Simply tell us what you need — we’ll handle sourcing, verification, and delivery worldwide.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'Custom CNC Components',
                  'Precision Fasteners',
                  'Industrial Actuators',
                  'Aerospace-Grade Materials'
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <CheckCircle2 size={18} className="text-sage" /> {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="px-8 py-4 bg-terracotta text-white font-bold rounded-full hover:bg-terracotta/90 transition-all flex items-center inline-flex"
              >
                Request a Quote <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
            <div className="h-full min-h-[400px]">
              <img
                src="/mechanical-hero.png"
                alt="Mechanical Sourcing"
                className="w-full h-full object-cover opacity-90"
              />
            </div>
          </div>
        </section>

        {/* Sourcing Examples */}
        <div>
          <h3 className="text-3xl font-bold mb-12">Examples of what we source</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {mechanical.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
