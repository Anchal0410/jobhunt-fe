// src/components/FeaturedJobs.js
'use client';

import { useState, useRef, useEffect } from 'react';
import { Heart, MapPin, Briefcase, Clock, Users, DollarSign, ChevronLeft, ChevronRight } from 'lucide-react';
import { featuredJobs } from '@/data/mockData';

export default function FeaturedJobs() {
  const [favorites, setFavorites] = useState({});
  const [visibleJobs, setVisibleJobs] = useState(6);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleFavorite = (jobId) => {
    setFavorites(prev => ({
      ...prev,
      [jobId]: !prev[jobId]
    }));
  };

  const loadMore = () => {
    setVisibleJobs(prev => Math.min(prev + 3, featuredJobs.length));
  };

  const nextSlide = () => {
    setCurrentSlide(prev => 
      prev === featuredJobs.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide(prev => 
      prev === 0 ? featuredJobs.length - 1 : prev - 1
    );
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextSlide();
    }
    if (touchEndX.current - touchStartX.current > 50) {
      prevSlide();
    }
  };

  return (
    <section id="jobs" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-600">
            Featured <span className="text-purple-600">Jobs</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose jobs from the top employers and apply for the same.
          </p>
        </div>

        {/* Mobile Carousel / Desktop Grid */}
        {isMobile ? (
          <div className="relative mb-8">
            {/* Carousel Container */}
            <div 
              ref={sliderRef}
              className="overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {featuredJobs.map((job) => (
                  <div
                    key={job.id}
                    className="w-full flex-shrink-0 px-2"
                  >
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                      {/* Card Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center p-2">
                            <img
                              src={job.logo}
                              alt={job.company}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{job.company}</h3>
                            <p className="text-sm text-gray-500 flex items-center">
                              <MapPin size={14} className="mr-1" />
                              {job.location}
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => toggleFavorite(job.id)}
                          className="p-2 hover:bg-gray-100 rounded-full transition"
                        >
                          <Heart
                            size={20}
                            className={favorites[job.id] ? 'fill-red-500 text-red-500' : 'text-gray-400'}
                          />
                        </button>
                      </div>

                      {/* Job Title */}
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        {job.title}
                      </h4>

                      {/* Job Description */}
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {job.description}
                      </p>

                      {/* Job Details */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-xs font-medium">
                          {job.type}
                        </span>
                        <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-xs font-medium">
                          {job.experience}
                        </span>
                        <span className="px-3 py-1 bg-orange-50 text-orange-600 rounded-full text-xs font-medium">
                          {job.workType}
                        </span>
                      </div>

                      {/* Job Meta Info */}
                      <div className="grid grid-cols-2 gap-3 mb-4 pb-4 border-b border-gray-100">
                        <div className="flex items-center text-sm text-gray-600">
                          <Users size={16} className="mr-2 text-gray-400" />
                          <span>{job.positions} Positions</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <DollarSign size={16} className="mr-2 text-gray-400" />
                          <span className="font-semibold text-green-600">{job.salary}</span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <button className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition font-medium">
                          Apply Now
                        </button>
                        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:border-purple-600 hover:text-purple-600 transition font-medium">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition z-10"
              aria-label="Previous job"
            >
              <ChevronLeft size={24} className="text-gray-700" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition z-10"
              aria-label="Next job"
            >
              <ChevronRight size={24} className="text-gray-700" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {featuredJobs.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentSlide === index 
                      ? 'bg-purple-600 w-6' 
                      : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          // Desktop Grid View
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredJobs.slice(0, visibleJobs).map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                {/* Card Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center p-2">
                      <img
                        src={job.logo}
                        alt={job.company}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{job.company}</h3>
                      <p className="text-sm text-gray-500 flex items-center">
                        <MapPin size={14} className="mr-1" />
                        {job.location}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleFavorite(job.id)}
                    className="p-2 hover:bg-gray-100 rounded-full transition"
                  >
                    <Heart
                      size={20}
                      className={favorites[job.id] ? 'fill-red-500 text-red-500' : 'text-gray-400'}
                    />
                  </button>
                </div>

                {/* Job Title */}
                <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition">
                  {job.title}
                </h4>

                {/* Job Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {job.description}
                </p>

                {/* Job Details */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-xs font-medium">
                    {job.type}
                  </span>
                  <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-xs font-medium">
                    {job.experience}
                  </span>
                  <span className="px-3 py-1 bg-orange-50 text-orange-600 rounded-full text-xs font-medium">
                    {job.workType}
                  </span>
                </div>

                {/* Job Meta Info */}
                <div className="grid grid-cols-2 gap-3 mb-4 pb-4 border-b border-gray-100">
                  <div className="flex items-center text-sm text-gray-600">
                    <Users size={16} className="mr-2 text-gray-400" />
                    <span>{job.positions} Positions</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <DollarSign size={16} className="mr-2 text-gray-400" />
                    <span className="font-semibold text-green-600">{job.salary}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition font-medium">
                    Apply Now
                  </button>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:border-purple-600 hover:text-purple-600 transition font-medium">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Load More Button - Desktop Only */}
        {!isMobile && visibleJobs < featuredJobs.length && (
          <div className="text-center">
            <button
              onClick={loadMore}
              className="px-8 py-3 border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition font-medium"
            >
              Load More Jobs
            </button>
          </div>
        )}
      </div>
    </section>
  );
}