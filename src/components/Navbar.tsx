import React from "react";
import Link from "next/link";


const Navbar: React.FC = () => {
  return (
    <nav className="flex gap-16">
      <Link
        href="/"
        className="text-white hover:text-gray-400"
      >
        Гол хуудас
      </Link>
      <Link
        href="/timeline"
        className="text-white hover:text-gray-400"
      >
        Түүхийн хүрд
      </Link>
      <Link
        href="/history"
        className="text-white hover:text-gray-400"
      >
        Түүхэн үйл явдал
      </Link>
      <Link
        href="/famous"
        className="text-white hover:text-gray-400"
      >
        Түүхэн хүмүүс
      </Link>
      <Link
        href="/profile"
        className="text-white hover:text-gray-400"
      >
        Хувийн булан
      </Link>
      <Link
        href="/login"
        className="text-white hover:text-gray-400"
      >
        Нэвтрэх
      </Link>
    </nav>
  );
};

export default Navbar;