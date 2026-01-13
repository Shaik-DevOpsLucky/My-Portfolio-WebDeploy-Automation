
export interface Skill {
  name: string;
  category: 'Cloud' | 'DevOps' | 'IaC' | 'Programming' | 'Database' | 'Tools' | 'Scripting';
  icon?: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
}
