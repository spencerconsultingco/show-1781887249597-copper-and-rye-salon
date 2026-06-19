'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Scissors, Sparkles, Droplets, ShieldCheck, Heart, Brush } from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    name: 'Balayage & Highlights',
    description:
      'Sun-kissed, natural-looking color painted by hand. Renata specializes in lived-in tones that soften regrowth lines so your color keeps looking intentional for months.',
  },
  {
    icon: Scissors,
    name: 'Precision Haircuts',
    description:
      'A great cut is architecture. Every line, layer, and texture point is mapped to how your hair actually moves so you look polished even on wash day.',
  },
  {
    icon: Droplets,
    name: 'Keratin Smoothing',
    description:
      'Tame frizz and restore manageability with a professional keratin treatment. Ideal for Asheville summers when humidity has other ideas about your style.',
  },
  {
    icon: ShieldCheck,
    name: 'Color Correction',
    description:
      'Our most-requested specialty. If a previous color service went wrong, Renata has the expertise to restore your hair with integrity intact. Clients travel from across Western NC for this.',
  },
  {
    icon: Heart,
    name: 'Bridal Styling',
    description:
      'From engagement photos to the ceremony aisle, we create styles that photograph beautifully and hold from morning through the last song of the evening.',
  },
  {
    icon: Brush,
    name: 'Deep Conditioning & Scalp Care',
    description:
      'Olaplex bond-building treatments and targeted scalp health consultations restore strength and balance. Because healthy hair is the foundation of every great style.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="services" className="bg-brand-background py-24 lg:py-32">
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
              What We Offer
            </span>
            <div className="h-px w-10 bg-brand-accent" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl font-light italic text-brand-primary mb-4"
          >
            Services crafted for{' '}
            <span className="font-semibold not-italic">real life</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-body text-brand-secondary text-lg font-light max-w-2xl mx-auto leading-relaxed"
          >
            Every service at Copper &amp; Rye is performed using exclusively Aveda and Olaplex products. No shortcuts, no compromises on hair health.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.name}
                variants={cardVariants}
                className="group bg-white border border-brand-accent/20 rounded-sm p-8 hover:border-brand-accent hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center mb-6 group-hover:bg-brand-accent/20 transition-colors duration-300">
                  <Icon size={22} className="text-brand-accent" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-brand-primary mb-3">
                  {service.name}
                </h3>
                <p className="font-body text-brand-secondary text-sm leading-relaxed font-light">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-brand-accent text-brand-primary font-body font-semibold text-sm tracking-widest uppercase px-10 py-4 rounded-sm hover:bg-brand-primary hover:text-brand-background transition-colors duration-300"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
