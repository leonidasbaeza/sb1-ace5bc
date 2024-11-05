import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-6">Tu Mejor Versión Comienza Aquí</h1>
            <p className="text-xl mb-8">Descubre nuestra selección premium de suplementos deportivos</p>
            <Link
              to="/products"
              className="inline-flex items-center px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition"
            >
              Ver Productos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Categorías Populares</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Whey Protein',
              image: 'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?auto=format&fit=crop&q=80',
              link: '/products/whey-protein'
            },
            {
              title: 'Pre-Workout',
              image: 'https://images.unsplash.com/photo-1546483875-ad9014c88eba?auto=format&fit=crop&q=80',
              link: '/products/pre-workout'
            },
            {
              title: 'Creatina',
              image: 'https://images.unsplash.com/photo-1579126038374-6064e9370f0f?auto=format&fit=crop&q=80',
              link: '/products/creatine'
            }
          ].map((category) => (
            <Link
              key={category.title}
              to={category.link}
              className="relative h-64 group overflow-hidden rounded-lg"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">{category.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;