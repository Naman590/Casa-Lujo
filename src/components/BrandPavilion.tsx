import React from 'react';
import { BRAND_PARTNERS } from '../data/luxuryData';
import { Globe, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface BrandPavilionProps {
  onOpenConsultation: () => void;
  onSelectBrand: (brandName: string) => void;
}

export const BrandPavilion: React.FC<BrandPavilionProps> = ({ 
  onOpenConsultation, 
  onSelectBrand 
}) => {
  return (
    <section 
      id="brands" 
      className="py-24 sm:py-32 bg-white text-black border-b border-black/10"
    >
      <div className="max-w-[1270px] mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-black/10 mb-14 gap-6">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <span className="text-xs uppercase tracking-[0.3em] font-medium text-black/50">
                03 / INTERNATIONAL HOUSES
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-black">
              World-Renowned Brand Partners
            </h2>
          </div>
          <p className="text-sm text-black/60 max-w-md font-normal leading-relaxed">
            Casa Lujo holds exclusive partnerships with global icons of weaving, orthopedic sleep sciences, and architectural soft furnishings.
          </p>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BRAND_PARTNERS.map((brand) => (
            <div
              key={brand.id}
              id={`brand-card-${brand.id}`}
              className="border border-black/10 rounded-[8px] p-8 flex flex-col justify-between hover:border-black/30 transition-all duration-300 bg-white group hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
            >
              <div className="space-y-6">
                {/* Top Badge & Origin */}
                <div className="flex items-center justify-between pb-4 border-b border-black/5">
                  <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#906060]">
                    {brand.badge}
                  </span>
                  <span className="flex items-center text-[10px] uppercase tracking-[0.2em] text-black/50 font-medium">
                    <Globe className="w-3 h-3 mr-1.5 text-black/40" />
                    {brand.country}
                  </span>
                </div>

                {/* Brand Name & Tagline */}
                <div className="space-y-2">
                  <h3 className="font-heading text-2xl font-bold tracking-tight text-black uppercase group-hover:text-black">
                    {brand.name}
                  </h3>
                  <p className="text-xs font-semibold text-black/80 tracking-wide">
                    {brand.tagline}
                  </p>
                </div>

                {/* Imagery Preview */}
                <div className="aspect-[16/9] rounded-[6px] overflow-hidden bg-black/5">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                </div>

                {/* Description */}
                <p className="text-xs text-black/70 leading-relaxed font-sans">
                  {brand.description}
                </p>

                {/* Featured Disciplines */}
                <div className="pt-2">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-black/40 block mb-2">
                    Curated Categories:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {brand.featuredCategories.map((cat, idx) => (
                      <span
                        key={idx}
                        className="bg-black/5 text-black text-[10px] uppercase tracking-[0.18em] px-2.5 py-1 rounded-[4px] font-medium"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="pt-6 mt-6 border-t border-black/5 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.2em] text-black/50">
                  Authorized Flagship Archive
                </span>
                <button
                  onClick={() => {
                    onSelectBrand(brand.name);
                    onOpenConsultation();
                  }}
                  className="inline-flex items-center text-xs uppercase tracking-[0.18em] font-semibold text-[#906060] hover:text-[#744545] transition-colors cursor-pointer group-hover:translate-x-0.5"
                >
                  <span>Inquire</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Global Sourcing Guarantee Banner */}
        <div className="mt-14 p-8 border border-black/10 rounded-[8px] bg-black/[0.01] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <CheckCircle2 className="w-8 h-8 text-[#906060] shrink-0" />
            <div>
              <h4 className="font-heading text-base font-semibold text-black uppercase tracking-wide">
                Direct Mill Authentication & Certificate of Origin
              </h4>
              <p className="text-xs text-black/60 mt-0.5">
                Every meter of fabric, timber board, and mattress core is accompanied by authentic mill serial numbers and manufacturer warranties.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenConsultation}
            className="whitespace-nowrap px-6 py-3 bg-black hover:bg-black/80 text-white text-xs uppercase tracking-[0.2em] font-medium rounded-[8px] transition-colors cursor-pointer"
          >
            Request Catalog
          </button>
        </div>
      </div>
    </section>
  );
};
