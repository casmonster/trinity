import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { portfolioData } from "../lib/portfolio-data";

const getTechColor = (tech: string): string => {
  const colorMap: { [key: string]: string } = {
    "React": "bg-blue-100 text-blue-800",
    "TypeScript": "bg-blue-100 text-blue-800", 
    "Node.js": "bg-green-100 text-green-800",
    "PostgreSQL": "bg-purple-100 text-purple-800",
    "MongoDB": "bg-green-100 text-green-800",
    "Vue.js": "bg-green-100 text-green-800",
    "Firebase": "bg-orange-100 text-orange-800",
    "Tailwind CSS": "bg-cyan-100 text-cyan-800",
    "Tailwind": "bg-cyan-100 text-cyan-800",
    "D3.js": "bg-yellow-100 text-yellow-800",
    "Express": "bg-gray-100 text-gray-800",
    "Stripe": "bg-purple-100 text-purple-800"
  };
  return colorMap[tech] || "bg-gray-100 text-gray-800";
};

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Featured Projects</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A showcase of my recent work in web development, featuring modern technologies and best practices.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{project.title}</h3>
                <p className="text-slate-600 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getTechColor(tech)}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a 
                    href={project.liveDemo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-blue-700 font-medium"
                  >
                    <i className="fas fa-external-link-alt mr-1"></i>Live Demo
                  </a>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-slate-800 font-medium"
                  >
                    <i className="fab fa-github mr-1"></i>GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}