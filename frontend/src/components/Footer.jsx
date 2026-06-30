// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold">Frontline Electronics</h3>
            <p className="mt-4 text-gray-400 text-sm">
              Engineering Intelligence Into Every Product
            </p>
            <p className="mt-2 text-gray-400 text-sm">
              Established 1993 | 3 Manufacturing Plants
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white transition">Services</Link></li>
              <li><Link to="/industries" className="hover:text-white transition">Industries</Link></li>
              <li><Link to="/careers" className="hover:text-white transition">Careers</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>📞 +91 98508 87921</li>
              <li>✉️ info@frontlineelectronics.com</li>
              <li>📍 Pune • Bengaluru • Manesar</li>
            </ul>
          </div>
          
          {/* Certifications */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Certifications</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>✓ IATF 16949</li>
              <li>✓ ISO 9001</li>
              <li>✓ ISO 14001</li>
              <li>✓ ISO 45001</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Frontline Electronics Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}