import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ShieldCheck, Truck, Settings, Users, Filter, MapPin, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageTransition } from '@/components/PageTransition';
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

  // 3D Parallax Tracking States
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x, y });
  };

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
    <PageTransition>
      <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] py-16 lg:py-0 flex items-center overflow-hidden grainy-bg z-10">
        
        {/* Dynamic Aurora Ambient Glows */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <motion.div
            animate={{
              x: [0, 40, -20, 0],
              y: [0, -30, 20, 0],
              scale: [1, 1.15, 0.9, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              background: 'radial-gradient(circle, rgba(156, 175, 136, 0.2) 0%, rgba(156, 175, 136, 0) 70%)',
              willChange: 'transform',
            }}
            className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full"
          />
          <motion.div
            animate={{
              x: [0, -30, 30, 0],
              y: [0, 40, -20, 0],
              scale: [1, 1.2, 0.95, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            style={{
              background: 'radial-gradient(circle, rgba(217, 119, 87, 0.1) 0%, rgba(217, 119, 87, 0) 70%)',
              willChange: 'transform',
            }}
            className="absolute top-10 -right-20 w-[600px] h-[600px] rounded-full"
          />
          <motion.div
            animate={{
              x: [0, 20, -30, 0],
              y: [0, 30, -30, 0],
              scale: [0.9, 1.1, 0.85, 0.9],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4,
            }}
            style={{
              background: 'radial-gradient(circle, rgba(223, 216, 206, 0.5) 0%, rgba(223, 216, 206, 0) 70%)',
              willChange: 'transform',
            }}
            className="absolute top-1/2 left-1/3 w-96 h-96 rounded-full"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10"
          >
            {/* Pulsing Active Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-beige/60 text-nordic-grey text-[10px] font-bold uppercase tracking-widest rounded-full mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-800 hover:bg-emerald-700 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600 hover:bg-emerald-900"></span>
              </span>
              Finland-Based / European B2B Enterprise Solutions
            </span>

            {/* Premium Split-Text Reveal H1 */}
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.15] mb-6 text-nordic-black tracking-tight flex flex-col gap-1">
              <span className="block overflow-hidden h-fit relative py-0.5">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ type: "spring", stiffness: 120, damping: 15, delay: 0.1 }}
                  className="block"
                >
                  European Supply & Growth
                </motion.span>
              </span>
              <span className="block overflow-hidden h-fit relative py-0.5 text-terracotta">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ type: "spring", stiffness: 120, damping: 15, delay: 0.25 }}
                  className="block"
                >
                  Solutions for
                </motion.span>
              </span>
              <span className="block overflow-hidden h-fit relative py-0.5 text-terracotta">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ type: "spring", stiffness: 120, damping: 15, delay: 0.4 }}
                  className="block"
                >
                  Modern Businesses.
                </motion.span>
              </span>
            </h1>

            <p className="text-base lg:text-lg text-nordic-grey mb-8 max-w-lg leading-relaxed">
Helping European SMEs and enterprise teams streamline procurement, strengthen digital infrastructure, and scale operations through reliable sourcing, precision execution, and Nordic-standard business practices.
            </p>

<div className="flex items-center gap-4 flex-nowrap">
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.98 }}
    transition={{ type: "spring", stiffness: 400, damping: 15 }}
  >
    <Link
      to="/contact"
      className="px-6 py-3 lg:px-8 lg:py-4 bg-terracotta text-white font-bold rounded-full hover:bg-terracotta/90 transition-all soft-shadow flex items-center group/btn whitespace-nowrap"
    >
      Book Consultation
      <ArrowRight
        size={18}
        className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300"
      />
    </Link>
  </motion.div>

  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.98 }}
    transition={{ type: "spring", stiffness: 400, damping: 15 }}
  >

  </motion.div>
</div>
          </motion.div>

          {/* Interactive 3D Parallax Photo Wrapper */}
          <div
            className="relative hidden lg:block perspective-1000 z-10 w-full"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
              setIsHovered(false);
              setMousePosition({ x: 0, y: 0 });
            }}
          >
            <motion.div
              animate={{
                rotateX: isHovered ? mousePosition.y * -20 : 0,
                rotateY: isHovered ? mousePosition.x * 20 : 0,
              }}
              transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.5 }}
              className="relative w-full aspect-square"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Solid Offset Background Plate */}
