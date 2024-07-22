// src/components/Home.jsx
import React from 'react';
import '../styles/custom.css';
import efecto1 from '../assets/efecto1.png';
import efecto2 from '../assets/efecto2.png';
import efecto3 from '../assets/efecto3.png';
import efecto4 from '../assets/efecto4.png';

const images = [efecto1, efecto2, efecto3, efecto4];

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <h1 className="text-5xl font-bold mb-4">Corredor de seguros</h1>
        <p className="text-lg">"Nuestra mayor preocupación es que siempre estés protegido"</p>
      </div>
      <div className="carousel">
        <div className="carousel-wrapper">
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Effect ${index + 1}`} className="carousel-image" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
