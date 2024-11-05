import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const Checkout = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="bg-white p-6 rounded-lg shadow mb-6">
            <h2 className="text-xl font-bold mb-4">Información de Contacto</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
                />
              </div>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
                />
              </div>
            </form>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Método de Pago</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="mercadopago"
                  name="payment"
                  className="h-4 w-4 text-cyan-600 focus:ring-cyan-500"
                />
                <label htmlFor="mercadopago" className="ml-3">
                  Mercado Pago
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="webpay"
                  name="payment"
                  className="h-4 w-4 text-cyan-600 focus:ring-cyan-500"
                />
                <label htmlFor="webpay" className="ml-3">
                  WebPay
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="redbanc"
                  name="payment"
                  className="h-4 w-4 text-cyan-600 focus:ring-cyan-500"
                />
                <label htmlFor="redbanc" className="ml-3">
                  RedBanc
                </label>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Resumen del Pedido</h2>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between">
                  <span>{item.name} x {item.quantity}</span>
                  <span>${(item.price * item.quantity).toLocaleString()}</span>
                </div>
              ))}
              <div className="border-t pt-4">
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>${total.toLocaleString()}</span>
                </div>
              </div>
            </div>
            <button className="w-full mt-6 bg-cyan-600 text-white py-3 rounded-lg hover:bg-cyan-700 transition">
              Confirmar Pedido
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;