"use client";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer 
      className="w-full py-8 bg-gray-900/80 backdrop-blur-sm border-t border-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="text-center text-gray-400">
            <p className="text-sm md:text-base">
              © {new Date().getFullYear()} Монголын Эзэнт Гүрэн - Бүх эрх хуулиар хамгаалагдсан
            </p>
            <div className="flex flex-wrap gap-4 mt-4 justify-center">
              <a 
                href="#" 
                className="text-xs md:text-sm hover:text-yellow-400 transition-colors duration-200"
              >
                Нууцлалын бодлого
              </a>
              <a 
                href="#" 
                className="text-xs md:text-sm hover:text-yellow-400 transition-colors duration-200"
              >
                Үйлчилгээний нөхцөл
              </a>
              <a 
                href="https://nextjs.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs md:text-sm hover:text-yellow-400 transition-colors duration-200"
              >
                Next.js
              </a>
              <a 
                href="#" 
                className="text-xs md:text-sm hover:text-yellow-400 transition-colors duration-200"
              >
                Тухлай
              </a>
            </div>
          </div>

          {/* Optional: Social media icons */}
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook">
              <svg className="w-5 h-5 text-gray-400 hover:text-yellow-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
              </svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg className="w-5 h-5 text-gray-400 hover:text-yellow-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;