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
  { Icon: Code, label: 'React Native', color: 'from-blue-500 to-cyan-500' },
  { Icon: Brain, label: 'MERN Stack', color: 'from-purple-500 to-pink-500' },
  { Icon: Shield, label: 'Cybersecurity', color: 'from-red-500 to-orange-500' },
  { Icon: Atom, label: 'Computational Physics', color: 'from-green-500 to-teal-500' }
];

export const INTERESTS = [
  'Chess',
  'Music',
  'Reading scientific publications and keeping up with new research',
  'Reading',
  'Documentaries'
];

export const PROJECTS: Project[] = [
  {
    title: 'Legacy System Modernization',
    description: 'Converting 20+ year COBOL-based financial system into modern Python-based GUI application with data migration.',
    category: 'Development',
    stack: ['Python', 'COBOL', 'GUI Development', 'Data Migration'],
    gradient: 'from-blue-500 to-cyan-500',
    github: '#',
    demo: '#',
    image: '/legacy-system-modernization.png'
  },
  {
    title: 'Student Productivity Hub',
    description: 'Ultimate platform to boost academic performance and manage tasks efficiently with modern UI/UX.',
    category: 'Web',
    stack: ['React', 'Node.js', 'MongoDB', 'Express'],
    gradient: 'from-green-500 to-teal-500',
    github: '#',
    demo: '#',
    image: '/student-productivity-hub.jpg'
  },
  {
    title: 'Modern Baby Names App',
    description: 'Expo-based mobile application for discovering and exploring modern baby names with beautiful UI/UX and intuitive features.',
    category: 'Mobile',
    stack: ['React Native', 'Expo', 'JavaScript', 'Mobile UI/UX', 'Cross-platform'],
    gradient: 'from-purple-500 to-pink-500',
    github: 'https://github.com/AbdiDesalegn/ModernBabyNamesApp',
    demo: '#',
    image: '/modern-baby-names-app.jpg'
  },
  {
    title: 'The Art of Deception - Social Engineering',
    description: 'Seminar presentation on social engineering attacks and strategies to prevent online exploitation.',
    category: 'Cybersecurity',
    stack: ['Security Research', 'Presentation', 'Education'],
    gradient: 'from-red-500 to-orange-500',
    github: '#',
    demo: 'https://www.youtube.com/watch?v=V50ArZT1PNc&t=1274s',
    image: '/social-engineering-seminar.png'
  },
  {
    title: 'Physics and Mathematical Modeling Platform',
    description: 'Comprehensive platform for physics simulations, mathematical modeling, and computational analysis with interactive visualizations.',
    category: 'Physics',
    stack: ['Python', 'Matplotlib', 'NumPy', 'SciPy', 'Jupyter', 'Mathematical Modeling'],
    gradient: 'from-indigo-500 to-purple-500',
    github: 'https://github.com/AbdiDesalegn/Physics-and-Mathematical-Modeling-Platform',
    demo: '#',
    image: '/physics-platform.png'
  },
  {
    title: 'Supervised Learning - Heart Disease Classification',
    description: 'Machine learning project implementing automated model training with multiple algorithms for heart disease classification and prediction.',
    category: 'AI & ML',
    stack: ['Python', 'Jupyter', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Machine Learning'],
    gradient: 'from-pink-500 to-rose-500',
    github: 'https://github.com/AbdiDesalegn/Supervised_learning_project-classification-',
    demo: '#',
    image: '/heart-disease-classification.jpg'
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

export const PROJECT_CATEGORIES = ['All', 'Development', 'Web', 'Mobile', 'Cybersecurity', 'Physics', 'AI & ML'];

export const NAVIGATION_ITEMS = ['About', 'Experience', 'Projects', 'Certificates', 'Contact'];

// Experience data
export const EXPERIENCE = [
  {
    company: 'INSA',
    position: 'MERN Stack Developer Intern',
    period: '2023 – 2024',
    location: 'Ethiopia',
    description: [
      'Developed a full-stack chat application using MERN stack technologies.',
      'Implemented real-time messaging features with WebSocket integration.',
      'Built responsive frontend components using React.js and modern UI/UX principles.',
      'Designed and developed RESTful APIs using Node.js and Express.js.',
      'Managed database operations and data modeling with MongoDB.'
    ]
  },
  {
    company: 'Fincha Sugar Factory',
    position: 'Intern Developer/ System Admin',
    period: '2024 – 2025',
    location: 'Ethiopia',
    description: [
      'Converted, updated, and maintained a 20+ year-old COBOL-based financial system.',
      'Ensured system reliability and continuity while modernizing key components.',
      'Performed debugging, testing, and optimization for critical financial operations.'
    ]
  },
  {
    company: 'INSA, Cyber Talent',
    position: 'AV Developer',
    period: '2022 – 2023',
    location: 'Ethiopia',
    description: [
      'Worked on developing and testing antivirus (AV) solutions in C.',
      'Implemented detection mechanisms for malware and security threats.',
      'Gained hands-on experience with firewall operations and configuration on Linux systems.'
    ]
  },
  {
    company: 'Competitive Programming Division (CPD)',
    position: 'Member',
    period: '2021 – 2025',
    location: 'ASTU',
    description: [
      'Participated in university-level competitive programming contests representing ASTU.',
      'Solved algorithmic and computational problems using C++ and Python.',
      'Enhanced skills in problem solving, data structures, and algorithm design.'
    ]
  },
  {
    company: 'Cybersecurity Division – ASTU',
    position: 'Member',
    period: '2024 – 2025',
    location: 'ASTU',
    description: [
      'Participated in university cybersecurity team activities, gaining hands-on experience.',
      'Contributed to organizing and playing CTF (Capture The Flag) competitions.',
      'Delivered and assisted in seminars and workshops on cybersecurity topics.',
      'Learned advanced skills in network security, system hardening, and practical cybersecurity tools.'
    ]
  }
];

// Certificates data
export const CERTIFICATES = [
  {
    title: 'Ultimate Ethical Hacking from Zero To Hero',
    issuer: 'Udemy',
    url: 'ude.my/UC-7d9eb0c3-8b08-4495-9b4a-fd89d112cb13',
    description: 'Comprehensive ethical hacking course covering penetration testing, vulnerability assessment, and security tools.'
  },
  {
    title: 'Python for Deep Learning: Build Neural Networks in Python',
    issuer: 'Udemy',
    url: 'ude.my/UC-10abe61e-5a36-4eeb-9882-ff12bebc0d46',
    description: 'Deep learning fundamentals using Python, neural networks, and machine learning frameworks.'
  },
  {
    title: 'Digital Forensics Masterclass: Forensic Science 2023 DFMC+',
    issuer: 'Udemy',
    url: 'ude.my/UC-e4b3b248-5308-462a-bdc9-13975c0bbOd5',
    description: 'Advanced digital forensics techniques, evidence collection, and forensic analysis methodologies.'
  }
];
