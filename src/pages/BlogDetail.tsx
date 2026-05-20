import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, ArrowRight, BookOpen } from 'lucide-react';
import { BLOG_POSTS } from '@/constants';
import { useSEO } from '@/lib/useSEO';
import { PageTransition } from '@/components/PageTransition';

const CATEGORY_LABELS: Record<string, string> = {
  manufacturing: 'Manufacturing & CNC',
  semiconductors: 'Semiconductors',
  provisions: 'Provisions',
  digital: 'Digital Sourcing',
  analytics: 'Trade Analytics',
  trade: 'Global Trade',
};

export const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const post = BLOG_POSTS.find(p => p.id === id);

  useSEO({
    title: post ? `${post.title} | IndoEuro Core Oy` : 'Article Not Found | IndoEuro Core Oy',
    description: post?.excerpt ?? 'Read the latest sourcing intelligence from IndoEuro Core Oy.',
  });

  if (!post) {
    return (
      <PageTransition>
        <div className="pt-32 pb-24 bg-cream grainy-bg min-h-screen flex items-center justify-center">
          <div className="text-center max-w-md mx-auto px-6">
            <div className="text-6xl mb-6">📄</div>
            <h1 className="text-3xl font-bold text-nordic-black mb-4">Article Not Found</h1>
            <p className="text-nordic-grey mb-8">This article may have moved or been removed from our Intelligence Hub.</p>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-terracotta text-white font-bold rounded-full hover:bg-terracotta/90 transition-all"
            >
              <ArrowLeft size={16} /> Back to Insights
            </Link>
          </div>
        </div>
      </PageTransition>
    );
  }

  const paragraphs = post.content.split('\n\n').filter(Boolean);
  const categoryLabel = CATEGORY_LABELS[post.category] ?? 'Intelligence';

  return (
    <PageTransition>
      <div className="pt-24 pb-24 bg-cream grainy-bg min-h-screen">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">

          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-nordic-grey hover:text-terracotta transition-colors"
            >
              <ArrowLeft size={14} /> Back to Insights
            </Link>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10 rounded-3xl overflow-hidden shadow-lg"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full max-h-[480px] object-cover"
              loading="eager"
            />
          </motion.div>

          {/* Meta Row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap items-center gap-3 mb-6"
          >
            <span className="px-3 py-1.5 bg-terracotta/10 text-terracotta text-[10px] font-bold uppercase tracking-widest rounded-full">
              {categoryLabel}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-nordic-grey font-semibold">
              <Calendar size={12} className="text-terracotta" /> {post.date}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-nordic-grey font-semibold">
              <Clock size={12} className="text-terracotta" /> {post.readTime}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-nordic-grey font-semibold">
              <User size={12} className="text-terracotta" /> {post.author}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="text-3xl lg:text-5xl font-bold text-nordic-black leading-tight mb-8"
          >
            {post.title}
          </motion.h1>

          {/* Excerpt callout */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-nordic-grey leading-relaxed border-l-4 border-terracotta pl-5 mb-10 italic"
          >
            {post.excerpt}
          </motion.p>

          {/* Stats Grid */}
          {post.stats && post.stats.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
            >
              {post.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
                  className="bg-nordic-black text-white rounded-2xl p-5 text-center"
                >
                  <div className="text-2xl font-bold text-terracotta mb-1">{stat.value}</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/60">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Divider */}
          <div className="border-t border-beige mb-10" />

          {/* Article Body */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="space-y-6"
          >
            {paragraphs.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.05 }}
                className="text-nordic-grey leading-relaxed text-[15px]"
              >
                {para}
              </motion.p>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="border-t border-beige mt-14 mb-12" />

          {/* Author tag */}
          <div className="flex items-center gap-4 mb-14">
            <div className="w-12 h-12 rounded-full bg-terracotta/10 flex items-center justify-center shrink-0">
              <BookOpen size={20} className="text-terracotta" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-nordic-grey mb-0.5">Written by</div>
              <div className="text-sm font-bold text-nordic-black">{post.author}</div>
            </div>
          </div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="bg-nordic-black text-white rounded-3xl p-10 flex flex-col lg:flex-row items-center justify-between gap-6"
          >
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-terracotta mb-2">Ready to Act?</div>
              <h3 className="text-2xl font-bold mb-2">Need sourcing support?</h3>
              <p className="text-white/60 text-sm max-w-sm">
                Our Finland-based procurement team is ready to discuss your specific sourcing requirements and build a custom strategy.
              </p>
            </div>
            <Link
              to="/contact"
              className="shrink-0 inline-flex items-center gap-2.5 px-8 py-4 bg-terracotta text-white font-bold rounded-full hover:bg-terracotta/80 transition-all group"
            >
              Get in Touch <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Back link */}
          <div className="mt-10 text-center">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-nordic-grey hover:text-terracotta transition-colors"
            >
              <ArrowLeft size={14} /> Back to all articles
            </Link>
          </div>

        </div>
      </div>
    </PageTransition>
  );
};
