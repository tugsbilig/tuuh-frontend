
import { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { useRouter } from 'next/router';

interface AddEventButtonProps {
  className?: string;
}

export default function AddEventButton({ className = '' }: AddEventButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const handleClick = () => {
   
    router.push('/events/add');
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        fixed bottom-8 right-8
        w-16 h-16 rounded-full
        bg-blue-600 hover:bg-blue-700
        text-white
        shadow-lg hover:shadow-xl
        transition-all duration-200
        flex items-center justify-center
        ${className}
      `}
      aria-label="Add historical event"
    >
      <div className="relative">
        <FiPlus className="w-8 h-8 transition-transform duration-200" />
        {isHovered && (
          <div className="absolute -top-20 -left-25 bg-gray-800 text-white text-sm px-3 py-1 rounded whitespace-nowrap">
            Түүхэн үйл явдал нэмэх
          </div>
        )}
      </div>
    </button>
  );
}