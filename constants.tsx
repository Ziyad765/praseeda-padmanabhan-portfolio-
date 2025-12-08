import { AwardItem, EducationItem, ExperienceItem, ResearchProject, SkillCategory, PublicationItem, BlogPost } from './types';
import { Microscope, Dna, FlaskConical, ClipboardList, Users, PenTool, Database } from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Praseeda Padmanabhan",
  title: "Microbiologist | Researcher | Biotechnology Enthusiast",
  punchline: "Exploring the microscopic world to drive innovations in human health and therapeutics.",
  email: "praseedapadhu@gmail.com",
  phone: "+91 8015927266",
  location: "No. 9/224, Anna Street, Nanmangalam, Chennai",
  birthplace: "Nizwa, Oman",
  nationality: "Indian",
  currentLocation: "Chennai",
  ielts: "7.5 (CEFR C1)",
  blog: "https://microbialchronicles.blogspot.com/",
  researchGate: "https://www.researchgate.net/profile/Praseeda-Padmanabhan",
  linkedin: "https://www.linkedin.com/in/praseeda-padmanabhan-54a323278/",
  cv: "https://drive.google.com/file/d/1XyOCUtKjtThlY8jJP6nkUXECinWUxWSe/view",
  about: `I am Praseeda Padmanabhan, a passionate microbiologist with strong hands-on experience in molecular biology, tumor biology, and targeted drug delivery. I have worked extensively with PCR, DNA/RNA isolation, gel electrophoresis, microbial analyses, and diagnostic laboratory procedures. My academic journey and research internships have strengthened my interest in therapeutic innovations, nanomedicine, and translational biology.`
};

export const EDUCATION: EducationItem[] = [
  {
    degree: "B.Sc Microbiology",
    institution: "Dr. MGR Janaki College of Arts and Science for Women, Chennai",
    year: "2022 – 2025",
    score: "CGPA: 8.1"
  },
  {
    degree: "12th Grade (CBSE)",
    institution: "Boaz Public School",
    year: "2021 – 2022",
    score: "382/500"
  },
  {
    degree: "10th Grade",
    institution: "Indian School Nizwa",
    year: "2018 – 2019",
    score: "370/500"
  }
];

export const RESEARCH: ResearchProject = {
  title: "Folic acid–Chitosan nanocarrier co-loaded with Curcumin–ZnO nanoparticles and Cisplatin for Targeted Therapy of MDA-MB-231 cells",
  institution: "Aviegn Biotech Pvt Ltd",
  period: "Sep 2025 – Jan 2026",
  areas: ["Tumor Biology", "Cell Biology", "Targeted Drug Delivery"]
};

export const INTERNSHIPS: ExperienceItem[] = [
  {
    company: "Avigen Biotech Pvt Ltd",
    period: "Aug – Sep 2025",
    description: [
      "PCR",
      "DNA & RNA isolation",
      "Gel electrophoresis",
      "Molecular biological methodologies"
    ]
  },
  {
    company: "Neuberg Ehrlich Pvt Ltd",
    period: "Jan – Feb 2025",
    description: [
      "Routine microbiology",
      "Sample handling"
    ]
  },
  {
    company: "Priya Diagnostic & Ultrasound Centre Pvt Ltd",
    period: "Aug – Sep 2023",
    description: [
      "Microbiology",
      "Clinical Biochemistry",
      "Haematology",
      "Clinical Pathology"
    ]
  }
];

export const PUBLICATIONS: PublicationItem[] = [
  {
    title: "Role of Hericium erinaceus as a Probiotic Stimulant",
    journal: "Acta Scientific Microbiology (ISSN: 2581-3226)",
    volume: "Volume 8 Issue 6 June 2025",
    date: "Published: May 30, 2025",
    authors: "R Vidhyalakshmi*, Praseeda Padmanabhan, Charmaine Antionette Shu",
    link: "https://drive.google.com/file/d/1j9K8-NVq51FSE3CF9LNpca2Xr3vUoXp8/view"
  }
];

export const CERTIFICATES = [
  { name: "Award Certificate 1", file: "Awards 1.pdf" },
  { name: "Award Certificate 2", file: "Awards 2.pdf" },
  { name: "Award Certificate 3", file: "Awards 3.pdf" }
];

