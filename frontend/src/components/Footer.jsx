import React from "react";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-2xl font-bold">Frontline Electronics</h3>
        <p className="mt-4">Electronics Manufacturing Services</p>
        <p className="mt-2">Pune • Bengaluru • Manesar</p>
        <div className="mt-6 flex gap-6 text-sm">
          <a href="mailto:info@frontline-electronics.com">info@frontline-electronics.com</a>
          <a href="tel:+911234567890">+91 12345 67890</a>
        </div>
        <div className="mt-4 text-xs opacity-70">
          &copy; {new Date().getFullYear()} Frontline Electronics. All rights reserved.
        </div>
      </div>
    </footer>
  );
}