"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';
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
      <main className="flex-1 pt-32 pb-32">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-montserrat font-black text-white tracking-tighter mb-4">
              BOOK YOUR <span className="text-gradient">CHAIR</span>
            </h1>
            <p className="text-zinc-400 text-lg">Secure your spot for the ultimate grooming experience.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Booking Form */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
              className="lg:col-span-7 glass p-8 md:p-12 rounded-2xl border border-white/5"
            >
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-20">
                  <div className="w-24 h-24 bg-gold-500/20 rounded-full flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                    <Clock size={48} className="text-gold-500" />
                  </div>
                  <h3 className="text-3xl font-montserrat font-bold text-white mb-4">Request Received</h3>
                  <p className="text-zinc-400 mb-10 max-w-md mx-auto leading-relaxed">
                    We'll contact you shortly to confirm your appointment time and details. Get ready for showtime.
                  </p>
                  <Magnetic>
                    <Button onClick={() => setSubmitted(false)} variant="outline">Book Another</Button>
                  </Magnetic>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gold-500 uppercase tracking-widest">Name</label>
                      <input required name="name" type="text" className="w-full bg-black border border-white/10 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-gold-500 transition-colors" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gold-500 uppercase tracking-widest">Phone</label>
                      <input required name="phone" type="tel" className="w-full bg-black border border-white/10 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-gold-500 transition-colors" placeholder="(555) 123-4567" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gold-500 uppercase tracking-widest">Email</label>
                    <input required name="email" type="email" className="w-full bg-black border border-white/10 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-gold-500 transition-colors" placeholder="john@example.com" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gold-500 uppercase tracking-widest">Service</label>
                    <select required name="service" className="w-full bg-black border border-white/10 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-gold-500 transition-colors appearance-none">
                      <option value="">Select a service...</option>
                      <option value="The Showtime Cut">The Showtime Cut ($65)</option>
                      <option value="Executive Shave">Executive Shave ($45)</option>
                      <option value="The Full Premium">The Full Premium ($100)</option>
                      <option value="Beard Trim">Beard Trim & Line Up ($35)</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gold-500 uppercase tracking-widest">Preferred Date</label>
                      <input required name="date" type="date" className="w-full bg-black border border-white/10 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-gold-500 transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gold-500 uppercase tracking-widest">Preferred Time</label>
                      <input required name="time" type="time" className="w-full bg-black border border-white/10 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-gold-500 transition-colors" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gold-500 uppercase tracking-widest">Notes (Optional)</label>
                    <textarea name="notes" rows={4} className="w-full bg-black border border-white/10 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-gold-500 transition-colors resize-none" placeholder="Any specific requests or styling preferences?"></textarea>
                  </div>

                  <div className="pt-4">
                    <Magnetic>
                      <Button type="submit" size="lg" className="w-full h-14" disabled={isSubmitting}>
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
              <div className="glass p-8 rounded-2xl border border-white/5">
                <h3 className="text-2xl font-montserrat font-bold text-white mb-8">Contact Details</h3>
                <ul className="space-y-8">
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-black border border-white/10 flex items-center justify-center shrink-0">
                      <MapPin className="text-gold-500" size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Location</h4>
                      <p className="text-zinc-400 mb-3">7091 Berry Rd Ste 2<br />Accokeek, MD 20607</p>
                      <a href="https://maps.google.com" target="_blank" className="text-gold-500 hover:text-white transition-colors text-sm font-semibold flex items-center gap-1 uppercase tracking-wider">
                        Get Directions <Navigation size={14} />
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-black border border-white/10 flex items-center justify-center shrink-0">
                      <Phone className="text-gold-500" size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Phone</h4>
                      <a href="tel:7036233017" className="text-zinc-400 hover:text-gold-500 transition-colors block text-lg">(703) 623-3017</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-black border border-white/10 flex items-center justify-center shrink-0">
                      <Mail className="text-gold-500" size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Email</h4>
                      <a href="mailto:hello@showtimebarber.com" className="text-zinc-400 hover:text-gold-500 transition-colors">hello@showtimebarber.com</a>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="glass p-8 rounded-2xl border border-white/5">
                <h3 className="text-xl font-montserrat font-bold text-white mb-6">Business Hours</h3>
                <ul className="space-y-4 text-sm font-medium">
                  <li className="flex justify-between border-b border-white/5 pb-3">
                    <span className="text-zinc-400 uppercase tracking-wider">Monday - Friday</span>
                    <span className="text-white">9:00 AM - 8:00 PM</span>
                  </li>
                  <li className="flex justify-between border-b border-white/5 pb-3">
                    <span className="text-zinc-400 uppercase tracking-wider">Saturday</span>
                    <span className="text-white">9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between border-b border-white/5 pb-3">
                    <span className="text-zinc-400 uppercase tracking-wider">Sunday</span>
                    <span className="text-gold-500">Closed</span>
                  </li>
                </ul>
              </div>

              <div className="h-64 rounded-2xl overflow-hidden border border-white/10">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49791.077271810574!2d-77.06014498522301!3d38.65345700756779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7bacdf174a899%3A0xc0c80650d0a51c4a!2sAccokeek%2C%20MD%2020607!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }} 
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
