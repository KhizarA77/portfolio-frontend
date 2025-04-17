import React from 'react';
import { motion } from 'framer-motion';
import { FaNodeJs, FaReact, FaPython, FaDatabase, FaDocker, FaAws } from 'react-icons/fa';
import { SiSolidity, SiExpress, SiFirebase, SiNestjs, Si365Datascience, SiFlutter } from 'react-icons/si';

interface SkillItem {
  name: string;
  icon: React.ReactNode;
  color: string;
}

const SkillsSlider: React.FC = () => {
  const skills: SkillItem[] = [
    { name: "NodeJS", icon: <FaNodeJs size={40} />, color: "text-green-600" },
    { name: "React", icon: <FaReact size={40} />, color: "text-blue-500" },
    { name: "Python", icon: <FaPython size={40} />, color: "text-yellow-600" },
    { name: "Express", icon: <SiExpress size={40} />, color: "text-gray-800 dark:text-gray-200" },
    { name: "NestJS", icon: <SiNestjs size={40} />, color: "text-red-500" },
    { name: "Databases", icon: <FaDatabase size={40} />, color: "text-blue-600" },
    { name: "Firebase", icon: <SiFirebase size={40} />, color: "text-orange-500" },
    { name: "Flutter", icon: <SiFlutter size={40} />, color: "text-blue-400" },
    { name: "Machine Learning", icon: <Si365Datascience size={40} />, color: "text-purple-600" },
    { name: "Solidity", icon: <SiSolidity size={40} />, color: "text-gray-600 dark:text-gray-400" },
    { name: "Docker", icon: <FaDocker size={40} />, color: "text-blue-400" },
    { name: "AWS", icon: <FaAws size={40} />, color: "text-orange-400" },
  ];

  // Duplicate skills array to ensure smooth infinite scrolling
  const duplicatedSkills = [...skills, ...skills];

  return (
    <div className="my-8">
      <div className="skill-slider">
        <motion.div 
          className="skill-track"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 30, 
            ease: "linear", 
            repeat: Infinity,
          }}
        >
          {duplicatedSkills.map((skill, index) => (
            <div 
              key={index} 
              className="skill-item"
            >
              <div className={`${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                {skill.icon}
              </div>
              <span className="mt-2 text-center text-sm font-medium">{skill.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsSlider;