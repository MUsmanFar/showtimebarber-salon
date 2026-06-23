"use client";

import { motion } from 'framer-motion';
import { LucideIcon, Clock } from 'lucide-react';
import { Button } from './Button';
import { Magnetic } from './Magnetic';

import { useBooking } from '../BookingModal';

export interface ServiceCardProps {
  title: string;
  price: string;
  duration: string;
  description: string;
  Icon: LucideIcon;
  delay?: number;
  featured?: boolean;
}

export function ServiceCard({ title, price, duration, description, Icon, delay = 0, featured = false }: ServiceCardProps) {
  const { openModal } = useBooking();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      className={`glass-card rounded-2xl p-8 group relative overflow-hidden flex flex-col h-full ${
        featured ? 'border-gold-500/50 shadow-[0_0_30px_rgba(212,175,55,0.15)]' : ''
      }`}
    >
      {featured && (
        <div className="absolute top-4 right-4 bg-gold-500 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          Featured
        </div>
      )}
      
      <div className="absolute -top-10 -right-10 p-8 opacity-5 group-hover:opacity-10 transition-all transform group-hover:scale-125 duration-700 group-hover:rotate-12">
        <Icon size={160} className="text-gold-500" />
      </div>
      
      <div className="relative z-10 flex-grow">
        <div className="w-16 h-16 rounded-2xl bg-black flex items-center justify-center border border-gold-500/30 mb-8 group-hover:border-gold-500 transition-colors shadow-lg">
          <Icon className="text-gold-500" size={32} />
        </div>
        
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl md:text-3xl font-montserrat font-bold text-white tracking-tight">{title}</h3>
          <span className="text-gold-500 font-black text-2xl">{price}</span>
        </div>
        
        <div className="flex items-center text-sm text-gold-600 font-medium mb-6 uppercase tracking-widest gap-2">
          <Clock size={16} /> {duration}
        </div>
        
        <p className="text-zinc-400 leading-relaxed mb-8">
          {description}
        </p>
      </div>

      <div className="mt-auto pt-6 border-t border-white/5 relative z-10">
        <Magnetic>
          <Button variant={featured ? 'primary' : 'outline'} className="w-full" onClick={openModal}>Book This Service</Button>
        </Magnetic>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700" />
    </motion.div>
  );
}
