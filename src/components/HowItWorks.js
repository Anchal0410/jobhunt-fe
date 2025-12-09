// src/components/HowItWorks.js
'use client';

import { UserPlus, FileText, Search, Briefcase } from 'lucide-react';
import { howItWorksSteps } from '@/data/mockData';

const iconMap = {
  UserPlus: UserPlus,
  FileText: FileText,
  Search: Search,
  Briefcase: Briefcase
};

export default function HowItWorks() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-600">
            Get Hired in <span className="text-purple-600">4 Quick Easy Steps</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The quickest and most effective way to get hired by the top firm working in your career interest areas.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {howItWorksSteps.map((step, index) => {
            const IconComponent = iconMap[step.icon];
            return (
              <div
                key={step.id}
                className="relative group"
              >
                {/* Connecting Line (Desktop only) */}
                {index < howItWorksSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-purple-200 z-0">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-8 border-l-purple-200"></div>
                  </div>
                )}

                {/* Step Card */}
                <div className="relative z-10 text-center">
                  {/* Icon Circle */}
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <IconComponent className="text-white" size={40} />
                  </div>

                  {/* Step Number */}
                  <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-2 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                    {step.id}
                  </div>

                  {/* Step Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition font-medium shadow-lg hover:shadow-xl">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
}