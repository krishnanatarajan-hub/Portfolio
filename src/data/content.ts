export interface Experience {
  id: number;
  role: string;
  organization: string;
  location: string;
  date: string;
  description: string;
  skills: string[];
}

export interface Certification {
  id: number;
  title: string;
  institution: string;
  mode: string;
  date: string;
  description: string;
  highlights?: { label: string; value: string }[];
  topics?: string[];
}

export interface Project {
  id: number;
  title: string;
  date: string;
  description: string;
  tags: string[];
  flow: string[];
}

export interface ResearchInterest {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface TimelineEvent {
  date: string;
  label: string;
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: 'Bioscience & Biotechnology Intern',
    organization: 'Biozone Research Technologies Pvt. Ltd',
    location: 'Chennai',
    date: 'May 2026 – Jun 2026',
    description:
      'Gained hands-on experience in molecular biology laboratory techniques, including DNA extraction from bacterial samples, PCR-based DNA amplification, gel electrophoresis, and UV-based visualization and documentation of DNA bands.',
    skills: [
      'DNA Extraction',
      'PCR / DNA Amplification',
      'Gel Electrophoresis',
      'UV Transilluminator / DNA Visualization',
      'Basic Microbiology Laboratory Techniques',
      'Sample Preparation and Handling',
      'Laboratory Equipment Handling',
      'Experimental Observation and Result Analysis',
      'Laboratory Discipline',
      'Teamwork',
    ],
  },
  {
    id: 2,
    role: 'Biotechnology Intern',
    organization: 'VJ Biotech',
    location: 'Coimbatore',
    date: 'Jan 2026',
    description:
      'Explored bio-pharma and nanotechnology domains with focus on chromatographic and separation techniques, nanoparticle synthesis, and biological activity testing.',
    skills: [
      'Bio-pharma',
      'Nanotechnology',
      'Chromatographic Techniques',
      'Separation Techniques',
      'Nanoparticle Synthesis',
      'Biological Activity Testing',
    ],
  },
  {
    id: 3,
    role: 'Bioinformatics Intern',
    organization: 'Bioxplora',
    location: 'Coimbatore',
    date: 'Oct 2025',
    description:
      'Conducted molecular docking and drug discovery studies, utilizing biological databases for protein and ligand information, and gained exposure to docking software applications with analysis and interpretation of results.',
    skills: [
      'Molecular Docking',
      'Drug Discovery',
      'Protein Databases',
      'Ligand Databases',
      'Docking Software Applications',
      'Result Analysis & Interpretation',
    ],
  },
  {
    id: 4,
    role: 'Food Testing Laboratory Intern',
    organization: 'Sri Shakthi Food Testing Laboratory',
    location: 'Coimbatore',
    date: 'Sep 2025',
    description:
      'Trained in food safety regulations, laboratory SOPs, and hygiene practices. Performed microbiological testing of food and water samples, chemical analysis, water and soil analysis, and gained proficiency in laboratory instruments and titration methods.',
    skills: [
      'Food Safety Regulations',
      'Laboratory SOPs',
      'Microbiological Testing',
      'Chemical Analysis',
      'Water & Soil Analysis',
      'Laboratory Instruments',
      'Titration Methods',
      'Hygiene Practices',
    ],
  },
];

