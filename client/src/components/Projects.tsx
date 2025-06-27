import { motion } from "framer-motion";
import { useGitHubProjects } from "@/hooks/useGitHub";

export default function Projects() {
  const { data: projects, isLoading } = useGitHubProjects();

  const projectDetails = {
    "Brain Tumor Classification using Ensemble Stacking method": {
      description: "Advanced ensemble stacking method using CNN for accurate brain tumor detection and classification with data augmentation.",
      tags: ["Deep Learning", "CNN", "Medical AI"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
    },
    "Hand Gesture Recognition using Resnet 50": {
      description: "ResNet-50 based system for real-time hand gesture recognition enabling home automation for specially-abled individuals.",
      tags: ["ResNet-50", "Computer Vision", "IoT"],
      image: "https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
    },
    "Sentiment Analysis for Amazon reviews": {
      description: "NLP-powered sentiment analysis system for Amazon reviews, extracting emotional insights from customer feedback.",
      tags: ["NLP", "Text Analysis", "Python"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
    },
    "Thyroid Disease Prediction using XgBoost": {
      description: "XGBoost-based predictive model for thyroid disease detection with feature importance analysis for healthcare applications.",
      tags: ["XGBoost", "Healthcare AI", "Prediction"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
    },
    "Scientific collapsible calculator": {
      description: "Feature-rich scientific calculator built with Python and Tkinter, featuring collapsible interface and advanced mathematical operations.",
      tags: ["Python", "Tkinter", "GUI"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
    },
    "Data Augmentation for Brain tumor classification": {
      description: "Advanced data augmentation using Deep Convolutional GANs to generate synthetic brain tumor images for improved model training.",
      tags: ["DCGAN", "Data Aug", "GAN"],
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const tagColors = {
    "Deep Learning": "bg-primary/20 text-primary",
    "CNN": "bg-secondary/20 text-secondary",
    "Medical AI": "bg-accent/20 text-accent",
    "ResNet-50": "bg-secondary/20 text-secondary",
    "Computer Vision": "bg-highlight/20 text-highlight",
    "IoT": "bg-accent/20 text-accent",
    "NLP": "bg-accent/20 text-accent",
    "Text Analysis": "bg-primary/20 text-primary",
    "Python": "bg-highlight/20 text-highlight",
    "XGBoost": "bg-highlight/20 text-highlight",
    "Healthcare AI": "bg-secondary/20 text-secondary",
    "Prediction": "bg-primary/20 text-primary",
    "Tkinter": "bg-accent/20 text-accent",
    "GUI": "bg-secondary/20 text-secondary",
    "DCGAN": "bg-secondary/20 text-secondary",
    "Data Aug": "bg-primary/20 text-primary",
    "GAN": "bg-highlight/20 text-highlight",
  };

  if (isLoading) {
    return (
      <section id="projects" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6">
              Featured <span className="text-primary">Projects</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="glass-card p-6 rounded-2xl animate-pulse">
                <div className="w-full h-48 bg-white/10 rounded-xl mb-4"></div>
                <div className="h-4 bg-white/10 rounded mb-2"></div>
                <div className="h-3 bg-white/10 rounded mb-4"></div>
                <div className="flex gap-2">
                  <div className="h-6 w-16 bg-white/10 rounded-full"></div>
                  <div className="h-6 w-20 bg-white/10 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-light-slate/70 max-w-3xl mx-auto">
            Explore my journey in AI/ML development through these innovative projects showcasing 
            deep learning, computer vision, and intelligent systems.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects?.map((project) => {
            const details = projectDetails[project.name as keyof typeof projectDetails];
            if (!details) return null;

            return (
              <motion.div
                key={project.id}
                className="project-card glass-card p-6 rounded-2xl hover:border-primary/40 transition-all duration-300 group"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <img
                  src={details.image}
                  alt={project.name}
                  className="w-full h-48 object-cover rounded-xl mb-4 group-hover:scale-105 transition-transform duration-300"
                />
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-light-slate">{project.name}</h3>
                  <p className="text-light-slate/70 text-sm">
                    {details.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {details.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 rounded-full text-xs ${tagColors[tag as keyof typeof tagColors] || "bg-primary/20 text-primary"}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4 pt-2">
                    <motion.a
                      href={project.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-accent transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <i className="fab fa-github text-lg"></i>
                    </motion.a>
                    {project.homepage && (
                      <motion.a
                        href={project.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-light-slate/60 hover:text-highlight transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <i className="fas fa-external-link-alt text-lg"></i>
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://github.com/YogeshChopade43/Projects"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-primary to-secondary rounded-full text-white font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View All Projects</span>
            <i className="fas fa-arrow-right ml-2"></i>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
