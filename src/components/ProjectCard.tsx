import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  image?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, technologies, link }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="card h-full flex flex-col"
    >
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-3 dark:text-white">{title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="mt-auto pt-4">
          {link && (
            <a 
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
              Visit Site <FaExternalLinkAlt className="ml-2" size={14} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;