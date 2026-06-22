import React from "react";
export default function Home() {
  return (
    <div>

      {/* HERO */}
      <section className="relative h-screen text-white">
        <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover">
          <source src="/smt.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
          <h1 className="text-5xl font-bold">Electronics Manufacturing</h1>
          <p className="mt-4">Precision PCB Assembly & Embedded Systems</p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="p-10 bg-gray-100 text-center">
        <h2 className="text-3xl mb-6">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white shadow-lg rounded-xl hover:scale-105 transition">
            PCB Assembly
          </div>

          <div className="p-6 bg-white shadow-lg rounded-xl hover:scale-105 transition">
            Embedded Systems
          </div>

          <div className="p-6 bg-white shadow-lg rounded-xl hover:scale-105 transition">
            Testing & QA
          </div>
        </div>
      </section>

      {/* IMAGE */}
      <section className="p-10 text-center">
        <img src="/factory.jpg" alt="Electronics manufacturing factory floor" className="mx-auto rounded-xl shadow-lg" />
      </section>

    </div>
  );
}
