"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useBooking } from '@/components/BookingModal';

const links = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Pricing', href: '/pricing' },
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
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.05)] py-4' : 'bg-transparent py-8'
        }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="group block relative w-48 h-16 md:w-56 md:h-20 transition-transform duration-300 hover:scale-[1.02]">
            <Image
              src="/logo.png"
              alt="Charles Bruce Salon & Spa Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group relative text-xs font-semibold text-navy hover:text-royal-blue transition-colors tracking-widest uppercase"
            >
              {link.name}
              <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-royal-blue transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button size="lg" className="px-8 bg-navy hover:bg-royal-blue text-white shadow-md hover:shadow-lg transition-all" onClick={openModal}>Book Appointment</Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-navy"
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
                className="text-lg font-medium text-navy hover:text-royal-blue transition-colors uppercase tracking-widest"
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
