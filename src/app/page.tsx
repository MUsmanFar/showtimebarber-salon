"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Magnetic } from '@/components/ui/Magnetic';
import { useBooking } from '@/components/BookingModal';
import { Scissors, Shield, Star, Sparkles, Quote, ArrowRight, Clock, ChevronRight, CheckCircle2 } from 'lucide-react';

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
          <div className="container relative z-10 mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 mt-10 lg:mt-0">
            {/* Left 60%: Text & CTA */}
            <div className="w-full lg:w-[55%]">
              <div className="mb-6">
                <motion.h1 
                  initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                  className="font-montserrat text-5xl md:text-[4.5rem] lg:text-[5.5rem] font-extrabold text-white tracking-tighter leading-[1.05]"
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
                className="flex flex-col sm:flex-row items-center gap-6"
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
            </div>

            {/* Right 45%: Premium 3D Barber Composition */}
            <motion.div 
              style={{ y }}
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.6 }}
              className="w-full lg:w-[45%] relative hidden md:block aspect-[4/5] lg:aspect-auto lg:h-[700px] mt-10 lg:mt-0"
            >
              {/* Main Image */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-0">
                <Image src="/hero.png" alt="Premium Barber Service" fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gold-500/5 mix-blend-overlay" />
              </div>

              {/* Floating Element 1: Rating Card */}
              <motion.div 
                animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute top-12 -left-12 z-10 glass px-6 py-4 rounded-2xl border border-gold-500/30 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl flex items-center gap-4"
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
                animate={{ y: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-24 -right-8 z-10 glass px-6 py-4 rounded-2xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl"
              >
                <div className="text-gold-500 text-xs font-bold uppercase tracking-widest mb-1">Experience</div>
                <div className="text-xl font-extrabold font-montserrat text-white leading-none">Luxury Grooming</div>
              </motion.div>

              {/* Floating Element 3: Scissors Icon */}
              <motion.div 
                animate={{ rotate: [0, 10, 0], y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 2 }}
                className="absolute top-1/2 -right-6 z-10 w-16 h-16 rounded-full glass border border-gold-500/50 flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.2)]"
              >
                <Scissors className="text-gold-500" size={28} />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* 2. Why Choose Showtime (Charcoal Grid Background) */}
        <section className="py-32 relative z-10 bg-[#0c0c0c] bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]">
          <div className="container mx-auto px-4 max-w-7xl">
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
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: i * 0.1 }} className="glass p-8 rounded-2xl border border-white/5 bg-[#111]/80 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] hover:border-gold-500/30 transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-full bg-black/50 border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-gold-500/10 transition-transform">
                    <item.icon className="text-gold-500" size={24} />
                  </div>
                  <h3 className="text-xl font-montserrat font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Signature Services (Luxury Gradient Overlay) */}
        <section className="py-32 relative bg-gradient-to-br from-[#050505] via-[#0a0a0a] to-[#1a1400]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.05),transparent_50%)]" />
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
                <motion.div key={i} initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className={`glass p-8 rounded-2xl flex flex-col justify-between hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(212,175,55,0.2)] transition-all duration-500 group ${svc.featured ? 'border-gold-500/50 bg-gold-500/5' : 'border-white/5 bg-white/[0.02]'}`}>
                  <div>
                    {svc.featured && <span className="text-[10px] bg-gold-500 text-black px-3 py-1 rounded-full font-bold uppercase tracking-widest mb-6 inline-block shadow-[0_0_20px_rgba(212,175,55,0.3)]">Popular</span>}
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-2xl font-montserrat font-semibold text-white group-hover:text-gold-500 transition-colors">{svc.title}</h3>
                      <span className="text-gold-500 text-xl font-extrabold">{svc.price}</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-500 text-sm mb-8 font-medium">
                      <Clock size={14} /> {svc.duration}
                    </div>
                  </div>
                  <Button variant={svc.featured ? "primary" : "outline"} className={`w-full ${!svc.featured && 'border-white/10 text-white hover:border-gold-500 hover:text-gold-500'}`} onClick={openModal}>Book {svc.title}</Button>
                  {/* Hover Edge Glow */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gold-500/30 transition-colors pointer-events-none" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Experience Journey Timeline (Vertical Spotlights) */}
        <section className="py-32 relative bg-[#080808]">
          <div className="absolute left-1/2 top-0 bottom-0 w-full max-w-lg -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.03),transparent_70%)] pointer-events-none" />
          <div className="container mx-auto px-4 max-w-4xl relative z-10" ref={timelineRef}>
            <div className="text-center mb-20">
              <span className="text-gold-500 font-semibold tracking-widest uppercase text-sm mb-4 block">The Process</span>
              <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-white tracking-tight">THE SHOWTIME <span className="text-gradient">JOURNEY</span></h2>
            </div>

            <div className="relative pl-8 md:pl-0">
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/5 -translate-x-1/2">
                <div className="timeline-line w-full bg-gradient-to-b from-gold-400 to-gold-600 shadow-[0_0_20px_rgba(212,175,55,0.8)]" />
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

        {/* 5. Popular Styles Gallery Carousel (Dark Design) */}
        <section className="py-24 overflow-hidden bg-[#0c0c0c] border-y border-white/5 relative">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(255,255,255,0.02),transparent_50%)]" />
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
                <div key={idx} className="relative w-[300px] h-[400px] rounded-3xl overflow-hidden shrink-0 group border border-white/5 shadow-xl bg-black">
                  <Image src={style.img} alt={style.title} fill sizes="(max-width: 768px) 100vw, 300px" className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                     <div className="glass px-4 py-2 rounded-xl border border-white/10 backdrop-blur-md inline-block">
                       <span className="font-montserrat font-semibold text-white text-sm tracking-wide uppercase">{style.title}</span>
                     </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 6. Customer Testimonials (Glassmorphism Wrap) */}
        <section className="py-32 relative bg-[url('/noise.png')] bg-[#111]">
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80" />
          <div className="container mx-auto px-4 max-w-7xl relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-10">
              <div className="text-center md:text-left">
                <span className="text-gold-500 font-semibold tracking-widest uppercase text-sm mb-4 block">Real Results</span>
                <h2 className="text-4xl md:text-6xl font-montserrat font-bold text-white tracking-tight">CLIENT <span className="text-gradient">REVIEWS</span></h2>
              </div>
              <div className="glass p-6 rounded-2xl flex items-center gap-6 border border-gold-500/30 shadow-[0_10px_40px_rgba(212,175,55,0.15)] bg-black/40">
                <div className="text-5xl font-extrabold font-montserrat text-white">4.9</div>
                <div>
                  <div className="flex text-gold-500 mb-1">
                    {[...Array(5)].map((_, j) => <Star key={j} size={20} fill="currentColor" />)}
                  </div>
                  <span className="text-zinc-400 text-sm font-semibold tracking-wide">200+ Reviews | 5k+ Clients</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: 'Michael R.', text: 'Best haircut I have ever had. The attention to detail is unmatched, and the hot towel shave is a game changer.' },
                { name: 'James T.', text: 'Showtime truly lives up to its name. The vibe is premium, the barbers are professional, and the result is always a 10/10.' },
                { name: 'David L.', text: 'A masterclass in grooming. They take their time and ensure you look completely sharp before you leave.' }
              ].map((review, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.5 }} className="glass p-10 rounded-3xl relative border border-white/10 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] transition-all bg-black/60 group">
                  <Quote className="text-gold-500/10 absolute top-8 right-8 group-hover:text-gold-500/20 transition-colors" size={60} />
                  <div className="flex text-gold-500 mb-6">
                    {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-zinc-300 italic mb-8 text-base leading-relaxed relative z-10">"{review.text}"</p>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-gold-500"/>
                    <p className="text-white font-montserrat font-bold uppercase tracking-wider text-sm">{review.name}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Premium Final CTA (Gold Ambient Glow) */}
        <section className="py-40 bg-[#050505] relative border-t border-white/5 overflow-hidden">
           <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-900/40 via-[#050505] to-[#050505] opacity-80" />
           {/* Animated Particles */}
           <motion.div animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }} transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }} className="absolute top-20 left-[20%] w-2 h-2 bg-gold-500 rounded-full blur-[2px]" />
           <motion.div animate={{ y: [0, 30, 0], opacity: [0.2, 0.5, 0.2] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 2 }} className="absolute bottom-40 right-[25%] w-3 h-3 bg-gold-500 rounded-full blur-[3px]" />

          <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-[5.5rem] font-montserrat font-extrabold text-white mb-8 tracking-tighter"
            >
              IT'S TIME FOR <span className="text-gradient">SHOWTIME</span>
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
              <Button onClick={openModal} size="lg" className="px-14 h-16 text-lg font-bold shadow-[0_0_60px_rgba(212,175,55,0.4)] hover:shadow-[0_0_100px_rgba(212,175,55,0.7)] transition-shadow">
                SECURE YOUR CHAIR <ArrowRight className="ml-3" size={20} />
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
