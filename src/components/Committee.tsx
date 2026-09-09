import { useState, useEffect } from 'react';
import { committee, societyDetails, CommitteeMember } from '../data';
import { Crown, Shield, Users, HeartHandshake, PhoneCall, Star, X, ExternalLink, Instagram, Sparkles, Target, Compass } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const MemberPhoto = ({ 
  member, 
  size = "md" 
}: { 
  member: CommitteeMember; 
  size?: "xl" | "lg" | "md" 
}) => {
  const [imgError, setImgError] = useState(false);

  const containerSizes = {
    xl: "w-32 h-32 sm:w-40 sm:h-40",
    lg: "w-32 h-32 md:w-40 md:h-40",
    md: "w-28 h-28 md:w-32 md:h-32",
  };

  const borderPadding = size === "xl" || size === "lg" ? "p-1.5" : "p-1";

  return (
    <div className={`relative ${containerSizes[size]} mx-auto shrink-0 group-hover:scale-105 transition-transform duration-500`}>
      {/* Outer Golden Glow & Halo Ring */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-sona via-kesari to-sona/50 blur-[2px] opacity-75 group-hover:opacity-100 transition-opacity" />

      {/* Frame Container */}
      <div className={`relative w-full h-full rounded-full ${borderPadding} bg-gradient-to-b from-[#E6C364] via-sona to-[#7A5317] shadow-xl overflow-hidden`}>
        <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-[#2E1D16] to-[#170E0A] flex items-center justify-center relative">
          {!imgError && member.photoId ? (
            <img
              src={`/committee/${member.photoId}.jpg`}
              alt={member.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              onError={(e) => {
                const img = e.currentTarget;
                const currentSrc = img.src;
                if (currentSrc.endsWith('.jpg')) {
                  img.src = currentSrc.replace(/\.jpg$/, '.jpeg');
                } else if (currentSrc.endsWith('.jpeg')) {
                  img.src = currentSrc.replace(/\.jpeg$/, '.png');
                } else if (currentSrc.endsWith('.png')) {
                  img.src = currentSrc.replace(/\.png$/, '.webp');
                } else if (member.photoId === 'om_avhad' && !currentSrc.includes('omavhad')) {
                  img.src = '/committee/omavhad.png';
                } else if (member.photoId === 'nachiket' && !currentSrc.includes('nachiket_bodke')) {
                  img.src = '/committee/nachiket_bodke.png';
                } else {
                  setImgError(true);
                }
              }}
            />
          ) : (
            // Artistic Traditional Monogram Avatar
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-sindoor via-[#5A1227] to-[#2B0912] text-sona relative select-none p-2">
              <svg className="absolute inset-0 w-full h-full opacity-20 text-sona pointer-events-none p-1" viewBox="0 0 100 100" fill="none" stroke="currentColor">
                <circle cx="50" cy="50" r="42" strokeWidth="1" strokeDasharray="2 2" />
                <polygon points="50,12 88,50 50,88 12,50" strokeWidth="1" />
                <polygon points="50,18 82,50 50,82 18,50" strokeWidth="0.5" />
              </svg>
              <span className="font-display font-bold text-2xl md:text-3xl text-[#FFE699] tracking-wider drop-shadow-md z-10">
                {member.initials}
              </span>
              <span className="text-[10px] text-sona/80 tracking-widest uppercase font-semibold mt-0.5 z-10">
                कार्यकर्ता
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Decorative Crown / Star insignia on photo frame */}
      {member.isPresident ? (
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 text-shai p-1.5 rounded-full shadow-lg border border-yellow-200 z-10">
          <Crown size={18} className="fill-current text-[#4A2600]" />
        </div>
      ) : (
        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 bg-sindoor/90 text-sona p-1 rounded-full shadow-md border border-sona/40 z-10">
          <Star size={12} className="fill-current text-sona" />
        </div>
      )}
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* FLOATING PROFILE MODAL COMPONENT                                           */
/* -------------------------------------------------------------------------- */
const MemberProfileModal = ({
  member,
  onClose,
}: {
  member: CommitteeMember | null;
  onClose: () => void;
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (member) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [member, onClose]);

  if (!member) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop Blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
          className="relative w-full max-w-lg bg-gradient-to-b from-[#2B1B15] via-[#221510] to-[#170E0A] rounded-3xl border-2 border-sona/50 shadow-2xl shadow-black/80 overflow-hidden text-haldi my-auto z-10"
        >
          {/* Top Traditional Decorative Header Band */}
          <div className="h-2.5 bg-gradient-to-r from-sindoor via-sona to-sindoor" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-haldi/80 hover:text-white transition-colors border border-white/10 z-20"
            aria-label="Close profile"
          >
            <X size={20} />
          </button>

          {/* Corner Traditional Motif */}
          <div className="absolute top-4 left-5 text-sona/30 text-xl pointer-events-none select-none">𑁍</div>

          <div className="p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
            {/* Header: Avatar & Main Title */}
            <div className="flex flex-col items-center text-center pt-2 pb-4">
              <div className="mb-4">
                <MemberPhoto member={member} size="xl" />
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-500/25 to-yellow-500/10 text-yellow-300 border border-yellow-400/50 text-xs sm:text-sm font-semibold tracking-wide shadow-sm mb-2">
                {member.isPresident ? <Crown size={15} className="text-yellow-400 fill-current" /> : <Shield size={14} className="text-sona" />}
                <span>{member.role} ({member.englishRole})</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-wide">
                {member.name}
              </h3>

              <p className="text-xs sm:text-sm text-sona/90 font-medium mt-1 bg-sona/10 px-3 py-1 rounded-full border border-sona/20">
                {member.department}
              </p>
            </div>

            {/* SECTION 1: GANESH FESTIVAL MOTIVE & MISSION (ध्येय व संकल्प) */}
            <div className="my-5 bg-gradient-to-br from-[#381E15]/90 to-[#22120C]/90 rounded-2xl p-5 border border-sona/30 relative shadow-inner">
              <div className="flex items-center gap-2 text-sona text-xs sm:text-sm font-bold mb-2.5">
                <Target size={16} className="text-amber-400" />
                <span className="tracking-wide">गणेशोत्सवातील ध्येय व संकल्प (Motive)</span>
              </div>

              <p className="text-sm sm:text-base text-[#FFF1D0] font-display leading-relaxed relative pl-2">
                <span className="text-sona text-xl font-serif mr-1 leading-none">“</span>
                {member.motive}
                <span className="text-sona text-xl font-serif ml-1 leading-none">”</span>
              </p>
            </div>

            {/* SECTION 2: INSTAGRAM PROFILE DATA */}
            <div className="bg-black/40 rounded-2xl p-5 border border-white/10 relative overflow-hidden">
              {/* Subtle Instagram Gradient Aura */}
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-gradient-to-tr from-[#833ab4]/20 via-[#fd1d1d]/20 to-[#fcb045]/20 rounded-full blur-xl pointer-events-none" />

              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#833ab4] via-[#fd1d1d] to-[#fcb045] flex items-center justify-center text-white shadow-md">
                    <Instagram size={22} />
                  </div>
                  <div>
                    <h4 className="text-xs text-haldi/60 uppercase tracking-wider font-semibold">Instagram</h4>
                    <p className="text-base font-bold text-white font-mono">@{member.instagram.handle}</p>
                  </div>
                </div>

                <a
                  href={member.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white rounded-xl text-xs font-bold hover:brightness-110 transition-all flex items-center gap-1.5 shadow-md shrink-0"
                >
                  <span>भेट द्या</span>
                  <ExternalLink size={13} />
                </a>
              </div>

              {/* Instagram Stats (Followers & Following) */}
              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-white/10">
                <div className="bg-white/5 rounded-xl p-3 text-center border border-white/5">
                  <div className="text-xl font-bold font-mono text-amber-300">
                    {member.instagram.followers}
                  </div>
                  <div className="text-[11px] text-haldi/60 font-medium mt-0.5">
                    Followers
                  </div>
                </div>

                <div className="bg-white/5 rounded-xl p-3 text-center border border-white/5">
                  <div className="text-xl font-bold font-mono text-amber-300">
                    {member.instagram.following}
                  </div>
                  <div className="text-[11px] text-haldi/60 font-medium mt-0.5">
                    Following
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Footer Note */}
            <div className="mt-5 text-center">
              <p className="text-xs text-haldi/50">
                ॥ साई शरणम चा राजा गणेशोत्सव २०२६ ॥
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

/* -------------------------------------------------------------------------- */
/* MAIN COMMITTEE SECTION                                                     */
/* -------------------------------------------------------------------------- */
export default function Committee() {
  const [selectedMember, setSelectedMember] = useState<CommitteeMember | null>(null);

  const president = committee.find((m) => m.isPresident) || committee[0];
  const members = committee.filter((m) => !m.isPresident);

  const pillars = [
    { number: "८ वर्षे", title: "अखंड परंपरा", desc: "स्थापना २०१९ पासून अविरत" },
    { number: "१५०+", title: "समर्पित कुटुंबे", desc: "एकत्रित व उत्साही सहभाग" },
    { number: "१२ दिवस", title: "भक्तिमय सोहळा", desc: "नित्य आरती व महाप्रसाद" },
    { number: "१४+", title: "सांस्कृतिक स्पर्धा", desc: "सर्व वयोगटांसाठी उपक्रम" },
  ];

  return (
    <section id="committee" className="py-24 px-6 bg-[#1F1511] text-haldi relative overflow-hidden">
      {/* Subtle Maratha Royal Filigree & Diya Motif Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px]" />
      
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-sindoor/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-sona/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#FFFDF0] via-[#E8C574] to-[#C89B3C] py-2 leading-tight drop-shadow-md">
            कार्यकारिणी समिती
          </h2>
          
          <div className="flex items-center justify-center gap-3 my-4">
            <div className="w-16 sm:w-24 h-0.5 bg-gradient-to-r from-transparent to-sona/60" />
            <span className="text-sona text-base">𑁍</span>
            <div className="w-16 sm:w-24 h-0.5 bg-gradient-to-l from-transparent to-sona/60" />
          </div>

          <p className="text-haldi/75 text-base sm:text-lg md:text-xl font-display leading-relaxed">
            उत्सव शिस्तबद्ध, भव्य व यशस्वी करण्यासाठी अहोरात्र झटणारे आमचे निस्वार्थी पदाधिकारी व कार्यकर्ते. <br className="hidden sm:inline" />
            <span className="text-sona/90 text-sm font-medium">(प्रोफाइल व ध्येय पाहण्यासाठी सदस्याच्या कार्डवर क्लिक करा)</span>
          </p>
        </motion.div>

        {/* 1. PRESIDENT FEATURE CARD (अध्यक्ष विशेष सन्मान) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-4xl mx-auto"
        >
          <div 
            onClick={() => setSelectedMember(president)}
            className="group relative bg-gradient-to-b from-[#2B1B15] via-[#241712] to-[#1A100C] rounded-3xl p-6 sm:p-8 md:p-10 border-2 border-sona/40 hover:border-sona transition-all duration-300 shadow-2xl shadow-black/60 overflow-hidden cursor-pointer hover:scale-[1.01]"
          >
            {/* Corner Traditional Accents */}
            <div className="absolute top-3 left-4 text-sona/40 text-lg select-none">𑁍</div>
            <div className="absolute top-3 right-4 text-sona/40 text-lg select-none">𑁍</div>
            <div className="absolute bottom-3 left-4 text-sona/40 text-lg select-none">𑁍</div>
            <div className="absolute bottom-3 right-4 text-sona/40 text-lg select-none">𑁍</div>

            {/* Subtle Royal Aura Background */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-sona/10 rounded-full blur-2xl pointer-events-none group-hover:bg-sona/20 transition-colors" />

            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10 text-center md:text-left relative z-10">
              
              {/* President Avatar */}
              <MemberPhoto member={president} size="lg" />

              {/* President Details */}
              <div className="flex-grow space-y-4">
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                  <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-500/25 to-yellow-500/10 text-yellow-300 border border-yellow-400/50 text-sm font-semibold tracking-wide shadow-sm">
                    <Crown size={15} className="text-yellow-400 fill-current" />
                    <span>अध्यक्ष (President)</span>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-haldi/70 font-medium">
                    {president.department}
                  </span>
                </div>

                <div>
                  <h3 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-wide group-hover:text-sona transition-colors">
                    {president.name}
                  </h3>
                  <p className="text-sm font-medium text-kesari mt-0.5 tracking-wider">
                    {societyDetails.name} गणेशोत्सव मंडळ
                  </p>
                </div>

                {/* President Message / Quote */}
                <div className="relative bg-black/25 rounded-2xl p-4 sm:p-5 border border-sona/20 text-haldi/85 text-sm sm:text-base font-display italic leading-relaxed">
                  <span className="text-sona text-2xl font-serif mr-1 leading-none">“</span>
                  {president.motive}
                  <span className="text-sona text-2xl font-serif ml-1 leading-none">”</span>
                </div>

                {/* Interactive Click Cue */}
                <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-semibold text-sona pt-1">
                  <span className="inline-flex items-center gap-1.5 bg-sona/10 hover:bg-sona/20 px-3 py-1 rounded-full border border-sona/30 transition-colors">
                    <Instagram size={13} className="text-pink-400" />
                    <span>प्रोफाइल व Instagram माहिती पहा ↗</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 2. EXECUTIVE COMMITTEE MEMBERS GRID (कार्यकारी सदस्य) */}
        <div className="mb-20">
          <div className="flex items-center gap-2.5 mb-8 pb-3 border-b border-sona/20">
            <div className="p-2 bg-sindoor/30 rounded-lg text-sona border border-sona/20">
              <Users size={20} />
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-haldi">
              कार्यकारी सदस्य मंडळ
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {members.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                onClick={() => setSelectedMember(member)}
                className="group relative bg-gradient-to-b from-[#281A14] to-[#1E130E] rounded-2xl p-6 border border-sona/20 hover:border-sona transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-2xl hover:shadow-black/50 flex flex-col items-center text-center overflow-hidden cursor-pointer"
              >
                {/* Subtle top amber highlight line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-sona/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Corner ornament */}
                <div className="absolute top-2.5 right-3 text-sona/20 text-sm select-none group-hover:text-sona/50 transition-colors">𑁍</div>

                {/* Avatar */}
                <div className="mb-5 mt-2">
                  <MemberPhoto member={member} size="md" />
                </div>

                {/* Member Info */}
                <h4 className="text-xl sm:text-2xl font-display font-bold text-white mb-2 group-hover:text-sona transition-colors">
                  {member.name}
                </h4>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-kesari/15 text-kesari border border-kesari/30 text-xs font-semibold mb-3">
                  <Shield size={12} />
                  <span>{member.role}</span>
                </div>

                <div className="w-full pt-3 mt-auto border-t border-white/5 space-y-2">
                  <p className="text-xs sm:text-sm text-haldi/70 font-medium bg-white/5 py-1.5 px-3 rounded-lg border border-white/5">
                    {member.department}
                  </p>

                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-sona/80 group-hover:text-sona font-medium pt-1 transition-colors">
                    <Instagram size={12} className="text-pink-400" />
                    <span>प्रोफाइल पहा ↗</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 3. MANDAL PILLARS & STATS STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16"
        >
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-[#2A1C16]/80 rounded-2xl p-5 sm:p-6 border border-sona/20 text-center relative overflow-hidden group hover:border-sona/50 transition-colors"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-sona to-amber-200 mb-1">
                {pillar.number}
              </div>
              <h5 className="font-bold text-sm sm:text-base text-white mb-0.5">
                {pillar.title}
              </h5>
              <p className="text-xs text-haldi/60">
                {pillar.desc}
              </p>
            </div>
          ))}
        </motion.div>

        {/* 4. VOLUNTEER & COMMUNITY INVITATION CALLOUT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-sindoor/90 via-[#6E142F] to-sindoor/90 rounded-3xl p-6 sm:p-8 md:p-10 border-2 border-sona/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
        >
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-sona/20 rounded-full text-yellow-300 text-xs font-bold border border-yellow-400/30">
              <HeartHandshake size={14} />
              <span>॥ सेवा हीच ईश्वरभक्ती ॥</span>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-haldi">
              उत्सवात स्वयंसेवक म्हणून सहभागी व्हा!
            </h3>
            <p className="text-sm sm:text-base text-haldi/80 max-w-2xl">
              मंडळाच्या विविध उपक्रमांत, आरती, महाप्रसाद व स्पर्धा व्यवस्थेत हातभार लावण्यासाठी सर्व इच्छुक बंधू-भगिनींचे स्वागत आहे.
            </p>
          </div>

          <div className="shrink-0 flex flex-wrap gap-3 justify-center">
            {societyDetails.instagram && (
              <a
                href={societyDetails.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white px-6 py-3 rounded-xl font-bold text-base hover:brightness-110 shadow-lg transition-all active:scale-95 whitespace-nowrap border border-white/20"
              >
                <Instagram size={18} />
                <span>Instagram: @{societyDetails.instagram.handle}</span>
              </a>
            )}

            <a
              href={`tel:${societyDetails.contact}`}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-sona to-[#DFB04F] text-shai px-6 py-3 rounded-xl font-bold text-base hover:brightness-110 shadow-lg transition-transform active:scale-95 whitespace-nowrap"
            >
              <PhoneCall size={18} />
              <span>समितीशी संपर्क साधा</span>
            </a>
          </div>
        </motion.div>

      </div>

      {/* Floating Profile Modal */}
      {selectedMember && (
        <MemberProfileModal
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}
    </section>
  );
}
