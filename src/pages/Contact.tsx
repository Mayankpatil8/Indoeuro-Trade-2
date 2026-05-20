import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, ShieldCheck, ChevronDown } from 'lucide-react';
import { useSEO } from '@/lib/useSEO';
import { PageTransition } from '@/components/PageTransition';


export const Contact = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const faqs = [
    { q: 'What quality assurance and ISO standards do your manufacturers follow?', a: 'All our manufacturing partners are rigorously vetted to comply with European ISO 9001 and ISO 14001 standards. We conduct centralized QA testing at our Finland HQ before any batch is dispatched to ensure zero defect rates.' },
    { q: 'How do you handle European import duties and customs clearance?', a: 'We manage the entire logistics pipeline. Our quotes are typically delivered DDP (Delivered Duty Paid) for EU clients, meaning we handle all customs documentation, tariffs, and direct-to-warehouse logistics without hidden fees.' },
    { q: 'Can you provide custom CNC machining prototypes before bulk orders?', a: 'Yes. For precision mechanical parts, we highly recommend prototyping. We can deliver CNC machined prototypes within 10-14 days for your engineering team to validate before initiating high-volume production.' },
    { q: 'What are your standard payment terms for enterprise clients?', a: 'For verified European SMEs and enterprise clients, we typically offer NET 30 or NET 60 terms after a successful credit assessment. Initial trial orders may require standard milestone payments.' },
    { q: 'Do you offer localized warehousing in the Nordic region?', a: 'Yes. To mitigate supply chain disruptions, we offer buffer stock and localized warehousing solutions in Finland, allowing for just-in-time (JIT) delivery to your facilities across Northern Europe.' },
    { q: 'What is the minimum order quantity (MOQ) for electronic components?', a: 'MOQs depend strictly on the component type. Standard active/passive components often require reel-level quantities, while specialized industrial sensors and relays can be sourced in lower volumes tailored to your production run.' },
    { q: 'How does your digital division track ROI for B2B lead generation?', a: 'Our digital growth systems are directly integrated with your CRM. We track closed-won revenue from LinkedIn authority campaigns, rather than just vanity metrics, ensuring a measurable impact on your sales pipeline.' },
    { q: 'How quickly can you scale production for sudden demand spikes?', a: 'Because we consolidate multiple pre-vetted vendors, we can dynamically shift capacity across our manufacturing network to absorb sudden volume spikes without compromising lead times or quality.' }
  ];

  useSEO({
    title: 'Contact IndoEuro Core Oy | Enterprise Industrial Procurement & Growth',
    description: 'Initiate your enterprise partnership with IndoEuro Core Oy. Contact our Finland headquarters for industrial procurement, component sourcing, and digital growth solutions.',
    keywords: 'Contact IndoEuro Core Oy, European Industrial Procurement, B2B Sourcing Finland, Request Industrial Quote, Mechanical Components Supplier Europe, B2B Digital Growth',
  });

  return (
    <PageTransition>
      <div className="pt-24 pb-24 bg-cream grainy-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2.5 px-5 py-2 bg-white text-nordic-black text-xs font-bold uppercase tracking-[0.15em] rounded-full mb-6 shadow-sm border border-beige"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-terracotta opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-terracotta"></span>
            </span>
            Global Connectivity
          </motion.div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight text-nordic-black">
            Initiate Your <span className="text-terracotta">Partnership.</span>
          </h1>
          <p className="text-lg text-nordic-grey max-w-2xl mx-auto leading-relaxed">
            Connect with our Finland headquarters to discuss enterprise procurement, custom component sourcing, and strategic digital growth for your European business.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Contact Information Box */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 bg-nordic-black text-white p-10 lg:p-12 rounded-[2.5rem] soft-shadow border border-white/5 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 -z-0 pointer-events-none" style={{ background: "radial-gradient(circle, rgba(197, 102, 79, 0.1) 0%, rgba(197, 102, 79, 0) 70%)", willChange: "transform" }} />

            <h3 className="text-3xl font-bold mb-8 relative z-10">Direct Access</h3>

            <div className="space-y-8 relative z-10">
              {[
                {
                  icon: MapPin,
                  title: 'Finland Headquarters',
                  content: 'Mannerheimintie 12, 00100 Helsinki, Finland',
                  sub: 'Central hub for European operations'
                },
                {
                  icon: Mail,
                  title: 'Enterprise Inquiries',
                  content: 'contact@indoeurocore.fi',
                  sub: 'Secure, encrypted communications'
                },
                {
                  icon: Phone,
                  title: 'Direct Line',
                  content: '+358 9 123 4567',
                  sub: 'Available 08:00 - 18:00 EET'
                }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-5 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-terracotta shrink-0 border border-white/5 group-hover:scale-105 transition-transform duration-300">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-white/90 font-medium mb-1">{item.content}</p>
                    <p className="text-xs text-white/50 uppercase tracking-wider">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 relative z-10">
              <div className="flex items-center gap-3 text-sm text-white/70">
                <Clock size={18} className="text-terracotta" />
                <span>Guaranteed 24-hour response time for European SMEs.</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-7 bg-white p-10 lg:p-12 rounded-[2.5rem] soft-shadow border border-beige"
          >
            <div className="mb-8 flex items-center justify-between">
              <h3 className="text-2xl font-bold">Secure Request Form</h3>
              <div className="flex items-center gap-2 text-xs font-bold text-sage uppercase tracking-widest bg-sage/10 px-3 py-1 rounded-full">
                <ShieldCheck size={14} /> SSL Secured
              </div>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-nordic-grey">Full Name / Company</label>
                  <input
                    type="text"
                    placeholder="e.g. John Doe, Acme Corp"
                    className="w-full px-5 py-4 bg-beige/50 border border-beige rounded-xl focus:outline-none focus:border-terracotta focus:bg-white transition-all text-nordic-black"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-nordic-grey">Corporate Email</label>
                  <input
                    type="email"
                    placeholder="john@acmecorp.eu"
                    className="w-full px-5 py-4 bg-beige/50 border border-beige rounded-xl focus:outline-none focus:border-terracotta focus:bg-white transition-all text-nordic-black"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-nordic-grey">Department</label>
                <select className="w-full px-5 py-4 bg-beige/50 border border-beige rounded-xl focus:outline-none focus:border-terracotta focus:bg-white transition-all text-nordic-black appearance-none">
                  <option>Industrial Procurement & Sourcing</option>
                  <option>Digital Growth & SEO Strategy</option>
                  <option>Mechanical / Electronic Component Specs</option>
                  <option>General Enterprise Partnership</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-nordic-grey">Project Details & Requirements</label>
                <textarea
                  rows={5}
                  placeholder="Provide specifications, target volumes, or digital growth objectives..."
                  className="w-full px-5 py-4 bg-beige/50 border border-beige rounded-xl focus:outline-none focus:border-terracotta focus:bg-white transition-all text-nordic-black resize-none"
                ></textarea>
              </div>

              <button className="w-full py-5 bg-terracotta text-white font-bold rounded-xl hover:bg-terracotta/90 transition-all flex items-center justify-center soft-shadow text-lg group">
                Submit Request <Send size={20} className="ml-3 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-center text-xs text-nordic-grey/70 mt-4">
                By submitting this form, you agree to our strict European B2B data privacy and confidentiality policies.
              </p>
            </form>
          </motion.div>
        </div>

        {/* SEO FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-32 max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-nordic-grey">Common inquiries regarding our European supply and digital operations.</p>
          </div>

          <div className="space-y-4">
            {(showAllFaqs ? faqs : faqs.slice(0, 3)).map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl soft-shadow border border-beige overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 lg:p-8 text-left transition-colors hover:bg-cream/50"
                >
                  <h4 className="text-lg font-bold text-nordic-black pr-4">{faq.q}</h4>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${openFaq === i ? 'bg-terracotta text-white rotate-180' : 'bg-cream text-terracotta'}`}>
                    <ChevronDown size={18} />
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      key="content"
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.0, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 lg:px-8 pb-6 lg:pb-8 pt-4 border-t border-beige/50 text-nordic-grey leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {!showAllFaqs && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-10 text-center"
            >
              <button
                onClick={() => setShowAllFaqs(true)}
                className="px-8 py-4 bg-white text-nordic-black border border-beige font-bold rounded-full hover:bg-beige transition-all soft-shadow"
              >
                Load More Questions
              </button>
            </motion.div>
          )}
        </motion.div>

      </div>
    </div>
    </PageTransition>
  );
};
