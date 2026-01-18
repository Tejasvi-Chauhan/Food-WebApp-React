import React, { useState } from 'react';

// 1. Mock Data: Asli app mein ye database se aayega
const products = [
  { id: 1, name: 'Fresh Apples', price: '₹120/kg', category: 'Fruits', image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&q=80' },
  { id: 2, name: 'Organic Bananas', price: '₹60/dozen', category: 'Fruits', image: 'https://images.unsplash.com/photo-1603833665858-e61d17a8622e?w=400&q=80' },
  { id: 3, name: 'Broccoli', price: '₹80/pc', category: 'Vegetables', image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=400&q=80' },
  { id: 4, name: 'Whole Milk', price: '₹65/L', category: 'Dairy', image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&q=80' },
  { id: 5, name: 'Brown Bread', price: '₹45/pkt', category: 'Bakery', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80' },
  { id: 6, name: 'Tomatoes', price: '₹40/kg', category: 'Vegetables', image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&q=80' },
  { id: 7, name: 'Eggs (12 pcs)', price: '₹90', category: 'Dairy', image: 'https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=400&q=80' },
  { id: 8, name: 'Orange Juice', price: '₹110', category: 'Beverages', image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&q=80' },
];

const GroceryPage = () => {
  // Cart ka count maintain karne ke liye state
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(cartCount + 1);
    alert("Item added to cart! 🛒");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* --- Navbar --- */}
      <nav className="bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-600 flex items-center gap-2">
            🍏 GreenGrocer
          </h1>
          <button className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold hover:bg-green-200 transition">
            Cart ({cartCount})
          </button>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <div className="bg-green-600 text-white py-12 text-center">
        <h2 className="text-4xl font-extrabold mb-2">Fresh Groceries Delivered</h2>
        <p className="text-green-100 text-lg">Farm fresh fruits, vegetables, and daily essentials.</p>
      </div>

      

      {/* --- Product Grid --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-green-500 pl-3">
          Top Picked Items
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
              {/* Product Image */}
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute top-2 left-2 bg-white/90 text-xs font-bold px-2 py-1 rounded text-gray-600">
                  {product.category}
                </span>
              </div>
              
              {/* Product Details */}
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-semibold text-gray-800">{product.name}</h4>
                  <span className="text-green-600 font-bold">{product.price}</span>
                </div>
                
                <button 
                  onClick={addToCart}
                  className="w-full mt-3 bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 active:scale-95 transition-all flex justify-center items-center gap-2"
                >
                  Add to Cart
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default GroceryPage;