import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { collection, addDoc, updateDoc, doc, deleteDoc, getDocs } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../firebase/config';
import { RootState } from '../store';
import { Product, Category } from '../types';
import { v4 as uuidv4 } from 'uuid';

const Admin = () => {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.auth.user);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.isAdmin) {
      navigate('/login');
      return;
    }

    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, 'products'));
      const productsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Product[];
      setProducts(productsData);
      setLoading(false);
    };

    fetchProducts();
  }, [user, navigate]);

  const handleAddProduct = async (product: Omit<Product, 'id'>) => {
    try {
      const docRef = await addDoc(collection(db, 'products'), {
        ...product,
        id: uuidv4()
      });
      // Update UI
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">Panel de Administración</h1>
      
      {/* Product Management Section */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Gestión de Productos</h2>
        {/* Add Product Form */}
        {/* Product List */}
        {/* Edit/Delete Functions */}
      </div>

      {/* Orders Management Section */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Gestión de Pedidos</h2>
        {/* Orders List */}
        {/* Order Status Management */}
      </div>
    </div>
  );
};

export default Admin;