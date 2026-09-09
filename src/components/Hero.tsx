import { ChevronDown } from 'lucide-react';

export default function Hero({ isLoaded = true }: { isLoaded?: boolean }) {
  return (
    <section 
      id="home" 
      className="relative min-h-[90vh] md:min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-20 pb-16 overflow-hidden bg-[#0A0705] text-haldi select-none"
    >
      {/* 
        ========================================================================
        HERO BACKGROUND
        ========================================================================
      */}
      <div 
        className={`absolute inset-0 pointer-events-none z-0 overflow-hidden transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      >
        {/* Mobile View Portrait Image (< 768px) */}
        <picture className="w-full h-full block md:hidden">
          <source srcSet="/potrait.png" type="image/png" />
          <source srcSet="/potrait.jpg" type="image/jpeg" />
          <source srcSet="/potrait.jpeg" type="image/jpeg" />
          <source srcSet="/portrait.png" type="image/png" />
          <source srcSet="/portrait.jpg" type="image/jpeg" />
          <img 
            src="/potrait.png" 
            alt="Ramayana Mobile Portrait Wallpaper" 
            className="w-full h-full object-cover object-center brightness-[0.72] contrast-[1.15]"
            onError={(e) => {
              const img = e.currentTarget;
              if (img.src.endsWith('/potrait.png')) {
                img.src = '/potrait.jpg';
              } else if (img.src.endsWith('/potrait.jpg')) {
                img.src = '/potrait.jpeg';
              } else if (img.src.endsWith('/potrait.jpeg')) {
                img.src = '/portrait.png';
              } else if (img.src.endsWith('/portrait.png')) {
                img.src = '/portrait.jpg';
              } else if (!img.src.includes('wallpaper')) {
                img.src = '/wallpaper from Ramayana movie glims.jpg';
              }
            }}
          />
        </picture>

        {/* Desktop View Landscape Image (>= 768px) */}
        <div className="w-full h-full hidden md:block">
          <img 
            src="/wallpaper from Ramayana movie glims.jpg" 
            alt="Ramayana Desktop Wallpaper" 
            className="w-full h-full object-cover object-center brightness-[0.72] contrast-[1.15]"
          />
        </div>

        {/* Ambient Dark Atmospheric Gradients and Cinematic Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0705] via-[#0A0705]/45 to-[#0A0705]/80" />
        <div className="absolute inset-0 bg-radial-[circle_at_center,transparent_35%,rgba(10,7,5,0.85)_100%]" />
      </div>

      {/* 
        ========================================================================
        HERO CONTENT: CLEAN SOLE CENTERPIECE PRESENTATION (SSCR.PNG)
        ========================================================================
      */}
      <div
        className="z-10 relative max-w-5xl mx-auto flex flex-col items-center justify-center my-auto"
      >
        {/* Centerpiece: Sole SSCR PNG */}
        <div className="relative my-4 sm:my-6 flex flex-col items-center justify-center">
          <img 
            src="/sscr.png"
            alt="साई शरणम चा राजा (SSCR)"
            className="w-72 sm:w-96 md:w-[30rem] lg:w-[34rem] max-h-[70vh] object-contain select-none pointer-events-none drop-shadow-2xl"
            onError={(e) => {
              const img = e.currentTarget;
              if (img.src.endsWith('/sscr.png')) {
                img.src = '/sscr.jpg';
              }
            }}
          />
        </div>

        {/* Scroll Down Indicator */}
        <a
          href="#overview"
          className="inline-flex flex-col items-center gap-1.5 text-sona/80 hover:text-sona transition-colors mt-6 group cursor-pointer"
        >
          <span className="text-xs tracking-widest uppercase font-semibold font-display text-amber-200/90 group-hover:text-amber-100">
            उत्सव माहिती व वेळापत्रक
          </span>
          <ChevronDown size={22} className="animate-bounce text-kesari group-hover:text-amber-300" />
        </a>

      </div>
    </section>
  );
}
