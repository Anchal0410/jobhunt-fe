// src/components/Footer.js
'use client';

import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="text-white">Job</span>
              <span className="text-purple-500">hunt</span>
            </h3>
            <p className="text-gray-400 mb-4 text-sm">
              Your trusted partner in finding the perfect career opportunity. We connect talented professionals with leading companies worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-500 transition text-sm">About Us</a></li>
              <li><a href="#" className="hover:text-purple-500 transition text-sm">Contact Us</a></li>
              <li><a href="#" className="hover:text-purple-500 transition text-sm">Pricing</a></li>
              <li><a href="#" className="hover:text-purple-500 transition text-sm">Blog</a></li>
              <li><a href="#" className="hover:text-purple-500 transition text-sm">FAQs</a></li>
            </ul>
          </div>

          {/* For Candidates */}
          <div>
            <h4 className="text-white font-semibold mb-4">For Candidates</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-500 transition text-sm">Browse Jobs</a></li>
              <li><a href="#" className="hover:text-purple-500 transition text-sm">Browse Categories</a></li>
              <li><a href="#" className="hover:text-purple-500 transition text-sm">Candidate Dashboard</a></li>
              <li><a href="#" className="hover:text-purple-500 transition text-sm">Job Alerts</a></li>
              <li><a href="#" className="hover:text-purple-500 transition text-sm">My Bookmarks</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 text-purple-500 flex-shrink-0" />
                <span className="text-sm">123 Business Street, Suite 100, New York, NY 10001</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-purple-500 flex-shrink-0" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-purple-500 flex-shrink-0" />
                <span className="text-sm">info@jobhunt.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © 2024 Jobhunt. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm hover:text-purple-500 transition">Privacy Policy</a>
              <a href="#" className="text-sm hover:text-purple-500 transition">Terms of Service</a>
              <a href="#" className="text-sm hover:text-purple-500 transition">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}