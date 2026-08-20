import React, { useState } from 'react';
import { CURATED_SPACES } from '../data/luxuryData';
import { MapPin, ArrowRight, Eye, Sparkles } from 'lucide-react';

interface SpacesGalleryProps {
  onOpenConsultation: () => void;
}

export const SpacesGallery: React.FC<SpacesGalleryProps> = ({ onOpenConsultation }) => {
  const [activeSpaceIndex, setActiveSpaceIndex] = useState<number>(0);
  const activeSpace = CURATED_SPACES[activeSpaceIndex];

  return (
    <section 
      id="spaces" 
      className="py-24 sm:py-32 bg-white text-black border-b border-black/10"
    >
      <div className="max-w-[1270px] mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-black/10 mb-14 gap-6">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <span className="text-xs uppercase tracking-[0.3em] font-medium text-black/50">
                04 / REALIZED PROJECTS
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-black">
              Curated Architectural Spaces
            </h2>
          </div>
          <p className="text-sm text-black/60 max-w-md font-normal leading-relaxed">
            Private residences, sky villas, and luxury estates transformed into harmonious statements of architectural excellence.
          </p>
        </div>

        {/* Space Selection Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {CURATED_SPACES.map((space, idx) => (
            <button
              key={space.id}
              onClick={() => setActiveSpaceIndex(idx)}
              className={`p-4 rounded-[8px] border text-left transition-all duration-200 cursor-pointer ${
                activeSpaceIndex === idx
                  ? 'border-black bg-black text-white'
                  : 'border-black/10 hover:border-black/30 bg-white text-black'
              }`}
            >
              <span className="text-[10px] uppercase tracking-[0.25em] opacity-60 block mb-1">
                Project 0{idx + 1}
              </span>
              <p className="font-heading text-sm font-semibold truncate">
                {space.title}
              </p>
              <p className="text-[11px] opacity-70 truncate mt-0.5">
                {space.location}
              </p>
            </button>
          ))}
        </div>

        {/* Highlighted Space Main Feature Box */}
        <div className="border border-black/10 rounded-[8px] overflow-hidden bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* High-Resolution Space Imagery */}
            <div className="lg:col-span-7 relative aspect-[16/11] lg:aspect-auto min-h-[380px] lg:min-h-[520px] bg-black/5">
              <img
                src={activeSpace.image}
                alt={activeSpace.title}
                className="w-full h-full object-cover transition-all duration-700"
              />
              <div className="absolute top-5 left-5">
                <span className="bg-black/80 text-white text-[10px] uppercase tracking-[0.2em] font-medium px-3.5 py-1.5 rounded-[6px] backdrop-blur-sm">
                  {activeSpace.scope}
                </span>
              </div>
            </div>

            {/* Space Narrative & Provenance Details */}
            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-8 bg-white">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center space-x-2 text-xs uppercase tracking-[0.22em] text-[#906060] font-semibold mb-2">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{activeSpace.location}</span>
                  </div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-black tracking-tight">
                    {activeSpace.title}
                  </h3>
                </div>

                <p className="text-sm text-black/80 leading-relaxed font-serif">
                  {activeSpace.description}
                </p>

                {/* Materials Employed */}
                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-[0.22em] font-bold text-black/40 block">
                    Integrated Material Palette:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeSpace.materialsUsed.map((mat, i) => (
                      <span
                        key={i}
                        className="text-xs bg-black/5 text-black px-3 py-1.5 rounded-[6px] font-medium"
                      >
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Brand Houses Featured */}
                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-[0.22em] font-bold text-black/40 block">
                    Curated Brand Houses:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeSpace.brandsFeatured.map((brand, i) => (
                      <span
                        key={i}
                        className="text-xs border border-black/15 text-black/80 px-3 py-1 rounded-[6px]"
                      >
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Consultation trigger for custom spaces */}
              <div className="pt-6 border-t border-black/10">
                <button
                  onClick={onOpenConsultation}
                  className="w-full bg-black hover:bg-neutral-800 text-white text-xs uppercase tracking-[0.22em] font-medium py-3.5 px-6 rounded-[8px] transition-colors flex items-center justify-center space-x-3 cursor-pointer"
                >
                  <span>Inquire for Similar Space</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
