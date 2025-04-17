import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaArrowDown } from 'react-icons/fa';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 py-20 md:py-32 overflow-hidden transition-colors duration-300">
      {/* Blob Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -right-64 -bottom-32 w-96 h-96 bg-primary opacity-10 dark:opacity-5 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute -left-32 top-0 w-80 h-80 bg-indigo-400 opacity-10 dark:opacity-5 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -10, 0],
            y: [0, 10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>

      <div className="container flex flex-col md:flex-row items-center justify-between">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left max-w-2xl mx-auto md:mx-0 md:mr-8 z-10"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 dark:text-white">
            Hi, I'm <span className="text-primary">Khizar Asad</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
            Software Developer specializing in Full-Stack Development,
            Machine Learning & Blockchain Technology
          </p>
          
          <div className="flex justify-center md:justify-start space-x-4 mb-10">
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

        {/* Profile Picture */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 md:mt-0 z-10"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-primary rounded-full opacity-10 blur-md transform -translate-x-2 translate-y-2"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-xl">
              {/* Replace with your actual image */}
              <img 
                src="image.jpg" 
                alt="Khizar Asad" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;