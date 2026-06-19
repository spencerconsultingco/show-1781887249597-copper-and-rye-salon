'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Our Approach', href: '#feature' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-brand-primary shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <Image
              src="/images/logo.png"
              alt="Copper & Rye Salon logo"
              width={64}
              height={64}
              className="w-16 h-16 object-contain flex-shrink-0"
              priority
            />
            <div>
              <span className="block font-heading text-xl font-semibold tracking-wide text-brand-background leading-tight">
                Copper &amp; Rye
              </span>
              <span className="block font-body text-xs font-light tracking-widest uppercase text-brand-accent">
                Salon
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-sm font-medium tracking-wider uppercase text-brand-background hover:text-brand-accent transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 bg-brand-accent text-brand-primary font-body font-semibold text-sm tracking-wider uppercase px-6 py-3 rounded-sm hover:bg-brand-background transition-colors duration-200"
            >
              Contact Us
            </a>
          </nav>

          <button
            className="md:hidden text-brand-background p-2 rounded focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-brand-primary border-t border-brand-secondary">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="font-body text-sm font-medium tracking-wider uppercase text-brand-background hover:text-brand-accent transition-colors duration-200 py-3 border-b border-brand-secondary last:border-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="mt-3 bg-brand-accent text-brand-primary font-body font-semibold text-sm tracking-wider uppercase px-6 py-3 rounded-sm text-center hover:bg-brand-background transition-colors duration-200"
            >
              Contact Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
