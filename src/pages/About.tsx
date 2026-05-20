import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Package, ShieldCheck, Target, Heart, ArrowRight, Lock, FileCheck, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSEO } from '@/lib/useSEO';
import { PageTransition } from '@/components/PageTransition';


export const About = () => {
  useSEO({
    title: 'About IndoEuro Core Oy – Global Sourcing from Finland',
    description: 'Based in Finland , Finland, IndoEuro Core Oy connects businesses with trusted global suppliers. Discover our story, values, sourcing process & reliability standards.',
    keywords: 'about IndoEuro Core Oy, global sourcing company Finland, Finland  sourcing partner, industrial supply chain company',
  });

  const stats = [
    {
      value: '120+',
      label: 'Vetted Factories',
      icon: Globe
    },
    {
      value: '100%',
      label: 'ISO 9001 Audited',
      icon: ShieldCheck
    },
    {
      value: '12,500T',
      label: 'Annual Tonnage',
      icon: Package
    }
  ];

  const values = [
    {
      title: 'Integrity',
      desc: 'Built on trust, transparency, and consistent quality at every layer of the procurement pipeline.',
      icon: ShieldCheck
    },
    {
      title: 'Sustainability',
      desc: 'Committed to responsible sourcing, environmental ethics, and eco-friendly trans-European logistics.',
      icon: Heart
    },
    {
      title: 'Precision',
      desc: 'Delivering micro-level accuracy, detailed material test reports, and excellence in every manufacturing execution.',
      icon: Target
    },
  ];

  const steps = [
    { title: 'Requirement Analysis', desc: 'You share your exact engineering specifications, drawings, or targeted delivery requirements.' },
    { title: 'Global Sourcing', desc: 'We tap into our vetted manufacturing networks to discover the ideal supplier match.' },
    { title: 'Quality Verification', desc: 'Every dispatch undergoes strict quality checks, compliance vetting, and certificate verification.' },
    { title: 'Worldwide Delivery', desc: 'Secure custom clearance, centralized warehousing in Finland, and seamless DDP shipping directly to your docks.' },
  ];

  // Framer Motion Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 15 } }
  };

  // Structured Technical B2B Organization Schema (JSON-LD)
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "IndoEuro Core Oy",
    "description": "Headquartered in Finland , Finland, IndoEuro Core Oy is an enterprise B2B global sourcing and integration partner connecting manufacturers with trusted worldwide suppliers.",
    "url": "https://indoeuro.co",
    "logo": "https://indoeuro.co/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Mannerheimintie 12",
      "addressLocality": "Finland ",
      "postalCode": "00100",
      "addressCountry": "FI"
    },
    "knowsAbout": [
      "B2B Global Procurement",
      "Industrial Fastener Sourcing",
      "Custom CNC Component Fabrication",
      "RoHS Compliant Electronic Sourcing",
      "Bulk Organic Provisions",
      "Enterprise System Integrations"
    ]
  };

  return (
    <PageTransition>
      <div className="pt-24 pb-24 bg-cream grainy-bg min-h-screen">
      {/* Inject Structured B2B Organization Schema */}
      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Hero Section */}
        <header className="mb-24 text-center max-w-4xl mx-auto">
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
            Our Identity
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight text-nordic-black"
          >
            The Bridge Between <span className="text-terracotta">Global Sourcing & Direct Delivery.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-nordic-grey leading-relaxed"
          >
            Based in Finland, IndoEuro Core Oy serves as a strategic global sourcing and enterprise solutions partner for modern industries. Through a network of verified international suppliers and operational partners, we deliver reliable procurement, technical precision, regulatory compliance, and consistent execution tailored to European business standards.          </motion.p>
        </header>

        {/* Story & Stats Section */}
        <section className="mb-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative z-10 rounded-[3rem] overflow-hidden border border-beige/60 shadow-sm aspect-[4/5] lg:aspect-[4/3.5] max-h-[500px]">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200"
                  alt="IndoEuro Core Oy Finland  procurement team and supplier collaboration room"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="absolute -top-6 -right-6 p-6 bg-white border border-beige/60 rounded-3xl shadow-md hidden md:block z-20 text-center"
              >
                <div className="text-3xl font-extrabold text-terracotta mb-1">100%</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-nordic-grey">Reliability Rate</div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-terracotta mb-4 block">Built on Trust</span>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-nordic-black leading-tight">Vetted Global Operations. Managed Locally.</h2>
              <p className="text-nordic-grey mb-6 leading-relaxed">
                IndoEuro Core Oy was established to address a persistent supply chain vulnerability — connecting specialized European assembly demands with highly reliable and fully-audited global fabrications.
              </p>
              <p className="text-nordic-grey mb-10 leading-relaxed">
                With centralized project administration in Finland and an expansive international database of suppliers, we simplify logistics, quality oversight, and duty-paid delivery setups so you can procure components with complete confidence.
              </p>

              {/* Populated Stats Grid with Visibility & High Contrast */}
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center p-5 rounded-2xl bg-white border border-beige/60 shadow-sm hover:shadow-md transition-all duration-300 group">
                    <stat.icon size={20} className="mx-auto mb-3 text-terracotta group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-xl lg:text-2xl font-extrabold text-nordic-black mb-1">{stat.value}</div>
                    <div className="text-[9px] lg:text-[10px] font-bold uppercase tracking-widest text-nordic-grey leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Corporate Credentials Panel */}
        <section className="mb-24">
          <div className="bg-white rounded-[2.5rem] border border-beige/60 p-8 lg:p-12 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none" style={{ background: "radial-gradient(circle, rgba(197, 102, 79, 0.05) 0%, rgba(197, 102, 79, 0) 70%)", willChange: "transform" }} />
            <div className="flex-1 z-10">
              <span className="text-terracotta text-xs font-bold uppercase tracking-widest mb-2 block">Institutional Integrity</span>
              <h3 className="text-2xl font-bold text-nordic-black mb-4">Official Finnish Trade Registration</h3>
              <p className="text-nordic-grey text-sm max-w-2xl leading-relaxed">
