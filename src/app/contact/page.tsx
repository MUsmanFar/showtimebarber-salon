"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { Magnetic } from '@/components/ui/Magnetic';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    try {
      const res = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) setSubmitted(true);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-32 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-cormorant font-bold text-navy tracking-tighter mb-4">
              BOOK YOUR <span className="text-gradient">APPOINTMENT</span>
            </h1>
            <p className="text-slate-600 text-lg font-light">Secure your spot for the ultimate luxury beauty experience.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Booking Form */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
              className="lg:col-span-7 glass p-8 md:p-12 rounded-[2rem] border border-border-gray shadow-xl bg-white"
            >
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-20">
                  <div className="w-24 h-24 bg-light-gray rounded-full flex items-center justify-center mb-8 shadow-sm border border-border-gray">
                    <Clock size={48} className="text-royal-blue" />
                  </div>
                  <h3 className="text-3xl font-cormorant font-bold text-navy mb-4">Request Received</h3>
                  <p className="text-slate-600 mb-10 max-w-md mx-auto leading-relaxed font-light">
                    We'll contact you shortly to confirm your appointment time and details. Get ready for a world-class experience.
                  </p>
                  <Magnetic>
                    <Button onClick={() => setSubmitted(false)} variant="outline" className="border-border-gray text-navy hover:bg-light-gray">Book Another</Button>
                  </Magnetic>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-navy uppercase tracking-widest">Name</label>
                      <input required name="name" type="text" className="w-full bg-light-gray border border-border-gray rounded-lg px-4 py-4 text-navy focus:outline-none focus:border-royal-blue transition-colors" placeholder="Jane Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-navy uppercase tracking-widest">Phone</label>
                      <input required name="phone" type="tel" className="w-full bg-light-gray border border-border-gray rounded-lg px-4 py-4 text-navy focus:outline-none focus:border-royal-blue transition-colors" placeholder="(555) 123-4567" />
                    </div>
                  </div>


                  <div className="space-y-2">
                    <label className="text-xs font-bold text-navy uppercase tracking-widest">Service</label>
                    <select required name="service" className="w-full bg-light-gray border border-border-gray rounded-lg px-4 py-4 text-navy focus:outline-none focus:border-royal-blue transition-colors appearance-none">
                      <option value="">Select a service...</option>
                      <option value="Precision Haircut">Precision Haircut ($85+)</option>
                      <option value="The Luxury Balayage">The Luxury Balayage ($250+)</option>
                      <option value="Keratin Smoothing">Keratin Smoothing ($300+)</option>
                      <option value="Bridal Styling">Bridal Styling ($150+)</option>
                      <option value="Signature Spa Manicure">Signature Spa Manicure ($50+)</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-navy uppercase tracking-widest">Preferred Date</label>
                      <input required name="date" type="date" className="w-full bg-light-gray border border-border-gray rounded-lg px-4 py-4 text-navy focus:outline-none focus:border-royal-blue transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-navy uppercase tracking-widest">Preferred Time</label>
                      <input required name="time" type="time" className="w-full bg-light-gray border border-border-gray rounded-lg px-4 py-4 text-navy focus:outline-none focus:border-royal-blue transition-colors" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-navy uppercase tracking-widest">Notes (Optional)</label>
                    <textarea name="notes" rows={4} className="w-full bg-light-gray border border-border-gray rounded-lg px-4 py-4 text-navy focus:outline-none focus:border-royal-blue transition-colors resize-none" placeholder="Any specific requests or styling preferences?"></textarea>
                  </div>

                  <div className="pt-4">
                    <Magnetic>
                      <Button type="submit" size="lg" className="w-full h-14 bg-navy hover:bg-royal-blue text-white" disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Request Appointment'}
                      </Button>
                    </Magnetic>
                  </div>
                </form>
              )}
            </motion.div>

            {/* Contact Info & Map */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 space-y-6"
            >
              <div className="glass p-8 rounded-[2rem] border border-border-gray bg-light-gray shadow-sm">
                <h3 className="text-2xl font-cormorant font-bold text-navy mb-8">Contact Details</h3>
                <ul className="space-y-8">
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white border border-border-gray flex items-center justify-center shrink-0 shadow-sm">
                      <MapPin className="text-royal-blue" size={24} />
                    </div>
                    <div>
                      <h4 className="text-navy font-semibold mb-1">Location</h4>
                      <p className="text-slate-600 mb-3">123 Medford Rd<br />Medford, NJ 08055</p>
                      <a href="https://maps.google.com" target="_blank" className="text-royal-blue hover:text-navy transition-colors text-sm font-semibold flex items-center gap-1 uppercase tracking-wider">
                        Get Directions <Navigation size={14} />
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white border border-border-gray flex items-center justify-center shrink-0 shadow-sm">
                      <Phone className="text-royal-blue" size={24} />
                    </div>
                    <div>
                      <h4 className="text-navy font-semibold mb-1">Phone</h4>
                      <a href="tel:5551234567" className="text-slate-600 hover:text-royal-blue transition-colors block text-lg">(555) 123-4567</a>
                    </div>
                  </li>

                </ul>
              </div>

              <div className="glass p-8 rounded-[2rem] border border-border-gray bg-light-gray shadow-sm">
                <h3 className="text-xl font-cormorant font-bold text-navy mb-6">Business Hours</h3>
                <ul className="space-y-4 text-sm font-medium">
                  <li className="flex justify-between border-b border-border-gray pb-3">
                    <span className="text-slate-500 uppercase tracking-wider">Monday - Friday</span>
                    <span className="text-navy font-bold">9:00 AM - 8:00 PM</span>
                  </li>
                  <li className="flex justify-between border-b border-border-gray pb-3">
                    <span className="text-slate-500 uppercase tracking-wider">Saturday</span>
                    <span className="text-navy font-bold">9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between border-b border-border-gray pb-3">
                    <span className="text-slate-500 uppercase tracking-wider">Sunday</span>
                    <span className="text-burgundy font-bold">Closed</span>
                  </li>
                </ul>
              </div>

              <div className="h-64 rounded-[2rem] overflow-hidden border border-border-gray shadow-sm">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196426.69748688463!2d-74.96025287661266!3d39.81844288048607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c1356b78f4b52b%3A0xc304a91f5e27a7c9!2sMedford%2C%20NJ!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
