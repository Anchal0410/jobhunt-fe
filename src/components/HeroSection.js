// src/components/HeroSection.js
'use client';

import { useState } from 'react';
import { Search, MapPin, Building2, Play, TrendingUp, Sparkles } from 'lucide-react';
import { jobCategories } from '@/data/mockData';

export default function HeroSection() {
  const [searchValues, setSearchValues] = useState({
    keyword: '',
    location: '',
    company: ''
  });
  const [focusedInput, setFocusedInput] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching with:', searchValues);
  };

  return (
    <section className="relative bg-gradient-to-b from-purple-50 via-purple-25 to-white py-12 md:py-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow animation-delay-200"></div>
        <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow animation-delay-400"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 md:mb-12">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-100 to-orange-50 text-orange-600 px-5 py-2.5 rounded-full mb-6 animate-fade-in-up shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 cursor-default group">
            <Sparkles size={16} className="animate-pulse group-hover:rotate-12 transition-transform" />
            <span className="text-sm font-semibold">Tech Job Hunt Insights</span>
            <TrendingUp size={16} className="group-hover:translate-x-1 transition-transform" />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800 animate-fade-in-up animation-delay-100">
            Search, Apply &<br />
            Get Your <span className="text-purple-600 inline-block hover:scale-110 transition-transform cursor-default">Dream Job</span>
          </h1>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8 animate-fade-in-up animation-delay-200 leading-relaxed">
            Start your hunt for the best, life-changing career opportunities from here in your selected areas conveniently and get hired quickly.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up animation-delay-300">
            <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl hover:from-purple-700 hover:to-purple-800 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 font-semibold flex items-center space-x-2 ripple">
              <Search size={20} className="group-hover:rotate-12 transition-transform" />
              <span>Browse Jobs</span>
            </button>
            <button className="group flex items-center space-x-3 px-6 py-4 text-purple-600 hover:text-purple-700 transition-all duration-300 font-semibold hover:scale-105 active:scale-95">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                  <Play size={18} className="fill-purple-600 text-purple-600 ml-0.5 group-hover:scale-110 transition-transform" />
                </div>
                <div className="absolute inset-0 bg-purple-400 rounded-full animate-ping opacity-20"></div>
              </div>
              <span className="group-hover:translate-x-1 transition-transform">How It Works?</span>
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-4 md:p-6 mb-8 hover:shadow-2xl transition-shadow duration-300 animate-fade-in-up animation-delay-400">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Job Title Input */}
            <div className="md:col-span-1 relative group">
              <Search 
                className={`absolute left-3 top-1/2 -translate-y-1/2 transition-all duration-300 ${
                  focusedInput === 'keyword' ? 'text-purple-600 scale-110' : 'text-gray-400'
                }`} 
                size={20} 
              />
              <input
                type="text"
                placeholder="Job title or keyword"
                value={searchValues.keyword}
                onChange={(e) => setSearchValues({...searchValues, keyword: e.target.value})}
                onFocus={() => setFocusedInput('keyword')}
                onBlur={() => setFocusedInput(null)}
                className="text-gray-600 w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-600 focus:shadow-lg transition-all duration-300 hover:border-purple-300"
              />
              <div className={`absolute inset-0 rounded-xl bg-purple-50 -z-10 transition-opacity duration-300 ${
                focusedInput === 'keyword' ? 'opacity-100' : 'opacity-0'
              }`}></div>
            </div>

            {/* Location Input */}
            <div className="md:col-span-1 relative group">
              <MapPin 
                className={`absolute left-3 top-1/2 -translate-y-1/2 transition-all duration-300 ${
                  focusedInput === 'location' ? 'text-purple-600 scale-110' : 'text-gray-400'
                }`} 
                size={20} 
              />
              <input
                type="text"
                placeholder="Location"
                value={searchValues.location}
                onChange={(e) => setSearchValues({...searchValues, location: e.target.value})}
                onFocus={() => setFocusedInput('location')}
                onBlur={() => setFocusedInput(null)}
                className="text-gray-600 w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-600 focus:shadow-lg transition-all duration-300 hover:border-purple-300"
              />
              <div className={`absolute inset-0 rounded-xl bg-purple-50 -z-10 transition-opacity duration-300 ${
                focusedInput === 'location' ? 'opacity-100' : 'opacity-0'
              }`}></div>
            </div>

            {/* Company Input */}
            <div className="md:col-span-1 relative group">
              <Building2 
                className={`absolute left-3 top-1/2 -translate-y-1/2 transition-all duration-300 ${
                  focusedInput === 'company' ? 'text-purple-600 scale-110' : 'text-gray-400'
                }`} 
                size={20} 
              />
              <input
                type="text"
                placeholder="Company"
                value={searchValues.company}
                onChange={(e) => setSearchValues({...searchValues, company: e.target.value})}
                onFocus={() => setFocusedInput('company')}
                onBlur={() => setFocusedInput(null)}
                className="text-gray-600 w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-600 focus:shadow-lg transition-all duration-300 hover:border-purple-300"
              />
              <div className={`absolute inset-0 rounded-xl bg-purple-50 -z-10 transition-opacity duration-300 ${
                focusedInput === 'company' ? 'opacity-100' : 'opacity-0'
              }`}></div>
            </div>

            {/* Search Button */}
            <button 
              type="submit"
              className="group bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-3 rounded-xl hover:from-purple-700 hover:to-purple-800 hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 font-semibold flex items-center justify-center space-x-2 ripple"
            >
              <span>Search</span>
              <Search size={18} className="group-hover:rotate-12 transition-transform" />
            </button>
          </div>

          {/* Popular Searches Hint */}
          <div className="mt-4 text-sm text-gray-500 text-center animate-fade-in animation-delay-500">
            <span className="font-medium">Popular:</span>
            <button className="ml-2 text-purple-600 hover:text-purple-700 hover:underline transition-colors">Designer</button>,
            <button className="ml-2 text-purple-600 hover:text-purple-700 hover:underline transition-colors">Developer</button>,
            <button className="ml-2 text-purple-600 hover:text-purple-700 hover:underline transition-colors">Manager</button>
          </div>
        </form>

        {/* Job Categories Pills */}
        <div className="max-w-5xl mx-auto animate-fade-in-up animation-delay-500">
          <div className="flex flex-wrap justify-center gap-3">
            {jobCategories.map((category, index) => (
              <button
                key={index}
                className="group px-6 py-2.5 bg-white border-2 border-purple-200 text-purple-600 rounded-full hover:bg-gradient-to-r hover:from-purple-600 hover:to-purple-700 hover:text-white hover:border-purple-600 hover:shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 text-sm font-semibold"
                style={{ animationDelay: `${600 + index * 50}ms` }}
              >
                <span className="relative z-10">{category}</span>
              </button>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 animate-fade-in-up animation-delay-700">
            <div className="text-center group cursor-default">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform">
                10K+
              </div>
              <div className="text-gray-600 text-sm">Active Jobs</div>
            </div>
            <div className="text-center group cursor-default">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform">
                500+
              </div>
              <div className="text-gray-600 text-sm">Companies</div>
            </div>
            <div className="text-center group cursor-default">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform">
                50K+
              </div>
              <div className="text-gray-600 text-sm">Candidates</div>
            </div>
            <div className="text-center group cursor-default">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform">
                20K+
              </div>
              <div className="text-gray-600 text-sm">Jobs Filled</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}