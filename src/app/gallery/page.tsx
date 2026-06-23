"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { X } from 'lucide-react';

const images = [
  "/gallery_1.png",
  "/service_fade.png",
  "/hero.png",
  "/gallery_1.png",
  "/service_fade.png",
  "/hero.png",
  "/gallery_1.png",
  "/service_fade.png",
  "/hero.png",
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-32 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
             <motion.h1 
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-montserrat font-black text-white tracking-tighter mb-6"
             >
               THE <span className="text-gradient">GALLERY</span>
             </motion.h1>
             <p className="text-zinc-400 text-lg">A showcase of our master craftsmanship and premium transformations.</p>
          </div>

          {/* CSS Columns Masonry */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {images.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative overflow-hidden rounded-xl break-inside-avoid group cursor-pointer border border-white/5"
                onClick={() => setSelectedImage(src)}
              >
                <div className="relative w-full aspect-[3/4]">
                  <Image src={src} alt="Gallery image" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                     <span className="text-gold-500 font-montserrat font-bold tracking-widest uppercase text-sm border border-gold-500 px-4 py-2 rounded-full">View</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-xl"
          >
            <button className="absolute top-8 right-8 text-white hover:text-gold-500 transition-colors z-50" onClick={() => setSelectedImage(null)}>
              <X size={40} />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-5xl aspect-video md:aspect-[3/2] rounded-xl overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.1)]"
              onClick={e => e.stopPropagation()}
            >
              <Image src={selectedImage} alt="Enlarged gallery view" fill className="object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
