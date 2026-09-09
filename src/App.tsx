import { useState, useRef, useEffect } from 'react';
import Preloader from './components/Preloader';
import Hero from './components/Hero';
import EventOverview from './components/EventOverview';
import Invitation from './components/Invitation';
import Competitions from './components/Competitions';
import Schedule from './components/Schedule';
import Committee from './components/Committee';
import Footer from './components/Footer';
import Nav from './components/Nav';
import { Flame, Music, Volume2, VolumeX } from 'lucide-react';
import Lenis from 'lenis';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.hash && anchor.hash.startsWith('#')) {
        e.preventDefault();
        lenis.scrollTo(anchor.hash, { offset: -80 });
      }
    };
    
    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  const handleLightDiya = () => {
    setIsLoaded(true);
    if (audioRef.current) {
      audioRef.current.volume = 0.8;
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.warn("Audio autoplay blocked by browser:", err);
          setIsPlaying(false);
        });
    }
  };

  const toggleAudio = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.volume = 0.8;
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.error("Audio playback error:", err);
        });
    }
  };

  return (
    <div className="relative selection:bg-kesari selection:text-white">
      {/* Background Shehnai / Aarti Audio */}
      <audio 
        ref={audioRef} 
        src="/aarti.mp3"
        loop 
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onError={(e) => console.error("Audio error:", e)}
      />

      {!isLoaded && <Preloader onComplete={handleLightDiya} />}

      <Nav />

      <main className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0 h-screen overflow-hidden'}`}>
        <Hero isLoaded={isLoaded} />
        <EventOverview />
        <Invitation />
        <Competitions />
        <Schedule />
        <Committee />
        <Footer />
      </main>

      {/* Floating Audio Control with Flame & Indicator */}
      {isLoaded && (
        <button 
          onClick={toggleAudio} 
          className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-tr from-[#991B1B] via-sindoor to-kesari text-haldi rounded-full flex items-center justify-center shadow-2xl shadow-sindoor/40 hover:scale-110 active:scale-95 transition-all border-2 border-sona/50 group"
          aria-label={isPlaying ? "संगीत थांबवा (Pause music)" : "संगीत सुरू करा (Play music)"}
          title={isPlaying ? "संगीत थांबवा" : "संगीत सुरू करा"}
        >
          {isPlaying ? (
            <div className="relative flex items-center justify-center">
              <Flame size={28} className="animate-pulse text-amber-300 drop-shadow-[0_0_8px_rgba(255,200,50,0.8)]" fill="currentColor" />
              <div className="absolute -top-1.5 -right-1.5 bg-yellow-400 text-sindoor rounded-full p-0.5 shadow">
                <Music size={10} className="animate-bounce" />
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center text-haldi/80 group-hover:text-white">
              <VolumeX size={24} />
            </div>
          )}
        </button>
      )}
    </div>
  );
}
