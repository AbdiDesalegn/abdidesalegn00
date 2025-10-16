export interface Project {
  title: string;
  description: string;
  category: string;
  stack: string[];
  gradient: string;
  github: string;
  demo: string;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  gradient: string;
}

export interface Skill {
  Icon: React.ComponentType<{ className?: string }>;
  label: string;
  color: string;
}

export interface ContactInfo {
  Icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href: string;
}

export interface SocialLink {
  Icon: React.ComponentType<{ className?: string }>;
  href: string;
  label: string;
  color?: string;
}

export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
