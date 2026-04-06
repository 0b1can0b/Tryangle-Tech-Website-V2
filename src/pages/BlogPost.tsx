import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, User, Tag, ArrowLeft, Share2, Facebook, Instagram, Linkedin } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { blogPosts } from '../data/blogs';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-6">
        <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
        <p className="text-gray-500 mb-8">The article you're looking for doesn't exist or has been moved.</p>
        <Link to="/blog" className="bg-brand-blue text-white px-8 py-3 rounded-full font-bold hover:bg-brand-dark transition">
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-12 pb-24">
      {/* Header Section */}
      <section className="bg-gray-50 py-20 mb-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/blog" className="inline-flex items-center gap-2 text-brand-blue font-semibold mb-8 hover:gap-3 transition-all">
              <ArrowLeft className="h-4 w-4" /> Back to Blog
            </Link>
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
              <span className="bg-brand-blue/10 text-brand-blue px-3 py-1 rounded-full font-bold uppercase tracking-widest text-[10px]">
                {post.category}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" /> {post.date}
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-8">
              {post.title}
            </h1>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
                <User className="h-6 w-6" />
              </div>
              <div>
                <p className="font-bold text-gray-800">{post.author}</p>
                <p className="text-sm text-gray-500">Author at Tryangle Tech</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-[500px] object-cover rounded-3xl mb-12 shadow-2xl"
            referrerPolicy="no-referrer"
          />
          
          <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-brand-blue prose-strong:text-gray-900 prose-img:rounded-2xl">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-4">
              <span className="font-bold text-gray-800">Share this post:</span>
              <div className="flex gap-3">
                <button className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-600 hover:bg-brand-blue hover:text-white transition-all">
                  <Facebook className="h-5 w-5" />
                </button>
                <button className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-600 hover:bg-brand-blue hover:text-white transition-all">
                  <Instagram className="h-5 w-5" />
                </button>
                <button className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-600 hover:bg-brand-blue hover:text-white transition-all">
                  <Linkedin className="h-5 w-5" />
                </button>
                <button className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-600 hover:bg-brand-blue hover:text-white transition-all">
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="flex gap-2">
              {['Marketing', 'Tech', 'Business'].map(tag => (
                <span key={tag} className="text-xs bg-gray-100 text-gray-500 px-3 py-1 rounded-full">#{tag}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Related Posts */}
      <section className="bg-gray-50 py-24 mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.filter(p => p.id !== id).slice(0, 3).map((post) => (
              <Link key={post.id} to={`/blog/${post.id}`} className="bg-white rounded-2xl overflow-hidden shadow-sm group hover:shadow-xl transition-all duration-500">
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6">
                  <p className="text-brand-blue font-bold text-[10px] uppercase tracking-widest mb-2">{post.category}</p>
                  <h3 className="font-bold text-lg mb-4 line-clamp-2 group-hover:text-brand-blue transition-colors">{post.title}</h3>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <Calendar className="h-3 w-3" /> {post.date}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
