import Image from 'next/image';
import { Phone, Mail, Clock, Heart } from 'lucide-react';

const footerLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Our Approach', href: '#feature' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-brand-text">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/images/logo.png"
                alt="Copper & Rye Salon logo"
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
              />
              <div>
                <span className="block font-heading text-lg font-semibold text-brand-background leading-tight">
                  Copper &amp; Rye
                </span>
                <span className="block font-body text-xs font-light tracking-widest uppercase text-brand-accent">
                  Salon
                </span>
              </div>
            </div>
            <p className="font-body text-brand-background/60 text-sm font-light leading-relaxed mb-5">
              Crafting lived-in color and precision cuts in Asheville, NC since 2014. Exclusively using Aveda and Olaplex.
            </p>
            <div className="flex items-center gap-2 text-brand-background/50 text-xs font-body">
              <Heart size={12} className="text-brand-accent" />
              <span>Asheville, NC</span>
            </div>
          </div>

          <div>
            <h4 className="font-body text-brand-background text-xs font-semibold tracking-widest uppercase mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-brand-background/60 text-sm hover:text-brand-accent transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body text-brand-background text-xs font-semibold tracking-widest uppercase mb-5">
              Contact Info
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone size={15} className="text-brand-accent flex-shrink-0" />
                <a
                  href="tel:5559469828"
                  className="font-body text-brand-background/60 text-sm hover:text-brand-accent transition-colors"
                >
                  (555) 946-9828
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={15} className="text-brand-accent flex-shrink-0" />
                <a
                  href="mailto:todd@thesitesmith.co"
                  className="font-body text-brand-background/60 text-sm hover:text-brand-accent transition-colors break-all"
                >
                  todd@thesitesmith.co
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={15} className="text-brand-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-body text-brand-background/60 text-sm">
                    Tue to Sat, 9am to 7pm
                  </p>
                  <p className="font-body text-brand-background/40 text-xs mt-1">
                    Serving Asheville, Weaverville, Black Mountain, and Western NC
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-brand-background/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-brand-background/40 text-xs">
            &copy; {new Date().getFullYear()} Copper &amp; Rye Salon. All rights reserved.
          </p>
          <a
            href="https://thesitesmith.co"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-brand-background/40 text-xs hover:text-brand-accent transition-colors duration-200"
          >
            Website by The Sitesmith
          </a>
        </div>
      </div>
    </footer>
  );
}
