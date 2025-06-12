export interface NavItem {
  href: string;
  label: string;
  icon: React.ReactNode;
}

export interface Project {
  title: string;
  tech: string;
  description: string;
  impact: string[];
  image: string;
  links: { href: string; label: string; icon: React.ReactNode }[];
}

export interface Certification {
  title: string;
  period: string;
  details: string[];
  link: string;
}

export interface Education {
  degree: string;
  period: string;
  institution: string;
  details: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Leadership {
  title: string;
  organization: string;
  period: string;
  details: string[];
}
