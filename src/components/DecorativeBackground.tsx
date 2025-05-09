"use client";
import { motion } from "framer-motion";

interface DecorativeBackgroundProps {
  patternOpacity?: number;
  orbs?: {
    color: string;
    size: number;
    position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
    animationDuration: number;
  }[];
}

const DecorativeBackground = ({
  patternOpacity = 30,
  orbs = [
    {
      color: "yellow-600",
      size: 64,
      position: "top-left",
      animationDuration: 15
    },
    {
      color: "blue-600", 
      size: 96,
      position: "bottom-right",
      animationDuration: 20
    }
  ]
}: DecorativeBackgroundProps) => {
  const getPositionClasses = (position: string) => {
    switch(position) {
      case "top-left": return "top-1/4 left-1/4";
      case "top-right": return "top-1/4 right-1/4";
      case "bottom-left": return "bottom-1/4 left-1/4";
      case "bottom-right": return "bottom-1/4 right-1/4";
      default: return "top-1/4 left-1/4";
    }
  };

  return (
    <div className="fixed inset-0 overflow-hidden opacity-20 pointer-events-none -z-10">
      <div 
        className="absolute top-0 left-0 w-full h-full bg-[url('/images/mongolian-pattern.png')] bg-repeat"
        style={{ opacity: patternOpacity / 100 }}
      ></div>
      
      {orbs.map((orb, index) => (
        <motion.div 
          key={index}
          className={`absolute ${getPositionClasses(orb.position)} w-${orb.size} h-${orb.size} rounded-full bg-${orb.color} blur-3xl opacity-10`}
          animate={{
            x: [0, orb.position.includes('left') ? 100 : -100, 0],
            y: [0, orb.position.includes('top') ? 50 : -50, 0],
          }}
          transition={{
            duration: orb.animationDuration,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      ))}
    </div>
  );
};

export default DecorativeBackground;