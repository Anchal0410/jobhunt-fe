// src/components/Header.js
'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-bold">
              <span className="text-gray-900">Job</span>
              <span className="text-purple-600">hunt</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-purple-600 transition">Home</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition">About</a>
            <a href="#jobs" className="text-gray-700 hover:text-purple-600 transition">Jobs</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition">Services</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition">Contact Us</a>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-6 py-2 text-gray-700 border border-gray-300 rounded-lg hover:border-purple-600 hover:text-purple-600 transition">
              Login
            </button>
            <button className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
              Register
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <a href="#" className="block text-gray-700 hover:text-purple-600 transition">Home</a>
            <a href="#" className="block text-gray-700 hover:text-purple-600 transition">About</a>
            <a href="#jobs" className="block text-gray-700 hover:text-purple-600 transition">Jobs</a>
            <a href="#" className="block text-gray-700 hover:text-purple-600 transition">Services</a>
            <a href="#" className="block text-gray-700 hover:text-purple-600 transition">Contact Us</a>
            <div className="space-y-2 pt-4">
              <button className="w-full px-6 py-2 text-gray-700 border border-gray-300 rounded-lg hover:border-purple-600 hover:text-purple-600 transition">
                Login
              </button>
              <button className="w-full px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
                Register
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}