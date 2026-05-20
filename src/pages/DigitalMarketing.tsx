import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Share2, Search, Code, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SOURCING_EXAMPLES } from '@/constants';
import { ProductCard } from '@/components/ProductCard';
import { useSEO } from '@/lib/useSEO';

export const DigitalMarketing = () => {
  useSEO({
    title: 'Digital Marketing & Web Development – IndoEuro Core Oy',
    description: 'Custom web development, SEO, social media management & UI/UX design services worldwide. Full-stack digital growth solutions from IndoEuro Core Oy.',
    keywords: 'digital marketing, web development, SEO services, social media management, UI UX design, digital growth, Finland digital agency',
  });

  const digital = SOURCING_EXAMPLES.filter(p => p.category === 'digital');

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <header className="mb-16 text-center max-w-3xl mx-auto">
          <span className="text-terracotta text-xs font-bold uppercase tracking-widest mb-4 block">Digital Excellence</span>
          <h1 className="text-5xl font-bold mb-6">Digital Solutions & Growth Services Worldwide</h1>
          <p className="text-lg text-nordic-grey leading-relaxed">
            From custom web applications to global digital marketing strategies, we deliver scalable, high-performance digital solutions that help your business grow and succeed worldwide.
          </p>
        </header>

        {/* Services Overview */}
        <section className="mb-24 bg-nordic-black rounded-[2rem] overflow-hidden text-white soft-shadow">
          <div className="grid lg:grid-cols-2 items-center">
            <div className="p-12 lg:p-20">
              <span className="text-terracotta text-xs font-bold uppercase tracking-widest mb-4 block">Full-Stack Digital Solutions</span>
              <h2 className="text-4xl font-bold mb-6">Web, Marketing & Growth - All in One</h2>
              <p className="text-white/70 mb-10 leading-relaxed">
                Our global digital network connects you with expert developers, designers, and marketing professionals. Whether you need a website, app, or full-scale brand growth strategy, we deliver results with precision and performance.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'Custom Web & App Development',
                  'Social Media Management & Growth',
                  'SEO & Performance Marketing',
                  'UI/UX Design & Branding'
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
                Start Your Project <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
            <div className="h-full min-h-[400px]">
              <img
                src="/digital-hero.png"
                alt="Digital marketing and web development services hub"
                className="w-full h-full object-cover opacity-90"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </section>

        {/* Service Pillars */}
        <section className="mb-24 grid md:grid-cols-3 gap-8">
          {[
            { icon: Code, title: 'Web Development', desc: 'Modern, scalable, and secure web applications built with the latest technologies.' },
            { icon: Share2, title: 'Social Media', desc: 'Data-driven social strategies to grow your audience and engagement globally.' },
            { icon: Search, title: 'SEO & Growth', desc: 'Comprehensive search engine optimization to ensure your brand is found by the right people.' },
          ].map((item, i) => (
            <div key={i} className="p-8 bg-beige rounded-3xl border border-beige text-center soft-shadow">
              <div className="w-12 h-12 rounded-full bg-cream mx-auto flex items-center justify-center text-terracotta mb-4">
                <item.icon size={24} />
              </div>
              <h4 className="font-bold mb-2">{item.title}</h4>
              <p className="text-sm text-nordic-grey">{item.desc}</p>
            </div>
          ))}
        </section>

        {/* Sourcing Examples */}
        <div>
          <h3 className="text-3xl font-bold mb-12">What We Source Globally</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {digital.map((product, i) => (
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
