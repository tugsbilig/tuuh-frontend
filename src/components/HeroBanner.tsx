"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import Overlay from "./motion/Overlay";
import DecorativeImage from "./motion/DecorativeImage";
import DecorativeText from "./motion/DecorativeText";
import FloatingSymbol from "./motion/FloatingSymbol";
import Particles from "./motion/Particles";
import Link from "next/link";

const HeroBanner = ({
  imageUrl = "/images/genghis_khan.jpg",
  altText = "Mongolian Landscape",
  title = "ТАВТАЙ МОРИЛ",
  subtitle = "Та хэлэлцүүлэгт оролцох уу?",
  overlayOpacity = 0.7,
  decorativeElements = {
    pngs: [],
    texts: [],
  },
}) => {
  const [randomRotation] = useState(() => Math.random() * 10 - 5);
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, 100, { duration: 10 });
    return () => animation.stop();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3 }}
      className="relative w-full h-[70vh] min-h-[500px] overflow-hidden bg-gray-900 rounded-xl shadow-2xl"
    >
      <Overlay opacity={overlayOpacity} />

      <Image src={imageUrl} alt={altText} fill className="object-cover mix-blend-overlay" priority />

      {decorativeElements.pngs.map((png, i) => (
        <DecorativeImage key={i} {...png} index={i} />
      ))}

      {decorativeElements.texts.map((text, i) => (
        <DecorativeText key={i} {...text} index={i} />
      ))}

      <FloatingSymbol rotation={randomRotation} />

      <div className="absolute inset-0 flex flex-col items-center justify-center z-30 p-6 text-center">
      <motion.h1
       initial={{ opacity: 0, y: 50 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ delay: 0.8, duration: 1 }}
       className="text-5xl md:text-4xl font-bold text-yellow-400 mb-4 drop-shadow-2xl cursor-pointer"
       >
        <Link href={`/Discussion?title=${encodeURIComponent(title)}`}>
         {title}
       </Link>
      </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="text-xl md:text-2xl text-gray-200 max-w-2xl mb-8 drop-shadow-md"
        >
          {subtitle}
        </motion.p>

        <motion.div className="text-amber-200 text-lg font-mono">
          <motion.span>{rounded}</motion.span>+<span className="ml-2">жилийн түүх</span>
        </motion.div>
      </div>

      <Particles />
    </motion.div>
  );
};

export default HeroBanner;
