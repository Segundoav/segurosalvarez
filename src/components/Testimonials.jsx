import React from 'react';
import testimonial1 from '../assets/persona1.jpeg';  // Usa tus propias imágenes
import testimonial2 from '../assets/persona2.jpeg';
import testimonial3 from '../assets/persona3.jpeg';

const Testimonials = () => {
  return (
    <section id="testimonials" className="p-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
        <ul className="space-y-4">
          <li className="bg-gray-200 p-4 rounded-lg shadow-md">
            <img src={testimonial1} alt="Testimonial 1" className="w-16 h-16 rounded-full mb-4" />
            <p>""Decidí trabajar con un corredor de seguros debido a su conocimiento experto en el campo. Me guiaron a través de las diferentes opciones disponibles y me ayudaron a tomar la mejor decisión para proteger a mi familia.""</p>
          </li>
          <li className="bg-gray-200 p-4 rounded-lg shadow-md">
            <img src={testimonial2} alt="Testimonial 2" className="w-16 h-16 rounded-full mb-4" />
            <p>"Cuando tuve un problema con mi reclamo, mi corredor de seguros actuó rápidamente y me ayudó a resolver la situación de manera efectiva. Su apoyo fue invaluable durante todo el proceso."</p>
          </li>
          <li className="bg-gray-200 p-4 rounded-lg shadow-md">
            <img src={testimonial3} alt="Testimonial 3" className="w-16 h-16 rounded-full mb-4" />
            <p>"El corredor de seguros no solo me ayudó a encontrar un seguro asequible, sino que también se aseguró de que entendiera todos los términos del contrato. Su atención personalizada hizo toda la diferencia."</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Testimonials;
