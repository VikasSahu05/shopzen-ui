import React from 'react';
import { FiSearch, FiBell } from 'react-icons/fi';

const Navbar = () => {
  return (
    <header className="flex items-center justify-between bg-white px-8 h-20 border-b border-gray-100">
      {/* Search Bar */}
      <div className="flex-1 flex">
        <div className="relative w-full max-w-md flex items-center">
          {/* Search Icon */}
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            <FiSearch size={18} />
          </span>
          {/* Input */}
          <input
            type="text"
            placeholder="Search or type command...."
            className="w-full pl-12 pr-16 py- text-base border border-gray-200 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-100 placeholder:text-gray-400"
            style={{ height: '44px' }}
          />
          {/* Shortcut key */}
          <span className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
            <span className="px-1 py-0.2 bg-gray-100 border border-gray-100 rounded text-lg text-gray-400 font-mono shadow-sm">⌘ /</span>
          </span>
        </div>
      </div>
      {/* Right: Notification and Avatar */}
      <div className="flex items-center gap-4 ml-8">
        {/* Notification Bell */}
        <button className="w-11 h-11 flex items-center justify-center border border-gray-200 rounded-xl hover:bg-gray-50 transition">
          <FiBell size={22} className="text-gray-400" />
        </button>
        {/* User Avatar */}
        <div className="w-11 h-11 rounded-full overflow-hidden flex items-center justify-center bg-gray-50">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="User Avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
