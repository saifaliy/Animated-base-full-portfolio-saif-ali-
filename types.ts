
export interface Project {
  id: string;
  title: string;
  category: 'AI & Research' | 'Web Engineering' | 'Mobile Systems';
  description: string;
  problem: string;
  solution: string;
  tech: string[];
  image: string;
  link?: string;
  github?: string;
  impact?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'AI & Machine Learning' | 'Core Engineering' | 'Data Science' | 'Frameworks' | 'Research';
  description: string;
  icon?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
  type: 'Research' | 'Industry' | 'Internship';
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  details: string;
  highlights: string[];
}

export interface ResearchInterest {
  title: string;
  description: string;
  goals: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  link?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}

export interface VolunteerWork {
  title: string;
  org: string;
  description: string;
  icon: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface WorkflowStep {
  title: string;
  description: string;
  icon: string;
}
