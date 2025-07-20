import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../store/auth";

function Header() {
  const [isLoggedIn, user] = useAuthStore((state) => [state.isLoggedIn, state.user]);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white shadow-md">
      <nav className="px-6 py-4 flex flex-col md:flex-row justify-between items-center">
        {/* Brand */}
        <div className="flex justify-between items-center w-full md:w-auto">
          <Link
            to="/"
            className="text-3xl font-roboto font-bold text-white hover:text-blue-400 transition duration-300"
          >
            Blog<span className="text-green-500">.spot</span>
          </Link>

          {/* Hamburger Toggler (Visible on mobile) */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            ☰
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`flex-col md:flex md:flex-row md:space-x-6 mt-4 md:mt-0 w-full md:w-auto ${
            menuOpen ? "flex" : "hidden"
          }`}
        >
          <li>
            <Link to="/" className="hover:text-blue-400 font-semibold">
              Home
            </Link>
          </li>
          <li className="relative group">
            <button className="hover:text-blue-400 font-semibold focus:outline-none">
              Dashboard ▾
            </button>
            <ul className="absolute hidden group-hover:block bg-gray-800 mt-2 rounded shadow-lg z-50">
              <li>
                <Link to="/dashboard/" className="block px-4 py-2 hover:bg-gray-700">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/posts/" className="block px-4 py-2 hover:bg-gray-700">
                  Posts
                </Link>
              </li>
              <li>
                <Link to="/add-post/" className="block px-4 py-2 hover:bg-gray-700">
                  Add Post
                </Link>
              </li>
              <li>
                <Link to="/comments/" className="block px-4 py-2 hover:bg-gray-700">
                  Comments
                </Link>
              </li>
              <li>
                <Link to="/notifications/" className="block px-4 py-2 hover:bg-gray-700">
                  Notifications
                </Link>
              </li>
              <li>
                <Link to="/profile/" className="block px-4 py-2 hover:bg-gray-700">
                  Profile
                </Link>
              </li>
            </ul>
          </li>

          {/* Auth Buttons */}
          <li>
            {isLoggedIn() ? (
              <div className="flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0">
                <Link
                  to="/dashboard/"
                  className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded"
                >
                  Dashboard
                </Link>
                <Link
                  to="/logout/"
                  className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
                >
                  Logout
                </Link>
              </div>
            ) : (
              <div className="flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0">
                <Link
                  to="/register/"
                  className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded"
                >
                  Register
                </Link>
                <Link
                  to="/login/"
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
                >
                  Login
                </Link>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;