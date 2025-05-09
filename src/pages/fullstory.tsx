// components/FullStoryPage.tsx
import React from 'react';
import { HistoryEvent } from '@/data/HistoryEvents';
import Image from 'next/image';
import Layout from '@/components/Layout';
import CommentSection from '@/components/CommentSection';

interface FullStoryPageProps {
  event: HistoryEvent;
  onBack: () => void;
}

const FullStoryPage: React.FC<FullStoryPageProps> = ({ event, onBack }) => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto p-6 bg-gray-900 text-white min-h-screen">
        {/* Back button */}
        <button
          onClick={onBack}
          className="mb-6 flex items-center text-yellow-400 hover:text-yellow-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Буцах
        </button>

        {/* Event Image */}
        <div className="relative h-96 w-full rounded-xl overflow-hidden mb-6">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        </div>

        {/* Event Details */}
        <div className="space-y-4">
          <span className="inline-block bg-yellow-600 text-white text-sm font-bold px-3 py-1 rounded-full mb-2">
            {event.category}
          </span>
          <h1 className="text-3xl font-bold">{event.title}</h1>
          <p className="text-yellow-500 font-medium">{event.date}</p>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed">
              {event.longDescription}
            </p>
          </div>
        </div>

        {event && event.id && (
  <CommentSection eventId={event.id} />
)}

      </div>
    </Layout>
  );
};

export default FullStoryPage;
