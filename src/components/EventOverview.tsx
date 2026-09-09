import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { societyDetails } from '../data';
import { Award, Calendar, Clock, Flame } from 'lucide-react';

export default function EventOverview() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Calculate live countdown to Ganeshotsav 2026 (Arrival on September 13, 2026)
  useEffect(() => {
    const targetDate = new Date('2026-09-13T00:00:00');

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="overview" 
      className="relative py-16 px-4 sm:px-6 bg-gradient-to-b from-[#0A0705] via-[#1A0E08] to-[#0A0705] text-haldi select-none overflow-hidden border-b border-sona/20"
    >
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-kesari/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.18,
            }
          }
        }}
        className="z-10 relative max-w-5xl mx-auto flex flex-col items-center text-center"
      >
        {/* Traditional Arch Ribbon with Width Unfurl */}
        <motion.div 
          variants={{
            hidden: { opacity: 0, scaleX: 0, filter: 'blur(4px)' },
            visible: { 
              opacity: 1, 
              scaleX: 1,
              filter: 'blur(0px)',
              transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
            }
          }}
          className="flex items-center justify-center gap-3 mb-3 origin-center"
        >
          <div className="w-16 sm:w-28 h-0.5 bg-gradient-to-r from-transparent via-sona to-yellow-200" />
          <span className="text-sona text-xl">𑁍</span>
          <div className="w-16 sm:w-28 h-0.5 bg-gradient-to-l from-transparent via-sona to-yellow-200" />
        </motion.div>

        {/* Subheading: Festival Year */}
        <motion.p 
          variants={{
            hidden: { opacity: 0, y: 25, scale: 0.9, filter: 'blur(8px)' },
            visible: { 
              opacity: 1, 
              y: 0, 
              scale: 1,
              filter: 'blur(0px)',
              transition: {
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1]
              }
            }
          }}
          className="text-2xl sm:text-3xl md:text-4xl text-amber-200/90 font-display font-semibold mb-6 drop-shadow-md"
        >
          भव्य गणेशोत्सव {societyDetails.year}
        </motion.p>

        {/* Event Dates & Sacred Timings Bar */}
        <motion.div 
          variants={{
            hidden: { opacity: 0, y: 30, scale: 0.88, filter: 'blur(8px)' },
            visible: { 
              opacity: 1, 
              y: 0, 
              scale: 1, 
              filter: 'blur(0px)',
              transition: {
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1]
              }
            }
          }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8"
        >
          <motion.div 
            whileHover={{ scale: 1.04, y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="inline-flex items-center gap-2.5 bg-black/60 backdrop-blur-md px-4 sm:px-5 py-2.5 rounded-2xl border border-sona/35 shadow-lg text-sm sm:text-base"
          >
            <Calendar size={18} className="text-kesari shrink-0" />
            <span>श्री आगमन: <strong className="text-sona font-bold">१३ सप्टेंबर २०२६</strong></span>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.04, y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="inline-flex items-center gap-2.5 bg-black/60 backdrop-blur-md px-4 sm:px-5 py-2.5 rounded-2xl border border-sona/35 shadow-lg text-sm sm:text-base"
          >
            <Calendar size={18} className="text-amber-400 shrink-0" />
            <span>श्री गणेश स्थापना: <strong className="text-sona font-bold">१४ सप्टेंबर २०२६</strong></span>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.04, y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="inline-flex items-center gap-2.5 bg-black/60 backdrop-blur-md px-4 sm:px-5 py-2.5 rounded-2xl border border-yellow-300/40 shadow-lg text-sm sm:text-base ring-1 ring-yellow-400/20"
          >
            <Clock size={18} className="text-yellow-300 shrink-0" />
            <span>श्री गणेश पूजन: <strong className="text-yellow-300 font-bold">१४ सप्टेंबर • दुपारी ३:३०</strong></span>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.04, y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="inline-flex items-center gap-2.5 bg-black/60 backdrop-blur-md px-4 sm:px-5 py-2.5 rounded-2xl border border-sona/35 shadow-lg text-sm sm:text-base"
          >
            <Flame size={18} className="text-amber-400 shrink-0" />
            <span>अनंत विसर्जन: <strong className="text-sona font-bold">२५ सप्टेंबर २०२६</strong></span>
          </motion.div>
        </motion.div>

        {/* Live Countdown Clock Strip */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 35, scale: 0.85, filter: 'blur(12px)' },
            visible: { 
              opacity: 1, 
              y: 0, 
              scale: 1,
              filter: 'blur(0px)',
              transition: {
                duration: 1.4,
                ease: [0.16, 1, 0.3, 1]
              }
            }
          }}
          className="w-full max-w-xl bg-gradient-to-r from-black/70 via-[#1C120D]/90 to-black/70 p-4 sm:p-5 rounded-3xl border-2 border-sona/30 backdrop-blur-md shadow-2xl mb-10"
        >
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-sona font-semibold mb-3 tracking-wider uppercase">
            <Clock size={15} className="text-kesari" />
            <span>उत्सव सुरू होण्यास उर्वरित वेळ</span>
          </div>

          <div className="grid grid-cols-4 gap-2 sm:gap-4">
            {[
              { label: 'दिवस (Days)', value: timeLeft.days },
              { label: 'तास (Hours)', value: timeLeft.hours },
              { label: 'मिंट (Mins)', value: timeLeft.minutes },
              { label: 'सेकंद (Secs)', value: timeLeft.seconds },
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="bg-black/50 rounded-2xl p-2.5 border border-sona/20 text-center shadow-inner"
              >
                <span className="block text-2xl sm:text-3xl md:text-4xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-b from-yellow-100 to-amber-400">
                  {String(item.value).padStart(2, '0')}
                </span>
                <span className="text-[10px] sm:text-xs text-haldi/60 font-medium">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Primary Call to Actions */}
        <motion.div 
          variants={{
            hidden: { opacity: 0, y: 35, scale: 0.88, filter: 'blur(10px)' },
            visible: { 
              opacity: 1, 
              y: 0, 
              scale: 1,
              filter: 'blur(0px)',
              transition: {
                duration: 1.3,
                ease: [0.16, 1, 0.3, 1]
              }
            }
          }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-lg"
        >
          <motion.a 
            href="#competitions" 
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 350, damping: 20 }}
            className="w-full sm:w-auto flex-1 bg-gradient-to-r from-kesari via-[#FF8D3B] to-kesari text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-kesari/30 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2.5 border border-yellow-200/30"
          >
            <Award size={22} className="text-yellow-100" />
            <span className="whitespace-nowrap">स्पर्धांमध्ये सहभागी व्हा</span>
          </motion.a>

          <motion.a 
            href="#schedule" 
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 350, damping: 20 }}
            className="w-full sm:w-auto flex-1 bg-black/60 hover:bg-black/80 text-sona border-2 border-sona/60 hover:border-sona px-8 py-3.5 rounded-2xl font-semibold text-lg active:scale-95 transition-all shadow-lg backdrop-blur-md flex items-center justify-center gap-2"
          >
            <Calendar size={20} className="text-kesari" />
            <span className="whitespace-nowrap">पूजा वेळापत्रक</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
