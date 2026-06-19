'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Scissors } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-[640px] overflow-hidden flex items-center justify-center"
    >
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ y: imageY }}
      >
        <motion.div
          className="w-full h-full"
          initial={{ scale: 1 }}
          animate={{ scale: 1.08 }}
          transition={{ duration: 10, ease: 'linear' }}
        >
          <Image
            src="/images/hero.jpg"
            alt="Copper & Rye Salon interior in Asheville NC"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </motion.div>
      </motion.div>

      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.60) 100%)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <div className="h-px w-12 bg-brand-accent" />
          <span className="font-body text-brand-accent text-xs font-medium tracking-[0.25em] uppercase">
            Asheville, NC
          </span>
          <div className="h-px w-12 bg-brand-accent" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-heading text-5xl sm:text-6xl md:text-7xl font-light italic text-white leading-tight mb-6"
        >
          Color that lives
          <br />
          <span className="font-semibold not-italic text-brand-accent">
            beautifully
          </span>{' '}
          between visits
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="font-body text-white/85 text-lg sm:text-xl font-light max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Renata brings a Pacific Northwest mastery of lived-in color to the Blue Ridge Mountains. Every client gets unhurried, one-on-one attention because beautiful hair should never be rushed.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="bg-brand-accent text-brand-primary font-body font-semibold text-sm tracking-widest uppercase px-10 py-4 rounded-sm hover:bg-brand-background transition-colors duration-300 flex items-center gap-2"
          >
            <Scissors size={16} />
            Contact Us
          </a>
          <a
            href="#services"
            className="border border-white/60 text-white font-body font-medium text-sm tracking-widest uppercase px-10 py-4 rounded-sm hover:border-brand-accent hover:text-brand-accent transition-colors duration-300"
          >
            Explore Services
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-body text-white/50 text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
