import React from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../store/auth";

function Header() {
  const [isLoggedIn, user] = useAuthStore((state) => [state.isLoggedIn, state.user]);

  return (
    <header className="bg-gray-900 h-50 text-white">
      <nav className="flex flex-col md:flex-row justify-between items-center px-6 py-4 shadow-md">
        {/* Brand */}
        <Link to="/" className="text-3xl font-roboto font-bold text-white hover:text-blue-400 transition duration-300">
          Blog<span className="text-green-500 text-3xl">.spot</span>
        </Link>

        {/* Search Bar */}
        {/* <div className="mt-4 md:mt-0">
          <form className="flex items-center bg-gray-800 rounded">
            <input
              className="bg-gray-700 text-white px-4 py-2 rounded-l outline-none placeholder-gray-300"
              type="search"
              placeholder="Search Articles"
              aria-label="Search"
            />
            <Link
              to="/search/"
              className="px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded-r text-white"
            >
              <i className="bi bi-search"></i>
            </Link>
          </form>
        </div> */}

        {/* Navigation Links */}
        <ul className="flex space-x-6 mt-4 md:mt-0">
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
              <div className="flex space-x-2">
                <Link to="/dashboard/" className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded">
                  Dashboard
                </Link>
                <Link to="/logout/" className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded">
                  Logout
                </Link>
              </div>
            ) : (
              <div className="flex space-x-2">
                <Link to="/register/" className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded">
                  Register
                </Link>
                <Link to="/login/" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">
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