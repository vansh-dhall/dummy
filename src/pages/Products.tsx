import React, { useState, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Search, SlidersHorizontal, ChevronDown, X, Heart, Eye, Star } from 'lucide-react';
import { SEO } from '../components/SEO';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { Product } from '../types';

export const Products: React.FC = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  
  const products: Product[] = [
    {
      id: 1,
      name: 'Classic Black Hoodie',
      price: '₹1,299',
      numericPrice: 1299,
      sizes: ['S', 'M', 'L', 'XL'],
      material: '100% Cotton',
      description: 'Comfortable and stylish hoodie suitable for all seasons.',
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?fm=webp&auto=format&fit=crop&q=80&w=800',
      category: 'Hoodies',
      color: 'Black'
    },
    {
      id: 2,
      name: 'Premium White T-Shirt',
      price: '₹699',
      numericPrice: 699,
      sizes: ['S', 'M', 'L', 'XL'],
      material: 'Cotton Blend',
      description: 'Soft fabric with a modern fit for everyday wear.',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?fm=webp&auto=format&fit=crop&q=80&w=800',
      category: 'T-Shirts',
      color: 'White'
    },
    {
      id: 3,
      name: 'Denim Jacket',
      price: '₹1,999',
      numericPrice: 1999,
      sizes: ['M', 'L', 'XL'],
      material: 'Premium Denim',
      description: 'Durable and fashionable jacket for casual outings.',
      image: 'https://www.permanentstyle.com/wp-content/uploads/2025/04/denim-jacket-style-500x688.jpg',
      category: 'Jackets',
      color: 'Blue'
    },
    {
      id: 4,
      name: 'Oversized Graphic Tee',
      price: '₹899',
      numericPrice: 899,
      sizes: ['S', 'M', 'L', 'XL'],
      material: 'Cotton',
      description: 'Trendy oversized fit with unique graphic prints.',
      image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?fm=webp&auto=format&fit=crop&q=80&w=800',
      category: 'T-Shirts',
      color: 'Multi'
    },
    {
      id: 5,
      name: 'Essential Crewneck Sweater',
      price: '₹1,499',
      numericPrice: 1499,
      sizes: ['S', 'M', 'L', 'XL'],
      material: 'Cotton Blend',
      description: 'A cozy and minimal sweater perfect for layering.',
      image: 'https://images.unsplash.com/photo-1614975059251-992f11792b9f?fm=webp&auto=format&fit=crop&q=80&w=800',
      category: 'Sweaters',
      color: 'Beige'
    },
    {
      id: 6,
      name: 'Slim Fit Chinos',
      price: '₹1,299',
      numericPrice: 1299,
      sizes: ['30', '32', '34', '36'],
      material: 'Cotton Spandex',
      description: 'Versatile trousers offering both comfort and a sharp look.',
      image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?fm=webp&auto=format&fit=crop&q=80&w=800',
      category: 'Cargo Pants',
      color: 'Khaki'
    },
    {
      id: 7,
      name: 'Lightweight Windbreaker',
      price: '₹1,799',
      numericPrice: 1799,
      sizes: ['M', 'L', 'XL'],
      material: 'Nylon',
      description: 'Water-resistant jacket for unpredictable weather.',
      image: 'https://images.unsplash.com/photo-1559551409-dadc959f76b8?fm=webp&auto=format&fit=crop&q=80&w=800',
      category: 'Jackets',
      color: 'Grey'
    },
    {
      id: 8,
      name: 'Structured Crossbody Bag',
      price: '₹1,599',
      numericPrice: 1599,
      sizes: ['One Size'],
      material: 'Vegan Leather',
      description: 'Minimalist crossbody bag with premium finish.',
      image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?fm=webp&auto=format&fit=crop&q=80&w=800',
      category: 'Accessories',
      color: 'Black'
    },
    {
      id: 9,
      name: 'Ribbed Knit Beanie',
      price: '₹599',
      numericPrice: 599,
      sizes: ['One Size'],
      material: 'Cotton Blend',
      description: 'A cozy minimalist beanie for colder days.',
      image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?fm=webp&auto=format&fit=crop&q=80&w=800',
      category: 'Accessories',
      color: 'Green'
    },
    {
      id: 10,
      name: 'Plaid Flannel Shirt',
      price: '₹1,099',
      numericPrice: 1099,
      sizes: ['S', 'M', 'L', 'XL'],
      material: '100% Cotton',
      description: 'Classic flannel texture with a relaxed casual fit.',
      image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?fm=webp&auto=format&fit=crop&q=80&w=800',
      category: 'Shirts',
      color: 'Red'
    },
    {
      id: 11,
      name: 'Summer Linen Shirt',
      price: '₹1,199',
      numericPrice: 1199,
      sizes: ['M', 'L', 'XL'],
      material: '100% Linen',
      description: 'Breathable linen shirt for hot summer days.',
      image: 'https://www.muftijeans.in/media/.renditions/wysiwyg/lightweight-linen-shirt-men-summer-style.jpg',
      category: 'Shirts',
      color: 'White'
    },
    {
      id: 31,
      name: 'Vintage Leather Jacket',
      price: '₹3,499',
      numericPrice: 3499,
      sizes: ['M', 'L', 'XL'],
      material: 'Genuine Leather',
      description: 'Timeless leather jacket with a vintage finish.',
      image: 'https://cdn.dsmcdn.com/mnresize/420/620/ty1639/prod/QC/20250220/18/fff9d6aa-9266-3003-9c3f-597280550dd1/1_org_zoom.jpg',
      category: 'Jackets',
      color: 'Brown'
    },
    {
      id: 32,
      name: 'Athletic Joggers',
      price: '₹999',
      numericPrice: 999,
      sizes: ['S', 'M', 'L', 'XL'],
      material: 'Polyester Blend',
      description: 'Comfortable joggers for workouts or lounging.',
      image: 'https://images.unsplash.com/photo-1505022610485-0249ba5b3675?fm=webp&auto=format&fit=crop&q=80&w=800',
      category: 'Cargo Pants',
      color: 'Grey'
    },
    {
      id: 12,
      name: 'Striped Polo Shirt',
      price: '₹899',
      numericPrice: 899,
      sizes: ['M', 'L', 'XL'],
      material: '100% Cotton',
      description: 'Classic striped polo for a smart casual look.',
      image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?fm=webp&auto=format&fit=crop&q=80&w=800',
      category: 'Shirts',
      color: 'Blue'
    },
    {
      id: 13,
      name: 'Fleece Zip-Up Hoodie',
      price: '₹1,399',
      numericPrice: 1399,
      sizes: ['S', 'M', 'L', 'XL'],
      material: 'Fleece',
      description: 'Warm zip-up hoodie for colder evenings.',
      image: 'https://m.media-amazon.com/images/I/71GjP2cDExL._AC_UY1100_.jpg',
      category: 'Hoodies',
      color: 'Grey'
    },
    {
      id: 14,
      name: 'Cargo Pants',
      price: '₹1,499',
      numericPrice: 1499,
      sizes: ['30', '32', '34', '36'],
      material: 'Cotton Canvas',
      description: 'Durable cargo pants with multiple practical pockets.',
      image: 'https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?fm=webp&auto=format&fit=crop&q=80&w=800',
      category: 'Cargo Pants',
      color: 'Olive'
    },
    {
      id: 15,
      name: 'Cable Knit Sweater',
      price: '₹1,699',
      numericPrice: 1699,
      sizes: ['S', 'M', 'L'],
      material: 'Wool Blend',
      description: 'Thick and cozy cable knit design for winter.',
      image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?fm=webp&auto=format&fit=crop&q=80&w=800',
      category: 'Sweaters',
      color: 'White'
    },
    {
      id: 16,
      name: 'Oxford Button-Down',
      price: '₹1,199',
      numericPrice: 1199,
      sizes: ['M', 'L', 'XL'],
      material: 'Oxford Cotton',
      description: 'Crisp and reliable Oxford shirt for any occasion.',
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?fm=webp&auto=format&fit=crop&q=80&w=800',
      category: 'Shirts',
      color: 'Blue'
    },
    {
      id: 17,
      name: 'Corduroy Jacket',
      price: '₹1,899',
      numericPrice: 1899,
      sizes: ['M', 'L', 'XL'],
      material: 'Cotton Corduroy',
      description: 'Stylish corduroy outerwear for a relaxed vibe.',
      image: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?fm=webp&auto=format&fit=crop&q=80&w=800',
      category: 'Jackets',
      color: 'Brown'
    },
    {
      id: 18,
      name: 'Short Sleeve Button-Up',
      price: '₹899',
      numericPrice: 899,
      sizes: ['S', 'M', 'L', 'XL'],
      material: 'Cotton Viscose',
      description: 'Lightweight patterned shirt for a summery feel.',
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?fm=webp&auto=format&fit=crop&q=80&w=800',
      category: 'Shirts',
      color: 'White'
    },
    {
      id: 19,
      name: 'Turtleneck Pullover',
      price: '₹1,599',
      numericPrice: 1599,
      sizes: ['M', 'L', 'XL'],
      material: 'Cotton Blend',
      description: 'Elegant turtleneck pullover for formal or casual wear.',
      image: 'https://www.montecarlo.in/cdn/shop/files/1250528HN-925-38_1.jpg?v=1756461452',
      category: 'Sweaters',
      color: 'Black'
    },
    {
      id: 20,
      name: 'Regular Fit Jeans',
      price: '₹1,399',
      numericPrice: 1399,
      sizes: ['30', '32', '34', '36', '38'],
      material: 'Denim',
      description: 'Classic regular fit jeans for everyday comfort.',
      image: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?fm=webp&auto=format&fit=crop&q=80&w=800',
      category: 'Jeans',
      color: 'Blue'
    },
    {
      id: 21,
      name: 'Puffer Vest',
      price: '₹1,799',
      numericPrice: 1799,
      sizes: ['M', 'L', 'XL'],
      material: 'Polyester',
      description: 'Quilted puffer vest to keep your core warm.',
      image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?fm=webp&auto=format&fit=crop&q=80&w=800',
      category: 'Jackets',
      color: 'Black'
    },
    {
      id: 22,
      name: 'V-Neck T-Shirt',
      price: '₹599',
      numericPrice: 599,
      sizes: ['S', 'M', 'L', 'XL'],
      material: '100% Cotton',
      description: 'A soft V-neck tee perfect as a base layer.',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?fm=webp&auto=format&fit=crop&q=80&w=800',
      category: 'T-Shirts',
      color: 'Grey'
    },
    {
      id: 23,
      name: 'Checked Shacket',
      price: '₹1,899',
      numericPrice: 1899,
      sizes: ['S', 'M', 'L'],
      material: 'Wool Blend',
      description: 'A hybrid shirt-jacket for versatile layering.',
      image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?fm=webp&auto=format&fit=crop&q=80&w=800',
      category: 'Jackets',
      color: 'Grey'
    },
    {
      id: 24,
      name: 'Track Pants',
      price: '₹1,099',
      numericPrice: 1099,
      sizes: ['M', 'L', 'XL'],
      material: 'Nylon Blend',
      description: 'Sporty track pants with a bold side stripe.',
      image: 'https://7man.co.in/cdn/shop/files/VBN07745_1080x1080.jpg?v=1763711536',
      category: 'Cargo Pants',
      color: 'Black'
    },
    {
      id: 25,
      name: 'Utility Shirt',
      price: '₹1,299',
      numericPrice: 1299,
      sizes: ['M', 'L', 'XL'],
      material: 'Heavy Cotton',
      description: 'Rugged utility shirt with double chest pockets.',
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?fm=webp&auto=format&fit=crop&q=80&w=800',
      category: 'Shirts',
      color: 'Green'
    },
    {
      id: 26,
      name: 'Cropped Hoodie',
      price: '₹1,199',
      numericPrice: 1199,
      sizes: ['XS', 'S', 'M', 'L'],
      material: 'Cotton Blend',
      description: 'A trendy cropped hoodie with a raw hem.',
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?fm=webp&auto=format&fit=crop&q=80&w=800',
      category: 'Hoodies',
      color: 'Pink'
    },
    {
      id: 27,
      name: 'Relaxed Fit Shorts',
      price: '₹799',
      numericPrice: 799,
      sizes: ['30', '32', '34'],
      material: 'Cotton',
      description: 'Comfortable shorts for casual summer days.',
      image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?fm=webp&auto=format&fit=crop&q=80&w=800',
      category: 'Shorts',
      color: 'Blue'
    },
    {
      id: 28,
      name: 'Longline Cardigan',
      price: '₹1,699',
      numericPrice: 1699,
      sizes: ['Oversized'],
      material: 'Acrylic Blend',
      description: 'Flowy longline cardigan for an effortless look.',
      image: 'https://virsaonline.in/cdn/shop/files/1_7abf491f-d2c0-4e76-9850-7c4fd7bb6214.jpg?v=1760784041',
      category: 'Sweaters',
      color: 'Beige'
    },
    {
      id: 29,
      name: 'Bomber Jacket',
      price: '₹2,199',
      numericPrice: 2199,
      sizes: ['M', 'L', 'XL'],
      material: 'Nylon',
      description: 'Classic bomber jacket silhouette with ribbed cuffs.',
      image: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?fm=webp&auto=format&fit=crop&q=80&w=800',
      category: 'Jackets',
      color: 'Olive'
    },
    {
      id: 30,
      name: 'Mock Neck Sweater',
      price: '₹1,499',
      numericPrice: 1499,
      sizes: ['S', 'M', 'L'],
      material: 'Cotton Knit',
      description: 'Sophisticated mock neck design for chilly weather.',
      image: 'https://assets.myntassets.com/w_200,q_50,,dpr_3,fl_progressive,f_webp/assets/images/2025/OCTOBER/18/w1OwnRtM_45e3c26546e943368fe07e3df0e5d564.jpg',
      category: 'Sweaters',
      color: 'Grey'
    }
  ];

  const [selectedSizes, setSelectedSizes] = useState<Record<number, string>>(
    products.reduce((acc, p) => ({ ...acc, [p.id]: p.sizes[0] }), {})
  );

  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [maxPrice, setMaxPrice] = useState(5000);
  const [sortBy, setSortBy] = useState('newest');
  const [showFilters, setShowFilters] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];

  const searchSuggestions = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const queryLower = searchQuery.toLowerCase();
    const suggestions = new Set<string>();
    
    products.forEach(p => {
      if (p.name.toLowerCase().includes(queryLower)) suggestions.add(p.name);
      if (p.category.toLowerCase().includes(queryLower)) suggestions.add(p.category);
      if (p.color.toLowerCase().includes(queryLower)) suggestions.add(p.color);
    });
    return Array.from(suggestions).slice(0, 5);
  }, [searchQuery, products]);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch = 
        product.name.toLowerCase().includes(searchLower) ||
        product.category.toLowerCase().includes(searchLower) ||
        product.color.toLowerCase().includes(searchLower) ||
        product.description.toLowerCase().includes(searchLower);
        
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesPrice = product.numericPrice <= maxPrice;

      return matchesSearch && matchesCategory && matchesPrice;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.numericPrice - b.numericPrice;
      if (sortBy === 'price-desc') return b.numericPrice - a.numericPrice;
      if (sortBy === 'best-selling') {
        const aHash = (a.id * 83) % 100;
        const bHash = (b.id * 83) % 100;
        return bHash - aHash;
      }
      return b.id - a.id; 
    });
  }, [products, searchQuery, selectedCategory, maxPrice, sortBy]);

  const handleSizeSelect = (productId: number, size: string) => {
    setSelectedSizes(prev => ({ ...prev, [productId]: size }));
  };

  return (
    <>
      <SEO 
        title="Premium Clothing Collection | Buy Streetwear Online | Crown Clothing"
        description="Shop Crown Clothing's premium collection. Buy streetwear online including mens cargo pants, premium hoodies, jackets, and oversized tees."
        keywords="Streetwear Clothing, Premium Hoodies, Fashion Apparel"
        url="/products"
        schema={[
          JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://crownclothing.com/"
            },{
              "@type": "ListItem",
              "position": 2,
              "name": "Products",
              "item": "https://crownclothing.com/products"
            }]
          })
        ]}
      />
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-serif font-bold text-gray-900">Premium Clothing Collection</h1>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">Explore our premium collection of thoughtfully designed clothing.</p>
          <div className="mt-6 w-24 h-1 bg-gray-900 mx-auto rounded-full"></div>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-12 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between mb-6">
            
            {/* Search Bar */}
            <div className="relative w-full md:w-96 flex-shrink-0" ref={searchRef}>
              <div className="relative flex items-center">
                <Search className="absolute left-4 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowSuggestions(true);
                  }}
                  onFocus={() => setShowSuggestions(true)}
                  placeholder="Search products, categories, colors..."
                  className="w-full pl-12 pr-10 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                />
                {searchQuery && (
                  <button 
                    onClick={() => {
                      setSearchQuery('');
                      setShowSuggestions(false);
                    }}
                    className="absolute right-4 text-gray-500 hover:text-gray-600"
                    aria-label="Clear search"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
              
              {/* Search Suggestions */}
              <AnimatePresence>
                {showSuggestions && searchSuggestions.length > 0 && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-100 rounded-xl shadow-lg z-50 overflow-hidden"
                  >
                    {searchSuggestions.map((suggestion, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setSearchQuery(suggestion);
                          setShowSuggestions(false);
                        }}
                        className="w-full text-left px-5 py-3 text-gray-700 hover:bg-gray-50 flex items-center gap-3 border-b border-gray-50 last:border-0 transition-colors"
                      >
                        <Search className="w-4 h-4 text-gray-500" />
                        {suggestion}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="flex w-full md:w-auto items-center justify-between gap-4">
              <span className="text-gray-500 font-medium whitespace-nowrap hidden sm:block">
                Showing {filteredProducts.length} Product{filteredProducts.length !== 1 ? 's' : ''}
              </span>
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 bg-gray-900 text-white px-5 py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors md:hidden w-full justify-center"
              >
                <SlidersHorizontal className="w-5 h-5" />
                Filters & Sort
              </button>
            </div>
          </div>

          <AnimatePresence>
            {(showFilters || typeof window !== 'undefined' && window.innerWidth >= 768) && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-gray-100 overflow-hidden md:!h-auto md:!opacity-100"
              >
                {/* Category Filter */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Category</label>
                  <div className="relative">
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full appearance-none bg-gray-50 border border-gray-200 text-gray-900 py-3 pl-4 pr-10 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 transition-colors"
                    >
                      {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
                  </div>
                </div>

                {/* Price Filter */}
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Max Price</label>
                    <span className="text-sm font-semibold text-gray-900">₹{maxPrice}</span>
                  </div>
                  <input 
                    type="range" 
                    min="500" 
                    max="5000" 
                    step="100"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gray-900 mt-3"
                  />
                </div>

                {/* Sort Order */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Sort By</label>
                  <div className="relative">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full appearance-none bg-gray-50 border border-gray-200 text-gray-900 py-3 pl-4 pr-10 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 transition-colors"
                    >
                      <option value="newest">Newest Arrivals</option>
                      <option value="best-selling">Best Selling</option>
                      <option value="price-asc">Price: Low to High</option>
                      <option value="price-desc">Price: High to Low</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="mt-4 sm:hidden flex justify-between items-center text-sm font-medium text-gray-500">
             Showing {filteredProducts.length} Product{filteredProducts.length !== 1 ? 's' : ''}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatePresence>
              {filteredProducts.map((product) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                  key={product.id} 
                  className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col group"
                >
                  <div className="aspect-[4/5] overflow-hidden bg-gray-100 relative">
                    <img src={product.image} alt={`Buy ${product.name} - Premium ${product.category}`} loading="lazy" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"  decoding="async" width="800" height="800" />
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      <span className="bg-white text-gray-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                        {product.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button 
                        onClick={(e) => { e.stopPropagation(); setQuickViewProduct(product); }}
                        className="p-2 bg-white/90 backdrop-blur rounded-full text-gray-900 hover:bg-white transition-colors shadow-lg translate-x-4 group-hover:translate-x-0 transition-transform"
                        title="Quick View"
                        aria-label="Quick View"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={(e) => { 
                          e.stopPropagation(); 
                          isInWishlist(product.id) ? removeFromWishlist(product.id) : addToWishlist(product); 
                        }}
                        className={`p-2 backdrop-blur rounded-full transition-all shadow-lg translate-x-4 group-hover:translate-x-0 delay-75 ${isInWishlist(product.id) ? 'bg-red-50 text-red-500 hover:bg-white' : 'bg-white/90 text-gray-500 hover:bg-white hover:text-red-500'}`}
                        title={isInWishlist(product.id) ? "Remove from wishlist" : "Add to wishlist"}
                        aria-label={isInWishlist(product.id) ? "Remove from wishlist" : "Add to wishlist"}
                      >
                        <Heart className={`w-4 h-4 ${isInWishlist(product.id) ? 'fill-current' : ''}`} />
                      </button>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-gray-700 transition-colors">{product.name}</h3>
                      <span className="text-lg font-medium text-gray-900">{product.price}</span>
                    </div>
                    <p className="text-sm text-gray-500 mb-4 flex-grow">{product.description}</p>
                    
                    <div className="space-y-3 mt-auto">
                      <div className="flex items-center text-sm">
                        <span className="text-gray-500 w-16">Sizes:</span>
                        <div className="flex gap-2">
                          {product.sizes.map(size => (
                            <button 
                              key={size}
                              onClick={() => handleSizeSelect(product.id, size)}
                              className={`px-2 py-1 rounded text-xs font-medium cursor-pointer transition-all ${
                                selectedSizes[product.id] === size 
                                  ? 'bg-gray-900 text-white scale-110 shadow-sm' 
                                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                              }`}
                            >
                              {size}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center text-sm">
                        <span className="text-gray-500 w-16">Fabric:</span>
                        <span className="text-gray-700">{product.material}</span>
                      </div>
                      <button 
                        onClick={() => addToCart(product, selectedSizes[product.id])}
                        className="w-full mt-4 bg-gray-900 text-white rounded-xl py-3 flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors cursor-pointer shadow-md hover:shadow-lg active:scale-[0.98]"
                      >
                        <ShoppingBag className="w-4 h-4" />
                        <span>Add to Cart</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-24 px-4 text-center bg-white rounded-2xl border border-gray-100 shadow-sm"
          >
            <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mb-6">
              <Search className="w-8 h-8 text-gray-500" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-500 max-w-md mx-auto mb-8">
              We couldn't find anything matching "{searchQuery}". Try adjusting your search or filters to find what you're looking for.
            </p>
            <button 
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setMaxPrice(5000);
              }}
              className="px-8 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors shadow-lg"
            >
              Clear All Filters
            </button>
          </motion.div>
        )}
        
        {filteredProducts.length > 0 && (
          <div className="mt-20 text-center bg-white p-10 rounded-3xl shadow-sm border border-gray-100 max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4">Need Style Inspiration?</h2>
            <p className="text-gray-600 mb-8 font-light leading-relaxed">
              Discover how to style our vintage denim jackets, oversized tees, and cargo pants. Check out the latest fashion trends and streetwear tips on our blog.
            </p>
            <a 
              href="/blog"
              onClick={(e) => { e.preventDefault(); navigate('/blog'); }}
              className="inline-flex bg-gray-900 text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl items-center justify-center gap-2 mx-auto"
              title="Read Fashion Trends & Streetwear Tips on our Blog"
            >
              Read Our Fashion Blog
            </a>
          </div>
        )}
      </div>
    </motion.div>

    {/* Quick View Modal */}
    <AnimatePresence>
      {quickViewProduct && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setQuickViewProduct(null)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4 md:p-6"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col md:flex-row relative"
          >
            <button
              onClick={() => setQuickViewProduct(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors shadow-sm"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="md:w-1/2 aspect-square md:aspect-auto bg-gray-100 relative">
              <img src={quickViewProduct.image} 
                alt={`${quickViewProduct.name} - ${quickViewProduct.category}`} 
                loading="lazy"
                className="w-full h-full object-cover"
               decoding="async" width="800" height="800" />
              <div className="absolute top-6 left-6">
                 <span className="bg-white text-gray-900 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest shadow-md">
                    {quickViewProduct.category}
                 </span>
              </div>
            </div>
            <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm font-semibold tracking-[0.2em] text-gray-500 uppercase">{quickViewProduct.color}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-2">{quickViewProduct.name}</h2>
              <div className="flex items-center gap-2 mb-4 text-sm font-medium">
                <div className="flex items-center text-gray-900">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 text-gray-200" />
                </div>
                <span className="text-gray-500 underline cursor-pointer hover:text-gray-900">Read Reviews</span>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">{quickViewProduct.price}</div>
              <p className="text-gray-600 mb-8 leading-relaxed font-light">{quickViewProduct.description}</p>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-semibold text-gray-900">Select Size</span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {quickViewProduct.sizes.map(size => (
                      <button 
                        key={size}
                        onClick={() => handleSizeSelect(quickViewProduct.id, size)}
                        className={`w-14 h-14 rounded-2xl text-sm font-bold flex items-center justify-center transition-all ${
                          selectedSizes[quickViewProduct.id] === size 
                            ? 'bg-gray-900 text-white shadow-lg ring-2 ring-gray-900 ring-offset-2' 
                            : 'bg-gray-50 text-gray-600 border border-gray-200 hover:bg-gray-100 hover:border-gray-300'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-100 flex gap-4">
                  <button 
                    onClick={() => {
                      addToCart(quickViewProduct, selectedSizes[quickViewProduct.id]);
                      setQuickViewProduct(null);
                    }}
                    className="flex-1 bg-gray-900 text-white rounded-2xl py-4 flex items-center justify-center gap-3 hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl active:scale-[0.98] font-bold tracking-wider"
                  >
                    <ShoppingBag className="w-5 h-5" />
                    <span>Add to Cart</span>
                  </button>
                  <button 
                    onClick={() => isInWishlist(quickViewProduct.id) ? removeFromWishlist(quickViewProduct.id) : addToWishlist(quickViewProduct)}
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all border ${
                      isInWishlist(quickViewProduct.id) 
                        ? 'bg-red-50 border-red-100 text-red-500' 
                        : 'bg-white border-gray-200 text-gray-500 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <Heart className={`w-6 h-6 ${isInWishlist(quickViewProduct.id) ? 'fill-current' : ''}`} />
                  </button>
                </div>
                <div className="mt-6 flex flex-col gap-2 text-sm text-gray-500 border-t border-gray-100 pt-6">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Material</span>
                    <span>{quickViewProduct.material}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
};
