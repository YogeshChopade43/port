import { motion } from "framer-motion";
import professionalPhoto from "@assets/me_1751055150028.jpg";
import AITypingEffect from "./AITypingEffect";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20">
      {/* AI Network Background */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          className="absolute top-20 left-20 w-40 h-40 border border-primary rounded-full"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-40 right-32 w-24 h-24 border border-accent rounded-full"
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div 
          className="absolute bottom-40 left-40 w-32 h-32 border border-secondary rounded-full"
          animate={{ y: [-15, 15, -15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-48 h-48 border border-highlight rounded-full"
          animate={{ y: [15, -15, 15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <motion.p 
                className="text-accent font-jetbrains text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Hello, I'm
              </motion.p>
              <motion.h1 
                className="text-5xl lg:text-7xl font-bold font-poppins"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <span className="text-light-slate">Yogesh</span><br />
                <span className="gradient-text">Chopade</span>
              </motion.h1>
              <motion.div
                className="text-xl lg:text-2xl text-light-slate/80 h-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <AITypingEffect 
                  texts={[
                    "AI/ML Developer & Electronics Engineer",
                    "Building Intelligent Systems",
                    "Advancing Healthcare with AI",
                    "Computer Vision Specialist"
                  ]}
                  speed={80}
                  delay={2500}
                />
              </motion.div>
            </div>
            
            <motion.p 
              className="text-lg text-light-slate/70 leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Passionate about building intelligent systems that solve real-world problems. 
              Currently exploring the frontiers of artificial intelligence and machine learning.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <motion.button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-3 bg-gradient-to-r from-primary to-secondary rounded-full text-white font-medium animate-glow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.button>
              <motion.a
                href="https://github.com/YogeshChopade43"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                GitHub Profile
              </motion.a>
            </motion.div>

            <motion.div 
              className="flex space-x-6 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <motion.a
                href="https://github.com/YogeshChopade43"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-light-slate/60 hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
              >
                <i className="fab fa-github"></i>
              </motion.a>
              <motion.a
                href="mailto:yogesh707chopade@gmail.com"
                className="text-2xl text-light-slate/60 hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
              >
                <i className="fas fa-envelope"></i>
              </motion.a>
              <motion.a
                href="tel:+918999177853"
                className="text-2xl text-light-slate/60 hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
              >
                <i className="fas fa-phone"></i>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Image */}
          <motion.div 
            className="relative lg:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto">
              {/* AI-themed decorative elements */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute -top-4 -right-4 w-20 h-20 border-2 border-accent rounded-full opacity-50"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-primary rounded-full opacity-40"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
              
              <motion.img
                src={professionalPhoto}
                alt="Yogesh Chopade - AI/ML Developer"
                className="relative w-full h-full object-cover rounded-full border-4 border-primary/30 shadow-2xl z-10"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
