import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Bell, 
  BookOpen, 
  Home, 
  Menu, 
  Search, 
  User, 
  X, 
  Bookmark, 
  GraduationCap 
} from 'lucide-react';
import { Avatar } from '../ui/Avatar';
import { Button } from '../ui/Button';
import { NotificationItem } from '../NotificationItem';
import { currentUser, getUnreadNotificationsCount, getUserNotifications } from '../../data/mockData';
import { Badge } from '../ui/Badge';
import { cn } from '../../lib/utils';

const NavItem: React.FC<{
  to: string;
  icon: React.ReactNode;
  label: string;
  active: boolean;
}> = ({ to, icon, label, active }) => (
  <Link
    to={to}
    className={cn(
      "flex items-center gap-2 px-4 py-2 rounded-md transition-colors",
      active
        ? "bg-blue-50 text-blue-700"
        : "text-gray-700 hover:bg-gray-100"
    )}
  >
    {icon}
    <span>{label}</span>
  </Link>
);

export const Navbar: React.FC = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  
  const unreadCount = getUnreadNotificationsCount(currentUser.id);
  const notifications = getUserNotifications(currentUser.id);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleSearch = () => setSearchOpen(!searchOpen);
  const toggleNotifications = () => {
    setNotificationsOpen(!notificationsOpen);
    if (notificationsOpen) {
      // In a real app, we would mark notifications as read here
    }
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo & brand */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">LearnHub</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavItem 
              to="/" 
              icon={<Home size={18} />} 
              label="Dashboard" 
              active={location.pathname === '/'} 
            />
            <NavItem 
              to="/courses" 
              icon={<BookOpen size={18} />} 
              label="Courses" 
              active={location.pathname.includes('/courses')} 
            />
            <NavItem 
              to="/bookmarks" 
              icon={<Bookmark size={18} />} 
              label="Bookmarks" 
              active={location.pathname === '/bookmarks'} 
            />
          </nav>

          {/* Right side controls */}
          <div className="flex items-center space-x-3">
            <button 
              onClick={toggleSearch}
              className="p-2 text-gray-500 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Search"
            >
              <Search size={20} />
            </button>

            <div className="relative">
              <button 
                onClick={toggleNotifications}
                className="p-2 text-gray-500 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Notifications"
              >
                <Bell size={20} />
                {unreadCount > 0 && (
                  <span className="absolute top-0 right-0 block h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
                    {unreadCount}
                  </span>
                )}
              </button>

              {/* Notifications dropdown */}
              {notificationsOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 z-50">
                  <div className="p-3 border-b border-gray-200 flex justify-between items-center">
                    <h3 className="font-medium">Notifications</h3>
                    <Badge variant="primary" size="sm">
                      {unreadCount} new
                    </Badge>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {notifications.length > 0 ? (
                      notifications.map(notification => (
                        <NotificationItem 
                          key={notification.id} 
                          notification={notification} 
                          onClick={() => setNotificationsOpen(false)}
                        />
                      ))
                    ) : (
                      <div className="p-4 text-center text-gray-500">
                        No notifications
                      </div>
                    )}
                  </div>
                  <div className="p-2 border-t border-gray-200">
                    <Link 
                      to="/notifications" 
                      className="block w-full text-center text-sm text-blue-600 hover:text-blue-800 py-1"
                      onClick={() => setNotificationsOpen(false)}
                    >
                      See all notifications
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link to="/profile" className="flex items-center">
              <Avatar 
                src={currentUser.avatar} 
                name={currentUser.name} 
                size="sm" 
                className="border-2 border-white hover:border-blue-200 transition-colors"
              />
            </Link>

            {/* Mobile menu button */}
            <button 
              onClick={toggleMenu}
              className="md:hidden p-2 text-gray-500 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div className="py-3 border-t border-gray-200">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search for courses, lessons..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                autoFocus
              />
              <button 
                onClick={toggleSearch}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                <X size={18} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-3 space-y-1">
            <NavItem 
              to="/" 
              icon={<Home size={18} />} 
              label="Dashboard" 
              active={location.pathname === '/'} 
            />
            <NavItem 
              to="/courses" 
              icon={<BookOpen size={18} />} 
              label="Courses" 
              active={location.pathname.includes('/courses')} 
            />
            <NavItem 
              to="/bookmarks" 
              icon={<Bookmark size={18} />} 
              label="Bookmarks" 
              active={location.pathname === '/bookmarks'} 
            />
            <NavItem 
              to="/profile" 
              icon={<User size={18} />} 
              label="Profile" 
              active={location.pathname === '/profile'} 
            />
          </div>
        </div>
      )}
    </header>
  );
};