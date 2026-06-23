import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#030303] pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="font-montserrat font-black text-3xl tracking-tighter text-white uppercase mb-6 flex flex-col leading-none">
              <span className="text-gold-500">SHOWTIME</span>
              <span className="text-xs tracking-[0.2em] font-semibold text-zinc-400 mt-1">BARBER SALON</span>
            </Link>
            <p className="text-zinc-400 leading-relaxed text-sm">
              Experience the pinnacle of grooming. Where precision meets luxury, and every client is treated like a VIP.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-zinc-400 hover:text-gold-500 transition-colors font-semibold">
                IG
              </a>
              <a href="#" className="text-zinc-400 hover:text-gold-500 transition-colors font-semibold">
                FB
              </a>
              <a href="#" className="text-zinc-400 hover:text-gold-500 transition-colors font-semibold">
                X
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-montserrat font-semibold text-white uppercase tracking-wider mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['About Us', 'Services', 'Gallery', 'Reviews'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-zinc-400 hover:text-gold-500 transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-montserrat font-semibold text-white uppercase tracking-wider mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-gold-500 shrink-0 mt-1" size={18} />
                <span className="text-zinc-400 text-sm">7091 Berry Rd Ste 2<br />Accokeek, MD 20607</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-gold-500 shrink-0" size={18} />
                <a href="tel:7036233017" className="text-zinc-400 hover:text-gold-500 transition-colors text-sm">(703) 623-3017</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-400">
                <Mail size={18} className="text-gold-500 shrink-0" />
                <span>hello@showtimebarber.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-montserrat font-semibold text-white uppercase tracking-wider mb-6">Opening Hours</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-zinc-400">Mon - Fri</span>
                <span className="text-white">9:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-zinc-400">Saturday</span>
                <span className="text-white">9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-zinc-400">Sunday</span>
                <span className="text-gold-500">Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-white/5">
          <p className="text-xs text-zinc-600">
            &copy; {new Date().getFullYear()} Showtime Barber & Salon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
