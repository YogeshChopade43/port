import { motion } from "framer-motion";
import NeuralNetworkViz from "./NeuralNetworkViz";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-lg text-light-slate/70 max-w-3xl mx-auto">
            A passionate Electronics & Telecommunications Engineering student with expertise in AI/ML development, 
            currently working as an AI Intern at Expleo Group.
          </p>
        </motion.div>

        {/* Neural Network Visualization */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">AI Neural Network in Action</h3>
            <p className="text-light-slate/70">Live visualization of deep learning model processing</p>
          </div>
          <NeuralNetworkViz />
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Education Card */}
          <motion.div 
            className="glass-card p-8 rounded-2xl hover:border-primary/40 transition-all duration-300"
            variants={itemVariants}
            whileHover={{ y: -10 }}
          >
            <div className="text-4xl text-primary mb-4">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <h3 className="text-xl font-semibold mb-4">Education</h3>
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-medium text-light-slate">B.E. Electronics & Telecommunications</p>
                <p className="text-light-slate/70">MIT Academy of Engineering, Pune</p>
                <p className="text-accent">CGPA: 8.77 (2021-Present)</p>
              </div>
              <div>
                <p className="font-medium text-light-slate">Higher Secondary Education</p>
                <p className="text-light-slate/70">Services Preparatory Institute</p>
                <p className="text-accent">80.8% (2019-2021)</p>
              </div>
            </div>
          </motion.div>

          {/* Skills Card */}
          <motion.div 
            className="glass-card p-8 rounded-2xl hover:border-secondary/40 transition-all duration-300"
            variants={itemVariants}
            whileHover={{ y: -10 }}
          >
            <div className="text-4xl text-secondary mb-4">
              <i className="fas fa-code"></i>
            </div>
            <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span>Python</span>
                <span className="text-highlight">95%</span>
              </div>
              <div className="w-full bg-dark rounded-full h-2">
                <motion.div 
                  className="bg-highlight h-2 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "95%" }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  viewport={{ once: true }}
                />
              </div>
              <div className="flex justify-between">
                <span>Machine Learning</span>
                <span className="text-primary">90%</span>
              </div>
              <div className="w-full bg-dark rounded-full h-2">
                <motion.div 
                  className="bg-primary h-2 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "90%" }}
                  transition={{ duration: 1.5, delay: 0.7 }}
                  viewport={{ once: true }}
                />
              </div>
              <div className="flex justify-between">
                <span>Deep Learning</span>
                <span className="text-accent">85%</span>
              </div>
              <div className="w-full bg-dark rounded-full h-2">
                <motion.div 
                  className="bg-accent h-2 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "85%" }}
                  transition={{ duration: 1.5, delay: 0.9 }}
                  viewport={{ once: true }}
                />
              </div>
            </div>
          </motion.div>

          {/* Experience Card */}
          <motion.div 
            className="glass-card p-8 rounded-2xl hover:border-accent/40 transition-all duration-300"
            variants={itemVariants}
            whileHover={{ y: -10 }}
          >
            <div className="text-4xl text-accent mb-4">
              <i className="fas fa-briefcase"></i>
            </div>
            <h3 className="text-xl font-semibold mb-4">Experience</h3>
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-medium text-light-slate">AI Intern</p>
                <p className="text-light-slate/70">Expleo Group, Pune</p>
                <p className="text-accent">February 2025 - Present</p>
              </div>
              <div className="pt-4">
                <p className="font-medium text-light-slate">Leadership Roles</p>
                <ul className="text-light-slate/70 space-y-1 mt-2">
                  <li>• Handball Team Captain (2020)</li>
                  <li>• Cadet Adjutant (2020)</li>
                  <li>• School House Captain (2018-19)</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
