'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, Mail, Clock, Send, Calendar } from 'lucide-react';

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-brand-primary py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="h-px w-10 bg-brand-accent" />
            <span className="font-body text-brand-accent text-xs font-medium tracking-[0.25em] uppercase">
              Get in Touch
            </span>
            <div className="h-px w-10 bg-brand-accent" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl font-light italic text-brand-background"
          >
            Your next great hair day{' '}
            <span className="font-semibold not-italic text-brand-accent">starts here</span>
          </motion.h2>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16"
        >
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="font-heading text-2xl font-semibold text-brand-background mb-6">
                Salon Information
              </h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-accent/20 flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-brand-accent" />
                  </div>
                  <div>
                    <p className="font-body text-brand-background/60 text-xs uppercase tracking-widest mb-1">
                      Phone
                    </p>
                    <a
                      href="tel:5559469828"
                      className="font-body text-brand-background font-medium hover:text-brand-accent transition-colors"
                    >
                      (555) 946-9828
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-accent/20 flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-brand-accent" />
                  </div>
                  <div>
                    <p className="font-body text-brand-background/60 text-xs uppercase tracking-widest mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:todd@thesitesmith.co"
                      className="font-body text-brand-background font-medium hover:text-brand-accent transition-colors break-all"
                    >
                      todd@thesitesmith.co
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-accent/20 flex items-center justify-center flex-shrink-0">
                    <Clock size={18} className="text-brand-accent" />
                  </div>
                  <div>
                    <p className="font-body text-brand-background/60 text-xs uppercase tracking-widest mb-1">
                      Hours
                    </p>
                    <p className="font-body text-brand-background font-medium">
                      Tue to Sat, 9am to 7pm
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-accent/20 flex items-center justify-center flex-shrink-0">
                    <Calendar size={18} className="text-brand-accent" />
                  </div>
                  <div>
                    <p className="font-body text-brand-background/60 text-xs uppercase tracking-widest mb-1">
                      Serving
                    </p>
                    <p className="font-body text-brand-background font-light text-sm">
                      Asheville metro, Weaverville, Black Mountain, and Western NC
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-brand-accent/10 border border-brand-accent/20 rounded-sm p-6">
              <p className="font-heading text-lg italic text-brand-background leading-relaxed">
                &ldquo;Spots are limited by design. Reach out and I&rsquo;ll find a time that works for you.&rdquo;
              </p>
              <p className="font-body text-brand-accent text-sm font-medium mt-3">
                Renata, Owner and Stylist
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="bg-brand-accent/10 border border-brand-accent/30 rounded-sm p-12 text-center h-full flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-brand-accent/20 flex items-center justify-center mb-6">
                  <Send size={28} className="text-brand-accent" />
                </div>
                <h3 className="font-heading text-3xl font-semibold text-brand-background mb-3">
                  Message Received
                </h3>
                <p className="font-body text-brand-background/70 font-light max-w-sm">
                  Thank you for reaching out. Renata will be in touch within one business day to confirm your appointment.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-body text-brand-background/70 text-xs uppercase tracking-widest mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-brand-background/10 border border-brand-accent/30 rounded-sm px-4 py-3 text-brand-background placeholder-brand-background/40 font-body text-sm focus:outline-none focus:border-brand-accent transition-colors"
                      placeholder="Jane Smith"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block font-body text-brand-background/70 text-xs uppercase tracking-widest mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-brand-background/10 border border-brand-accent/30 rounded-sm px-4 py-3 text-brand-background placeholder-brand-background/40 font-body text-sm focus:outline-none focus:border-brand-accent transition-colors"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block font-body text-brand-background/70 text-xs uppercase tracking-widest mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-brand-background/10 border border-brand-accent/30 rounded-sm px-4 py-3 text-brand-background placeholder-brand-background/40 font-body text-sm focus:outline-none focus:border-brand-accent transition-colors"
                      placeholder="(828) 555-0100"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="block font-body text-brand-background/70 text-xs uppercase tracking-widest mb-2"
                    >
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-brand-background/10 border border-brand-accent/30 rounded-sm px-4 py-3 text-brand-background font-body text-sm focus:outline-none focus:border-brand-accent transition-colors appearance-none"
                    >
                      <option value="" className="bg-brand-primary">
                        Select a service
                      </option>
                      <option value="Balayage & Highlights" className="bg-brand-primary">
                        Balayage &amp; Highlights
                      </option>
                      <option value="Precision Haircut" className="bg-brand-primary">
                        Precision Haircut
                      </option>
                      <option value="Keratin Smoothing" className="bg-brand-primary">
                        Keratin Smoothing
                      </option>
                      <option value="Color Correction" className="bg-brand-primary">
                        Color Correction
                      </option>
                      <option value="Bridal Styling" className="bg-brand-primary">
                        Bridal Styling
                      </option>
                      <option value="Deep Conditioning & Scalp Care" className="bg-brand-primary">
                        Deep Conditioning &amp; Scalp Care
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-body text-brand-background/70 text-xs uppercase tracking-widest mb-2"
                  >
                    Tell Us About Your Hair Goals
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-brand-background/10 border border-brand-accent/30 rounded-sm px-4 py-3 text-brand-background placeholder-brand-background/40 font-body text-sm focus:outline-none focus:border-brand-accent transition-colors resize-none"
                    placeholder="Share what you're hoping to achieve. Hair history, inspiration photos, concerns -- the more context the better."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-brand-accent text-brand-primary font-body font-semibold text-sm tracking-widest uppercase px-10 py-4 rounded-sm hover:bg-brand-background transition-colors duration-300 mt-2"
                >
                  <Send size={16} />
                  Contact Us
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
