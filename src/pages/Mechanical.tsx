import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Settings, ShieldCheck, Compass, Anchor } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SOURCING_EXAMPLES } from '@/constants';
import { ProductCard } from '@/components/ProductCard';
import { useSEO } from '@/lib/useSEO';

export const Mechanical = () => {
  useSEO({
    title: 'Precision Mechanical Sourcing & CNC Parts | IndoEuro Core Oy',
    description: 'Procure custom CNC components, industrial fasteners, bearings, and precision-engineered mechanical parts. DDP logistics and ISO compliant quality audits by IndoEuro Core Oy.',
    keywords: 'mechanical component sourcing, custom CNC parts procurement, industrial fasteners Europe, precision mechanical engineering Finland, B2B industrial component supply',
  });

  const mechanical = SOURCING_EXAMPLES.filter(p => p.category === 'mechanical');

  // Framer Motion Animation Variants
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

  // Structured Technical SEO Schema (JSON-LD)
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Bespoke Mechanical Sourcing & CNC Parts Procurement",
    "description": "Global supply, precision auditing, and direct delivery of industrial fasteners, custom CNC machined parts, and bearings to European assembly centers.",
    "provider": {
      "@type": "Organization",
      "name": "IndoEuro Core Oy",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Mannerheimintie 12",
        "addressLocality": "Helsinki",
        "postalCode": "00100",
        "addressCountry": "FI"
      }
    },
    "areaServed": "Europe",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Mechanical Components Catalog",
      "itemListElement": mechanical.map((item, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": item.name,
          "description": item.description
        }
      }))
    }
  };

  return (
    <div className="pt-24 pb-24 bg-cream grainy-bg min-h-screen">
      {/* Inject Structured Technical SEO Schema */}
      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header Section */}
        <header className="mb-20 text-center max-w-4xl mx-auto">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-5 py-2 bg-white text-nordic-black text-xs font-bold uppercase tracking-[0.15em] rounded-full mb-6 shadow-sm border border-beige"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-terracotta opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-terracotta"></span>
            </span>
            Precision Engineering Supply
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight text-nordic-black"
          >
            Industrial Mechanical <span className="text-terracotta">Sourcing Specialists.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-nordic-grey leading-relaxed"
          >
            From custom CNC machined parts and structural castings to heavy-duty actuators, we coordinate rigorous ISO audits, material certification checks, and secure supply lines for European assembly floors.
          </motion.p>
        </header>

        {/* Custom Sourcing Section (Bespoke / MPN Focus) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-24"
        >
          <div className="bg-white rounded-[2.5rem] border border-beige shadow-sm overflow-hidden grid lg:grid-cols-2 items-center gap-0">
            <div className="p-10 lg:p-16 relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-terracotta/5 rounded-full blur-3xl pointer-events-none" />
              
              <span className="text-xs font-bold uppercase tracking-widest text-terracotta mb-4 block">Bespoke Fabrication Sourcing</span>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-nordic-black">Any Part. To Any Tolerance.</h2>
              <p className="text-nordic-grey mb-8 leading-relaxed">
                We bridge the gap between complex engineering specs and reliable factory floor execution. Our deep network of vetted ISO-certified mechanical fabricators allows us to handle customized mechanical parts down to micron-level tolerances.
              </p>
              
              <ul className="grid grid-cols-2 gap-4 mb-8">
                {[
                  'Custom CNC Components',
                  'High-Tensile Fasteners',
                  'Industrial Actuators',
                  'ISO 9001:2015 Vetting',
                  'Material Test Reports (MTR)',
                  'Micro-Tolerance Machining'
                ].map(item => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-nordic-black font-semibold">
                    <CheckCircle2 size={16} className="text-sage shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              
              <Link
                to="/contact"
                className="px-8 py-4 bg-terracotta text-white font-bold rounded-full hover:bg-terracotta/90 transition-all flex items-center justify-center inline-flex soft-shadow group"
              >
                Request Technical Quote <ArrowRight size={18} className="ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="h-full min-h-[450px] relative">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200"
                alt="Precision mechanical engineering and custom CNC machined components"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </motion.div>

        {/* Technical Validation Bento Grid */}
        <div className="mb-24">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-terracotta text-xs font-bold uppercase tracking-widest mb-3 block">Industrial Auditing</span>
            <h3 className="text-3xl font-bold">Rigorous Quality Validation</h3>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: ShieldCheck, title: 'Dimensional Accuracy', desc: 'Pre-shipment verification using coordinate measuring machines (CMM) for strict tolerance matches.' },
              { icon: Settings, title: 'Material Certification', desc: 'Providing full Material Test Reports (MTR) and chemical analysis documentation for all casting/machined batches.' },
              { icon: Compass, title: 'Corrosion Prevention', desc: 'Secure anti-corrosion oils, heat-sealed barrier wrapping, and heavy-duty structural packaging for sea/air transport.' },
              { icon: Anchor, title: 'Global Port Logistics', desc: 'Centralized warehousing in Finland with ready dispatch setups, customs clearance, and DDP shipping configurations.' }
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

        {/* Component Showcase */}
        <div>
          <div className="mb-12 flex items-end justify-between border-b border-beige pb-6">
            <div>
              <span className="text-terracotta text-xs font-bold uppercase tracking-widest mb-3 block">Sourcing Portfolio</span>
              <h3 className="text-3xl font-bold">Standard Sourced Categories</h3>
            </div>
            <p className="text-nordic-grey max-w-sm text-sm hidden md:block">
              Examples of heavy-duty mechanical elements procured, analyzed, and regularly shipped for European assembly requirements.
            </p>
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {mechanical.map((product) => (
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
  );
};
