import { motion } from "framer-motion";

interface DecorativeTextProps {
  content: string;
  position: string;
  size: string;
  index: number;
}

const DecorativeText = ({ content, position, size, index }: DecorativeTextProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 0.4, y: 0 }}
    transition={{ delay: index * 0.2 + 0.7, duration: 1 }}
    className={`absolute ${position} ${size} text-gray-300 font-serif italic z-20`}
  >
    {content}
  </motion.div>
);

export default DecorativeText;
