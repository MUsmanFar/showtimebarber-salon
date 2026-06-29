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
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-navy/40 backdrop-blur-md"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-white border border-border-gray rounded-[2rem] p-8 md:p-12 shadow-2xl overflow-hidden"
            >
              <button onClick={closeModal} className="absolute top-6 right-6 text-slate-400 hover:text-navy transition-colors">
                <X size={24} />
              </button>

              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-10">
                  <motion.div 
                    initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring' }}
                    className="w-20 h-20 bg-light-gray rounded-full flex items-center justify-center mb-6 border border-border-gray"
                  >
                    <Clock size={40} className="text-royal-blue" />
                  </motion.div>
                  <h3 className="text-3xl font-cormorant font-bold text-navy mb-4">Request Received</h3>
                  <p className="text-slate-600 mb-8 max-w-sm">We'll contact you shortly to confirm your appointment time. Prepare for a world-class luxury experience.</p>
                  <Button onClick={closeModal} variant="outline" className="border-border-gray text-navy hover:bg-light-gray">Close</Button>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h2 className="text-3xl font-cormorant font-bold text-navy mb-2">Book Your Visit</h2>
                    <p className="text-slate-500 font-light">Secure your spot at Charles Bruce Salon & Spa.</p>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-navy uppercase tracking-widest">Name</label>
                        <input required name="name" type="text" className="w-full bg-light-gray border border-border-gray rounded-lg px-4 py-3 text-navy focus:outline-none focus:border-royal-blue transition-colors" placeholder="Jane Doe" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-navy uppercase tracking-widest">Phone</label>
                        <input required name="phone" type="tel" className="w-full bg-light-gray border border-border-gray rounded-lg px-4 py-3 text-navy focus:outline-none focus:border-royal-blue transition-colors" placeholder="(555) 123-4567" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-navy uppercase tracking-widest">Service</label>
                      <select required name="service" className="w-full bg-light-gray border border-border-gray rounded-lg px-4 py-3 text-navy focus:outline-none focus:border-royal-blue transition-colors appearance-none">
                        <option value="">Select a service...</option>
                        <option value="Precision Haircut">Precision Haircut</option>
                        <option value="Luxury Balayage">Luxury Balayage</option>
                        <option value="Keratin Smoothing">Keratin Smoothing</option>
                        <option value="Bridal Styling">Bridal Styling</option>
                        <option value="Spa Manicure">Spa Manicure</option>
                        <option value="Advanced Facial">Advanced Facial</option>
                      </select>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-navy uppercase tracking-widest">Date</label>
                        <input required name="date" type="date" className="w-full bg-light-gray border border-border-gray rounded-lg px-4 py-3 text-navy focus:outline-none focus:border-royal-blue transition-colors" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-navy uppercase tracking-widest">Time</label>
                        <input required name="time" type="time" className="w-full bg-light-gray border border-border-gray rounded-lg px-4 py-3 text-navy focus:outline-none focus:border-royal-blue transition-colors" />
                      </div>
                    </div>
                    <Magnetic>
                      <Button type="submit" className="w-full h-12 bg-navy hover:bg-royal-blue text-white" disabled={isSubmitting}>
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
