import React from 'react';
import { motion } from 'motion/react';
import { SEO } from '../components/SEO';

export const About: React.FC = () => {
  return (
    <>
      <SEO 
        title="About Crown Clothing Brand | Premium Fashion & Sustainable Streetwear"
        description="Discover the mission of Crown Clothing Brand to provide premium fashion and sustainable streetwear for everyone."
        keywords="Crown Clothing Brand, Premium Fashion Brand, Sustainable Streetwear"
        url="/about"
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
              "name": "About",
              "item": "https://crownclothing.com/about"
            }]
          }),
          JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Crown Clothing Brand",
            "description": "Information about the history, mission, and sustainable streetwear practices of Crown Clothing Brand.",
            "url": "https://crownclothing.com/about",
            "mainEntity": {
              "@type": "Organization",
              "name": "Crown Clothing",
              "description": "A premium fashion brand focusing on sustainable streetwear.",
              "foundingDate": "2024",
              "url": "https://crownclothing.com"
            }
          })
        ]}
      />
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">About Crown Clothing Brand</h1>
            <div className="w-20 h-1 bg-gray-900 rounded-full mb-8"></div>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed text-justify">
              <p>
                Crown Clothing was founded by fashion industry veterans with a vision to build a <strong>premium fashion brand</strong> that is accessible, ethical, and authentic. 
                Our mission is to deliver high-quality, modern garments that empower our community to express their unique identities with confidence.
              </p>
              <p>
                We know that lasting style shouldn't come at the cost of the environment. That's why every piece in our collection is 
                crafted using ethically sourced fabrics, balancing timeless aesthetics with bold, <strong>sustainable streetwear</strong> innovations. 
              </p>
              
              <div className="bg-gray-50 p-8 rounded-2xl my-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4 font-serif">Our Core Values:</h2>
                <ul className="space-y-3 list-disc list-inside text-gray-700">
                  <li>Premium, Ethically Sourced Materials</li>
                  <li>Original, Modern Designs</li>
                  <li>Uncompromising Customer Satisfaction</li>
                  <li>Sustainable Streetwear Manufacturing Practices</li>
                </ul>
              </div>

              <p>
                Our expert team of designers carefully curates the latest fashion trends, rigorously testing each garment for durability, fit, and comfort. From original sketches to the final stitch, our deep expertise and passion for high-quality clothing guarantee a superior wardrobe experience.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?fm=webp&auto=format&fit=crop&q=80&w=1200" 
                alt="Crown Clothing Brand - Sustainable Streetwear Fashion" 
                loading="lazy"
                className="w-full h-full object-cover"
               decoding="async" width="800" height="800" />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl max-w-xs hidden md:block">
              <p className="text-gray-900 font-serif text-xl italic font-medium mt-2">
                "Style is a way to say who you are without having to speak."
              </p>
            </div>
          </div>
        </div>

        <div className="mt-24 text-center bg-gray-50 p-10 rounded-3xl shadow-sm border border-gray-100 max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Have Questions?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto text-lg leading-relaxed font-light">
            We value our customers and are always ready to help. Reach out to our award-winning support team for any inquiries.
          </p>
          <a 
            href="/contact"
            className="inline-block bg-gray-900 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors shadow-lg"
            title="Reach out to Crown Clothing Brand Contact Team"
          >
            Contact Customer Support
          </a>
        </div>
      </div>
    </motion.div>
    </>
  );
};
