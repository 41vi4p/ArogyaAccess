'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

export default function DashboardPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-900 py-12 pt-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="bg-gray-800 rounded-2xl shadow-lg p-8 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Welcome back, {user.displayName || user.email?.split('@')[0]}!
          </h1>
          <p className="text-gray-300">What would you like to do today?</p>
        </div>

        {/* Quick Access Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* Chatbot Card */}
          <Link href="/chatbot">
            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 text-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 cursor-pointer">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-gray-900 bg-opacity-40 p-4 rounded-lg">
                  <div className="text-4xl">🤖</div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Chat with AI MediBot</h3>
                  <p className="text-cyan-50">Get instant medical guidance 24/7</p>
                </div>
              </div>
              <p className="text-sm text-cyan-50">
                Ask health questions and receive AI-powered medical advice instantly
              </p>
            </div>
          </Link>

          {/* First Aid Card */}
          <Link href="/firstaid">
            <div className="bg-gradient-to-br from-red-500 to-pink-600 text-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 cursor-pointer">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-gray-900 bg-opacity-40 p-4 rounded-lg">
                  <div className="text-4xl">🚑</div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">First Aid Guide</h3>
                  <p className="text-red-50">Emergency procedures at your fingertips</p>
                </div>
              </div>
              <p className="text-sm text-red-50">
                Access step-by-step guides for common medical emergencies
              </p>
            </div>
          </Link>

          {/* Health Records Card */}
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 cursor-pointer opacity-75">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-gray-900 bg-opacity-40 p-4 rounded-lg">
                <div className="text-4xl">📋</div>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Patient History</h3>
                <p className="text-green-50">View your medical records</p>
              </div>
            </div>
            <p className="text-sm text-green-50">Coming soon: Track appointments and prescriptions</p>
          </div>

          {/* Health Monitoring Card */}
          <div className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 cursor-pointer opacity-75">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-gray-900 bg-opacity-40 p-4 rounded-lg">
                <div className="text-4xl">📊</div>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Health Monitoring</h3>
                <p className="text-purple-50">Track your vitals and symptoms</p>
              </div>
            </div>
            <p className="text-sm text-purple-50">
              Coming soon: Monitor blood pressure, temperature, and more
            </p>
          </div>
        </div>

        {/* Recent Activity Section */}
        <div className="mt-8 bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Recent Activity</h2>
          <p className="text-gray-300">Your recent consultations and interactions will appear here</p>
        </div>
      </div>
    </div>
  );
}
