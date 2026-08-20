import React, { useState } from 'react';
import { PRESS_ARTICLES } from '../data/luxuryData';
import { PressArticle } from '../types';
import { ArrowUpRight, Award, Bookmark, X, BookOpen, Quote } from 'lucide-react';

interface PressSectionProps {
  onOpenConsultation: () => void;
}

export const PressSection: React.FC<PressSectionProps> = ({ onOpenConsultation }) => {
  const [activeArticle, setActiveArticle] = useState<PressArticle | null>(null);

  const publicationBadges = [
    { name: 'Architectural Digest', label: 'Featured Cover Story 2026' },
    { name: 'Elle Decor International', label: 'Design Vanguard Award' },
    { name: 'Vogue Living', label: 'Haute Interior Monograph' },
    { name: 'Wallpaper* Magazine', label: 'Best Material Innovation' },
  ];

  return (
    <section 
      id="press" 
      className="py-24 sm:py-32 bg-white text-black border-b border-black/10"
    >
      <div className="max-w-[1270px] mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-black/10 mb-14 gap-6">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <span className="text-xs uppercase tracking-[0.3em] font-medium text-black/50">
                04 / PRESS & RECOGNITION
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-black">
              Editorial Features & Accolades
            </h2>
          </div>
          <p className="text-sm text-black/70 max-w-md font-normal leading-relaxed">
            Recognized by the world’s leading design publications for architectural mastery, authentic European provenance, and bespoke residential craftsmanship.
          </p>
        </div>

        {/* Accolades Ticker / Badges Ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {publicationBadges.map((badge, idx) => (
            <div 
              key={idx}
              className="p-4 border border-black/10 rounded-[8px] bg-black/[0.015] flex flex-col justify-between space-y-1 hover:border-black/30 transition-colors"
            >
              <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.2em] font-bold text-[#906060]">
                <Award className="w-3.5 h-3.5" />
                <span>ACCOLADE</span>
              </div>
              <p className="font-heading text-sm font-semibold text-black truncate">
                {badge.name}
              </p>
              <p className="text-[11px] text-black/60 truncate">
                {badge.label}
              </p>
            </div>
          ))}
        </div>

        {/* Editorial Articles Grid with Rich Media */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PRESS_ARTICLES.map((article) => (
            <article
              key={article.id}
              id={`press-card-${article.id}`}
              className="group border border-black/10 rounded-[8px] overflow-hidden bg-white flex flex-col justify-between hover:border-black/30 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-black/5">
                <img
                  src={article.image}
                  alt={article.headline}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-black/85 text-white text-[10px] uppercase tracking-[0.2em] font-medium px-3 py-1.5 rounded-[6px] backdrop-blur-sm">
                    {article.publication}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="bg-white/90 text-black text-[10px] uppercase tracking-[0.2em] font-semibold px-3 py-1 rounded-[6px] border border-black/10 shadow-sm">
                    {article.issue}
                  </span>
                </div>
              </div>

              <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-black/50">
                    <span className="uppercase tracking-[0.2em] font-semibold text-[#906060]">
                      {article.category}
                    </span>
                    <span className="font-mono text-[11px]">{article.readTime}</span>
                  </div>

                  <h3 className="font-heading text-xl sm:text-2xl font-semibold text-black tracking-tight leading-snug group-hover:text-[#906060] transition-colors">
                    {article.headline}
                  </h3>

                  <p className="text-xs sm:text-sm text-black/75 leading-relaxed font-serif">
                    “{article.excerpt}”
                  </p>
                </div>

                <div className="pt-4 border-t border-black/10 flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-wider text-black/40 font-medium">
                    {article.date}
                  </span>
                  
                  <button
                    onClick={() => setActiveArticle(article)}
                    className="inline-flex items-center text-xs uppercase tracking-[0.18em] font-semibold text-black hover:text-[#906060] transition-colors cursor-pointer group/btn"
                  >
                    <span>Read Feature</span>
                    <ArrowUpRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Press & Monograph Inquiry Banner */}
        <div className="mt-14 p-8 sm:p-10 border border-black/10 rounded-[8px] bg-black text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center sm:text-left">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#c48e8e]">
              EDITORIAL ARCHIVES & PRESS RELATIONS
            </span>
            <h4 className="font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
              Request Full Lookbook & Monograph Dossier
            </h4>
            <p className="text-xs text-white/60 max-w-lg">
              For architecture writers, interior designers, and editors seeking high-resolution asset libraries and press interviews.
            </p>
          </div>

          <button
            onClick={onOpenConsultation}
            className="whitespace-nowrap bg-black hover:bg-neutral-900 border border-white/30 text-white text-xs uppercase tracking-[0.2em] font-medium px-7 py-3.5 rounded-[8px] transition-colors cursor-pointer shadow-sm"
          >
            Contact Press Desk
          </button>
        </div>
      </div>

      {/* Press Feature Modal */}
      {activeArticle && (
        <div 
          id="press-detail-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/65 backdrop-blur-sm animate-in fade-in duration-200"
        >
          <div className="bg-white border border-black/20 rounded-[8px] max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative p-6 sm:p-8">
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-black/5 text-black hover:text-[#906060] transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-[0.25em] text-[#906060] font-bold">
                  {activeArticle.publication} • {activeArticle.issue}
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-black tracking-tight">
                  {activeArticle.headline}
                </h3>
                <p className="text-xs text-black/50 uppercase tracking-wider font-mono">
                  Published: {activeArticle.date} | Category: {activeArticle.category}
                </p>
              </div>

              <div className="aspect-[16/9] rounded-[6px] overflow-hidden bg-black/5">
                <img 
                  src={activeArticle.image} 
                  alt={activeArticle.headline} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="border-l-2 border-[#906060] pl-5 py-2">
                <Quote className="w-6 h-6 text-[#906060] mb-2 opacity-50" />
                <p className="text-base text-black/90 font-serif italic leading-relaxed">
                  “{activeArticle.excerpt}”
                </p>
              </div>

              <div className="space-y-4 text-xs text-black/80 font-sans leading-relaxed">
                <p>
                  Casa Lujo represents a definitive architectural evolution in how luxury residences approach tactile surfaces. By coordinating master fabric weaving from Valencia, Spain with precision German parquet and American chiropractor-certified sleep cores, every square foot is orchestrated with harmonic balance.
                </p>
                <p>
                  The atelier’s signature methodology combines 1mm laser room diagnostics, bespoke curtain heading tailoring, and dust-free artisan execution—providing homeowners with an uncompromising standard of quiet luxury.
                </p>
              </div>

              <div className="pt-4 border-t border-black/10 flex items-center justify-between">
                <button
                  onClick={() => setActiveArticle(null)}
                  className="text-xs uppercase tracking-[0.18em] font-semibold text-black/70 hover:text-black"
                >
                  Close Reading
                </button>
                <button
                  onClick={() => {
                    setActiveArticle(null);
                    onOpenConsultation();
                  }}
                  className="bg-black hover:bg-neutral-800 text-white text-xs uppercase tracking-[0.2em] font-medium px-6 py-3 rounded-[8px] transition-colors cursor-pointer"
                >
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
