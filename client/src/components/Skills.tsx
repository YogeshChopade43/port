import { motion } from "framer-motion";
import { 
  SiPython, SiTensorflow, SiPytorch, SiOpencv, SiScikitlearn, 
  SiCplusplus, SiHtml5, SiCss3, SiDjango, 
  SiMysql, SiArduino, SiAndroidstudio, SiAutodesk 
} from "react-icons/si";
import { FaBrain, FaCode, FaGlobe, FaMicrochip, FaJava } from "react-icons/fa";

export default function Skills() {
  const skillCategories = [
    {
      title: "AI/ML",
      icon: FaBrain,
      color: "primary",
      skills: [
        { name: "Machine Learning", icon: SiScikitlearn },
        { name: "Deep Learning", icon: SiTensorflow },
        { name: "Computer Vision", icon: SiOpencv },
        { name: "PyTorch", icon: SiPytorch }
      ]
    },
    {
      title: "Programming",
      icon: FaCode,
      color: "secondary",
      skills: [
        { name: "Python", icon: SiPython },
        { name: "C/C++", icon: SiCplusplus },
        { name: "Java", icon: FaCode },
        { name: "MATLAB", icon: FaCode }
      ]
    },
    {
      title: "Web & DB",
      icon: FaGlobe,
      color: "accent",
      skills: [
        { name: "HTML/CSS", icon: SiHtml5 },
        { name: "Django", icon: SiDjango },
        { name: "MySQL", icon: SiMysql },
        { name: "REST APIs", icon: FaCode }
      ]
    },
    {
      title: "Tools & Hardware",
      icon: FaMicrochip,
      color: "highlight",
      skills: [
        { name: "Arduino", icon: SiArduino },
        { name: "Android Studio", icon: SiAndroidstudio },
        { name: "AutoCAD", icon: SiAutodesk },
        { name: "Proteus", icon: FaMicrochip }
      ]
    }
  ];

  const colorClasses = {
    primary: "text-primary border-primary/20",
    secondary: "text-secondary border-secondary/20",
    accent: "text-accent border-accent/20",
    highlight: "text-highlight border-highlight/20",
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

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6">
            Technical <span className="text-primary">Skills</span>
          </h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              className={`glass-card p-6 rounded-2xl ${colorClasses[category.color as keyof typeof colorClasses].split(' ')[1]} text-center`}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <motion.div 
                className={`text-4xl mb-4 ${colorClasses[category.color as keyof typeof colorClasses].split(' ')[0]}`}
                initial={{ rotateY: 0 }}
                whileHover={{ rotateY: 360 }}
                transition={{ duration: 0.6 }}
              >
                <category.icon />
              </motion.div>
              <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
              <div className="space-y-3 text-sm">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <skill.icon className="text-lg" />
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
