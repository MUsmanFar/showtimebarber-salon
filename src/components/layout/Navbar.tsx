"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useBooking } from '@/components/BookingModal';

const links = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Reviews', href: '/reviews' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { openModal } = useBooking();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="font-montserrat font-black text-2xl tracking-tighter text-white uppercase flex flex-col leading-none">
            <span className="text-gold-500">SHOWTIME</span>
            <span className="text-[10px] tracking-[0.2em] font-semibold text-zinc-400 mt-1">BARBER SALON</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-offwhite hover:text-gold-500 transition-colors tracking-wide uppercase"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button size="sm" onClick={openModal}>Book Now</Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass flex flex-col items-center py-8 gap-6 border-b border-white/10 md:hidden"
          >
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-white hover:text-gold-500 transition-colors uppercase tracking-widest"
              >
                {link.name}
              </Link>
            ))}
            <Button className="mt-4 w-3/4" onClick={() => { setIsOpen(false); openModal(); }}>Book Appointment</Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
