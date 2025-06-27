import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function AIShowcase() {
  const [currentDemo, setCurrentDemo] = useState(0);
  
  const aiDemos = [
    {
      title: "Brain Tumor Detection",
      description: "AI model achieving 94% accuracy in medical image classification",
      metrics: { accuracy: 94, precision: 92, recall: 96 },
      visual: "🧠"
    },
    {
      title: "Hand Gesture Recognition", 
      description: "Real-time gesture control system using ResNet-50",
      metrics: { accuracy: 89, latency: 45, fps: 30 },
      visual: "👋"
    },
    {
      title: "Sentiment Analysis",
      description: "NLP model processing 10k+ Amazon reviews",
      metrics: { accuracy: 87, processed: 10247, f1score: 85 },
      visual: "💭"
    }
  ];

  const [animatedValues, setAnimatedValues] = useState(aiDemos[0].metrics);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDemo((prev) => (prev + 1) % aiDemos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setAnimatedValues(aiDemos[currentDemo].metrics);
  }, [currentDemo]);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6">
            AI <span className="text-primary">Innovations</span>
          </h2>
          <p className="text-lg text-light-slate/70 max-w-3xl mx-auto">
            Live demonstration of AI models and their real-world performance metrics
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* AI Demo Showcase */}
          <motion.div
            className="glass-card p-8 rounded-2xl border-primary/20"
            key={currentDemo}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-8">
              <div className="text-8xl mb-4">{aiDemos[currentDemo].visual}</div>
              <h3 className="text-2xl font-bold mb-4">{aiDemos[currentDemo].title}</h3>
              <p className="text-light-slate/70">{aiDemos[currentDemo].description}</p>
            </div>

            {/* Progress indicators */}
            <div className="flex justify-center space-x-2 mb-8">
              {aiDemos.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentDemo ? 'bg-primary' : 'bg-light-slate/20'
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Live Metrics */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Real-time Performance</h3>
            
            {Object.entries(animatedValues).map(([key, value], index) => {
              const isPercentage = key === 'accuracy' || key === 'precision' || key === 'recall' || key === 'f1score';
              const displayValue = isPercentage ? `${value}%` : value;
              const maxValue = isPercentage ? 100 : Math.max(value * 1.2, 100);
              
              return (
                <motion.div
                  key={key}
                  className="glass-card p-6 rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="capitalize text-light-slate font-medium">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                    <span className="text-primary font-bold text-xl">{displayValue}</span>
                  </div>
                  <div className="w-full bg-dark rounded-full h-3">
                    <motion.div
                      className="bg-gradient-to-r from-primary to-accent h-3 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${(value / maxValue) * 100}%` }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                    />
                  </div>
                </motion.div>
              );
            })}

            <motion.div
              className="glass-card p-6 rounded-xl border-accent/20"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-highlight rounded-full animate-pulse"></div>
                <span className="text-light-slate">Model Status: Active & Learning</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}