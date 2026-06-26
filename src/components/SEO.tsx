import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  url: string;
  image?: string;
  schema?: any[];
}

export const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  keywords, 
  url, 
  image = 'https://images.unsplash.com/photo-1483985988355-763728e1935b?fm=webp&auto=format&fit=crop&q=80&w=1200', 
  schema = [] 
}) => {
  const canonicalUrl = `https://crownclothing.netlify.app${url}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {schema.map((s, i) => (
        <script type="application/ld+json" key={i} dangerouslySetInnerHTML={{ __html: typeof s === 'string' ? s : JSON.stringify(s) }} />
      ))}
    </Helmet>
  );
};
