
// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      {/* Hero Section - Full Screen with Gradient Overlay */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/poster.jpg"
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/smt.webm" type="video/webm" />
          <source src="/smt.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
          <div className="max-w-3xl">
            <span className="inline-block bg-blue-600/20 text-blue-300 px-4 py-1 rounded-full text-sm font-medium mb-4">
              IATF 16949 • ISO 9001 • ISO 14001 • ISO 45001
            </span>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Engineering Intelligence Into Every Product
            </h1>

            <p className="mt-6 text-xl md:text-2xl text-gray-200 leading-relaxed">
              From Prototype to Mass Production — Reliable EMS solutions for
              Automotive, Industrial, Telecom, Medical & Defense sectors since
              1993.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition"
              >
                Request a Quote
              </Link>

              <Link
                to="/services"
                className="border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold transition"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-16 bg-white border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-blue-900">30+</p>
              <p className="text-gray-600 mt-1">Years of Excellence</p>
            </div>

            <div>
              <p className="text-4xl font-bold text-blue-900">3</p>
              <p className="text-gray-600 mt-1">Manufacturing Plants</p>
            </div>

            <div>
              <p className="text-4xl font-bold text-blue-900">4</p>
              <p className="text-gray-600 mt-1">Global Certifications</p>
            </div>

            <div>
              <p className="text-4xl font-bold text-blue-900">500+</p>
              <p className="text-gray-600 mt-1">Skilled Professionals</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Our Certifications
          </h2>

          <div className="flex flex-wrap justify-center gap-8">
            {["IATF 16949", "ISO 9001", "ISO 14001", "ISO 45001"].map(
              (cert) => (
                <div
                  key={cert}
                  className="bg-white px-6 py-3 rounded-lg shadow-sm border hover:shadow-md transition"
                >
                  <span className="font-semibold text-gray-800">{cert}</span>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

