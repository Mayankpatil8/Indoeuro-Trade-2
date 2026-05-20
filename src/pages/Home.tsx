import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ShieldCheck, Truck, Settings, Users, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SOURCING_EXAMPLES } from '@/constants';
import { ProductCard } from '@/components/ProductCard';
import { FoodProductCard } from '@/components/FoodProductCard';
import { cn } from '@/lib/utils';
import { useSEO } from '@/lib/useSEO';

export const Home = () => {
  useSEO({
    title: 'European Supply & Growth Solutions | IndoEuro Core Oy',
    description: 'Helping European SMEs streamline procurement, strengthen digital presence, and scale with reliable execution. IndoEuro Core Oy - Finland-based B2B partner.',
    keywords: 'Industrial Supply Finland, European Procurement Solutions, Finland Business Solutions, Mechanical Components Europe, LinkedIn Optimization Europe, B2B Growth Systems',
    ogImage: 'https://indoeuro-trade-2.vercel.app/og-image.png',
  });
  const [activeFilter, setActiveFilter] = useState<'all' | 'conventional' | 'organic' | 'gluten-free'>('all');

  const foodProducts = SOURCING_EXAMPLES.filter(p => p.category === 'food');

  const filteredProducts = activeFilter === 'all'
    ? foodProducts
    : foodProducts.filter(p => p.type === activeFilter);

  const filterOptions: { label: string; value: 'all' | 'conventional' | 'organic' | 'gluten-free' }[] = [
    { label: 'All Products', value: 'all' },
    { label: 'Conventional', value: 'conventional' },
    { label: 'Organic', value: 'organic' },
    { label: 'Gluten-Free', value: 'gluten-free' },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] py-16 lg:py-0 flex items-center overflow-hidden grainy-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 bg-sage/10 text-sage text-xs font-bold uppercase tracking-widest rounded-full mb-4">
              Finland-Based • European B2B Enterprise Solutions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.15] mb-6 text-nordic-black tracking-tight">
              European Supply & Growth <span className="text-terracotta">Solutions for Modern Businesses.</span>
            </h1>
            <p className="text-base lg:text-lg text-nordic-grey mb-8 max-w-lg leading-relaxed">
              Helping European SMEs streamline procurement, strengthen digital presence, and scale with reliable execution. Operations backed by Nordic professionalism and transparency.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="px-6 py-3 lg:px-8 lg:py-4 bg-terracotta text-white font-bold rounded-full hover:bg-terracotta/90 transition-all soft-shadow flex items-center"
              >
                Book Consultation <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 lg:px-8 lg:py-4 bg-white text-nordic-black border border-beige font-bold rounded-full hover:bg-beige transition-all"
              >
                Request Free Audit
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden soft-shadow aspect-square">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"
                alt="Global trade and precision engineering headquarters"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                fetchPriority="high"
                decoding="async"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-beige rounded-3xl -z-10" />
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-sage/20 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </section>

      {/* Trust Bar Section */}
      <section className="py-8 bg-nordic-black text-white border-y border-white/10 relative z-20 overflow-hidden flex">
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          className="flex flex-nowrap items-center gap-16 px-8 w-fit"
        >
          {[
            { label: 'Finland-Based', sub: 'European-focused operations' },
            { label: 'Reliable Partnerships', sub: 'Procurement expertise' },
            { label: 'Fast Response', sub: '24h response time' },
            { label: 'Business-Driven', sub: 'Growth-focused systems' },
            { label: 'Finland-Based', sub: 'European-focused operations' },
            { label: 'Reliable Partnerships', sub: 'Procurement expertise' },
            { label: 'Fast Response', sub: '24h response time' },
            { label: 'Business-Driven', sub: 'Growth-focused systems' },
            { label: 'Finland-Based', sub: 'European-focused operations' },
            { label: 'Reliable Partnerships', sub: 'Procurement expertise' },
            { label: 'Fast Response', sub: '24h response time' },
            { label: 'Business-Driven', sub: 'Growth-focused systems' },
            { label: 'Finland-Based', sub: 'European-focused operations' },
            { label: 'Reliable Partnerships', sub: 'Procurement expertise' },
            { label: 'Fast Response', sub: '24h response time' },
            { label: 'Business-Driven', sub: 'Growth-focused systems' }
          ].map((stat, i) => (
            <div 
              key={i}
              className="flex flex-col shrink-0 text-center min-w-[280px]"
            >
              <span className="text-terracotta font-bold text-xl mb-1">{stat.label}</span>
              <span className="text-white/70 text-sm font-medium tracking-wide uppercase">{stat.sub}</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Service Sections */}
      <section className="py-24 bg-beige">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-20">
          <div className="mb-12">
            <span className="text-terracotta text-xs font-bold uppercase tracking-widest mb-4 block">Core Operations</span>
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">Industrial Supply Solutions</h2>
            <p className="text-nordic-grey max-w-2xl text-lg">
              Reliable, operational, and industrial-grade procurement for European enterprises.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Electronic Parts',
                path: '/electronics',
                img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
                desc: 'PCB Components, Sensors & Relays, and advanced power systems for reliable operations.'
              },
              {
                title: 'Mechanical Parts',
                path: '/mechanical',
                img: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=800',
                desc: 'CNC Machined Components, Industrial Fasteners, Bearings & Couplings, and Stainless Steel Components.'
              },
              {
                title: 'Food-Grade Materials',
                path: '/food',
                img: 'https://images.unsplash.com/photo-1600431521340-491eca880813?auto=format&fit=crop&q=80&w=800',
                desc: 'Compliant food-grade materials and premium ingredients sourced with strict quality control.'
              }
            ].map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative h-[450px] rounded-3xl overflow-hidden soft-shadow"
              >
                <img
                  src={cat.img}
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nordic-black/90 via-nordic-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{cat.title}</h3>
                  <p className="text-white/80 text-sm mb-6 leading-relaxed">{cat.desc}</p>
                  <Link
                    to={cat.path}
                    className="inline-flex items-center text-white text-xs font-bold uppercase tracking-widest hover:text-terracotta transition-colors"
                  >
                    View Specifications <ArrowRight size={14} className="ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <span className="text-terracotta text-xs font-bold uppercase tracking-widest mb-4 block">Strategic Growth</span>
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">Digital Growth Solutions</h2>
            <p className="text-nordic-grey max-w-2xl text-lg">
              Authority-driven digital infrastructure and lead-generation systems for B2B scale.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[400px] rounded-3xl overflow-hidden soft-shadow"
            >
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600"
                alt="Digital Marketing"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-nordic-black/90 via-nordic-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                <h3 className="text-3xl font-bold text-white mb-3">Digital Marketing</h3>
                <p className="text-white/80 text-lg mb-8 max-w-3xl leading-relaxed">
                  Comprehensive business growth systems, LinkedIn authority strategies, founder branding, and robust lead-generation infrastructure tailored for European enterprises.
                </p>
                <Link
                  to="/digital"
                  className="inline-flex items-center text-white text-sm font-bold uppercase tracking-widest hover:text-terracotta transition-colors"
                >
                  Explore Growth Systems <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Why Finland Section */}
      <section className="py-24 bg-cream grainy-bg overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="grid grid-cols-2 gap-6">
                <img
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600"
                  alt="Nordic professionalism and operational efficiency"
                  className="rounded-3xl soft-shadow aspect-square object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=600"
                  alt="European business standards and compliance"
                  className="rounded-3xl soft-shadow aspect-square object-cover mt-12"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <span className="text-terracotta text-xs font-bold uppercase tracking-widest mb-4 block">The Finland Advantage</span>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">Nordic Reliability,<br />European Excellence.</h2>
              <p className="text-lg text-nordic-grey mb-8 leading-relaxed">
                Operating from Finland, we bring Nordic professionalism, transparency, and operational efficiency to B2B procurement across Europe. We build long-term partnerships rooted in trust and rigorous European business standards.
              </p>
              <div className="space-y-6">
                {[
                  { icon: ShieldCheck, title: 'Operational Efficiency', desc: 'Streamlined procurement processes designed for fast and transparent execution.' },
                  { icon: Truck, title: 'European Business Standards', desc: 'Full compliance with stringent European quality, safety, and operational protocols.' },
                ].map((item, i) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                    key={i} 
                    className="flex items-start gap-5 p-6 lg:p-8 bg-nordic-black rounded-[2rem] soft-shadow border border-white/5"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-terracotta shrink-0">
                      <item.icon size={28} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2 text-lg">{item.title}</h4>
                      <p className="text-sm text-white/70 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-24 bg-beige border-y border-sand overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-terracotta text-xs font-bold uppercase tracking-widest mb-4 block">Our Process</span>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
                Enterprise Execution, <br />
                <span className="text-terracotta">Step by Step.</span>
              </h2>
              <p className="text-lg text-nordic-grey mb-10 leading-relaxed">
                Our structured approach ensures absolute reliability. From initial scoping to long-term coordination, we handle the complexities of B2B procurement and growth systems so you don't have to.
              </p>
              <div className="space-y-5">
                {[
                  { step: '01', title: 'Requirement Analysis', desc: 'Deep dive into your operational and technical specifications.' },
                  { step: '02', title: 'Supplier Verification', desc: 'Rigorous vetting of European and global manufacturing partners.' },
                  { step: '03', title: 'Quality & Compliance Check', desc: 'Ensuring all components meet strict industry standards.' },
                  { step: '04', title: 'Delivery Coordination', desc: 'Seamless logistics and transparent supply chain management.' },
                  { step: '05', title: 'Long-Term Partnership', desc: 'Ongoing support, continuous optimization, and strategic alignment.' },
                ].map((item, i) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    key={i} 
                    className="flex items-start gap-6 p-6 lg:p-8 bg-nordic-black rounded-3xl border border-white/5 hover:border-terracotta/50 transition-colors soft-shadow group"
                  >
                    <div className="text-terracotta font-bold text-2xl min-w-[40px] opacity-80 group-hover:opacity-100 transition-opacity">{item.step}</div>
                    <div>
                      <h4 className="font-bold text-white text-lg">{item.title}</h4>
                      <p className="text-sm text-white/70 mt-2 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative h-full hidden lg:block"
            >
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200"
                alt="Structured B2B enterprise operations"
                className="rounded-[2.5rem] soft-shadow h-full w-full object-cover min-h-[600px]"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-terracotta/20 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies / Scenarios */}
      <section className="py-24 bg-cream grainy-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-terracotta text-xs font-bold uppercase tracking-widest mb-4 block">Proven Execution</span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Industrial Sourcing Scenarios</h2>
            <p className="text-nordic-grey max-w-2xl mx-auto text-lg">
              How we resolve complex operational and procurement challenges for European industrial businesses.
            </p>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-10">
            {[
              {
                title: 'Component Procurement Optimization',
                problem: 'Inconsistent component quality and delayed shipments from fragmented global suppliers.',
                solution: 'Consolidated vendor network with centralized Quality Assurance testing from our Finland HQ.',
                outcome: '30% reduction in lead times, zero compliance failures, and stabilized production lines.'
              },
              {
                title: 'Precision Mechanical Parts Supply',
                problem: 'Difficulty securing a reliable supply chain for high-precision CNC mechanical fasteners.',
                solution: 'Vetted and partnered with top-tier industrial manufacturers meeting strict European ISO standards.',
                outcome: 'Established a continuous, high-volume supply chain with a 15% cost efficiency improvement.'
              }
            ].map((caseStudy, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                key={i} 
                className="p-10 lg:p-12 bg-nordic-black rounded-[2.5rem] soft-shadow border border-white/5 hover:border-terracotta/30 transition-colors group"
              >
                <h3 className="text-2xl lg:text-3xl font-bold mb-10 text-white">{caseStudy.title}</h3>
                <div className="space-y-8">
                  <div>
                    <span className="text-xs font-bold text-terracotta uppercase tracking-wider mb-3 block opacity-90 group-hover:opacity-100">Problem</span>
                    <p className="text-base text-white/70 leading-relaxed">{caseStudy.problem}</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-terracotta uppercase tracking-wider mb-3 block opacity-90 group-hover:opacity-100">Solution</span>
                    <p className="text-base text-white/70 leading-relaxed">{caseStudy.solution}</p>
                  </div>
                  <div className="pt-8 border-t border-white/10">
                    <span className="text-xs font-bold text-terracotta uppercase tracking-wider mb-3 block opacity-90 group-hover:opacity-100">Outcome</span>
                    <p className="text-lg font-bold text-white">{caseStudy.outcome}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Values Section */}
      <section className="py-24 bg-beige relative overflow-hidden border-t border-sand">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Our Core Values</h2>
            <p className="text-nordic-grey max-w-2xl mx-auto text-lg">
              The principles that drive our operations and ensure long-term business success.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
            {[
              { icon: ShieldCheck, title: 'Reliability', desc: 'Consistent, predictable execution.' },
              { icon: Filter, title: 'Transparency', desc: 'Clear communication at every stage.' },
              { icon: Settings, title: 'Operational Excellence', desc: 'Precision in every transaction.' },
              { icon: Truck, title: 'Fast Communication', desc: '24h response guarantee.' },
              { icon: Users, title: 'Long-Term Partnerships', desc: 'Built on trust and mutual growth.' },
            ].map((item, i) => (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
                key={i} 
                className="p-6 lg:p-8 bg-nordic-black rounded-[2rem] soft-shadow border border-white/5 hover:border-terracotta/50 transition-all duration-300 group flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-terracotta mb-6 group-hover:-translate-y-2 transition-transform duration-300">
                  <item.icon size={32} />
                </div>
                <h4 className="text-lg font-bold mb-3 text-white">{item.title}</h4>
                <p className="text-sm text-white/70 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
