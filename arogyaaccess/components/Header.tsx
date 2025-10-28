'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { Menu, X, Heart } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-cyan-500" />
            <span className="text-xl font-bold text-gray-900">ArogyaAccess</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-cyan-500 transition">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-cyan-500 transition">
              About
            </Link>
            {user ? (
              <>
                <Link href="/dashboard" className="text-gray-700 hover:text-cyan-500 transition">
                  Dashboard
                </Link>
                <Link href="/chatbot" className="text-gray-700 hover:text-cyan-500 transition">
                  Chatbot
                </Link>
                <Link href="/firstaid" className="text-gray-700 hover:text-cyan-500 transition">
                  First Aid
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/firstaid" className="text-gray-700 hover:text-cyan-500 transition">
                  First Aid
                </Link>
                <Link
                  href="/login"
                  className="bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition"
                >
                  Login
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-700 hover:text-cyan-500"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link
              href="/"
              className="block text-gray-700 hover:text-cyan-500 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-gray-700 hover:text-cyan-500 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            {user ? (
              <>
                <Link
                  href="/dashboard"
                  className="block text-gray-700 hover:text-cyan-500 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <Link
                  href="/chatbot"
                  className="block text-gray-700 hover:text-cyan-500 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Chatbot
                </Link>
                <Link
                  href="/firstaid"
                  className="block text-gray-700 hover:text-cyan-500 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  First Aid
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-left bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/firstaid"
                  className="block text-gray-700 hover:text-cyan-500 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  First Aid
                </Link>
                <Link
                  href="/login"
                  className="block bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </Link>
              </>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}