export const certifications: Certification[] = [
  {
    id: 1,
    title: 'Recombinant DNA Technology Master Class',
    institution: 'Biotecnika',
    mode: 'Virtual',
    date: 'Aug 2026',
    description:
      'Mastered core genetic engineering workflows including DNA isolation, restriction digestion, ligation, and host-cell transformation for gene manipulation. Explored applications of recombinant DNA technology in drug manufacturing and medical diagnostics.',
    topics: [
      'DNA Isolation',
      'Restriction Digestion',
      'Ligation',
      'Host-Cell Transformation',
      'Drug Manufacturing',
      'Medical Diagnostics',
    ],
  },
  {
    id: 2,
    title: 'Clinical Trial Analysis & Reporting',
    institution: 'Internshala Trainings',
    mode: 'Virtual',
    date: 'Feb 2026 – Mar 2026',
    description:
      '4-week online certified training program covering Clinical Trials Analysis & Reporting using SAS, Clinical Study Documents, and Building Clinical Study Reports (CSRs).',
    highlights: [
      { label: 'Final Assessment', value: '93%' },
      { label: 'Recognition', value: 'Top Performer' },
    ],
    topics: [
      'Clinical Trials Analysis',
      'SAS',
      'Clinical Study Documents',
      'Clinical Study Reports (CSRs)',
    ],
  },
  {
    id: 3,
    title: 'Host Pathogen Interaction',
    institution: 'IIT Madras',
    mode: 'Virtual',
    date: 'Jan 2026 – Present',
    description:
      'Studying fundamental host defense mechanisms in human and mouse models, including immunity against foreign pathogens. Relevant to biological sciences, biotechnology, chemical sciences, and medical sciences.',
    topics: [
      'Host Defense Mechanisms',
      'Immunity',
      'Biological Sciences',
      'Biotechnology',
      'Chemical Sciences',
      'Medical Sciences',
    ],
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'Smart Spore Strip — Next-Gen Fungal Biosensor for Real-Time Post-Harvest Grain Protection',
    date: 'Jun 2025 – Jan 2026',
    description:
      'Developed a biodegradable colorimetric biosensor strip, called Smart Spore Strip, for real-time detection of post-harvest fungal contamination in stored grains using pH-sensitive dyes and enzyme-based VOC sensors. Antifungal efficacy was validated through dual-signal color changes using a traffic-light system along with storage simulation assays on wheat and rice.',
    tags: [
      'Biodegradable Biosensor',
      'Colorimetric Detection',
      'pH-Sensitive Dyes',
      'Enzyme-Based VOC Sensors',
      'Fungal Contamination',
      'Wheat',
      'Rice',
      'Storage Simulation',
    ],
    flow: [
      'Stored Grain',
      'Fungal Contamination',
      'VOC / pH Detection',
      'Color Change',
      'Traffic-Light Interpretation',
    ],
  },
  {
    id: 2,
    title: 'Biopack — Biodegradable Packaging from Agricultural Waste',
    date: 'Dec 2025 – Present',
    description:
      'Designed, developed and evaluated biodegradable bio-packaging material from agricultural waste using natural fibers and biopolymers. Sustainability evaluation included physical testing, mechanical testing, biodegradability testing, and waste utilization assays.',
    tags: [
      'Biodegradable Packaging',
      'Agricultural Waste',
      'Natural Fibers',
      'Biopolymers',
      'Sustainability',
      'Physical & Mechanical Testing',
    ],
    flow: [
      'Agricultural Waste',
      'Natural Fibers + Biopolymers',
      'Bio-Pack',
      'Testing',
      'Sustainable Packaging',
    ],
  },
  {
    id: 3,
    title: 'Ulva lactuca Composite Membrane',
    date: 'Jun 2026 – Present',
    description:
      'An eco-friendly, low-cost composite membrane made from Ulva lactuca seaweed to purify polluted water resources. The technology provides dual action: physical filtration of microplastics and natural adsorption of toxic heavy metals — designed without creating secondary waste.',
    tags: [
      'Ulva lactuca',
      'Composite Membrane',
      'Water Purification',
      'Microplastic Filtration',
      'Heavy Metal Adsorption',
      'Eco-Friendly',
    ],
    flow: [
      'Ulva lactuca',
      'Composite Membrane',
      'Polluted Water',
      'Microplastic Filtration + Heavy Metal Adsorption',
    ],
  },
];

export const researchInterests: ResearchInterest[] = [
  {
    id: 1,
    title: 'Genetics',
    description: 'Interest in genetics and genetic engineering workflows.',
    icon: '🧬',
  },
  {
    id: 2,
    title: 'Immunology',
    description: 'Interest in host-pathogen interaction and immune defense mechanisms.',
    icon: '🛡️',
  },
  {
    id: 3,
    title: 'Environmental Technology',
    description: 'Interest in biotechnology-based environmental solutions.',
    icon: '🌿',
  },
  {
    id: 4,
    title: 'Blue Biotechnology',
    description: 'Interest connected to marine biological resources, including Ulva lactuca.',
    icon: '🌊',
  },
  {
    id: 5,
    title: 'Sustainability',
    description: 'Interest in biodegradable materials and waste utilization.',
    icon: '♻️',
  },
  {
    id: 6,
    title: 'Health',
    description: 'Interest in biotechnology applications relevant to health and biomedical innovation.',
    icon: '💊',
  },
];

export const technicalSkills = [
  'Microbiological Techniques',
  'Laboratory Techniques',
  'Cell Culture',
  'Biology',
  'Gel Electrophoresis',
  'Polymerase Chain Reaction (PCR)',
  'DNA Extraction',
];

export const professionalSkills = [
  'Leadership',
  'Project Management',
  'Effective Communication',
];

export const timelineEvents: TimelineEvent[] = [
  { date: 'Sep 2025', label: 'Sri Shakthi Food Testing Laboratory Internship' },
  { date: 'Oct 2025', label: 'Bioxplora Bioinformatics Internship' },
  { date: 'Dec 2025', label: 'Biopack Project Begins' },
  { date: 'Jan 2026', label: 'VJ Biotech Internship' },
  { date: 'Jan 2026', label: 'Host Pathogen Interaction Course Begins' },
  { date: 'Feb – Mar 2026', label: 'Clinical Trial Analysis & Reporting Training' },
  { date: 'May – Jun 2026', label: 'Biozone Research Technologies Internship' },
  { date: 'Jun 2026', label: 'Ulva lactuca Composite Membrane Begins' },
  { date: 'Aug 2026', label: 'Recombinant DNA Technology Master Class' },
];

export const skillEcosystemNodes = [
  { id: 'core', label: 'Biotechnology', x: 50, y: 50, primary: true },
  { id: 'micro', label: 'Microbiology', x: 25, y: 20 },
  { id: 'lab', label: 'Lab Techniques', x: 75, y: 20 },
  { id: 'pcr', label: 'PCR', x: 15, y: 50 },
  { id: 'dna', label: 'DNA Extraction', x: 85, y: 50 },
  { id: 'gel', label: 'Gel Electrophoresis', x: 25, y: 80 },
  { id: 'cell', label: 'Cell Culture', x: 75, y: 80 },
  { id: 'bio', label: 'Biology', x: 50, y: 15 },
  { id: 'lead', label: 'Leadership', x: 10, y: 75 },
  { id: 'pm', label: 'Project Mgmt', x: 90, y: 75 },
  { id: 'comm', label: 'Communication', x: 50, y: 90 },
];