IndoEuro Core Oy is a legally registered Finnish limited liability company (Osakeyhtiö), operating in full alignment with European commercial standards and trade regulations. We deliver transparent, secure, and reliable business operations tailored for long-term enterprise partnerships across Europe.              </p>
            </div>
            <div className="w-full md:w-auto shrink-0 grid grid-cols-2 gap-4 bg-cream/50 p-6 rounded-2xl border border-beige/40 z-10">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-nordic-grey">Registered Name</div>
                <div className="text-sm font-bold text-nordic-black">IndoEuro Core Oy</div>
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-nordic-grey">Finnish Business ID</div>
                <div className="text-sm font-bold text-nordic-black">3620039-7</div>
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-nordic-grey">Tax Registration</div>
                <div className="text-sm font-bold text-nordic-black">EU VAT Compliant</div>
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-nordic-grey">
                  Partnership Focus
                </div>
                <div className="text-sm font-bold text-nordic-black">
                  Strategic EU Partnerships
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security & Global Compliance Bento Grid */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <span className="text-terracotta text-xs font-bold uppercase tracking-widest mb-3 block">Enterprise Assurance</span>
            <h2 className="text-3xl font-bold">Security & Global Compliance Framework</h2>
            <p className="text-nordic-grey max-w-xl mx-auto text-sm leading-relaxed mt-3">
              We eliminate procurement risks by backing every contract with multi-tier digital and quality assurance protocols.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Lock,
                title: 'Encrypted CAD Vaults',
                desc: 'All engineering drawings (.step, .dwg, .pdf) are transferred over TLS 1.3 encrypted lines and kept in sandboxed vaults protected by strict B2B non-disclosure agreements.'
              },
              {
                icon: ShieldCheck,
                title: '37-Point On-Site Audits',
                desc: 'Our sourcing team executes comprehensive on-site factory evaluations covering production capacities, machine calibration logs, raw material origin tracking, and labor compliance.'
              },
              {
                icon: FileCheck,
                title: 'Material Spectrometry',
                desc: 'Every mechanical and electrical batch undergoes alloy spectrometry and coordinate measuring machine (CMM) testing, supplied with EN 10204 3.1 Material Certificates.'
              },
              {
                icon: Award,
                title: 'Incoterms DDP Logistics',
                desc: 'Absolute risk transfer. We manage all transit logistics, custom clearance, tariffs, and duty payments, handing over shipments directly at your designated assembly center.'
              }
            ].map((framework, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-nordic-black text-white rounded-3xl border border-white/5 soft-shadow hover:border-terracotta/30 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-terracotta mb-6 group-hover:scale-105 transition-transform duration-300">
                  <framework.icon size={24} />
                </div>
                <h4 className="text-lg font-bold mb-3">{framework.title}</h4>
                <p className="text-xs text-white/70 leading-relaxed">{framework.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* The Sourcing Journey - Modernized Dark Layout */}
        <section className="mb-24 bg-nordic-black text-white rounded-[2.5rem] p-12 lg:p-20 relative overflow-hidden soft-shadow">
          <div className="absolute top-0 right-0 w-96 h-96 pointer-events-none" style={{ background: "radial-gradient(circle, rgba(197, 102, 79, 0.05) 0%, rgba(197, 102, 79, 0) 70%)", willChange: "transform" }} />
          
          <div className="text-center mb-16 relative z-10">
            <span className="text-terracotta text-xs font-bold uppercase tracking-widest mb-3 block">Our Methodology</span>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">The Sourcing Journey</h2>
            <p className="text-white/60 max-w-xl mx-auto text-sm leading-relaxed">
              From requirement analysis to localized final dispatch, we maintain a secure, audited pathway for all bulk and bespoke orders.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12 }}
                viewport={{ once: true }}
                className="relative p-6 bg-white/5 border border-white/10 rounded-3xl hover:border-terracotta/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-terracotta text-white flex items-center justify-center mb-6 text-lg font-bold shadow-sm group-hover:scale-105 transition-transform duration-300">
                  {i + 1}
                </div>
                <h4 className="text-lg font-bold mb-3 group-hover:text-terracotta transition-colors">{step.title}</h4>
                <p className="text-xs text-white/50 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <span className="text-terracotta text-xs font-bold uppercase tracking-widest mb-3 block">Corporate Anchors</span>
            <h2 className="text-3xl font-bold text-nordic-black">Our Core Commitments</h2>
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid lg:grid-cols-3 gap-8"
          >
            {values.map((value, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="p-10 bg-white rounded-[2.5rem] shadow-sm border border-beige/60 hover:border-terracotta/40 hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-2xl bg-sage/10 flex items-center justify-center text-sage mb-8 group-hover:bg-terracotta group-hover:text-white group-hover:rotate-6 group-hover:scale-110 transition-all duration-300">
                  <value.icon size={26} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-nordic-black group-hover:text-terracotta transition-colors duration-300">{value.title}</h3>
                <p className="text-sm text-nordic-grey leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* CTA Section */}
        <section>
          <div className="max-w-5xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 60, damping: 15 }}
              whileHover={{ y: -5 }}
              className="p-12 lg:p-20 bg-white rounded-[3.5rem] border border-beige/60 shadow-sm relative overflow-hidden group transition-all duration-500 cursor-pointer"
            >
              {/* Pulsing Ambient Background Orbs */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.15, 1], 
                  opacity: [0.3, 0.5, 0.3] 
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                style={{
                  background: 'radial-gradient(circle, rgba(217, 119, 87, 0.25) 0%, rgba(217, 119, 87, 0) 70%)',
                  willChange: 'transform, opacity',
                }}
                className="absolute -top-20 -right-20 w-80 h-80 rounded-full pointer-events-none" 
              />
              <motion.div 
                animate={{ 
                  scale: [1, 1.2, 1], 
                  opacity: [0.2, 0.4, 0.2] 
                }}
                transition={{ 
                  duration: 10, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 2
                }}
                style={{
                  background: 'radial-gradient(circle, rgba(156, 175, 136, 0.25) 0%, rgba(156, 175, 136, 0) 70%)',
                  willChange: 'transform, opacity',
                }}
                className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full pointer-events-none" 
              />
              
              <div className="relative z-10 max-w-2xl mx-auto">
                <span className="text-terracotta text-xs font-bold uppercase tracking-widest mb-4 block">Secure Supply Lines</span>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-nordic-black">Ready to Source Globally?</h2>
                <p className="text-sm text-nordic-grey mb-8 leading-relaxed">
                  No configuration is too specific, and no quantity is too large. Harness our vetted network to procure precision assemblies with clear lead times and absolute supply continuity.
                </p>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-block"
                >
                  <Link 
                    to="/contact"
                    className="px-10 py-5 bg-terracotta text-white font-bold rounded-full hover:bg-terracotta/90 transition-all inline-flex items-center justify-center soft-shadow group"
                  >
                    Request Procurement Quote <ArrowRight size={18} className="ml-3 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

      </div>
    </div>
    </PageTransition>
  );
};
