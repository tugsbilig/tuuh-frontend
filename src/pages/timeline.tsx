"use client";
import { timelineData } from "../data/timelineData";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Layout from '../components/Layout';

export default function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <Layout>
      <div className="relative min-h-[calc(100vh-64px)] bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden flex flex-col items-center justify-center py-16">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-0.5 h-full bg-yellow-500"></div>
          <div className="absolute top-0 right-1/4 w-0.5 h-full bg-yellow-500"></div>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 relative z-10">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
            Түүхийн хүрд
          </span>
        </h2>

        <div 
          ref={ref}
          className="relative max-w-6xl mx-auto px-4 sm:px-6"
        >
          {/* Center line */}
          <div className="absolute left-1/2 top-0 w-0.5 h-full bg-blue-400/50">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-blue-400 origin-top"
              style={{ scaleY: lineHeight }}
            />
          </div>

          {/* Timeline items */}
          <div className="relative space-y-32 py-16">
            {timelineData.map((item, index) => {
              const isLeft = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px 0px" }}
                  transition={{ duration: 0.6, type: "spring" }}
                  className={`relative flex ${isLeft ? "justify-start" : "justify-end"}`}
                >
                  <div className={`w-full max-w-md ${isLeft ? "pr-8 md:pr-16" : "pl-8 md:pl-16"}`}>
                    <div className={`relative p-6 rounded-xl backdrop-blur-sm bg-gray-800/50 border border-gray-700 shadow-lg
                      ${isLeft ? "border-l-4 border-yellow-500" : "border-r-4 border-yellow-500"}`}
                    >
                      {/* Year marker */}
                      <div className={`absolute -top-4 ${isLeft ? "-left-4" : "-right-4"} 
                        w-16 h-16 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-700 flex items-center justify-center
                        shadow-lg border-4 border-gray-900`}>
                        <span className="font-bold text-gray-900">{item.year}</span>
                      </div>

                      {/* Content */}
                      <div className="pt-4">
                        <h3 className="text-xl font-bold text-yellow-400 mb-2">{item.title || "Үйл явдал"}</h3>
                        <p className="text-gray-300">{item.event}</p>
                      </div>

                      {/* Connector line */}
                      <div className={`absolute top-8 h-0.5 bg-yellow-500 ${isLeft ? "right-0 left-auto" : "left-0 right-auto"} 
                        ${isLeft ? "translate-x-full" : "-translate-x-full"} w-8 md:w-16`}></div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}