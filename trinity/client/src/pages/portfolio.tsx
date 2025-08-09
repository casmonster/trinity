import HeroSection from "@/components/hero-section";
import SkillsSection from "@/components/skills-section";
import ProjectsSection from "@/components/projects-section";
import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-50">
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-secondary text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-slate-300">
            © 2024 Mugabe Trinity. All rights reserved. Built with passion and modern web technologies.
          </p>
        </div>
      </footer>
    </div>
  );
}
