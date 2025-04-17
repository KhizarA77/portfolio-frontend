import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowDown } from 'react-icons/fa';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 py-20 md:py-32 transition-colors duration-300">
      <div className="container flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 dark:text-white">
            Hi, I'm <span className="text-primary">Khizar Asad</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
            Software Developer specializing in Full-Stack Development,
            Machine Learning & Blockchain Technology
          </p>
          
          <div className="flex justify-center space-x-4 mb-10">
            <a href="https://www.linkedin.com/in/khizar-asad" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-blue-600 transition-colors">
              <FaLinkedin size={30} />
            </a>
            <a href="https://github.com/KhizarA77" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-white transition-colors">
              <FaGithub size={30} />
            </a>
          </div>
          
          <a 
            href="#contact" 
            className="btn btn-primary inline-flex items-center"
          >
            Get in Touch
            <FaArrowDown className="ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;