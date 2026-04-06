import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import ReactMarkdown from 'react-markdown';
import { Calendar, User, Clock, ArrowLeft, Share2, Bookmark, Globe, Facebook, Instagram, Linkedin } from 'lucide-react';
import { blogPosts } from '../data/blogs';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-6">
        <h2 className="text-3xl font-bold mb-4">Post Not Found</h2>
        <p className="text-gray-500 mb-8">The blog post you're looking for doesn't exist or has been moved.</p>
        <Link to="/blog" className="bg-brand-blue text-white px-8 py-3 rounded-xl font-bold hover:bg-brand-blue/90 transition-all">
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="pb-32">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full pb-20">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link to="/blog" className="inline-flex items-center gap-2 text-white/80 font-bold text-sm mb-8 hover:text-white hover:gap-3 transition-all">
                <ArrowLeft className="h-4 w-4" /> Back to Blog
              </Link>
              <div className="inline-block bg-brand-blue text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6 shadow-lg shadow-brand-blue/20">
                {post.category}
              </div>
              <h1 className="text-4xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] text-balance">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-8 text-gray-300 text-sm font-medium">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-brand-blue" />
                  {post.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-brand-blue" />
                  {post.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-brand-blue" />
                  {post.readTime}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_300px] gap-20 items-start">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="prose prose-xl max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed prose-li:text-gray-600 prose-strong:text-gray-900 prose-img:rounded-[2.5rem] prose-img:shadow-2xl prose-blockquote:border-brand-blue prose-blockquote:bg-gray-50 prose-blockquote:py-2 prose-blockquote:px-8 prose-blockquote:rounded-2xl prose-blockquote:italic">
                <div className="markdown-body">
                  <ReactMarkdown>{post.content}</ReactMarkdown>
                </div>
              </div>
              
              <div className="mt-20 pt-12 border-t border-gray-100 flex flex-wrap items-center justify-between gap-8">
                <div className="flex items-center gap-6">
                  <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Share:</span>
                  <div className="flex gap-3">
                    {[Facebook, Instagram, Linkedin, Share2].map((Icon, i) => (
                      <button key={i} className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-brand-blue hover:text-white hover:scale-110 active:scale-95 transition-all cursor-pointer shadow-sm">
                        <Icon className="h-5 w-5" />
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3">
                  {['Technology', 'Innovation', 'Business'].map(tag => (
                    <span key={tag} className="text-xs font-bold bg-gray-100 text-gray-500 px-4 py-2 rounded-full hover:bg-brand-blue/10 hover:text-brand-blue transition-colors cursor-pointer">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Sidebar */}
            <aside className="space-y-12 sticky top-32">
              <div className="p-10 bg-gray-50 rounded-[2.5rem] border border-gray-100 text-center relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-brand-blue" />
                <div className="w-24 h-24 bg-brand-blue/10 rounded-3xl flex items-center justify-center text-brand-blue mb-6 mx-auto group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-brand-blue/5">
                  <User className="h-12 w-12" />
                </div>
                <h4 className="font-bold text-xl mb-3">{post.author}</h4>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">Senior Tech Consultant at Tryangle Tech, specializing in modern web architectures and digital transformation.</p>
                <div className="flex justify-center gap-4">
                  <button className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:text-brand-blue hover:border-brand-blue transition-all cursor-pointer shadow-sm">
                    <Globe className="h-4 w-4" />
                  </button>
                  <button className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:text-brand-blue hover:border-brand-blue transition-all cursor-pointer shadow-sm">
                    <Linkedin className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="p-10 bg-gray-900 rounded-[2.5rem] text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <h4 className="text-2xl font-bold mb-4 relative z-10">Have a Project?</h4>
                <p className="text-gray-400 text-sm mb-8 relative z-10 leading-relaxed">Let's discuss how our expertise can help you achieve your goals.</p>
                <Link 
                  to="/contact" 
                  className="block w-full bg-brand-blue text-white py-4 rounded-2xl font-bold text-center hover:bg-brand-blue/90 hover:scale-[1.02] transition-all relative z-10 shadow-lg shadow-brand-blue/20"
                >
                  Get Started
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-32 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-16">
            <div>
              <div className="inline-block text-brand-blue font-bold text-xs tracking-[0.3em] mb-4 uppercase border-b-2 border-brand-blue/20 pb-2">
                Continue Reading
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold">Related <span className="text-brand-blue">Articles</span></h2>
            </div>
            <Link to="/blog" className="text-brand-blue font-bold text-lg hover:underline underline-offset-8 hidden md:block">
              View All Posts
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {blogPosts.filter(p => p.id !== post.id).slice(0, 3).map((relatedPost, index) => (
              <motion.div
                key={relatedPost.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-700"
              >
                <Link to={`/blog/${relatedPost.id}`} className="block relative h-64 overflow-hidden">
                  <img 
                    src={relatedPost.image} 
                    alt={relatedPost.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm text-brand-blue text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                    {relatedPost.category}
                  </div>
                </Link>
                <div className="p-8">
                  <h4 className="text-2xl font-bold mb-4 group-hover:text-brand-blue transition-colors line-clamp-2 leading-tight">
                    <Link to={`/blog/${relatedPost.id}`}>{relatedPost.title}</Link>
                  </h4>
                  <p className="text-gray-500 mb-8 line-clamp-2 leading-relaxed">{relatedPost.excerpt}</p>
                  <Link 
                    to={`/blog/${relatedPost.id}`}
                    className="text-brand-blue font-bold flex items-center gap-2 group/link"
                  >
                    Read More <span className="group-hover/link:translate-x-2 transition-transform duration-300">→</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
