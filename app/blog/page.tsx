'use client';

import { motion } from 'motion/react';
import { Calendar, User, ArrowRight, Search, Tag, Clock } from 'lucide-react';
import Link from 'next/link';
import { blogPosts } from '@/src/data/blogs';

export default function BlogList() {
  return (
    <div className="pb-32">
      {/* Header Section */}
      <section className="relative py-32 overflow-hidden bg-gray-50/50">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/5 -skew-x-12 translate-x-1/4 pointer-events-none" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block text-brand-blue font-bold text-xs tracking-[0.3em] mb-8 uppercase border-b-2 border-brand-blue/20 pb-2">
              Our Blog
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-[1.1] text-balance">
              Latest <span className="text-brand-blue">Insights & News</span>
            </h1>
            <p className="text-gray-500 max-w-3xl mx-auto text-xl leading-relaxed">
              Stay updated with the latest trends in technology, digital marketing, and business growth. We share our expertise to help you succeed.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_350px] gap-24 items-start">
          {/* Blog Posts Grid */}
          <div className="space-y-24">
            {blogPosts.map((post, idx) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="group relative"
              >
                <Link href={`/blog/${post.id}`} className="block overflow-hidden rounded-[3rem] mb-10 shadow-2xl relative">
                  <div className="absolute inset-0 bg-brand-blue/0 group-hover:bg-brand-blue/10 transition-colors duration-700 z-10" />
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-[500px] object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md text-brand-blue text-xs font-bold px-6 py-2 rounded-full uppercase tracking-widest shadow-xl z-20">
                    {post.category}
                  </div>
                </Link>
                
                <div className="flex flex-wrap items-center gap-8 text-sm font-bold text-gray-400 mb-6 uppercase tracking-widest">
                  <div className="flex items-center gap-2 group/meta">
                    <Calendar className="h-4 w-4 text-brand-blue group-hover/meta:scale-110 transition-transform" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-2 group/meta">
                    <User className="h-4 w-4 text-brand-blue group-hover/meta:scale-110 transition-transform" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-2 group/meta">
                    <Clock className="h-4 w-4 text-brand-blue group-hover/meta:scale-110 transition-transform" />
                    {post.readTime}
                  </div>
                </div>

                <h2 className="text-4xl lg:text-5xl font-bold mb-6 group-hover:text-brand-blue transition-all duration-300 leading-tight">
                  <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-10 line-clamp-3">
                  {post.excerpt}
                </p>
                <Link 
                  href={`/blog/${post.id}`} 
                  className="inline-flex items-center gap-3 text-brand-blue font-bold text-lg group/link"
                >
                  Read Full Article 
                  <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center group-hover/link:bg-brand-blue group-hover/link:text-white transition-all duration-300">
                    <ArrowRight className="h-5 w-5 group-hover/link:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="space-y-16 sticky top-32">
            {/* Search */}
            <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-blue/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
              <h3 className="font-bold text-2xl mb-8 relative z-10">Search</h3>
              <div className="relative z-10">
                <input 
                  type="text" 
                  placeholder="Search articles..." 
                  className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 px-6 pr-14 focus:outline-none focus:ring-4 focus:ring-brand-blue/10 focus:border-brand-blue transition-all duration-300 text-lg"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-brand-blue text-white rounded-xl flex items-center justify-center shadow-lg shadow-brand-blue/20">
                  <Search className="h-5 w-5" />
                </div>
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-blue/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
              <h3 className="font-bold text-2xl mb-8 relative z-10">Categories</h3>
              <ul className="space-y-4 relative z-10">
                {['Marketing', 'Business', 'Technology', 'Design', 'Development'].map((cat) => (
                  <li key={cat}>
                    <button className="flex items-center justify-between w-full text-gray-500 hover:text-brand-blue transition-all duration-300 group text-lg font-medium">
                      <span className="group-hover:translate-x-2 transition-transform">{cat}</span>
                      <span className="bg-gray-50 px-3 py-1 rounded-lg text-xs font-bold border border-gray-100 group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue transition-all">12</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts */}
            <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-blue/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
              <h3 className="font-bold text-2xl mb-8 relative z-10">Recent Posts</h3>
              <div className="space-y-8 relative z-10">
                {blogPosts.slice(0, 3).map((post) => (
                  <Link key={post.id} href={`/blog/${post.id}`} className="flex gap-6 group items-center">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 shadow-lg group-hover:scale-105 transition-transform duration-500">
                      <img 
                        src={post.image} 
                        alt="" 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-base leading-tight line-clamp-2 group-hover:text-brand-blue transition-colors duration-300">{post.title}</h4>
                      <p className="text-xs font-bold text-gray-400 mt-2 uppercase tracking-widest">{post.date}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="p-10 bg-gray-900 rounded-[2.5rem] text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <h4 className="text-2xl font-bold mb-4 relative z-10">Newsletter</h4>
              <p className="text-gray-400 text-sm mb-8 relative z-10 leading-relaxed">Get the latest tech insights delivered straight to your inbox.</p>
              <div className="space-y-4 relative z-10">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:border-brand-blue transition-colors"
                />
                <button className="w-full bg-brand-blue text-white py-3 rounded-xl font-bold hover:bg-brand-blue/90 transition-all">
                  Subscribe
                </button>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
