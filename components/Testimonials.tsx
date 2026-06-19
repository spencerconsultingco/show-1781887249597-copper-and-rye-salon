'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote:
      'Renata completely transformed my hair after a botched box-dye disaster. She spent two hours doing a color correction and the result was honestly better than anything I\'ve ever had. I will never go anywhere else.',
    author: 'Melissa T.',
  },
  {
    quote:
      'I\'ve been getting my hair cut here for three years and the consistency is unreal. Every single time it\'s exactly what I asked for. The vibe in the salon is so calm and welcoming too.',
    author: 'Jordan P.',
  },
  {
    quote:
      'The balayage Renata did on my naturally dark hair looked like I\'d spent a summer at the beach. It\'s been four months and it still looks intentional. Worth every penny.',
    author: 'Claire B.',
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="testimonials" className="bg-brand-background py-24 lg:py-32">
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
              Client Stories
            </span>
            <div className="h-px w-10 bg-brand-accent" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl font-light italic text-brand-primary"
          >
            Words from the{' '}
            <span className="font-semibold not-italic">chair</span>
          </motion.h2>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.65, ease: 'easeOut' },
                },
              }}
              className="bg-white border border-brand-accent/15 rounded-sm p-8 flex flex-col"
            >
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    size={16}
                    className="fill-brand-accent text-brand-accent"
                  />
                ))}
              </div>
              <blockquote className="font-heading text-lg italic text-brand-primary leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <p className="font-body text-brand-secondary text-sm font-medium tracking-wide">
                {t.author}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-brand-accent/10 border border-brand-accent/20 rounded-sm p-8 md:p-12 text-center"
        >
          <div className="relative aspect-video max-w-2xl mx-auto mb-8 rounded-sm overflow-hidden">
            <Image
              src="/images/gallery-2.jpg"
              alt="Copper & Rye Salon atmosphere"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </div>
          <h3 className="font-heading text-3xl font-light italic text-brand-primary mb-3">
            Ready to love your hair again?
          </h3>
          <p className="font-body text-brand-secondary font-light mb-6 max-w-xl mx-auto">
            Spots with Renata are limited by design. Reach out today and take the first step toward color that works with your life.
          </p>
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
