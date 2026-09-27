import { societyDetails } from '../data';
import { MapPin, Phone, Instagram, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#18100C] text-haldi pt-16 pb-12 px-6 border-t-4 border-kesari relative overflow-hidden">
      {/* Background motif watermark */}
      <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none transform translate-x-1/4 translate-y-1/4">
        <svg width="400" height="400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Main Footer Grid: Contact & Mandal Info */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 pb-12 border-b border-haldi/10 items-start">
          
          {/* Left Column: Mandal Identity & Details */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
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

            <div className="pt-2 text-xs text-haldi/60">
              सोसायटी सदस्यांच्या आणि भाविकांच्या अखंड सहकार्याबद्दल धन्यवाद.
            </div>
          </motion.div>

          {/* Right Column: Address, Phone & Instagram Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-3.5"
          >
            <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/5 border border-white/10">
              <div className="p-2.5 bg-kesari/20 text-kesari rounded-xl shrink-0 mt-0.5">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="font-bold text-xs text-sona uppercase tracking-wider mb-0.5">उत्सव स्थळ व पत्ता</h4>
                <p className="text-haldi/90 text-sm leading-relaxed">{societyDetails.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/5 border border-white/10">
              <div className="p-2.5 bg-emerald-500/20 text-emerald-300 rounded-xl shrink-0 mt-0.5">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="font-bold text-xs text-sona uppercase tracking-wider mb-0.5">संपर्क क्रमांक (Helpline)</h4>
                <a 
                  href={`tel:${societyDetails.contact}`} 
                  className="text-haldi/90 text-base font-mono font-medium hover:text-kesari transition-colors"
                >
                  {societyDetails.contact}
                </a>
              </div>
            </div>

            {societyDetails.instagram && (
              <a 
                href={societyDetails.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-gradient-to-r from-[#833AB4]/20 via-[#FD1D1D]/15 to-[#F77737]/20 border border-pink-500/30 hover:border-pink-500/50 transition-colors block"
              >
                <div className="p-2.5 bg-gradient-to-tr from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white rounded-xl shrink-0 mt-0.5 shadow-md">
                  <Instagram size={20} />
                </div>
                <div className="overflow-hidden">
                  <div className="flex items-center gap-2 mb-0.5">
                    <h4 className="font-bold text-xs text-sona uppercase tracking-wider">अधिकृत Instagram पेज</h4>
                    <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-pink-500/30 text-pink-200 border border-pink-500/40">Official</span>
                  </div>
                  <p className="text-haldi font-mono text-sm font-semibold flex items-center gap-1.5">
                    @{societyDetails.instagram.handle}
                    <ExternalLink size={13} className="opacity-70" />
                  </p>
                </div>
              </a>
            )}
          </motion.div>

        </div>

        {/* Bottom Bar: Copyright & Vandana */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-haldi/50 text-center sm:text-left">
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
