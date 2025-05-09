import React from 'react';

interface EmptyStateProps {
  onReset: () => void;
}

const EmptyState: React.FC<EmptyStateProps> = ({ onReset }) => (
  <div className="text-center py-16">
    <h3 className="text-xl text-gray-400">Үйл явдал олдсонгүй</h3>
    <button 
      className="mt-4 text-yellow-500 hover:text-yellow-400"
      onClick={onReset}
    >
      Шүүлтүүрийг арилгах
    </button>
  </div>
);

export default EmptyState;