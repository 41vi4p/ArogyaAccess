'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { User, Mail, Lock, AlertCircle, CheckCircle, Camera, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function EditProfilePage() {
  const { user, loading, updateUserProfile, updateUserEmail, updateUserPassword } = useAuth();
  const router = useRouter();

  const [displayName, setDisplayName] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [profileLoading, setProfileLoading] = useState(false);
  const [emailLoading, setEmailLoading] = useState(false);
  const [passwordLoading, setPasswordLoading] = useState(false);

  const [profileError, setProfileError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [profileSuccess, setProfileSuccess] = useState('');
  const [emailSuccess, setEmailSuccess] = useState('');
  const [passwordSuccess, setPasswordSuccess] = useState('');

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
    if (user) {
      setDisplayName(user.displayName || '');
      setPhotoURL(user.photoURL || '');
      setNewEmail(user.email || '');
    }
  }, [user, loading, router]);

  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setProfileError('');
    setProfileSuccess('');
    setProfileLoading(true);

    try {
      await updateUserProfile(displayName, photoURL);
      setProfileSuccess('Profile updated successfully!');
      setTimeout(() => setProfileSuccess(''), 3000);
    } catch (error: any) {
      setProfileError(error.message || 'Failed to update profile');
    } finally {
      setProfileLoading(false);
    }
  };

  const handleEmailUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError('');
    setEmailSuccess('');
    setEmailLoading(true);

    if (!currentPassword) {
      setEmailError('Please enter your current password');
      setEmailLoading(false);
      return;
    }

    try {
      await updateUserEmail(newEmail, currentPassword);
      setEmailSuccess('Email updated successfully!');
      setCurrentPassword('');
      setTimeout(() => setEmailSuccess(''), 3000);
    } catch (error: any) {
      if (error.code === 'auth/wrong-password') {
        setEmailError('Incorrect password');
      } else if (error.code === 'auth/email-already-in-use') {
        setEmailError('Email is already in use');
      } else {
        setEmailError(error.message || 'Failed to update email');
      }
    } finally {
      setEmailLoading(false);
    }
  };

  const handlePasswordUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordError('');
    setPasswordSuccess('');
    setPasswordLoading(true);

    if (!currentPassword || !newPassword || !confirmPassword) {
      setPasswordError('Please fill in all password fields');
      setPasswordLoading(false);
      return;
    }

    if (newPassword !== confirmPassword) {
      setPasswordError('New passwords do not match');
      setPasswordLoading(false);
      return;
    }

    if (newPassword.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      setPasswordLoading(false);
      return;
    }

    try {
      await updateUserPassword(currentPassword, newPassword);
      setPasswordSuccess('Password updated successfully!');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
      setTimeout(() => setPasswordSuccess(''), 3000);
    } catch (error: any) {
      if (error.code === 'auth/wrong-password') {
        setPasswordError('Incorrect current password');
      } else {
        setPasswordError(error.message || 'Failed to update password');
      }
    } finally {
      setPasswordLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const isGoogleUser = user.providerData.some(provider => provider.providerId === 'google.com');

  return (
    <div className="min-h-screen bg-gray-900 py-12 pt-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/dashboard"
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-4"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Dashboard
          </Link>
          <h1 className="text-3xl font-bold text-white">Edit Profile</h1>
          <p className="text-gray-400 mt-2">Manage your account settings and preferences</p>
        </div>

        {/* Profile Information Section */}
        <div className="bg-gray-800 rounded-2xl shadow-lg p-8 mb-6">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <User className="h-6 w-6 mr-3 text-cyan-400" />
            Profile Information
          </h2>

          {profileError && (
            <div className="bg-red-900 border border-red-700 rounded-lg p-4 flex items-center space-x-2 mb-4">
              <AlertCircle className="h-5 w-5 text-red-400" />
              <p className="text-sm text-red-200">{profileError}</p>
            </div>
          )}

          {profileSuccess && (
            <div className="bg-green-900 border border-green-700 rounded-lg p-4 flex items-center space-x-2 mb-4">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <p className="text-sm text-green-200">{profileSuccess}</p>
            </div>
          )}

          <form onSubmit={handleProfileUpdate} className="space-y-6">
            {/* Profile Picture Preview */}
            <div className="flex items-center space-x-6">
              <div className="relative">
                {photoURL || user.photoURL ? (
                  <img
                    src={photoURL || user.photoURL || ''}
                    alt="Profile"
                    className="h-24 w-24 rounded-full object-cover border-4 border-gray-700"
                  />
                ) : (
                  <div className="h-24 w-24 rounded-full bg-gray-700 flex items-center justify-center border-4 border-gray-700">
                    <User className="h-12 w-12 text-gray-400" />
                  </div>
                )}
                <div className="absolute bottom-0 right-0 bg-cyan-500 rounded-full p-2">
                  <Camera className="h-4 w-4 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-400 mb-2">Profile Picture URL</p>
                <p className="text-xs text-gray-500">
                  {isGoogleUser
                    ? 'Google profile picture is automatically synced'
                    : 'Enter a URL for your profile picture'}
                </p>
              </div>
            </div>

            {/* Display Name */}
            <div>
              <label htmlFor="displayName" className="block text-sm font-medium text-gray-300 mb-2">
                Display Name
              </label>
              <input
                id="displayName"
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition text-white placeholder-gray-400"
                placeholder="Enter your display name"
              />
            </div>

            {/* Photo URL (only for non-Google users) */}
            {!isGoogleUser && (
              <div>
                <label htmlFor="photoURL" className="block text-sm font-medium text-gray-300 mb-2">
                  Photo URL (Optional)
                </label>
                <input
                  id="photoURL"
                  type="url"
                  value={photoURL}
                  onChange={(e) => setPhotoURL(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition text-white placeholder-gray-400"
                  placeholder="https://example.com/photo.jpg"
                />
              </div>
            )}

            <button
              type="submit"
              disabled={profileLoading}
              className="w-full bg-cyan-500 text-white py-3 px-4 rounded-lg hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition disabled:opacity-50 disabled:cursor-not-allowed font-medium"
            >
              {profileLoading ? 'Updating...' : 'Update Profile'}
            </button>
          </form>
        </div>

        {/* Email Section (only for email/password users) */}
        {!isGoogleUser && (
          <div className="bg-gray-800 rounded-2xl shadow-lg p-8 mb-6">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Mail className="h-6 w-6 mr-3 text-cyan-400" />
              Change Email
            </h2>

            {emailError && (
              <div className="bg-red-900 border border-red-700 rounded-lg p-4 flex items-center space-x-2 mb-4">
                <AlertCircle className="h-5 w-5 text-red-400" />
                <p className="text-sm text-red-200">{emailError}</p>
              </div>
            )}

            {emailSuccess && (
              <div className="bg-green-900 border border-green-700 rounded-lg p-4 flex items-center space-x-2 mb-4">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <p className="text-sm text-green-200">{emailSuccess}</p>
              </div>
            )}

            <form onSubmit={handleEmailUpdate} className="space-y-6">
              <div>
                <label htmlFor="newEmail" className="block text-sm font-medium text-gray-300 mb-2">
                  New Email Address
                </label>
                <input
                  id="newEmail"
                  type="email"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition text-white placeholder-gray-400"
                  placeholder="Enter new email"
                />
              </div>

              <div>
                <label
                  htmlFor="emailCurrentPassword"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Current Password
                </label>
                <input
                  id="emailCurrentPassword"
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition text-white placeholder-gray-400"
                  placeholder="Enter your current password"
                />
              </div>

              <button
                type="submit"
                disabled={emailLoading}
                className="w-full bg-cyan-500 text-white py-3 px-4 rounded-lg hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition disabled:opacity-50 disabled:cursor-not-allowed font-medium"
              >
                {emailLoading ? 'Updating...' : 'Update Email'}
              </button>
            </form>
          </div>
        )}

        {/* Password Section (only for email/password users) */}
        {!isGoogleUser && (
          <div className="bg-gray-800 rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Lock className="h-6 w-6 mr-3 text-cyan-400" />
              Change Password
            </h2>

            {passwordError && (
              <div className="bg-red-900 border border-red-700 rounded-lg p-4 flex items-center space-x-2 mb-4">
                <AlertCircle className="h-5 w-5 text-red-400" />
                <p className="text-sm text-red-200">{passwordError}</p>
              </div>
            )}

            {passwordSuccess && (
              <div className="bg-green-900 border border-green-700 rounded-lg p-4 flex items-center space-x-2 mb-4">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <p className="text-sm text-green-200">{passwordSuccess}</p>
              </div>
            )}

            <form onSubmit={handlePasswordUpdate} className="space-y-6">
              <div>
                <label
                  htmlFor="passwordCurrentPassword"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Current Password
                </label>
                <input
                  id="passwordCurrentPassword"
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition text-white placeholder-gray-400"
                  placeholder="Enter your current password"
                />
              </div>

              <div>
                <label htmlFor="newPassword" className="block text-sm font-medium text-gray-300 mb-2">
                  New Password
                </label>
                <input
                  id="newPassword"
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition text-white placeholder-gray-400"
                  placeholder="Enter new password"
                />
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Confirm New Password
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition text-white placeholder-gray-400"
                  placeholder="Confirm new password"
                />
              </div>

              <button
                type="submit"
                disabled={passwordLoading}
                className="w-full bg-cyan-500 text-white py-3 px-4 rounded-lg hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition disabled:opacity-50 disabled:cursor-not-allowed font-medium"
              >
                {passwordLoading ? 'Updating...' : 'Update Password'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
