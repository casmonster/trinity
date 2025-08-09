import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import profileImage from "@assets/WhatsApp Image 2025-07-16 _1752696368082.jpg";

const stats = [
  { number: "50+", label: "Projects Completed" },
  { number: "5+", label: "Years Experience" },
  { number: "30+", label: "Happy Clients" },
  { number: "20+", label: "Technologies" }
];



export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="about" className="py-20 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-secondary mb-6">About Me</h2>
            <p className="text-lg text-slate-600 mb-6">
              I'm a passionate frontend developer with over 5 years of experience creating digital solutions 
              that combine beautiful design with robust functionality. My journey started with a curiosity for 
              how things work on the web, and it has evolved into a career focused on crafting exceptional user experiences.
            </p>
            <p className="text-lg text-slate-600 mb-8">
              I specialize in modern JavaScript frameworks, responsive design, and user interface development. 
              When I'm not coding, you'll find me exploring new design trends, contributing to open source projects, 
              or mentoring aspiring developers in my community.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-4 bg-slate-50 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <h3 className="text-2xl font-bold text-primary mb-1">{stat.number}</h3>
                  <p className="text-slate-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div 
              className="relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => setIsHovered(!isHovered)}
            >
              <motion.img 
                src={profileImage}
                alt="Mugabe Trinity - Frontend Developer" 
                className="w-full h-96 object-cover transition-all duration-500"
                initial={{ scale: 1, filter: "brightness(1) contrast(1)" }}
                animate={{ 
                  scale: isHovered ? 1.05 : 1,
                  filter: isHovered ? "brightness(1.1) contrast(1.1)" : "brightness(1) contrast(1)"
                }}
                transition={{ duration: 0.3 }}
              />
              
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
              
              <motion.div 
                className="absolute bottom-4 left-4 right-4 text-white"
                initial={{ y: 20, opacity: 0 }}
                animate={{ 
                  y: isHovered ? 0 : 20,
                  opacity: isHovered ? 1 : 0 
                }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-lg font-semibold bg-black/30 backdrop-blur-sm rounded-lg px-4 py-2">
                  {isHovered ? "Professional software developer ready to build amazing solutions! 💻" : ""}
                </p>
              </motion.div>
            </div>
            

          </motion.div>
        </div>
      </div>
    </section>
  );
}
