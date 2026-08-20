import React from 'react';
import { PROCESS_STEPS } from '../data/luxuryData';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface ProcessAtelierProps {
  onOpenConsultation: () => void;
}

export const ProcessAtelier: React.FC<ProcessAtelierProps> = ({ onOpenConsultation }) => {
  return (
    <section 
      id="process" 
      className="py-24 sm:py-32 bg-white text-black border-b border-black/10"
    >
      <div className="max-w-[1270px] mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-black/10 mb-14 gap-6">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <span className="text-xs uppercase tracking-[0.3em] font-medium text-black/50">
                05 / ATELIER METHODOLOGY
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-black">
              The Bespoke Execution Protocol
            </h2>
          </div>
          <p className="text-sm text-black/70 max-w-md font-normal leading-relaxed">
            Every residential engagement follows an exacting architectural discipline—from raw spatial audit to micron-level laser alignment and dust-free installation.
          </p>
        </div>

        {/* 4 Process Cards with Media Imagery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.step}
              id={`process-step-${idx + 1}`}
              className="group border border-black/10 rounded-[8px] overflow-hidden flex flex-col justify-between hover:border-black/30 transition-all duration-300 bg-white hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
            >
              {/* Media Imagery */}
              <div className="relative aspect-[16/11] overflow-hidden bg-black/5">
                <img
                  src={step.image}
                  alt={step.title}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-black/85 text-white text-[10px] uppercase tracking-[0.2em] font-bold px-2.5 py-1 rounded-[4px] backdrop-blur-sm">
                    PHASE {step.step}
                  </span>
                </div>
              </div>

              {/* Step Information */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#906060] font-bold block">
                    {step.subtitle}
                  </span>
                  <h3 className="font-heading text-base font-semibold text-black tracking-tight leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs text-black/70 leading-relaxed font-sans">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-black/5 flex items-center justify-between text-[10px] uppercase tracking-wider text-black/50 font-semibold">
                  <span className="truncate">{step.specs}</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#906060] shrink-0 ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Atelier Commitment Guarantee Banner */}
        <div className="border border-black/10 rounded-[8px] p-8 sm:p-12 bg-black text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs uppercase tracking-[0.25em] text-[#c48e8e] font-bold">
                WHITE-GLOVE GUARANTEE
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-medium text-white">
                Ready to elevate your private residence or commercial estate?
              </h3>
              <p className="text-sm text-white/70 font-serif leading-relaxed max-w-2xl">
                Schedule a confidential consultation with our Senior Interior Architect. We will review your architectural floorplans, specify fabric weights, and coordinate manufacturer samples.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col space-y-3">
              <button
                id="process-book-consultation-btn"
                onClick={onOpenConsultation}
                className="w-full bg-black hover:bg-neutral-900 border border-white/30 hover:border-white text-white text-xs uppercase tracking-[0.22em] font-medium py-4 px-8 rounded-[8px] transition-all flex items-center justify-center space-x-3 cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
              >
                <span>Initiate Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[10px] text-center uppercase tracking-wider text-white/50">
                Direct Atelier Response Within 24 Hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
