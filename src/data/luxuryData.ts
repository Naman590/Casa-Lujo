import { CollectionItem, BrandPartner, CuratedSpace, MaterialSwatch } from '../types';

export const BRAND_PARTNERS: BrandPartner[] = [
  {
    id: 'mora-spain',
    name: 'Mora Spain',
    country: 'Ontinyent, Spain',
    tagline: 'World-Renowned Microfiber & Luxury Thermal Throws',
    description: 'Pioneering Spanish textile heritage since 1952. Renowned globally for sumptuous jacquards, ultrasoft microfiber blankets, and hypoallergenic thermal beddings crafted in Valencia.',
    badge: 'European Heritage',
    featuredCategories: ['Bedding', 'Throws', 'Textiles'],
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'manterol-spain',
    name: 'Manterol Spain',
    country: 'Valencia, Spain',
    tagline: 'Mediterranean Haute Couture Bed Linens & Duvets',
    description: 'Celebrated for over seven decades for bespoke jacquard duvet covers, Spanish percale sheets, and architectural bed ensembles that grace royal residences worldwide.',
    badge: 'Artisanal Weaving',
    featuredCategories: ['Bedding', 'Jacquards', 'Linens'],
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'king-koil',
    name: 'King Koil',
    country: 'St. Paul, Minnesota / Global',
    tagline: 'The Definitive Pinnacle of Orthopedic Sleep Systems',
    description: 'Endorsed by the International Chiropractors Association, King Koil designs hand-tufted pocket-spring mattresses, cashmere-topped cloud beds, and precision spinal sleep architecture.',
    badge: 'Medical & Luxury Certified',
    featuredCategories: ['Sleep Systems', 'Mattresses', 'Headboards'],
    image: 'https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'ddecor',
    name: 'D’Decor',
    country: 'Mumbai, India / Global',
    tagline: 'World-Leading Producer of Designer Curtain & Upholstery Fabrics',
    description: 'Collaborating with European design ateliers, D’Decor curates fire-retardant velvets, digital embroidered silks, and stain-resistant performance drapery engineered for monumental residences.',
    badge: 'Haute Fabrics',
    featuredCategories: ['Upholstery', 'Curtains', 'Drapery'],
    image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'maspar',
    name: 'Maspar',
    country: 'New Delhi, India',
    tagline: 'Contemporary Coordinates & Organic Combed Cotton',
    description: 'Seamless coordination across soft furnishings, master quilters, and natural fibers crafted for warm, minimalist architectural homes seeking tactile serenity.',
    badge: 'Modern Minimalism',
    featuredCategories: ['Cushions', 'Quilts', 'Dining Linen'],
    image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'trident',
    name: 'Trident Group',
    country: 'Punjab, India / Global',
    tagline: 'Sustainable Micro-Cotton & Ultra-Plush Bath Linens',
    description: 'Global benchmark for zero-twist Egyptian combed cotton bath towels, bathrobes, and certified carbon-neutral luxury textiles engineered for high-end residential spas.',
    badge: 'Eco-Luxury Benchmark',
    featuredCategories: ['Bath Linens', 'Spa Robes', 'Eco-Cotton'],
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1000&auto=format&fit=crop'
  }
];

