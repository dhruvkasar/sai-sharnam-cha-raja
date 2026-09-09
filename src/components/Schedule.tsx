import { aartiTimings, specialScheduleEvents } from '../data';
import { motion } from 'motion/react';
import { Sun, Moon, Sparkles, Calendar, Clock } from 'lucide-react';

export default function Schedule() {
  return (
    <section id="schedule" className="py-24 px-6 bg-haldi relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display mb-4 text-sindoor">आरती व पूजा वेळापत्रक</h2>
          <div className="w-32 h-1 bg-sona mx-auto rounded-full"></div>
          <p className="text-lg text-shai/75 mt-4 max-w-xl mx-auto">
            दररोज सकाळी व संध्याकाळी नित्य आरती व पूजेमध्ये सर्व भक्तांनी सहकुटुंब सहभागी व्हावे.
          </p>
        </div>

        {/* Daily Aarti Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border-t-8 border-kesari relative overflow-hidden group hover:shadow-xl transition-shadow"
          >
            <div className="absolute -right-6 -top-6 text-kesari/5 transform group-hover:scale-110 transition-transform">
               <Sun size={140} />
            </div>
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="p-3 bg-kesari/10 rounded-full text-kesari">
                <Sun size={32} />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-kesari/80">नित्य पूजा</span>
                <h3 className="text-3xl font-display text-shai">सकाळची आरती</h3>
              </div>
            </div>
            <p className="text-3xl sm:text-4xl font-bold text-kesari mb-2 font-display relative z-10">
              {aartiTimings[0].time}
            </p>
            <p className="text-shai/70 text-lg relative z-10">{aartiTimings[0].desc}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border-t-8 border-mor relative overflow-hidden group hover:shadow-xl transition-shadow"
          >
            <div className="absolute -right-6 -top-6 text-mor/5 transform group-hover:scale-110 transition-transform">
               <Moon size={140} />
            </div>
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="p-3 bg-mor/10 rounded-full text-mor">
                <Moon size={32} />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-mor/80">नित्य पूजा</span>
                <h3 className="text-3xl font-display text-shai">संध्याकाळची आरती</h3>
              </div>
            </div>
            <p className="text-3xl sm:text-4xl font-bold text-mor mb-2 font-display relative z-10">
              {aartiTimings[1].time}
            </p>
            <p className="text-shai/70 text-lg relative z-10">{aartiTimings[1].desc}</p>
          </motion.div>
        </div>

        {/* Special Schedule Events: Ganesh Aagman, Pujan & Satyanarayan Puja */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 justify-center mb-6">
            <div className="w-12 h-0.5 bg-sona/60" />
            <h3 className="text-xl sm:text-2xl font-display font-bold text-shai/90 flex items-center gap-2">
              <Sparkles size={20} className="text-kesari" />
              <span>प्रमुख धार्मिक सोहळे व महापूजा</span>
            </h3>
            <div className="w-12 h-0.5 bg-sona/60" />
          </div>

          <div className="grid gap-6">
            {specialScheduleEvents.map((event, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gradient-to-r from-[#2B1B15] via-[#381F15] to-[#24150F] text-haldi p-6 sm:p-8 md:p-10 rounded-3xl shadow-2xl border-2 border-sona/50 relative overflow-hidden group hover:border-sona transition-all"
              >
                {/* Ambient Gold Radial Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-sona/10 rounded-full blur-3xl pointer-events-none" />

                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sona/20 text-yellow-300 border border-sona/30 text-xs sm:text-sm font-semibold tracking-wide">
                      <Sparkles size={14} className="text-yellow-300" />
                      <span>{event.badge}</span>
                    </div>

                    <h4 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white tracking-wide">
                      {event.title}
                    </h4>

                    <p className="text-haldi/85 text-base sm:text-lg max-w-2xl leading-relaxed">
                      {event.desc}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0 w-full md:w-auto">
                    <div className="flex items-center gap-2.5 bg-black/50 px-5 py-2.5 rounded-xl border border-sona/30 text-sm font-semibold text-sona shadow-inner">
                      <Calendar size={17} className="text-kesari shrink-0" />
                      <span>{event.date} ({event.day})</span>
                    </div>

                    <div className="flex items-center gap-2.5 bg-black/50 px-5 py-2.5 rounded-xl border border-sona/30 text-sm font-semibold text-yellow-200 shadow-inner">
                      <Clock size={17} className="text-amber-400 shrink-0" />
                      <span>वेळ: {event.time}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
