import { useState } from 'react';
import { competitions, competitionDays, societyDetails } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, Users, Sparkles, AlertCircle, PhoneCall, Award, Trophy, ExternalLink } from 'lucide-react';

export default function Competitions() {
  const [selectedDay, setSelectedDay] = useState<number | 'all'>('all');

  const filteredCompetitions = selectedDay === 'all'
    ? competitions
    : competitions.filter(comp => comp.day === selectedDay);

  return (
    <section id="competitions" className="py-24 px-4 sm:px-6 bg-sindoor relative text-haldi overflow-hidden">
      {/* Decorative top border */}
      <div 
        className="absolute top-0 left-0 w-full h-3" 
        style={{ backgroundImage: 'linear-gradient(90deg, var(--color-sona) 50%, transparent 50%)', backgroundSize: '20px 100%' }}
      />

      {/* Subtle background radial glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-kesari/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 right-0 w-96 h-96 bg-sona/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sona/20 text-yellow-300 border border-sona/40 text-xs sm:text-sm font-semibold tracking-wide mb-4 shadow-sm">
            <Sparkles size={15} className="text-yellow-300" />
            <span>स्पर्धेचे संपूर्ण वेळापत्रक • १६ सप्टेंबर ते २४ सप्टेंबर २०२६</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-display mb-4 text-haldi drop-shadow-sm">
            भव्य स्पर्धा महोत्सव
          </h2>
          <div className="w-32 h-1 bg-sona mx-auto mb-5 rounded-full" />
          <p className="text-base sm:text-lg md:text-xl text-haldi/85 max-w-3xl mx-auto leading-relaxed">
            साई शरणम सोसायटीमधील सर्व लहान मुले, तरुण, महिला व ज्येष्ठ नागरिकांसाठी मनोरंजक, सांस्कृतिक व क्रीडा स्पर्धांचे भव्य आयोजन. आजच आपला सहभाग निश्चित करा!
          </p>
        </div>

        {/* Day Filter Pills (Sticky-friendly or horizontal scroll) */}
        <div className="mb-10">
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 pt-1 px-1 no-scrollbar text-sm select-none">
            <button
              type="button"
              onClick={() => setSelectedDay('all')}
              className={`px-4 py-2 rounded-full font-semibold transition-all whitespace-nowrap border flex items-center gap-1.5 cursor-pointer shadow-sm ${
                selectedDay === 'all'
                  ? 'bg-sona text-shai border-yellow-200 shadow-md scale-105'
                  : 'bg-black/35 text-haldi/85 border-sona/30 hover:bg-black/50 hover:text-white'
              }`}
            >
              <Trophy size={15} />
              <span>सर्व स्पर्धा ({competitions.length})</span>
            </button>

            {competitionDays.map(cd => (
              <button
                key={cd.day}
                type="button"
                onClick={() => setSelectedDay(cd.day)}
                className={`px-3.5 py-2 rounded-full font-medium transition-all whitespace-nowrap border flex items-center gap-1.5 cursor-pointer shadow-sm ${
                  selectedDay === cd.day
                    ? 'bg-sona text-shai border-yellow-200 shadow-md font-semibold scale-105'
                    : 'bg-black/35 text-haldi/85 border-sona/30 hover:bg-black/50 hover:text-white'
                }`}
              >
                <span>{cd.dayLabel}: {cd.date}</span>
              </button>
            ))}
          </div>

          {/* Active Day Info Banner */}
          {selectedDay !== 'all' && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-3.5 rounded-xl bg-black/40 border border-sona/30 text-center max-w-xl mx-auto flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-yellow-200"
            >
              <span className="font-bold text-sona">
                {competitionDays.find(d => d.day === selectedDay)?.dayLabel}: {competitionDays.find(d => d.day === selectedDay)?.date}
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1">
                <Clock size={14} className="text-kesari" />
                <span>वेळ: {competitionDays.find(d => d.day === selectedDay)?.time}</span>
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="text-haldi/90">
                एकूण {filteredCompetitions.length} स्पर्धा
              </span>
            </motion.div>
          )}
        </div>

        {/* Competitions Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedDay === 'all' ? 'all' : selectedDay}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredCompetitions.map((comp) => (
              <div
                key={comp.id}
                className="bg-haldi text-shai p-2.5 sm:p-3 rounded-2xl shadow-xl hover:-translate-y-1.5 transition-all duration-300 relative group flex flex-col border-2 border-sona/40"
              >
                {/* Royal Festive Ticket Frame */}
                <div className="border-2 border-dashed border-sona/60 rounded-xl p-5 sm:p-6 h-full flex flex-col bg-white/70 backdrop-blur-xs relative overflow-hidden">
                  
                  {/* Top Header: Day Badge & Category */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sindoor text-white text-xs font-bold shadow-xs">
                      <Calendar size={12} className="text-yellow-200" />
                      <span>{comp.dayLabel}: {comp.date}</span>
                    </div>

                    {comp.categoryBadge && (
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-kesari/15 text-kesari border border-kesari/30">
                        {comp.categoryBadge}
                      </span>
                    )}
                  </div>

                  {/* Timing Banner */}
                  <div className="flex items-center gap-1.5 text-xs text-shai/75 mb-3 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/60 w-fit">
                    <Clock size={13} className="text-kesari shrink-0" />
                    <span className="font-semibold text-shai/85">वेळ: {comp.time}</span>
                  </div>

                  {/* Title & English Subtitle */}
                  <div className="mb-3">
                    <h3 className="text-2xl sm:text-2xl font-display font-bold text-sindoor leading-tight">
                      {comp.title}
                    </h3>
                    {comp.englishTitle && (
                      <p className="text-xs sm:text-sm font-medium text-shai/60 tracking-wide mt-0.5">
                        ({comp.englishTitle})
                      </p>
                    )}
                  </div>

                  {/* Short Description */}
                  <p className="text-sm text-shai/75 mb-4 leading-relaxed">
                    {comp.desc}
                  </p>

                  {/* Age Group / Audience Requirement (वयोगट) */}
                  <div className="mt-auto mb-4 bg-haldi/90 p-3 rounded-xl border border-sona/30 shadow-2xs">
                    <div className="flex items-start gap-2">
                      <div className="p-1 bg-kesari/15 rounded-md text-kesari shrink-0 mt-0.5">
                        <Users size={15} />
                      </div>
                      <div className="text-xs sm:text-sm">
                        <span className="font-bold text-sindoor block mb-0.5">वयोगट / सहभाग:</span>
                        <span className="font-semibold text-shai leading-snug block">
                          {comp.audience}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Special Note (टीप) if present */}
                  {comp.note && (
                    <div className="mb-4 bg-amber-50/95 border-l-3 border-kesari p-2.5 rounded-r-lg text-xs text-shai/85 flex items-start gap-2">
                      <AlertCircle size={15} className="text-kesari shrink-0 mt-0.5" />
                      <span className="font-medium leading-relaxed">{comp.note}</span>
                    </div>
                  )}

                  {/* Action Register Button */}
                  <div className="pt-2 border-t border-sona/25 mt-auto">
                    {comp.formUrl ? (
                      <a 
                        href={comp.formUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-center w-full bg-mor hover:bg-[#094747] active:scale-98 text-haldi py-2.5 sm:py-3 rounded-xl font-semibold text-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group/btn"
                      >
                        <Award size={16} className="text-yellow-300 group-hover/btn:scale-110 transition-transform" />
                        <span>नोंदणी फॉर्म भरा</span>
                        <ExternalLink size={14} className="text-yellow-200/80 opacity-80" />
                      </a>
                    ) : (
                      <a 
                        href="#contact" 
                        className="block text-center w-full bg-mor/85 hover:bg-mor active:scale-98 text-haldi py-2.5 sm:py-3 rounded-xl font-semibold text-sm transition-all shadow-sm flex items-center justify-center gap-2"
                      >
                        <Sparkles size={16} className="text-yellow-300" />
                        <span>वर्गणीदार सभासदांसाठी थेट सहभाग</span>
                      </a>
                    )}
                  </div>

                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom Registration Helpline & Guidelines Bar */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-black/45 border-2 border-sona/40 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1.5 text-center md:text-left">
            <h4 className="text-xl sm:text-2xl font-display font-bold text-haldi flex items-center justify-center md:justify-start gap-2">
              <Sparkles size={20} className="text-sona" />
              <span>स्पर्धा सहभाग व नावनोंदणी</span>
            </h4>
            <p className="text-sm sm:text-base text-haldi/80 max-w-xl">
              स्पर्धेची पूर्वतयारी व नियोजन सुलभ व्हावे म्हणून सर्व स्पर्धकांनी वेळेपूर्वी आपली नावे समितीकडे नोंदवावीत.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
            <a
              href={`tel:${societyDetails.contact.replace(/\s+/g, '')}`}
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-gradient-to-r from-kesari to-[#FF8833] hover:brightness-110 active:scale-95 text-white font-bold text-sm sm:text-base transition-all shadow-lg flex items-center justify-center gap-2.5 border border-yellow-200/30"
            >
              <PhoneCall size={18} />
              <span>{societyDetails.contact}</span>
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 active:scale-95 text-haldi font-semibold text-sm sm:text-base transition-all border border-sona/40 flex items-center justify-center gap-2"
            >
              <span>संपर्क व माहिती</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
