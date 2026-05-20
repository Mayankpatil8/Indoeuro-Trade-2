import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Search, Package, Truck, ShieldCheck, Target, Heart, Zap } from 'lucide-react';
import { useSEO } from '@/lib/useSEO';

export const About = () => {
  useSEO({
    title: 'About IndoEuro Core Oy – Global Sourcing from Finland',
    description: 'Based in Helsinki, Finland, IndoEuro Core Oy connects businesses with trusted global suppliers. Discover our story, values, sourcing process & reliability standards.',
    keywords: 'about IndoEuro Core Oy, global sourcing company Finland, Helsinki sourcing partner, industrial supply chain company',
  });
  const stats = [
  ];

  const values = [
    {
      title: 'Integrity',
      desc: 'Built on trust, transparency, and consistent quality.',
      icon: ShieldCheck
    },
    {
      title: 'Sustainability',
      desc: 'Committed to responsible sourcing and eco-friendly operations.',
      icon: Heart
    },
    {
      title: 'Precision',
      desc: 'Delivering accuracy and excellence in every detail.',
      icon: Target
    },
  ];

  const steps = [
    { title: 'Requirement Analysis', desc: 'You tell us what you need, no matter how rare or specific.' },
    { title: 'Global Sourcing', desc: 'We tap into our vast European network to find the perfect match.' },
    { title: 'Quality Verification', desc: 'Every item undergoes a rigorous quality check in our Finnish hub.' },
    { title: 'Worldwide Delivery', desc: 'Seamless logistics bring the product directly to your doorstep.' },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden grainy-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 bg-terracotta/10 text-terracotta text-xs font-bold uppercase tracking-widest rounded-full mb-6">
              Our Identity
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              The Bridge Between <br />
              <span className="text-terracotta">Needs & Global Delivery.</span>
            </h1>
            <p className="text-xl text-nordic-grey leading-relaxed">
              Headquartered in Finland, IndoEuro Core Oy is more than a supplier — we are your global sourcing partner. We connect your requirements with trusted suppliers worldwide, delivering precision, reliability, and consistent quality at every step.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sage/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-terracotta/10 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-beige">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="relative z-10 rounded-[3rem] overflow-hidden soft-shadow">
                <img
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200"
                  alt="IndoEuro Core Oy Helsinki office and team collaboration"
                  className="w-full aspect-[4/5] object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-beige rounded-3xl -z-10" />
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="absolute -top-10 -right-10 p-8 bg-beige rounded-3xl soft-shadow hidden md:block"
              >
                <div className="text-4xl font-bold text-terracotta mb-1">100%</div>
                <div className="text-xs font-bold uppercase tracking-widest text-nordic-grey">Reliability Rate</div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-8 leading-tight">Built on Trust, <br />Powered by Global Sourcing.</h2>
              <p className="text-lg text-nordic-grey mb-6 leading-relaxed">
                IndoEuro Core Oy was founded to solve a critical challenge — helping businesses find high-quality products quickly and reliably.
              </p>
              <p className="text-lg text-nordic-grey mb-10 leading-relaxed">
                With a strong foundation in Finland and a global supplier network, we simplify sourcing, procurement, and delivery. Our mission is to provide seamless solutions for businesses that value quality, efficiency, and long-term partnerships.
              </p>

              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center p-4 rounded-2xl bg-cream border border-beige">
                    <stat.icon size={20} className="mx-auto mb-3 text-terracotta" />
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-nordic-grey">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Sourcing Journey */}
      <section className="py-24 bg-nordic-black text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-6">The Sourcing Journey</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              From requirement to delivery — we ensure a seamless, transparent, and efficient sourcing experience worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="absolute top-1/2 left-0 w-full h-px bg-beige/10 hidden md:block -translate-y-1/2" />
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative z-10 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-terracotta text-white flex items-center justify-center mx-auto mb-6 text-xl font-bold soft-shadow">
                  {i + 1}
                </div>
                <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                <p className="text-sm text-white/50 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-cream grainy-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-12">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-10 bg-beige rounded-[2.5rem] soft-shadow border border-beige group hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-sage/10 flex items-center justify-center text-sage mb-8 group-hover:bg-terracotta group-hover:text-white transition-colors">
                  <value.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-nordic-grey leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-beige">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <div className="p-12 lg:p-20 bg-beige/30 rounded-[3rem] border border-beige relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-8">Ready to Source Globally?</h2>
              <p className="text-lg text-nordic-grey mb-10 max-w-2xl mx-auto">
                No requirement is too simple or too complex. Leverage our global network to source high-quality products and get them delivered with speed, precision, and reliability.
              </p>
              <button className="px-10 py-5 bg-terracotta text-white font-bold rounded-full hover:bg-terracotta/90 transition-all soft-shadow">
                Request a Quote →
              </button>
            </div>
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-terracotta/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-sage/5 rounded-full blur-3xl" />
          </div>
        </div>
      </section>
    </div>
  );
};
