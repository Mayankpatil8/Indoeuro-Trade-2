import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, ShieldCheck, Zap, Layers, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageTransition } from '@/components/PageTransition';
import { SOURCING_EXAMPLES } from '@/constants';
import { ProductCard } from '@/components/ProductCard';
import { useSEO } from '@/lib/useSEO';

export const Electronics = () => {
  useSEO({
    title: 'Electronic Component Sourcing & PCB Procurement | IndoEuro Core Oy',
    description: 'Source enterprise-grade microcontrollers, active sensors, and RF modules globally. Fully vetted, RoHS compliant component sourcing with strict QA by IndoEuro Core Oy.',
    keywords: 'electronic component sourcing, industrial microcontrollers, semiconductor procurement, custom PCB supply, sensors, electronic parts Finland, Europe B2B electronic logistics',
  });

  const electronics = SOURCING_EXAMPLES.filter(p => p.category === 'electronics');

  // Framer Motion Stagger Containers
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 15 } }
  };

  return (
    <PageTransition>
      <div className="pt-24 pb-24 bg-cream grainy-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header Section */}
        <header className="mb-20 text-center max-w-4xl mx-auto">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-5 py-2 bg-white text-nordic-black text-xs font-bold uppercase tracking-[0.15em] rounded-full mb-6 shadow-sm border border-beige"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-600 hover:bg-emerald-700 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600 hover:bg-emerald-700"></span>
            </span>
            Enterprise Semiconductor Supply
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight text-nordic-black"
          >
            Global Electronic <span className="text-terracotta">Sourcing Solutions.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-nordic-grey leading-relaxed"
          >
            From specialized microcontrollers and precision sensors to complex RF components, we secure, vet, and deliver high-performance semiconductor components for European manufacturers.
          </motion.p>
        </header>

        {/* Global Sourcing Hub Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-24"
        >
          <div className="bg-white rounded-[2.5rem] p-10 lg:p-16 border border-beige shadow-sm flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 pointer-events-none" style={{ background: "radial-gradient(circle, rgba(197, 102, 79, 0.05) 0%, rgba(197, 102, 79, 0) 70%)", willChange: "transform" }} />
            
            <div className="flex-1 z-10">
              <span className="text-xs font-bold uppercase tracking-widest text-terracotta mb-4 block">Custom Component Inquiry</span>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-nordic-black">Need a Hard-to-Find Component?</h2>
              <p className="text-nordic-grey mb-8 leading-relaxed">
                Utilize our comprehensive supplier relationships. Share your exact manufacturer part numbers (MPNs), technical schematics, or target volumes, and our sourcing team in Finland will coordinate full validation, quality inspections, and DDP shipping to your assembly facilities.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-terracotta text-white font-bold rounded-full hover:bg-terracotta/90 transition-all soft-shadow group"
              >
                Submit Sourcing Request <ArrowRight size={18} className="ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="w-full lg:w-2/5 aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden soft-shadow relative z-10 border border-beige/40">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
                alt="High-precision electronic components and circuit boards"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </motion.div>

        {/* Quality Standards Bento Grid */}
        <div className="mb-24">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-terracotta text-xs font-bold uppercase tracking-widest mb-3 block">Compliance & Vetting</span>
            <h3 className="text-3xl font-bold">Standard Sourcing Safeguards</h3>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: ShieldCheck, title: 'Full Traceability', desc: 'Secure original factory documentation, including Certificates of Conformance (CoC).' },
              { icon: Zap, title: 'RoHS & CE Verification', desc: 'Strict compliance with European safety regulations and heavy-metal environmental standards.' },
              { icon: Layers, title: 'ESD Protective Packaging', desc: 'Components packed and handled under rigorous electrostatic discharge safety specifications.' },
              { icon: Cpu, title: 'Lifespan Monitoring', desc: 'Continuous updates on component lifecycle status, active production, or impending EOL phases.' }
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

        {/* Product Showcase */}
        <div>
          <div className="mb-12 flex items-end justify-between border-b border-beige pb-6">
            <div>
              <span className="text-terracotta text-xs font-bold uppercase tracking-widest mb-3 block">Active Catalog</span>
              <h3 className="text-3xl font-bold">Vetted Semiconductor Categories</h3>
            </div>
            <p className="text-nordic-grey max-w-sm text-sm hidden md:block">
              Indicative listing of components regularly sourced, packaged, and distributed under our global supply agreements.
            </p>
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {electronics.map((product) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
      </div>
    </PageTransition>
  );
};
