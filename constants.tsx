import { AwardItem, EducationItem, ExperienceItem, ResearchProject, SkillCategory } from './types';
import { Microscope, Dna, FlaskConical, ClipboardList, Users, PenTool, Database } from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Praseeda Padmanabhan",
  title: "Microbiologist | Researcher | Biotechnology Enthusiast",
  punchline: "Exploring the microscopic world to drive innovations in human health and therapeutics.",
  email: "praseedapadhu@gmail.com",
  phone: "+91 8015927266",
  location: "No. 9/2024, Anna Street, Nanmangalam, Chennai",
  birthplace: "Nizwa, Oman",
  nationality: "Indian",
  currentLocation: "Chennai",
  ielts: "7.5 (CEFR C1)",
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

export const PUBLICATIONS = [
  {
    title: "Role of Hericium erinaceus as a Probiotic Stimulant",
    journal: "Acta Scientific Microbiology",
    indexing: ["Google Scholar", "ResearchGate", "Crossref", "Scilit", "ICMJE", "Publons", "Index Copernicus"]
  }
];

export const AWARDS: AwardItem[] = [
  {
    title: "1st Place – Poster Presentation",
    event: "International Conference on Advanced Innovation and Research",
    year: "2023",
    description: "Topic: Drug Delivery Methods for Parkinson’s Illness",
    type: "presentation"
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
    type: "speech"
  },
  {
    title: "Multiple 2nd Places – Literary & Debate",
    event: "Chennai Literary Festival, D.G. Vaishnav College, Patrician College",
    type: "literary"
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