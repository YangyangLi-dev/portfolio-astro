export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  image: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  slug: string;
}

export type ProjectCategory = 'Web Apps' | 'Mobile' | 'API' | 'All';

export interface BlogPost {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  category: string;
  tags: string[];
  publishDate: string;
  readingTime: number;
  featured: boolean;
  slug: string;
  image: string;
}