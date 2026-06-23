import React from "react";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">

      <h1 className="text-5xl font-bold mb-10">
        About Frontline Electronics
      </h1>

      <p className="text-lg leading-8">
        Frontline Electronics provides Electronics
        Manufacturing Services (EMS) to customers
        across Automotive, Industrial, Telecom,
        Consumer Electronics, Medical and Defense sectors.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mt-16">

        <div className="bg-white shadow p-6 rounded-xl">
          <h3 className="font-bold text-xl">
            Pune Facility
          </h3>
        </div>

        <div className="bg-white shadow p-6 rounded-xl">
          <h3 className="font-bold text-xl">
            Bengaluru Facility
          </h3>
        </div>

        <div className="bg-white shadow p-6 rounded-xl">
          <h3 className="font-bold text-xl">
            Manesar Facility
          </h3>
        </div>

      </div>

    </div>
  );
}