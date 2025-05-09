// components/Layout.tsx
"use client";
import { motion } from "framer-motion";
import Navbar from './Navbar';
import Footer from './Footer';
import Logo from './Logo';
import StickyMongolianFrame from './Patternframe';
import DecorativeBackground from './DecorativeBackground';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      {/* Background Elements */}
      <DecorativeBackground />
      <StickyMongolianFrame />
      
      {/* Logo - Positioned above background but below navbar */}
      <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-40 w-full flex justify-center">
        <Logo />
      </div>

      {/* Navigation Bar - Highest z-index */}
      <motion.header 
        className="w-full text-white py-3 fixed top-0 left-0 flex justify-center z-50 backdrop-blur-sm"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar />
      </motion.header>

      {/* Main Content */}
      <div className="pt-32 pb-20 px-8 sm:px-20"> {/* Added padding to account for fixed header */}
        <main className="relative flex flex-col gap-12 items-center mx-auto z-10 w-full max-w-6xl">
          {children}
        </main>
      </div>
      
      <Footer />
    </div>
  );
}