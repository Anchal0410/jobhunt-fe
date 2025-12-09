// src/components/HeroSection.js
'use client';

import { Search, MapPin, Building2, Play } from 'lucide-react';
import { jobCategories } from '@/data/mockData';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-purple-50 to-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-medium">🔥 Tech Job Hunt Insights</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-600">
            Search, Apply &<br />
            Get Your <span className="text-purple-600">Dream Job</span>
          </h1>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            Start your hunt for the best, life-changing career opportunities from here in your selected areas conveniently and get hired quickly.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition font-medium">
              Browse Jobs
            </button>
            <button className="flex items-center space-x-2 px-6 py-3 text-purple-600 hover:text-purple-700 transition font-medium">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <Play size={16} className="fill-purple-600 text-purple-600 ml-1" />
              </div>
              <span>How It Works?</span>
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-4 md:p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Job title or keyword"
                className="text-gray-600 w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-600"
              />
            </div>
            <div className="md:col-span-1 relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Location"
                className="text-gray-600 w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-600"
              />
            </div>
            <div className="md:col-span-1 relative">
              <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Company"
                className="text-gray-600 w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-600"
              />
            </div>
            <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition font-medium">
              Search
            </button>
          </div>
        </div>

        {/* Job Categories Pills */}
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {jobCategories.map((category, index) => (
              <button
                key={index}
                className="px-5 py-2 bg-white border border-purple-200 text-purple-600 rounded-full hover:bg-purple-50 hover:border-purple-400 transition text-sm font-medium"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}