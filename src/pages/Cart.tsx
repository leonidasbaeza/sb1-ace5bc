import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Trash2 } from 'lucide-react';
import { RootState } from '../store';
import { removeFromCart, updateQuantity } from '../store/cartSlice';

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8">Carrito de Compras</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 mb-4">Tu carrito está vacío</p>
          <Link
            to="/products"
            className="inline-block bg-cyan-600 text-white px-6 py-2 rounded-lg hover:bg-cyan-700 transition"
          >
            Ver Productos
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center border-b py-4">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded"
                />
                <div className="flex-grow ml-4">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-600">${item.price.toLocaleString()}</p>
                  <div className="flex items-center mt-2">
                    <input
                      type="number"
                      min="1"
                      max={item.stock}
                      value={item.quantity}
                      onChange={(e) => dispatch(updateQuantity({
                        id: item.id,
                        quantity: parseInt(e.target.value)
                      }))}
                      className="w-16 border rounded p-1"
                    />
                    <button
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="ml-4 text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                <div className="font-semibold">
                  ${(item.price * item.quantity).toLocaleString()}
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-bold mb-4">Resumen</h2>
              <div className="flex justify-between mb-4">
                <span>Subtotal</span>
                <span>${total.toLocaleString()}</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between font-bold mb-4">
                  <span>Total</span>
                  <span>${total.toLocaleString()}</span>
                </div>
                <Link
                  to="/checkout"
                  className="block w-full bg-cyan-600 text-white text-center py-3 rounded-lg hover:bg-cyan-700 transition"
                >
                  Proceder al Pago
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;