import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() 
{
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <div>
          <h1 className="text-2xl font-bold text-blue-900">
            Frontline Electronics
          </h1>
        </div>

        <div className="flex gap-6 text-sm font-medium">

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/industries">Industries</Link>
          <Link to="/infrastructure">Infrastructure</Link>
          <Link to="/contact">Contact</Link>

        </div>
      </div>
    </nav>
  );
}