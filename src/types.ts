export interface CollectionItem {
  id: string;
  category: 'fabrics' | 'flooring' | 'bedding' | 'gardens' | 'blinds' | 'wallcoverings';
  title: string;
  subtitle: string;
  description: string;
  brandPartner: string;
  origin: string;
  image: string;
  features: string[];
  specs: {
    material: string;
    finish: string;
    warranty: string;
    application: string;
  };
}

export interface BrandPartner {
  id: string;
  name: string;
  country: string;
  tagline: string;
  description: string;
  badge: string;
  featuredCategories: string[];
  image: string;
}

export interface CuratedSpace {
  id: string;
  title: string;
  location: string;
  scope: string;
  description: string;
  image: string;
  materialsUsed: string[];
  brandsFeatured: string[];
}

export interface MaterialSwatch {
  id: string;
  name: string;
  category: string;
  texture: string;
  colorName: string;
  hex: string;
  origin: string;
  description: string;
  image: string;
}

export interface ConsultationFormState {
  fullName: string;
  email: string;
  phone: string;
  projectType: 'residential' | 'commercial' | 'hospitality' | 'renovation';
  interestCategories: string[];
  budgetRange: string;
  preferredDate: string;
  notes: string;
  requestSwatchKit: boolean;
}

export interface PressArticle {
  id: string;
  publication: string;
  headline: string;
  excerpt: string;
  date: string;
  issue: string;
  image: string;
  readTime: string;
  category: string;
}
