import React from 'react';
import { 
  BellRing, 
  Calendar, 
  MessageSquare, 
  Award, 
  CheckCircle2
} from 'lucide-react';
import { Notification } from '../types';
import { formatDistance } from 'date-fns';
import { cn } from '../lib/utils';

interface NotificationItemProps {
  notification: Notification;
  onClick?: () => void;
}

export const NotificationItem: React.FC<NotificationItemProps> = ({ 
  notification,
  onClick
}) => {
  const { title, message, date, read, type } = notification;
  
  const formattedDate = formatDistance(
    new Date(date),
    new Date(),
    { addSuffix: true }
  );
  
  const getIcon = () => {
    switch (type) {
      case 'announcement':
        return <BellRing className="h-5 w-5 text-blue-500" />;
      case 'deadline':
        return <Calendar className="h-5 w-5 text-amber-500" />;
      case 'grade':
        return <Award className="h-5 w-5 text-green-500" />;
      case 'message':
        return <MessageSquare className="h-5 w-5 text-purple-500" />;
      default:
        return <BellRing className="h-5 w-5 text-blue-500" />;
    }
  };

  return (
    <div 
      className={cn(
        "flex items-start p-3 gap-3 rounded-lg cursor-pointer transition-colors",
        read ? "bg-white hover:bg-gray-50" : "bg-blue-50 hover:bg-blue-100"
      )}
      onClick={onClick}
    >
      <div className="flex-shrink-0 mt-1">
        {getIcon()}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <p className={cn(
            "text-sm font-medium",
            read ? "text-gray-900" : "text-gray-900"
          )}>
            {title}
          </p>
          <span className="text-xs text-gray-500 whitespace-nowrap ml-2">
            {formattedDate}
          </span>
        </div>
        <p className="text-sm text-gray-600 mt-1">{message}</p>
      </div>
      {!read && (
        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
      )}
    </div>
  );
};