import React from "react";

export default function Home() {
  return (
    <div>

      {/* HERO */}
      <section className="relative h-screen text-white">
        <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover">
          <source src="/smt.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
          <h1 className="text-5xl font-bold leading-tight">
            End-to-End Electronics Manufacturing Services
          </h1>

          <p className="mt-6 max-w-2xl">
            Delivering high-quality PCB assembly, product design, and testing solutions for automotive, industrial, and consumer electronics sectors.
          </p>

          <a href="/contact" className="mt-6 bg-blue-600 px-6 py-3 rounded-xl">
            Request a Quote
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section className="p-10 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl">
            <h3 className="text-xl font-semibold">PCB Assembly</h3>
            <p>SMT & Through-hole assembly with high precision and quality control.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl">
            <h3 className="text-xl font-semibold">Product Design</h3>
            <p>Embedded system design and custom electronics development.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl">
            <h3 className="text-xl font-semibold">Testing & QA</h3>
            <p>Comprehensive inspection and testing for reliable performance.</p>
          </div>

        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="p-10 text-center">
        <h2 className="text-3xl font-bold mb-8">Industries We Serve</h2>

        <div className="grid md:grid-cols-4 gap-6">
          <div>Automotive</div>
          <div>Industrial</div>
          <div>Telecom</div>
          <div>Consumer Electronics</div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 text-white text-center p-10">
        <h2 className="text-3xl font-bold">Looking for a Manufacturing Partner?</h2>
        <a href="/contact" className="mt-4 inline-block bg-white text-blue-700 px-6 py-3 rounded-xl">
          Get a Quote
        </a>
      </section>

    </div>
  );
}