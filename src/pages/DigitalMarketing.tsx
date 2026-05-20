import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Database, UserCheck, Lock, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SOURCING_EXAMPLES } from '@/constants';
import { ProductCard } from '@/components/ProductCard';
import { useSEO } from '@/lib/useSEO';
import { PageTransition } from '@/components/PageTransition';


export const DigitalMarketing = () => {
  useSEO({
    title: 'Industrial Digital Sourcing & Enterprise Web Solutions | IndoEuro Core Oy',
    description: 'Scale your B2B enterprise with custom web systems, industrial lead generation, CRM pipelines, and digital expansion strategies in Europe.',
    keywords: 'industrial digital sourcing, B2B lead generation, manufacturer web development, industrial CRM integrations, Europe B2B growth agency',
  });

  const digital = SOURCING_EXAMPLES.filter(p => p.category === 'digital');

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
    "name": "Industrial Digital Sourcing & Enterprise Web Integration",
    "description": "Enterprise-grade web systems, bespoke B2B portals, custom industrial CRM integrations, and data-driven B2B lead generation platforms for European manufacturing supply lines.",
    "provider": {
      "@type": "Organization",
      "name": "IndoEuro Core Oy",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Mannerheimintie 12",
        "addressLocality": "Finland ",
        "postalCode": "00100",
        "addressCountry": "FI"
      }
    },
    "areaServed": "Europe",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Integration Services Catalog",
      "itemListElement": digital.map((item) => ({
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
    <PageTransition>
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
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-600 hover:bg-emerald-700 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600 hover:bg-emerald-700"></span>
            </span>
            Global Digital Integration
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight text-nordic-black"
          >
            Industrial Digital <span className="text-terracotta">Sourcing & Systems.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-nordic-grey leading-relaxed"
          >
            Connecting industrial suppliers and manufacturers with high-performance digital ecosystems, robust ERP/CRM database pipelines, and strategic European enterprise expansion.
          </motion.p>
        </header>

        {/* Custom Sourcing Section (Web, CRM, Portals Focus) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-24"
        >
          <div className="bg-white rounded-[2.5rem] border border-beige shadow-sm overflow-hidden grid lg:grid-cols-2 items-center gap-0">
            <div className="p-10 lg:p-16 relative">
              <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none" style={{ background: "radial-gradient(circle, rgba(197, 102, 79, 0.05) 0%, rgba(197, 102, 79, 0) 70%)", willChange: "transform" }} />
              
              <span className="text-xs font-bold uppercase tracking-widest text-terracotta mb-4 block">Bespoke Enterprise Systems</span>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-nordic-black">Enterprise Architecture. Made Seamless.</h2>
              <p className="text-nordic-grey mb-8 leading-relaxed">
                We design and integrate custom digital environments that bridge the gap between technical manufacturers and modern global buyers. From highly optimized web front-ends to synchronized back-end CRM pipelines, we build high-converting B2B channels.
              </p>
              
              <ul className="grid grid-cols-2 gap-4 mb-8">
                {[
                  'B2B Portal Development',
                  'HubSpot & Salesforce Sync',
                  'High-Performance React/Next.js',
                  'ISO Data Vetting Pipelines',
                  'GDPR-Compliant Portals',
                  'Real-Time Analytics Integration'
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
                Inquire About Systems <ArrowRight size={18} className="ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="h-full min-h-[430px] relative">
              <img
                src="digital!.png"
                alt="Industrial CRM dashboards and high-performance digital marketing systems"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </motion.div>

        {/* Bento Technical Validation Grid */}
        <div className="mb-24">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-terracotta text-xs font-bold uppercase tracking-widest mb-3 block">Digital Operations</span>
            <h3 className="text-3xl font-bold">Rigorous Sourcing Safeguards</h3>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Database, title: 'CRM & ERP Alignment', desc: 'Seamless synchronization with Salesforce, HubSpot, SAP, and custom industrial product databases.' },
              { icon: UserCheck, title: 'Lead Verification Audits', desc: 'Thorough data and identity vetting to filter low-intent inquiries and supply highly-qualified B2B leads.' },
              { icon: Lock, title: 'GDPR & Enterprise Security', desc: 'Multi-layer access controls, secure encryption, GDPR compliance, and shielded client database portals.' },
              { icon: BarChart3, title: 'Performance Analytics', desc: 'Live monitoring, clear KPI dashboards, and conversion tracking showing exact pipeline performance.' }
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
              <span className="text-terracotta text-xs font-bold uppercase tracking-widest mb-3 block">Integration Portfolio</span>
              <h3 className="text-3xl font-bold">Standard Sourced Categories</h3>
            </div>
            <p className="text-nordic-grey max-w-sm text-sm hidden md:block">
              Examples of enterprise digital capabilities and web solutions set up for European market operations.
            </p>
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {digital.map((product) => (
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
