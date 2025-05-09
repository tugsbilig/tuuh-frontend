"use client";
import { motion } from "framer-motion";

const features = [
  {
    title: "Цэргийн Ухаан",
    icon: "⚔️",
    description: "Монгол цэргүүд морин дээр гайхалтай дайрч, нуман сумны урлагт дээд зэргийн чадвартай байв."
  },
  {
    title: "Соёл Худалдаа",
    icon: "🌏",
    description: "Шёлковыйн замыг хамгаалж, дэлхийн соёл худалдааг хөгжүүлэхэд хувь нэмрээ оруулсан."
  },
  {
    title: "Улс Төр",
    icon: "🏛️",
    description: "Нэгдсэн засаглал, шударга хууль тогтоолыг бүх эзэгнэсэн нутагт хэрэгжүүлсэн."
  }
];

const FeatureGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
      {features.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 + index * 0.1 }}
          whileHover={{ y: -5 }}
          className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-yellow-500 transition-all"
        >
          <div className="text-3xl mb-4">{item.icon}</div>
          <h3 className="text-xl font-bold text-yellow-400 mb-2">{item.title}</h3>
          <p className="text-gray-300">{item.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default FeatureGrid;