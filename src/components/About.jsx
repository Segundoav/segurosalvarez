// src/components/about.jsx
import React from 'react';
import aboutImage from '../assets/myprofile.png';

const About = () => {
  return (
    <section id="about" className="p-8 bg-gray-100">
      <div className="max-w-4xl mx-auto flex items-center">
        <img src={aboutImage} alt="About" className="w-1/2 h-auto rounded-lg" />
        <div className="ml-8">
          <h2 className="text-1xl font-bold mb-4">¡Hola! mi nombre es Segundo Alvarez,y desde hace 8 años soy Corredor de Seguros autorizada por la Superintendencia de Bancos en Nicaragua 🇳🇮. Aliada comercial de las 5 compañías de seguros establecidas en el país.

Quiero ayudarte a que podas realmente gozar del presente sin preocupaciones 🍃

A través de esta plataforma digital voy a estar más cerca de vos para que conozcas todo lo que necesitas saber acerca de seguros y podas protegerte a vos y a los tuyos de una manera informada y responsabl</h2>
          <p className="text-lg">
            Codigo de corredor de la SBS: N-4917
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
