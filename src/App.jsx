import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import './styles/custom.css';
import emailjs from 'emailjs-com';
emailjs.init("YOUR_USER_ID"); // Coloca tu User ID aquí


function App() {
  return (
    <div className="px-18 p-5 App">
      <Header />
      <Home />
      <Portfolio />
      <About />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
