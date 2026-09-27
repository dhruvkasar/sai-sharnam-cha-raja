import { useState } from 'react';
import { competitions, competitionDays, societyDetails } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, 
  Clock, 
  Users, 
  Sparkles, 
  AlertCircle, 
  PhoneCall, 
  Award, 
  Trophy, 
  ExternalLink, 
  Bell, 
  Heart, 
  CheckCircle2, 
  PartyPopper,
  Check,
  X,
  Info,
  HelpCircle
} from 'lucide-react';

export default function Competitions() {
  const [selectedDay, setSelectedDay] = useState<number | 'all' | 'tba' | 'completed'>('all');
  const [showNoticeBanner, setShowNoticeBanner] = useState(true);
  const [showChangesTooltip, setShowChangesTooltip] = useState(false);

  const completedCount = competitions.filter(c => c.isCompleted).length;

  const filteredCompetitions = competitions.filter(comp => {
    if (selectedDay === 'all' || selectedDay === 'completed') return true;
    if (selectedDay === 'tba') return comp.day === 0;
    return comp.day === selectedDay;
  });

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
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/25 text-emerald-200 border border-emerald-400/50 text-xs sm:text-sm font-semibold tracking-wide mb-4 shadow-sm">
            <CheckCircle2 size={15} className="text-emerald-300" />
            <span>सर्व स्पर्धा यशस्वीरीत्या संपन्न • गणेशोत्सव २०२६</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-display mb-4 text-haldi drop-shadow-sm">
            भव्य स्पर्धा महोत्सव (संपन्न)
          </h2>
          <div className="w-32 h-1 bg-sona mx-auto mb-5 rounded-full" />
          <p className="text-base sm:text-lg md:text-xl text-haldi/85 max-w-3xl mx-auto leading-relaxed">
            साई शरणम सोसायटीमधील सर्व लहान मुले, महिला, तरुण व ज्येष्ठ नागरिकांसाठी आयोजित केलेल्या सर्व १७ स्पर्धा मोठ्या जल्लोषात आणि उत्साहात संपन्न झाल्या आहेत. सर्व विजेत्यांचे मनःपूर्वक अभिनंदन!
          </p>
        </div>

        {/* ======================================================== */}
        {/* ALL COMPETITIONS COMPLETED NOTIFICATION ALERT BANNER */}
        {/* ======================================================== */}
        <AnimatePresence>
          {showNoticeBanner && (
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, height: 0, marginBottom: 0, overflow: 'hidden' }}
              className="mb-8 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-950/95 via-[#064e3b]/95 to-emerald-950/95 border-2 border-emerald-400/60 shadow-2xl backdrop-blur-md relative overflow-hidden"
            >
              {/* Subtle background glow */}
              <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none" />

              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 relative z-10">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-emerald-500/20 border border-emerald-400/40 rounded-xl text-emerald-300 shrink-0 mt-0.5 shadow-sm">
                    <Trophy size={24} className="text-yellow-300 animate-pulse" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/30 text-emerald-200 border border-emerald-400/40 text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                        <Check size={12} />
                        <span>सर्व स्पर्धा व गणेशोत्सव संपन्न</span>
                      </span>
                      <span className="text-xs text-yellow-300 font-semibold">
                        एकूण {competitions.length} स्पर्धा यशस्वीरीत्या पूर्ण
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-display font-bold text-white leading-snug">
                      सर्व स्पर्धा आणि गणेशोत्सव २०२६ मोठ्या उत्साहात संपन्न झाले आहेत!
                    </h3>
                    <p className="text-xs sm:text-sm text-emerald-100/90 mt-1 leading-relaxed max-w-3xl">
                      चित्रकला, चमचा गोटी, बेडूक उड्या, तीन पायाची शर्यत, बुक बॅलन्सिंग, स्लो सायकल, वक्तृत्व, श्लोक पाठांतर, पाककला, गायन, नृत्य, फुगे स्पर्धा, जोडप्यांचे खेळ, संगीत खुर्ची, वेशभूषा तसेच चेस व बुद्धिबळ या सर्व स्पर्धा यशस्वीरीत्या पार पडल्या. सर्व सहभागी आणि विजेत्यांचे मनःपूर्वक अभिनंदन!
                    </p>
                  </div>
                </div>

                {/* Quick Action Buttons */}
                <div className="flex flex-wrap items-center gap-2 self-stretch sm:self-auto sm:shrink-0 justify-end">
                  <button
                    type="button"
                    onClick={() => setSelectedDay('all')}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-sm border ${
                      selectedDay === 'all'
                        ? 'bg-emerald-400 text-emerald-950 border-white'
                        : 'bg-emerald-900/80 hover:bg-emerald-800 text-emerald-200 border-emerald-500/40'
                    }`}
                  >
                    <PartyPopper size={13} />
                    <span>सर्व १७ स्पर्धा पहा</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setShowNoticeBanner(false)}
                    title="ही सूचना बंद करा"
                    className="p-1.5 rounded-xl text-emerald-300 hover:text-white hover:bg-white/10 transition-colors ml-1 cursor-pointer"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Quick Filter Tool + Changes Tooltip */}
        <div className="mb-4 flex flex-wrap items-center justify-center gap-2 select-none text-xs sm:text-sm relative">
          <button
            type="button"
            onClick={() => setSelectedDay('all')}
            title="सर्व संपन्न झालेल्या १७ स्पर्धा पाहा"
            className={`px-3.5 py-1.5 rounded-full font-semibold transition-all border flex items-center gap-1.5 cursor-pointer ${
              selectedDay === 'all'
                ? 'bg-emerald-500 text-white border-white shadow-md font-bold scale-105'
                : 'bg-emerald-950/70 text-emerald-200 border-emerald-500/40 hover:bg-emerald-900'
            }`}
          >
            <CheckCircle2 size={14} className="text-emerald-300" />
            <span>सर्व संपन्न स्पर्धा ({completedCount})</span>
          </button>

          {/* Tooltip trigger button for changes info */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowChangesTooltip(!showChangesTooltip)}
              onMouseEnter={() => setShowChangesTooltip(true)}
              title="नवीन झालेले बदल व सूचना पाहा (क्लिक करा)"
              aria-label="स्पर्धेतील व उत्सवातील महत्त्वाचे बदल पाहा"
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all border flex items-center gap-1.5 cursor-pointer shadow-sm ${
                showChangesTooltip 
                  ? 'bg-amber-400 text-amber-950 border-white ring-2 ring-amber-300' 
                  : 'bg-amber-500/25 text-yellow-200 border-amber-400/60 hover:bg-amber-500/40'
              }`}
            >
              <HelpCircle size={14} className="text-yellow-300 shrink-0" />
              <span className="font-bold">बदल / सूचना टूलटिप</span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-300"></span>
              </span>
            </button>

            {/* Tooltip Popover */}
            <AnimatePresence>
              {showChangesTooltip && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 sm:left-1/2 sm:-translate-x-1/2 top-full mt-2 w-80 sm:w-96 p-4 rounded-xl bg-gradient-to-br from-amber-950/98 via-stone-900/98 to-emerald-950/98 border-2 border-yellow-400/80 shadow-2xl backdrop-blur-md z-50 text-left text-xs"
                >
                  <div className="flex items-start justify-between gap-2 mb-2.5 pb-2 border-b border-yellow-400/30">
                    <div className="flex items-center gap-1.5 text-yellow-300 font-bold">
                      <Sparkles size={14} className="text-yellow-400" />
                      <span>नवीन झालेले बदल व सूचना (ताजी माहिती)</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setShowChangesTooltip(false)}
                      className="p-1 text-haldi/60 hover:text-white rounded-lg transition-colors cursor-pointer"
                      title="बंद करा"
                    >
                      <X size={13} />
                    </button>
                  </div>

                  <div className="space-y-2.5 text-haldi/90">
                    <div className="flex items-start gap-2 bg-black/50 p-2.5 rounded-lg border border-emerald-500/40">
                      <CheckCircle2 size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-emerald-300 block mb-0.5">सर्व स्पर्धा संपन्न:</strong>
                        <p className="text-[11px] text-gray-200 leading-snug">
                          १६ ते २४ सप्टेंबरच्या सर्व स्पर्धा आणि चेस/बुद्धिबळ अशा एकूण सर्व १७ स्पर्धा यशस्वीरीत्या पार पडल्या आहेत. सर्व स्पर्धांवर 'संपन्न' शिक्का लावण्यात आला आहे.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 bg-black/50 p-2.5 rounded-lg border border-amber-500/40">
                      <Trophy size={15} className="text-yellow-300 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-yellow-300 block mb-0.5">गणेशोत्सव २०२६ सांगता:</strong>
                        <p className="text-[11px] text-gray-200 leading-snug">
                          १२ दिवसांचा लाडक्या बाप्पाचा गणेशोत्सव अत्यंत भक्तीमय वातावरणात व अनंत चतुर्दशी विसर्जनासह संपन्न झाला आहे. "गणपती बाप्पा मोरया, पुढच्या वर्षी लवकर या!"
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 bg-black/50 p-2.5 rounded-lg border border-pink-500/40">
                      <Heart size={15} className="text-pink-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-pink-300 block mb-0.5">मनःपूर्वक आभार व अभिनंदन:</strong>
                        <p className="text-[11px] text-gray-200 leading-snug">
                          सोसायटीतील सर्व सहभागी स्पर्धक, विजयी स्पर्धक, देणगीदार व स्वयंसेवकांचे मंडळाकडून हार्दिक आभार!
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 pt-2 text-[10px] text-haldi/70 border-t border-yellow-400/20 text-center">
                    टूलटिप बंद करण्यासाठी 'X' वर क्लिक करा
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Day Filter Pills (Sticky-friendly or horizontal scroll) */}
        <div className="mb-10">
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 pt-1 px-1 no-scrollbar text-xs sm:text-sm select-none">
            <button
              type="button"
              onClick={() => setSelectedDay('all')}
              className={`px-3.5 py-2 rounded-full font-medium transition-all whitespace-nowrap border flex items-center gap-1.5 cursor-pointer shadow-sm ${
                selectedDay === 'all'
                  ? 'bg-emerald-500 text-white border-white shadow-md font-bold scale-105'
                  : 'bg-emerald-950/60 text-emerald-200 border-emerald-500/40 hover:bg-emerald-900/80'
              }`}
            >
              <CheckCircle2 size={13} className="text-emerald-300 shrink-0" />
              <span>सर्व दिवस (Day 1 ते Day 8)</span>
              <span className="text-[10px] px-1.5 py-0.2 bg-emerald-800 text-emerald-100 rounded-md font-bold">संपन्न</span>
            </button>

            {competitionDays.map(cd => (
              <button
                key={cd.day}
                type="button"
                onClick={() => setSelectedDay(cd.day)}
                className={`px-3.5 py-2 rounded-full font-medium transition-all whitespace-nowrap border flex items-center gap-1.5 cursor-pointer shadow-sm ${
                  selectedDay === cd.day
                    ? 'bg-sona text-shai border-yellow-200 shadow-md font-semibold scale-105'
                    : 'bg-emerald-950/60 text-emerald-200 border-emerald-500/40 hover:bg-emerald-900/80'
                }`}
              >
                <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                <span>{cd.dayLabel}: {cd.date}</span>
                <span className="text-[10px] px-1.5 py-0.2 bg-emerald-800 text-emerald-100 rounded-md font-bold">संपन्न</span>
              </button>
            ))}

            <button
              type="button"
              onClick={() => setSelectedDay('tba')}
              className={`px-3.5 py-2 rounded-full font-medium transition-all whitespace-nowrap border flex items-center gap-1.5 cursor-pointer shadow-sm ${
                selectedDay === 'tba'
                  ? 'bg-sona text-shai border-yellow-200 shadow-md font-semibold scale-105'
                  : 'bg-emerald-950/60 text-emerald-200 border-emerald-500/40 hover:bg-emerald-900/80'
              }`}
            >
              <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
              <span>विशेष स्पर्धा (चेस व बुद्धिबळ)</span>
              <span className="text-[10px] px-1.5 py-0.2 bg-emerald-800 text-emerald-100 rounded-md font-bold">संपन्न</span>
            </button>
          </div>

          {/* Active Filter Info Banner */}
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-3.5 rounded-xl bg-emerald-950/80 border border-emerald-400/50 text-center max-w-xl mx-auto flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm text-emerald-200"
          >
            <CheckCircle2 size={15} className="text-emerald-300" />
            <span className="font-bold text-white">
              {selectedDay === 'all' 
                ? 'सर्व १७ स्पर्धा यशस्वीरीत्या संपन्न:' 
                : selectedDay === 'tba'
                ? 'विशेष स्पर्धा (चेस व बुद्धिबळ):'
                : `${competitionDays.find(d => d.day === selectedDay)?.dayLabel} (${competitionDays.find(d => d.day === selectedDay)?.date}):`}
            </span>
            <span>
              {selectedDay === 'all'
                ? 'सर्व स्पर्धा पूर्ण झाल्या असून सर्व विजेत्यांचे मनःपूर्वक अभिनंदन!'
                : `या दिवसाच्या एकूण ${filteredCompetitions.length} स्पर्धा संपन्न झाल्या आहेत.`}
            </span>
          </motion.div>
        </div>

        {/* Competitions Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={String(selectedDay)}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredCompetitions.map((comp) => (
              <div
                key={comp.id}
                className={`p-2.5 sm:p-3 rounded-2xl shadow-xl hover:-translate-y-1.5 transition-all duration-300 relative group flex flex-col border-2 ${
                  comp.isCompleted
                    ? 'bg-emerald-50 text-shai border-emerald-500/70'
                    : 'bg-haldi text-shai border-sona/40'
                }`}
              >
                {/* Royal Festive Ticket Frame */}
                <div className={`border-2 border-dashed rounded-xl p-5 sm:p-6 h-full flex flex-col backdrop-blur-xs relative overflow-hidden ${
                  comp.isCompleted
                    ? 'border-emerald-500/50 bg-white/90'
                    : 'border-sona/60 bg-white/70'
                }`}>
                  
                  {/* Top Header: Day Badge & Category */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    {comp.isCompleted ? (
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-800 text-white text-xs font-bold shadow-xs">
                        <CheckCircle2 size={13} className="text-emerald-300" />
                        <span>{comp.date} • स्पर्धा संपन्न</span>
                      </div>
                    ) : comp.customDateNotice ? (
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-700 text-white text-xs font-bold shadow-xs">
                        <Bell size={12} className="text-yellow-200 animate-pulse" />
                        <span>तारीख लवकरच जाहीर</span>
                      </div>
                    ) : (
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sindoor text-white text-xs font-bold shadow-xs">
                        <Calendar size={12} className="text-yellow-200" />
                        <span>{comp.dayLabel}: {comp.date}</span>
                      </div>
                    )}

                    {comp.categoryBadge && (
                      <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${
                        comp.isCompleted
                          ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                          : 'bg-kesari/15 text-kesari border-kesari/30'
                      }`}>
                        {comp.categoryBadge}
                      </span>
                    )}
                  </div>

                  {/* Timing Banner or Notification */}
                  {comp.isCompleted ? (
                    <div className="flex items-center gap-1.5 text-xs text-emerald-950 mb-3 bg-emerald-100/90 px-2.5 py-1.5 rounded-md border border-emerald-300 font-semibold w-full">
                      <CheckCircle2 size={14} className="text-emerald-700 shrink-0" />
                      <span>वेळ: {comp.time} • (स्पर्धा समाप्त)</span>
                    </div>
                  ) : comp.customDateNotice ? (
                    <div className="flex items-center gap-2 text-xs text-amber-950 mb-3 bg-amber-100/90 px-3 py-2 rounded-xl border border-amber-300 font-bold w-full shadow-2xs">
                      <Bell size={14} className="text-amber-700 shrink-0" />
                      <span>{comp.customDateNotice}</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5 text-xs text-shai/75 mb-3 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/60 w-fit">
                      <Clock size={13} className="text-kesari shrink-0" />
                      <span className="font-semibold text-shai/85">वेळ: {comp.time}</span>
                    </div>
                  )}

                  {/* Title & English Subtitle */}
                  <div className="mb-3">
                    <h3 className={`text-2xl sm:text-2xl font-display font-bold leading-tight ${
                      comp.isCompleted ? 'text-emerald-900' : 'text-sindoor'
                    }`}>
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

                  {/* Action Register Button / Completed Status Button */}
                  <div className="pt-2 border-t border-sona/25 mt-auto">
                    {comp.isCompleted ? (
                      <div className="space-y-1.5 w-full">
                        <div 
                          className="w-full py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-800 text-emerald-50 font-bold text-sm shadow-md flex items-center justify-center gap-2 border border-emerald-500/60 select-none"
                        >
                          <CheckCircle2 size={16} className="text-emerald-300" />
                          <span>स्पर्धा संपन्न • नोंदणी बंद</span>
                        </div>
                        <p className="text-[11px] text-center text-emerald-900 font-bold">
                          🎉 सर्व स्पर्धकांचे व विजेत्यांचे मनःपूर्वक अभिनंदन!
                        </p>
                      </div>
                    ) : comp.customActionText ? (
                      <div 
                        className="text-center w-full bg-gradient-to-r from-sindoor via-kesari to-sindoor text-white py-2.5 sm:py-3 rounded-xl font-bold text-sm shadow-md flex items-center justify-center gap-2 border border-yellow-300/40 select-none"
                      >
                        <Heart size={16} className="text-yellow-200 fill-yellow-200" />
                        <span>{comp.customActionText}</span>
                      </div>
                    ) : comp.formUrl ? (
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
              <Trophy size={20} className="text-sona" />
              <span>स्पर्धा महोत्सव सांगता व आभार</span>
            </h4>
            <p className="text-sm sm:text-base text-haldi/80 max-w-xl">
              सर्व १७ स्पर्धांमध्ये उत्स्फूर्त सहभाग घेतल्याबद्दल सर्व लहान मुले, महिला, युवक व ज्येष्ठ नागरिकांचे मनःपूर्वक आभार! विजेत्यांचे अभिनंदन!
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
              href="#committee"
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 active:scale-95 text-haldi font-semibold text-sm sm:text-base transition-all border border-sona/40 flex items-center justify-center gap-2"
            >
              <span>समिती सदस्य माहिती</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
