"use client";

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Magnetic } from '@/components/ui/Magnetic';
import { useBooking } from '@/components/BookingModal';
import { Scissors, Shield, Star, Sparkles, Quote, ArrowRight, Clock, MapPin, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function Home() {
  const { openModal } = useBooking();
  const heroRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  
  // Framer Motion Parallax
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Hero Text Mask Reveal
    gsap.fromTo(
      textRef.current,
      { y: 150, opacity: 0, skewY: 10 },
      { y: 0, opacity: 1, skewY: 0, duration: 1.5, ease: 'power4.out', delay: 0.3 }
    );

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
        {/* 1. Cinematic Hero Section */}
        <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
          <motion.div style={{ y }} className="absolute inset-0 z-0 scale-110">
            {/* Fallback Image. User will replace with <video autoPlay loop muted> */}
            <Image src="/hero.png" alt="Hero Background" fill className="object-cover opacity-50" priority sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-[#050505]" />
          </motion.div>

          <div className="container relative z-10 mx-auto px-4 text-center mt-10">
            <div className="overflow-hidden mb-6 pb-2">
              <h1 ref={textRef} className="font-montserrat text-6xl md:text-8xl lg:text-[8rem] font-black text-white tracking-tighter leading-[0.9]">
                PRECISION.<br />
                STYLE.<br />
                <span className="text-gradient">CONFIDENCE.</span>
              </h1>
            </div>
            
            <motion.p
              initial={{ opacity: 0, filter: "blur(10px)" }} animate={{ opacity: 1, filter: "blur(0px)" }} transition={{ duration: 1, delay: 1 }}
              className="text-zinc-300 text-lg md:text-2xl max-w-2xl mx-auto mb-12 font-light tracking-wide"
            >
              Experience premium grooming, luxury service, and precision craftsmanship in Accokeek, Maryland.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <Magnetic>
                <Button onClick={openModal} size="lg" className="w-full sm:w-auto px-12 h-16 shadow-[0_0_50px_rgba(212,175,55,0.4)]">
                  Book Now
                </Button>
              </Magnetic>
              <Magnetic>
                <Button variant="ghost" size="lg" className="w-full sm:w-auto h-16" onClick={() => window.location.href='tel:7036233017'}>
                  Call (703) 623-3017
                </Button>
              </Magnetic>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          >
            <span className="text-[10px] tracking-[0.3em] text-zinc-500 uppercase font-semibold">Scroll</span>
            <motion.div animate={{ height: ["0px", "40px", "0px"], y: [0, 20, 40] }} transition={{ repeat: Infinity, duration: 2 }} className="w-[1px] bg-gold-500" />
          </motion.div>
        </section>

        {/* 2. Why Choose Showtime */}
        <section className="py-32 relative z-10 bg-[#050505]">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-24">
              <span className="text-gold-500 font-semibold tracking-widest uppercase text-sm mb-4 block">The Showtime Difference</span>
              <h2 className="text-4xl md:text-6xl font-montserrat font-black text-white tracking-tight">WHY CHOOSE <span className="text-gradient">US</span></h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Scissors, title: 'Master Craftsmanship', desc: 'Highly trained artists dedicated to perfecting every fade, line, and contour.' },
                { icon: Sparkles, title: 'Premium Products', desc: 'We strictly use luxury grooming products to protect your hair and skin health.' },
                { icon: Star, title: 'VIP Experience', desc: 'From the hot towel finish to the beverage, every visit feels like a VIP event.' },
                { icon: Shield, title: 'Attention to Detail', desc: 'No rushed cuts. We allocate proper time to ensure flawless, lasting results.' },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="glass p-8 rounded-2xl border border-white/5 hover:-translate-y-2 hover:border-gold-500/40 transition-all duration-500 group">
                  <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(212,175,55,0.15)] group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all">
                    <item.icon className="text-gold-500" size={24} />
                  </div>
                  <h3 className="text-xl font-montserrat font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Signature Services */}
        <section className="py-32 relative overflow-hidden">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div>
                <span className="text-gold-500 font-semibold tracking-widest uppercase text-sm mb-4 block">Grooming Menu</span>
                <h2 className="text-4xl md:text-6xl font-montserrat font-black text-white tracking-tight">SIGNATURE <span className="text-gradient">SERVICES</span></h2>
              </div>
              <Magnetic>
                <Button variant="outline" onClick={() => window.location.href='/services'}>View Full Menu <ArrowRight className="ml-2 w-4 h-4" /></Button>
              </Magnetic>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Haircut', price: '$45+', duration: '30 MIN', featured: false },
                { title: 'Haircut & Shave', price: '$80+', duration: '60 MIN', featured: true },
                { title: 'Manicure & Pedicure', price: '$60+', duration: '45 MIN', featured: false },
              ].map((svc, i) => (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`glass p-8 rounded-2xl flex flex-col justify-between hover:scale-[1.02] transition-transform duration-500 ${svc.featured ? 'border-gold-500/50 shadow-[0_0_40px_rgba(212,175,55,0.1)]' : 'border-white/5'}`}>
                  <div>
                    {svc.featured && <span className="text-[10px] bg-gold-500 text-black px-3 py-1 rounded-full font-bold uppercase tracking-widest mb-6 inline-block">Popular</span>}
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-2xl font-montserrat font-bold text-white">{svc.title}</h3>
                      <span className="text-gold-500 text-xl font-black">{svc.price}</span>
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

        {/* 4. Transformation Gallery (Before/After Hover simulation) */}
        <section className="py-32 bg-black relative border-y border-white/5">
           <div className="container mx-auto px-4 max-w-7xl text-center">
             <h2 className="text-4xl md:text-6xl font-montserrat font-black text-white tracking-tight mb-20">THE <span className="text-gradient">TRANSFORMATION</span></h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="relative aspect-[4/5] rounded-3xl overflow-hidden group cursor-ew-resize border border-white/10">
                 <Image src="/hero.png" alt="Before" fill className="object-cover filter grayscale" sizes="(max-width: 768px) 100vw, 50vw" />
                 <div className="absolute top-6 left-6 glass px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase">Before</div>
                 <div className="absolute inset-0 w-[50%] overflow-hidden group-hover:w-full transition-all duration-700 ease-out border-r-2 border-gold-500 shadow-[20px_0_50px_rgba(0,0,0,0.5)]">
                    <Image src="/service_fade.png" alt="After" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                    <div className="absolute top-6 right-6 bg-gold-500 text-black px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase">After</div>
                 </div>
               </div>
               <div className="relative aspect-[4/5] rounded-3xl overflow-hidden group cursor-ew-resize border border-white/10 hidden md:block">
                 <Image src="/gallery_1.png" alt="Before" fill className="object-cover filter grayscale" sizes="(max-width: 768px) 100vw, 50vw" />
                 <div className="absolute top-6 left-6 glass px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase">Before</div>
                 <div className="absolute inset-0 w-[50%] overflow-hidden group-hover:w-full transition-all duration-700 ease-out border-r-2 border-gold-500 shadow-[20px_0_50px_rgba(0,0,0,0.5)]">
                    <Image src="/hero.png" alt="After" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                    <div className="absolute top-6 right-6 bg-gold-500 text-black px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase">After</div>
                 </div>
               </div>
             </div>
           </div>
        </section>

        {/* 5. Experience Journey Timeline */}
        <section className="py-32 relative bg-[#050505]">
          <div className="container mx-auto px-4 max-w-4xl" ref={timelineRef}>
            <div className="text-center mb-24">
              <span className="text-gold-500 font-semibold tracking-widest uppercase text-sm mb-4 block">The Process</span>
              <h2 className="text-4xl md:text-6xl font-montserrat font-black text-white tracking-tight">THE SHOWTIME <span className="text-gradient">JOURNEY</span></h2>
            </div>

            <div className="relative pl-8 md:pl-0">
              {/* Animated Timeline Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2">
                <div className="timeline-line w-full bg-gold-500 shadow-[0_0_15px_rgba(212,175,55,1)]" />
              </div>

              {[
                { title: 'The Consultation', desc: 'In-depth discussion about your style goals, hair type, and face shape to design the perfect cut.' },
                { title: 'The Preparation', desc: 'A relaxing hair wash and scalp massage using premium cleansers to reset the canvas.' },
                { title: 'The Execution', desc: 'Absolute precision cutting, fading, and detailing by our master barbers.' },
                { title: 'The Luxury Finish', desc: 'Hot towel treatment, razor edge up, and elite styling with our signature products.' },
                { title: 'Walk Out Confident', desc: 'Look in the mirror and experience the Showtime difference.' },
              ].map((step, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className={`relative mb-16 md:w-1/2 ${i % 2 === 0 ? 'md:ml-auto md:pl-16' : 'md:mr-auto md:pr-16 md:text-right'}`}>
                  <div className={`absolute top-0 w-6 h-6 rounded-full bg-black border-4 border-gold-500 shadow-[0_0_20px_rgba(212,175,55,0.6)] ${i % 2 === 0 ? '-left-[27px] md:-left-[12px]' : '-left-[27px] md:auto md:-right-[12px]'}`} />
                  <h3 className="font-montserrat font-black text-white text-2xl mb-3 flex items-center gap-4 justify-start md:justify-normal">
                    <span className="text-gold-500/20 text-5xl">0{i+1}</span> {step.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed text-lg">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Popular Styles & 7. Client Results Marquee */}
        <section className="py-24 overflow-hidden border-t border-white/5">
           <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-montserrat font-black text-white tracking-tight">POPULAR <span className="text-gradient">STYLES</span></h2>
            </div>
          <div className="flex gap-6 whitespace-nowrap px-4 w-[200%]">
            <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ repeat: Infinity, duration: 25, ease: "linear" }} className="flex gap-6">
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
                <div key={idx} className="relative w-[300px] h-[400px] rounded-2xl overflow-hidden shrink-0 group cursor-pointer border border-white/10 shadow-2xl">
                  <Image src={style.img} alt={style.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="300px" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                     <span className="font-montserrat font-bold text-white text-xl tracking-wide">{style.title}</span>
                     <div className="w-10 h-10 rounded-full bg-gold-500 text-black flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                       <ArrowRight size={20} />
                     </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 8. Customer Testimonials */}
        <section className="py-32 relative bg-[#050505]">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-10">
              <div className="text-center md:text-left">
                <span className="text-gold-500 font-semibold tracking-widest uppercase text-sm mb-4 block">Real Results</span>
                <h2 className="text-4xl md:text-6xl font-montserrat font-black text-white tracking-tight">CLIENT <span className="text-gradient">REVIEWS</span></h2>
              </div>
              <div className="glass p-6 rounded-2xl flex items-center gap-6 border border-gold-500/20 shadow-[0_0_30px_rgba(212,175,55,0.1)]">
                <div className="text-5xl font-black font-montserrat text-white">4.9</div>
                <div>
                  <div className="flex text-gold-500 mb-1">
                    {[...Array(5)].map((_, j) => <Star key={j} size={20} fill="currentColor" />)}
                  </div>
                  <span className="text-zinc-400 text-sm">200+ Reviews | 5k+ Clients</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: 'Michael R.', text: 'Best haircut I have ever had. The attention to detail is unmatched, and the hot towel shave is a game changer. I will not go anywhere else in Accokeek.' },
                { name: 'James T.', text: 'Showtime truly lives up to its name. The vibe is premium, the barbers are extremely professional, and the result is always a 10/10 fade.' },
                { name: 'David L.', text: 'A masterclass in grooming. They take their time and ensure you look completely sharp before you leave the chair. Highly recommend.' }
              ].map((review, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }} className="glass p-10 rounded-3xl relative border border-white/5 hover:border-gold-500/30 transition-colors group">
                  <Quote className="text-gold-500/10 absolute top-8 right-8 group-hover:text-gold-500/20 transition-colors" size={80} />
                  <div className="flex text-gold-500 mb-8">
                    {[...Array(5)].map((_, j) => <Star key={j} size={18} fill="currentColor" />)}
                  </div>
                  <p className="text-zinc-300 italic mb-8 text-lg leading-relaxed relative z-10">"{review.text}"</p>
                  <p className="text-white font-montserrat font-bold uppercase tracking-wider flex items-center gap-2"><CheckCircle2 size={16} className="text-gold-500"/> {review.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. FAQs */}
        <section className="py-32 border-t border-white/5">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-montserrat font-black text-white tracking-tight">FREQUENTLY ASKED <span className="text-gradient">QUESTIONS</span></h2>
            </div>
            <div className="space-y-4">
              {[
                { q: "Do I need to book an appointment?", a: "While we do accept walk-ins based on availability, we highly recommend booking an appointment to secure your preferred time and barber and avoid wait times." },
                { q: "What is included in The Full Premium?", a: "The Full Premium includes our signature Showtime Cut, an Executive Hot Towel Shave, a relaxing facial massage, and styling with luxury products." },
                { q: "Do you offer services for children?", a: "Yes, we provide premium grooming services for clients of all ages. However, we ask that children remain seated and supervised to maintain our relaxing luxury atmosphere." },
                { q: "What products do you use?", a: "We exclusively use top-tier, professional-grade grooming products that protect your hair and skin, ensuring long-lasting style and health." }
              ].map((faq, i) => (
                <details key={i} className="group glass rounded-2xl border border-white/5 p-8 [&_summary::-webkit-details-marker]:hidden hover:border-gold-500/20 transition-colors cursor-pointer">
                  <summary className="flex items-center justify-between gap-4 text-white font-montserrat font-bold text-xl outline-none">
                    {faq.q}
                    <span className="shrink-0 rounded-full bg-gold-500/10 p-2 text-gold-500 group-open:-rotate-180 transition-transform duration-500">
                      <ChevronRight size={24} />
                    </span>
                  </summary>
                  <p className="mt-6 text-lg leading-relaxed text-zinc-400">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 10. Premium Final CTA */}
        <section className="py-40 bg-black relative border-t border-white/5 overflow-hidden">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold-900/30 via-black to-black opacity-60" />
          <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="text-5xl md:text-8xl font-montserrat font-black text-white mb-8 tracking-tighter"
            >
              IT'S TIME FOR <span className="text-gradient">SHOWTIME</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.8 }}
              className="text-zinc-400 text-xl md:text-2xl mb-16 font-light"
            >
              Stop settling for average. Step into our world of precision grooming and experience the luxury you deserve.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.8 }}
            >
              <Magnetic>
                <Button onClick={openModal} size="lg" className="px-16 h-20 text-xl font-black shadow-[0_0_60px_rgba(212,175,55,0.5)] hover:shadow-[0_0_80px_rgba(212,175,55,0.7)] transition-shadow">
                  SECURE YOUR CHAIR <ArrowRight className="ml-4" size={24} />
                </Button>
              </Magnetic>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
