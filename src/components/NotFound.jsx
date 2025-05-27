import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-white to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-md px-4">
      <div className="text-center p-10 bg-white/70 dark:bg-gray-900/80 backdrop-blur-md rounded-3xl shadow-xl max-w-lg w-full border border-gray-200 dark:border-gray-700">
        <div className="flex justify-center mb-6">
          <AlertTriangle className="text-red-500 dark:text-red-400" size={48} />
        </div>
        <h1 className="text-5xl font-extrabold text-gray-800 dark:text-white mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-2">Page Not Found</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-200 shadow-md"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
