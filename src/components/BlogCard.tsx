import React from 'react';
import { motion } from 'framer-motion';
import { BlogPost } from '../types';
import { format } from 'date-fns';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-white dark:bg-dark-card rounded-lg shadow-lg overflow-hidden"
    >
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        {post.featured && (
          <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-2">
            Featured
          </span>
        )}
        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
          <time dateTime={post.publishDate}>
            {format(new Date(post.publishDate), 'MMM dd, yyyy')}
          </time>
          <span>{post.readingTime} min read</span>
        </div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-dark-text mb-2">
          {post.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {post.subtitle}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-dark-bg rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={`/blog/${post.slug}`}
          className="text-primary hover:text-secondary transition font-medium"
        >
          Read more →
        </a>
      </div>
    </motion.article>
  );
};

export default BlogCard;