export const COLLECTIONS: CollectionItem[] = [
  {
    id: 'col-1',
    category: 'fabrics',
    title: 'Haute Upholstery & Bespoke Drapery',
    subtitle: 'European Velvets, Raw Belgian Linens & Silk Damasks',
    description: 'Engineered for sculptural furniture and double-height architectural glazing. Our curated fabric archive features stain-resistant nano-coatings, acoustic sound-dampening weaves, and tactile textures sourced from Milan and Ontinyent.',
    brandPartner: 'D’Decor & Mora Spain',
    origin: 'Spain / Italy / India',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop',
    features: ['Acoustic sound absorption (NRC 0.65)', 'Rub test: 100,000+ Martindale cycles', 'Water & oil repellent nanotechnology', 'Bespoke custom heading styles'],
    specs: {
      material: '100% Belgian Linen / Italian Silk Velvet',
      finish: 'Matte Tactile & Subtle Sheen',
      warranty: '10-Year Fade Guarantee',
      application: 'Curtains, Wall Cladding, Sectionals, Daybeds'
    }
  },
  {
    id: 'col-2',
    category: 'flooring',
    title: 'Architectural Parquet & Stone Composite',
    subtitle: 'Smoked European Oak, French Chevron & Ultra-Rigid SPC',
    description: 'Precision-milled sustainable timber flooring with multi-layer UV oil finishes. Complemented by stone-plastic composite (SPC) flooring that delivers acoustic silent-walk underlayment and 100% waterproof resilience.',
    brandPartner: 'Casa Lujo Atelier & Meisterwerk',
    origin: 'Germany / Austria / India',
    image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=1200&auto=format&fit=crop',
    features: ['Grade A European White Oak', 'True 4-side micro-bevel edges', 'Underfloor heating compatibility (up to 28°C)', 'Class 34 commercial heavy wear rating'],
    specs: {
      material: 'Engineered Hardwood & Rigid Core SPC',
      finish: 'Brushed Matt UV Lacquer / Natural Wax Oil',
      warranty: '25-Year Residential Warranty',
      application: 'Living Salons, Executive Studies, Master Suites'
    }
  },
  {
    id: 'col-3',
    category: 'bedding',
    title: 'Sanctuary Sleep Systems & Spanish Linens',
    subtitle: 'King Koil Spinal Architecture, Mora Throws & Manterol Jacquards',
    description: 'Transforming private suites into restorative sanctuaries. Featuring hand-tufted 7-zone pocket spring mattresses topped with organic latex and camel wool, dressed in 1000-thread-count long-staple Egyptian cotton.',
    brandPartner: 'King Koil, Mora & Manterol',
    origin: 'Spain / USA / India',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop',
    features: ['ICA Spinal Alignment Certified', 'Thermoregulating Spanish Microfiber', '1000 TC Sateen & Percale Weave', 'Hypoallergenic & OEKO-TEX Standard 100'],
    specs: {
      material: 'Natural Latex, Cashmere, Micro-Pocket Coils',
      finish: 'Hand-Tufted Silk Damask',
      warranty: '15-Year Mattress Warranty',
      application: 'Master Chambers, Luxury Guest Suites'
    }
  },
  {
    id: 'col-4',
    category: 'gardens',
    title: 'Biophilic Vertical Gardens & Luxury Grass',
    subtitle: 'Preserved Nordic Moss Walls, Living Botanicals & 45mm Dense Turf',
    description: 'Infusing architecture with living nature. Custom zero-maintenance preserved moss art, automated drip-irrigation vertical living walls, and hyper-realistic 45mm multi-tone synthetic turf designed for terraces and private courtyards.',
    brandPartner: 'Casa Lujo Botanical Lab',
    origin: 'Scandinavia / Netherlands',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop',
    features: ['Zero water required for Preserved Moss', 'UV-Resistant color lock for 12+ years', 'Antimicrobial and pet-friendly turf backing', 'Natural air humidity & acoustics balancing'],
    specs: {
      material: 'Preserved Cladonia Stellaris & Polyethylene C-Shape Monofilament',
      finish: 'Ultra-Dense Matte Botanical',
      warranty: '8-Year UV Degradation Warranty',
      application: 'Feature Walls, Sky Balconies, Atriums, Rooftops'
    }
  },
  {
    id: 'col-5',
    category: 'blinds',
    title: 'Motorized Architectural Blinds & Shading',
    subtitle: 'Somfy-Integrated Roller Systems, Sheer Cascades & Blackout Duettes',
    description: 'Silent motorization coupled with solar-filtering screen textiles. Control glare, privacy, and solar heat gain effortlessly through smartphone, voice command, or architectural home automation integration.',
    brandPartner: 'Hunter Douglas & Somfy Partnered',
    origin: 'France / Germany / India',
    image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1200&auto=format&fit=crop',
    features: ['Ultra-silent brushless motors (<35dB)', 'Integrates with Lutron, KNX, Control4 & Alexa', '99% UV radiation blockage with view preservation', 'Rechargeable wire-free lithium battery options'],
    specs: {
      material: 'Fiberglass Screen, Metallized Thermal Polyester',
      finish: 'Zero-Reflection Architectural Matte',
      warranty: '7-Year Motor & Mechanism Warranty',
      application: 'Floor-to-Ceiling Windows, Skylights, Home Theaters'
    }
  },
  {
    id: 'col-6',
    category: 'wallcoverings',
    title: 'Tactile Wall Coverings & Acoustic Paneling',
    subtitle: 'Hand-Woven Japanese Grasscloth, Metallic Leaves & Slatted Oak',
    description: 'Adding depth, texture, and architectural resonance to bare walls. Hand-applied natural mica flakes, hand-spun sisal grasscloth, and PET acoustic fluted oak battens that elevate spatial acoustics and luxury aesthetics.',
    brandPartner: 'Casa Lujo Studio & Maspar Weaves',
    origin: 'Japan / Italy / India',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    features: ['FSC-Certified timber veneers', 'Class A fire resistance (ASTM E84)', 'Handcrafted organic vegetable dye inlays', 'Thermal insulation & echo reduction'],
    specs: {
      material: 'Natural Sisal, White Oak Slatting, Recycled Acoustic Felt',
      finish: 'Raw Organic & Brushed Satin',
      warranty: '10-Year Adhesion Warranty',
      application: 'Foyers, Dining Salons, Media Lounges'
    }
  }
];

