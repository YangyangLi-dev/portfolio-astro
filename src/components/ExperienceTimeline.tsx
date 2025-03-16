import React from 'react';

interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
  logo?: string;
}

const ExperienceTimeline: React.FC = () => {
  const experiences: Experience[] = [
    {
      company: "Penguin Benefits",
      position: "Senior Full Stack Developer",
      period: "Jan 2024 - Present",
      description:
        "Architected and developed a parental leave management SaaS platform comprising an employee-facing planning tool for drafting leave plans and estimating benefits, and a leave manager portal for configuring and managing parental leave policies.",
      achievements: [
        "Secured contracts with New York Life, Prudential, and Voya, integrating the platform into their benefits offerings",
        "Orchestrated migration from Google Firebase to AWS Cognito, implementing MFA and SSO to enhance authentication security",
        "Optimized AWS infrastructure and system architecture to achieve SOC 2 Type 2 compliance",
        "Identified and resolved performance bottlenecks using JMeter stress testing, reducing response time by 35%",
        "Developed a Cypress-based automated and visual regression testing framework from scratch, achieving 70% reduction in manual testing time",
      ],
      technologies: [
        "React",
        "Redux",
        "Spring Boot",
        "Spring Cloud",
        "AWS",
        "Cypress",
        "JMeter",
      ],
      // logo: '/companies/penguin-benefits.svg',
    },
    {
      company: "Full Truck Alliance",
      position: "Senior Software Developer",
      period: "Oct 2020 - Jul 2023",
      description:
        "Revolutionized logistics transactions by developing and enhancing the YMM app's checkout system, integrating deposit guarantees, insurance, commission processing, and coupon management. Scaled daily order volume to 500,000, a pivotal milestone in the platform's growth.",
      achievements: [
        "Led a system-wide architectural overhaul transitioning to a modular architecture, increasing development efficiency by 30%",
        "Managed system reliability for the Deal Module in 2021, implementing service dependency management and SQL optimizations",
        "Expanded reliability governance by leading a five-person team to optimize system topology and disaster recovery",
        "Reduced total system downtime to under 20 minutes for the year",
        "Standardized core functionalities for reuse and introduced specialized logistics services",
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "Redis",
        "MySQL",
        "Microservices",
        "kubernetes",
      ],
      // logo: '/companies/full-truck-alliance.svg',
    },
    {
      company: "Ximalaya Network Technology",
      position: "Senior Software Developer",
      period: "Feb 2019 - Oct 2020",
      description:
        'Boosted engagement and monetization by developing key features for the Himalaya App\'s Album Details Page, including "Ad-Watch for Free Listening" and "Limited-Time Freebies", driving 32.83 million paying users and generating billions of plays during the Audiobook Festival.',
      achievements: [
        "Engineered the Album Central Service, supporting commercialization, online education, and live broadcasts",
        "Maintained a catalog of 80+ million albums, handling 100,000+ API requests per second",
        "Achieved P99.99 response time of 150ms for high-traffic services",
        "Implemented core features that directly contributed to user monetization",
        "Optimized backend services for large-scale content delivery",
      ],
      technologies: [
        "Java",
        "Spring",
        "Redis",
        "MongoDB",
        "Kafka",
        "distributed systems",
      ],
      // logo: '/companies/ximalaya.svg',
    },
  ];
  
  return (
    <section id="experience" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 h-full w-0.5 bg-gray-300 dark:bg-gray-600"></div>
          
          {experiences.map((experience, index) => (
            <div key={index} className="relative mb-12 ml-8 pl-12">
              {/* Timeline dot */}
              <div className="absolute left-0 w-6 h-6 bg-blue-600 rounded-full transform -translate-x-1/2 mt-6 z-10"></div>
              
              <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex flex-col sm:flex-row justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{experience.position}</h3>
                      <div className="flex items-center text-blue-600 mb-3">
                        <h4 className="text-lg font-medium">{experience.company}</h4>
                      </div>
                    </div>
                    <div className="mt-2 sm:mt-0 bg-blue-100 dark:bg-blue-900/30 rounded-full h-fit px-4 py-1 text-sm text-blue-800 dark:text-blue-200 font-medium">
                      {experience.period}
                    </div>
                  </div>
                  
                  <p className="mb-4 text-gray-700 dark:text-gray-300">{experience.description}</p>
                  
                  <h5 className="font-semibold mb-2">Key Achievements:</h5>
                  <ul className="list-disc pl-5 mb-4 space-y-1 text-gray-700 dark:text-gray-300">
                    {experience.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {experience.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-gray-600 rounded-md text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline; 