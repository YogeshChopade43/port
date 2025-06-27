import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface AITypingEffectProps {
  texts: string[];
  speed?: number;
  delay?: number;
}

export default function AITypingEffect({ texts, speed = 100, delay = 2000 }: AITypingEffectProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      const targetText = texts[currentTextIndex];
      if (currentText.length < targetText.length) {
        timeout = setTimeout(() => {
          setCurrentText(targetText.slice(0, currentText.length + 1));
        }, speed);
      } else {
        setIsTyping(false);
        timeout = setTimeout(() => {
          setIsTyping(true);
          setCurrentText("");
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }, delay);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isTyping, texts, speed, delay]);

  return (
    <div className="flex items-center space-x-2">
      <span className="text-accent font-jetbrains">{currentText}</span>
      <motion.span
        className="w-0.5 h-6 bg-primary"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
    </div>
  );
}