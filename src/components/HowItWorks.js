// src/components/HowItWorks.js
'use client';

import { useState } from 'react';
import { UserPlus, Search, FileCheck, Briefcase, CheckCircle, ArrowRight, Play } from 'lucide-react';

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(null);
  const [showVideo, setShowVideo] = useState(false);

  const steps = [
    {
      icon: UserPlus,
      title: 'Create Account',
      description: 'Sign up in minutes and create your professional profile to get started.',
      color: 'purple',
      gradient: 'from-purple-500 to-purple-600',
      details: 'Build your profile with resume, skills, and experience to stand out.',
    },
    {
      icon: Search,
      title: 'Search Jobs',
      description: 'Browse through thousands of job listings tailored to your skills and preferences.',
      color: 'blue',
      gradient: 'from-blue-500 to-blue-600',
      details: 'Use advanced filters to find your perfect job match quickly.',
    },
    {
      icon: FileCheck,
      title: 'Apply with Ease',
      description: 'Submit applications with one click using your profile information.',
      color: 'green',
      gradient: 'from-green-500 to-green-600',
      details: 'Track all your applications in one convenient dashboard.',
    },
    {
      icon: Briefcase,
      title: 'Get Hired',
      description: 'Connect with employers, attend interviews, and land your dream job.',
      color: 'orange',
      gradient: 'from-orange-500 to-orange-600',
      details: 'Receive notifications and schedule interviews seamlessly.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-purple-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse-slow animation-delay-200"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-600 px-5 py-2 rounded-full mb-6 hover:scale-105 transition-transform cursor-default">
            <CheckCircle size={16} />
            <span className="text-sm font-semibold">Simple Process</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-800">
            How It <span className="text-purple-600">Works?</span>
          </h2>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            Get hired in 4 quick and easy steps. Follow our simple process to land your dream job.
          </p>

          {/* Video Button */}
          <button
            onClick={() => setShowVideo(true)}
            className="group inline-flex items-center space-x-3 px-6 py-3 bg-white border-2 border-purple-200 text-purple-600 rounded-xl hover:bg-purple-50 hover:border-purple-400 hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 font-semibold"
          >
            <div className="relative">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                <Play size={16} className="fill-purple-600 text-purple-600 ml-0.5" />
              </div>
              <div className="absolute inset-0 bg-purple-400 rounded-full animate-ping opacity-20"></div>
            </div>
            <span className="group-hover:translate-x-1 transition-transform">Watch Demo Video</span>
          </button>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
              >
                {/* Connector Line (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-purple-300 to-purple-200 z-0">
                    <div className={`h-full bg-gradient-to-r ${step.gradient} transition-all duration-500 ${
                      activeStep >= index ? 'w-full' : 'w-0'
                    }`}></div>
                  </div>
                )}

                {/* Step Card */}
                <div
                  className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border-2 ${
                    activeStep === index 
                      ? `border-${step.color}-400 -translate-y-4` 
                      : 'border-gray-100 hover:-translate-y-2'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Step Number */}
                  <div className={`absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-br ${step.gradient} text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform`}>
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 mb-6 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg relative`}>
                    <Icon className="text-white" size={32} />
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity`}></div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Additional Details (shown on hover) */}
                  <div className={`overflow-hidden transition-all duration-300 ${
                    activeStep === index ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <p className="text-xs text-gray-500 pt-4 border-t border-gray-100">
                      {step.details}
                    </p>
                  </div>

                  {/* Arrow Indicator */}
                  <div className={`flex items-center justify-center mt-4 transition-all duration-300 ${
                    activeStep === index ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                  }`}>
                    <ArrowRight className={`text-${step.color}-500`} size={20} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-purple-700 rounded-3xl p-8 md:p-12 shadow-2xl hover:shadow-3xl transition-shadow duration-300 animate-fade-in-up animation-delay-400">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h3>
          <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of job seekers who have found their dream careers through our platform.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group px-8 py-4 bg-white text-purple-600 rounded-xl hover:bg-gray-50 hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 font-semibold flex items-center space-x-2">
              <span>Get Started Now</span>
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-xl hover:bg-white/10 hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 font-semibold">
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
            <div className="text-center group cursor-default">
              <div className="text-3xl font-bold text-white mb-1 group-hover:scale-110 transition-transform">
                98%
              </div>
              <div className="text-purple-200 text-sm">Success Rate</div>
            </div>
            <div className="text-center group cursor-default">
              <div className="text-3xl font-bold text-white mb-1 group-hover:scale-110 transition-transform">
                48h
              </div>
              <div className="text-purple-200 text-sm">Avg. Response</div>
            </div>
            <div className="text-center group cursor-default">
              <div className="text-3xl font-bold text-white mb-1 group-hover:scale-110 transition-transform">
                5★
              </div>
              <div className="text-purple-200 text-sm">User Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setShowVideo(false)}
        >
          <div 
            className="bg-white rounded-2xl max-w-4xl w-full aspect-video relative animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-4 -right-4 w-10 h-10 bg-white rounded-full shadow-lg hover:bg-red-500 hover:text-white transition-all duration-200 flex items-center justify-center hover:scale-110 active:scale-95"
            >
              ✕
            </button>
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              <Play size={64} className="opacity-50" />
              <p className="ml-4">Video Player Placeholder</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}