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
}

export interface SkillCategory {
  category: string;
  skills: string[];
}