import React, { useState } from 'react';

interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  technologies: string[];
  category: 'webapp' | 'mobile' | 'api' | 'other';
  demoUrl?: string;
  githubUrl?: string;
  slug: string;
}

const ProjectsShowcase: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const projects: Project[] = [
    {
      id: "1",
      title: "Zestbuy",
      description:
        "A fully functional e-commerce website with Stripe payment integration for secure transactions and Google Auth for seamless user authentication",
      thumbnail: "/projects/ecommerce-thumbnail.jpg",
      technologies: ["React", "Node.js", "PostgreSQL", "OAuth2", "Stripe"],
      category: "webapp",
      demoUrl: "http://zestbuy.vercel.app/",
      githubUrl: "https://github.com/YangyangLi-dev/zestbuy",
      slug: "ecommerce-platform",
    },
    {
      id: "2",
      title: "Hackarena",
      description:
        "A Capture the Flag (CTF) platform for Algonquin College Kali Club, enabling members to practice ethical hacking skills and compete in cybersecurity challenges",
      thumbnail: "/projects/weather-app-thumbnail.jpg",
      technologies: ["Next.js", "Supabase", "Docker"],
      category: "webapp",
      demoUrl: "https://hackarena.vercel.app/",
      githubUrl: "https://github.com/YangyangLi-dev/hackarena",
      slug: "Capture the Flag (CTF) platform",
    },
    {
      id: "3",
      title: "JobJourney",
      description:
        "A job application tracking system,enabling users to sign in via multiple platforms or verification codes, seamlessly manage applications, and track statuses in real time",
      thumbnail: "/projects/api-thumbnail.jpg",
      technologies: ["Next.js", "Prisma", "MongoDB"],
      category: "webapp",
      demoUrl: "https://applyally.vercel.app/",
      githubUrl: "https://github.com/YangyangLi-dev/jobjourney",
      slug: "JobJourney",
    },
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  
  return (
    <section id="projects" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
        
        {/* <div className="flex justify-center mb-8 space-x-2">
          <button 
            className={`px-4 py-2 rounded-full ${activeFilter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
            onClick={() => setActiveFilter('all')}
          >
            All
          </button>
          <button 
            className={`px-4 py-2 rounded-full ${activeFilter === 'webapp' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
            onClick={() => setActiveFilter('webapp')}
          >
            Web Apps
          </button>
          <button 
            className={`px-4 py-2 rounded-full ${activeFilter === 'mobile' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
            onClick={() => setActiveFilter('mobile')}
          >
            Mobile
          </button>
          <button 
            className={`px-4 py-2 rounded-full ${activeFilter === 'api' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
            onClick={() => setActiveFilter('api')}
          >
            API
          </button>
        </div> */}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              {/* <img 
                src={project.thumbnail} 
                alt={project.title} 
                className="w-full h-48 object-cover object-center"
              /> */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-md text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  {/* <a 
                    href={`/projects/${project.slug}`} 
                    className="text-blue-600 hover:underline"
                  >
                    Details
                  </a> */}
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-600 hover:underline"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300 hover:underline"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase; 