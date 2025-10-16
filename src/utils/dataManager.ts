// Data management utilities for admin panel

export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  stack: string[];
  github: string;
  demo: string;
  image: string;
  gradient: string;
  status: 'Published' | 'Draft';
  date: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  image: string;
  gradient: string;
  status: 'Published' | 'Draft';
  date: string;
}

// Sample data - in a real app, this would come from a database
export const sampleProjects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with payment integration, and inventory management.',
    category: 'Web',
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    github: 'https://github.com/username/ecommerce',
    demo: 'https://ecommerce-demo.com',
    image: '/api/placeholder/400/300',
    gradient: 'from-blue-500 to-purple-600',
    status: 'Published',
    date: '2024-01-15'
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    description: 'Secure mobile banking application with biometric authentication and real-time transactions.',
    category: 'Mobile',
    stack: ['React Native', 'Node.js', 'MongoDB', 'Firebase'],
    github: 'https://github.com/username/banking-app',
    demo: 'https://banking-demo.com',
    image: '/api/placeholder/400/300',
    gradient: 'from-green-500 to-teal-600',
    status: 'Draft',
    date: '2024-01-10'
  },
  {
    id: 3,
    title: 'AI Chatbot',
    description: 'Intelligent chatbot powered by machine learning for customer support automation.',
    category: 'AI & ML',
    stack: ['Python', 'TensorFlow', 'FastAPI', 'PostgreSQL'],
    github: 'https://github.com/username/ai-chatbot',
    demo: 'https://chatbot-demo.com',
    image: '/api/placeholder/400/300',
    gradient: 'from-purple-500 to-pink-600',
    status: 'Published',
    date: '2024-01-05'
  }
];

export const sampleBlogs: BlogPost[] = [
  {
    id: 1,
    title: 'React Best Practices for 2024',
    excerpt: 'Learn the latest React patterns and best practices to build scalable applications.',
    content: '# React Best Practices\n\nReact has evolved significantly...',
    category: 'Web Development',
    readTime: '5 min read',
    image: '/api/placeholder/400/300',
    gradient: 'from-blue-500 to-cyan-600',
    status: 'Published',
    date: '2024-01-12'
  },
  {
    id: 2,
    title: 'Machine Learning Fundamentals',
    excerpt: 'A comprehensive guide to understanding machine learning concepts and applications.',
    content: '# Machine Learning Fundamentals\n\nMachine learning is...',
    category: 'AI & ML',
    readTime: '8 min read',
    image: '/api/placeholder/400/300',
    gradient: 'from-purple-500 to-indigo-600',
    status: 'Draft',
    date: '2024-01-08'
  },
  {
    id: 3,
    title: 'Mobile App Security Best Practices',
    excerpt: 'Essential security measures every mobile developer should implement.',
    content: '# Mobile App Security\n\nSecurity is crucial...',
    category: 'Cybersecurity',
    readTime: '6 min read',
    image: '/api/placeholder/400/300',
    gradient: 'from-red-500 to-orange-600',
    status: 'Published',
    date: '2024-01-03'
  }
];

// Data management functions
export const getProjects = (): Project[] => {
  if (typeof window === 'undefined') return sampleProjects;
  const stored = localStorage.getItem('adminProjects');
  return stored ? JSON.parse(stored) : sampleProjects;
};

export const getBlogs = (): BlogPost[] => {
  if (typeof window === 'undefined') return sampleBlogs;
  const stored = localStorage.getItem('adminBlogs');
  return stored ? JSON.parse(stored) : sampleBlogs;
};

export const saveProjects = (projects: Project[]): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('adminProjects', JSON.stringify(projects));
  }
};

export const saveBlogs = (blogs: BlogPost[]): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('adminBlogs', JSON.stringify(blogs));
  }
};

export const addProject = (project: Omit<Project, 'id'>): Project => {
  const projects = getProjects();
  const newProject: Project = {
    ...project,
    id: Math.max(...projects.map(p => p.id), 0) + 1,
    date: new Date().toISOString().split('T')[0]
  };
  const updatedProjects = [...projects, newProject];
  saveProjects(updatedProjects);
  return newProject;
};

export const addBlog = (blog: Omit<BlogPost, 'id'>): BlogPost => {
  const blogs = getBlogs();
  const newBlog: BlogPost = {
    ...blog,
    id: Math.max(...blogs.map(b => b.id), 0) + 1,
    date: new Date().toISOString().split('T')[0]
  };
  const updatedBlogs = [...blogs, newBlog];
  saveBlogs(updatedBlogs);
  return newBlog;
};

export const updateProject = (id: number, updates: Partial<Project>): Project | null => {
  const projects = getProjects();
  const index = projects.findIndex(p => p.id === id);
  if (index === -1) return null;
  
  projects[index] = { ...projects[index], ...updates };
  saveProjects(projects);
  return projects[index];
};

export const updateBlog = (id: number, updates: Partial<BlogPost>): BlogPost | null => {
  const blogs = getBlogs();
  const index = blogs.findIndex(b => b.id === id);
  if (index === -1) return null;
  
  blogs[index] = { ...blogs[index], ...updates };
  saveBlogs(blogs);
  return blogs[index];
};

export const deleteProject = (id: number): boolean => {
  const projects = getProjects();
  const filtered = projects.filter(p => p.id !== id);
  if (filtered.length === projects.length) return false;
  
  saveProjects(filtered);
  return true;
};

export const deleteBlog = (id: number): boolean => {
  const blogs = getBlogs();
  const filtered = blogs.filter(b => b.id !== id);
  if (filtered.length === blogs.length) return false;
  
  saveBlogs(filtered);
  return true;
};
