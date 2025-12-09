// src/components/TopCompanies.js
'use client';

import { topCompanies } from '@/data/mockData';

export default function TopCompanies() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-600">
            Top <span className="text-purple-600">Companies</span> Hiring
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get hired by the world's leading companies in your field of interest.
          </p>
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {topCompanies.map((company, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex items-center justify-center group cursor-pointer"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="max-w-full h-12 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition font-medium">
            View All Companies
          </button>
        </div>
      </div>
    </section>
  );
}