import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div>
            <h1 className="text-5xl font-bold mb-8">Get in Touch</h1>
            <p className="text-lg text-nordic-grey mb-12 leading-relaxed">
              Whether you need a custom mechanical quote or have questions about our food exports, our team in Helsinki is ready to assist you.
            </p>

            <div className="space-y-10">
              {[
                { icon: MapPin, title: 'Headquarters', detail: 'Mannerheimintie 12, 00100 Helsinki, Finland' },
                { icon: Mail, title: 'Email Us', detail: 'contact@nordicprecision.fi' },
                { icon: Phone, title: 'Call Us', detail: '+358 9 123 4567' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-terracotta soft-shadow shrink-0">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-nordic-black mb-1">{item.title}</h4>
                    <p className="text-nordic-grey">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Real Map Integration */}
            <div className="mt-16 aspect-video bg-beige rounded-3xl overflow-hidden soft-shadow relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1984.828556105658!2d24.9383791!3d60.1686078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46920bc79621062f%3A0x2101955247a441a7!2sMannerheimintie%2012%2C%2000100%20Helsinki%2C%20Finland!5e0!3m2!1sen!2sfi!4v1712472291000!5m2!1sen!2sfi" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
                title="IndoEuro Trade Hub Location"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-10 lg:p-16 rounded-[2.5rem] soft-shadow">
            <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-nordic-grey">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-6 py-4 bg-cream border border-beige rounded-xl focus:outline-none focus:border-terracotta transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-nordic-grey">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 bg-cream border border-beige rounded-xl focus:outline-none focus:border-terracotta transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-nordic-grey">Subject</label>
                <select className="w-full px-6 py-4 bg-cream border border-beige rounded-xl focus:outline-none focus:border-terracotta transition-colors">
                  <option>General Inquiry</option>
                  <option>Custom Manufacturing Quote</option>
                  <option>Electronic Parts Order</option>
                  <option>Food Product Distribution</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-nordic-grey">Message</label>
                <textarea 
                  rows={5}
                  placeholder="How can we help you?"
                  className="w-full px-6 py-4 bg-cream border border-beige rounded-xl focus:outline-none focus:border-terracotta transition-colors resize-none"
                ></textarea>
              </div>
              <button className="w-full py-5 bg-terracotta text-white font-bold rounded-xl hover:bg-terracotta/90 transition-all flex items-center justify-center soft-shadow">
                Send Message <Send size={18} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
