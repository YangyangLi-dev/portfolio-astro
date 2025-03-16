import React, { useState } from 'react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  datePublished: string;
  category: string;
  readTime: string;
  coverImage: string;
  slug: string;
}

const BlogSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Understanding React Hooks',
      excerpt: 'Learn how to use React Hooks to manage state and side effects in functional components.',
      datePublished: '2023-08-15',
      category: 'React',
      readTime: '8 min read',
      coverImage: '/blog/react-hooks.jpg',
      slug: 'understanding-react-hooks'
    },
    {
      id: '2',
      title: 'TypeScript Best Practices',
      excerpt: 'A comprehensive guide to TypeScript best practices for large-scale applications.',
      datePublished: '2023-07-22',
      category: 'TypeScript',
      readTime: '12 min read',
      coverImage: '/blog/typescript-best-practices.jpg',
      slug: 'typescript-best-practices'
    },
    {
      id: '3',
      title: 'Building APIs with Node.js',
      excerpt: 'Learn how to build robust and scalable APIs using Node.js and Express.',
      datePublished: '2023-06-10',
      category: 'Backend',
      readTime: '10 min read',
      coverImage: '/blog/nodejs-api.jpg',
      slug: 'building-apis-with-nodejs'
    },
    // Add more blog posts as needed
  ];
  
  const categories = ['all', ...new Set(blogPosts.map(post => post.category))];
  
  const filteredPosts = activeCategory === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);
  
  return (
    <section id="blog" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Latest Articles</h2>
        
        <div className="flex justify-center mb-8 space-x-2 flex-wrap">
          {categories.map(category => (
            <button
              key={category}
              className={`px-4 py-2 m-1 rounded-full ${activeCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
              onClick={() => setActiveCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <div key={post.id} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-xs">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    {new Date(post.datePublished).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                  <a
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 hover:underline text-sm font-medium"
                  >
                    Read More →
                  </a>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex justify-end space-x-2">
                    <button className="text-gray-500 hover:text-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection; 