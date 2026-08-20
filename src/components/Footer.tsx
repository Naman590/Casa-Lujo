import React, { useState } from 'react';
import { ArrowRight, Check, MapPin, Mail, Phone, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setIsSubscribed(true);
    }
  };

  return (
    <footer 
      id="contact"
      className="bg-white text-black border-t border-black/10 pt-20 pb-12"
    >
      <div className="max-w-[1270px] mx-auto px-6 sm:px-8 space-y-16">
        {/* Top Tier: Brand Statement & Newsletter Subscription */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-black/10">
          <div className="lg:col-span-6 space-y-4">
            <div className="flex flex-col items-start">
              <span className="font-heading text-2xl font-bold tracking-[0.25em] text-black uppercase">
                CASA LUJO
              </span>
              <span className="text-[10px] tracking-[0.38em] text-black/60 uppercase font-medium mt-0.5">
                HOME LUXURY • INTERIOR SOLUTIONS
              </span>
            </div>
            <p className="text-sm text-black/70 font-serif max-w-md leading-relaxed pt-2">
              Transforming discerning residences and bespoke architectural spaces with curated collections from renowned international masters: Mora Spain, Manterol Spain, King Koil, D’Decor, Maspar, and Trident.
            </p>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-black/60 block">
              THE CASA LUJO JOURNAL
            </span>
            <p className="text-xs text-black/60">
              Receive quarterly private previews of European textile releases, hardwood mill batches, and architectural case studies.
            </p>

            {!isSubscribed ? (
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="patron@domain.com"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-[6px] border border-black/15 text-xs text-black focus:outline-none focus:border-black transition-colors"
                />
                <button
                  type="submit"
                  className="bg-black hover:bg-neutral-800 text-white text-xs uppercase tracking-[0.2em] font-medium px-6 py-3 rounded-[6px] transition-colors flex items-center space-x-1.5 cursor-pointer"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            ) : (
              <div className="flex items-center space-x-2 text-xs font-semibold text-[#906060] py-3">
                <Check className="w-4 h-4" />
                <span>Thank you. You have been added to the private journal registry.</span>
              </div>
            )}
          </div>
        </div>

        {/* Middle Tier: Flagship Ateliers & Navigation Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-xs">
          {/* Atelier 1 */}
          <div className="space-y-3">
            <h4 className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-black">
              Flagship Atelier
            </h4>
            <div className="space-y-1.5 text-black/70">
              <p className="font-semibold text-black">Worli Design District</p>
              <p>Level 4, The Pavilion Tower</p>
              <p>Dr. Annie Besant Road, Mumbai 400018</p>
              <p className="pt-2 text-[11px] text-black/50">Tue – Sun: 10:30 – 19:30 (By Appointment)</p>
            </div>
          </div>

          {/* Atelier 2 */}
          <div className="space-y-3">
            <h4 className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-black">
              Capital Gallery
            </h4>
            <div className="space-y-1.5 text-black/70">
              <p className="font-semibold text-black">Golf Links Sanctuary</p>
              <p>Suite 12, Archway Estate</p>
              <p>New Delhi 110003</p>
              <p className="pt-2 text-[11px] text-black/50">Mon – Sat: 11:00 – 20:00 (Private Sessions)</p>
            </div>
          </div>

          {/* Navigation Directory */}
          <div className="space-y-3">
            <h4 className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-black">
              Navigation
            </h4>
            <ul className="space-y-2 text-black/70">
              <li><a href="#home" className="hover:text-[#906060] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#906060] transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="hover:text-[#906060] transition-colors">Portfolio</a></li>
              <li><a href="#press" className="hover:text-[#906060] transition-colors">Press & Accolades</a></li>
              <li><button onClick={onOpenConsultation} className="hover:text-[#906060] transition-colors cursor-pointer text-left">Contact & Consultation</button></li>
            </ul>
          </div>

          {/* Official Partners */}
          <div className="space-y-3">
            <h4 className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-black">
              Partner Houses
            </h4>
            <ul className="space-y-2 text-black/70">
              <li><a href="#brands" className="hover:text-[#906060] transition-colors">Mora Spain (Valencia)</a></li>
              <li><a href="#brands" className="hover:text-[#906060] transition-colors">Manterol Spain (Jacquards)</a></li>
              <li><a href="#brands" className="hover:text-[#906060] transition-colors">King Koil (Spinal Architecture)</a></li>
              <li><a href="#brands" className="hover:text-[#906060] transition-colors">D’Decor European Collection</a></li>
              <li><a href="#brands" className="hover:text-[#906060] transition-colors">Maspar & Trident Eco-Linens</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Tier: Copyright & Disclaimers */}
        <div className="pt-12 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-black/50 gap-4">
          <p>
            © {new Date().getFullYear()} CASA LUJO HOME LUXURY. All rights reserved. Registered architectural brand.
          </p>

          <div className="flex items-center space-x-6 text-[10px] uppercase tracking-wider">
            <button onClick={onOpenConsultation} className="hover:text-[#906060] transition-colors cursor-pointer">
              Book Appointment
            </button>
            <a href="#about" className="hover:text-[#906060] transition-colors">
              Atelier Standard
            </a>
            <a href="#press" className="hover:text-[#906060] transition-colors">
              Press Relations
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
