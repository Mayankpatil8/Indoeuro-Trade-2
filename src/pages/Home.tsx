import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ShieldCheck, Truck, Settings, Users, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SOURCING_EXAMPLES } from '@/constants';
import { ProductCard } from '@/components/ProductCard';
import { FoodProductCard } from '@/components/FoodProductCard';
import { cn } from '@/lib/utils';

export const Home = () => {
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
      <section className="relative h-[90vh] flex items-center overflow-hidden grainy-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 bg-sage/10 text-sage text-xs font-bold uppercase tracking-widest rounded-full mb-6">
              Established in Finland
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-8">
              Your Whole & Sole <br />
              <span className="text-terracotta">Sourcing Partner.</span>
            </h1>
            <p className="text-lg text-nordic-grey mb-10 max-w-lg leading-relaxed">
              Based in Finland, we are your direct link to any parts or products you need.
              Tell us what you are looking for, and we will deliver it to your doorstep with Nordic precision.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-terracotta text-white font-bold rounded-full hover:bg-terracotta/90 transition-all soft-shadow flex items-center"
              >
                Request Any Part <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link
                to="/about"
                className="px-8 py-4 bg-white text-nordic-black border border-beige font-bold rounded-full hover:bg-beige transition-all"
              >
                Our Story
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
                alt="Precision Engineering"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-beige rounded-3xl -z-10" />
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-sage/20 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </section>

      {/* Category Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">Our Specializations</h2>
            <p className="text-nordic-grey max-w-2xl mx-auto">
              Four distinct pillars of quality, unified by Finnish precision and European standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Electronic Parts',
                path: '/electronics',
                img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
                desc: 'Advanced microcontrollers, sensors, and power modules.'
              },
              {
                title: 'Mechanical Parts',
                path: '/mechanical',
                img: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=800',
                desc: 'CNC components, fasteners, and custom industrial parts.'
              },
              {
                title: 'Food Products',
                path: '/food',
                img: 'https://images.unsplash.com/photo-1600431521340-491eca880813?auto=format&fit=crop&q=80&w=800',
                desc: 'Premium Nordic organic foods and artisanal essentials.'
              },
              {
                title: 'Digital Marketing',
                path: '/digital',
                img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
                desc: 'Web development, social media, and SEO strategies.'
              },
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
                <div className="absolute inset-0 bg-gradient-to-t from-nordic-black/80 via-nordic-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{cat.title}</h3>
                  <p className="text-white/70 text-sm mb-6">{cat.desc}</p>
                  <Link
                    to={cat.path}
                    className="inline-flex items-center text-white text-xs font-bold uppercase tracking-widest hover:text-terracotta transition-colors"
                  >
                    Explore Category <ArrowRight size={14} className="ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* About Section */}
      <section className="py-24 bg-cream grainy-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600"
                  alt="Quality Control"
                  className="rounded-2xl soft-shadow aspect-square object-cover"
                  referrerPolicy="no-referrer"
                />
                <img
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=600"
                  alt="Manufacturing"
                  className="rounded-2xl soft-shadow aspect-square object-cover mt-8"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-terracotta text-xs font-bold uppercase tracking-widest mb-4 block">Our Identity</span>
              <h2 className="text-4xl font-bold mb-8 leading-tight">Finnish Heritage, <br />European Reach.</h2>
              <p className="text-lg text-nordic-grey mb-8 leading-relaxed">
                Based in the heart of Finland, we provide reliable industrial components and high-quality products across Europe with a focus on precision and consistency.
                Our philosophy is simple: quality is not an act, it is a habit.
              </p>
              <div className="space-y-6">
                {[
                  { icon: ShieldCheck, title: 'European Quality Standards', desc: 'Every part is tested to meet strict EU regulations.' },
                  { icon: Truck, title: 'Reliable Logistics', desc: 'Seamless distribution network across the continent.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-terracotta soft-shadow shrink-0">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-nordic-black mb-1">{item.title}</h4>
                      <p className="text-sm text-nordic-grey">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What you want, you get Section */}
      <section className="py-24 bg-white border-y border-beige">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
                Whatever you need, <br />
                <span className="text-terracotta">we deliver it to you.</span>
              </h2>
              <p className="text-lg text-nordic-grey mb-8 leading-relaxed">
                At IndoEuro Trade Hub, we pride ourselves on our versatile sourcing capabilities. From complex industrial components and organic provisions to cutting-edge digital marketing and web development, we ensure that your specific requirements are met with Finnish precision.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-cream rounded-2xl border border-beige">
                  <h4 className="font-bold text-nordic-black mb-2">Custom Sourcing</h4>
                  <p className="text-sm text-nordic-grey">If you don't see it, we'll find it for you through our extensive network.</p>
                </div>
                <div className="p-6 bg-cream rounded-2xl border border-beige">
                  <h4 className="font-bold text-nordic-black mb-2">Direct Delivery</h4>
                  <p className="text-sm text-nordic-grey">Seamless logistics from our Finnish hub straight to your doorstep.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200"
                alt="Global Logistics"
                className="rounded-3xl soft-shadow aspect-video object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-terracotta/10 rounded-full blur-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-beige/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: ShieldCheck, title: 'Quality Assurance', desc: 'Rigorous testing for every single component.' },
              { icon: Truck, title: 'Global Logistics', desc: 'Fast and reliable shipping across Europe.' },
              { icon: Settings, title: 'Custom Solutions', desc: 'Tailored engineering and digital services.' },
              { icon: Users, title: 'Partnerships', desc: 'Long-term relationships built on trust.' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-white mx-auto flex items-center justify-center text-terracotta soft-shadow mb-6">
                  <item.icon size={32} />
                </div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-sm text-nordic-grey leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
