import React, { useState } from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../UI/SectionTitle'

const Projects = ({ isDarkMode }) => {
  const [filter, setFilter] = useState('all');
  
  // Sample projects data
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with payment integration, user authentication, and product management.',
      image: '/images/projects/ecommerce.jpg',
      category: ['web', 'fullstack'],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      demoLink: 'https://ecommerce-demo.com',
      githubLink: 'https://github.com/username/ecommerce',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A Kanban-style task management application with drag-and-drop functionality and team collaboration features.',
      image: '/images/projects/taskapp.jpg',
      category: ['web', 'frontend'],
      technologies: ['React', 'Redux', 'Tailwind CSS'],
      demoLink: 'https://taskapp-demo.com',
      githubLink: 'https://github.com/username/taskapp',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Real-time weather monitoring dashboard with forecasts, historical data, and location-based services.',
      image: '/images/projects/weather.jpg',
      category: ['web', 'api'],
      technologies: ['JavaScript', 'OpenWeatherAPI', 'Chart.js'],
      demoLink: 'https://weather-demo.com',
      githubLink: 'https://github.com/username/weather-dashboard',
    },
    {
      id: 4,
      title: 'Social Media Mobile App',
      description: 'Cross-platform mobile application for social networking with real-time messaging and content sharing.',
      image: '/images/projects/social.jpg',
      category: ['mobile'],
      technologies: ['React Native', 'Firebase', 'Redux'],
      demoLink: 'https://social-demo.com',
      githubLink: 'https://github.com/username/social-app',
    },
    {
      id: 5,
      title: 'AI Image Recognition Tool',
      description: 'Machine learning-based image recognition tool that can identify and classify objects in images.',
      image: '/images/projects/ai.jpg',
      category: ['ai', 'api'],
      technologies: ['Python', 'TensorFlow', 'Flask', 'React'],
      demoLink: 'https://ai-demo.com',
      githubLink: 'https://github.com/username/ai-recognition',
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'Personal portfolio website showcasing projects, skills, and professional experience.',
      image: '/images/projects/portfolio.jpg',
      category: ['web', 'frontend'],
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      demoLink: 'https://portfolio-demo.com',
      githubLink: 'https://github.com/username/portfolio',
    },
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'ai', name: 'AI/ML' },
    { id: 'api', name: 'API' },
  ];

  // Filter projects based on selected category
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category.includes(filter));

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="projects" className={`py-20 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Projects & Work" 
          subtitle="Showcasing my recent work and contributions"
          isDarkMode={isDarkMode}
        />
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mt-8 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                filter === category.id
                  ? isDarkMode 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-blue-500 text-white'
                  : isDarkMode 
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map(project => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`rounded-lg overflow-hidden shadow-lg transition-all duration-300 ${
                isDarkMode ? 'bg-gray-800 hover:shadow-blue-500/20' : 'bg-white hover:shadow-xl'
              }`}
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image || 'https://via.placeholder.com/400x200'} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs px-2 py-1 m-2 rounded">
                  {project.category[0].charAt(0).toUpperCase() + project.category[0].slice(1)}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className={`text-xs px-2 py-1 rounded-full ${
                        isDarkMode ? 'bg-gray-700 text-blue-300' : 'bg-blue-100 text-blue-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between mt-4">
                  <a 
                    href={project.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`text-sm px-4 py-2 rounded transition-colors ${
                      isDarkMode 
                        ? 'bg-blue-600 text-white hover:bg-blue-700' 
                        : 'bg-blue-500 text-white hover:bg-blue-600'
                    }`}
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`text-sm px-4 py-2 rounded transition-colors ${
                      isDarkMode 
                        ? 'bg-gray-700 text-white hover:bg-gray-600' 
                        : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                    }`}
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* View More Button */}
        <div className="text-center mt-12">
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`inline-block px-6 py-3 rounded-full transition-colors ${
              isDarkMode 
                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
          >
            View More Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
