import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { SEO } from '../components/SEO';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Normal site would submit form, we simulate success
    alert('Thank you for contacting Crown Clothing! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <SEO 
        title="Contact Crown Clothing | Customer Support & Help"
        description="Reach out to the Crown Clothing team for customer support. We are here for all your fashion store help requests, returns, and inquiries."
        keywords="Contact Crown Clothing, Customer Support, Fashion Store Help"
        url="/contact"
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
              "name": "Contact",
              "item": "https://crownclothing.com/contact"
            }]
          }),
          JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Crown Clothing",
            "description": "Get in touch with Crown Clothing for streetwear customer support.",
            "url": "https://crownclothing.com/contact",
            "mainEntity": {
              "@type": "Organization",
              "name": "Crown Clothing",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91 98765 43210",
                "contactType": "customer support",
                "email": "support@crownclothing.com",
                "availableLanguage": ["English", "Hindi"]
              }
            }
          })
        ]}
      />
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-gray-900">Contact Crown Clothing</h1>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">Need customer support or fashion store help? Find answers and reach out to the Crown Clothing team.</p>
          <div className="mt-6 w-24 h-1 bg-gray-900 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 bg-white rounded-3xl overflow-hidden shadow-sm">
          
          {/* Contact Information Panel */}
          <div className="bg-gray-900 text-white p-10 lg:col-span-1 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-8 tracking-wide">Contact Information</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-200">Address</h4>
                    <p className="text-gray-500 mt-1">123 Fashion Street, New Delhi, India</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-200">Phone</h4>
                    <p className="text-gray-500 mt-1">+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-200">Email</h4>
                    <p className="text-gray-500 mt-1">support@crownclothing.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-200">Business Hours</h4>
                    <p className="text-gray-500 mt-1">Monday - Saturday: 10:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-10 lg:col-span-2">
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-8">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all outline-none bg-gray-50 focus:bg-white"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all outline-none bg-gray-50 focus:bg-white"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all outline-none bg-gray-50 focus:bg-white"
                  placeholder="Your Phone Number"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all outline-none bg-gray-50 focus:bg-white resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                className="w-full bg-gray-900 text-white font-medium py-4 rounded-xl shadow-lg hover:shadow-xl hover:bg-gray-800 transition-all font-serif"
              >
                Submit Message
              </motion.button>
            </form>
          </div>

        </div>
      </div>
    </motion.div>
    </>
  );
};
