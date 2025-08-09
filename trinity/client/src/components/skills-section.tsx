import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { portfolioData } from "@/lib/portfolio-data";

const skills = portfolioData.skills;

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-20 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-secondary mb-4">Technical Skills</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className={`skill-badge p-6 rounded-xl cursor-pointer transform-gpu border-2 transition-all duration-300 ${
                selectedSkill === skill.name 
                  ? `border-primary ${skill.selectedGradient} text-slate-800 shadow-lg` 
                  : `border-transparent bg-white hover:border-primary hover:shadow-md hover:scale-[1.02]`
              }`}
              initial={{ opacity: 0, y: 30, scale: 0.8, rotateY: 45 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1, rotateY: 0 } : { opacity: 0, y: 30, scale: 0.8, rotateY: 45 }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -8,
                rotateX: 3,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedSkill(selectedSkill === skill.name ? null : skill.name)}
            >
              <div className="text-center mb-4">
                <i className={`${skill.icon} text-4xl ${skill.color} mb-3 block drop-shadow-sm`}></i>
                <h3 className={`text-lg font-semibold mb-2 ${selectedSkill === skill.name ? 'text-slate-800' : 'text-slate-800'}`}>{skill.name}</h3>
                <p className={`text-sm ${selectedSkill === skill.name ? 'text-slate-700' : 'text-slate-600'}`}>
                  {skill.description}
                </p>
              </div>
              
              {selectedSkill === skill.name && (
                <div className="mt-4 pt-4 border-t border-slate-400/60">
                  <h4 className="text-sm font-bold mb-3 text-slate-800">Used in Projects:</h4>
                  <div className="flex flex-wrap gap-2">
                    {skill.projects ? skill.projects.map((project, idx) => (
                      <span 
                        key={idx}
                        className="text-xs bg-white/80 text-slate-800 px-3 py-2 rounded-full font-semibold shadow-sm border border-slate-300"
                      >
                        {project}
                      </span>
                    )) : (
                      <span className="text-xs bg-white/60 text-slate-700 px-3 py-2 rounded-full border border-slate-300">
                        No projects yet
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-700 mt-3 font-medium">
                    Click other skills to see their project connections
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-slate-600">
            Click on any skill to see which projects showcase that technology
          </p>
        </motion.div>
      </div>
    </section>
  );
}