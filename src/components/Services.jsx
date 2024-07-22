// src/components/Services.jsx
import React from 'react';

const Services = () => {
  return (
    <section id="services" className="p-8">
      <h2 className="text-3xl font-bold mb-4 text-center">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-4 border rounded-lg shadow-sm">
          <h3 className="text-2xl font-semibold mb-2">Service 1</h3>
          <p>Detailed description of Service 1...</p>
        </div>
        <div className="p-4 border rounded-lg shadow-sm">
          <h3 className="text-2xl font-semibold mb-2">Service 2</h3>
          <p>Detailed description of Service 2...</p>
        </div>
        <div className="p-4 border rounded-lg shadow-sm">
          <h3 className="text-2xl font-semibold mb-2">Service 3</h3>
          <p>Detailed description of Service 3...</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
