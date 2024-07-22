// src/components/about.jsx
import React from 'react';
import aboutImage from '../assets/myprofile.png';

const About = () => {
  return (
    <section id="about" className="p-8 bg-gray-100">
      <div className="max-w-4xl mx-auto flex items-center">
        <img src={aboutImage} alt="About" className="w-1/2 h-auto rounded-lg" />
        <div className="ml-8">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg">
            Hi, I'm [Your Name], a professional insurance agent with over 10 years of experience...
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
