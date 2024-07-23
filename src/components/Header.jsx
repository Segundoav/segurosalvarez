import React, { useState } from 'react';
import logo from '../assets/logoseguros.png';
import lineas from '../assets/lineas.svg';
import '../styles/custom.css'; // Asegúrate de importar el archivo CSS

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-blue-600 p-4 text-white flex justify-between items-center relative h-16">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-18 w-20 mr-4" />
        <span className="text-2xl font-bold">Seguros Alvarez</span>
      </div>
      <nav className="hidden md:flex space-x-4">
        <a href="#home" className="hover:underline">Portada</a>
        <a href="#portfolio" className="hover:underline">Portafolio</a>
        <a href="#about" className="hover:underline">Acerca de mi</a>
        <a href="#testimonials" className="hover:underline">Testimonios</a>
        <a href="#contact" className="hover:underline">Contactanos</a>
      </nav>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="menu-icon"> {/* Añadir la clase aquí */}
          <img src={lineas} alt="Menu" className="h-6 w-6" />
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-16 right-0 bg-blue-600 p-4 flex flex-col space-y-4 z-50">
          <a href="#home" onClick={toggleMenu} className="hover:underline">Portada</a>
          <a href="#portfolio" onClick={toggleMenu} className="hover:underline">Portafolio</a>
          <a href="#about" onClick={toggleMenu} className="hover:underline">About Me</a>
          <a href="#testimonials" onClick={toggleMenu} className="hover:underline">Testimonial</a>
          <a href="#contact" onClick={toggleMenu} className="hover:underline">Contact Me</a>
        </div>
      )}
    </header>
  );
};

export default Header;


