import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const NavLink = ({ to, children }) => (
    <a
      href={to}
      className="text-white text-lg font-medium hover:text-gray-400 transition duration-200"
      onClick={() => setIsOpen(false)}
    >
      {children}
    </a>
  );

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={toggleMenu}
        className="fixed top-4 right-14 -translate-x-1/2 z-50 p-2 text-white bg-black rounded-md lg:hidden"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <nav
        className={`font-['comfortaa'] fixed top-0 right-0 h-full z-40 bg-black border-l border-gray-600 bg-opacity-90 backdrop-blur-md transition-all duration-300 ease-in-out ${
          isOpen ? "w-48" : "w-0 lg:w-48"
        }`}
      >
        <div className="flex flex-col h-full justify-center items-start p-5 lg:p-10 space-y-8">
          <div className="mb-8">
            <NavLink
              to="/"
              className="text-white text-3xl font-bold lowercase hover:text-gray-400 transition duration-200"
            >
              br.
            </NavLink>
          </div>
          <NavLink to="/work">Work</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/team">Team</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </nav>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={toggleMenu}
        />
      )}
    </>
  );
};

export default Navbar;
