"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { useBooking } from '@/components/BookingModal';
import { Sparkles, Star, Heart, ArrowRight, CheckCircle2, Droplets, Phone, Scissors, Crown, MapPin } from 'lucide-react';

const PremiumHeroBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    {/* Soft Ambient Glows */}
    <motion.div 
      animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }} 
      transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-0 right-0 w-[80vw] h-[80vw] bg-[radial-gradient(circle,rgba(37,99,235,0.06)_0%,transparent_60%)] -translate-y-1/4 translate-x-1/4" 
    />
    <motion.div 
      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} 
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      className="absolute bottom-0 left-0 w-[60vw] h-[60vw] bg-[radial-gradient(circle,rgba(212,175,55,0.05)_0%,transparent_60%)] translate-y-1/4 -translate-x-1/4" 
    />
    
    {/* Decorative Curved Line */}
    <svg className="absolute w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
      <motion.path 
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, ease: "easeInOut" }}
        d="M0,50 Q25,20 50,50 T100,50" fill="none" stroke="currentColor" strokeWidth="0.1" className="text-royal-blue" 
      />
      <motion.path 
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
        d="M0,80 Q30,100 60,70 T100,80" fill="none" stroke="currentColor" strokeWidth="0.05" className="text-gold-500" 
      />
    </svg>

    {/* Floating Particles */}
    {[...Array(15)].map((_, i) => (
      <motion.div
        key={`particle-${i}`}
        className="absolute w-1.5 h-1.5 bg-royal-blue/20 rounded-full blur-[1px]"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, -Math.random() * 120 - 50, 0],
          x: [0, (Math.random() - 0.5) * 100, 0],
          opacity: [0, Math.random() * 0.5 + 0.2, 0],
          scale: [1, Math.random() * 2 + 0.5, 1],
        }}
        transition={{ duration: Math.random() * 25 + 15, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 5 }}
      />
    ))}
  </div>
);

