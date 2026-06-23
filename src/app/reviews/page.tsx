"use client";

import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Star, Quote, CheckCircle } from 'lucide-react';

const reviews = [
  { name: 'Michael R.', text: 'Best haircut I have ever had. The attention to detail is unmatched, and the hot towel shave is a game changer. I will not go anywhere else in Accokeek.', rating: 5, date: '2 weeks ago' },
  { name: 'James T.', text: 'Showtime truly lives up to its name. The vibe is premium, the barbers are extremely professional, and the result is always a 10/10 fade.', rating: 5, date: '1 month ago' },
  { name: 'David L.', text: 'A masterclass in grooming. They take their time and ensure you look completely sharp before you leave the chair. Highly recommend.', rating: 5, date: '3 months ago' },
  { name: 'Chris W.', text: 'The Full Premium service is exactly what every man needs. Completely relaxing and the results are incredible. Worth every penny.', rating: 5, date: '4 months ago' },
  { name: 'Antonio M.', text: 'I moved to MD recently and was nervous about finding a new barber. Showtime exceeded all my expectations. Precision is an understatement.', rating: 5, date: '5 months ago' },
  { name: 'Marcus B.', text: 'Clean shop, great music, and master barbers. They treat hair cutting like an art form.', rating: 5, date: '6 months ago' },
];

export default function Reviews() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-32">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-8">
            <div>
              <motion.h1 
                initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
                className="text-5xl md:text-6xl font-montserrat font-black text-white tracking-tighter mb-4"
              >
                CLIENT <span className="text-gradient">REVIEWS</span>
              </motion.h1>
              <p className="text-zinc-400 text-lg">Don't just take our word for it.</p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
              className="glass p-6 rounded-2xl flex items-center gap-6 border border-gold-500/20"
            >
              <div className="text-center">
                <span className="text-5xl font-black font-montserrat text-white">4.9</span>
              </div>
              <div>
                <div className="flex text-gold-500 mb-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                </div>
                <span className="text-zinc-400 text-sm block">Based on 500+ Reviews</span>
                <span className="text-xs text-gold-500 font-semibold tracking-wider uppercase mt-1 flex items-center gap-1"><CheckCircle size={12}/> Verified Google Reviews</span>
              </div>
            </motion.div>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {reviews.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass p-8 rounded-2xl break-inside-avoid relative border border-white/5 hover:border-gold-500/30 transition-colors"
              >
                <Quote className="text-gold-500/10 absolute top-6 right-6" size={60} />
                <div className="flex text-gold-500 mb-4">
                  {[...Array(review.rating)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                </div>
                <p className="text-zinc-300 italic mb-6 leading-relaxed relative z-10">"{review.text}"</p>
                <div className="flex justify-between items-end relative z-10">
                  <p className="text-white font-montserrat font-bold uppercase tracking-wider">{review.name}</p>
                  <span className="text-zinc-600 text-xs">{review.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
