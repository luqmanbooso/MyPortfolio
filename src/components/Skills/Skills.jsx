import React from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../UI/SectionTitle'
import ProgressBar from './ProgressBar'
import SkillCard from './SkillCard'

const Skills = ({ isDarkMode }) => {
  // Technical skills with data for visualization
  const technicalSkills = [
    { name: "JavaScript", percentage: 90 },
    { name: "React", percentage: 85 },
    { name: "Node.js", percentage: 80 },
    { name: "HTML/CSS", percentage: 95 },
    { name: "TypeScript", percentage: 75 },
    { name: "Python", percentage: 70 },
  ];

  // Tools and frameworks
  const toolsAndFrameworks = [
    { name: "Git", icon: "git" },
    { name: "Docker", icon: "docker" },
    { name: "Redux", icon: "redux" },
    { name: "Next.js", icon: "nextjs" },
    { name: "Tailwind CSS", icon: "tailwind" },
    { name: "MongoDB", icon: "mongodb" },
  ];

  // Soft skills
  const softSkills = [
    { name: "Problem Solving", icon: "lightbulb" },
    { name: "Communication", icon: "chat" },
    { name: "Teamwork", icon: "users" },
    { name: "Adaptability", icon: "refresh" },
    { name: "Time Management", icon: "clock" },
    { name: "Leadership", icon: "star" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section id="skills" className={`py-20 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Skills & Expertise" 
          subtitle="My technical and professional abilities"
          isDarkMode={isDarkMode}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
          {/* Technical Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
          >
            <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
            {technicalSkills.map((skill, index) => (
              <motion.div key={index} variants={itemVariants} className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.percentage}%</span>
                </div>
                <ProgressBar percentage={skill.percentage} isDarkMode={isDarkMode} />
              </motion.div>
            ))}
          </motion.div>

          {/* Tools & Frameworks */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
          >
            <h3 className="text-2xl font-bold mb-6">Tools & Frameworks</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {toolsAndFrameworks.map((item, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <SkillCard name={item.name} icon={item.icon} isDarkMode={isDarkMode} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg lg:col-span-2`}
          >
            <h3 className="text-2xl font-bold mb-6">Soft Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {softSkills.map((item, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <SkillCard name={item.name} icon={item.icon} isDarkMode={isDarkMode} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;