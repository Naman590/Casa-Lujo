import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Manifesto } from './components/Manifesto';
import { CollectionsShowcase } from './components/CollectionsShowcase';
import { BrandPavilion } from './components/BrandPavilion';
import { SpacesGallery } from './components/SpacesGallery';
import { PressSection } from './components/PressSection';
import { ProcessAtelier } from './components/ProcessAtelier';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [preselectedCategory, setPreselectedCategory] = useState<string>('');
  const [preselectedBrand, setPreselectedBrand] = useState<string>('');

  const handleOpenConsultation = (categoryOrTitle?: string) => {
    if (categoryOrTitle) {
      setPreselectedCategory(categoryOrTitle);
    }
    setIsConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationOpen(false);
    setPreselectedCategory('');
    setPreselectedBrand('');
  };

  const handleSelectBrand = (brandName: string) => {
    setPreselectedBrand(brandName);
    setIsConsultationOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-[#906060] selection:text-white">
      {/* Navigation: Home | About Us | Portfolio | Press | Contact */}
      <Header onOpenConsultation={() => handleOpenConsultation()} />

      {/* Main Content Sections */}
      <main>
        {/* Black Background Hero Section with Parallax Masked Typography */}
        <Hero onOpenConsultation={() => handleOpenConsultation()} />

        {/* 01. About Us & Atelier Philosophy with Provenance Media */}
        <Manifesto onOpenConsultation={() => handleOpenConsultation()} />

        {/* 02. Curated Portfolio & Collections */}
        <CollectionsShowcase 
          onOpenConsultation={handleOpenConsultation} 
        />

        {/* 03. World-Renowned Brand Partners */}
        <BrandPavilion 
          onOpenConsultation={() => handleOpenConsultation()}
          onSelectBrand={handleSelectBrand}
        />

        {/* 04. Realized Curated Spaces Portfolio */}
        <SpacesGallery onOpenConsultation={() => handleOpenConsultation()} />

        {/* 05. Press & Editorial Accolades */}
        <PressSection onOpenConsultation={() => handleOpenConsultation()} />

        {/* 06. Bespoke Atelier Execution Protocol with Media */}
        <ProcessAtelier onOpenConsultation={() => handleOpenConsultation()} />
      </main>

      {/* Luxury Footer (Contact) */}
      <Footer onOpenConsultation={() => handleOpenConsultation()} />

      {/* Private Spatial Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={handleCloseConsultation}
        preselectedCategory={preselectedCategory}
        preselectedBrand={preselectedBrand}
      />
    </div>
  );
}
