import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-between ml-10">
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul>
            <li className="mb-2">
              <a href="#about" className="hover:underline">About Us</a>
            </li>
            <li className="mb-2">
              <a href="#services" className="hover:underline">Services</a>
            </li>
            <li className="mb-2">
              <a href="#contact" className="hover:underline">Contact</a>
            </li>
            <li className="mb-2">
              <a href="#faq" className="hover:underline">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/128/733/733547.png" alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/128/3256/3256013.png" alt="Twitter" className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png" alt="Instagram" className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="LinkedIn" className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p>Email: <a href="mailto:info@example.com" className="hover:underline">info@example.com</a></p>
          <p>Phone: <a href="tel:+1234567890" className="hover:underline">+1 234 567 890</a></p>
        </div>
      </div>
      <div className="text-center mt-6">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
