export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  score: string;
}

export interface ResearchProject {
  title: string;
  period: string;
  institution: string;
  areas: string[];
}

export interface ExperienceItem {
  company: string;
  role?: string;
  period: string;
  description: string[];
}

export interface AwardItem {
  title: string;
  event: string;
  year?: string;
  description?: string;
  type: 'presentation' | 'paper' | 'speech' | 'literary';
  link?: string;
  certificate?: string;
}

export interface BlogPost {
  title: string;
  url: string;
  date: string;
  description?: string;
  image?: string;
}

export interface PublicationItem {
  title: string;
  journal: string;
  indexing?: string[];
  link?: string;
  date?: string;
  authors?: string;
  volume?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}