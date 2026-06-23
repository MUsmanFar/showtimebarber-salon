"use client";

import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { Scissors, Sparkles, Gem, PaintBucket, Droplets, Flame } from 'lucide-react';

const allServices = [
  {
    title: 'The Showtime Cut',
    price: '$65',
    duration: '45 MIN',
    description: 'Our signature precision haircut, tailored specifically to your facial structure and hair type. Includes a hot towel finish.',
    Icon: Scissors,
  },
  {
    title: 'The Full Premium',
    price: '$100',
    duration: '75 MIN',
    description: 'The ultimate grooming experience. Includes The Showtime Cut, Executive Shave, facial massage, and styling.',
    Icon: Gem,
    featured: true,
  },
  {
    title: 'Executive Shave',
    price: '$45',
    duration: '30 MIN',
    description: 'A traditional hot towel straight razor shave. Experience ultimate relaxation and the closest shave possible.',
    Icon: Sparkles,
  },
  {
    title: 'Beard Trim & Line Up',
    price: '$35',
    duration: '25 MIN',
    description: 'Detailed beard sculpting with straight razor line up and conditioning oil treatment.',
    Icon: Flame,
  },
  {
    title: 'Scalp Treatment',
    price: '$50',
    duration: '30 MIN',
    description: 'Invigorating scalp massage with essential oils to promote hair health and relieve tension.',
    Icon: Droplets,
  },
  {
    title: 'Color Enhancements',
    price: '$40+',
    duration: '30 MIN+',
    description: 'Semi-permanent color to sharpen hairlines, cover gray, or completely transform your look.',
    Icon: PaintBucket,
  }
];

export default function Services() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-32 relative">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-zinc-950 overflow-hidden z-0">
           <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold-900/10 via-black to-black" />
           <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-24 max-w-3xl mx-auto">
             <motion.span 
               initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}
               className="text-gold-500 font-semibold tracking-widest uppercase text-sm mb-4 block"
             >
               Grooming Menu
             </motion.span>
             <motion.h1 
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-montserrat font-black text-white tracking-tighter mb-8"
             >
               OUR <span className="text-gradient">SERVICES</span>
             </motion.h1>
             <motion.p 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }}
              className="text-zinc-400 text-lg md:text-xl leading-relaxed"
             >
               Every service is executed with absolute precision, utilizing premium luxury products and advanced techniques to ensure you look your absolute best.
             </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {allServices.map((service, i) => (
              <ServiceCard key={i} {...service} delay={i * 0.15} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
