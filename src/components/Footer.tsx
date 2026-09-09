import { useState } from 'react';
import { societyDetails } from '../data';
import { MapPin, Phone, QrCode, Copy, Check, Heart, Sparkles, Instagram, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyUpi = () => {
    navigator.clipboard.writeText(societyDetails.upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer id="contact" className="bg-[#18100C] text-haldi pt-20 pb-12 px-6 border-t-4 border-kesari relative overflow-hidden">
      {/* Background motif watermark */}
      <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none transform translate-x-1/4 translate-y-1/4">
        <svg width="400" height="400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main Footer Grid: Contact & Donation */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-haldi/10">
          
          {/* Left Column: Mandal Identity & Details */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="flex items-center gap-3">
              <img 
                src="/Screenshot_2026-08-21_174100-removebg-preview.png" 
                alt="Ganpati Logo" 
                className="w-12 h-12 object-contain drop-shadow"
              />
              <div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-sona">
                  {societyDetails.name}
                </h3>
                <p className="text-xs text-haldi/60 tracking-wider">
                  स्थापना वर्ष {societyDetails.established} • गणेशोत्सव मंडळ
                </p>
              </div>
            </div>

            <p className="text-haldi/80 text-base leading-relaxed max-w-lg">
              बाप्पाच्या चरणी नतमस्तक होऊन समाज प्रबोधन, सांस्कृतिक एकता आणि भक्तिभावाचा जागर करणारा आपला लाडका उत्सव!
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-sona/40 transition-colors">
                <div className="p-3 bg-kesari/20 text-kesari rounded-xl shrink-0 mt-0.5">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-sona uppercase tracking-wider mb-1">उत्सव स्थळ व पत्ता</h4>
                  <p className="text-haldi/90 text-sm sm:text-base leading-relaxed">{societyDetails.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-sona/40 transition-colors">
                <div className="p-3 bg-mor/30 text-emerald-300 rounded-xl shrink-0 mt-0.5">
                  <Phone size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-sona uppercase tracking-wider mb-1">संपर्क क्रमांक (Helpline)</h4>
                  <a 
                    href={`tel:${societyDetails.contact}`} 
                    className="text-haldi/90 text-base sm:text-lg font-mono font-medium hover:text-kesari transition-colors"
                  >
                    {societyDetails.contact}
                  </a>
                  <p className="text-xs text-haldi/50 mt-0.5">आरती व पूजा माहितीसाठी उपलब्ध</p>
                </div>
              </div>

              {societyDetails.instagram && (
                <a 
                  href={societyDetails.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-[#833AB4]/20 via-[#FD1D1D]/15 to-[#F77737]/20 border border-pink-500/30 hover:border-pink-500/60 transition-all group"
                >
                  <div className="p-3 bg-gradient-to-tr from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white rounded-xl shrink-0 mt-0.5 shadow-md group-hover:scale-105 transition-transform">
                    <Instagram size={22} />
                  </div>
                  <div className="overflow-hidden">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-bold text-sm text-sona uppercase tracking-wider">अधिकृत Instagram पेज</h4>
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-pink-500/30 text-pink-200 border border-pink-500/40">Official</span>
                    </div>
                    <p className="text-haldi font-mono text-base font-semibold group-hover:text-pink-300 transition-colors flex items-center gap-1.5">
                      @{societyDetails.instagram.handle}
                      <ExternalLink size={14} className="opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </p>
                    <p className="text-xs text-haldi/60 mt-0.5">उत्सवाचे थेट प्रक्षेपण, रील्स व फोटो पाहण्यासाठी नक्की फॉलो करा</p>
                  </div>
                </a>
              )}
            </div>
          </motion.div>

          {/* Right Column: Donation & UPI Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-6 flex flex-col justify-between"
          >
            <div className="bg-gradient-to-br from-[#281A14] to-[#1D120D] p-6 sm:p-8 rounded-3xl border-2 border-sona/30 relative overflow-hidden shadow-2xl">
              
              <div className="flex items-center justify-between gap-4 mb-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-sona/15 rounded-full text-sona text-xs font-bold border border-sona/30 mb-2">
                    <Sparkles size={12} />
                    <span>देणगी व वर्गणी (Donation)</span>
                  </div>
                  <h4 className="text-2xl font-display font-bold text-white">
                    उत्सवात आर्थिक सहकार्य करा
                  </h4>
                </div>

                <div className="p-3 bg-sindoor/30 rounded-2xl text-sona border border-sona/20 shrink-0">
                  <QrCode size={30} />
                </div>
              </div>

              <p className="text-haldi/75 text-sm mb-6 leading-relaxed">
                आपल्या ऐच्छिक देणगीमुळे सामाजिक उपक्रम, महाप्रसाद व बालसंस्कार स्पर्धा यशस्वी होण्यास मोलाचा हातभार लागतो.
              </p>

              {/* UPI ID Pill with Copy Action */}
              <div className="bg-black/40 p-4 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <div className="overflow-hidden">
                  <p className="text-xs text-haldi/50 uppercase font-semibold">अधिकृत UPI ID</p>
                  <p className="text-base sm:text-lg font-mono text-kesari font-bold truncate">
                    {societyDetails.upiId}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleCopyUpi}
                  className="inline-flex items-center justify-center gap-2 bg-sona/20 hover:bg-sona/30 text-yellow-200 px-4 py-2.5 rounded-xl text-sm font-semibold border border-sona/40 transition-all active:scale-95 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check size={16} className="text-emerald-400" />
                      <span className="text-emerald-400">कॉपी झाले!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={16} />
                      <span>UPI ID कॉपी करा</span>
                    </>
                  )}
                </button>
              </div>

              <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-haldi/50">
                <Heart size={14} className="text-sindoor shrink-0 fill-current" />
                <span>GPay, PhonePe, Paytm किंवा कोणत्याही UPI ॲपद्वारे देणगी स्वीकारली जाईल.</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom Bar: Copyright & Vandana */}
        <div className="mt-10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-haldi/50 text-center sm:text-left">
          <p>
            © {societyDetails.year} {societyDetails.name} गणेशोत्सव मंडळ. सर्व हक्क राखीव.
          </p>
          <p className="font-display font-semibold text-sona/80 tracking-widest text-sm">
            ॥ गणपती बाप्पा मोरया, मंगलमूर्ती मोरया ॥
          </p>
        </div>

      </div>
    </footer>
  );
}
