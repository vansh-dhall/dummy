import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, TrendingUp, Truck, Undo2, Star, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SEO } from '../components/SEO';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    { icon: <Truck className="w-6 h-6" />, title: 'Free Shipping', desc: 'On orders over ₹999' },
    { icon: <ShieldCheck className="w-6 h-6" />, title: 'Premium Quality', desc: 'Crafted to last' },
    { icon: <Undo2 className="w-6 h-6" />, title: 'Easy Returns', desc: '30-day return policy' },
    { icon: <TrendingUp className="w-6 h-6" />, title: 'Secure Checkout', desc: '100% secure payments' }
  ];

  const categories = [
    { title: "Men's Collection", image: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?fm=webp&auto=format&fit=crop&q=80&w=600' },
    { title: "Women's Collection", image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?fm=webp&auto=format&fit=crop&q=80&w=600' },
    { title: "Accessories", image: 'https://images.unsplash.com/photo-1509319117193-57bab727e09d?fm=webp&auto=format&fit=crop&q=80&w=600' },
    { title: "Jackets", image: 'https://images.unsplash.com/photo-1559551409-dadc959f76b8?fm=webp&auto=format&fit=crop&q=80&w=600' },
  ];

  const lookbook = [
    'https://images.unsplash.com/photo-1492288991661-058aa541ff43?fm=webp&auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?fm=webp&auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?fm=webp&auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1469334031218-e382a71b716b?fm=webp&auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1483985988355-763728e1935b?fm=webp&auto=format&fit=crop&q=80&w=800'
  ];

  const trendingProducts = [
    { id: 1, name: 'Essential Oversized Tee', price: '₹999', rating: 4.8, reviews: 124, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?fm=webp&auto=format&fit=crop&q=80&w=800' },
    { id: 2, name: 'Urban Cargo Pants', price: '₹1,899', rating: 4.9, reviews: 89, image: 'https://images.unsplash.com/photo-1584865288642-42078afe6942?fm=webp&auto=format&fit=crop&q=80&w=800' },
    { id: 3, name: 'Heavyweight Hoodie', price: '₹2,499', rating: 4.7, reviews: 256, image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?fm=webp&auto=format&fit=crop&q=80&w=800' },
    { id: 4, name: 'Vintage Denim Jacket', price: '₹3,299', rating: 4.9, reviews: 167, image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?fm=webp&auto=format&fit=crop&q=80&w=800' }
  ];

  const bestSellers = [
    { id: 5, name: 'Classic White Sneakers', price: '₹2,199', rating: 4.9, reviews: 312, image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?fm=webp&auto=format&fit=crop&q=80&w=800' },
    { id: 6, name: 'Minimalist Overcoat', price: '₹4,499', rating: 4.8, reviews: 145, image: 'https://images.unsplash.com/photo-1544441893-675973e31985?fm=webp&auto=format&fit=crop&q=80&w=800' },
    { id: 7, name: 'Structured Crossbody', price: '₹1,599', rating: 4.6, reviews: 98, image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?fm=webp&auto=format&fit=crop&q=80&w=800' },
    { id: 8, name: 'Ribbed Knit Beanie', price: '₹599', rating: 4.7, reviews: 210, image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?fm=webp&auto=format&fit=crop&q=80&w=800' }
  ];

  const testimonials = [
    { name: "Rahul Verma", role: "Verified Buyer", text: "The quality of the oversized tees is unmatched. It feels premium and fits exactly how I wanted.", rating: 5 },
    { name: "Sneha Patel", role: "Verified Buyer", text: "Fast shipping and secure checkout made the whole process easy. The cargo pants are my new favorite.", rating: 5 },
    { name: "Aarav Sharma", role: "Verified Buyer", text: "Crown Clothing has totally upgraded my wardrobe. The heavyweight hoodie is perfect for winter.", rating: 4 }
  ];

  return (
    <>
      <SEO 
        title="Premium Streetwear | Oversized T-Shirts & Modern Fashion"
        description="Discover Crown Clothing's premium streetwear collection. Explore our modern fashion designed for confidence, including oversized t-shirts, hoodies, and jackets."
        keywords="Premium Streetwear, Oversized T-Shirts, Modern Fashion"
        url="/"
        schema={[
          JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://crownclothing.com/"
            }]
          }),
          JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Crown Clothing",
            "url": "https://crownclothing.com",
            "logo": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?fm=webp&auto=format&fit=crop&q=80&w=600",
            "description": "Premium streetwear and modern designer clothing brand offering high-quality oversized tees, cargo pants, and jackets."
          })
        ]}
      />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-[#f8f9fa] overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-gray-200/50 rounded-full blur-3xl mix-blend-multiply" />
          <div className="absolute top-[40%] -left-[10%] w-[40%] h-[40%] bg-gray-300/30 rounded-full blur-3xl mix-blend-multiply" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left mt-10 lg:mt-0">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-serif text-gray-900 font-bold tracking-tight leading-[1.05] mb-6">
                  Premium<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">Streetwear</span><br />
                  Collection
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
                  Discover oversized t-shirts, hoodies, and modern fashion designed for confidence and comfort.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a
                    href="/products"
                    onClick={(e) => { e.preventDefault(); navigate('/products'); }}
                    className="bg-gray-900 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors shadow-xl shadow-gray-900/20 flex items-center justify-center gap-2"
                  >
                    Shop Premium Streetwear <ArrowRight className="w-5 h-5" />
                  </a>
                  <a
                    href="/products?sort=newest"
                    onClick={(e) => { e.preventDefault(); navigate('/products?sort=newest'); }}
                    className="bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-gray-50 hover:border-gray-300 transition-colors shadow-sm flex items-center justify-center"
                  >
                    New Arrivals
                  </a>
                </div>
              </motion.div>
            </div>
            
            {/* Right Image */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="relative hidden lg:flex justify-end h-[600px] xl:h-[750px]"
            >
              <div className="relative w-full max-w-md xl:max-w-lg h-full">
                {/* Main Image Container */}
                <div className="absolute inset-0 bg-gray-200 rounded-[2.5rem] overflow-hidden shadow-2xl z-20">
                  <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?fm=webp&auto=format&fit=crop&q=80&w=1200"
                    alt="Premium Streetwear"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    fetchPriority="high"
                    decoding="async"
                    width="1200"
                    height="1800"
                   />
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-10 -right-10 w-full h-full border-2 border-gray-900 rounded-[2.5rem] z-10 hidden xl:block"></div>
                
                {/* Floating Badge */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="absolute bottom-10 -left-16 bg-white p-5 rounded-2xl shadow-xl z-30 hidden xl:flex items-center gap-4 border border-gray-100"
                >
                  <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white">
                    <Star className="w-6 h-6 fill-current" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Over 50k+</p>
                    <p className="text-lg font-bold text-gray-900">Happy Customers</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trending Products Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-gray-500 font-sans tracking-[0.3em] uppercase text-sm mb-2 block">Our Top Picks</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">Trending Products</h2>
            </div>
            <a 
              href="/products"
              onClick={(e) => { e.preventDefault(); navigate('/products'); }}
              className="mt-6 md:mt-0 text-gray-900 font-bold uppercase tracking-wider flex items-center gap-2 hover:gap-4 transition-all group"
              title="Shop our Premium Streetwear"
            >
              View All <ArrowRight className="w-5 h-5 group-hover:text-gray-600" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trendingProducts.map((product) => (
              <motion.div 
                whileHover={{ y: -10 }}
                key={product.id} 
                className="group flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                  <img src={product.image} 
                    alt={product.name} 
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" 
                   decoding="async" width="800" height="800" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button 
                      onClick={() => navigate('/products')}
                      className="bg-white text-gray-900 px-6 py-3 rounded-full font-bold uppercase tracking-wider transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl"
                    >
                      View Details
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-gray-900 fill-current' : 'text-gray-300'}`} />
                    ))}
                    <span className="text-xs font-medium text-gray-500 ml-1">({product.reviews})</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-gray-600 transition-colors">{product.name}</h3>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-lg font-bold text-gray-900">{product.price}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee Announcment */}
      <div className="bg-gray-900 overflow-hidden py-4 border-b border-gray-800">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, ease: 'linear', duration: 25 }}
          className="whitespace-nowrap flex items-center"
        >
          {[...Array(6)].map((_, i) => (
            <span key={i} className="text-gray-300 text-xs sm:text-sm font-semibold tracking-widest uppercase mx-8 inline-block">
              🌟 Free Express Shipping on orders over ₹999 🌟 New Drops Every Friday 🌟 Premium Quality Guaranteed 🌟
            </span>
          ))}
        </motion.div>
      </div>

      {/* Best Sellers Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden text-center sm:text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-gray-500 font-sans tracking-[0.3em] uppercase text-sm mb-2 block">Customer Favorites</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">Best Sellers</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestSellers.map((product) => (
              <motion.div 
                whileHover={{ y: -10 }}
                key={product.id} 
                className="group flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                  <img src={product.image} 
                    alt={product.name} 
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" 
                   decoding="async" width="800" height="800" />
                  <div className="absolute top-4 left-4 bg-gray-900 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-md">
                    Top Rated
                  </div>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button 
                      onClick={() => navigate('/products')}
                      className="bg-white text-gray-900 px-6 py-3 rounded-full font-bold uppercase tracking-wider transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl hover:bg-gray-50"
                      title="View Modern Fashion Products"
                    >
                      View Details
                    </button>
                  </div>
                </div>
                <div className="p-6 text-left">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-gray-900 fill-current' : 'text-gray-300'}`} />
                    ))}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-gray-600 transition-colors">{product.name}</h3>
                  <div className="flex justify-between items-center mt-3">
                    <span className="text-xl font-bold text-gray-900">{product.price}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Features */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-gray-900">Why Shop With Crown</h2>
            <div className="mt-6 w-24 h-1 bg-gray-900 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <motion.div 
                whileHover={{ y: -5 }}
                key={idx} 
                className="flex flex-col items-center text-center p-10 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-xl hover:bg-white transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-gray-900/20 mb-6 transform -rotate-3 hover:rotate-0 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 tracking-wide mb-2">{feature.title}</h3>
                <p className="text-gray-500 font-medium">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Spotlight Feature */}
      <section className="py-0 bg-gray-900 text-white overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-12 lg:p-24 flex flex-col justify-center max-w-xl mx-auto lg:mx-0">
            <span className="text-gray-500 font-sans tracking-[0.3em] uppercase text-sm mb-4 block">New Arrival</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">The Modern Heritage Collection</h2>
            <p className="text-gray-300 text-lg mb-10 leading-relaxed font-light">
              Discover our latest collection blending classic tailoring with contemporary streetwear. 
              Designed for versatility, constructed with sustainable materials, and made to last a lifetime.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/products')}
              className="self-start border-2 border-white bg-transparent text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-gray-900 transition-all shadow-xl"
            >
              Explore Now
            </motion.button>
          </div>
          <div className="relative h-[60vh] lg:h-auto overflow-hidden group">
            <img src="https://www.decorilla.com/online-decorating/wp-content/uploads/2025/12/modern-heritage-living-room-by-DECORILLA-designer-Catherine-W.--scaled.jpg" 
              alt="Modern Heritage Collection - Premium Streetwear" 
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
             decoding="async" width="800" height="800" />
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-gray-900">Featured Categories</h2>
            <div className="mt-4 w-24 h-1 bg-gray-900 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat, idx) => (
              <a href="/products" onClick={(e) => { e.preventDefault(); navigate('/products'); }} key={idx} className="group cursor-pointer relative overflow-hidden rounded-3xl shadow-sm hover:shadow-xl transition-all aspect-[4/5] bg-gray-900" title={`Shop ${cat.title}`}>
                <img src={cat.image} alt={`${cat.title} - Modern Fashion Apparel`} loading="lazy" className="opacity-80 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-100"  decoding="async" width="800" height="800" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-white text-2xl font-bold tracking-wide mb-2 translate-y-4 group-hover:translate-y-0 transition-transform">{cat.title}</h3>
                  <p className="text-gray-300 text-sm font-medium uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity delay-100">Shop Now &rarr;</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gray-500 font-sans tracking-[0.3em] uppercase text-sm mb-2 block">Real Words</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900">Customer Reviews</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test, idx) => (
              <motion.div 
                whileHover={{ y: -5 }} 
                key={idx} 
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative"
              >
                <div className="absolute top-8 right-8 text-gray-200">
                  <span className="text-6xl font-serif leading-none">"</span>
                </div>
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < Math.floor(test.rating) ? 'text-gray-900 fill-current' : 'text-gray-200'}`} />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-8 relative z-10 text-lg">"{test.text}"</p>
                <div className="mt-auto">
                  <p className="font-bold text-gray-900">{test.name}</p>
                  <p className="text-sm text-gray-500 font-medium">{test.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter & Blog Promo */}
      <section className="py-24 bg-white relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center bg-gray-50 p-10 rounded-3xl border border-gray-100">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Stay Inspired</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto text-lg leading-relaxed font-light">
            Read our latest style guides, streetwear tips, and fashion trends on the Crown Clothing Blog.
          </p>
          <a 
            href="/blog"
            onClick={(e) => { e.preventDefault(); navigate('/blog'); }}
            className="inline-flex bg-gray-900 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors shadow-sm items-center justify-center gap-2 mx-auto"
            title="Read Fashion Trends & Style Guide"
          >
            Read Our Fashion Blog
          </a>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-[3rem] p-12 md:p-20 shadow-2xl relative overflow-hidden text-center">
            {/* Decorative background blur */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gray-700 rounded-full blur-3xl opacity-50 mix-blend-screen pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gray-800 rounded-full blur-3xl opacity-50 mix-blend-screen pointer-events-none translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Join The Crown Community</h2>
              <p className="text-gray-300 md:text-lg mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                Subscribe to our newsletter and get <strong className="text-white">10% off your first order</strong>. Be the first to know about new drops and exclusive offers.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto" onSubmit={(e) => { e.preventDefault(); alert('Subscribed successfully!'); }}>
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  required
                  className="flex-1 px-8 py-5 rounded-full bg-white/10 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-white focus:bg-white/20 transition-all backdrop-blur-md"
                />
                <button 
                  type="submit" 
                  className="bg-white text-gray-900 px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
    </>
  );
};
