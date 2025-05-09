import React from "react";
import Image from "next/image";

interface Figure {
  id: number;
  name: string;
  image: string;
  description: string;
  lifespan?: string;
  achievements?: string[];
}

interface ImageGridProps {
  figures: Figure[];
}

const ImageGrid: React.FC<ImageGridProps> = ({ figures }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4 sm:px-6 py-8 max-w-7xl mx-auto">
      {figures.map((figure) => (
        <div
          key={figure.id}
          className="relative group h-[400px] w-full perspective-1000 cursor-pointer"
        >
          {/* Card Container */}
          <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
            {/* Front of Card */}
            <div className="absolute inset-0 backface-hidden bg-gray-800 rounded-xl overflow-hidden shadow-lg flex flex-col">
              <div className="relative flex-grow">
                <Image
                  src={figure.image}
                  alt={figure.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>
              <div className="p-4 bg-gradient-to-b from-yellow-600/90 to-yellow-700/90">
                <h3 className="text-xl font-bold text-white text-center">
                  {figure.name}
                </h3>
                {figure.lifespan && (
                  <p className="text-gray-200 text-sm text-center mt-1">
                    {figure.lifespan}
                  </p>
                )}
              </div>
            </div>

            {/* Back of Card */}
            <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 overflow-y-auto rotate-y-180 border-2 border-yellow-600/30">
              <h3 className="text-2xl font-bold text-yellow-400 mb-2 text-center">
                {figure.name}
              </h3>
              {figure.lifespan && (
                <p className="text-gray-400 text-sm mb-4 text-center">
                  {figure.lifespan}
                </p>
              )}
              <p className="text-gray-300 mb-4">{figure.description}</p>
              
              {figure.achievements && (
                <div className="mt-4">
                  <h4 className="text-yellow-500 font-medium mb-2">
                    Гавьяат зүйлс:
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300">
                    {figure.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Global styles for the flip animation */}
      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default ImageGrid;