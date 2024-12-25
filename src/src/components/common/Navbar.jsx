import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-lg border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="text-xl font-bold text-blue-600 hover:text-blue-700 transition-colors duration-200"
            >
              Communication Calendar
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-6">
            <Link
              to="/"
              className={`${
                isActiveLink('/')
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
              } transition-all duration-200 py-5`}
            >
              Dashboard
            </Link>
            <Link
              to="/admin"
              className={`${
                isActiveLink('/admin')
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
              } transition-all duration-200 py-5`}
            >
              Admin
            </Link>
            <Link
              to="/admin/company/new"
              className={`${
                isActiveLink('/admin/company/new')
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
              } transition-all duration-200 py-5`}
            >
              Add Company
            </Link>
            <Link
              to="/communications"
              className={`${
                isActiveLink('/communications')
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
              } transition-all duration-200 py-5`}
            >
              Communications
            </Link>
            <Link
              to="/calendar"
              className={`${
                isActiveLink('/calendar')
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
              } transition-all duration-200 py-5`}
            >
              Calendar
            </Link>

            {/* Notifications Dropdown */}
            <div className="relative group">
              <button className="relative p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-600 group-hover:text-blue-600 transition-colors duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center animate-pulse">
                  3
                </span>
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 hidden group-hover:block border border-gray-100">
                <div className="px-4 py-2 text-sm font-semibold text-gray-700">Notifications</div>
                <div className="border-t border-gray-100"></div>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                >
                  Overdue: Example Corp
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                >
                  Due Today: Tech Inc
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
