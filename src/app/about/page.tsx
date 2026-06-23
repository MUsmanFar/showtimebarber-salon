"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function About() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <span className="text-gold-500 font-semibold tracking-widest uppercase text-sm mb-4 block">The Showtime Story</span>
                <h1 className="text-4xl md:text-6xl font-montserrat font-black text-white tracking-tighter">
                  MORE THAN JUST <br/><span className="text-gradient">A HAIRCUT</span>
                </h1>
              </div>
              
              <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
                <p>
                  Established in Accokeek, MD, Showtime Barber & Salon was born from a vision to redefine men's grooming. We believe that a haircut isn't just a routine—it's an experience, an art form, and a statement of confidence.
                </p>
                <p>
                  Our team of master barbers combines classic techniques with modern trends, ensuring every client walks out looking and feeling their absolute best. From the moment you sit in our premium leather chairs, you are the center of the show.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 grid grid-cols-3 gap-4">
                <div>
                  <h4 className="text-3xl font-montserrat font-bold text-white">10+</h4>
                  <span className="text-sm text-gold-500 uppercase tracking-wider">Years Exp</span>
                </div>
                <div>
                  <h4 className="text-3xl font-montserrat font-bold text-white">5k+</h4>
                  <span className="text-sm text-gold-500 uppercase tracking-wider">Clients</span>
                </div>
                <div>
                  <h4 className="text-3xl font-montserrat font-bold text-white">100%</h4>
                  <span className="text-sm text-gold-500 uppercase tracking-wider">Satisfaction</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-square rounded-2xl overflow-hidden border border-white/10"
            >
              <Image 
                src="/service_fade.png" 
                alt="Master Barber at work" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </motion.div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
