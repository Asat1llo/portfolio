import { motion } from "framer-motion";
import {useRef } from "react";



export const Skill = ({color,lan,ldata}) => {

   const constraintsRef = useRef(null)
  

  const skills = [
    { name: "CSS", level: 7 },
    { name: "Bootstrap", level: 6 },
    { name: "JavaScript", level: 7 },
    { name: "React", level: 6 },
    { name: "Figma", level: 8 },
    { name: "Tailwind", level: 8 },
    { name: "Node.js", level: 7 },
  ];

 
  return (
    <motion.div ref={constraintsRef} className={`relative ${color ? " bg-gradient-to-br from-[#0b0718] to-[#1a093c] text-white" : "bg-white"} py-24 px-6 sm:px-12 md:px-20 lg:px-32 xl:px-40 overflow-hidden`}>
      {/* Glowing Background Effects */}
      <div className="absolute top-10 left-10 sm:left-20 w-20 sm:w-40 h-20 sm:h-40 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 sm:right-20 w-30 sm:w-60 h-30 sm:h-60 bg-blue-500/20 rounded-full blur-3xl animate-ping"></div>

      {/* Section Title */}
      <h2 className="text-center text-4xl sm:text-5xl md:text-6xl font-extrabold mb-10 sm:mb-16 tracking-wide">
        { lan == 'en' ? ldata[lan].skill.title.slice(0,2) : lan == 'ru' ? ldata[lan].skill.title.slice(0,3) : ldata[lan].skill.title.slice(0,6) }<span className="text-purple-400">{lan == 'en' ? ldata[lan].skill.title.slice(2,9) : lan == 'ru' ? ldata[lan].skill.title.slice(3,10) : ldata[lan].skill.title.slice(6,16)}</span>
      </h2>

      {/* Skills Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
        {skills.map((skill, index) => (
          <motion.div drag dragConstraints={constraintsRef}
            key={index}
            className="relative bg-white/10 backdrop-blur-md p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-lg transform transition-all duration-700 ease-out hover:scale-105 hover:rotate-1 hover:shadow-purple-500/50 skill-card"
          >
            <div className="flex justify-between items-center">
              {/* Skill Name */}
              <span className="text-lg sm:text-2xl font-semibold">{skill.name}</span>

              {/* Skill Level Bar */}
              <div className="w-24 sm:w-32 h-1.5 sm:h-2 bg-gray-700 rounded-full overflow-hidden relative">
                <div
                  className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full transition-all duration-[1.2s] ease-in-out progress-bar"
                  style={{ width: `${skill.level * 10}%` }}
                ></div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
