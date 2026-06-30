// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { 
      label: "Services", 
      dropdown: [
        { to: "/services", label: "All Services" },
        { to: "/services#pcb", label: "PCB Assembly" },
        { to: "/services#box-build", label: "Box Build" },
        { to: "/services#testing", label: "Testing & Inspection" }
      ]
    },
    { to: "/industries", label: "Industries" },
    { to: "/infrastructure", label: "Infrastructure" },
    { to: "/quality", label: "Quality" },
    { to: "/careers", label: "Careers" },
    { to: "/contact", label: "Contact" }
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-900">
            Frontline Electronics
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group">
                {link.dropdown ? (
                  <>
                    <button className="text-gray-700 hover:text-blue-700 font-medium py-2">
                      {link.label} ▼
                    </button>
                    <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          className="block px-4 py-3 hover:bg-blue-50 text-gray-700"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link to={link.to} className="text-gray-700 hover:text-blue-700 font-medium">
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Get Quote
            </Link>
          </div>
          
          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.dropdown ? (
                  <>
                    <button
                      onClick={() => setDropdownOpen(dropdownOpen === link.label ? null : link.label)}
                      className="block w-full text-left py-2 text-gray-700 font-medium"
                    >
                      {link.label} {dropdownOpen === link.label ? "▲" : "▼"}
                    </button>
                    {dropdownOpen === link.label && (
                      <div className="pl-4">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.to}
                            to={item.to}
                            className="block py-2 text-gray-600"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.to}
                    className="block py-2 text-gray-700 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}