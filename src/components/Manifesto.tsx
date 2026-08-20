import React from 'react';
import { ArrowUpRight, Compass, Layers, Sparkles } from 'lucide-react';
import { ABOUT_MEDIA } from '../data/luxuryData';

interface ManifestoProps {
  onOpenConsultation: () => void;
}

export const Manifesto: React.FC<ManifestoProps> = ({ onOpenConsultation }) => {
  return (
    <section 
      id="about" 
      className="py-24 sm:py-32 bg-white text-black border-b border-black/10"
    >
      <div className="max-w-[1270px] mx-auto px-6 sm:px-8">
        {/* Section Marker */}
        <div className="flex items-center justify-between pb-8 border-b border-black/10 mb-12">
          <div className="flex items-center space-x-3">
            <span className="text-xs uppercase tracking-[0.3em] font-medium text-black/50">
              01 / ABOUT US • ATELIER HERITAGE
            </span>
          </div>
          <span className="text-xs uppercase tracking-[0.2em] text-black/40">
            THE ARCHITECTURE OF TACTILE REFINEMENT
          </span>
        </div>

        {/* 2-Column Grid: Editorial statement & Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Editorial Statement */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-black leading-[1.15]">
              Luxury is not an ornament. <br />
              <span className="italic font-serif text-black/80 font-light">
                It is the quiet perfection of touch, light, and proportion.
              </span>
            </h2>

            <div className="space-y-6 text-editorial-lead font-serif text-black/85">
              <p>
                At Casa Lujo, we believe a home should never merely be decorated—it must be architecturally articulated. Every fabric drape, every wooden grain alignment, and every micro-climate vertical wall influences the emotional resonance of a sanctuary.
              </p>
              <p className="text-base text-black/70 font-sans leading-relaxed">
                By synthesizing centuries-old Spanish textile masters like <span className="text-black font-semibold">Mora</span> and <span className="text-black font-semibold">Manterol</span> with orthopedic spinal engineering from <span className="text-black font-semibold">King Koil</span> and cutting-edge biophilic design, we offer discerning patrons a seamless continuum of luxury interior solutions.
              </p>
            </div>

            <div className="pt-2">
              <button
                id="manifesto-consult-link"
                onClick={onOpenConsultation}
                className="inline-flex items-center text-xs uppercase tracking-[0.22em] font-semibold text-[#906060] hover:text-[#744545] transition-colors group cursor-pointer"
              >
                <span>Request Private Architecture Consultation</span>
                <ArrowUpRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Three Refined Architectural Tenets */}
          <div className="lg:col-span-5 space-y-5">
            <div className="border border-black/10 rounded-[8px] p-7 space-y-3 hover:border-black/30 transition-colors bg-black/[0.01]">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.25em] font-bold text-black/40">TENET I</span>
                <Compass className="w-4 h-4 text-[#906060]" />
              </div>
              <h3 className="font-heading text-base uppercase tracking-wide text-black font-semibold">
                Authentic Material Provenance
              </h3>
              <p className="text-xs text-black/70 leading-relaxed">
                Direct partnerships with verified European weaving guilds, certified FSC forestry mills, and medically validated ergonomic mattress labs. No intermediaries, no compromise.
              </p>
            </div>

            <div className="border border-black/10 rounded-[8px] p-7 space-y-3 hover:border-black/30 transition-colors bg-black/[0.01]">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.25em] font-bold text-black/40">TENET II</span>
                <Layers className="w-4 h-4 text-[#906060]" />
              </div>
              <h3 className="font-heading text-base uppercase tracking-wide text-black font-semibold">
                Holistic Spatial Cohesion
              </h3>
              <p className="text-xs text-black/70 leading-relaxed">
                From window drapery acoustics to tactile timber floors and living vertical foliage, every surface is calibrated to harmonize with natural ambient light and architectural geometry.
              </p>
            </div>

            <div className="border border-black/10 rounded-[8px] p-7 space-y-3 hover:border-black/30 transition-colors bg-black/[0.01]">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.25em] font-bold text-black/40">TENET III</span>
                <Sparkles className="w-4 h-4 text-[#906060]" />
              </div>
              <h3 className="font-heading text-base uppercase tracking-wide text-black font-semibold">
                White-Glove Master Execution
              </h3>
              <p className="text-xs text-black/70 leading-relaxed">
                Dedicated project directors, 1mm laser room surveys, bespoke steam pleating, and dust-free artisan installation backed by extended decade-long warranties.
              </p>
            </div>
          </div>
        </div>

        {/* Media Gallery in About Us Section */}
        <div className="mt-16 sm:mt-20 pt-12 border-t border-black/10">
          <div className="flex items-center justify-between mb-8">
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-black/60">
              ATELIER ARCHIVES & SOURCING PROVENANCE
            </span>
            <span className="text-xs tracking-wider text-black/40 font-mono">
              VALENCIA • FLANDERS • BAVARIA
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ABOUT_MEDIA.map((media, idx) => (
              <div 
                key={idx}
                className="group border border-black/10 rounded-[8px] overflow-hidden bg-white flex flex-col justify-between hover:border-black/30 transition-all duration-300"
              >
                <div className="relative aspect-[16/11] overflow-hidden bg-black/5">
                  <img
                    src={media.image}
                    alt={media.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-black/80 text-white text-[9px] uppercase tracking-[0.2em] font-medium px-2.5 py-1 rounded-[4px] backdrop-blur-sm">
                      {media.location}
                    </span>
                  </div>
                </div>
                <div className="p-5 space-y-1.5">
                  <h4 className="font-heading text-sm font-semibold text-black tracking-tight">
                    {media.title}
                  </h4>
                  <p className="text-xs text-black/65 leading-relaxed">
                    {media.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
