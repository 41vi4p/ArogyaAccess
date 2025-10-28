'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import {
  getUserActivityLogs,
  formatActivityTimestamp,
  getActivityIcon,
  getActivityColor,
  ActivityLog,
} from '@/lib/activityLog';
import {
  ArrowLeft,
  Activity,
  LogIn,
  LogOut,
  User,
  Lock,
  Mail,
  MessageCircle,
  Heart,
  UserPlus,
  Camera,
  RefreshCw,
} from 'lucide-react';

const iconComponents: Record<string, any> = {
  LogIn,
  LogOut,
  User,
  Lock,
  Mail,
  MessageCircle,
  Heart,
  UserPlus,
  Camera,
  Activity,
};

export default function ActivityLogsPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [logs, setLogs] = useState<ActivityLog[]>([]);
  const [logsLoading, setLogsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  useEffect(() => {
    if (user) {
      loadLogs();
    }
  }, [user]);

  const loadLogs = async () => {
    if (!user) return;
    setLogsLoading(true);
    try {
      const activityLogs = await getUserActivityLogs(user.uid, 100);
      setLogs(activityLogs);
    } catch (error) {
      console.error('Error loading activity logs:', error);
    } finally {
      setLogsLoading(false);
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await loadLogs();
    setRefreshing(false);
  };

  if (loading || logsLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading activity logs...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-900 py-12 pt-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/dashboard"
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-4"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Dashboard
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white flex items-center">
                <Activity className="h-8 w-8 mr-3 text-cyan-400" />
                Activity Logs
              </h1>
              <p className="text-gray-400 mt-2">Track your account activity and usage history</p>
            </div>
            <button
              onClick={handleRefresh}
              disabled={refreshing}
              className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition flex items-center space-x-2 disabled:opacity-50"
            >
              <RefreshCw className={`h-4 w-4 ${refreshing ? 'animate-spin' : ''}`} />
              <span>Refresh</span>
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-cyan-50 text-sm mb-1">Total Activities</p>
                <p className="text-3xl font-bold">{logs.length}</p>
              </div>
              <Activity className="h-12 w-12 text-white opacity-50" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-50 text-sm mb-1">Login Sessions</p>
                <p className="text-3xl font-bold">
                  {logs.filter((log) => log.action === 'login').length}
                </p>
              </div>
              <LogIn className="h-12 w-12 text-white opacity-50" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-50 text-sm mb-1">Profile Updates</p>
                <p className="text-3xl font-bold">
                  {logs.filter((log) => log.action === 'profile_updated').length}
                </p>
              </div>
              <User className="h-12 w-12 text-white opacity-50" />
            </div>
          </div>
        </div>

        {/* Activity Timeline */}
        <div className="bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Recent Activity</h2>

          {logs.length === 0 ? (
            <div className="text-center py-12">
              <Activity className="h-16 w-16 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400 text-lg mb-2">No activity logs yet</p>
              <p className="text-gray-500 text-sm">
                Your account activity will appear here as you use ArogyaAccess
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {logs.map((log, index) => {
                const IconComponent = iconComponents[getActivityIcon(log.action as any)] || Activity;
                const colorClass = getActivityColor(log.action as any);

                return (
                  <div
                    key={log.id || index}
                    className="flex items-start space-x-4 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
                  >
                    {/* Icon */}
                    <div className={`${colorClass} bg-gray-800 p-3 rounded-lg flex-shrink-0`}>
                      <IconComponent className="h-5 w-5" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-medium">{log.description}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-gray-400 text-sm">
                          {formatActivityTimestamp(log.timestamp)}
                        </span>
                        {log.metadata && Object.keys(log.metadata).length > 0 && (
                          <span className="text-gray-500 text-xs">•</span>
                        )}
                      </div>

                      {/* Metadata */}
                      {log.metadata && Object.keys(log.metadata).length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-2">
                          {Object.entries(log.metadata).map(([key, value]) => (
                            <span
                              key={key}
                              className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded"
                            >
                              {key}: {String(value)}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Action Badge */}
                    <div className="flex-shrink-0">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-800 text-gray-300">
                        {log.action.replace(/_/g, ' ')}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Info Section */}
        <div className="mt-8 bg-blue-900/20 border border-blue-700 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <Activity className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="text-blue-300 font-medium mb-1">About Activity Logs</h3>
              <p className="text-blue-200 text-sm leading-relaxed">
                Activity logs help you track your account usage and security. We record important
                events like logins, profile updates, and security changes. This information is
                stored securely and only visible to you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
