"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function About() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <span className="text-gold-600 font-semibold tracking-widest uppercase text-sm mb-4 block">Our Story</span>
                <h1 className="text-4xl md:text-6xl font-cormorant font-bold text-navy tracking-tight">
                  A LEGACY OF <br/><span className="text-gradient">BEAUTY</span>
                </h1>
              </div>
              
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-light">
                <p>
                  Established in Medford, NJ, Charles Bruce Salon & Spa was born from a vision to provide the ultimate luxury beauty experience. We believe that professional styling is not just a service—it's an art form, a moment of relaxation, and a statement of confidence.
                </p>
                <p>
                  Our team of master stylists and spa therapists combines classic elegance with modern techniques, ensuring every client walks out looking and feeling their absolute best. From the moment you step into our pristine salon, you are treated to a world-class standard of care.
                </p>
              </div>

              <div className="pt-8 border-t border-border-gray grid grid-cols-3 gap-4">
                <div>
                  <h4 className="text-4xl font-cormorant font-bold text-navy mb-1">50+</h4>
                  <span className="text-xs text-royal-blue uppercase tracking-wider font-semibold">Years Exp</span>
                </div>
                <div>
                  <h4 className="text-4xl font-cormorant font-bold text-navy mb-1">10k+</h4>
                  <span className="text-xs text-royal-blue uppercase tracking-wider font-semibold">Clients</span>
                </div>
                <div>
                  <h4 className="text-4xl font-cormorant font-bold text-navy mb-1">100%</h4>
                  <span className="text-xs text-royal-blue uppercase tracking-wider font-semibold">Satisfaction</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-square rounded-[2rem] overflow-hidden border border-border-gray shadow-2xl"
            >
              <Image 
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=1000" 
                alt="Luxury Salon Interior" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </motion.div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