export const GALLERY_IMAGES = [
  "IMG_20250218_180140.jpg",
  "IMG_20250218_180145.jpg",
  "IMG_20250218_180147.jpg",
  "IMG_20250218_180210.jpg",
  "IMG_20250218_181109.jpg",
  "IMG_20250218_181114.jpg",
  "IMG_20250218_181115.jpg",
  "IMG_20250218_181217.jpg",
  "IMG_20250218_181218.jpg"
];

export const AWARDS: AwardItem[] = [
  {
    title: "1st Place – Poster Presentation",
    event: "International Conference on Advanced Innovation and Research",
    year: "2023",
    description: "Topic: Drug Delivery Methods for Parkinson’s Illness",
    type: "presentation",
    certificate: "Awards 1.pdf"
  },
  {
    title: "2nd Place – Poster Presentation",
    event: "National Conference on Transforming Healthcare",
    year: "2024",
    description: "Topic: Synergy of Erlotinib & Calcium Channel Blockers in Lung Cancer",
    type: "presentation"
  },
  {
    title: "Best Paper Award",
    event: "International Conference on Microbial Ecosystem & Biomedicines",
    year: "2024",
    description: "Topic: Green Synthesis & Anti-Microbial Study of Nigella sativa",
    type: "paper"
  },
  {
    title: "Best Paper Award",
    event: "National Conference on Regenerative Medicine",
    year: "2024",
    description: "Topic: Purification & Sequencing of Laccase from Pleurotus ostreatus",
    type: "paper"
  },
  {
    title: "1st Place – Speech Competition",
    event: "Dr. MGR Janaki College",
    type: "speech",
    certificate: "Awards 3.pdf"
  },
  {
    title: "Multiple 2nd Places – Literary & Debate",
    event: "Chennai Literary Festival, D.G. Vaishnav College, Patrician College",
    type: "literary",
    certificate: "Awards 2.pdf"
  }
];

export const OFFERS = [
  "Microbiology Concept Clarification",
  "Simplified Science Communication as M. Chronicler",
  "Academic Guidance & Peer Support",
  "Basic Lab Protocol Troubleshooting",
  "Introductory Content Creation"
];

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "Your Snot is a Superpower: The Underrated Goo That Kills Salmonella 🤧🦠💪🏻",
    url: "https://microbialchronicles.blogspot.com/2025/10/your-snot-is-superpower-underrated-goo.html",
    date: "October 13, 2025",
    description: "Discover the amazing protective properties of mucus and its role in fighting infections."
  },
  {
    title: "The Deadwood Secret 🤐🔎🍄‍🟫",
    url: "https://microbialchronicles.blogspot.com/2025/10/the-deadwood-secret.html",
    date: "October 12, 2025",
    description: "Uncovering the hidden microscopic life thriving within deadwood ecosystems."
  },
  {
    title: "Your Cell's Trash Compactor Is a Superbug-Slaying Superhero🤯!",
    url: "https://microbialchronicles.blogspot.com/2025/10/your-cells-trash-compactor-is-superbug.html",
    date: "October 10, 2025",
    description: "How cellular waste management systems play a crucial role in immune defense."
  },
  {
    title: "GUT WAR: The Epic Battle to Save Your Inner Kingdom",
    url: "https://microbialchronicles.blogspot.com/2025/10/gut-war-epic-battle-to-save-your-inner.html",
    date: "October 10, 2025",
    description: "A deep dive into the complex interactions and battles within the human gut microbiome."
  },
  {
    title: "Welcome to the Chronicles: Prepare to Get Infected",
    url: "https://microbialchronicles.blogspot.com/2025/10/everyone-its-m.html",
    date: "October 09, 2025",
    description: "Introduction to Microbial Chronicles - where the microscopic world gets the mega-story treatment."
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Laboratory Skills",
    skills: ["PCR", "DNA/RNA isolation", "Gel electrophoresis", "Microbial culture", "Nanoparticle handling", "Diagnostic testing"]
  },
  {
    category: "Soft Skills",
    skills: ["Scientific writing", "Presentation", "Research analysis", "Team management", "Communication"]
  },
  {
    category: "Tools & Software",
    skills: ["MS Office", "Research databases", "Lab equipment handling"]
  }
];

export const EXTRACURRICULARS = {
  leadership: [
    { role: "Joint Cultural Secretary", period: "2023–2024" },
    { role: "Placement Representative", period: "2024–2025" }
  ],
  volunteering: [
    "Red Ribbon Club (HIV Awareness, Blood Donation)",
    "Chennai Literary Festival",
    "Knowledge Quest Quiz Event Volunteer"
  ]
};