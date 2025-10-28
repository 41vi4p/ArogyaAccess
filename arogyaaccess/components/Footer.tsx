import React from 'react';
import { Heart, MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-6 w-6 text-cyan-500" />
              <h3 className="text-xl font-bold">ArogyaAccess</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Enhancing healthcare accessibility, regardless of geographic barriers. Connecting rural
              patients with expert medical professionals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="/" className="hover:text-cyan-500 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-cyan-500 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/chatbot" className="hover:text-cyan-500 transition">
                  AI Chatbot
                </a>
              </li>
              <li>
                <a href="/firstaid" className="hover:text-cyan-500 transition">
                  First Aid Guide
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-cyan-500" />
                <span>Mumbai, Maharashtra</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-cyan-500" />
                <span>+01 1234567890</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-cyan-500" />
                <span>arogyaaccess@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyan-500 transition">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-500 transition">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-500 transition">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-500 transition">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} ArogyaAccess. All Rights Reserved.</p>
          <p className="mt-1">
            Made with <span className="text-red-500">❤</span> by Team CodeBreakers
          </p>
        </div>
      </div>
    </footer>
  );
}
