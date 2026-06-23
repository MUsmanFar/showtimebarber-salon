"use client";

import { createContext, useContext, useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock } from 'lucide-react';
import { Button } from './ui/Button';
import { Magnetic } from './ui/Magnetic';

interface BookingContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) throw new Error("useBooking must be used within a BookingProvider");
  return context;
}

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => setSubmitted(false), 500); // reset after animation
  };

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
    <BookingContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-zinc-950 border border-white/10 rounded-2xl p-8 md:p-12 shadow-[0_0_50px_rgba(212,175,55,0.15)] overflow-hidden"
            >
              <button onClick={closeModal} className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors">
                <X size={24} />
              </button>

              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-10">
                  <motion.div 
                    initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring' }}
                    className="w-20 h-20 bg-gold-500/20 rounded-full flex items-center justify-center mb-6"
                  >
                    <Clock size={40} className="text-gold-500" />
                  </motion.div>
                  <h3 className="text-3xl font-montserrat font-bold text-white mb-4">Request Received</h3>
                  <p className="text-zinc-400 mb-8 max-w-sm">We'll contact you shortly to confirm your appointment time. Prepare for the ultimate grooming experience.</p>
                  <Button onClick={closeModal} variant="outline">Close</Button>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h2 className="text-3xl font-montserrat font-bold text-white mb-2">Book Your Chair</h2>
                    <p className="text-zinc-400">Secure your spot at Showtime Barber & Salon.</p>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-gold-500 uppercase tracking-widest">Name</label>
                        <input required name="name" type="text" className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors" placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-gold-500 uppercase tracking-widest">Phone</label>
                        <input required name="phone" type="tel" className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors" placeholder="(703) 623-3017" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gold-500 uppercase tracking-widest">Service</label>
                      <select required name="service" className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors appearance-none">
                        <option value="">Select a service...</option>
                        <option value="Haircut">Haircut</option>
                        <option value="Haircut & Shave">Haircut & Shave</option>
                        <option value="Shave Only">Shave Only</option>
                        <option value="Manicure & Pedicure">Manicure & Pedicure</option>
                      </select>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-gold-500 uppercase tracking-widest">Date</label>
                        <input required name="date" type="date" className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-gold-500 uppercase tracking-widest">Time</label>
                        <input required name="time" type="time" className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors" />
                      </div>
                    </div>
                    <Magnetic>
                      <Button type="submit" className="w-full h-12" disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Confirm Request'}
                      </Button>
                    </Magnetic>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </BookingContext.Provider>
  );
}
