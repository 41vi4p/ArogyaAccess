'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { Menu, X, Heart, User, LogOut, Trash2, FileText, Settings } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [deletePassword, setDeletePassword] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const { user, logout, deleteUserAccount } = useAuth();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLogout = async () => {
    try {
      await logout();
      setProfileDropdownOpen(false);
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const handleDeleteAccount = async () => {
    const isGoogleUser = user?.providerData.some(
      (provider) => provider.providerId === 'google.com'
    );

    if (isGoogleUser) {
      // For Google users, confirm directly
      if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
        try {
          await deleteUserAccount();
          setProfileDropdownOpen(false);
          setMobileMenuOpen(false);
        } catch (error: any) {
          alert('Error deleting account: ' + error.message);
        }
      }
    } else {
      // For email/password users, show password modal
      setShowDeleteModal(true);
      setProfileDropdownOpen(false);
    }
  };

  const confirmDeleteWithPassword = async () => {
    if (!deletePassword) {
      alert('Please enter your password');
      return;
    }

    try {
      await deleteUserAccount(deletePassword);
      setShowDeleteModal(false);
      setDeletePassword('');
      setMobileMenuOpen(false);
    } catch (error: any) {
      if (error.code === 'auth/wrong-password') {
        alert('Incorrect password');
      } else {
        alert('Error deleting account: ' + error.message);
      }
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProfileDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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

                {/* Profile Dropdown */}
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                    className="bg-white/20 backdrop-blur-md text-white p-1 rounded-full hover:bg-white/30 transition border border-white/30"
                  >
                    {user.photoURL ? (
                      <img
                        src={user.photoURL}
                        alt="Profile"
                        className="h-8 w-8 rounded-full object-cover"
                      />
                    ) : (
                      <User className="h-6 w-6 m-1" />
                    )}
                  </button>

                  {profileDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-56 bg-gray-800 rounded-lg shadow-xl border border-gray-700 py-2 z-50">
                      <div className="px-4 py-3 border-b border-gray-700 flex items-center space-x-3">
                        {user.photoURL ? (
                          <img
                            src={user.photoURL}
                            alt="Profile"
                            className="h-10 w-10 rounded-full object-cover"
                          />
                        ) : (
                          <div className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center">
                            <User className="h-6 w-6 text-gray-400" />
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          {user.displayName && (
                            <p className="text-sm font-medium text-white truncate">{user.displayName}</p>
                          )}
                          <p className="text-xs text-gray-400 truncate">{user.email}</p>
                        </div>
                      </div>

                      <Link
                        href="/profile/edit"
                        onClick={() => setProfileDropdownOpen(false)}
                        className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white transition"
                      >
                        <Settings className="h-4 w-4" />
                        <span>Edit Profile</span>
                      </Link>

                      <Link
                        href="/logs"
                        onClick={() => setProfileDropdownOpen(false)}
                        className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white transition"
                      >
                        <FileText className="h-4 w-4" />
                        <span>Activity Logs</span>
                      </Link>

                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center space-x-3 px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white transition"
                      >
                        <LogOut className="h-4 w-4" />
                        <span>Logout</span>
                      </button>

                      <button
                        onClick={handleDeleteAccount}
                        className="w-full flex items-center space-x-3 px-4 py-3 text-red-400 hover:bg-red-900/20 hover:text-red-300 transition border-t border-gray-700"
                      >
                        <Trash2 className="h-4 w-4" />
                        <span>Delete Account</span>
                      </button>
                    </div>
                  )}
                </div>
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
            {user && user.photoURL && (
              <img
                src={user.photoURL}
                alt="Profile"
                className="h-8 w-8 rounded-full object-cover border-2 border-white/30"
              />
            )}
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

                {/* Mobile Profile Section */}
                <div className="border-t border-white/20 pt-4 mt-4">
                  <div className="px-4 py-2 flex items-center space-x-3">
                    {user.photoURL ? (
                      <img
                        src={user.photoURL}
                        alt="Profile"
                        className="h-12 w-12 rounded-full object-cover border-2 border-white/30"
                      />
                    ) : (
                      <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center border-2 border-white/30">
                        <User className="h-6 w-6 text-white" />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      {user.displayName && (
                        <p className="text-sm font-medium text-white truncate">{user.displayName}</p>
                      )}
                      <p className="text-xs text-white/60 truncate">{user.email}</p>
                    </div>
                  </div>

                  <Link
                    href="/profile/edit"
                    className="flex items-center space-x-3 text-white hover:text-white/80 transition px-4 py-2 rounded font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Settings className="h-5 w-5" />
                    <span>Edit Profile</span>
                  </Link>

                  <Link
                    href="/logs"
                    className="flex items-center space-x-3 text-white hover:text-white/80 transition px-4 py-2 rounded font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <FileText className="h-5 w-5" />
                    <span>Activity Logs</span>
                  </Link>

                  <button
                    onClick={() => {
                      handleLogout();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center space-x-3 text-left bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-lg hover:bg-white/30 transition border border-white/30"
                  >
                    <LogOut className="h-5 w-5" />
                    <span>Logout</span>
                  </button>

                  <button
                    onClick={handleDeleteAccount}
                    className="w-full flex items-center space-x-3 text-left text-red-300 px-4 py-2 rounded-lg hover:bg-red-900/20 transition mt-2"
                  >
                    <Trash2 className="h-5 w-5" />
                    <span>Delete Account</span>
                  </button>
                </div>
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

      {/* Delete Account Password Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-2xl shadow-xl max-w-md w-full p-6 border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-4">Confirm Account Deletion</h3>
            <p className="text-gray-300 mb-6">
              This action cannot be undone. Please enter your password to confirm account deletion.
            </p>

            <div className="mb-6">
              <label htmlFor="deletePassword" className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <input
                id="deletePassword"
                type="password"
                value={deletePassword}
                onChange={(e) => setDeletePassword(e.target.value)}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-white placeholder-gray-400"
                placeholder="Enter your password"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    confirmDeleteWithPassword();
                  }
                }}
              />
            </div>

            <div className="flex space-x-3">
              <button
                onClick={() => {
                  setShowDeleteModal(false);
                  setDeletePassword('');
                }}
                className="flex-1 bg-gray-700 text-white py-3 px-4 rounded-lg hover:bg-gray-600 transition font-medium"
              >
                Cancel
              </button>
              <button
                onClick={confirmDeleteWithPassword}
                className="flex-1 bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 transition font-medium"
              >
                Delete Account
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
