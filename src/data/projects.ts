import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform built with React and Node.js',
    category: 'Web Apps',
    image: '/projects/ecommerce.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/example/project',
    featured: true,
    slug: 'ecommerce-platform'
  },
  {
    id: '2',
    title: 'Weather App API',
    description: 'RESTful API for weather data aggregation',
    category: 'API',
    image: '/projects/weather-api.jpg',
    technologies: ['Node.js', 'Express', 'PostgreSQL'],
    githubUrl: 'https://github.com/example/weather-api',
    featured: false,
    slug: 'weather-app-api'
  }
];