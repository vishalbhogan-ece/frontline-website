import React from "react";
import RFQForm from "../components/RFQForm";

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold mb-10">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-4">Manufacturing Locations</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-xl">Pune</h3>
              <p>Chakan MIDC, Pune – 410501</p>
              <p>Phone: +91 20 1234 5678</p>
            </div>
            <div>
              <h3 className="font-semibold text-xl">Bengaluru</h3>
              <p>Bommasandra Industrial Area, Bengaluru – 560099</p>
              <p>Phone: +91 80 2345 6789</p>
            </div>
            <div>
              <h3 className="font-semibold text-xl">Manesar</h3>
              <p>IMT Manesar, Gurugram – 122051</p>
              <p>Phone: +91 124 3456 7890</p>
            </div>
          </div>
          <div className="mt-8">
            <p>Email: info@frontline-electronics.com</p>
            <p>General Enquiry: +91 98765 43210</p>
          </div>
        </div>

        <RFQForm />
      </div>
    </div>
  );
}