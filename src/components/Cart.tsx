import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Cart: React.FC = () => {
  const { isCartOpen, setIsCartOpen, items, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden pointer-events-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm"
          />
          <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="w-screen max-w-sm sm:max-w-md"
            >
              <div className="flex h-full flex-col bg-white shadow-xl">
                <div className="flex items-center justify-between px-6 py-6 border-b border-gray-100">
                  <h2 className="text-xl font-serif font-bold text-gray-900">Your Cart</h2>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="text-gray-500 hover:text-gray-500 transition-colors cursor-pointer"
                    aria-label="Close cart"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto px-6 py-6">
                  {items.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                        <ShoppingBag className="w-8 h-8 text-gray-500" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">Your cart is empty</h3>
                        <p className="text-gray-500 mt-1">Looks like you haven't added anything yet.</p>
                      </div>
                      <button 
                        onClick={() => setIsCartOpen(false)}
                        className="mt-4 px-6 py-2 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors cursor-pointer"
                      >
                        Continue Shopping
                      </button>
                    </div>
                  ) : (
                    <ul className="space-y-6">
                      {items.map((item) => (
                        <li key={item.cartItemId} className="flex gap-4">
                          <div className="w-24 h-32 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover object-center" decoding="async" loading="lazy" width="800" height="800" />
                          </div>
                          <div className="flex flex-1 flex-col">
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <h3 className="text-sm">{item.name}</h3>
                              <p className="ml-4 tabular-nums">₹{(item.numericPrice * item.quantity).toLocaleString()}</p>
                            </div>
                            <p className="mt-1 text-sm text-gray-500">Size: {item.selectedSize}</p>
                            <div className="flex flex-1 items-end justify-between text-sm mt-4 cursor-pointer">
                              <div className="flex items-center gap-3 border border-gray-200 rounded-lg px-2 py-1">
                                <button 
                                  onClick={() => updateQuantity(item.cartItemId, -1)}
                                  className="text-gray-500 hover:text-gray-900 p-1"
                                  aria-label="Decrease quantity"
                                >
                                  <Minus className="w-3 h-3" />
                                </button>
                                <span className="font-medium w-4 text-center tabular-nums">{item.quantity}</span>
                                <button 
                                  onClick={() => updateQuantity(item.cartItemId, 1)}
                                  className="text-gray-500 hover:text-gray-900 p-1"
                                  aria-label="Increase quantity"
                                >
                                  <Plus className="w-3 h-3" />
                                </button>
                              </div>
                              <button
                                type="button"
                                onClick={() => removeFromCart(item.cartItemId)}
                                className="font-medium text-red-600 hover:text-red-500"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {items.length > 0 && (
                  <div className="border-t border-gray-100 px-6 py-6 bg-gray-50">
                    <div className="flex justify-between text-base font-medium text-gray-900 mb-4">
                      <p>Subtotal</p>
                      <p className="tabular-nums font-bold text-lg">₹{cartTotal.toLocaleString()}</p>
                    </div>
                    <p className="text-sm text-gray-500 mb-6 flex items-center justify-center">
                      Shipping and taxes calculated at checkout.
                    </p>
                    <motion.button 
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gray-900 text-white px-6 py-4 rounded-xl font-bold font-serif shadow-lg hover:shadow-xl hover:bg-gray-800 transition-all cursor-pointer"
                    >
                      Checkout
                    </motion.button>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
