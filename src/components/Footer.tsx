import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TuSuplemento.cl</h3>
            <p className="text-gray-400">Lo tenemos todo!</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-gray-400 hover:text-cyan-400">Productos</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-cyan-400">Sobre Nosotros</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-cyan-400">Contacto</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Categorías</h4>
            <ul className="space-y-2">
              <li><Link to="/products/whey-protein" className="text-gray-400 hover:text-cyan-400">Whey Protein</Link></li>
              <li><Link to="/products/pre-workout" className="text-gray-400 hover:text-cyan-400">Pre-Workout</Link></li>
              <li><Link to="/products/creatine" className="text-gray-400 hover:text-cyan-400">Creatina</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} TuSuplemento.cl. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;