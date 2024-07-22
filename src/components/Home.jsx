import React from 'react';
import homeImage from '../assets/portada.jpg'; // Asegúrate de que este archivo existe

const Home = () => {
  return (
    <section id="home" className="home-section mt-16 md:mt-0 p-8 bg-gray-100 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 md:pr-8">
        <h1 className="text-3xl font-bold mb-4">Bienvenidos a "Seguros Alvarez"</h1>
        <p className="mb-4 ">"Ofrecemos los mejores seguros para ti y tu familia. Confía en nosotros para proteger lo que más valoras."</p>
      </div>
      <div className="md:w-1/2">
        <img src={homeImage} alt="Home" className="rounded-lg shadow-lg" />
      </div>
    </section>
  );
};

export default Home;