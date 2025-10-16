import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create admin user
  await prisma.admin.upsert({
    where: { username: 'admin' },
    update: {},
    create: {
      username: 'admin',
      password: 'admin123', // In production, hash this password
      email: 'abdidesalegn00@gmail.com'
    }
  });

  // Create sample projects
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration, and inventory management.',
      category: 'Web',
      stack: JSON.stringify(['Next.js', 'Node.js', 'PostgreSQL', 'Stripe']),
      github: 'https://github.com/username/ecommerce',
      demo: 'https://ecommerce-demo.com',
      image: '/api/placeholder/400/300',
      gradient: 'from-blue-500 to-purple-600',
      status: 'Published'
    },
    {
      title: 'Mobile Banking App',
      description: 'Secure mobile banking application with biometric authentication and real-time transactions.',
      category: 'Mobile',
      stack: JSON.stringify(['React Native', 'Node.js', 'MongoDB', 'Firebase']),
      github: 'https://github.com/username/banking-app',
      demo: 'https://banking-demo.com',
      image: '/api/placeholder/400/300',
      gradient: 'from-green-500 to-teal-600',
      status: 'Draft'
    },
    {
      title: 'AI Chatbot',
      description: 'Intelligent chatbot powered by machine learning for customer support automation.',
      category: 'AI & ML',
      stack: JSON.stringify(['Python', 'TensorFlow', 'FastAPI', 'PostgreSQL']),
      github: 'https://github.com/username/ai-chatbot',
      demo: 'https://chatbot-demo.com',
      image: '/api/placeholder/400/300',
      gradient: 'from-purple-500 to-pink-600',
      status: 'Published'
    }
  ];

  // Clear existing data and create new
  await prisma.project.deleteMany();
  await prisma.blogPost.deleteMany();

  await prisma.project.createMany({
    data: projects
  });

  // Create sample blog posts
  const blogs = [
    {
      title: 'React Best Practices for 2024',
      excerpt: 'Learn the latest React patterns and best practices to build scalable applications.',
      content: '# React Best Practices\n\nReact has evolved significantly over the years...',
      category: 'Web Development',
      readTime: '5 min read',
      image: '/api/placeholder/400/300',
      gradient: 'from-blue-500 to-cyan-600',
      status: 'Published'
    },
    {
      title: 'Machine Learning Fundamentals',
      excerpt: 'A comprehensive guide to understanding machine learning concepts and applications.',
      content: '# Machine Learning Fundamentals\n\nMachine learning is a subset of artificial intelligence...',
      category: 'AI & ML',
      readTime: '8 min read',
      image: '/api/placeholder/400/300',
      gradient: 'from-purple-500 to-indigo-600',
      status: 'Draft'
    },
    {
      title: 'Mobile App Security Best Practices',
      excerpt: 'Essential security measures every mobile developer should implement.',
      content: '# Mobile App Security\n\nSecurity is crucial in mobile app development...',
      category: 'Cybersecurity',
      readTime: '6 min read',
      image: '/api/placeholder/400/300',
      gradient: 'from-red-500 to-orange-600',
      status: 'Published'
    }
  ];

  await prisma.blogPost.createMany({
    data: blogs
  });

  console.log('Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
