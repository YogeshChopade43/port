import { motion } from "framer-motion";

export default function Experience() {
  const timelineItems = [
    {
      id: 1,
      date: "February 2025 - Present",
      title: "AI Intern",
      company: "Expleo Group, Pune",
      description: "Working on cutting-edge AI/ML projects and contributing to innovative solutions in artificial intelligence.",
      color: "primary",
      side: "left"
    },
    {
      id: 2,
      date: "March 2021 - Present",
      title: "B.E. Electronics & Telecommunications",
      company: "MIT Academy of Engineering, Alandi, Pune",
      description: "CGPA: 8.77 - Specializing in AI/ML applications in telecommunications and electronics.",
      color: "secondary",
      side: "right"
    },
    {
      id: 3,
      date: "2020",
      title: "Team Captain & Leader",
      company: "College Handball Team & Cadet Adjutant",
      description: "Led handball team to state competitions and served as Cadet Adjutant, developing leadership and teamwork skills.",
      color: "accent",
      side: "left"
    },
    {
      id: 4,
      date: "2019 - 2021",
      title: "Higher Secondary Education",
      company: "Services Preparatory Institute, Aurangabad",
      description: "Percentage: 80.8% - Strong foundation in mathematics and science.",
      color: "highlight",
      side: "right"
    },
    {
      id: 5,
      date: "2018 - 2019",
      title: "School House Captain",
      company: "Nashik Cambridge School",
      description: "Led school house activities and represented in multiple sports competitions including national handball championships.",
      color: "primary",
      side: "left"
    }
  ];

  const colorClasses = {
    primary: "border-primary/20 bg-primary text-primary",
    secondary: "border-secondary/20 bg-secondary text-secondary",
    accent: "border-accent/20 bg-accent text-accent",
    highlight: "border-highlight/20 bg-highlight text-highlight",
  };

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6">
            Experience & <span className="text-primary">Timeline</span>
          </h2>
          <p className="text-lg text-light-slate/70 max-w-3xl mx-auto">
            My journey through education, professional experience, and leadership roles in technology and sports.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent"></div>

          {/* Timeline Items */}
          <div className="space-y-24">
            {timelineItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="flex items-center justify-between"
                initial={{ opacity: 0, x: item.side === "left" ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {item.side === "left" ? (
                  <>
                    <div className="w-5/12 text-right pr-8">
                      <motion.div 
                        className={`glass-card p-6 rounded-2xl ${colorClasses[item.color as keyof typeof colorClasses].split(' ')[0]}`}
                        whileHover={{ y: -5 }}
                      >
                        <div className={`text-sm font-jetbrains mb-2 ${colorClasses[item.color as keyof typeof colorClasses].split(' ')[2]}`}>
                          {item.date}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-light-slate/70 mb-2">{item.company}</p>
                        <p className="text-sm text-light-slate/60">{item.description}</p>
                      </motion.div>
                    </div>
                    <div className="w-2/12 flex justify-center">
                      <motion.div 
                        className={`w-6 h-6 rounded-full border-4 border-dark ${colorClasses[item.color as keyof typeof colorClasses].split(' ')[1]} ${index === 0 ? 'animate-pulse' : ''}`}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                        viewport={{ once: true }}
                      />
                    </div>
                    <div className="w-5/12"></div>
                  </>
                ) : (
                  <>
                    <div className="w-5/12"></div>
                    <div className="w-2/12 flex justify-center">
                      <motion.div 
                        className={`w-6 h-6 rounded-full border-4 border-dark ${colorClasses[item.color as keyof typeof colorClasses].split(' ')[1]}`}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                        viewport={{ once: true }}
                      />
                    </div>
                    <div className="w-5/12 pl-8">
                      <motion.div 
                        className={`glass-card p-6 rounded-2xl ${colorClasses[item.color as keyof typeof colorClasses].split(' ')[0]}`}
                        whileHover={{ y: -5 }}
                      >
                        <div className={`text-sm font-jetbrains mb-2 ${colorClasses[item.color as keyof typeof colorClasses].split(' ')[2]}`}>
                          {item.date}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-light-slate/70 mb-2">{item.company}</p>
                        <p className="text-sm text-light-slate/60">{item.description}</p>
                      </motion.div>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
