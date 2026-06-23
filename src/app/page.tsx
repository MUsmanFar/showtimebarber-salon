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
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Timeline Line Fill (only keeping essential GSAP)
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
        <section ref={heroRef} className="relative min-h-screen flex items-center pt-20">
          <motion.div style={{ y }} className="absolute inset-0 z-0">
            <Image src="/hero.png" alt="Hero Background" fill className="object-cover opacity-30" priority sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/90 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505]" />
          </motion.div>

          <div className="container relative z-10 mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 mt-10">
            {/* Left 60%: Text & CTA */}
            <div className="w-full lg:w-[60%]">
              <div className="overflow-hidden mb-6">
                <motion.h1 
                  initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                  className="font-montserrat text-6xl md:text-[5.5rem] lg:text-[6.5rem] font-extrabold text-white tracking-tighter leading-[0.9]"
                >
                  PRECISION.<br />
                  STYLE.<br />
                  <span className="text-gradient">CONFIDENCE.</span>
                </motion.h1>
              </div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}
                className="text-zinc-300 text-lg md:text-xl max-w-xl mb-10 font-normal tracking-wide"
              >
                Experience premium grooming, luxury service, and precision craftsmanship in Accokeek, Maryland.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }}
                className="flex flex-col sm:flex-row items-center gap-6"
              >
                <Magnetic>
                  <Button onClick={openModal} size="lg" className="w-full sm:w-auto px-10 h-14 shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] transition-shadow">
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

            {/* Right 40%: Floating Glass Metrics */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.6 }}
              className="w-full lg:w-[40%] hidden md:grid grid-cols-2 gap-6 relative perspective-1000"
            >
              {[
                { title: "4.9", sub: "Average Rating", highlight: true },
                { title: "200+", sub: "Verified Reviews", highlight: false },
                { title: "10+", sub: "Years Experience", highlight: false },
                { title: "5k+", sub: "Happy Clients", highlight: false }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4 + i, ease: "easeInOut" }}
                  className={`glass p-6 rounded-2xl border ${stat.highlight ? 'border-gold-500/50 shadow-[0_0_30px_rgba(212,175,55,0.1)]' : 'border-white/5'} flex flex-col justify-center items-center text-center`}
                >
                  <span className={`font-montserrat font-extrabold text-4xl mb-2 ${stat.highlight ? 'text-gold-500' : 'text-white'}`}>{stat.title}</span>
                  <span className="text-zinc-400 text-sm font-semibold uppercase tracking-wider">{stat.sub}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 2. Why Choose Showtime */}
        <section className="py-32 relative z-10 bg-[#050505]/50">
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
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: i * 0.1 }} className="glass p-8 rounded-2xl border border-white/5 hover:-translate-y-2 hover:border-gold-500/30 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-full bg-black/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <item.icon className="text-gold-500" size={20} />
                  </div>
                  <h3 className="text-xl font-montserrat font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Signature Services */}
        <section className="py-32 relative">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <span className="text-gold-500 font-semibold tracking-widest uppercase text-sm mb-4 block">Grooming Menu</span>
                <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-white tracking-tight">SIGNATURE <span className="text-gradient">SERVICES</span></h2>
              </div>
              <Button variant="outline" onClick={() => window.location.href='/services'}>Full Menu <ArrowRight className="ml-2 w-4 h-4" /></Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Haircut', price: '$45+', duration: '30 MIN', featured: false },
                { title: 'Haircut & Shave', price: '$80+', duration: '60 MIN', featured: true },
                { title: 'Manicure & Pedicure', price: '$60+', duration: '45 MIN', featured: false },
              ].map((svc, i) => (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className={`glass p-8 rounded-2xl flex flex-col justify-between hover:border-gold-500/40 transition-colors ${svc.featured ? 'border-gold-500/50 bg-gold-500/5' : 'border-white/5'}`}>
                  <div>
                    {svc.featured && <span className="text-[10px] bg-gold-500 text-black px-3 py-1 rounded-full font-bold uppercase tracking-widest mb-6 inline-block">Popular</span>}
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-2xl font-montserrat font-semibold text-white">{svc.title}</h3>
                      <span className="text-gold-500 text-xl font-extrabold">{svc.price}</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-500 text-sm mb-8 font-medium">
                      <Clock size={14} /> {svc.duration}
                    </div>
                  </div>
                  <Button variant={svc.featured ? "primary" : "ghost"} className="w-full" onClick={openModal}>Book {svc.title}</Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Experience Journey Timeline */}
        <section className="py-32 relative bg-[#050505]/80">
          <div className="container mx-auto px-4 max-w-4xl" ref={timelineRef}>
            <div className="text-center mb-20">
              <span className="text-gold-500 font-semibold tracking-widest uppercase text-sm mb-4 block">The Process</span>
              <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-white tracking-tight">THE SHOWTIME <span className="text-gradient">JOURNEY</span></h2>
            </div>

            <div className="relative pl-8 md:pl-0">
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2">
                <div className="timeline-line w-full bg-gold-500" />
              </div>

              {[
                { title: 'The Consultation', desc: 'In-depth discussion about your style goals.' },
                { title: 'The Preparation', desc: 'A relaxing hair wash and scalp massage.' },
                { title: 'The Execution', desc: 'Absolute precision cutting, fading, and detailing.' },
                { title: 'The Luxury Finish', desc: 'Hot towel treatment and elite styling.' },
                { title: 'Walk Out Confident', desc: 'Experience the Showtime difference.' },
              ].map((step, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? 30 : -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} className={`relative mb-12 md:w-1/2 ${i % 2 === 0 ? 'md:ml-auto md:pl-12' : 'md:mr-auto md:pr-12 md:text-right'}`}>
                  <div className={`absolute top-1 w-5 h-5 rounded-full bg-black border-2 border-gold-500 ${i % 2 === 0 ? '-left-[22px] md:-left-[10px]' : '-left-[22px] md:auto md:-right-[10px]'}`} />
                  <h3 className="font-montserrat font-semibold text-white text-xl mb-2 flex items-center gap-3 justify-start md:justify-normal">
                    <span className="text-gold-500/30 text-3xl font-extrabold">0{i+1}</span> {step.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Popular Styles Gallery Carousel */}
        <section className="py-24 overflow-hidden border-t border-white/5">
           <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-white tracking-tight">POPULAR <span className="text-gradient">STYLES</span></h2>
            </div>
          <div className="flex gap-4 whitespace-nowrap px-4 w-[200%]">
            <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ repeat: Infinity, duration: 30, ease: "linear" }} className="flex gap-4">
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
                <div key={idx} className="relative w-[280px] h-[350px] rounded-2xl overflow-hidden shrink-0 group border border-white/10">
                  <Image src={style.img} alt={style.title} fill sizes="(max-width: 768px) 100vw, 280px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
                  <div className="absolute bottom-6 left-6 right-6">
                     <span className="font-montserrat font-semibold text-white text-lg tracking-wide">{style.title}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 6. Customer Testimonials */}
        <section className="py-32 relative bg-[#050505]">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <span className="text-gold-500 font-semibold tracking-widest uppercase text-sm mb-4 block">Real Results</span>
              <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-white tracking-tight">CLIENT <span className="text-gradient">REVIEWS</span></h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: 'Michael R.', text: 'Best haircut I have ever had. The attention to detail is unmatched, and the hot towel shave is a game changer.' },
                { name: 'James T.', text: 'Showtime truly lives up to its name. The vibe is premium, the barbers are professional, and the result is always a 10/10.' },
                { name: 'David L.', text: 'A masterclass in grooming. They take their time and ensure you look completely sharp before you leave.' }
              ].map((review, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.5 }} className="glass p-8 rounded-2xl relative border border-white/5">
                  <Quote className="text-gold-500/10 absolute top-6 right-6" size={60} />
                  <div className="flex text-gold-500 mb-6">
                    {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-zinc-300 italic mb-6 text-sm leading-relaxed relative z-10">"{review.text}"</p>
                  <p className="text-white font-montserrat font-semibold uppercase tracking-wider text-sm flex items-center gap-2"><CheckCircle2 size={14} className="text-gold-500"/> {review.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. FAQs */}
        <section className="py-32 border-t border-white/5">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-white tracking-tight">FREQUENTLY ASKED <span className="text-gradient">QUESTIONS</span></h2>
            </div>
            <div className="space-y-4">
              {[
                { q: "Do I need to book an appointment?", a: "While we do accept walk-ins based on availability, we highly recommend booking an appointment to secure your preferred time and barber." },
                { q: "What is included in The Full Premium?", a: "The Full Premium includes our signature Showtime Cut, an Executive Hot Towel Shave, a relaxing facial massage, and styling with luxury products." },
                { q: "Do you offer services for children?", a: "Yes, we provide premium grooming services for clients of all ages. However, we ask that children remain seated and supervised." },
              ].map((faq, i) => (
                <details key={i} className="group glass rounded-2xl border border-white/5 p-6 [&_summary::-webkit-details-marker]:hidden hover:border-gold-500/20 transition-colors cursor-pointer">
                  <summary className="flex items-center justify-between gap-4 text-white font-montserrat font-semibold text-lg outline-none">
                    {faq.q}
                    <span className="shrink-0 rounded-full bg-gold-500/10 p-2 text-gold-500 group-open:-rotate-180 transition-transform duration-300">
                      <ChevronRight size={20} />
                    </span>
                  </summary>
                  <p className="mt-4 text-zinc-400 text-sm leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Premium Final CTA */}
        <section className="py-32 bg-[#050505] relative border-t border-white/5 overflow-hidden">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold-900/20 via-transparent to-transparent" />
          <div className="container mx-auto px-4 text-center max-w-3xl relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-montserrat font-extrabold text-white mb-6 tracking-tighter"
            >
              IT'S TIME FOR <span className="text-gradient">SHOWTIME</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }}
              className="text-zinc-400 text-lg md:text-xl mb-12 font-normal"
            >
              Step into our world of precision grooming and experience the luxury you deserve.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Button onClick={openModal} size="lg" className="px-12 h-16 text-lg font-bold shadow-[0_0_40px_rgba(212,175,55,0.3)]">
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
