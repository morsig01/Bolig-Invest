'use client'

import React, { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="backdrop-blur-md bg-black/30 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <div className="text-white text-lg font-bold">Bolig Invest</div>
            </Link>
          </div>

          {/* Links (Desktop) */}
          <div className="hidden md:flex space-x-20">
            <Link href="/employees">
              <div className="text-white hover:text-gray-300">Ansatte</div>
            </Link>
            <Link href="/projects">
              <div className="text-white hover:text-gray-300">Prosjekter</div>
            </Link>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <Link href="/employees">
              <div className="block px-4 py-2 text-white hover:bg-white hover:text-black">Ansatte</div>
            </Link>
            <Link href="/projects">
              <div className="block px-4 py-2 text-white hover:bg-blue-600">Prosjekter</div>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
