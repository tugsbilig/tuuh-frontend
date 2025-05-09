"use client";
import Image from "next/image";
import { BookmarkIcon, HeartIcon } from "@heroicons/react/24/solid";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { HistoryItem } from "./types";

export const HistoryCard = ({ title, image, date, type }: HistoryItem) => (
  <div className="relative group bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-yellow-500 transition-all duration-300">
    <div className="relative h-40">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
    </div>
    <div className="p-4">
      <span className="text-xs font-medium text-yellow-500">{date}</span>
      <h3 className="text-lg font-bold text-white mt-1 line-clamp-2">{title}</h3>
      <button className="flex items-center mt-3 text-sm text-gray-300 hover:text-yellow-400 group transition-colors">
        Дэлгэрэнгүй
        <ChevronRightIcon className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
    <div className={`absolute top-3 right-3 p-2 rounded-full ${type === 'saved' ? 'bg-yellow-500/90' : 'bg-red-500/90'}`}>
      {type === 'saved' ? (
        <BookmarkIcon className="h-4 w-4 text-white" />
      ) : (
        <HeartIcon className="h-4 w-4 text-white" />
      )}
    </div>
  </div>
);