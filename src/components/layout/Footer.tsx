import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-light-gray pt-20 pb-10 border-t border-border-gray">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="block relative w-48 h-16 md:w-56 md:h-20 mb-6 transition-transform duration-300 hover:scale-[1.02]">
              <Image
                src="/logo.png"
                alt="Charles Bruce Salon & Spa Logo"
                fill
                className="object-contain object-left"
                sizes="(max-width: 768px) 192px, 224px"
              />
            </Link>
            <p className="text-slate-600 leading-relaxed text-sm">
              Serving Medford, NJ for over 50 years with professional hair styling, coloring, spa, nail and beauty services.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-slate-500 hover:text-royal-blue transition-colors font-semibold">
                IG
              </a>
              <a href="#" className="text-slate-500 hover:text-royal-blue transition-colors font-semibold">
                FB
              </a>
              <a href="#" className="text-slate-500 hover:text-royal-blue transition-colors font-semibold">
                X
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-cormorant font-bold text-navy uppercase tracking-wider mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['About Us', 'Services', 'Pricing', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-slate-600 hover:text-royal-blue transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-cormorant font-bold text-navy uppercase tracking-wider mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-royal-blue shrink-0 mt-1" size={18} />
                <span className="text-slate-600 text-sm">123 Medford Rd<br />Medford, NJ 08055</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-royal-blue shrink-0" size={18} />
                <a href="tel:5551234567" className="text-slate-600 hover:text-royal-blue transition-colors text-sm">(555) 123-4567</a>
              </li>

            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-cormorant font-bold text-navy uppercase tracking-wider mb-6">Opening Hours</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex justify-between border-b border-border-gray pb-2">
                <span className="text-slate-600">Mon - Fri</span>
                <span className="text-navy font-medium">9:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-border-gray pb-2">
                <span className="text-slate-600">Saturday</span>
                <span className="text-navy font-medium">9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-border-gray pb-2">
                <span className="text-slate-600">Sunday</span>
                <span className="text-burgundy font-medium">Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-border-gray">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Charles Bruce Salon & Spa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
