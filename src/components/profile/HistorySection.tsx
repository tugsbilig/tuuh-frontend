"use client";
import { HistoryItem } from "./types";
import { HistoryCard } from "./HistoryCard";

export const HistorySection = ({ 
  title, 
  items, 
  icon: Icon,
  color
}: {
  title: string;
  items: HistoryItem[];
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}) => (
  <section className="mt-12">
    <div className="flex items-center gap-2 mb-6">
      <Icon className={`h-6 w-6 text-${color}-500`} />
      <h2 className={`text-2xl font-bold text-${color}-400`}>{title}</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {items.map((item, index) => (
        <HistoryCard key={`${title}-${index}`} {...item} />
      ))}
    </div>
  </section>
);