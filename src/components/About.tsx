import React from 'react';
import { motion } from 'framer-motion';
import SkillsSlider from './SkillsSlider';

const About: React.FC = () => {
  return (
    <section id="about" className="section bg-light dark:bg-gray-800 transition-colors duration-300">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center dark:text-white">About Me</h2>
          
          <div className="grid grid-cols-1 gap-10">
            <div>
              <p className="text-lg mb-6 dark:text-gray-300">
                I'm a Computer Science student at the Institute of Business Administration (2021-2025) with a passion for creating innovative software solutions. I specialize in full-stack development, machine learning, and blockchain technologies.
              </p>
              <p className="text-lg mb-6 dark:text-gray-300">
                My experience spans from developing mobile applications using Flutter to creating complex web applications with React and Node.js. I've also worked with blockchain technology, developing smart contracts with Solidity.
              </p>
              <p className="text-lg dark:text-gray-300">
                As a Software Development Intern at TMC (TallyMarks Consulting), I gained valuable experience in API development, penetration testing, database management, and cloud deployment.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 dark:text-white text-center">My Skills</h3>
              <SkillsSlider />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;