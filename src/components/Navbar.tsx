import React, { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Crown, Heart, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

export const Navbar: React.FC = () => {
  const { itemCount: cartItemCount, setIsCartOpen } = useCart();
  const { itemCount: wishlistItemCount } = useWishlist();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Products' },
    { path: '/about', label: 'About Us' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact Us' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex-shrink-0 flex items-center gap-3 cursor-pointer group">
            <div className="bg-gray-900 p-2 rounded-xl group-hover:bg-gray-800 transition-colors">
              <Crown className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-serif text-xl font-bold text-gray-900 tracking-widest uppercase leading-none">Crown</span>
              <span className="font-sans text-[0.65rem] font-medium text-gray-500 tracking-[0.3em] uppercase mt-1 leading-none">Clothing</span>
            </div>
          </Link>
          <div className="hidden lg:flex sm:space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? 'border-gray-900 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => navigate('/wishlist')}
              className="relative p-2 text-gray-500 hover:text-gray-900 transition-colors cursor-pointer hidden sm:block"
              aria-label="Wishlist"
            >
              <Heart className="w-6 h-6" />
              {wishlistItemCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-gray-900 rounded-full border-2 border-white tabular-nums">
                  {wishlistItemCount}
                </span>
              )}
            </button>
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-gray-500 hover:text-gray-900 transition-colors cursor-pointer"
              aria-label="Open cart"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-gray-900 rounded-full border-2 border-white tabular-nums">
                  {cartItemCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-500 hover:text-gray-900 transition-colors cursor-pointer"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? 'bg-gray-50 text-gray-900 font-bold'
                      : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                  } block px-3 py-4 rounded-md text-base font-medium transition-colors`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <button 
              onClick={() => { navigate('/wishlist'); setIsMobileMenuOpen(false); }}
              className="w-full text-left px-3 py-4 rounded-md text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors flex items-center gap-3 sm:hidden"
            >
              <Heart className="w-5 h-5" />
              Wishlist ({wishlistItemCount})
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
