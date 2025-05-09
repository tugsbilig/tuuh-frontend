import React from 'react';
import { useRouter } from 'next/router';
import { HeartIcon as HeartOutline, BookmarkIcon as BookmarkOutline } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolid, BookmarkIcon as BookmarkSolid } from "@heroicons/react/24/solid";
import Image from "next/image";
import { HistoryEvent } from '@/data/HistoryEvents';

interface HistoryCardProps {
  event: HistoryEvent;
  isSaved: boolean;
  isBookmarked: boolean;
  onSave: (id: number) => void;
  onBookmark: (id: number) => void;
}

const HistoryCard: React.FC<HistoryCardProps> = ({
  event,
  isSaved,
  isBookmarked,
  onSave,
  onBookmark,
}) => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/history/${event.id}`);
  };

  const handleReadMore = (e: React.MouseEvent) => {
    e.stopPropagation();
    router.push(`/history/${event.id}`);
  };

  const handleSave = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSave(event.id);
  };

  const handleBookmark = (e: React.MouseEvent) => {
    e.stopPropagation();
    onBookmark(event.id);
  };

  return (
    <div 
      className="relative group overflow-hidden rounded-xl shadow-2xl hover:shadow-yellow-500/20 transition-all duration-300 cursor-pointer"
      onClick={handleCardClick}
    >
      {/* Image with gradient overlay */}
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={event.id <= 3}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        
        <span className="absolute top-4 left-4 bg-yellow-600/90 text-white text-xs font-bold px-3 py-1 rounded-full">
          {event.category}
        </span>
        
        <div className="absolute top-4 right-4 flex gap-2 z-10">
          <button 
            onClick={handleSave}
            className="p-2 rounded-full bg-gray-900/70 hover:bg-gray-800 transition-colors"
            aria-label={isSaved ? "Unsave" : "Save"}
          >
            {isSaved ? (
              <HeartSolid className="h-5 w-5 text-red-500" />
            ) : (
              <HeartOutline className="h-5 w-5 text-white" />
            )}
          </button>
          <button 
            onClick={handleBookmark}
            className="p-2 rounded-full bg-gray-900/70 hover:bg-gray-800 transition-colors"
            aria-label={isBookmarked ? "Remove bookmark" : "Bookmark"}
          >
            {isBookmarked ? (
              <BookmarkSolid className="h-5 w-5 text-yellow-400" />
            ) : (
              <BookmarkOutline className="h-5 w-5 text-white" />
            )}
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <span className="text-yellow-500 text-sm font-medium">{event.date}</span>
        <h3 className="text-xl font-bold text-white mt-1 mb-2">{event.title}</h3>
        <p className="text-gray-300 mb-4 line-clamp-2">{event.shortDescription}</p>
        
        <button
          onClick={handleReadMore}
          className="flex items-center text-yellow-400 hover:text-yellow-300 font-medium group"
        >
          Дэлгэрэнгүй унших
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform"
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default HistoryCard;