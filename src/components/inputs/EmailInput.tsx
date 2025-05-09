import React from "react";

interface EmailInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
}

const EmailInput: React.FC<EmailInputProps> = ({
  value,
  onChange,
  label = "Имэйл",
  placeholder = "Имэйл хаягаа оруулна уу",
  required = true,
  className = "",
}) => {
  return (
    <div className={className}>
      {label && (
        <label htmlFor="email" className="block text-sm font-medium text-yellow-400 mb-1">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          id="email"
          type="email"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full p-3 pl-10 rounded-lg bg-gray-700/70 border border-gray-600 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/30 text-white transition-all"
          required={required}
        />
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default EmailInput;