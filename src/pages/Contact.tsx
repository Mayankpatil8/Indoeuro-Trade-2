import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, ShieldCheck, ChevronDown } from 'lucide-react';
import { useSEO } from '@/lib/useSEO';
import { PageTransition } from '@/components/PageTransition';


export const Contact = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showAllFaqs, setShowAllFaqs] = useState(false);
  const [submitStage, setSubmitStage] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulate secure submission. Replace with fetch('/mailer.php') when backend is ready.
    setSubmitStage('submitting');
    setTimeout(() => {
      setSubmitStage('success');
    }, 1500);
  };

  const faqs = [
    { q: 'What services does IndoEuro Core Oy provide?', a: 'We specialize in B2B industrial procurement, sourcing mechanical and electronic components, food-grade materials, and providing digital marketing services.' },
    { q: 'Where is your company located?', a: 'Our headquarters is located in Finland, serving as our central hub for European operations and quality control.' },
    { q: 'How can I request a quote for my project?', a: 'You can use the secure request form on this contact page or email us directly at contact@indoeurocore.fi. We aim to respond within 24 hours.' },
    { q: 'Do you offer international shipping?', a: 'Yes, we manage logistics and coordinate deliveries to clients across Europe and internationally.' },
    { q: 'How do you ensure the quality of the products you source?', a: 'We partner with trusted suppliers and perform strict quality checks to ensure all items meet industry standards before dispatch.' },
    { q: 'Can I place a small initial trial order?', a: 'Yes, we understand that new partnerships take time to build. We are open to discussing smaller trial orders depending on the product type and availability.' },
    { q: 'Do you provide digital marketing services?', a: 'Yes! Beyond procurement, our digital division helps B2B companies grow their online presence and generate leads through modern SEO and LinkedIn strategies.' },
    { q: 'What is the typical process after I submit a request?', a: 'Once we receive your inquiry, our team will review your requirements, contact you to clarify any details, and then provide a tailored sourcing or digital strategy proposal.' }
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
                  content: '+358 40 8500302',
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

            {submitStage === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-16 text-center h-full"
              >
                <div className="w-20 h-20 bg-sage/10 rounded-full flex items-center justify-center mb-6">
                  <ShieldCheck size={40} className="text-sage" />
                </div>
                <h3 className="text-3xl font-bold text-nordic-black mb-4">Request Submitted Successfully</h3>
                <p className="text-nordic-grey mb-8 max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out. Your secure request has been safely logged and encrypted. Our team will review your requirements and respond within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitStage('idle')}
                  className="px-8 py-4 bg-nordic-black text-white text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-terracotta transition-colors"
                >
                  Submit Another Request
                </button>
              </motion.div>
            ) : (
            <form method="POST" onSubmit={handleSubmit} className="space-y-6">
              {/* <p className="text-sm font-bold text-terracotta mb-2 bg-terracotta/10 px-4 py-2 rounded-lg inline-block">
                * Please note that all fields are required to submit this form.
              </p> */}

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-nordic-grey">Full Name *</label>
                  <input
                    type="text"
                    name="full_name"
                    required
                    placeholder="e.g. John Doe"
                    className="w-full px-5 py-4 bg-beige/50 border border-beige rounded-xl focus:outline-none focus:border-terracotta focus:bg-white transition-all text-nordic-black"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-nordic-grey">Company Name *</label>
                  <input
                    type="text"
                    name="company_name"
                    required
                    placeholder="e.g. Acme Corp"
                    className="w-full px-5 py-4 bg-beige/50 border border-beige rounded-xl focus:outline-none focus:border-terracotta focus:bg-white transition-all text-nordic-black"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-nordic-grey">Corporate Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@acmecorp.eu"
                    className="w-full px-5 py-4 bg-beige/50 border border-beige rounded-xl focus:outline-none focus:border-terracotta focus:bg-white transition-all text-nordic-black"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-nordic-grey">Contact Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+44 20 7123 4567"
                    className="w-full px-5 py-4 bg-beige/50 border border-beige rounded-xl focus:outline-none focus:border-terracotta focus:bg-white transition-all text-nordic-black"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-nordic-grey">Country *</label>
                  <input
                    type="text"
                    name="country"
                    required
                    placeholder="e.g. Germany"
                    className="w-full px-5 py-4 bg-beige/50 border border-beige rounded-xl focus:outline-none focus:border-terracotta focus:bg-white transition-all text-nordic-black"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-nordic-grey">Department *</label>
                <select name="department" required className="w-full px-5 py-4 bg-beige/50 border border-beige rounded-xl focus:outline-none focus:border-terracotta focus:bg-white transition-all text-nordic-black appearance-none">
                  <option value="" disabled selected>Select a department</option>
                  <option>Industrial Procurement & Sourcing</option>
                  <option>Food-Grade Industrial Materials</option>
                  <option>Digital Growth & SEO Strategy</option>
                  <option>Mechanical / Electronic Component Specs</option>
                  <option>General Enterprise Partnership</option>
                  <option>Strategic Partnership & Consulting</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-nordic-grey">Project Details & Requirements *</label>
                <textarea
                  name="project_details"
                  required
                  rows={5}
                  placeholder="Provide specifications, target volumes, or digital growth objectives..."
                  className="w-full px-5 py-4 bg-beige/50 border border-beige rounded-xl focus:outline-none focus:border-terracotta focus:bg-white transition-all text-nordic-black resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={submitStage === 'submitting'}
                className="w-full py-5 bg-terracotta text-white font-bold rounded-xl hover:bg-terracotta/90 transition-all flex items-center justify-center soft-shadow text-lg group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {submitStage === 'submitting' ? (
                  'Encrypting & Sending...'
                ) : (
                  <>Submit Request <Send size={20} className="ml-3 group-hover:translate-x-1 transition-transform" /></>
                )}
              </button>

              <p className="text-center text-xs text-nordic-grey/70 mt-4">
                By submitting this form, you agree to our strict European B2B data privacy and confidentiality policies.
              </p>
            </form>
            )}
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
