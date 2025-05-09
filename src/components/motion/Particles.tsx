import { motion } from "framer-motion";

const Particles = () => (
  <>
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        initial={{
          opacity: 0,
          x: Math.random() * 1000,
          y: Math.random() * 500,
        }}
        animate={{
          opacity: [0.1, 0.3, 0.1],
          x: Math.random() * 1000,
          y: Math.random() * 500,
        }}
        transition={{
          duration: Math.random() * 10 + 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute rounded-full bg-amber-200"
        style={{
          width: Math.random() * 5 + 1,
          height: Math.random() * 5 + 1,
        }}
      />
    ))}
  </>
);

export default Particles;
