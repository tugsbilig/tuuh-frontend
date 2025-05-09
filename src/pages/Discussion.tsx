"use client";
import React from 'react';
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import CommentSection from "@/components/CommentSection";
import Image from "next/image";
import { useRouter } from "next/router";
import Layout from '@/components/Layout';

interface DiscussionData {
  title: string;
  description: string;
  imageUrl: string;
  id: string; // Add an ID for the comment section
}

export default function DiscussionPage() {
  const router = useRouter();
  const { title } = router.query;

  const [discussion, setDiscussion] = useState<DiscussionData>({
    title: title as string,
    description: "",
    imageUrl: "/images/history9.jpg",
    id: "discussion_" + (title as string) // Create a unique ID based on title
  });

  useEffect(() => {
    if (title === "Монголын эзэнт гүрэн бутарсан шалтгаан?") {
      setDiscussion({
        title: title as string,
        description: `
          Монголын эзэнт гүрэн бутарсан шалтгаан нь олон хүчин зүйлээс шалтгаалсан бөгөөд түүний дотор төвлөрсөн удирдлагын сулрал, залгамжлалын маргаан, гаднын түрэмгийлэл болон дотоодын хагарал зэргийг дурдаж болно...
        `,
        imageUrl: "/images/history9.jpg",
        id: "discussion_" + (title as string)
      });
    }
  }, [title]);

  const handleBack = () => {
    router.back();
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto p-6 bg-gray-900 text-white min-h-screen">
        {/* Back button */}
        <button
          onClick={handleBack}
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

        {/* Discussion Image */}
        <div className="relative h-96 w-full rounded-xl overflow-hidden mb-6">
          <Image
            src={discussion.imageUrl}
            alt={discussion.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        </div>

        {/* Discussion Details */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{discussion.title}</h1>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
              {discussion.description}
            </p>
          </div>
        </div>

        {/* Comment Section */}
        {discussion && discussion.id && (
          <CommentSection eventId={discussion.id} />
        )}
      </div>
    </Layout>
  );
}