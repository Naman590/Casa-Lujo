import React, { useState } from 'react';
import { ConsultationFormState } from '../types';
import { X, Check, Send, Sparkles, Building, Home, Hotel, RefreshCw } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedCategory?: string;
  preselectedBrand?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  preselectedCategory,
  preselectedBrand
}) => {
  const [formState, setFormState] = useState<ConsultationFormState>({
    fullName: '',
    email: '',
    phone: '',
    projectType: 'residential',
    interestCategories: preselectedCategory ? [preselectedCategory] : ['Curtains & Upholstery'],
    budgetRange: '₹15L - ₹35L (Bespoke Luxury)',
    preferredDate: '',
    notes: preselectedBrand ? `Interested in exploring exclusive ${preselectedBrand} collections.` : '',
    requestSwatchKit: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  if (!isOpen) return null;

  const categories = [
    'Haute Upholstery & Drapery',
    'Hardwood & SPC Flooring',
    'King Koil Sleep Systems',
    'Mora & Manterol Bed Linens',
    'Vertical Biophilic Gardens & Turf',
    'Motorized Smart Blinds & Shading',
    'Tactile Wallcoverings'
  ];

  const handleCategoryToggle = (category: string) => {
    setFormState(prev => {
      const exists = prev.interestCategories.includes(category);
      if (exists) {
        return { ...prev, interestCategories: prev.interestCategories.filter(c => c !== category) };
      } else {
        return { ...prev, interestCategories: [...prev.interestCategories, category] };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `CL-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceId(generatedId);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div 
      id="consultation-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/65 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div 
        id="consultation-modal-container"
        className="bg-white border border-black/20 rounded-[8px] max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative p-6 sm:p-10"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-black/5 text-black hover:text-[#906060] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#906060] font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>PRIVATE ATELIER CONSULTATION</span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-medium tracking-tight text-black mt-1">
                Schedule Spatial Consultation
              </h3>
              <p className="text-xs text-black/60 mt-1">
                Connect directly with a Senior Interior Architect for tailored home improvement and luxury interior curation.
              </p>
            </div>

            {/* Project Scope Selection */}
            <div className="space-y-2">
              <label className="text-[11px] uppercase tracking-[0.2em] font-bold text-black/70 block">
                Project Topology
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'residential', label: 'Private Residence', icon: Home },
                  { id: 'commercial', label: 'Executive Office', icon: Building },
                  { id: 'hospitality', label: 'Hospitality & Spa', icon: Hotel },
                  { id: 'renovation', label: 'Estate Renovation', icon: RefreshCw },
                ].map((item) => {
                  const Icon = item.icon;
                  const isSelected = formState.projectType === item.id;
                  return (
                    <button
                      type="button"
                      key={item.id}
                      onClick={() => setFormState({ ...formState, projectType: item.id as any })}
                      className={`p-3 rounded-[6px] border text-left flex flex-col justify-between space-y-2 text-xs transition-all cursor-pointer ${
                        isSelected 
                          ? 'border-black bg-black text-white' 
                          : 'border-black/10 hover:border-black/30 bg-white text-black'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="font-medium text-[11px] leading-tight">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[11px] uppercase tracking-[0.2em] font-bold text-black/70 block">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Elena Rostova"
                  value={formState.fullName}
                  onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-[6px] border border-black/15 text-xs text-black focus:outline-none focus:border-black transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] uppercase tracking-[0.2em] font-bold text-black/70 block">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formState.phone}
                  onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-[6px] border border-black/15 text-xs text-black focus:outline-none focus:border-black transition-colors"
                />
              </div>

              <div className="space-y-1.5 sm:col-span-2">
                <label className="text-[11px] uppercase tracking-[0.2em] font-bold text-black/70 block">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="patron@residence.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-[6px] border border-black/15 text-xs text-black focus:outline-none focus:border-black transition-colors"
                />
              </div>
            </div>

            {/* Disciplines of Interest */}
            <div className="space-y-2">
              <label className="text-[11px] uppercase tracking-[0.2em] font-bold text-black/70 block">
                Disciplines of Interest
              </label>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => {
                  const isChecked = formState.interestCategories.includes(cat);
                  return (
                    <button
                      type="button"
                      key={cat}
                      onClick={() => handleCategoryToggle(cat)}
                      className={`text-[11px] px-3 py-1.5 rounded-[6px] border transition-all flex items-center space-x-1.5 cursor-pointer ${
                        isChecked 
                          ? 'border-black bg-black text-white' 
                          : 'border-black/10 hover:border-black/30 bg-white text-black'
                      }`}
                    >
                      {isChecked && <Check className="w-3 h-3" />}
                      <span>{cat}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Notes / Special Requests */}
            <div className="space-y-1.5">
              <label className="text-[11px] uppercase tracking-[0.2em] font-bold text-black/70 block">
                Architectural Notes or Scope Details
              </label>
              <textarea
                rows={3}
                placeholder="Mention specific room dimensions, window styles, fabric preferences, or floorplan details..."
                value={formState.notes}
                onChange={(e) => setFormState({ ...formState, notes: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-[6px] border border-black/15 text-xs text-black focus:outline-none focus:border-black transition-colors"
              />
            </div>

            {/* Submit Action button */}
            <div className="pt-3">
              <button
                type="submit"
                id="submit-consultation-form-btn"
                className="w-full bg-black hover:bg-neutral-800 text-white text-xs uppercase tracking-[0.22em] font-medium py-4 px-8 rounded-[8px] transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-[0_2px_10px_rgba(0,0,0,0.2)]"
              >
                <span>Confirm Consultation Request</span>
                <Send className="w-3.5 h-3.5" />
              </button>
              <p className="text-[10px] text-center text-black/40 uppercase tracking-widest mt-2">
                Strict Non-Disclosure & Private Concierge Protocol
              </p>
            </div>
          </form>
        ) : (
          <div className="text-center py-8 space-y-6 animate-in fade-in duration-300">
            <div className="w-14 h-14 rounded-full bg-black/10 text-black flex items-center justify-center mx-auto">
              <Check className="w-7 h-7" />
            </div>

            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-black/60">
                REQUEST CONFIRMED
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-black">
                Thank You, {formState.fullName || 'Patron'}
              </h3>
              <p className="text-xs text-black/70 max-w-md mx-auto leading-relaxed">
                Your consultation dossier has been received. A Senior Interior Architect from Casa Lujo will connect with you within 24 hours.
              </p>
            </div>

            <div className="border border-black/10 rounded-[8px] p-5 max-w-sm mx-auto bg-black/[0.02] text-xs space-y-2">
              <div className="flex items-center justify-between text-black/60">
                <span>Dossier Reference ID:</span>
                <span className="font-mono font-bold text-black">{referenceId}</span>
              </div>
              <div className="flex items-center justify-between text-black/60">
                <span>Project Scope:</span>
                <span className="font-medium text-black capitalize">{formState.projectType}</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="bg-black hover:bg-black/80 text-white text-xs uppercase tracking-[0.2em] font-medium py-3 px-8 rounded-[8px] transition-colors cursor-pointer"
            >
              Return to Atelier
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
