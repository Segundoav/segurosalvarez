import React from "react";
import portfolio1 from "../assets/hogar.jpg"; // Asegúrate de que las rutas sean correctas
import portfolio2 from "../assets/salud.jpg";
import portfolio3 from "../assets/empresa.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio" className="p-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gray-200 p-4 rounded-lg shadow-md">
            <img src={portfolio1} alt="Project 1" className="w-full h-auto rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">Seguros de hogar</h3>
            <p className="text-base">Adquirir una vivienda es una decisión muy importante para las personas. La mayoría debe trabajar muchos años antes de juntar la inicial y endeudarse por un largo periodo para cumplir con el sueño de la casa o departamento propio. Con tanto esfuerzo y sacrificios involucrados, ¿te imaginas que tu hogar sufra de algún siniestro que no puedas enfrentar?.</p>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg shadow-md">
            <img src={portfolio2} alt="Project 2" className="w-full h-auto rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">Seguros de salud</h3>
            <p className="text-base">La salud es lo más valioso que tenemos y para cuidarla es vital contar con un seguro de salud que nos garantice una atención oportuna, pues nadie está libre de un accidente o una enfermedad, sobre todo en tiempos de pandemia. Pese a ello, más del 26% de los habitantes de Lima no poseen un seguro de salud, según el INEI.</p>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg shadow-md">
            <img src={portfolio3} alt="Project 3" className="w-full h-auto rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">Seguros de empresa</h3>
            <p className="text-base">Los seguros para emptresas, tiene por finalidad proteger tus activos de desastres naturales, incendios, accidentes, daños de terceros u otros riesgos. Antes de contratarlo siempre es recomendable que elabores un mapa de riesgos de tu empresa, de esa forma podrás elegir la alternativa más adecuada para tu negocio.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
