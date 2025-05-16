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
            href="#"
            className="text-green-600 font-semibold border border-green-500 px-4 py-1 rounded-md"
          >
            Home
          </NavLink>
          <NavLink
            to="rs"
            className="text-gray-700 hover:border hover:border-green-500  font-semibold px-4 py-1 rounded-md"
          >
            Listed Books
          </NavLink>
          <NavLink to="/r" className="text-gray-700 font-semibold">
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
          <div className="absolute top-14 left-4 bg-white rounded-md shadow-md p-4 space-y-2 z-50 md:hidden">
            <a
              href="#"
              className="block text-green-600 font-semibold border border-green-500 px-4 py-1 rounded-md"
            >
              Home
            </a>
            <a href="#" className="block text-gray-700">
              Listed Books
            </a>
            <a href="#" className="block text-gray-700">
              Pages to Read
            </a>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
