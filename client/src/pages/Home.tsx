import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import AIShowcase from "@/components/AIShowcase";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import ParticleBackground from "@/components/ParticleBackground";

export default function Home() {
  return (
    <div className="min-h-screen bg-dark text-light-slate overflow-x-hidden">
      <ParticleBackground />
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <AIShowcase />
      <Experience />
      <Skills />
      <Contact />
      
      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="text-2xl font-bold font-poppins mb-4">
              <span className="text-primary">Yogesh</span>
              <span className="text-light-slate"> Chopade</span>
            </div>
            <p className="text-foreground/60 mb-6">AI/ML Developer | Electronics Engineer | Innovation Enthusiast</p>
            <div className="flex justify-center space-x-6 mb-6">
              <a href="https://github.com/YogeshChopade43" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors duration-300">
                <i className="fab fa-github text-xl"></i>
              </a>
              <a href="mailto:yogesh707chopade@gmail.com" className="text-foreground/60 hover:text-primary transition-colors duration-300">
                <i className="fas fa-envelope text-xl"></i>
              </a>
              <a href="tel:+918999177853" className="text-foreground/60 hover:text-primary transition-colors duration-300">
                <i className="fas fa-phone text-xl"></i>
              </a>
            </div>
            <p className="text-foreground/40 text-sm">© 2025 Yogesh Chopade. Built with passion for innovation.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
