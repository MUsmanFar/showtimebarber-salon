"use client";

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Magnetic } from '@/components/ui/Magnetic';
import { useBooking } from '@/components/BookingModal';
import { Scissors, Shield, Star, Sparkles, Quote, ArrowRight, Clock, ChevronRight, CheckCircle2 } from 'lucide-react';

// --- Premium Hero Background System ---
const PremiumHeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Deep Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(212,175,55,0.05),transparent_50%)]" />
      
      {/* Floating Gold Particles (Dust) */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-gold-500 rounded-full blur-[1px]"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -Math.random() * 80 - 40, 0],
            x: [0, (Math.random() - 0.5) * 60, 0],
            opacity: [0, Math.random() * 0.6 + 0.2, 0],
            scale: [1, Math.random() * 1.5 + 0.5, 1],
          }}
          transition={{
            duration: Math.random() * 12 + 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Soft Moving Light Beams / Lines */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`beam-${i}`}
          className="absolute h-[1px] bg-gradient-to-r from-transparent via-gold-500/30 to-transparent"
          style={{
            width: `${Math.random() * 30 + 20}vw`,
            top: `${Math.random() * 80 + 10}%`,
            left: `-30%`,
            rotate: `${(Math.random() - 0.5) * 20}deg`,
          }}
          animate={{
            x: ['0vw', '150vw'],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 15 + 20,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 10,
          }}
        />
      ))}

      {/* Rotating Ambient Orbs */}
      <motion.div 
        className="absolute top-[20%] right-[10%] w-[30vw] h-[30vw] border-[1px] border-gold-500/10 rounded-full opacity-40 blur-md"
        animate={{ rotate: 360, scale: [1, 1.05, 1] }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute bottom-[10%] left-[20%] w-[40vw] h-[40vw] border-[1px] border-gold-500/5 rounded-full opacity-30 blur-lg"
        animate={{ rotate: -360, scale: [1, 1.1, 1] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};

// --- Mouse Tracking Spotlight Wrapper for Why Choose Us ---
const MouseSpotlightWrapper = ({ children }: { children: React.ReactNode }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative z-10 w-full"
    >
      <div 
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500 opacity-0 md:group-hover/spotlight:opacity-100"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(212,175,55,0.12), transparent 40%)`
        }}
      />
      {/* Subtle trail glow */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-1000 opacity-0 md:group-hover/spotlight:opacity-100 mix-blend-screen"
        style={{
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(212,175,55,0.05), transparent 50%)`
        }}
      />
      <div className="group/spotlight relative z-10">
        {children}
      </div>
    </div>
  );
};

const HeroLeftInteractive = ({ children }: { children: React.ReactNode }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    setMousePosition({ x, y });
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="w-full lg:w-[55%] relative z-20"
    >
      {/* Background Layers (Behind Content) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-visible">
        {/* Layer 1: Ambient glow */}
        <motion.div 
          className="absolute top-[0%] -left-10 w-[120%] h-[120%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.15),transparent_60%)] blur-[50px]"
          animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Layer 2: Glass shapes */}
        <motion.div
          animate={{ x: mousePosition.x * -15, y: mousePosition.y * -15 }}
          transition={{ type: "spring", stiffness: 40, damping: 20 }}
          className="absolute top-[-5%] left-[10%] w-72 h-72"
        >
          <motion.div 
            className="w-full h-full bg-white/[0.02] backdrop-blur-[60px] rounded-[60px] border border-white/5 rotate-12"
            animate={{ rotate: [12, 17, 12], y: [0, -15, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <motion.div
          animate={{ x: mousePosition.x * -25, y: mousePosition.y * -25 }}
          transition={{ type: "spring", stiffness: 30, damping: 15 }}
          className="absolute bottom-[10%] right-[10%] w-56 h-56 hidden md:block"
        >
          <motion.div 
            className="w-full h-full bg-gold-500/[0.03] backdrop-blur-[40px] rounded-full border border-gold-500/10"
            animate={{ scale: [1, 1.05, 1], y: [0, 15, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Floating Glass Orbs */}
        <motion.div
          animate={{ x: mousePosition.x * -40, y: mousePosition.y * -40 }}
          transition={{ type: "spring", stiffness: 20, damping: 10 }}
          className="absolute top-[25%] right-[20%] w-20 h-20"
        >
          <motion.div 
            className="w-full h-full rounded-full bg-gradient-to-br from-white/10 to-transparent border border-white/10 backdrop-blur-md shadow-[inset_0_0_20px_rgba(255,255,255,0.1)]"
            animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <motion.div
          animate={{ x: mousePosition.x * -50, y: mousePosition.y * -50 }}
          transition={{ type: "spring", stiffness: 15, damping: 8 }}
          className="absolute bottom-[25%] left-[15%] w-12 h-12 hidden md:block"
        >
          <motion.div 
            className="w-full h-full rounded-full bg-gradient-to-br from-gold-500/20 to-transparent border border-gold-500/20 backdrop-blur-md shadow-[inset_0_0_15px_rgba(212,175,55,0.2)]"
            animate={{ y: [0, 25, 0], x: [0, -15, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Layer 3: Ambient Gold Particles */}
        <motion.div 
          animate={{ x: mousePosition.x * -20, y: mousePosition.y * -20 }}
          transition={{ type: "spring", stiffness: 25, damping: 15 }}
          className="absolute inset-0"
        >
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`left-particle-${i}`}
              className="absolute w-1 h-1 bg-gold-500 rounded-full blur-[0.5px]"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -Math.random() * 60 - 30, 0],
                x: [0, (Math.random() - 0.5) * 40, 0],
                opacity: [0, Math.random() * 0.6 + 0.2, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 15,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 5,
              }}
            />
          ))}
        </motion.div>

        {/* Animated Light Beams (Diagonal) */}
        <div className="absolute inset-0 overflow-hidden rounded-[40px]">
          <motion.div
            className="absolute -top-[20%] -left-[20%] w-[140%] h-[1px] bg-gradient-to-r from-transparent via-gold-500/20 to-transparent rotate-[-25deg]"
            animate={{ y: ['-10vh', '110vh'], opacity: [0, 1, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute -top-[20%] -left-[20%] w-[140%] h-[2px] bg-gradient-to-r from-transparent via-gold-500/10 to-transparent rotate-[-25deg]"
            animate={{ y: ['-10vh', '110vh'], opacity: [0, 0.5, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 6 }}
          />
        </div>
      </div>

      {/* Layer 4: Content */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>

      {/* Layer 5: Floating Accents */}
      <motion.div 
        animate={{ x: mousePosition.x * 15, y: mousePosition.y * 15 }}
        transition={{ type: "spring", stiffness: 60, damping: 20 }}
        className="absolute inset-0 z-20 pointer-events-none"
      >
        <motion.div
          className="absolute top-[15%] right-[10%] w-1.5 h-1.5 bg-white rounded-full blur-[1px] shadow-[0_0_10px_rgba(255,255,255,1)]"
          animate={{ y: [0, -15, 0], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[20%] left-[5%] w-2 h-2 bg-gold-400 rounded-full blur-[1px] shadow-[0_0_15px_rgba(212,175,55,1)]"
          animate={{ y: [0, 10, 0], opacity: [0.3, 0.9, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </motion.div>
    </div>
  );
};

export default function Home() {
  const { openModal } = useBooking();
  const heroRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Timeline Line Fill
    gsap.fromTo(".timeline-line", 
      { height: "0%" },
      {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        }
      }
    );
  }, []);

  return (
    <>
      <Navbar />
      <main className="flex-1 overflow-hidden">
        {/* 1. Split-Screen Cinematic Hero */}
        <section ref={heroRef} className="relative min-h-screen flex items-center pt-24 bg-transparent">
          <PremiumHeroBackground />
          <div className="container relative z-10 mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 mt-10 lg:mt-0">
            {/* Left 60%: Text & CTA */}
            <HeroLeftInteractive>
              <div className="mb-8">
                <motion.h1 
                  initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                  className="font-montserrat text-5xl md:text-[4rem] lg:text-[4.5rem] font-extrabold text-white tracking-tighter leading-[1.1]"
                >
                  PRECISION.<br />
                  STYLE.<br />
                  <span className="text-gradient">CONFIDENCE.</span>
                </motion.h1>
              </div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}
                className="text-zinc-300 text-lg md:text-xl max-w-lg mb-10 font-normal tracking-wide leading-relaxed"
              >
                Experience premium grooming, luxury service, and master craftsmanship in Accokeek, Maryland.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }}
                className="flex flex-col sm:flex-row items-center gap-6 relative z-20"
              >
                <Magnetic>
                  <Button onClick={openModal} size="lg" className="w-full sm:w-auto px-10 h-14 shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:shadow-[0_0_50px_rgba(212,175,55,0.6)] transition-shadow">
                    Book Appointment
                  </Button>
                </Magnetic>
                <Magnetic>
                  <Button variant="ghost" size="lg" className="w-full sm:w-auto h-14" onClick={() => window.location.href='tel:7036233017'}>
                    Call (703) 623-3017
                  </Button>
                </Magnetic>
              </motion.div>
            </HeroLeftInteractive>

            {/* Right 45%: Premium 3D Barber Composition */}
            <motion.div 
              style={{ y }}
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.6 }}
              className="w-full lg:w-[45%] relative hidden md:block aspect-[4/5] lg:aspect-auto lg:h-[700px] mt-10 lg:mt-0"
            >
              {/* Main Image */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.8)] z-0 group/hero-img">
                <Image src="/hero.png" alt="Premium Barber Service" fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover transition-transform duration-1000 group-hover/hero-img:scale-105" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-gold-500/10 mix-blend-overlay" />
                {/* Glass reflection */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover/hero-img:opacity-100 transition-opacity duration-700 pointer-events-none" />
                {/* Animated Border Glow */}
                <div className="absolute inset-0 rounded-3xl border border-gold-500/0 group-hover/hero-img:border-gold-500/30 transition-colors duration-700 pointer-events-none" />
              </div>

              {/* Floating Element 1: Rating Card */}
              <motion.div 
                animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="absolute top-12 -left-12 z-10 glass px-6 py-4 rounded-2xl border border-gold-500/40 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl flex items-center gap-4 hover:scale-110 transition-transform"
              >
                <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center text-black shadow-inner">
                  <Star fill="currentColor" size={24} />
                </div>
                <div>
                  <div className="text-2xl font-extrabold font-montserrat text-white leading-none">4.9</div>
                  <div className="text-zinc-400 text-xs font-bold uppercase tracking-wider mt-1">200+ Reviews</div>
                </div>
              </motion.div>

              {/* Floating Element 2: Premium Grooming Badge */}
              <motion.div 
                animate={{ y: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-24 -right-8 z-10 glass px-6 py-4 rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl hover:scale-110 transition-transform hover:border-gold-500/40"
              >
                <div className="text-gold-500 text-xs font-bold uppercase tracking-widest mb-1">Experience</div>
                <div className="text-xl font-extrabold font-montserrat text-white leading-none">Luxury Grooming</div>
              </motion.div>

              {/* Floating Element 3: Scissors Icon */}
              <motion.div 
                animate={{ rotate: [0, 15, 0], y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 2 }}
                className="absolute top-1/2 -right-6 z-10 w-16 h-16 rounded-full glass border border-gold-500/60 flex items-center justify-center shadow-[0_0_40px_rgba(212,175,55,0.4)] hover:scale-125 transition-transform cursor-pointer bg-black/60"
              >
                <Scissors className="text-gold-500" size={28} />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* 2. Why Choose Showtime (Charcoal Grid Background + Spotlight) */}
        <section className="py-32 relative z-10 bg-[#0c0c0c] bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]">
          <MouseSpotlightWrapper>
            <div className="container mx-auto px-4 max-w-7xl relative z-10">
              <div className="text-center mb-20">
                <span className="text-gold-500 font-semibold tracking-widest uppercase text-sm mb-4 block">The Showtime Difference</span>
                <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-white tracking-tight">WHY CHOOSE <span className="text-gradient">US</span></h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: Scissors, title: 'Master Craftsmanship', desc: 'Highly trained artists dedicated to perfecting every fade, line, and contour.' },
                  { icon: Sparkles, title: 'Premium Products', desc: 'We strictly use luxury grooming products to protect your hair and skin health.' },
                  { icon: Star, title: 'VIP Experience', desc: 'From the hot towel finish to the beverage, every visit feels like a VIP event.' },
                  { icon: Shield, title: 'Attention to Detail', desc: 'No rushed cuts. We allocate proper time to ensure flawless, lasting results.' },
                ].map((item, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: i * 0.1 }} className="glass p-8 rounded-2xl border border-white/5 bg-[#111]/80 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] hover:border-gold-500/30 transition-all duration-300 group relative overflow-hidden">
                    <div className="w-14 h-14 rounded-full bg-black/50 border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-gold-500/10 transition-transform">
                      <item.icon className="text-gold-500" size={24} />
                    </div>
                    <h3 className="text-xl font-montserrat font-semibold text-white mb-3 relative z-10">{item.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed relative z-10">{item.desc}</p>
                    <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </motion.div>
                ))}
              </div>
            </div>
          </MouseSpotlightWrapper>
        </section>

        {/* 3. Signature Services (Luxury Gradient Overlay + Ambient Glow) */}
        <section className="py-32 relative bg-gradient-to-br from-[#050505] via-[#0a0a0a] to-[#1a1400] overflow-hidden group">
          <motion.div 
            animate={{ opacity: [0.1, 0.4, 0.1], x: ['-10%', '10%'] }} transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.1),transparent_60%)] pointer-events-none" 
          />
          {/* Animated Sweep */}
          <motion.div
            animate={{ x: ['-100%', '200%'] }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 bottom-0 w-[40vw] bg-gradient-to-r from-transparent via-gold-500/5 to-transparent skew-x-[-45deg] pointer-events-none mix-blend-screen"
          />
          <div className="container mx-auto px-4 max-w-7xl relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <span className="text-gold-500 font-semibold tracking-widest uppercase text-sm mb-4 block">Grooming Menu</span>
                <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-white tracking-tight">SIGNATURE <span className="text-gradient">SERVICES</span></h2>
              </div>
              <Button variant="outline" onClick={() => window.location.href='/services'}>Full Menu <ArrowRight className="ml-2 w-4 h-4" /></Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Haircut', price: '$45+', duration: '30 MIN', featured: false },
                { title: 'Haircut & Shave', price: '$80+', duration: '60 MIN', featured: true },
                { title: 'Manicure & Pedicure', price: '$60+', duration: '45 MIN', featured: false },
              ].map((svc, i) => (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className={`glass relative p-8 rounded-2xl flex flex-col justify-between hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(212,175,55,0.2)] transition-all duration-500 group/card overflow-hidden ${svc.featured ? 'border-gold-500/50 bg-gold-500/5 shadow-[0_0_30px_rgba(212,175,55,0.05)]' : 'border-white/5 bg-white/[0.02]'}`}>
                  {/* Breathing Box Shadow for Featured */}
                  {svc.featured && (
                    <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="absolute inset-0 rounded-2xl shadow-[0_0_30px_rgba(212,175,55,0.2)] pointer-events-none" />
                  )}
                  {/* Subtle sweep on hover */}
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover/card:animate-[shimmer_1.5s_infinite] pointer-events-none" />
                  <div className="relative z-10">
                    {svc.featured && <span className="text-[10px] bg-gold-500 text-black px-3 py-1 rounded-full font-bold uppercase tracking-widest mb-6 inline-block shadow-[0_0_20px_rgba(212,175,55,0.3)]">Popular</span>}
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-2xl font-montserrat font-semibold text-white group-hover/card:text-gold-500 transition-colors">{svc.title}</h3>
                      <span className="text-gold-500 text-xl font-extrabold group-hover/card:scale-110 transition-transform origin-right">{svc.price}</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-500 text-sm mb-8 font-medium">
                      <Clock size={14} /> {svc.duration}
                    </div>
                  </div>
                  <Button variant={svc.featured ? "primary" : "outline"} className={`w-full relative z-10 ${!svc.featured && 'border-white/10 text-white hover:border-gold-500 hover:text-gold-500'}`} onClick={openModal}>Book {svc.title}</Button>
                  {/* Hover Edge Glow */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover/card:border-gold-500/40 transition-colors pointer-events-none z-0" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Experience Journey Timeline (Animated Beam) */}
        <section className="py-32 relative bg-[#080808] overflow-hidden">
          {/* Continuous Journey Background Animations */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute left-1/2 top-0 bottom-0 w-full max-w-lg -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.05),transparent_70%)]" />
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`journey-particle-${i}`}
                className="absolute w-1.5 h-1.5 bg-gold-500/40 rounded-full blur-[1px]"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${40 + Math.random() * 20}%`,
                }}
                animate={{
                  y: [0, -Math.random() * 100 - 50, 0],
                  opacity: [0, Math.random() * 0.8, 0],
                }}
                transition={{
                  duration: Math.random() * 10 + 15,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 5,
                }}
              />
            ))}
          </div>
          
          <div className="container mx-auto px-4 max-w-4xl relative z-10" ref={timelineRef}>
            <div className="text-center mb-20">
              <span className="text-gold-500 font-semibold tracking-widest uppercase text-sm mb-4 block">The Process</span>
              <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-white tracking-tight">THE SHOWTIME <span className="text-gradient">JOURNEY</span></h2>
            </div>

            <div className="relative pl-8 md:pl-0">
              {/* Timeline Track */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/5 -translate-x-1/2 overflow-hidden">
                <div className="timeline-line absolute top-0 left-0 w-full bg-gold-500/20" />
                {/* Continuous Light Beam */}
                <motion.div 
                  animate={{ y: ["-100%", "500%"] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-transparent via-gold-500 to-transparent shadow-[0_0_20px_rgba(212,175,55,1)]"
                />
              </div>

              {[
                { title: 'The Consultation', desc: 'In-depth discussion about your style goals.' },
                { title: 'The Preparation', desc: 'A relaxing hair wash and scalp massage.' },
                { title: 'The Execution', desc: 'Absolute precision cutting, fading, and detailing.' },
                { title: 'The Luxury Finish', desc: 'Hot towel treatment and elite styling.' },
                { title: 'Walk Out Confident', desc: 'Experience the Showtime difference.' },
              ].map((step, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? 30 : -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} className={`relative mb-14 md:w-1/2 group ${i % 2 === 0 ? 'md:ml-auto md:pl-16' : 'md:mr-auto md:pr-16 md:text-right'}`}>
                  <div className={`absolute top-1 w-6 h-6 rounded-full bg-black border-2 border-gold-500 group-hover:scale-125 group-hover:bg-gold-500 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.8)] transition-all duration-300 ${i % 2 === 0 ? '-left-[26px] md:-left-[12px]' : '-left-[26px] md:auto md:-right-[12px]'}`} />
                  <h3 className="font-montserrat font-semibold text-white text-xl mb-2 flex items-center gap-3 justify-start md:justify-normal">
                    <span className="text-gold-500/20 text-3xl font-extrabold group-hover:text-gold-500/50 transition-colors">0{i+1}</span> {step.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Popular Styles Gallery Carousel (Premium Zoom) */}
        <section className="py-24 overflow-hidden bg-[#0c0c0c] border-y border-white/5 relative">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(255,255,255,0.02),transparent_50%)] pointer-events-none" />
           <div className="text-center mb-16 relative z-10">
              <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-white tracking-tight">POPULAR <span className="text-gradient">STYLES</span></h2>
            </div>
          <div className="flex gap-6 whitespace-nowrap px-4 w-[200%] relative z-10">
            <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ repeat: Infinity, duration: 35, ease: "linear" }} className="flex gap-6">
              {[
                { img: "/gallery_1.png", title: "Skin Fade" },
                { img: "/service_fade.png", title: "Taper Fade" },
                { img: "/hero.png", title: "Burst Fade" },
                { img: "/gallery_1.png", title: "Beard Design" },
                { img: "/service_fade.png", title: "Premium Grooming" },
                { img: "/gallery_1.png", title: "Skin Fade" },
                { img: "/service_fade.png", title: "Taper Fade" },
                { img: "/hero.png", title: "Burst Fade" },
              ].map((style, idx) => (
                <div key={idx} className="relative w-[300px] h-[400px] rounded-3xl overflow-hidden shrink-0 group border border-white/10 shadow-2xl bg-black hover:border-gold-500/40 transition-colors duration-500">
                  <Image src={style.img} alt={style.title} fill sizes="(max-width: 768px) 100vw, 300px" className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110 opacity-70 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent group-hover:via-black/10 transition-colors duration-700" />
                  {/* Premium Shine overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  <div className="absolute bottom-6 left-6 right-6 z-20">
                     <div className="glass px-5 py-3 rounded-xl border border-white/20 backdrop-blur-xl inline-block transform transition-transform duration-500 group-hover:-translate-y-3 group-hover:shadow-[0_15px_30px_rgba(0,0,0,0.8)] group-hover:border-gold-500/50">
                       <span className="font-montserrat font-bold text-white text-sm tracking-widest uppercase group-hover:text-gold-500 transition-colors duration-300">{style.title}</span>
                     </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 6. Customer Testimonials (Floating Background Particles) */}
        <section className="py-32 relative bg-[#111] overflow-hidden">
          {/* Soft ambient lights */}
          <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-gold-500/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] bg-gold-500/5 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90 z-0 pointer-events-none" />
          <div className="container mx-auto px-4 max-w-7xl relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-10">
              <div className="text-center md:text-left">
                <span className="text-gold-500 font-semibold tracking-widest uppercase text-sm mb-4 block">Real Results</span>
                <h2 className="text-4xl md:text-6xl font-montserrat font-bold text-white tracking-tight">CLIENT <span className="text-gradient">REVIEWS</span></h2>
              </div>
              <motion.div 
                animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="glass p-6 rounded-2xl flex items-center gap-6 border border-gold-500/30 shadow-[0_10px_40px_rgba(212,175,55,0.15)] bg-black/40 backdrop-blur-2xl hover:scale-105 transition-transform"
              >
                <div className="text-5xl font-extrabold font-montserrat text-white">4.9</div>
                <div>
                  <div className="flex text-gold-500 mb-1">
                    {[...Array(5)].map((_, j) => <Star key={j} size={20} fill="currentColor" />)}
                  </div>
                  <span className="text-zinc-400 text-sm font-semibold tracking-wide">200+ Reviews | 5k+ Clients</span>
                </div>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: 'Michael R.', text: 'Best haircut I have ever had. The attention to detail is unmatched, and the hot towel shave is a game changer.' },
                { name: 'James T.', text: 'Showtime truly lives up to its name. The vibe is premium, the barbers are professional, and the result is always a 10/10.' },
                { name: 'David L.', text: 'A masterclass in grooming. They take their time and ensure you look completely sharp before you leave.' }
              ].map((review, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.5 }} className="glass p-10 rounded-3xl relative border border-white/10 hover:-translate-y-4 hover:shadow-[0_40px_80px_rgba(0,0,0,0.9)] hover:border-gold-500/30 transition-all duration-500 bg-zinc-900/40 backdrop-blur-3xl group">
                  <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 4, repeat: Infinity, delay: i }}>
                    <Quote className="text-gold-500/20 absolute top-8 right-8 group-hover:text-gold-500/40 group-hover:scale-110 transition-all duration-500" size={60} />
                  </motion.div>
                  <div className="flex text-gold-500 mb-6 group-hover:scale-105 transition-transform origin-left">
                    {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-zinc-300 italic mb-8 text-base leading-relaxed relative z-10 group-hover:text-white transition-colors duration-500">"{review.text}"</p>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-gold-500"/>
                    <p className="text-white font-montserrat font-bold uppercase tracking-wider text-sm">{review.name}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Premium Final CTA (Continuous Animated Glow) */}
        <section className="py-40 bg-[#050505] relative border-t border-white/5 overflow-hidden">
           {/* Animated Background Rays */}
           <motion.div 
             animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
             className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0deg,rgba(212,175,55,0.08)_90deg,transparent_180deg)] origin-center opacity-70 pointer-events-none" 
           />
           <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-900/30 via-[#050505] to-[#050505] opacity-90 pointer-events-none" />
           <PremiumHeroBackground />

          <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-[6rem] font-montserrat font-extrabold text-white mb-8 tracking-tighter"
            >
              {/* Continuous Text Glow */}
              <motion.span
                animate={{ textShadow: ["0px 0px 10px rgba(212,175,55,0)", "0px 0px 40px rgba(212,175,55,0.6)", "0px 0px 10px rgba(212,175,55,0)"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                IT'S TIME FOR <span className="text-gradient">SHOWTIME</span>
              </motion.span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.8 }}
              className="text-zinc-300 text-xl md:text-2xl mb-14 font-normal"
            >
              Stop settling for average. Step into our world of precision grooming and experience the luxury you deserve.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.8 }}
            >
              <Magnetic>
                {/* Breathing Button Glow */}
                <motion.div 
                  animate={{ boxShadow: ["0px 0px 30px rgba(212,175,55,0.3)", "0px 0px 60px rgba(212,175,55,0.7)", "0px 0px 30px rgba(212,175,55,0.3)"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-block rounded-lg"
                >
                  <Button onClick={openModal} size="lg" className="px-14 h-16 text-lg font-bold">
                    SECURE YOUR CHAIR <ArrowRight className="ml-3" size={20} />
                  </Button>
                </motion.div>
              </Magnetic>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
