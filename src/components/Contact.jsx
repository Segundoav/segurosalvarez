import React from 'react';
import emailjs from 'emailjs-com';
import facebookIcon from '../assets/facebook.png';
import twitterIcon from '../assets/twitter.png';
import linkedinIcon from '../assets/linkedin.png';
import instagramIcon from '../assets/instagram.jpeg';

const ContactMe = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sc50tu7', 'template_I4b7tve', e.target, 'IrkZBm2LX6XWCygC-LXLT')
      .then((result) => {
        console.log('Success:', result.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.error('Error:', error.text);
        alert('Failed to send message. Please try again.');
      });

    e.target.reset(); // Clear form fields after submission
  };

  return (
    <section id="contact" className="px-2 py-8 bg-gray-100">
      <div className="max-w-lg mx-auto">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              rows="4"
              required
            ></textarea>
          </div>
          <div>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md">Send</button>
          </div>
        </form>
        <div className="mt-8 flex justify-center space-x-4">
          <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" className="w-8 h-8" />
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter" className="w-8 h-8" />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8" />
          </a>
          <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;





