import { motion } from 'motion/react';
import { Calendar, User, ArrowRight, Search, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogs';

const BlogList = () => {
  return (
    <div className="pt-12 pb-24">
      {/* Header Section */}
      <section className="bg-gray-50 py-20 mb-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-brand-blue font-semibold text-sm tracking-widest mb-4 uppercase">■ Our Blog ■</p>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Latest <span className="text-brand-blue">Insights & News</span>
            </h1>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Stay updated with the latest trends in technology, digital marketing, and business growth.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Blog Posts Grid */}
          <div className="lg:col-span-2 space-y-12">
            {blogPosts.map((post, idx) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <Link to={`/blog/${post.id}`} className="block overflow-hidden rounded-3xl mb-6">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </Link>
                <div className="flex items-center gap-6 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-brand-blue" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-brand-blue" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag className="h-4 w-4 text-brand-blue" />
                    {post.category}
                  </div>
                </div>
                <h2 className="text-3xl font-bold mb-4 group-hover:text-brand-blue transition-colors">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <Link 
                  to={`/blog/${post.id}`} 
                  className="inline-flex items-center gap-2 text-brand-blue font-bold hover:gap-3 transition-all"
                >
                  Read Full Article <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.article>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="space-y-12">
            {/* Search */}
            <div className="bg-gray-50 p-8 rounded-3xl">
              <h3 className="font-bold text-xl mb-6">Search</h3>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search articles..." 
                  className="w-full bg-white border border-gray-200 rounded-xl py-3 px-4 pr-12 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition"
                />
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Categories */}
            <div className="bg-gray-50 p-8 rounded-3xl">
              <h3 className="font-bold text-xl mb-6">Categories</h3>
              <ul className="space-y-4">
                {['Marketing', 'Business', 'Technology', 'Design', 'Development'].map((cat) => (
                  <li key={cat}>
                    <button className="flex items-center justify-between w-full text-gray-600 hover:text-brand-blue transition group">
                      <span>{cat}</span>
                      <span className="bg-white px-2 py-1 rounded text-xs border border-gray-100 group-hover:bg-brand-blue group-hover:text-white transition">12</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts */}
            <div className="bg-gray-50 p-8 rounded-3xl">
              <h3 className="font-bold text-xl mb-6">Recent Posts</h3>
              <div className="space-y-6">
                {blogPosts.slice(0, 3).map((post) => (
                  <Link key={post.id} to={`/blog/${post.id}`} className="flex gap-4 group">
                    <img 
                      src={post.image} 
                      alt="" 
                      className="w-20 h-20 rounded-xl object-cover shrink-0"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="font-bold text-sm line-clamp-2 group-hover:text-brand-blue transition">{post.title}</h4>
                      <p className="text-xs text-gray-400 mt-1">{post.date}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default BlogList;
