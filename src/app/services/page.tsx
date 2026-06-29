"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { useBooking } from '@/components/BookingModal';
import { Sparkles, Scissors, Droplets } from 'lucide-react';

type ServiceCategory = {
  id: string;
  name: string;
  description: string;
  icon: any;
  items: {
    name: string;
    desc: string;
    img: string;
  }[];
};

const serviceCategories: ServiceCategory[] = [
  {
    id: "cutting-styling",
    name: "Cutting & Styling",
    description: "Precision cuts and masterful styling tailored to your unique features and lifestyle.",
    icon: Scissors,
    items: [
      { name: "Cut & Style", desc: "A precision haircut followed by a professional blowout and styling.", img: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800" },
      { name: "Cut Only", desc: "Expert precision haircut tailored to your face shape and hair texture.", img: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800" },
      { name: "Style Only", desc: "Professional blowout and heat styling for a flawless, polished look.", img: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800" },
      { name: "Updo / Special Style", desc: "Elegant, long-lasting up-styles perfect for weddings and special events.", img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800" },
      { name: "Men's Cut", desc: "Tailored men's haircut with detailed texturing and clean finishes.", img: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800" },
      { name: "Kids 12 & Under", desc: "Gentle, stylish haircuts for our younger guests.", img: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=800" },
    ]
  },
  {
    id: "chemical-services",
    name: "Chemical Services",
    description: "Transformative color, highlights, and texturizing treatments using premium products.",
    icon: Sparkles,
    items: [
      { name: "Perm", desc: "Add beautiful, lasting body and curl to your hair.", img: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&q=80&w=800" },
      { name: "Single Process", desc: "All-over rich, vibrant hair color for full coverage.", img: "https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&q=80&w=800" },
      { name: "Partial Highlight", desc: "Strategic dimension and brightness focused around the face and crown.", img: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=800" },
      { name: "Full Highlight", desc: "Comprehensive lightening for maximum dimension and impact.", img: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&q=80&w=800" },
      { name: "Toner / Glaze", desc: "Enhance shine and perfect your hair's tone between color services.", img: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=800" },
      { name: "Smoothing Treatment", desc: "Advanced smoothing to eliminate frizz and increase manageability.", img: "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?auto=format&fit=crop&q=80&w=800" },
      { name: "Keratin Express", desc: "A faster smoothing solution for silky, frizz-free hair.", img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800" },
    ]
  },
  {
    id: "nails-waxing",
    name: "Nails & Waxing",
    description: "Finishing touches for a polished, immaculate look.",
    icon: Droplets,
    items: [
      { name: "Manicure", desc: "Classic nail care, shaping, and precise polish application.", img: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=800" },
      { name: "Gel Full Set", desc: "Durable, high-gloss gel extensions for flawless nails.", img: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=800" },
      { name: "Gel Fill", desc: "Maintenance for your gel set to keep them looking fresh.", img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800" },
      { name: "Polish Change", desc: "A quick refresh of your nail color.", img: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800" },
      { name: "Waxing (Brow, Lip, Chin)", desc: "Gentle and precise facial waxing for perfectly sculpted features.", img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800" },
    ]
  }
];

export default function Services() {
  const { openModal } = useBooking();

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-[#fafafa]">
        {/* Header */}
        <section className="relative pt-40 pb-20 bg-white overflow-hidden border-b border-border-gray/30">
          <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-[radial-gradient(circle,rgba(37,99,235,0.04)_0%,transparent_60%)] -translate-y-1/2 translate-x-1/4" />
          <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-cormorant font-bold text-navy tracking-tighter mb-6"
            >
              OUR <span className="text-royal-blue">SERVICES</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
              className="text-slate-600 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed"
            >
              Experience the pinnacle of luxury beauty. Our master technicians use only the finest techniques and products.
            </motion.p>
          </div>
        </section>

        {/* Categories */}
        <div className="container mx-auto px-4 max-w-7xl py-24 space-y-32">
          {serviceCategories.map((category, catIdx) => (
            <section key={category.id} id={category.id}>
              <div 
                className="mb-12"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-royal-blue/10 flex items-center justify-center text-royal-blue shrink-0">
                    <category.icon size={24} strokeWidth={1.5} />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-cormorant font-bold text-navy tracking-tight">{category.name}</h2>
                </div>
                <p className="text-slate-500 font-light text-lg max-w-2xl">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {category.items.map((svc, i) => (
                  <div 
                    key={i} 
                    className="group flex flex-col rounded-[2rem] overflow-hidden bg-white shadow-sm hover:shadow-[0_20px_40px_rgba(37,99,235,0.08)] hover:-translate-y-2 transition-all duration-500 h-full relative border border-border-gray/50 hover:border-royal-blue/10"
                  >
                    {/* Image Area */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden shrink-0">
                      <Image src={svc.img} alt={svc.name} fill className="object-cover transition-transform duration-[1.5s] ease-[0.25,0.46,0.45,0.94] group-hover:scale-110" />
                      <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-colors duration-500" />
                    </div>
                    
                    {/* Content Area */}
                    <div className="p-6 md:p-8 flex flex-col flex-1 bg-white relative z-0">
                      <h3 className="text-2xl md:text-3xl font-cormorant font-bold text-navy mb-3 group-hover:text-royal-blue transition-colors line-clamp-2">{svc.name}</h3>
                      <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-6 flex-1 font-light line-clamp-4">{svc.desc}</p>
                      
                      {/* Buttons */}
                      <div className="flex flex-col gap-3 mt-auto">
                        <Button className="w-full bg-navy hover:bg-royal-blue text-white shadow-md hover:shadow-lg transition-all h-12" onClick={openModal}>Book Appointment</Button>
                        <Button variant="outline" className="w-full border-border-gray text-navy hover:bg-light-gray transition-colors h-12" onClick={() => window.location.href='/contact'}>Contact Us</Button>
                      </div>
                    </div>

                    {/* Animated Gradient Border */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-navy via-royal-blue to-gold-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-out" />
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