export const CURATED_SPACES: CuratedSpace[] = [
  {
    id: 'space-1',
    title: 'The Sky Penthouse Salon',
    location: 'Worli Sea Face, Mumbai',
    scope: 'Curtains, Flooring & Bespoke Upholstery',
    description: 'A 6,500 sq ft panoramic penthouse designed with double-height D’Decor silk blackout drapery, French chevron smoked oak parquet, and custom bouclé curved sofas.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop',
    materialsUsed: ['Smoked French Oak', 'Belgian Bouclé', 'Metallic Bronze Sheers'],
    brandsFeatured: ['D’Decor', 'Mora Spain', 'Somfy Motorized']
  },
  {
    id: 'space-2',
    title: 'The Alentejo Master Sanctuary',
    location: 'Emirates Hills, Dubai',
    scope: 'Complete Bedroom Architecture & Bedding Suite',
    description: 'A serene master wing fitted with King Koil bespoke spinal sleep core, Manterol Spain 1000TC jacquard linens, acoustic fluted timber headboard wall, and motorized privacy shades.',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1200&auto=format&fit=crop',
    materialsUsed: ['Manterol Jacquard Cotton', 'Natural Latex', 'Acoustic White Oak'],
    brandsFeatured: ['King Koil', 'Manterol Spain', 'Maspar']
  },
  {
    id: 'space-3',
    title: 'The Biophilic Courtyard Residence',
    location: 'Jubilee Hills, Hyderabad',
    scope: 'Vertical Garden, Luxury Turf & Outdoor Fabrics',
    description: 'A seamless indoor-outdoor sanctuary boasting a 40-foot automated living vertical garden, 45mm ultra-dense artificial grass, and weatherproof outdoor upholstery.',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1200&auto=format&fit=crop',
    materialsUsed: ['Preserved Scandinavian Moss', 'Polyethylene Soft-Touch Turf', 'Solution-Dyed Acrylic'],
    brandsFeatured: ['Casa Lujo Botanical', 'Trident Eco-Textiles']
  },
  {
    id: 'space-4',
    title: 'The Heritage Villa Gallery & Dining Salon',
    location: 'Golf Links, New Delhi',
    scope: 'Handmade Wallcoverings & Engineered Flooring',
    description: 'An architectural renovation integrating handcrafted metallic grasscloth wall treatments, bespoke velvet dining seating, and wide-plank Bavarian oak flooring.',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1200&auto=format&fit=crop',
    materialsUsed: ['Japanese Sisal Grasscloth', 'Bavarian Smoked Oak', 'Royal Navy Velvet'],
    brandsFeatured: ['D’Decor', 'Mora Spain', 'Maspar']
  }
];

