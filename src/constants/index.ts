import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin,
  Code,
  Shield,
  Brain,
  Atom,
  MessageCircle,
  Facebook,
  BookOpen
} from 'lucide-react';
import { Project, BlogPost, Skill, ContactInfo, SocialLink } from '@/types';

export const SKILLS: Skill[] = [
  { Icon: Atom, label: 'Physics', color: 'from-blue-500 to-cyan-500' },
  { Icon: Brain, label: 'AI & ML', color: 'from-purple-500 to-pink-500' },
  { Icon: Shield, label: 'Security', color: 'from-red-500 to-orange-500' },
  { Icon: Code, label: 'Development', color: 'from-green-500 to-teal-500' }
];

export const INTERESTS = [
  'Mobile App Development (React Native)',
  'Full-Stack Web Development (MERN)',
  'Computational Physics',
  'Machine Learning & AI Applications',
  'Cybersecurity & Ethical Hacking',
  'Physics Simulations & Modeling'
];

export const PROJECTS: Project[] = [
  {
    title: 'Quantum Computing Simulator',
    description: 'Interactive web-based quantum circuit simulator with real-time visualization for educational purposes.',
    category: 'Physics',
    stack: ['React', 'TypeScript', 'D3.js', 'WebGL'],
    gradient: 'from-blue-500 to-cyan-500',
    github: '#',
    demo: '#'
  },
  {
    title: 'Secure Chat Application',
    description: 'End-to-end encrypted messaging platform with advanced security features and real-time communication.',
    category: 'Cybersecurity',
    stack: ['React Native', 'Node.js', 'MongoDB', 'WebRTC'],
    gradient: 'from-red-500 to-orange-500',
    github: '#',
    demo: '#'
  },
  {
    title: 'ML Physics Predictor',
    description: 'Machine learning model for predicting particle behavior in complex quantum systems.',
    category: 'AI & ML',
    stack: ['Python', 'TensorFlow', 'NumPy', 'Matplotlib'],
    gradient: 'from-purple-500 to-pink-500',
    github: '#',
    demo: '#'
  },
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with modern UI, payment integration, and inventory management.',
    category: 'Web',
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    gradient: 'from-green-500 to-teal-500',
    github: '#',
    demo: '#'
  },
  {
    title: 'Fitness Tracker App',
    description: 'Cross-platform mobile app for tracking workouts, nutrition, and health metrics with AI insights.',
    category: 'Mobile',
    stack: ['React Native', 'Firebase', 'Redux', 'Chart.js'],
    gradient: 'from-yellow-500 to-orange-500',
    github: '#',
    demo: '#'
  },
  {
    title: 'Network Security Scanner',
    description: 'Automated vulnerability assessment tool for comprehensive network infrastructure security.',
    category: 'Cybersecurity',
    stack: ['Python', 'Nmap', 'Django', 'PostgreSQL'],
    gradient: 'from-indigo-500 to-purple-500',
    github: '#',
    demo: '#'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Understanding Quantum Computing Fundamentals',
    excerpt: 'A comprehensive deep dive into quantum mechanics principles and their revolutionary applications in modern computing.',
    category: 'Physics',
    date: 'Jan 15, 2024',
    readTime: '8 min',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Building Secure Web Applications',
    excerpt: 'Essential best practices and advanced techniques for implementing robust security measures in modern web applications.',
    category: 'Cybersecurity',
    date: 'Jan 10, 2024',
    readTime: '6 min',
    gradient: 'from-red-500 to-orange-500'
  },
  {
    title: 'Machine Learning in Physics Research',
    excerpt: 'Exploring how artificial intelligence and machine learning are revolutionizing the way we approach complex physics problems.',
    category: 'AI',
    date: 'Jan 5, 2024',
    readTime: '10 min',
    gradient: 'from-purple-500 to-pink-500'
  }
];

export const CONTACT_INFO: ContactInfo[] = [
  { Icon: Mail, label: 'Email', value: 'abdidesalegn00@gmail.com', href: 'mailto:abdidesalegn00@gmail.com' },
  { Icon: Phone, label: 'Phone', value: '+251 994 225 212', href: 'tel:+251994225212' },
  { Icon: MapPin, label: 'Location', value: 'Addis Ababa, Ethiopia', href: '#' }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { Icon: Github, href: 'https://github.com/AbdiDesalegn', label: 'GitHub', color: 'hover:bg-gray-900' },
  { Icon: MessageCircle, href: 'https://t.me/abdidesalegn', label: 'Telegram', color: 'hover:bg-blue-500' },
  { Icon: Facebook, href: 'https://web.facebook.com/abdidesalegn00', label: 'Facebook', color: 'hover:bg-blue-600' },
  { Icon: BookOpen, href: 'https://sciencedatafusion.blogspot.com', label: 'Blog', color: 'hover:bg-orange-500' },
  { Icon: Linkedin, href: 'https://www.linkedin.com/in/abdidesalegn', label: 'LinkedIn', color: 'hover:bg-blue-700' }
];

export const PROJECT_CATEGORIES = ['All', 'Cybersecurity', 'AI & ML', 'Mobile', 'Web', 'Physics'];

export const NAVIGATION_ITEMS = ['About', 'Projects', 'Blog', 'Contact'];
