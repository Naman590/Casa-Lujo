import React, { useState } from 'react';
import { COLLECTIONS } from '../data/luxuryData';
import { CollectionItem } from '../types';
import { Check, X, SlidersHorizontal, ArrowRight } from 'lucide-react';

interface CollectionsShowcaseProps {
  onOpenConsultation: (categoryName?: string) => void;
}

export const CollectionsShowcase: React.FC<CollectionsShowcaseProps> = ({ 
  onOpenConsultation
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeItemModal, setActiveItemModal] = useState<CollectionItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'fabrics', label: 'Upholstery & Drapery' },
    { id: 'flooring', label: 'Hardwood & SPC' },
    { id: 'bedding', label: 'Sleep & Bed Linens' },
    { id: 'gardens', label: 'Vertical Gardens & Turf' },
    { id: 'blinds', label: 'Motorized Blinds' },
    { id: 'wallcoverings', label: 'Tactile Wallcoverings' },
  ];

  const filteredCollections = selectedCategory === 'all'
    ? COLLECTIONS
    : COLLECTIONS.filter(c => c.category === selectedCategory);

  return (
    <section 
      id="portfolio" 
      className="py-24 sm:py-32 bg-white text-black border-b border-black/10"
    >
      <div className="max-w-[1270px] mx-auto px-6 sm:px-8">
        {/* Header Ribbon */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-black/10 mb-12 gap-6">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <span className="text-xs uppercase tracking-[0.3em] font-medium text-black/50">
                02 / PORTFOLIO & CURATED DISCIPLINES
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-black">
              Comprehensive Interior Solutions
            </h2>
          </div>
          <p className="text-sm text-black/70 max-w-md font-normal leading-relaxed">
            From handwoven Spanish jacquards and orthopedic mattresses to engineered French oak parquet and zero-maintenance biophilic moss walls.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          <SlidersHorizontal className="w-3.5 h-3.5 text-black/40 mr-2 shrink-0 hidden sm:inline" />
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`filter-btn-${cat.id}`}
              onClick={() => setSelectedCategory(cat.id)}
              className={`whitespace-nowrap px-5 py-2.5 rounded-[8px] text-xs uppercase tracking-[0.18em] font-medium transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-black text-white shadow-sm'
                  : 'bg-black/5 text-black/70 hover:bg-black/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCollections.map((item) => (
            <div
              key={item.id}
              id={`collection-card-${item.id}`}
              className="group border border-black/10 rounded-[8px] overflow-hidden bg-white flex flex-col justify-between hover:border-black/30 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
            >
              {/* Media Image Container */}
              <div className="relative aspect-[16/11] overflow-hidden bg-black/5">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-black text-[10px] uppercase tracking-[0.2em] font-semibold px-3 py-1 rounded-[6px] border border-black/10">
                    {item.origin}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="bg-black/85 text-white text-[10px] uppercase tracking-[0.2em] font-medium px-3 py-1 rounded-[6px]">
                    {item.brandPartner}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-7 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-[0.28em] text-[#906060] font-bold block">
                    {item.subtitle}
                  </span>
                  <h3 className="font-heading text-xl font-semibold text-black tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-black/70 line-clamp-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Key Spec highlights */}
                <div className="pt-4 border-t border-black/5 space-y-2">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-black/50 uppercase tracking-wider">Composition:</span>
                    <span className="font-medium text-black text-right truncate max-w-[60%]">{item.specs.material}</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-black/50 uppercase tracking-wider">Coverage:</span>
                    <span className="font-medium text-black">{item.specs.warranty}</span>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-2 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setActiveItemModal(item)}
                    className="flex-1 text-center py-2.5 px-4 text-[11px] uppercase tracking-[0.18em] font-semibold text-black border border-black/20 hover:border-black rounded-[8px] transition-colors cursor-pointer"
                  >
                    View Specs
                  </button>
                  <button
                    onClick={() => onOpenConsultation(item.title)}
                    className="py-2.5 px-4 bg-black hover:bg-neutral-800 text-white text-[11px] uppercase tracking-[0.18em] font-medium rounded-[8px] transition-colors flex items-center justify-center cursor-pointer"
                  >
                    <span>Inquire</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Specification Modal */}
      {activeItemModal && (
        <div 
          id="collection-detail-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
        >
          <div className="bg-white border border-black/20 rounded-[8px] max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative p-6 sm:p-8">
            <button
              onClick={() => setActiveItemModal(null)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-black/5 text-black hover:text-[#906060] transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-[#906060] font-semibold">
                  {activeItemModal.category.toUpperCase()} • {activeItemModal.origin}
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-medium tracking-tight text-black mt-1">
                  {activeItemModal.title}
                </h3>
                <p className="text-xs text-black/50 uppercase tracking-widest mt-1">
                  Partner House: {activeItemModal.brandPartner}
                </p>
              </div>

              <div className="aspect-[16/9] rounded-[6px] overflow-hidden bg-black/5">
                <img 
                  src={activeItemModal.image} 
                  alt={activeItemModal.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-sm text-black/80 leading-relaxed font-serif">
                {activeItemModal.description}
              </p>

              {/* Technical Specifications Table */}
              <div className="border border-black/10 rounded-[8px] p-5 space-y-3 bg-black/[0.02]">
                <h4 className="text-xs uppercase tracking-[0.22em] font-bold text-black border-b border-black/10 pb-2">
                  Technical Specifications & Provenance
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-black/50 uppercase tracking-wider block text-[10px]">Composition:</span>
                    <span className="font-medium text-black">{activeItemModal.specs.material}</span>
                  </div>
                  <div>
                    <span className="text-black/50 uppercase tracking-wider block text-[10px]">Surface Finish:</span>
                    <span className="font-medium text-black">{activeItemModal.specs.finish}</span>
                  </div>
                  <div>
                    <span className="text-black/50 uppercase tracking-wider block text-[10px]">Warranty:</span>
                    <span className="font-medium text-black">{activeItemModal.specs.warranty}</span>
                  </div>
                  <div>
                    <span className="text-black/50 uppercase tracking-wider block text-[10px]">Application:</span>
                    <span className="font-medium text-black">{activeItemModal.specs.application}</span>
                  </div>
                </div>
              </div>

              {/* Key Architectural Features */}
              <div className="space-y-3">
                <h4 className="text-xs uppercase tracking-[0.22em] font-bold text-black">
                  Craftsmanship Highlights
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeItemModal.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-black/80">
                      <Check className="w-3.5 h-3.5 text-[#906060] mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="pt-4 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-[11px] text-black/50 uppercase tracking-wider">
                  Available in bespoke dimensions & tailored finishes.
                </p>
                <button
                  onClick={() => {
                    const title = activeItemModal.title;
                    setActiveItemModal(null);
                    onOpenConsultation(title);
                  }}
                  className="w-full sm:w-auto bg-black hover:bg-neutral-800 text-white text-xs uppercase tracking-[0.2em] font-medium px-7 py-3 rounded-[8px] transition-colors cursor-pointer"
                >
                  Book Private Viewing
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
