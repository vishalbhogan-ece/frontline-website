import React from "react";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-screen">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/poster.jpg"
          preload="metadata"
          className="absolute w-full h-full object-cover"
        >
          <source src="/smt.webm" type="video/webm" />
          <source src="/smt.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">
          <h1 className="text-6xl font-bold max-w-5xl">
            Electronics Manufacturing Services
          </h1>
          <p className="mt-6 text-xl max-w-3xl">
            From Prototype Development to Mass Production.
            Reliable EMS solutions for Automotive, Industrial,
            Telecom and Consumer Electronics.
          </p>
          <div className="mt-8 flex gap-4 flex-wrap justify-center">
            <a
              href="/contact"
              className="bg-blue-700 px-8 py-4 rounded-lg hover:bg-blue-800 transition"
            >
              Request Quote
            </a>
            <button className="border border-white px-8 py-4 rounded-lg hover:bg-white/10 transition">
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold text-xl mb-3">PCB Assembly</h3>
              <p>SMT, Through-Hole and Mixed Technology Assembly.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold text-xl mb-3">Testing</h3>
              <p>AOI, Flying Probe and Functional Testing.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold text-xl mb-3">Product Development</h3>
              <p>Embedded Electronics and PCB Design.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold text-xl mb-3">Box Build</h3>
              <p>Complete System Integration Solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Manufacturing Facilities</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="shadow rounded-xl p-6">
              <h3 className="font-bold text-2xl">Pune</h3>
              <p className="mt-4">Chakan MIDC Manufacturing Facility</p>
            </div>
            <div className="shadow rounded-xl p-6">
              <h3 className="font-bold text-2xl">Bengaluru</h3>
              <p className="mt-4">Bommasandra Industrial Area</p>
            </div>
            <div className="shadow rounded-xl p-6">
              <h3 className="font-bold text-2xl">Manesar</h3>
              <p className="mt-4">IMT Manesar Manufacturing Facility</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}