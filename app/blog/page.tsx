'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Search, Clock } from 'lucide-react';
import Link from 'next/link';
import { blogPosts as staticPosts, BlogPost } from '@/src/data/blogs';

export default function BlogList() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const localResponse = await fetch('/api/local-blogs');
        if (localResponse.ok) {
          const localPosts = await localResponse.json();
          if (localPosts && localPosts.length > 0) {
            setPosts(localPosts);
            setLoading(false);
            return;
          }
        }
        setPosts(staticPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setPosts(staticPosts);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="bg-brand-gray/30 py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-brand-blue">Blog</span>
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Explore the latest insights, trends, and news from the world of technology and digital innovation.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {loading ? (
                <div className="flex justify-center py-20">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-blue"></div>
                </div>
              ) : (
                posts.map((post, idx) => (
                  <motion.article 
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="zoho-card overflow-hidden group"
                  >
                    <div className="grid md:grid-cols-2">
                      <div className="aspect-video md:aspect-auto overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="p-8 flex flex-col justify-center">
                        <div className="flex items-center gap-4 text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                          <span>{post.date}</span>
                          <span className="w-1 h-1 rounded-full bg-gray-300" />
                          <span>{post.category}</span>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-brand-blue transition-colors leading-tight">
                          <Link href={`/blog/${post.id}`}>{post.title}</Link>
                        </h2>
                        <p className="text-gray-600 mb-6 line-clamp-2 text-sm leading-relaxed">
                          {post.excerpt}
                        </p>
                        <Link href={`/blog/${post.id}`} className="inline-flex items-center gap-2 text-brand-blue font-bold hover:gap-3 transition-all">
                          Read More <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))
              )}
            </div>

            {/* Sidebar */}
            <aside className="space-y-12">
              {/* Search */}
              <div className="zoho-card p-8">
                <h3 className="font-bold text-lg mb-6">Search</h3>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search articles..." 
                    className="w-full bg-gray-50 border border-gray-100 rounded-lg py-3 px-4 focus:outline-none focus:border-brand-blue transition-all"
                  />
                  <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
              </div>

              {/* Categories */}
              <div className="zoho-card p-8">
                <h3 className="font-bold text-lg mb-6">Categories</h3>
                <ul className="space-y-4">
                  {['Technology', 'Digital Marketing', 'Business', 'AI', 'Web Design'].map((cat) => (
                    <li key={cat}>
                      <button className="flex items-center justify-between w-full text-gray-600 hover:text-brand-blue transition-colors group">
                        <span className="group-hover:translate-x-1 transition-transform">{cat}</span>
                        <span className="text-xs font-bold text-gray-400">0</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter */}
              <div className="bg-brand-dark p-8 rounded-2xl text-white">
                <h4 className="text-xl font-bold mb-4">Newsletter</h4>
                <p className="text-gray-400 text-sm mb-6">Get the latest tech insights delivered straight to your inbox.</p>
                <div className="space-y-4">
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 focus:outline-none focus:border-brand-blue transition-colors"
                  />
                  <button className="w-full bg-brand-blue text-white py-3 rounded-lg font-bold hover:bg-brand-blue/90 transition-all">
                    Subscribe
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
