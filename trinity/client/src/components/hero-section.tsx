import { motion } from "framer-motion";
import profileImage from "@assets/WhatsApp Image 2025-07-16 _1752696368082.jpg";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img 
            src={profileImage} 
            alt="Professional Developer Portrait" 
            className="w-48 h-48 rounded-full mx-auto mb-8 shadow-2xl object-cover border-4 border-white" 
          />
          
          <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-4">
            Mugabe Trinity
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-6">
            Frontend Developer & UI/UX Designer
          </p>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            I create engaging digital experiences with modern web technologies. 
            Passionate about user-centered design and clean, efficient code.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => scrollToSection('projects')}
              className="btn-enhanced bg-primary text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              View Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn-enhanced border-2 border-primary text-primary px-8 py-3 rounded-full hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Get In Touch
            </button>
            <a 
              href="/Mugabe_Trinity_CV.pdf"
              download="Mugabe_Trinity_CV.pdf"
              className="btn-enhanced bg-secondary text-white px-8 py-3 rounded-full hover:bg-secondary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2"
            >
              <i className="fas fa-download"></i>
              Download CV (PDF)
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
