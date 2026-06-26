import React from 'react';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { SEO } from '../components/SEO';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  category: string;
}

export const Blog: React.FC = () => {
  const posts: BlogPost[] = [
    {
      id: 1,
      title: '5 Essential Fashion Trends to Watch in 2024',
      excerpt: 'Stay ahead of the curve with our comprehensive guide to this year\'s most defining fashion movements, from sustainable choices to bold silhouettes.',
      date: 'June 12, 2024',
      author: 'Emma Style',
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?fm=webp&auto=format&fit=crop&q=80&w=800',
      category: 'Trends'
    },
    {
      id: 2,
      title: 'How to Style Your Oversized Graphic Tee',
      excerpt: 'The oversized graphic tee is a versatile staple. Learn how to dress it up or down for any casual occasion with these 4 simple style formulas.',
      date: 'May 28, 2024',
      author: 'Alex Weaver',
      image: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?fm=webp&auto=format&fit=crop&q=80&w=800',
      category: 'Style Guide'
    },
    {
      id: 3,
      title: 'Denim on Denim: The Ultimate Guide',
      excerpt: 'Mastering the Canadian tuxedo isn\'t as hard as it seems. Discover the secrets to pairing different washes and fits for a flawless denim-on-denim look.',
      date: 'May 15, 2024',
      author: 'Chris Taylor',
      image: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?fm=webp&auto=format&fit=crop&q=80&w=800',
      category: 'Fashion Tips'
    },
    {
      id: 4,
      title: 'Choosing the Perfect Hoodie for Every Season',
      excerpt: 'Not all hoodies are created equal. Find out how to select the right fabric weight, fit, and style to keep you comfortable all year round.',
      date: 'April 30, 2024',
      author: 'Jordan Lee',
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?fm=webp&auto=format&fit=crop&q=80&w=800',
      category: 'Essentials'
    }
  ];

  return (
    <>
      <SEO 
        title="Fashion Trends & Style Guide | Crown Clothing Blog"
        description="Discover the latest fashion trends, explore our expert style guide, and get the best streetwear tips at the Crown Clothing blog."
        keywords="Fashion Trends, Style Guide, Streetwear Tips"
        url="/blog"
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
              "name": "Blog",
              "item": "https://crownclothing.com/blog"
            }]
          }),
          JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Crown Style Blog",
            "url": "https://crownclothing.com/blog",
            "description": "Discover streetwear fashion trends, expert style guides, and the latest news on our modern fashion blog."
          })
        ]}
      />
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-gray-900">Fashion Trends & Style Guide</h1>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">Discover the latest fashion trends, explore our expert style guide, and get the best streetwear tips from our editors.</p>
          <div className="mt-6 w-24 h-1 bg-gray-900 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {posts.map((post) => (
            <motion.article 
              whileHover={{ y: -5 }}
              key={post.id} 
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col"
            >
              <div className="aspect-[16/9] overflow-hidden bg-gray-100">
                <img src={post.image} alt={`${post.title} - Fashion Trends`} loading="lazy" className="w-full h-full object-cover object-center"  decoding="async" width="800" height="800" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full font-medium">{post.category}</span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3 leading-tight">{post.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{post.excerpt}</p>
                
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-900">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                      <User className="w-4 h-4 text-gray-500" />
                    </div>
                    <span>{post.author}</span>
                  </div>
                  <span className="flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-gray-600 transition-colors">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        
        <div className="mt-20 text-center bg-white p-10 rounded-3xl shadow-sm border border-gray-100 max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Upgrade Your Wardrobe</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto text-lg leading-relaxed font-light">
            Ready to apply these style tips? Explore our latest collection of premium streetwear, including oversized tees, cargo pants, and hoodies.
          </p>
          <a 
            href="/products"
            className="inline-block bg-gray-900 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors shadow-lg"
            title="Shop Premium Hoodies and Fashion Apparel"
          >
            Shop Premium Streetwear
          </a>
        </div>
      </div>
    </motion.div>
    </>
  );
};