export default function Home() {
  const { openModal } = useBooking();
  const heroRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const yParallax = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityFade = useTransform(scrollYProgress, [0, 1], [1, 0]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  return (
    <>
      <Navbar />
      <main className="flex-1 overflow-hidden bg-white text-navy font-poppins">
        
        {/* 1. Hero Section (Ken Burns, Parallax, Glass Reflection) */}
        <section ref={heroRef} className="relative min-h-screen flex items-center pt-24 bg-white overflow-hidden">
          <PremiumHeroBackground />
          <motion.div style={{ y: yParallax, opacity: opacityFade }} className="absolute inset-0 w-full h-full z-0 opacity-[0.9]">
            <motion.div 
              animate={{ scale: [1, 1.05, 1] }} 
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="w-full h-full origin-center"
            >
              <Image 
                src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&q=80&w=2000" 
                alt="Luxury Salon Interior" 
                fill 
                className="object-cover"
                priority
              />
            </motion.div>
            {/* Subtle elegant gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-90" />
          </motion.div>

          <div className="container relative z-10 mx-auto px-4 md:px-8 mt-10 lg:mt-0">
            <motion.div 
              initial={{ opacity: 0, x: -40, filter: 'blur(10px)' }} 
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }} 
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} 
              className="glass max-w-2xl p-10 md:p-14 rounded-[2.5rem] border border-white/60 shadow-[0_30px_80px_rgba(37,99,235,0.12)] bg-white/70 backdrop-blur-3xl overflow-hidden relative"
            >
              {/* Glass Reflection Sweep */}
              <motion.div 
                animate={{ x: ['-200%', '200%'] }} 
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 z-0" 
              />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-10 h-[1px] bg-gold-600 block"></span>
                  <span className="text-gold-600 font-bold tracking-widest uppercase text-xs">Est. 1974 • Medford, NJ</span>
                </div>
                <h1 className="font-cormorant text-5xl md:text-6xl lg:text-7xl font-bold text-navy tracking-tight leading-[1.1] mb-6 drop-shadow-sm">
                  Luxury Hair.<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal-blue to-navy">Timeless Beauty.</span>
                </h1>
                <p className="text-slate-600 text-lg md:text-xl mb-10 leading-relaxed font-light">
                  Proudly serving Medford, NJ for over 50 years with professional hair styling, coloring, spa, nail and beauty services.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <Button onClick={openModal} size="lg" className="group relative overflow-hidden w-full sm:w-auto px-10 h-14 bg-navy hover:bg-royal-blue text-white shadow-xl hover:shadow-[0_15px_30px_rgba(37,99,235,0.3)] transition-all duration-500">
                    <span className="relative z-10 flex items-center">Book Appointment</span>
                  </Button>
                  <Button variant="outline" size="lg" className="group w-full sm:w-auto px-10 h-14 border-border-gray text-navy hover:bg-light-gray hover:border-royal-blue/30 transition-all duration-500" onClick={() => window.location.href='/services'}>
                    <span className="flex items-center">Explore Services <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 2. Trust Indicators (Staggered fade up) */}
        <section className="py-20 bg-white relative z-20 border-b border-border-gray/30">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-border-gray/50">
              {[
                { label: "Years Experience", value: "50+", icon: Crown },
                { label: "Professional Stylists", value: "15+", icon: Scissors },
                { label: "Happy Clients", value: "1000+", icon: Heart },
                { label: "Convenient Locations", value: "2", icon: MapPin },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center justify-center group cursor-default">
                  <stat.icon className="text-gold-500 mb-5 group-hover:scale-125 group-hover:-translate-y-2 transition-all duration-500" size={36} strokeWidth={1.5} />
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-cormorant font-bold text-navy mb-2">{stat.value}</h3>
                  <p className="text-slate-500 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Featured Services (Distinct High-Quality Images, Lift, Gradient Hover) */}
        <section className="py-32 bg-[#fafafa] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[radial-gradient(circle,rgba(37,99,235,0.03)_0%,transparent_70%)] translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-[radial-gradient(circle,rgba(212,175,55,0.03)_0%,transparent_70%)] -translate-x-1/3 translate-y-1/3" />
          
          <div className="container mx-auto px-4 max-w-7xl relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
              <div>
                <span className="text-gold-600 font-bold tracking-widest uppercase text-xs mb-4 block">Our Expertise</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-cormorant font-bold text-navy tracking-tight">FEATURED <span className="text-royal-blue">SERVICES</span></h2>
              </div>
              <Button variant="outline" className="border-border-gray text-navy hover:bg-white group" onClick={() => window.location.href='/services'}>
                View All Services <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                { title: 'Cut & Style', img: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800', desc: 'Precision haircut and professional styling tailored to your look.', icon: Scissors },
                { title: 'Hair Coloring & Highlights', img: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&q=80&w=800', desc: 'Single process color, highlights and custom color treatments.', icon: Sparkles },
                { title: 'Keratin & Smoothing Treatment', img: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800', desc: 'Reduce frizz and achieve silky, healthy-looking hair with our smoothing treatments.', icon: Droplets },
                { title: 'Nails', img: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=800', desc: 'Professional manicure, gel sets and nail care in a relaxing environment.', icon: Star },
                { title: 'Waxing', img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800', desc: 'Gentle facial waxing services including brows, lips and chin.', icon: Star },
                { title: 'Updo & Special Occasion Styling', img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800', desc: 'Beautiful hairstyles for weddings, parties and special occasions.', icon: Star },
              ].map((svc, i) => (
                <div 
                  key={i} 
                  className="group flex flex-col rounded-[2.5rem] overflow-hidden bg-white shadow-sm hover:shadow-[0_30px_60px_rgba(37,99,235,0.08)] hover:-translate-y-3 transition-all duration-500 h-full relative border border-transparent hover:border-royal-blue/10"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden shrink-0">
                    <Image src={svc.img} alt={svc.title} fill className="object-cover transition-transform duration-[1.5s] ease-[0.25,0.46,0.45,0.94] group-hover:scale-110" priority />
                    <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-colors duration-500" />
                    
                    {/* Floating Icon */}
                    <div className="absolute -bottom-6 right-8 w-14 h-14 bg-white rounded-full flex items-center justify-center text-royal-blue shadow-[0_10px_30px_rgba(0,0,0,0.1)] z-10 group-hover:scale-110 group-hover:text-gold-500 transition-all duration-500">
                      <svc.icon size={22} strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="p-6 md:p-8 lg:p-10 flex flex-col flex-1 bg-white relative z-0">
                    <h3 className="text-2xl md:text-3xl font-cormorant font-bold text-navy mb-3 group-hover:text-royal-blue transition-colors line-clamp-2">{svc.title}</h3>
                    <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-6 flex-1 font-light line-clamp-3">{svc.desc}</p>
                    <div className="flex flex-col gap-3 mt-auto">
                       <Button className="w-full bg-navy hover:bg-royal-blue text-white shadow-md hover:shadow-lg transition-all h-12" onClick={openModal}>Book Appointment</Button>
                       <Button variant="outline" className="w-full border-border-gray text-navy hover:bg-light-gray transition-colors h-12" onClick={() => window.location.href='/contact'}>Contact Us</Button>
                    </div>
                  </div>
                  {/* Subtle gradient border highlight on hover */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-navy via-royal-blue to-gold-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-out" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Why Choose Us (Larger images, larger icons, split layout) */}
        <section className="py-32 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              
              {/* Image Left */}
              <div 
                className="relative h-[900px] rounded-[3rem] overflow-hidden shadow-2xl group"
              >
                <Image src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=1200" alt="Professional Salon Services" fill className="object-cover transition-transform duration-[2s] group-hover:scale-105" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
                
                {/* Floating badge */}
                <motion.div 
                  animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                  className="absolute bottom-12 -right-6 lg:-right-12 bg-white/90 backdrop-blur-xl p-8 rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.15)] max-w-[280px] border border-white z-20"
                >
                  <div className="flex text-gold-500 mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                  </div>
                  <p className="text-navy font-cormorant font-bold text-xl leading-tight mb-3">"An unparalleled luxury experience."</p>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">- Sarah M.</p>
                </motion.div>
              </div>

              {/* Text Right */}
              <div>
                <div>
                  <span className="text-gold-600 font-bold tracking-widest uppercase text-xs mb-4 block">The Charles Bruce Standard</span>
                  <h2 className="text-5xl lg:text-6xl font-cormorant font-bold text-navy tracking-tight mb-16">
                    WHY CHOOSE <span className="text-royal-blue">US</span>
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-12">
                  {[
                    { icon: Heart, title: 'Family Owned', desc: 'Three generations of dedication to beauty and excellence in Medford.' },
                    { icon: Crown, title: 'Premium Products', desc: 'We use only the finest professional products for beautiful, lasting results.' },
                    { icon: Sparkles, title: 'Expert Stylists', desc: 'Highly trained professionals passionate about the latest techniques.' },
                    { icon: Droplets, title: 'Relaxing Space', desc: 'A luxurious, comfortable environment designed for your ultimate relaxation.' },
                  ].map((item, i) => (
                    <div 
                      key={i}
                      className="flex flex-col gap-5 group"
                    >
                      <div className="w-16 h-16 shrink-0 rounded-[1.5rem] bg-[#f8f9fa] flex items-center justify-center text-royal-blue border border-border-gray shadow-sm group-hover:bg-royal-blue group-hover:text-white group-hover:scale-110 transition-all duration-300">
                        <item.icon size={28} strokeWidth={1.5} />
                      </div>
                      <div>
                        <h4 className="text-2xl font-cormorant font-bold text-navy mb-3 group-hover:text-royal-blue transition-colors">{item.title}</h4>
                        <p className="text-slate-500 text-sm leading-relaxed font-light">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-16 pt-16 border-t border-border-gray/50">
                   <Button size="lg" className="px-10 h-14 bg-navy hover:bg-royal-blue text-white shadow-xl hover:shadow-[0_15px_30px_rgba(37,99,235,0.2)] transition-all group" onClick={() => window.location.href='/about'}>
                     Read Our Story <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                   </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. CTA Section (Warm radial glow, dark overlay, massive contrast) */}
        <section className="relative py-48 overflow-hidden flex items-center justify-center">
          {/* Background Image */}
          <div className="absolute inset-0">
             <Image src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=2000" alt="Salon Atmosphere" fill className="object-cover" priority />
             {/* Much darker overlay for premium contrast */}
             <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />
             
             {/* Warm radial glow directly behind the card to make it pop */}
             <div 
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-[800px] h-[80vw] max-h-[800px] bg-[radial-gradient(circle,rgba(212,175,55,0.3)_0%,transparent_60%)] z-0"
             />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div 
              className="max-w-4xl mx-auto p-12 md:p-20 rounded-[3rem] text-center bg-white/20 backdrop-blur-2xl border border-white/30 shadow-[0_40px_100px_rgba(0,0,0,0.6)] relative overflow-hidden"
            >
              {/* Internal card glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent z-0" />
              
              <div className="relative z-10">
                <span className="text-gold-300 font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-6 block drop-shadow-md">Look & Feel Your Best</span>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-cormorant font-bold text-white mb-8 tracking-tight drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
                  Ready for Your <span className="text-gold-400 drop-shadow-sm">Next Look?</span>
                </h2>
                <p className="text-white text-lg md:text-xl mb-12 font-light max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                  Step into our world of elegance. Book your appointment today and let our experts bring out your most beautiful you.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <Button onClick={openModal} size="lg" className="px-12 h-16 text-lg font-medium shadow-2xl hover:shadow-[0_20px_40px_rgba(212,175,55,0.4)] bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy w-full sm:w-auto border-none transition-all duration-300 hover:-translate-y-1">
                    Book Appointment <ArrowRight className="ml-3" size={20} />
                  </Button>
                  <Button variant="outline" size="lg" className="px-12 h-16 text-lg font-medium border-white/40 text-white hover:bg-white hover:text-navy w-full sm:w-auto transition-all duration-300 backdrop-blur-md hover:-translate-y-1">
                    <Phone className="mr-3" size={20} /> Call Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
      </main>
      <Footer />
    </>
  );
}