<div className="absolute -bottom-6 -left-6 w-full h-full bg-[#d8d0c4]/80 rounded-3xl -z-10" />
              {/* Main Photo Container */}
              <div 
                className="w-full h-full rounded-3xl overflow-hidden shadow-xl border border-beige/40"
                style={{ transform: "translateZ(10px)", transformStyle: "preserve-3d" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"
                  alt="Global trade and precision engineering headquarters"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>

         
              {/* Floating Trust Badge B: Bottom-Right Compliance ring */}
              <div
                className="absolute -bottom-4 -right-8 z-20 pointer-events-none"
                style={{ transform: "translateZ(45px)", transformStyle: "preserve-3d" }}
              >
                <motion.div
                  animate={{
                    y: [0, 8, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  style={{ willChange: "transform" }}
                  className="bg-white/80 backdrop-blur-md border border-beige/60 shadow-lg rounded-2xl p-4 flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-sage/10 flex items-center justify-center text-sage">
                    <ShieldCheck size={20} />
                  </div>
                   <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-nordic-grey">SLA Response</div>
                    <div className="text-xs font-extrabold text-nordic-black">24h Direct Line</div>
                  </div>
                </motion.div>
              </div>

              <div
                className="absolute top-1/3 -right-12 z-20 pointer-events-none"
                style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}
              >
                <motion.div
                  animate={{
                    y: [0, -6, 0],
                  }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  style={{ willChange: "transform" }}
                  className="bg-white/80 backdrop-blur-md border border-beige/60 shadow-lg rounded-2xl p-4 flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-terracotta/10 flex items-center justify-center text-terracotta">
                    <Compass size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-nordic-grey">GLOBAL SOURCING</div>
                    <div className="text-xs font-extrabold text-nordic-black">European Standards</div>
                  </div>
                </motion.div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar Section */}
      <section className="py-8 bg-nordic-black text-white border-y border-white/10 relative z-20 overflow-hidden flex">
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          style={{ willChange: "transform" }}
          className="flex flex-nowrap items-center gap-16 px-8 w-fit"
        >
          {[
            { label: 'Finland-Based', sub: 'European-focused operations' },
            { label: 'Reliable Partnership', sub: 'Procurement expertise' },
            { label: 'Fast Response', sub: '24h response time' },
            { label: 'Business-Driven', sub: 'Growth-focused systems' },
            { label: 'Finland-Based', sub: 'European-focused operations' },
            { label: 'Reliable Partnership', sub: 'Procurement expertise' },
            { label: 'Fast Response', sub: '24h response time' },
            { label: 'Business-Driven', sub: 'Growth-focused systems' },
            { label: 'Finland-Based', sub: 'European-focused operations' },
            { label: 'Reliable Partnership', sub: 'Procurement expertise' },
            { label: 'Fast Response', sub: '24h response time' },
            { label: 'Business-Driven', sub: 'Growth-focused systems' },
            { label: 'Finland-Based', sub: 'European-focused operations' },
            { label: 'Reliable Partnership', sub: 'Procurement expertise' },
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
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <span className="text-terracotta text-xs font-bold uppercase tracking-widest mb-4 block">Core Operations & Strategic Growth</span>
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">Industrial Supply & Digital Solutions</h2>
            <p className="text-nordic-grey max-w-3xl text-lg">
              Reliable, operational procurement and authority-driven B2B growth systems tailored for European enterprises.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Electronic',
                path: '/electronics',
                img: 'https://res.cloudinary.com/dyelfz2ku/image/upload/v1779353898/ele_tksfks.webp',
                desc: 'PCB Components, Sensors & Relays, and advanced power systems for reliable operations.',
                linkText: 'View Specifications'
              },
              {
                title: 'Mechanical',
                path: '/mechanical',
                img: 'https://res.cloudinary.com/dyelfz2ku/image/upload/v1779353896/mexhpag_zy91lf.webp',
                desc: 'CNC Machined Components, Industrial Fasteners, Bearings & Couplings, and Stainless Steel Components.',
                linkText: 'View Specifications'
              },
              {
                title: 'Food Materials',
                path: '/food',
                img: 'https://res.cloudinary.com/dyelfz2ku/image/upload/v1779353897/foo_eudgxi.webp',
                desc: 'Compliant food-grade materials and premium ingredients sourced with strict quality control.',
                linkText: 'View Specifications'
              },
              {
                title: 'Digital',
                path: '/digital',
                img: 'https://res.cloudinary.com/dyelfz2ku/image/upload/v1779353896/photo-collage.pn_pabzng.webp',
                desc: 'Comprehensive business growth systems, LinkedIn authority strategies, founder branding, and robust lead-generation infrastructure.',
                linkText: 'Explore Growth Systems'
              }
            ].map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative h-[450px] rounded-3xl overflow-hidden soft-shadow flex flex-col justify-end"
              >
                <img
                  src={cat.img}
                  alt={cat.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nordic-black/90 via-nordic-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 z-10 flex flex-col h-[55%] justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{cat.title}</h3>
                    <p className="text-white/80 text-xs leading-relaxed line-clamp-3">{cat.desc}</p>
                  </div>
                  <Link
                    to={cat.path}
                    className="inline-flex items-center text-white text-xs font-bold uppercase tracking-widest hover:text-terracotta transition-colors mt-auto"
                  >
                    {cat.linkText} <ArrowRight size={14} className="ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
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
                Operating from Finland, we bring Nordic professionalism, transparency, and operational efficiency to B2B procurement across Europe. We build long-term partnership rooted in trust and rigorous European business standards.
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
                  { step: '03', title: 'Built to Your Requirements', desc: 'Ensuring all components meet your industry standards.' },
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
              <div className="absolute -top-10 -right-10 w-48 h-48 -z-10 pointer-events-none" style={{ background: "radial-gradient(circle, rgba(197, 102, 79, 0.2) 0%, rgba(197, 102, 79, 0) 70%)", willChange: "transform" }} />
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
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
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
              },
              {
                title: 'Semiconductor Supply Continuity',
                problem: 'Critical production halts due to global microchip shortages and untrustworthy secondary market electronics.',
                solution: 'Leveraged vetted OEM supplier networks to secure traceable, RoHS-compliant microcontrollers with strict escrow QA testing.',
                outcome: 'Eliminated line-down events for 18 months while reducing spot-market premium costs by 45%.'
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
              { icon: Users, title: 'Long-Term Partnership', desc: 'Built on trust and mutual growth.' },
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
    </PageTransition>
  );
};
