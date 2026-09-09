import { motion } from 'motion/react';
import { societyDetails } from '../data';
import { Calendar, MapPin, Sparkles, Heart, Clock } from 'lucide-react';

export default function Invitation() {
  return (
    <section id="invitation" className="pt-24 pb-16 sm:py-24 px-3.5 sm:px-6 bg-gradient-to-b from-haldi via-[#FFF5DE] to-haldi relative overflow-hidden scroll-mt-20 sm:scroll-mt-24">
      {/* Background Image & Texture - Properly contained and centered */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center">
        <img 
          src="/bg.png" 
          alt="" 
          className="w-full max-w-[320px] sm:max-w-[500px] md:max-w-2xl lg:max-w-3xl aspect-square object-contain opacity-10 sm:opacity-15 mix-blend-multiply select-none"
          onError={(e) => {
            (e.currentTarget as HTMLElement).style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-haldi/85 via-[#FFF5DE]/75 to-haldi/90" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Royal Patrika / Invitation Letter Card with scaled Sai Sharnam Cha Raja watermark */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 sm:p-10 md:p-14 shadow-2xl border-3 sm:border-4 border-double border-sona/50 relative overflow-hidden text-center"
        >
          {/* Card inner watermark: Sai Sharnam Cha Raja scaled to fit perfectly on mobile without cropping */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden p-4 sm:p-8">
            <img 
              src="/bg.png" 
              alt="साई शरणम चा राजा" 
              className="w-full max-w-[270px] sm:max-w-[380px] md:max-w-[460px] aspect-square object-contain opacity-12 sm:opacity-15 mix-blend-multiply select-none"
              onError={(e) => {
                (e.currentTarget as HTMLElement).style.display = 'none';
              }}
            />
          </div>

          {/* Corner Ornamental Accents */}
          <div className="absolute top-3 left-3 text-sona text-xl select-none z-10">𑁍</div>
          <div className="absolute top-3 right-3 text-sona text-xl select-none z-10">𑁍</div>
          <div className="absolute bottom-3 left-3 text-sona text-xl select-none z-10">𑁍</div>
          <div className="absolute bottom-3 right-3 text-sona text-xl select-none z-10">𑁍</div>

          {/* Top Heading Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-1.5 bg-sindoor/10 rounded-full text-sindoor font-semibold text-sm md:text-base mb-6 border border-sindoor/25">
            <Sparkles size={16} />
            <span>॥ सस्नेह निमंत्रण ॥</span>
            <Sparkles size={16} />
          </div>

          <p className="text-xs md:text-sm font-semibold tracking-widest text-sona mb-3 uppercase">
            ॥ श्री गणेशाय नमः ॥
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-sindoor mb-6 leading-tight">
            गणेशोत्सव {societyDetails.year}
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-sona to-transparent mx-auto mb-8 rounded-full"></div>

          {/* Invitation Letter Body */}
          <div className="space-y-4 text-shai/85 text-base sm:text-lg md:text-xl font-display leading-relaxed max-w-2xl mx-auto">
            <p className="font-semibold text-kesari text-xl sm:text-2xl">
              स्नेही भक्तजन व सभासद बंधू-भगिनींनो,
            </p>
            
            <p>
              दरवर्षीप्रमाणे यंदाही आपल्या <strong>{societyDetails.name}</strong> गणेशोत्सव मंडळातर्फे लाडक्या बाप्पाचा गणेशोत्सव अत्यंत भक्तिभावाने व उत्साहाने साजरा केला जात आहे.
            </p>
            
            <p>
              तरी आपण सर्वांनी सहकुटुंब, सहपरिवार उपस्थित राहून बाप्पाच्या चरणी नतमस्तक व्हावे, दैनंदिन आरती, विविध स्पर्धा व महाप्रसादाचा लाभ घेऊन उत्सवाची शोभा वाढवावी, ही नम्र विनंती.
            </p>
          </div>

          {/* Event Highlights Capsule Grid */}
          <div className="grid sm:grid-cols-2 gap-3.5 sm:gap-4 my-8 text-left max-w-2xl mx-auto">
            <div className="bg-haldi/70 p-4 rounded-2xl border border-sona/30 flex items-start gap-3.5">
              <div className="p-2.5 bg-kesari/15 rounded-xl text-kesari shrink-0 mt-0.5">
                <Calendar size={22} />
              </div>
              <div>
                <p className="text-xs font-bold text-kesari uppercase tracking-wide">श्री गणेश आगमन</p>
                <p className="text-base sm:text-lg font-bold text-shai font-display">
                  १४ सप्टेंबर २०२६ (सोमवार)
                </p>
              </div>
            </div>

            <div className="bg-haldi/70 p-4 rounded-2xl border border-sona/30 flex items-start gap-3.5">
              <div className="p-2.5 bg-amber-500/15 rounded-xl text-amber-700 shrink-0 mt-0.5">
                <Clock size={22} />
              </div>
              <div>
                <p className="text-xs font-bold text-amber-700 uppercase tracking-wide">श्री गणेश पूजन</p>
                <p className="text-base sm:text-lg font-bold text-shai font-display">
                  १४ सप्टेंबर • दुपारी ३:३० वाजता
                </p>
              </div>
            </div>

            <div className="bg-haldi/70 p-4 rounded-2xl border border-sona/30 flex items-start gap-3.5 sm:col-span-2">
              <div className="p-2.5 bg-sindoor/15 rounded-xl text-sindoor shrink-0 mt-0.5">
                <MapPin size={22} />
              </div>
              <div>
                <p className="text-xs font-bold text-sindoor uppercase tracking-wide">उत्सव स्थळ व कालावधी</p>
                <p className="text-base sm:text-lg font-bold text-shai font-display">
                  {societyDetails.address} • {societyDetails.sthapanaDate} ते {societyDetails.visarjanDate}
                </p>
              </div>
            </div>
          </div>

          {/* Snehakankshi Signature Block */}
          <div className="mt-8 pt-6 border-t border-sona/30 text-center">
            <p className="text-xs uppercase tracking-widest text-sona font-bold mb-1">
              ॥ आपले नम्र स्नेही ॥
            </p>
            <p className="text-xl sm:text-2xl font-display text-sindoor font-bold">
              {societyDetails.name} मित्र मंडळ व सर्व रहिवासी
            </p>
            <p className="text-xs sm:text-sm text-shai/60 mt-1">
              स्थापना वर्ष {societyDetails.established}
            </p>
          </div>

          {/* Bottom Action */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#schedule"
              className="inline-flex items-center gap-2 bg-sindoor text-haldi px-6 py-2.5 rounded-xl font-semibold text-base hover:bg-[#731733] transition-all shadow-md active:scale-95"
            >
              <Heart size={18} />
              <span>वेळापत्रक व आरती पहा</span>
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
