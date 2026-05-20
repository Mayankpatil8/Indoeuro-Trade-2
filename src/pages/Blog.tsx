import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BLOG_POSTS } from '@/constants';
import { ArrowRight, Calendar, BookOpen, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSEO } from '@/lib/useSEO';
import { PageTransition } from '@/components/PageTransition';


export const Blog = () => {
  useSEO({
    title: 'Insights & Global Sourcing Intelligence – IndoEuro Core Oy',
    description: 'Expert articles on global sourcing, industrial trends, supply chain innovations & digital growth strategies. Stay informed with IndoEuro Core Oy.',
    keywords: 'sourcing insights, industrial blog, supply chain trends, CNC machining, organic food sourcing, semiconductor supply chain, digital marketing blog',
  });

  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Intelligence' },
    { id: 'manufacturing', label: 'Manufacturing & CNC' },
    { id: 'semiconductors', label: 'Semiconductors' },
    { id: 'provisions', label: 'Provisions' },
    { id: 'digital', label: 'Digital Sourcing' }
  ];

  const getPostCategory = (id: string) => {
    if (id === 'b1' || id === 'b5') return 'manufacturing';
    if (id === 'b3') return 'semiconductors';
    if (id === 'b2' || id === 'b6') return 'provisions';
    if (id === 'b4') return 'digital';
    return 'all';
  };

  const getPostCategoryLabel = (id: string) => {
    const cat = getPostCategory(id);
    const found = categories.find(c => c.id === cat);
    return found ? found.label : 'Intelligence';
  };

  const filteredPosts = BLOG_POSTS.filter(post => {
    if (activeCategory === 'all') return true;
    return getPostCategory(post.id) === activeCategory;
  });

  const featuredPost = filteredPosts[0];
  const remainingPosts = filteredPosts.slice(1);

  // Framer Motion Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 15 } }
  };

  // Structured Technical JSON-LD Blog Schema
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "IndoEuro Core Oy Sourcing Intelligence",
    "description": "Global supply chain insights, semiconductor trends, precision CNC reports, and provisions sourcing strategies by IndoEuro Core Oy.",
    "publisher": {
      "@type": "Organization",
      "name": "IndoEuro Core Oy",
      "logo": {
        "@type": "ImageObject",
        "url": "https://indoeuro.co/logo.png"
      }
    },
    "blogPost": BLOG_POSTS.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "datePublished": post.date,
      "image": post.image,
      "author": {
        "@type": "Organization",
        "name": "IndoEuro Core Oy Sourcing Bureau"
      }
    }))
  };

  return (
    <PageTransition>
      <div className="pt-24 pb-24 bg-cream grainy-bg min-h-screen">
      {/* Inject Structured Blog Schema */}
      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header Section */}
        <header className="mb-16 text-center max-w-4xl mx-auto">
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
            Sourcing Intelligence
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight text-nordic-black"
          >
            Global Sourcing <span className="text-terracotta">Insights & Analytics.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-nordic-grey leading-relaxed"
          >
            Stay informed with verified trade studies, supply chain forecasts, CNC machining standards, and bulk provisions strategies managed by our Helsinki bureau.
          </motion.p>
        </header>

        {/* Dynamic Category Filtering Pill Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${
                activeCategory === cat.id
                  ? 'bg-terracotta text-white border-terracotta shadow-sm scale-105'
                  : 'bg-white text-nordic-grey border-beige/60 hover:text-nordic-black hover:border-beige/80'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Featured Showcase Block */}
        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mb-16"
          >
            <div className="bg-white rounded-[2.5rem] border border-beige/60 shadow-sm overflow-hidden grid lg:grid-cols-12 items-center gap-0 group">
              <div className="lg:col-span-7 h-full min-h-[300px] lg:min-h-[450px] relative overflow-hidden shrink-0">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                  loading="lazy"
                  decoding="async"
                />
                <span className="absolute top-6 left-6 px-4 py-1.5 bg-white/95 backdrop-blur-sm text-nordic-black text-[10px] font-bold uppercase tracking-widest rounded-full shadow-sm border border-beige/20">
                  Featured Article
                </span>
              </div>
              
              <div className="lg:col-span-5 p-10 lg:p-14 relative flex flex-col justify-between h-full">
                <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none" style={{ background: "radial-gradient(circle, rgba(197, 102, 79, 0.05) 0%, rgba(197, 102, 79, 0) 70%)", willChange: "transform" }} />
                
                <div>
                  <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-terracotta mb-6">
                    <span className="px-3 py-1 bg-terracotta/10 rounded-full text-terracotta">
                      {getPostCategoryLabel(featuredPost.id)}
                    </span>
                    <span className="flex items-center gap-1.5 text-nordic-grey">
                      <Calendar size={12} /> {featuredPost.date}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-nordic-black group-hover:text-terracotta transition-colors duration-300 leading-tight">
                    {featuredPost.title}
                  </h2>
                  
                  <p className="text-nordic-grey mb-8 text-sm leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                </div>
                
                <Link
                  to={`/blog/${featuredPost.id}`}
                  className="px-8 py-4 bg-terracotta text-white font-bold rounded-full hover:bg-terracotta/90 transition-all flex items-center justify-center inline-flex soft-shadow self-start gap-2.5 group/btn"
                >
                  Read Full Insights <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}

        {/* Dynamic Staggered Articles Grid */}
        <AnimatePresence mode="wait">
          {remainingPosts.length > 0 ? (
            <motion.div 
              key={activeCategory}
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {remainingPosts.map((post) => (
                <motion.article
                  key={post.id}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-beige/60 flex flex-col h-full group"
                >
                  <div className="aspect-[16/10] overflow-hidden relative shrink-0">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="absolute top-4 left-4 px-3 py-1 bg-white/95 backdrop-blur-sm text-nordic-black text-[9px] font-bold uppercase tracking-wider rounded-full shadow-sm border border-beige/20">
                      {getPostCategoryLabel(post.id)}
                    </span>
                  </div>
                  
                  <div className="p-8 flex flex-col flex-grow justify-between">
                    <div>
                      <div className="flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-widest text-nordic-grey mb-4">
                        <Calendar size={12} className="text-terracotta" /> {post.date}
                      </div>
                      
                      <h3 className="text-xl font-bold text-nordic-black mb-4 group-hover:text-terracotta transition-colors duration-300 leading-tight">
                        {post.title}
                      </h3>
                      
                      <p className="text-xs text-nordic-grey mb-6 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                    
                    <div className="pt-4 border-t border-beige/40">
                      <Link 
                        to={`/blog/${post.id}`}
                        className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-terracotta hover:text-terracotta/80 transition-colors"
                      >
                        Read Full Article <ArrowRight size={14} className="ml-2 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          ) : (
            activeCategory !== 'all' && remainingPosts.length === 0 && filteredPosts.length <= 1 && (
              <div className="text-center py-12 bg-white rounded-3xl border border-beige/60 text-nordic-grey text-sm">
                No further articles found in this category.
              </div>
            )
          )}
        </AnimatePresence>

      </div>
    </div>
    </PageTransition>
  );
};
