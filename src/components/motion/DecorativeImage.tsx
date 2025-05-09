import { motion } from "framer-motion";
import Image from "next/image";

interface DecorativeImageProps {
  src: string;
  alt: string;
  position: string;
  size: string;
  index: number;
}

const DecorativeImage = ({ src, alt, position, size, index }: DecorativeImageProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 0.6, scale: 1 }}
    transition={{ delay: index * 0.3 + 0.5, duration: 1 }}
    className={`absolute ${position} ${size} z-20`}
    whileHover={{ opacity: 1, scale: 1.1 }}
  >
    <Image src={src} alt={alt} fill className="object-contain" />
  </motion.div>
);

export default DecorativeImage;
