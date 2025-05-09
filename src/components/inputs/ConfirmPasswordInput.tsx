import { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

interface ConfirmPasswordInputProps {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  minLength?: number;
  className?: string;
}

export default function ConfirmPasswordInput({
  id,
  label,
  placeholder,
  value,
  onChange,
  required = false,
  minLength,
  className = '',
}: ConfirmPasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium text-yellow-400 mb-1">
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type={showPassword ? 'text' : 'password'}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full p-3 pl-10 pr-10 rounded-lg bg-gray-700/70 border border-gray-600 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/30 text-white transition-all"
          required={required}
          minLength={minLength}
        />
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
          </svg>
        </div>
        <button
          type="button"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-yellow-500 hover:text-yellow-400"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <EyeSlashIcon className="h-5 w-5" />
          ) : (
            <EyeIcon className="h-5 w-5" />
          )}
        </button>
      </div>
    </div>
  );
}