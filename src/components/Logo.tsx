"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Logo = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative flex flex-col items-center justify-center -mt-40 mb-0"
    >
      {/* Main logo container */}
      <div className="relative group">
        {/* Decorative border elements */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="absolute -top-3 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"
        />
        
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"
        />
        
        {/* Main logo text */}
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-amber-600 to-amber-400 py-4 px-8 relative z-10"
        >
          МОНГОЛЫН ТҮҮХ
          
          {/* Subtle glow effect */}
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute inset-0 blur-md bg-amber-400 rounded-full -z-10"
          />
        </motion.h1>
        
        {/* Mongolian pattern decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-32 h-4"
        >
          <Image
            src="/images/mongolian-pattern.png" // Replace with your pattern image
            alt="Mongolian pattern"
            fill
            className="object-contain opacity-70"
          />
        </motion.div>
      </div>
      
      {/* Subtitle with animated underline */}
      <motion.div className="mt-6 relative">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="text-lg text-gray-300 font-light tracking-wider"
        >
        </motion.p>
        
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"
        />
      </motion.div>
      
      {/* Animated floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            opacity: 0,
            x: Math.random() * 100 - 50,
            y: Math.random() * 40 - 20,
          }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            y: [0, Math.random() * 20 - 10, 0],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
          className="absolute rounded-full bg-amber-400"
          style={{
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
          }}
        />
      ))}
    </motion.div>
  );
};

export default Logo;