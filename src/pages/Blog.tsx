import React from 'react';
import { motion } from 'framer-motion';
import { BLOG_POSTS } from '@/constants';
import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSEO } from '@/lib/useSEO';

export const Blog = () => {
  useSEO({
    title: 'Insights & Global Sourcing Intelligence – IndoEuro Core Oy',
    description: 'Expert articles on global sourcing, industrial trends, supply chain innovations & digital growth strategies. Stay informed with IndoEuro Core Oy.',
    keywords: 'sourcing insights, industrial blog, supply chain trends, CNC machining, organic food sourcing, semiconductor supply chain, digital marketing blog',
  });
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <header className="mb-16 text-center">
          <h1 className="text-5xl font-bold mb-6">Insights, Trends & Global Sourcing Intelligence</h1>
          <p className="text-lg text-nordic-grey max-w-2xl mx-auto leading-relaxed">
            Explore expert insights on global sourcing, industrial trends, supply chain innovations, and digital growth strategies shaping businesses worldwide.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-12">
          {BLOG_POSTS.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[16/9] rounded-[2rem] overflow-hidden soft-shadow mb-8">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-terracotta mb-4">
                <Calendar size={14} /> {post.date}
              </div>
              <h2 className="text-3xl font-bold mb-4 group-hover:text-terracotta transition-colors leading-tight">
                {post.title}
              </h2>
              <p className="text-nordic-grey mb-6 leading-relaxed">
                {post.excerpt}
              </p>
              <Link
                to={`/blog/${post.id}`}
                className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-white group-hover:translate-x-2 transition-transform"
              >
                Read Full Article → <ArrowRight size={16} className="ml-2" />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};
