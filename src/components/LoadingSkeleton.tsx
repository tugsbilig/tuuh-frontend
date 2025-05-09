import React from "react";

type LoadingSkeletonProps = {
  count?: number;
  className?: string;
};

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({ 
  count = 1,
  className = ""
}) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div 
          key={index}
          className={`bg-gray-800 rounded-lg p-4 h-64 animate-pulse ${className}`}
        >
          <div className="h-6 bg-gray-700 rounded mb-4 w-3/4"></div>
          <div className="h-4 bg-gray-700 rounded mb-2 w-full"></div>
          <div className="h-4 bg-gray-700 rounded mb-2 w-5/6"></div>
          <div className="h-4 bg-gray-700 rounded mb-2 w-4/6"></div>
          <div className="mt-6 flex justify-between">
            <div className="h-8 bg-gray-700 rounded w-20"></div>
            <div className="h-8 bg-gray-700 rounded w-20"></div>
          </div>
        </div>
      ))}
    </>
  );
};

export default LoadingSkeleton;