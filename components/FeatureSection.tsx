'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

const differentiators = [
  {
    title: 'One Client at a Time',
    detail:
      'Renata never double-books. Your appointment is yours entirely, from consultation through styling. No waiting, no rushing, no divided attention.',
  },
  {
    title: 'Color Correction Expertise',
    detail:
      'Clients travel from Weaverville, Black Mountain, and across Western NC specifically for Renata\'s color correction work. If previous color left you discouraged, this is the place.',
  },
  {
    title: 'Pacific Northwest Training',
    detail:
      'Renata trained under master colorists in Portland, a city known for setting the standard on lived-in, natural color. That level of craft came home to Asheville.',
  },
  {
    title: 'Aveda and Olaplex Only',
    detail:
      'Every color, treatment, and styling product is thoughtfully selected. We use Aveda and Olaplex because healthy hair is the prerequisite for beautiful hair.',
  },
];

export default function FeatureSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="feature" className="bg-brand-primary py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <Image
                src="/images/gallery-1.jpg"
                alt="Renata working at Copper & Rye Salon"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/40 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-brand-accent/10 rounded-sm hidden lg:block" />
            <div className="absolute -top-6 -left-6 w-24 h-24 border border-brand-accent/30 rounded-sm hidden lg:block" />
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="h-px w-10 bg-brand-accent" />
              <span className="font-body text-brand-accent text-xs font-medium tracking-[0.25em] uppercase">
                Why Copper &amp; Rye
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-heading text-4xl sm:text-5xl font-light italic text-brand-background mb-4 leading-tight"
            >
              Unhurried craft.
              <br />
              <span className="font-semibold not-italic text-brand-accent">
                Uncompromised results.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-body text-brand-background/70 text-base leading-relaxed mb-10 font-light"
            >
              Renata has been serving the Asheville community since 2014 with a simple philosophy: every person deserves the kind of focused attention that was once reserved for private clients. Her curated book means she can deliver that level of care to everyone she sees.
            </motion.p>

            <motion.div
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } },
              }}
              className="space-y-5"
            >
              {differentiators.map((item) => (
                <motion.div
                  key={item.title}
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
                  }}
                  className="flex gap-4"
                >
                  <CheckCircle
                    size={22}
                    className="text-brand-accent flex-shrink-0 mt-0.5"
                  />
                  <div>
                    <p className="font-body font-semibold text-brand-background text-sm mb-1">
                      {item.title}
                    </p>
                    <p className="font-body text-brand-background/60 text-sm leading-relaxed font-light">
                      {item.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-10"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-brand-accent text-brand-primary font-body font-semibold text-sm tracking-widest uppercase px-10 py-4 rounded-sm hover:bg-brand-background transition-colors duration-300"
              >
                Contact Us
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
