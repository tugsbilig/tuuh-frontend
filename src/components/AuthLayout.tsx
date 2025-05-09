import React from 'react';
import Image from 'next/image';
import BackButton from './BackButton'; // Assuming your BackButton component is in the same directory

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  showBackButton?: boolean;
  backButtonText?: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
  title,
  subtitle,
  children,
  showBackButton = true,
  backButtonText = 'Буцах',
}) => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Image 
          src="/images/backgroundpattern.jpg" 
          alt="Mongolian pattern background"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-600 via-red-600 to-yellow-600"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-600 via-red-600 to-yellow-600"></div>
      
      {/* Main content */}
      <div className="relative z-10 w-full max-w-md p-8 rounded-xl backdrop-blur-sm bg-gray-800/80 border border-yellow-600/30 shadow-2xl">
        {showBackButton && <BackButton text={backButtonText} />}
        
        {/* Title */} 
        <div className="text-center mb-8">
          <div className="w-20 h-20 mx-auto mb-4 relative">
            <Image 
              src="/images/soyombo.png" 
              alt="Mongolian emblem"
              fill
              className="object-contain"
              priority
            />
          </div>
          <h1 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
            {title}
          </h1>
          <p className="text-gray-300">{subtitle}</p>
        </div>

        {/* Child content (forms, etc.) */}
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;