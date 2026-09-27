import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { societyDetails, competitions } from '../data';
import { Calendar, Clock, CheckCircle2, Flame, Heart, Sparkles, Trophy, Users, X, Award, ChevronRight } from 'lucide-react';

export default function EventOverview() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [showCompetitionsModal, setShowCompetitionsModal] = useState(false);
  const [selectedDayFilter, setSelectedDayFilter] = useState<number | 'all'>('all');

  // Live countdown to Next Ganesh Festival 2027 (September 4, 2027)
  useEffect(() => {
    const targetDate = new Date(societyDetails.nextTargetDate || '2027-09-04T00:00:00');

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

  const completedCompetitionsCount = competitions.length;

  const modalFilteredCompetitions = selectedDayFilter === 'all' 
    ? competitions 
    : competitions.filter(c => c.day === selectedDayFilter);

  return (
    <section 
      id="overview" 
      className="relative py-20 px-4 sm:px-6 bg-gradient-to-b from-[#0A0705] via-[#1A0E08] to-[#0A0705] text-haldi select-none overflow-hidden border-b border-sona/20"
    >
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-kesari/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-sona/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            }
          }
        }}
        className="z-10 relative max-w-5xl mx-auto flex flex-col items-center text-center"
      >
        {/* Traditional Arch Ribbon */}
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
          className="flex items-center justify-center gap-3 mb-4 origin-center"
        >
          <div className="w-16 sm:w-28 h-0.5 bg-gradient-to-r from-transparent via-sona to-yellow-200" />
          <span className="text-sona text-xl">𑁍</span>
          <div className="w-16 sm:w-28 h-0.5 bg-gradient-to-l from-transparent via-sona to-yellow-200" />
        </motion.div>

        {/* 2026 Festival Completion Proclamation */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 15 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
          }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/50 text-xs sm:text-sm font-semibold tracking-wide mb-3 shadow-md backdrop-blur-md"
        >
          <CheckCircle2 size={16} className="text-emerald-400" />
          <span>गणेशोत्सव {societyDetails.year} व सर्व स्पर्धा यशस्वीरीत्या संपन्न!</span>
        </motion.div>

        {/* Devotional Chant */}
        <motion.h2 
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
          className="text-3xl sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-amber-300 to-yellow-100 font-display font-bold mb-3 drop-shadow-md leading-tight"
        >
          पुढच्या वर्षी लवकर या!
        </motion.h2>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
          }}
          className="text-base sm:text-xl text-amber-200/90 font-display font-medium max-w-2xl mb-8 leading-relaxed"
        >
          लाडक्या बाप्पाचा १२ दिवसांचा मंगलमय उत्सव भक्तीमय वातावरणात संपन्न झाला. आता सर्वांना वेध लागले आहेत ते पुढील वर्षाच्या आगमनाचे!
        </motion.p>

        {/* ======================================================== */}
        {/* LIVE COUNTDOWN FOR NEXT GANESH FESTIVAL 2027 */}
        {/* ======================================================== */}
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
          className="w-full max-w-2xl bg-gradient-to-br from-black/90 via-[#26150D]/90 to-black/90 p-6 sm:p-8 rounded-3xl border-2 border-sona/50 backdrop-blur-md shadow-2xl shadow-kesari/20 mb-10 relative overflow-hidden"
        >
          {/* Ambient Inner Glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-sona/15 rounded-full blur-2xl pointer-events-none" />

          {/* Countdown Header */}
          <div className="flex flex-col items-center justify-center gap-1.5 mb-6 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-kesari/20 text-yellow-300 border border-kesari/40 text-xs sm:text-sm font-bold tracking-wider uppercase shadow-xs">
              <Sparkles size={14} className="text-yellow-300 animate-spin" style={{ animationDuration: '4s' }} />
              <span>आगामी गणेशोत्सव {societyDetails.nextYear} आगमन काऊंटडाऊन</span>
            </div>
            
            <p className="text-sm sm:text-base font-semibold text-haldi/90 flex items-center gap-1.5 mt-1">
              <Calendar size={16} className="text-kesari shrink-0" />
              <span>श्री गणेश चतुर्थी: <strong className="text-sona">{societyDetails.nextGaneshChaturthi}</strong></span>
            </p>
          </div>

          {/* Countdown Digit Boxes */}
          <div className="grid grid-cols-4 gap-2.5 sm:gap-4 mb-4">
            {[
              { label: 'दिवस (Days)', value: timeLeft.days },
              { label: 'तास (Hours)', value: timeLeft.hours },
              { label: 'मिनिटे (Mins)', value: timeLeft.minutes },
              { label: 'सेकंद (Secs)', value: timeLeft.seconds },
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="bg-black/60 rounded-2xl p-3 sm:p-4 border border-sona/30 text-center shadow-inner relative overflow-hidden"
              >
                <span className="block text-2xl sm:text-4xl md:text-5xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-b from-yellow-100 via-amber-300 to-yellow-400">
                  {String(item.value).padStart(2, '0')}
                </span>
                <span className="text-[10px] sm:text-xs text-amber-200/80 font-medium uppercase tracking-wider mt-1 block">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center pt-2 text-xs sm:text-sm text-haldi/70 font-display">
            बाप्पाच्या आगमनाची आतुरता • साई शरणम चा राजा परिवार
          </div>
        </motion.div>

        {/* ======================================================== */}
        {/* FESTIVAL 2026 RETROSPECTIVE & GRATITUDE CARD */}
        {/* ======================================================== */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 1.2 } }
          }}
          className="w-full max-w-2xl bg-gradient-to-r from-black/75 via-[#1A0E08]/85 to-black/75 p-5 sm:p-6 rounded-3xl border border-emerald-500/40 backdrop-blur-md shadow-xl mb-8"
        >
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-emerald-300 font-bold mb-3 tracking-wider uppercase">
            <Trophy size={16} className="text-yellow-300" />
            <span>गणेशोत्सव २०२६ ठळक क्षणचित्रे व सांगता</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mb-4">
            {[
              { label: 'उत्सव कालावधी', val: '१२ दिवस', sub: 'अखंड भक्तिमय जल्लोष' },
              { label: 'एकूण स्पर्धा', val: `${completedCompetitionsCount} स्पर्धा`, sub: 'सर्व संपन्न' },
              { label: 'नित्य महाआरती', val: '२४+ आरती', sub: 'महाप्रसाद वाटप' },
              { label: 'विसर्जन मिरवणूक', val: '२५ सप्टेंबर', sub: 'अनंत चतुर्दशी' },
            ].map((item, idx) => (
              <div key={idx} className="bg-black/50 p-2.5 rounded-xl border border-sona/20 text-center">
                <p className="text-base sm:text-lg font-bold text-sona font-display">{item.val}</p>
                <p className="text-[11px] font-semibold text-emerald-200">{item.label}</p>
                <p className="text-[9px] text-haldi/60">{item.sub}</p>
              </div>
            ))}
          </div>

          <div className="p-3.5 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-xs sm:text-sm text-emerald-100/90 leading-relaxed text-center">
            <Heart size={14} className="text-pink-400 inline mr-1.5" />
            साई शरणम सोसायटीतील सर्व सभासद, रहिवासी, भाविक, देणगीदार, लहान-मोठे स्पर्धक आणि मंडळाच्या सर्व कार्यकर्त्यांचे मनापासून हार्दिक आभार!
          </div>

          {/* Button to view the 17 Completed Competitions without page clutter */}
          <div className="mt-4 pt-3 border-t border-emerald-500/30 flex justify-center">
            <button
              type="button"
              onClick={() => setShowCompetitionsModal(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-900/80 hover:bg-emerald-800 text-emerald-100 text-xs sm:text-sm font-bold border border-emerald-400/50 shadow-md transition-colors cursor-pointer"
            >
              <Trophy size={16} className="text-yellow-300" />
              <span>गणेशोत्सव २०२६ मधील संपन्न १७ स्पर्धांची यादी पहा</span>
              <ChevronRight size={14} />
            </button>
          </div>
        </motion.div>

        {/* Primary Call to Action */}
        <motion.div 
          variants={{
            hidden: { opacity: 0, y: 25 },
            visible: { opacity: 1, y: 0, transition: { duration: 1.1 } }
          }}
          className="flex flex-wrap gap-4 justify-center items-center"
        >
          <a 
            href="#committee" 
            className="px-7 py-3 rounded-2xl bg-gradient-to-r from-kesari to-[#FF8833] hover:brightness-110 active:scale-95 text-white font-bold text-sm sm:text-base transition-all shadow-lg flex items-center justify-center gap-2 border border-yellow-200/30"
          >
            <Users size={18} />
            <span>कार्यकारिणी समिती सदस्य</span>
          </a>

          <a 
            href="#contact" 
            className="px-7 py-3 rounded-2xl bg-black/60 hover:bg-black/80 text-sona border-2 border-sona/60 hover:border-sona font-semibold text-sm sm:text-base active:scale-95 transition-all shadow-lg backdrop-blur-md flex items-center justify-center gap-2"
          >
            <Sparkles size={18} className="text-kesari" />
            <span>संपर्क व माहिती</span>
          </a>
        </motion.div>
      </motion.div>

      {/* ======================================================== */}
      {/* MODAL: COMPLETED 17 COMPETITIONS OF 2026 */}
      {/* ======================================================== */}
      <AnimatePresence>
        {showCompetitionsModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowCompetitionsModal(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Dialog Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl max-h-[85vh] bg-gradient-to-b from-[#1C120D] via-[#150D09] to-[#1C120D] border-2 border-sona/60 rounded-3xl shadow-2xl p-5 sm:p-7 flex flex-col z-10 text-left overflow-hidden text-haldi"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-4 border-b border-sona/30 shrink-0">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-emerald-500/20 rounded-xl border border-emerald-400/40 text-emerald-300">
                    <Trophy size={20} className="text-yellow-300" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-2xl font-display font-bold text-white">
                      गणेशोत्सव २०२६: संपन्न १७ स्पर्धा
                    </h3>
                    <p className="text-xs text-emerald-300">
                      सर्व स्पर्धा यशस्वीरीत्या पार पडल्या • सर्व विजेत्यांचे मनःपूर्वक अभिनंदन!
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setShowCompetitionsModal(false)}
                  className="p-2 rounded-xl text-haldi/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  title="बंद करा"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Day filter pills inside modal */}
              <div className="py-3 flex items-center gap-1.5 overflow-x-auto no-scrollbar shrink-0 text-xs">
                <button
                  type="button"
                  onClick={() => setSelectedDayFilter('all')}
                  className={`px-3 py-1.5 rounded-full font-semibold transition-all border whitespace-nowrap cursor-pointer ${
                    selectedDayFilter === 'all'
                      ? 'bg-emerald-500 text-white border-white'
                      : 'bg-black/50 text-emerald-200 border-emerald-500/30'
                  }`}
                >
                  सर्व १७ स्पर्धा
                </button>
                {[1, 2, 3, 4, 5, 6, 7, 8].map(day => (
                  <button
                    key={day}
                    type="button"
                    onClick={() => setSelectedDayFilter(day)}
                    className={`px-2.5 py-1.5 rounded-full font-medium transition-all border whitespace-nowrap cursor-pointer ${
                      selectedDayFilter === day
                        ? 'bg-sona text-shai border-yellow-200 font-bold'
                        : 'bg-black/40 text-haldi/80 border-sona/20 hover:text-white'
                    }`}
                  >
                    Day {day}
                  </button>
                ))}
              </div>

              {/* Modal Competitions List (Scrollable) */}
              <div className="overflow-y-auto space-y-3 pr-1 py-2 grow">
                {modalFilteredCompetitions.map(comp => (
                  <div 
                    key={comp.id}
                    className="p-4 rounded-2xl bg-white/5 border border-emerald-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 hover:bg-white/10 transition-colors"
                  >
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-900/90 text-emerald-200 border border-emerald-400/30 font-bold flex items-center gap-1">
                          <CheckCircle2 size={11} className="text-emerald-300" />
                          <span>{comp.date}</span>
                        </span>

                        {comp.categoryBadge && (
                          <span className="text-[11px] px-2 py-0.5 rounded-full bg-kesari/20 text-yellow-300 border border-kesari/40 font-semibold">
                            {comp.categoryBadge}
                          </span>
                        )}

                        <span className="text-[10px] text-haldi/60">
                          {comp.dayLabel}
                        </span>
                      </div>

                      <h4 className="text-lg font-display font-bold text-white">
                        {comp.title} <span className="text-xs text-haldi/60 font-normal">({comp.englishTitle})</span>
                      </h4>

                      <p className="text-xs text-haldi/80 leading-relaxed max-w-xl">
                        {comp.desc}
                      </p>

                      <div className="text-[11px] text-amber-200/80 pt-0.5">
                        <span className="text-haldi/50">सहभाग: </span>{comp.audience}
                      </div>
                    </div>

                    <div className="shrink-0 self-stretch sm:self-auto flex items-center justify-end">
                      <span className="px-3 py-1.5 rounded-xl bg-emerald-800/80 text-emerald-100 text-xs font-bold border border-emerald-400/40 flex items-center gap-1.5">
                        <Award size={14} className="text-yellow-300" />
                        <span>स्पर्धा संपन्न</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Modal Footer */}
              <div className="pt-3 border-t border-sona/20 flex justify-end shrink-0">
                <button
                  type="button"
                  onClick={() => setShowCompetitionsModal(false)}
                  className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-haldi text-xs font-semibold border border-sona/30 cursor-pointer"
                >
                  बंद करा (Close)
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
