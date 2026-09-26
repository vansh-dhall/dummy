import React from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { ShoppingCart, Trash2, Heart } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';

export const Wishlist: React.FC = () => {
  const { items, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  return (
    <>
      <SEO 
        title="Saved Items Wishlist | Crown Clothing"
        description="View your saved items and favorite premium streetwear at Crown Clothing."
        keywords="Streetwear Wishlist, Crown Clothing Saved Items, Favorite Premium Clothing"
        url="/wishlist"
      />
      <div className="min-h-screen pt-20 pb-24 bg-gray-50 flex flex-col">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">Your Wishlist</h1>
            <p className="text-gray-500">
              {items.length} {items.length === 1 ? 'item' : 'items'} saved
            </p>
          </div>

          {items.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center">
              <Heart className="w-16 h-16 text-gray-300 mb-6" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your wishlist is empty</h2>
              <p className="text-gray-500 mb-8 max-w-md mx-auto">
                Save your favorite items here to come back to them later.
              </p>
              <button
                onClick={() => navigate('/products')}
                className="bg-gray-900 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors shadow-lg"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {items.map((product) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  key={product.id}
                  className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col"
                >
                  <div className="relative aspect-[4/5] bg-gray-100">
                    <img src={product.image}
                      alt={`${product.name} - Saved Item`}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                     decoding="async" width="800" height="800" />
                    <button
                      onClick={() => removeFromWishlist(product.id)}
                      className="absolute top-4 right-4 p-2 bg-white rounded-full text-gray-500 hover:text-red-500 hover:bg-red-50 transition-colors shadow-sm"
                      title="Remove from wishlist"
                      aria-label="Remove from wishlist"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="p-6 flex flex-col flex-grow text-left">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
                      <span className="font-bold text-gray-900">{product.price}</span>
                    </div>
                    <p className="text-sm text-gray-500 mb-6 line-clamp-2">{product.description}</p>
                    
                    <div className="mt-auto pt-4 border-t border-gray-100">
                      <button
                        onClick={() => addToCart(product, product.sizes[0])}
                        className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white py-3 rounded-xl font-bold uppercase tracking-wide hover:bg-gray-800 transition-colors"
                      >
                        <ShoppingCart className="w-4 h-4" /> Add to Cart
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
