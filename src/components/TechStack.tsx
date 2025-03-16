import React from 'react';

interface Technology {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'tools' | 'other';
}

const TechStack: React.FC = () => {
  const technologies: Technology[] = [
    { name: 'React', icon: 'devicon-react-original colored', category: 'frontend' },
    { name: 'TypeScript', icon: 'devicon-typescript-plain colored', category: 'frontend' },
    { name: 'Node.js', icon: 'devicon-nodejs-plain colored', category: 'backend' },
    { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain colored', category: 'frontend' },
    { name: 'MongoDB', icon: 'devicon-mongodb-plain colored', category: 'backend' },
    { name: 'Git', icon: 'devicon-git-plain colored', category: 'tools' },
  ];
  
  return (
    <section id="skills" className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Tech Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <i className={`${tech.icon} text-4xl mb-2`}></i>
              <span className="text-sm font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack; 