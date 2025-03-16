import { BlogPost } from '../types';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building Scalable APIs with Node.js',
    subtitle: 'Best practices for creating robust and maintainable APIs',
    content: 'Lorem ipsum dolor sit amet...',
    category: 'Backend Development',
    tags: ['Node.js', 'API', 'Architecture'],
    publishDate: '2024-02-15',
    readingTime: 8,
    featured: true,
    slug: 'building-scalable-apis',
    image: '/blog/api-architecture.jpg'
  },
  {
    id: '2',
    title: 'React Performance Optimization',
    subtitle: 'Techniques to improve your React application performance',
    content: 'Lorem ipsum dolor sit amet...',
    category: 'Frontend Development',
    tags: ['React', 'Performance', 'JavaScript'],
    publishDate: '2024-02-10',
    readingTime: 12,
    featured: false,
    slug: 'react-performance-optimization',
    image: '/blog/react-performance.jpg'
  }
];