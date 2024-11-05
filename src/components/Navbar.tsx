import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ShoppingCart, Menu, User } from 'lucide-react';
import { RootState } from '../store';

const Navbar = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const user = useSelector((state: RootState) => state.auth.user);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-black text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/logo.svg" alt="TuSuplemento.cl" className="h-12" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/products" className="hover:text-cyan-400 transition">Productos</Link>
            <div className="relative group">
              <button className="hover:text-cyan-400 transition">
                Categorías
              </button>
              <div className="absolute z-50 hidden group-hover:block w-48 bg-white text-gray-800 shadow-lg rounded-md mt-2">
                <Link to="/products/whey-protein" className="block px-4 py-2 hover:bg-gray-100">Whey Protein</Link>
                <Link to="/products/pre-workout" className="block px-4 py-2 hover:bg-gray-100">Pre-Workout</Link>
                <Link to="/products/creatine" className="block px-4 py-2 hover:bg-gray-100">Creatina</Link>
                <Link to="/products/bcaa" className="block px-4 py-2 hover:bg-gray-100">BCAA</Link>
                <Link to="/products/vitamins" className="block px-4 py-2 hover:bg-gray-100">Vitaminas</Link>
                <Link to="/products/weight-gainers" className="block px-4 py-2 hover:bg-gray-100">Ganadores de Peso</Link>
                <Link to="/products/protein-bars" className="block px-4 py-2 hover:bg-gray-100">Barras Proteicas</Link>
                <Link to="/products/amino-acids" className="block px-4 py-2 hover:bg-gray-100">Aminoácidos</Link>
                <Link to="/products/fat-burners" className="block px-4 py-2 hover:bg-gray-100">Quemadores</Link>
                <Link to="/products/accessories" className="block px-4 py-2 hover:bg-gray-100">Accesorios</Link>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {user ? (
              <Link to={user.isAdmin ? "/admin" : "/profile"} className="hover:text-cyan-400">
                <User className="h-6 w-6" />
              </Link>
            ) : (
              <Link to="/login" className="hover:text-cyan-400">
                Iniciar Sesión
              </Link>
            )}
            <Link to="/cart" className="relative hover:text-cyan-400">
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-cyan-400 text-black rounded-full h-5 w-5 flex items-center justify-center text-xs">
                  {totalItems}
                </span>
              )}
            </Link>
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 px-4 py-2">
          <Link to="/products" className="block py-2">Productos</Link>
          <div className="space-y-1">
            <Link to="/products/whey-protein" className="block py-2">Whey Protein</Link>
            <Link to="/products/pre-workout" className="block py-2">Pre-Workout</Link>
            <Link to="/products/creatine" className="block py-2">Creatina</Link>
            {/* Add other categories */}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;