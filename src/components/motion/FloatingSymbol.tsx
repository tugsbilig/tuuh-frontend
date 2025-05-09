import { motion } from "framer-motion";
import Image from "next/image";

const FloatingSymbol = ({ rotation }: { rotation: number }) => (
  <motion.div
    animate={{
      y: [0, -15, 0],
      rotate: [rotation, rotation + 2, rotation],
    }}
    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    className="absolute top-1/2 left-1/4 w-16 h-16 z-20"
  >
    <Image src="/images/soyombo.png" alt="Soyombo symbol" fill className="object-contain opacity-70" />
  </motion.div>
);

export default FloatingSymbol;
