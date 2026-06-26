import React from 'react';
import { Crown, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand & Description */}
        <div className="flex flex-col">
          <Link to="/" className="flex items-center gap-3 mb-6 inline-flex">
            <div className="bg-white p-2 rounded-xl">
              <Crown className="w-5 h-5 text-gray-950" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-serif text-xl font-bold text-white tracking-widest uppercase leading-none">Crown</span>
              <span className="font-sans text-[0.65rem] font-medium text-gray-300 tracking-[0.3em] uppercase mt-1 leading-none">Clothing</span>
            </div>
          </Link>
          <p className="text-gray-300 text-sm leading-relaxed mb-6">
            Style That Defines You. Premium streetwear & modern essentials crafted for the bold and confident. Experience uncompromising quality.
          </p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-800 hover:border-gray-700 transition-all" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-800 hover:border-gray-700 transition-all" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-800 hover:border-gray-700 transition-all" aria-label="Twitter">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-800 hover:border-gray-700 transition-all" aria-label="YouTube">
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-semibold text-white tracking-widest uppercase mb-6">Quick Links</h3>
          <ul className="space-y-4">
            <li><Link to="/products" className="text-gray-300 text-sm hover:text-white transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-gray-600 rounded-full"></span> All Products</Link></li>
            <li><Link to="/products?sort=newest" className="text-gray-300 text-sm hover:text-white transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-gray-600 rounded-full"></span> New Arrivals</Link></li>
            <li><Link to="/about" className="text-gray-300 text-sm hover:text-white transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-gray-600 rounded-full"></span> About Us</Link></li>
            <li><Link to="/blog" className="text-gray-300 text-sm hover:text-white transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-gray-600 rounded-full"></span> Journal / Blog</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-sm font-semibold text-white tracking-widest uppercase mb-6">Support</h3>
          <ul className="space-y-4">
            <li><Link to="/contact" className="text-gray-300 text-sm hover:text-white transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-gray-600 rounded-full"></span> Contact Us</Link></li>
            <li><Link to="/faq" className="text-gray-300 text-sm hover:text-white transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-gray-600 rounded-full"></span> FAQ</Link></li>
            <li><Link to="/privacy" className="text-gray-300 text-sm hover:text-white transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-gray-600 rounded-full"></span> Privacy Policy</Link></li>
            <li><Link to="/terms" className="text-gray-300 text-sm hover:text-white transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-gray-600 rounded-full"></span> Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-sm font-semibold text-white tracking-widest uppercase mb-6">Contact Us</h3>
          <ul className="space-y-4 text-gray-300 text-sm">
            <li className="flex items-start gap-3">
              <span className="font-semibold text-white">A:</span> 
              <span>123 Fashion Ave,<br/>New Delhi, India 110001</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="font-semibold text-white">P:</span>
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="font-semibold text-white">E:</span>
              <span>support@crownclothing.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-900 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-400 text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Crown Clothing. All rights reserved.
        </p>
        <div className="flex items-center gap-4 text-sm text-gray-400">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1280px-MasterCard_Logo.svg.png" className="h-6 w-auto opacity-50 grayscale hover:grayscale-0 transition-all" alt="MasterCard"  decoding="async" loading="lazy" width="800" height="800" />
          <img src="https://www.citypng.com/public/uploads/preview/hd-visa-payment-logo-png-7017516947777256ndfrewd52.png" className="h-4 w-auto opacity-50 grayscale hover:grayscale-0 transition-all" alt="Visa"  decoding="async" loading="lazy" width="800" height="800" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/PayPal_Logo2014.png" className="h-4 w-auto opacity-50 grayscale hover:grayscale-0 transition-all" alt="PayPal"  decoding="async" loading="lazy" width="800" height="800" />
        </div>
      </div>
    </footer>
  );
};
