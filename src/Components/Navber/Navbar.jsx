import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="container mx-auto">
      <header className="w-full px-4 py-3 md:px-8 flex items-center justify-between  relative my-5">
        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Logo */}
        <div className="text-xl font-bold mx-auto md:mx-0 md:text-2xl">
          Book Vibe
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink
            to="/"
            className="text-gray-700 hover:border hover:border-green-500  font-semibold px-4 py-1 rounded-md"
          >
            Home
          </NavLink>
          <NavLink
            to="listedBooks"
            className="text-gray-700 hover:border hover:border-green-500  font-semibold px-4 py-1 rounded-md"
          >
            Listed Books
          </NavLink>
          <NavLink
            to="/r"
            className="text-gray-700 hover:border hover:border-green-500  font-semibold px-4 py-1 rounded-md"
          >
            Pages to Read
          </NavLink>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <button className="bg-green-500 text-white font-semibold px-4 py-1 rounded-md hover:bg-green-600 transition">
            Sign In
          </button>
          {/* Hide Sign Up on mobile */}
          <button className="hidden md:inline bg-sky-400 text-white font-semibold px-4 py-1 rounded-md hover:bg-sky-500 transition">
            Sign Up
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="absolute top-16 left-4 right-4 bg-white rounded-lg shadow-lg p-5 space-y-3 z-50 md:hidden transition-all duration-300">
            <NavLink
              to="/"
              className="block text-gray-800 font-medium px-4 py-2 rounded hover:bg-green-100 transition"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/listedBooks"
              className="block text-gray-800 font-medium px-4 py-2 rounded hover:bg-green-100 transition"
              onClick={() => setMenuOpen(false)}
            >
              Listed Books
            </NavLink>
            <NavLink
              to="/a"
              className="block text-gray-800 font-medium px-4 py-2 rounded hover:bg-green-100 transition"
              onClick={() => setMenuOpen(false)}
            >
              Pages to Read
            </NavLink>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
