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
    <header className="relative bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 dark:from-purple-900 dark:via-pink-900 dark:to-orange-700 shadow-lg fixed w-full top-0 z-50 backdrop-blur-sm">
      {/* Multi-layer gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/50 via-blue-500/50 to-indigo-600/50 dark:from-cyan-800/30 dark:via-blue-900/30 dark:to-indigo-900/30"></div>
      <div className="absolute inset-0 bg-white/5 dark:bg-black/20"></div>

      <nav className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <Heart className="h-8 w-8 text-white drop-shadow-lg group-hover:scale-110 transition-transform" />
            <span className="text-xl font-bold text-white drop-shadow-lg">ArogyaAccess</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="text-white/90 hover:text-white transition font-medium">
              Home
            </Link>
            <Link href="/about" className="text-white/90 hover:text-white transition font-medium">
              About
            </Link>
            {user ? (
              <>
                <Link href="/dashboard" className="text-white/90 hover:text-white transition font-medium">
                  Dashboard
                </Link>
                <Link href="/chatbot" className="text-white/90 hover:text-white transition font-medium">
                  Chatbot
                </Link>
                <Link href="/firstaid" className="text-white/90 hover:text-white transition font-medium">
                  First Aid
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-lg hover:bg-white/30 transition border border-white/30"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/firstaid" className="text-white/90 hover:text-white transition font-medium">
                  First Aid
                </Link>
                <Link
                  href="/login"
                  className="bg-white text-purple-600 px-4 py-2 rounded-lg hover:bg-white/90 transition font-medium shadow-lg"
                >
                  Login
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-white/80 transition"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 bg-white/10 backdrop-blur-lg rounded-b-xl">
            <Link
              href="/"
              className="block text-white hover:text-white/80 transition px-4 py-2 rounded font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-white hover:text-white/80 transition px-4 py-2 rounded font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            {user ? (
              <>
                <Link
                  href="/dashboard"
                  className="block text-white hover:text-white/80 transition px-4 py-2 rounded font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <Link
                  href="/chatbot"
                  className="block text-white hover:text-white/80 transition px-4 py-2 rounded font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Chatbot
                </Link>
                <Link
                  href="/firstaid"
                  className="block text-white hover:text-white/80 transition px-4 py-2 rounded font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  First Aid
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-left bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-lg hover:bg-white/30 transition border border-white/30"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/firstaid"
                  className="block text-white hover:text-white/80 transition px-4 py-2 rounded font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  First Aid
                </Link>
                <Link
                  href="/login"
                  className="block bg-white text-purple-600 px-4 py-2 rounded-lg hover:bg-white/90 transition text-center font-medium shadow-lg mx-4"
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
