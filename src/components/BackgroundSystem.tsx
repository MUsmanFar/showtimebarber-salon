"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export function BackgroundSystem() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      backgroundPosition: ["0% 0%", "100% 100%"],
      transition: { duration: 30, repeat: Infinity, repeatType: "reverse", ease: "linear" }
    });
  }, [controls]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#050505]">
      {/* Static Grain Texture (Optimized via CSS instead of SVG filter) */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('/noise.png')] bg-repeat" />
      
      {/* Lightweight Animated Mesh Gradients without expensive blur filters */}
      <motion.div 
        animate={controls}
        className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.06)_0%,transparent_60%)]"
      />
      <motion.div 
        animate={controls}
        className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.04)_0%,transparent_60%)]"
      />
    </div>
  );
}
