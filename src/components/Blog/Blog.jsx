import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../UI/SectionTitle';

const Blog = ({ isDarkMode }) => {
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: 'Building Responsive Layouts with Tailwind CSS',
      excerpt: 'Learn how to create beautiful, responsive layouts using Tailwind CSS utility classes without writing custom CSS.',
      category: 'Frontend',
      date: 'June 15, 2023',
      image: '/images/blog/tailwind.jpg',
      readTime: '5 min read',
      slug: 'building-responsive-layouts-with-tailwind'
    },
    {
      id: 2,
      title: 'React Performance Optimization Techniques',
      excerpt: 'Explore advanced techniques to optimize your React applications and improve user experience through better performance.',
      category: 'React',
      date: 'May 22, 2023',
      image: '/images/blog/react-performance.jpg',
      readTime: '8 min read',
      slug: 'react-performance-optimization-techniques'
    },
    {
      id: 3,
      title: 'Building a REST API with Node.js and Express',
      excerpt: 'Step-by-step guide to creating a robust REST API using Node.js, Express, and MongoDB with proper error handling.',
      category: 'Backend',
      date: 'April 10, 2023',
      image: '/images/blog/nodejs-api.jpg',
      readTime: '10 min read',
      slug: 'building-rest-api-nodejs-express'
    },
    {
      id: 4,
      title: 'Implementing Authentication with JWT',
      excerpt: 'Learn how to implement secure authentication in your web applications using JSON Web Tokens (JWT).',
      category: 'Security',
      date: 'March 5, 2023',
      image: '/images/blog/jwt-auth.jpg',
      readTime: '7 min read',
      slug: 'implementing-authentication-jwt'
    },
    {
      id: 5,
      title: 'CSS Grid vs Flexbox: When to Use Which',
      excerpt: 'A comprehensive comparison of CSS Grid and Flexbox layouts with practical examples to help you choose the right tool.',
      category: 'CSS',
      date: 'February 18, 2023',
      image: '/images/blog/css-layouts.jpg',
      readTime: '6 min read',
      slug: 'css-grid-vs-flexbox'
    },
    {
      id: 6,
      title: 'Introduction to TypeScript for React Developers',
      excerpt: 'Why you should consider TypeScript for your React projects and how to get started with proper typing.',
      category: 'TypeScript',
      date: 'January 12, 2023',
      image: '/images/blog/typescript-react.jpg',
      readTime: '9 min read',
      slug: 'intro-typescript-react-developers'
    },
  ];

  const [activeCategory, setActiveCategory] = useState('All');

  // Get unique categories
  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];

  // Filter posts based on selected category
  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="blog" className={`py-20 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-50 text-gray-800'}`}>
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Blog & Articles" 
          subtitle="Thoughts, insights, and tutorials on web development"
          isDarkMode={isDarkMode}
        />
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category 
                  ? isDarkMode 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-blue-500 text-white'
                  : isDarkMode 
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Blog Posts Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredPosts.map(post => (
            <motion.article 
              key={post.id} 
              variants={itemVariants}
              className={`rounded-lg overflow-hidden shadow-lg transition-all duration-300 h-full flex flex-col ${
                isDarkMode ? 'bg-gray-700 hover:shadow-blue-500/20' : 'bg-white hover:shadow-xl'
              }`}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image || 'https://via.placeholder.com/400x200'} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                />
                <span className={`absolute top-0 right-0 m-2 px-2 py-1 text-xs rounded ${
                  isDarkMode ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white'
                }`}>
                  {post.category}
                </span>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-center text-sm mb-3">
                  <span className={isDarkMode ? 'text-gray-300' : 'text-gray-500'}>
                    {post.date}
                  </span>
                  <span className={isDarkMode ? 'text-gray-300' : 'text-gray-500'}>
                    {post.readTime}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 hover:text-blue-500 transition-colors">
                  <a href={`/blog/${post.slug}`}>{post.title}</a>
                </h3>
                
                <p className={`mb-4 flex-grow ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {post.excerpt}
                </p>
                
                <div className="mt-auto">
                  <a 
                    href={`/blog/${post.slug}`}
                    className={`inline-flex items-center text-sm font-medium transition-colors ${
                      isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'
                    }`}
                  >
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
        
        {/* View All Posts Button */}
        <div className="text-center mt-12">
          <a 
            href="/blog"
            className={`inline-block px-6 py-3 rounded-full transition-colors ${
              isDarkMode 
                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
          >
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
