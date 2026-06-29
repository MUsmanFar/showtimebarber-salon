"use client";

import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';

const pricingCategories = [
  {
    category: "Hair Styling",
    services: [
      { name: "Precision Cut", price: "$85+" },
      { name: "Signature Blowout", price: "$65+" },
      { name: "Special Event Styling", price: "$120+" },
      { name: "Bridal Styling", price: "$150+" },
      { name: "Conditioning Treatment", price: "$40+" },
    ]
  },
  {
    category: "Hair Coloring",
    services: [
      { name: "Single Process Color", price: "$110+" },
      { name: "Partial Highlights", price: "$160+" },
      { name: "Full Highlights", price: "$220+" },
      { name: "Luxury Balayage", price: "$250+" },
      { name: "Gloss / Toner", price: "$75+" },
    ]
  },
  {
    category: "Spa & Treatments",
    services: [
      { name: "Advanced Facial", price: "$120+" },
      { name: "Keratin Smoothing", price: "$300+" },
      { name: "Signature Spa Manicure", price: "$50+" },
      { name: "Luxury Pedicure", price: "$75+" },
      { name: "Full Body Waxing", price: "$150+" },
    ]
  }
];

export default function Pricing() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-32 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-cormorant font-bold text-navy tracking-tighter mb-4">
              SALON <span className="text-gradient">PRICING</span>
            </h1>
            <p className="text-slate-600 text-lg font-light">Experience luxury and expertise tailored just for you.</p>
          </div>

          <div className="space-y-16">
            {pricingCategories.map((cat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="glass p-8 md:p-12 rounded-[2rem] border border-border-gray bg-light-gray shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-3xl font-cormorant font-bold text-navy mb-8 pb-4 border-b border-border-gray">{cat.category}</h3>
                <div className="space-y-6">
                  {cat.services.map((service, i) => (
                    <div key={i} className="flex justify-between items-end group">
                      <div className="flex-1 border-b border-dashed border-slate-300 group-hover:border-royal-blue/50 transition-colors pb-1 mr-4">
                        <h4 className="text-lg font-medium text-navy group-hover:text-royal-blue transition-colors">{service.name}</h4>
                      </div>
                      <div className="pb-1">
                        <span className="text-xl font-bold text-royal-blue">{service.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <p className="text-slate-500 mb-8 font-light italic">Prices may vary based on length, thickness of hair, and stylist level.</p>
            <Button size="lg" className="bg-navy hover:bg-royal-blue text-white px-12 h-14" onClick={() => window.location.href='/contact'}>Book Your Consultation</Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
