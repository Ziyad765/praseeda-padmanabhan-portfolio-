import { AwardItem, EducationItem, ExperienceItem, ResearchProject, SkillCategory, PublicationItem, BlogPost } from './types';
import { Microscope, Dna, FlaskConical, ClipboardList, Users, PenTool, Database } from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Praseeda Padmanabhan",
  title: "Microbiologist | Biotechnology Enthusiast",
  punchline: "Exploring the microscopic world to drive innovations in human health and therapeutics.",
  email: "praseedapadhu@gmail.com",
  phone: "+91 8015927266",
  location: "No. 9/204, Anna Street, Nanmangalam, Chennai",
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
    ],
    document: "https://drive.google.com/file/d/1723rcE2loxez009Y5gDrIiibYmXIdjRa/view?usp=drive_link"
  },
  {
    company: "Priya Diagnostic & Ultrasound Centre Pvt Ltd",
    period: "Aug – Sep 2023",
    description: [
      "Microbiology",
      "Clinical Biochemistry",
      "Haematology",
      "Clinical Pathology"
    ],
    document: "https://drive.google.com/file/d/1ilWyc6bPuWFNa0Tyjq8pnEGMobLjt-Gi/view?usp=drive_link"
  }
];

export const PUBLICATIONS: PublicationItem[] = [
  {
    title: "Role of Hericium erinaceus as a Probiotic Stimulant",
    journal: "Acta Scientific Microbiology (ISSN: 2581-3226)",
    volume: "Volume 8 Issue 6 June 2025",
    date: "Published: May 30, 2025",
    authors: "R Vidhyalakshmi*, Praseeda Padmanabhan, Charmaine Antionette Shu, Fathima Munavar Ahamed Basheer",
    link: "https://drive.google.com/file/d/1j9K8-NVq51FSE3CF9LNpca2Xr3vUoXp8/view"
  }
];

export const CERTIFICATES = [
  { name: "Award Certificate 1", file: "1.pdf" },
  { name: "Award Certificate 2", file: "2.pdf" },
  { name: "Award Certificate 3", file: "3.pdf" },
  { name: "Award Certificate 4", file: "4.pdf" },
  { name: "Award Certificate 5", file: "5.pdf" },
  { name: "Award Certificate 6", file: "6.pdf" }
];

export const GALLERY_IMAGES = [
  "IMG_20250218_180145.jpg",
  "IMG_20250218_180210.jpg",
  "IMG_20250218_181217.jpg",
  "extra_1.jpg",
  "extra_2.jpg",
  "extra_3.jpg"
];

export const AWARDS: AwardItem[] = [
  {
    title: "1st Place – Poster Presentation",
    event: "International Conference on Advanced Innovation and Research",
    year: "2023",
    description: "Topic: Drug Delivery Methods for Parkinson’s Illness",
    type: "presentation",
    certificate: "1.pdf"
  },
  {
    title: "2nd Place – Poster Presentation",
    event: "National Conference on Transforming Healthcare",
    year: "2024",
    description: "Topic: Synergy of Erlotinib & Calcium Channel Blockers in Lung Cancer",
    type: "presentation",
    certificate: "2.pdf"
  },
  {
    title: "Best Paper Award",
    event: "International Conference on Microbial Ecosystem & Biomedicines",
    year: "2024",
    description: "Topic: Green Synthesis & Anti-Microbial Study of Nigella sativa",
    type: "paper",
    certificate: "3.pdf"
  },
  {
    title: "Best Paper Award",
    event: "National Conference on Regenerative Medicine",
    year: "2024",
    description: "Topic: Purification & Sequencing of Laccase from Pleurotus ostreatus",
    type: "paper",
    certificate: "4.pdf"
  },
  {
    title: "1st Place – Speech Competition",
    event: "Dr. MGR Janaki College",
    type: "speech",
    certificate: "5.pdf"
  },
  {
    title: "Multiple 2nd Places – Literary & Debate",
    event: "Chennai Literary Festival, D.G. Vaishnav College, Patrician College",
    type: "literary",
    certificate: "6.pdf"
  }
];

export const OFFERS = [];

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
    title: "GUT WAR: The Epic Battle to Save Your Inner Kingdom",
    url: "https://microbialchronicles.blogspot.com/2025/10/gut-war-epic-battle-to-save-your-inner.html",
    date: "October 10, 2025",
    description: "A deep dive into the complex interactions and battles within the human gut microbiome."
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
    { role: "Joint Cultural Secretary", period: "2023–2024", document: "https://drive.google.com/file/d/1rEVCR2tCeJ4HpUG-JdBfK0T1RV7dmzM5/view?usp=drive_link" },
    { role: "Placement Representative", period: "2024–2025", document: "https://drive.google.com/file/d/1UmRo2StncOBbi2ZOhBjkJjG7KmRdUcEG/view?usp=drive_link" }
  ],
  volunteering: [
    "Red Ribbon Club (HIV Awareness, Blood Donation)",
    "Chennai Literary Festival",
    "Knowledge Quest Quiz Event Volunteer"
  ]
};