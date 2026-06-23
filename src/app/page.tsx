"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Magnetic } from '@/components/ui/Magnetic';
import { Scissors, Shield, Star, Sparkles, Quote, ArrowRight } from 'lucide-react';

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Hero Text Reveal
    gsap.fromTo(
      textRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: 'power4.out', delay: 0.2 }
    );

    // Parallax background
    gsap.to('.hero-bg', {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, []);

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-black">
        {/* Cinematic Hero */}
        <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0 hero-bg scale-110">
            <Image
              src="/hero.png"
              alt="Luxury Barber Shop Interior"
              fill
              className="object-cover object-center opacity-60"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black" />
          </div>

          <div className="container relative z-10 mx-auto px-4 text-center mt-20">
            <div className="overflow-hidden mb-6">
              <h1 ref={textRef} className="font-montserrat text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter">
                PRECISION. STYLE.<br />
                <span className="text-gradient">CONFIDENCE.</span>
              </h1>
            </div>
            
            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }}
              className="text-zinc-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light tracking-wide"
            >
              Elevating the standard of men's grooming in Accokeek, MD. Experience luxury, artistry, and a flawless finish.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <Magnetic>
                <Button size="lg" className="px-12 shadow-[0_0_40px_rgba(212,175,55,0.3)]">Book Appointment</Button>
              </Magnetic>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Showtime */}
        <section className="py-32 relative border-t border-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <span className="text-gold-500 font-semibold tracking-widest uppercase text-sm mb-4 block">The Showtime Difference</span>
              <h2 className="text-4xl md:text-5xl font-montserrat font-black text-white tracking-tight">WHY CHOOSE <span className="text-gradient">US</span></h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { icon: Shield, title: 'Master Craftsmanship', desc: 'Our barbers are highly trained artists dedicated to perfecting every fade, line, and contour.' },
                { icon: Sparkles, title: 'Premium Products', desc: 'We strictly use luxury grooming products to protect your hair and skin health.' },
                { icon: Star, title: 'VIP Experience', desc: 'From the hot towel finish to the complimentary beverage, every visit feels like a VIP event.' },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }} className="glass p-10 rounded-2xl border border-white/5 hover:border-gold-500/30 transition-colors group">
                  <div className="w-16 h-16 rounded-full bg-gold-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <item.icon className="text-gold-500" size={32} />
                  </div>
                  <h3 className="text-2xl font-montserrat font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Styles / Gallery Marquee */}
        <section className="py-20 overflow-hidden bg-zinc-950/50">
          <div className="flex gap-8 whitespace-nowrap px-4">
            <motion.div 
              animate={{ x: [0, -1035] }} 
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="flex gap-8"
            >
              {[1, 2, 3, 4, 1, 2].map((i, idx) => (
                <div key={idx} className="relative w-72 h-96 rounded-xl overflow-hidden shrink-0 border border-white/10 group">
                  <Image src={i === 1 ? "/gallery_1.png" : i === 2 ? "/service_fade.png" : "/hero.png"} alt="Style" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Experience Journey Timeline */}
        <section className="py-32 relative">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-5xl font-montserrat font-black text-white tracking-tight">THE SHOWTIME <span className="text-gradient">JOURNEY</span></h2>
            </div>

            <div className="space-y-16 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
              {[
                { title: 'The Consultation', desc: 'We begin with an in-depth discussion about your style goals, hair type, and face shape.' },
                { title: 'The Preparation', desc: 'A relaxing hair wash and scalp massage using premium cleansers.' },
                { title: 'The Execution', desc: 'Precision cutting, fading, and detailing by our master barbers.' },
                { title: 'The Finish', desc: 'Hot towel treatment, razor edge up, and styling with luxury pomades.' },
              ].map((step, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-black bg-gold-500 text-black font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_20px_rgba(212,175,55,0.4)] relative z-10">
                    {i + 1}
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] glass p-6 rounded-xl border border-white/5 hover:border-gold-500/20 transition-colors">
                    <h3 className="font-montserrat font-bold text-white text-xl mb-2">{step.title}</h3>
                    <p className="text-zinc-400 text-sm">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Customer Testimonials */}
        <section className="py-32 bg-zinc-950 border-t border-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-montserrat font-black text-white tracking-tight">CLIENT <span className="text-gradient">TESTIMONIALS</span></h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: 'Michael R.', text: '"Best haircut I have ever had. The attention to detail is unmatched, and the hot towel shave is a game changer. I will not go anywhere else in Accokeek."' },
                { name: 'James T.', text: '"Showtime truly lives up to its name. The vibe is premium, the barbers are extremely professional, and the result is always a 10/10 fade."' },
                { name: 'David L.', text: '"A masterclass in grooming. They take their time and ensure you look completely sharp before you leave the chair. Highly recommend."' }
              ].map((review, i) => (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="glass p-8 rounded-2xl relative">
                  <Quote className="text-white/10 absolute top-6 right-6" size={60} />
                  <div className="flex text-gold-500 mb-6">
                    {[...Array(5)].map((_, j) => <Star key={j} size={18} fill="currentColor" />)}
                  </div>
                  <p className="text-zinc-300 italic mb-6 leading-relaxed">"{review.text}"</p>
                  <p className="text-white font-montserrat font-bold uppercase tracking-wider">{review.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-32">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-4xl md:text-5xl font-montserrat font-black text-white tracking-tight mb-16">FREQUENTLY ASKED <span className="text-gradient">QUESTIONS</span></h2>
            
            <div className="space-y-4 text-left">
              {[
                { q: "Do I need to book an appointment?", a: "While we do accept walk-ins based on availability, we highly recommend booking an appointment to secure your preferred time and barber." },
                { q: "What is included in The Full Premium?", a: "The Full Premium includes our signature Showtime Cut, an Executive Hot Towel Shave, a relaxing facial massage, and styling with luxury products." },
                { q: "Do you offer services for children?", a: "Yes, we provide premium grooming services for clients of all ages. However, we ask that children remain seated and supervised during their visit to maintain our relaxing atmosphere." }
              ].map((faq, i) => (
                <details key={i} className="group glass rounded-lg border border-white/5 p-6 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white font-montserrat font-semibold text-lg">
                    {faq.q}
                    <span className="shrink-0 rounded-full bg-white/5 p-1.5 text-white group-open:-rotate-180 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                    </span>
                  </summary>
                  <p className="mt-4 leading-relaxed text-zinc-400">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 bg-black relative border-t border-white/5 overflow-hidden">
           <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-900/20 via-black to-black" />
          <div className="container mx-auto px-4 text-center max-w-3xl relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-5xl md:text-7xl font-montserrat font-black text-white mb-8"
            >
              READY FOR <span className="text-gradient">SHOWTIME?</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="text-zinc-400 text-xl mb-12"
            >
              Step into our world of precision grooming and experience the luxury you deserve.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
            >
              <Magnetic>
                <Button size="lg" className="w-full sm:w-auto px-16 h-16 text-lg shadow-[0_0_50px_rgba(212,175,55,0.4)]">
                  Book Your Chair <ArrowRight className="ml-2" />
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
