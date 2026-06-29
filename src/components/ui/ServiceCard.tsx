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
    <div
      className={`glass-card rounded-2xl p-6 md:p-8 group relative overflow-hidden flex flex-col h-full bg-white border border-border-gray ${
        featured ? 'border-royal-blue shadow-[0_10px_40px_rgba(37,99,235,0.1)]' : 'shadow-sm'
      }`}
    >
      {featured && (
        <div className="absolute top-4 right-4 bg-royal-blue text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          Featured
        </div>
      )}
      
      <div className="absolute -top-10 -right-10 p-8 opacity-[0.03] group-hover:opacity-[0.06] transition-all transform group-hover:scale-125 duration-700 group-hover:rotate-12">
        <Icon size={160} className="text-royal-blue" />
      </div>
      
      <div className="relative z-10 flex flex-col flex-grow">
        <div className="w-16 h-16 rounded-2xl bg-light-gray flex items-center justify-center border border-border-gray mb-6 group-hover:border-royal-blue/30 transition-colors shadow-sm">
          <Icon className="text-royal-blue" size={32} />
        </div>
        
        <div className="flex justify-between items-start mb-4 gap-4">
          <h3 className="text-xl md:text-2xl font-cormorant font-bold text-navy tracking-tight leading-tight line-clamp-2">{title}</h3>
          <span className="text-royal-blue font-bold text-lg md:text-xl whitespace-nowrap">{price}</span>
        </div>
        
        <div className="flex items-center text-sm text-slate-500 font-medium mb-6 uppercase tracking-widest gap-2">
          <Clock size={16} /> {duration}
        </div>
        
        <p className="text-slate-600 leading-relaxed mb-6 flex-1 text-sm md:text-base line-clamp-4">
          {description}
        </p>
      </div>

      <div className="mt-auto pt-6 border-t border-border-gray relative z-10">
        <Magnetic>
          <Button variant={featured ? 'primary' : 'outline'} className={`w-full ${featured ? 'bg-navy hover:bg-royal-blue text-white' : 'border-border-gray text-navy hover:bg-light-gray'}`} onClick={openModal}>Book This Service</Button>
        </Magnetic>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-royal-blue via-blue-400 to-royal-blue transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700" />
    </div>
  );
}
