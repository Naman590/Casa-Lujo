import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  const [activeTexture, setActiveTexture] = useState<number>(0);
  const [parallaxY, setParallaxY] = useState<number>(0);

  useEffect(() => {
    let animationFrameId: number;
    let targetY = window.scrollY;
    let currentY = window.scrollY;
    let isRunning = true;

    const handleScroll = () => {
      targetY = window.scrollY;
    };

    const smoothLoop = () => {
      if (!isRunning) return;
      // Ultra-smooth linear interpolation factor
      const diff = targetY - currentY;
      currentY += diff * 0.12;

      // Only update when in hero view to preserve performance
      if (currentY < 1200) {
        setParallaxY(currentY * 0.35);
      }

      animationFrameId = requestAnimationFrame(smoothLoop);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    animationFrameId = requestAnimationFrame(smoothLoop);

    return () => {
      isRunning = false;
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const textureMedia = [
    {
      label: 'Architectural Salon',
      bgUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1920&auto=format&fit=crop',
    },
    {
      label: 'Haute Textiles',
      bgUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1920&auto=format&fit=crop',
    },
    {
      label: 'European Parquet',
      bgUrl: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=1920&auto=format&fit=crop',
    }
  ];

  return (
    <section 
      id="home"
      className="relative min-h-[90vh] sm:min-h-[94vh] pt-32 sm:pt-36 pb-16 sm:pb-20 flex flex-col justify-between bg-black text-white overflow-hidden border-b border-black select-none"
    >
      {/* Subtle Ambient Grain Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black pointer-events-none z-0" />

      {/* Top Editorial Eyebrow Ribbon */}
      <div className="max-w-[1270px] mx-auto w-full px-6 sm:px-8 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/15 text-xs tracking-[0.25em] text-white/50 uppercase font-medium gap-3">
          <div className="flex items-center space-x-3">
            <span className="inline-block w-2 h-2 rounded-full bg-[#906060] animate-pulse"></span>
            <span>HAUTE LIVING & INTERIOR ARCHITECTURE</span>
          </div>
          <div className="flex items-center space-x-6">
            <span>SPAIN • GERMANY • USA • INDIA</span>
            <span className="hidden md:inline text-white/20">|</span>
            <span className="hidden md:inline text-white/40">CURATED EDITIONS</span>
          </div>
        </div>
      </div>

      {/* Monumental Hero Showcase: Masked Parallax Typography */}
      <div className="max-w-[1270px] mx-auto w-full px-6 sm:px-8 py-10 sm:py-16 my-auto relative z-10 flex flex-col items-center justify-center text-center">
        {/* Subtle Pre-Heading */}
        <div className="inline-flex items-center space-x-3 mb-4 sm:mb-6 text-[10px] sm:text-xs uppercase tracking-[0.35em] text-white/60 font-medium">
          <span className="h-px w-6 sm:w-10 bg-white/40"></span>
          <span>ONE-STOP DESTINATION FOR LUXURY INTERIORS</span>
          <span className="h-px w-6 sm:w-10 bg-white/40"></span>
        </div>

        {/* The Monumental Masked Parallax Headline */}
        <div className="w-full relative py-2">
          <h1 
            id="hero-brand-mask-heading"
            className="font-heading font-extrabold text-[17vw] sm:text-[15.5vw] lg:text-[12.5rem] xl:text-[14.5rem] leading-[0.85] tracking-[-0.04em] uppercase text-mask-media filter drop-shadow-[0_8px_40px_rgba(0,0,0,0.9)] will-change-[background-position]"
            style={{
              backgroundImage: `url(${textureMedia[activeTexture].bgUrl})`,
              backgroundPosition: `center calc(50% + ${parallaxY.toFixed(1)}px)`,
              backgroundSize: '130% auto',
              backgroundRepeat: 'no-repeat',
            }}
          >
            CASA LUJO
          </h1>
        </div>

        {/* Subtitle & Texture Scene Selector */}
        <div className="w-full max-w-4xl flex flex-col sm:flex-row items-center justify-between mt-4 sm:mt-6 pt-4 border-t border-white/10 gap-4">
          <p className="text-xs sm:text-sm tracking-[0.4em] font-medium text-white/80 uppercase">
            HOME LUXURY • STATEMENT OF LIVING
          </p>

          <div className="flex items-center space-x-2 text-[10px] tracking-[0.2em] text-white/40 uppercase">
            <span className="mr-1">TEXTURE:</span>
            {textureMedia.map((tex, idx) => (
              <button
                key={tex.label}
                onClick={() => setActiveTexture(idx)}
                className={`px-3 py-1 rounded-[6px] text-[10px] uppercase tracking-widest transition-all cursor-pointer ${
                  activeTexture === idx 
                    ? 'bg-white text-black font-bold shadow-md' 
                    : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                }`}
                title={tex.label}
              >
                0{idx + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 sm:mt-10 w-full max-w-md">
          <button
            id="hero-book-consultation-cta"
            onClick={onOpenConsultation}
            className="w-full sm:w-auto flex-1 bg-black hover:bg-neutral-900 text-white border border-white/30 hover:border-white text-xs uppercase tracking-[0.22em] font-medium px-8 py-4 rounded-[8px] transition-all duration-200 flex items-center justify-center space-x-2 group cursor-pointer shadow-[0_4px_25px_rgba(0,0,0,0.8)] active:scale-[0.98]"
          >
            <span>Book Consultation</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <a
            href="#portfolio"
            id="hero-explore-portfolio-link"
            className="w-full sm:w-auto flex-1 text-center border border-white/25 hover:border-white text-white hover:text-white/90 text-xs uppercase tracking-[0.22em] font-medium px-8 py-4 rounded-[8px] transition-colors duration-200"
          >
            Explore Portfolio
          </a>
        </div>
      </div>

      {/* Bottom Minimalist Scroll Cue */}
      <div className="max-w-[1270px] mx-auto w-full px-6 sm:px-8 relative z-10 flex items-center justify-between text-xs text-white/50 border-t border-white/10 pt-4">
        <span className="text-[10px] tracking-[0.25em] uppercase text-white/40 hidden sm:inline">
          EST. PRIVATE RESIDENTIAL ATELIER
        </span>
        
        <a 
          href="#about" 
          className="flex items-center space-x-2 text-[11px] uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors mx-auto sm:mx-0"
        >
          <span>Scroll to Discover</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#906060]" />
        </a>

        <span className="text-[10px] tracking-[0.25em] uppercase text-white/40 hidden sm:inline">
          MORA • MANTEROL • KING KOIL • D’DECOR
        </span>
      </div>
    </section>
  );
};