export const MATERIAL_SWATCHES: MaterialSwatch[] = [
  {
    id: 'mat-1',
    name: 'Belgian Bouclé Crème',
    category: 'Haute Upholstery',
    texture: 'Heavy Looped Wool Blend',
    colorName: 'Warm Off-White / Alabaster',
    hex: '#F4F1EA',
    origin: 'Flanders, Belgium',
    description: 'Rich three-dimensional tactile loop woven from natural wool and linen fibers. Supreme durability with soft cloud-like handfeel.',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'mat-2',
    name: 'European Smoked White Oak',
    category: 'Architectural Flooring',
    texture: 'Deep Wire-Brushed Grain',
    colorName: 'Smoked Muted Charcoal',
    hex: '#4A4641',
    origin: 'Bavaria, Germany',
    description: 'Naturally fumed white oak planks creating deep structural depth and warm mineral undertones. Protected with non-toxic matte hardwax oil.',
    image: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'mat-3',
    name: 'Valencia Matte Velvet',
    category: 'Haute Upholstery',
    texture: 'Dense Low-Pile Velvet',
    colorName: 'Terracotta Rose (Accent #906060)',
    hex: '#906060',
    origin: 'Ontinyent, Spain',
    description: 'Heritage Spanish velvet with subtle architectural drape and zero surface crushing. Treated with hydro-repellent eco-shield.',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'mat-4',
    name: 'Japanese Hand-Spun Sisal Grasscloth',
    category: 'Wallcoverings',
    texture: 'Raw Botanical Weave',
    colorName: 'Natural Oatmeal',
    hex: '#DDD2C3',
    origin: 'Kyoto, Japan',
    description: 'Artisanal organic wallcovering woven on traditional wooden looms from sun-dried agave fibers. Imparts warm acoustic resonance.',
    image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'mat-5',
    name: 'Nordic Preserved Reindeer Moss',
    category: 'Biophilic Design',
    texture: 'Spongy Organic Lichen',
    colorName: 'Deep Forest Emerald',
    hex: '#2D3E33',
    origin: 'Lapland, Norway',
    description: 'Naturally preserved and stabilized with natural salts and food-grade pigments. Requires zero sunlight, watering, or pruning.',
    image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'mat-6',
    name: 'Spanish Percale Cotton Jacquard',
    category: 'Sanctuary Bedding',
    texture: 'Crisp 1000 TC Sateen',
    colorName: 'Crisp Architectural White',
    hex: '#FAFAFA',
    origin: 'Valencia, Spain (Manterol)',
    description: 'Extra-long staple combed cotton woven on jacquard looms for a silky drape, breathability, and lifelong luster.',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=600&auto=format&fit=crop'
  }
];

export interface ProcessStepItem {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  specs: string;
}

