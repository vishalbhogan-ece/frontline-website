import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 text-center">
      <h1 className="text-6xl font-bold text-blue-900">404</h1>
      <p className="text-2xl mt-4">Page not found</p>
      <Link to="/" className="mt-8 inline-block bg-blue-700 text-white px-6 py-3 rounded-lg">
        Go Home
      </Link>
    </div>
  );
}