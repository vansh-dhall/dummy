/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';

const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const Products = lazy(() => import('./pages/Products').then(m => ({ default: m.Products })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Blog = lazy(() => import('./pages/Blog').then(m => ({ default: m.Blog })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const Wishlist = lazy(() => import('./pages/Wishlist').then(m => ({ default: m.Wishlist })));
const Cart = lazy(() => import('./components/Cart').then(m => ({ default: m.Cart })));

export default function App() {
  return (
    <WishlistProvider>
      <CartProvider>
        <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-white overflow-x-hidden">
          <Navbar />
          <main className="flex-grow">
            <Suspense fallback={<div className="flex justify-center items-center h-64">Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/wishlist" element={<Wishlist />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <Suspense fallback={null}>
            <Cart />
          </Suspense>
        </div>
      </CartProvider>
    </WishlistProvider>
  );
}
