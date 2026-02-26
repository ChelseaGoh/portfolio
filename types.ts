
export enum ProjectCategory {
  ALL = 'All',
  PRODUCT = 'UI/UX Product',
  RESEARCH = 'UX Research',
  IA = 'Information Architecture'
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  shortDescription: string;
  role: string;
  year: string;
  image: string;
  tags: string[];
  problem: string | string[];
  outcome: string;
  
  // Case Study Details
  overview?: string;
  duration?: string;
  tools?: string[];
  context?: string;
  
  // New Research Section
  research?: {
    title: string;
    subtitle?: string;
    content: string;
    items?: string[]; // For lists like persona goals or scenario steps
    type?: 'persona' | 'scenario' | 'general';
  }[];

  process?: {
    title: string;
    description: string | string[];
  }[];
  uxDecisions?: {
    title: string;
    description: string | string[];
    image?: string;      // Thumbnail/Cover image for the section
    images?: string[];   // Multiple visible images
    detailImages?: string[]; // Array of full-res images to show in lightbox
  }[];
  uiExecution?: {
    title: string;
    description: string | string[];
    images: string[];
  }[];
  prototypeLink?: string;
  keyTakeaways?: string | string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}
