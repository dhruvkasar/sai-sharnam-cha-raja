import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [isLit, setIsLit] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const handleLight = () => {
    if (!isLit) {
      setIsLit(true);
      // Start audio immediately within the user click gesture event loop
      onComplete();
      // Remove preloader after flare animation
      setTimeout(() => {
        setIsVisible(false);
      }, 1300);
    }
  };

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-sindoor overflow-hidden"
      animate={{ opacity: isLit ? 0 : 1 }}
      transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
      style={{ pointerEvents: isLit ? 'none' : 'auto' }}
    >
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(circle, var(--color-sona) 2px, transparent 2px)', backgroundSize: '30px 30px' }}
      ></div>
      
      <div className="relative z-10 flex flex-col items-center cursor-pointer group" onClick={handleLight}>
        
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-sona font-display text-3xl md:text-5xl mb-12 drop-shadow-md"
        >
          ॥ श्री गणेशाय नमः ॥
        </motion.h2>

        {/* Custom Central Diya */}
        <div className="relative w-48 h-48 flex items-center justify-center mb-8 transform group-hover:scale-105 transition-transform duration-500">
          
          {/* Flame Outerglow (Ignites) */}
          <motion.div 
            className="absolute top-8 w-12 h-20 bg-kesari rounded-[50%_50%_50%_50%_/_60%_60%_40%_40%] origin-bottom blur-[2px]"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: isLit ? [0, 1.8, 1.4, 1.6, 1.5] : 0, 
              opacity: isLit ? 1 : 0 
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ boxShadow: '0 0 80px 40px rgba(255, 122, 26, 0.7)' }}
          />
          
          {/* Flame Inner Core */}
          <motion.div 
            className="absolute top-12 w-6 h-12 bg-haldi rounded-[50%_50%_50%_50%_/_60%_60%_40%_40%] origin-bottom z-10"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: isLit ? 1 : 0, opacity: isLit ? 1 : 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          />
          
          {/* Clay Base of Diya */}
          <svg viewBox="0 0 100 50" className="w-40 h-20 absolute bottom-4 text-sona fill-current drop-shadow-xl z-20">
            {/* Main bowl */}
            <path d="M5,15 Q50,35 95,15 Q80,50 50,50 Q20,50 5,15 Z" />
            {/* Foot */}
            <path d="M40,48 Q50,55 60,48 Z" />
          </svg>
          
        </div>

        <motion.p
          animate={{ opacity: isLit ? 0 : 1 }}
          className="text-haldi/90 text-xl md:text-2xl font-display tracking-wide animate-pulse mt-4"
        >
          दिवा लावण्यासाठी स्पर्श करा
        </motion.p>
      </div>

      {/* Light Bloom Expansion Effect */}
      <motion.div 
        className="absolute inset-0 bg-haldi rounded-full pointer-events-none mix-blend-overlay"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: isLit ? 15 : 0, 
          opacity: isLit ? 1 : 0 
        }}
        transition={{ duration: 1, ease: "easeIn" }}
      />
    </motion.div>
  );
}
