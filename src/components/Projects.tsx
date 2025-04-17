import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { ProjectType } from '../types';

const Projects: React.FC = () => {
  const projects: ProjectType[] = [
    {
      title: "RecruitWise",
      description: "An intelligent recruitment platform with infrastructure built on NestJS. Currently responsible for deployment, scalability, and infrastructure management.",
      technologies: ["NestJS", "TypeScript", "Cloud", "Infrastructure"],
      link: "https://recruitwise-frontend.vercel.app/"
    },
    {
      title: "VoxaLink Pro",
      description: "Pioneered backend solutions focusing on Development, Machine Learning, and blockchain technology optimization.",
      technologies: ["NodeJS", "Machine Learning", "Blockchain"],
      link: "https://voxalink.vercel.app/"
    },
    {
      title: "Travel Planner Mobile Application",
      description: "A full-stack mobile application using Flutter with Firebase Firestore for real-time data management and secure authentication.",
      technologies: ["Flutter", "Firebase", "Firestore", "UI/UX"]
    },
    {
      title: "Food Ordering Project",
      description: "A full-stack web application for food ordering with seamless integration between frontend and backend components.",
      technologies: ["ReactJS", "NodeJS", "OracleDB"]
    },
    {
      title: "Hospital Management System",
      description: "A system for booking doctor appointments with secure Google authentication and comprehensive user management.",
      technologies: ["Next.js", "Oracle SQL", "Google Auth"]
    },
    {
      title: "E-commerce Big Data Pipeline",
      description: "A scalable pipeline for processing and analyzing large volumes of e-commerce data with real-time capabilities.",
      technologies: ["Big Data", "Data Processing", "Cloud Computing"]
    }
  ];

  return (
    <section id="projects" className="section bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center dark:text-white">My Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                link={project.link}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;