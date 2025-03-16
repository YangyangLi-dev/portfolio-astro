import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BlogPost } from '../types';
import BlogCard from './BlogCard';

interface BlogGridProps {
  posts: BlogPost[];
}

const BlogGrid: React.FC<BlogGridProps> = ({ posts }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(posts.map(post => post.category))];

  const filteredPosts = posts
    .filter(post => 
      (selectedCategory === 'All' || post.category === selectedCategory) &&
      (post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
       post.content.toLowerCase().includes(searchQuery.toLowerCase()))
    );

  const featuredPost = posts.find(post => post.featured);

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-card focus:ring-2 focus:ring-primary"
            />
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full transition ${
                    selectedCategory === category
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 dark:bg-dark-card text-gray-700 dark:text-dark-text hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {featuredPost && (
            <BlogCard post={featuredPost} />
          )} */}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPosts
              .filter(post => !post.featured)
              .map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default BlogGrid;