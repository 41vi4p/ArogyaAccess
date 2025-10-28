import { db } from './firebase';
import { collection, addDoc, query, where, orderBy, limit, getDocs, Timestamp } from 'firebase/firestore';

export interface ActivityLog {
  id?: string;
  userId: string;
  action: string;
  description: string;
  timestamp: Timestamp;
  metadata?: Record<string, any>;
}

export type ActivityAction =
  | 'login'
  | 'logout'
  | 'profile_updated'
  | 'password_changed'
  | 'email_changed'
  | 'chatbot_interaction'
  | 'first_aid_viewed'
  | 'account_created'
  | 'profile_picture_updated';

/**
 * Log an activity to Firestore
 */
export async function logActivity(
  userId: string,
  action: ActivityAction,
  description: string,
  metadata?: Record<string, any>
): Promise<void> {
  try {
    await addDoc(collection(db, 'activityLogs'), {
      userId,
      action,
      description,
      timestamp: Timestamp.now(),
      metadata: metadata || {},
    });
  } catch (error) {
    console.error('Error logging activity:', error);
  }
}

/**
 * Get activity logs for a specific user
 */
export async function getUserActivityLogs(
  userId: string,
  limitCount: number = 50
): Promise<ActivityLog[]> {
  try {
    const logsRef = collection(db, 'activityLogs');
    const q = query(
      logsRef,
      where('userId', '==', userId),
      orderBy('timestamp', 'desc'),
      limit(limitCount)
    );

    const querySnapshot = await getDocs(q);
    const logs: ActivityLog[] = [];

    querySnapshot.forEach((doc) => {
      logs.push({
        id: doc.id,
        ...doc.data(),
      } as ActivityLog);
    });

    return logs;
  } catch (error) {
    console.error('Error fetching activity logs:', error);
    return [];
  }
}

/**
 * Format timestamp for display
 */
export function formatActivityTimestamp(timestamp: Timestamp): string {
  const date = timestamp.toDate();
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) {
    return 'Just now';
  } else if (diffInSeconds < 3600) {
    const minutes = Math.floor(diffInSeconds / 60);
    return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
  } else if (diffInSeconds < 86400) {
    const hours = Math.floor(diffInSeconds / 3600);
    return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
  } else if (diffInSeconds < 604800) {
    const days = Math.floor(diffInSeconds / 86400);
    return `${days} ${days === 1 ? 'day' : 'days'} ago`;
  } else {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  }
}

/**
 * Get icon name for activity action
 */
export function getActivityIcon(action: ActivityAction): string {
  const iconMap: Record<ActivityAction, string> = {
    login: 'LogIn',
    logout: 'LogOut',
    profile_updated: 'User',
    password_changed: 'Lock',
    email_changed: 'Mail',
    chatbot_interaction: 'MessageCircle',
    first_aid_viewed: 'Heart',
    account_created: 'UserPlus',
    profile_picture_updated: 'Camera',
  };
  return iconMap[action] || 'Activity';
}

/**
 * Get color class for activity action
 */
export function getActivityColor(action: ActivityAction): string {
  const colorMap: Record<ActivityAction, string> = {
    login: 'text-green-400',
    logout: 'text-gray-400',
    profile_updated: 'text-blue-400',
    password_changed: 'text-yellow-400',
    email_changed: 'text-purple-400',
    chatbot_interaction: 'text-cyan-400',
    first_aid_viewed: 'text-red-400',
    account_created: 'text-green-400',
    profile_picture_updated: 'text-pink-400',
  };
  return colorMap[action] || 'text-gray-400';
}
