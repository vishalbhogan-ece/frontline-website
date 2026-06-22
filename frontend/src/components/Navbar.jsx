import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex flex-wrap justify-between items-center gap-4 p-5 bg-white shadow-md sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-blue-900">Frontline</h1>

      <div className="flex flex-wrap gap-x-6 gap-y-2">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <Link to="/about" className="hover:text-blue-600">About</Link>
        <Link to="/services" className="hover:text-blue-600">Services</Link>
        <Link to="/contact" className="hover:text-blue-600">Contact</Link>
      </div>
    </nav>
  );
}
