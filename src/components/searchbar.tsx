"use client";
import { useState } from 'react';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleClear = () => {
    setSearchQuery('');
  };

  return (
    <div className="relative max-w-2xl mx-auto mt-8">
      <div className={`relative flex items-center transition-all duration-300 ${isFocused ? 'ring-2 ring-yellow-500' : ''} rounded-full bg-gray-800/80 backdrop-blur-sm border border-gray-700 hover:border-yellow-500`}>
        <div className="absolute left-4 text-gray-400">
          <MagnifyingGlassIcon className="h-5 w-5" />
        </div>
        
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Түүхэн үйл явдал хайх..."
          className="w-full py-3 pl-12 pr-10 bg-transparent text-white placeholder-gray-400 focus:outline-none rounded-full"
        />
        
        {searchQuery && (
          <button
            onClick={handleClear}
            className="absolute right-3 text-gray-400 hover:text-yellow-500 transition-colors"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        )}
      </div>

      {/* Optional search dropdown - appears when focused */}
      {isFocused && (
        <div className="absolute z-10 mt-2 w-full bg-gray-800/90 backdrop-blur-lg rounded-xl shadow-lg border border-gray-700 overflow-hidden transition-all duration-200">
          <div className="p-4 text-gray-400 text-sm">
            Хайлтын түлхүүр үгс: 
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="px-3 py-1 bg-gray-700/50 rounded-full text-yellow-400">Чингис хаан</span>
              <span className="px-3 py-1 bg-gray-700/50 rounded-full text-yellow-400">Монголын эзэнт гүрэн</span>
              <span className="px-3 py-1 bg-gray-700/50 rounded-full text-yellow-400">Мандухай хатан</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;