export const PROCESS_STEPS: ProcessStepItem[] = [
  {
    step: '01',
    title: 'Private Spatial Consultation & Material Audit',
    subtitle: 'Atelier & On-Site Diagnostics',
    description: 'Our senior interior architects visit your private residence or host you at our flagship atelier to assess spatial lighting, floorplans, acoustic properties, and lifestyle requirements.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
    specs: 'Direct consultation with Lead Architect'
  },
  {
    step: '02',
    title: 'Curated Material Box & Tactile Sampling',
    subtitle: 'European Provenance Box',
    description: 'Receive a bespoke presentation box with tactile fabric swatches from Ontinyent & Flanders, smoked timber parquet samples, and custom curtain hardware tailored to your specific architectural palette.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop',
    specs: 'Custom Swatch Presentation Dossier'
  },
  {
    step: '03',
    title: 'Precision Laser Measurement & Engineering',
    subtitle: 'Sub-Millimeter Tolerances',
    description: 'Every drapery track, motorized blind housing, parquet border, and vertical moss installation is measured to 1mm tolerances using precision 3D laser scanners.',
    image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=800&auto=format&fit=crop',
    specs: '1mm Laser 3D Survey'
  },
  {
    step: '04',
    title: 'White-Glove Master Craftsmanship Installation',
    subtitle: 'Clean-Room Protocols',
    description: 'Our factory-trained master artisans execute installation under rigorous dust-free protocols with steam-finishing, acoustic testing, and 10-year craftsmanship warranties.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop',
    specs: 'Decade-Long Warranty Backing'
  }
];

export const PRESS_ARTICLES = [
  {
    id: 'press-1',
    publication: 'Architectural Digest',
    headline: 'The Haute Living Edit: How Casa Lujo Redefines Interior Architecture in India',
    excerpt: 'By uniting Europe’s finest weaving houses—including Spain’s legendary Mora and Manterol—with orthopedic sleep engineering, Casa Lujo sets a monumental standard for holistic residential sanctuaries.',
    date: 'Autumn Edition',
    issue: 'Cover Story • Vol. 118',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=900&auto=format&fit=crop',
    readTime: '6 Min Read',
    category: 'Architecture & Craft'
  },
  {
    id: 'press-2',
    publication: 'Elle Decor International',
    headline: 'Tactile Renaissance: The Quiet Art of Bespoke Drapery and Acoustic Paneling',
    excerpt: 'An inside look at Casa Lujo’s atelier techniques, where double-height windows meet precision Somfy motorized automation and Belgian linen textures.',
    date: 'Annual Luxury Review',
    issue: 'Design Vanguard',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=900&auto=format&fit=crop',
    readTime: '4 Min Read',
    category: 'Haute Textiles'
  },
  {
    id: 'press-3',
    publication: 'Vogue Living',
    headline: 'Restorative Sanctuaries: The Convergence of Sleep Science and Haute Bedding',
    excerpt: 'Pairing King Koil chiropractor-certified spinal systems with Spanish jacquards creates hotel-grade private retreats in modern penthouses and heritage estates.',
    date: 'Monograph Series',
    issue: 'Global Living 2026',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=900&auto=format&fit=crop',
    readTime: '5 Min Read',
    category: 'Sanctuary Living'
  },
  {
    id: 'press-4',
    publication: 'Wallpaper* Magazine',
    headline: 'Biophilic Integration & Sustainable Parquet: Next-Generation Spatial Design',
    excerpt: 'Zero-maintenance preserved Scandinavian moss walls and French smoked chevron timber transform modern luxury homes into calming, organic breathing spaces.',
    date: 'Design Awards Showcase',
    issue: 'Material Innovations',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=900&auto=format&fit=crop',
    readTime: '5 Min Read',
    category: 'Sustainable Materials'
  }
];

export const ABOUT_MEDIA = [
  {
    title: 'Spanish Weaving Guilds',
    location: 'Ontinyent & Valencia, Spain',
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=800&auto=format&fit=crop',
    caption: 'Centuries of heritage jacquard weaving looms and artisanal yarn dyeing.'
  },
  {
    title: 'Precision Timber Atelier',
    location: 'Bavaria & Flanders',
    image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=800&auto=format&fit=crop',
    caption: 'Smoked European oak parquet hand-finished with organic hardwax oils.'
  },
  {
    title: 'Master Drapery Tailoring',
    location: 'Casa Lujo Atelier',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop',
    caption: '1mm precision laser tracking, hand-pleated headings, and flawless drop calibration.'
  }
];
