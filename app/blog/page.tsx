'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
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
      <section className="pt-48 pb-32 architectural-grid">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-3 mb-8">
              <span className="w-12 h-[1px] bg-primary"></span>
              <span className="text-xs font-label uppercase tracking-[0.3em] text-primary font-bold">THE JOURNAL</span>
            </div>
            <h1 className="text-6xl lg:text-9xl font-headline font-bold text-on-surface mb-12 leading-[0.85] tracking-tighter">
              Digital <br />
              <span className="text-gradient">Insights.</span>
            </h1>
            <p className="text-on-surface-variant text-2xl leading-relaxed max-w-3xl font-sans">
              Architectural perspectives on technology, design, and the future of digital infrastructure.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-40">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-8 space-y-16">
              {loading ? (
                <div className="flex justify-center py-20">
                  <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                </div>
              ) : (
                posts.map((post, idx) => (
                  <motion.article 
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="group"
                  >
                    <div className="grid md:grid-cols-12 gap-8 items-center">
                      <div className="md:col-span-5 aspect-[16/10] overflow-hidden border border-outline-variant group-hover:border-primary transition-colors duration-500">
                        <Image 
                          src={post.image} 
                          alt={post.title} 
                          width={800}
                          height={500}
                          className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="md:col-span-7">
                        <div className="flex items-center gap-4 text-[10px] font-label font-bold text-primary uppercase tracking-widest mb-4">
                          <span>{post.date}</span>
                          <span className="w-1 h-1 rounded-full bg-outline-variant" />
                          <span>{post.category}</span>
                        </div>
                        <h2 className="text-3xl font-headline font-bold text-on-surface mb-4 group-hover:text-primary transition-colors leading-tight tracking-tight">
                          <Link href={`/blog/${post.id}`}>{post.title}</Link>
                        </h2>
                        <p className="text-on-surface-variant mb-6 line-clamp-2 text-base leading-relaxed font-sans">
                          {post.excerpt}
                        </p>
                        <Link href={`/blog/${post.id}`} className="inline-flex items-center gap-3 text-[11px] font-label font-bold uppercase tracking-[0.2em] text-on-surface group-hover:text-primary transition-all">
                          Read Analysis <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))
              )}
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-16">
              {/* Search */}
              <div className="p-10 border border-outline-variant">
                <h3 className="font-headline font-bold text-xl mb-8 tracking-tight">Search Archive</h3>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Keywords..." 
                    className="w-full bg-surface-container-lowest border border-outline-variant py-4 px-5 focus:outline-none focus:border-primary transition-all font-sans"
                  />
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
                </div>
              </div>

              {/* Categories */}
              <div className="p-10 border border-outline-variant">
                <h3 className="font-headline font-bold text-xl mb-8 tracking-tight">Classification</h3>
                <ul className="space-y-4">
                  {['Technology', 'Digital Marketing', 'Business', 'AI', 'Web Design'].map((cat) => (
                    <li key={cat}>
                      <button className="flex items-center justify-between w-full text-on-surface-variant hover:text-primary transition-colors group">
                        <span className="font-sans text-sm group-hover:translate-x-1 transition-transform">{cat}</span>
                        <span className="text-[10px] font-label font-bold opacity-50">0</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter */}
              <div className="bg-on-surface p-10 text-white">
                <h4 className="text-2xl font-headline font-bold mb-4 tracking-tight">Newsletter</h4>
                <p className="text-outline-variant text-sm mb-8 font-sans">Receive architectural insights directly in your inbox.</p>
                <div className="space-y-4">
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full bg-white/5 border border-white/10 py-4 px-5 focus:outline-none focus:border-primary transition-colors font-sans"
                  />
                  <button className="w-full bg-primary text-white py-4 font-label font-bold uppercase text-xs tracking-[0.2em] hover:bg-white hover:text-primary transition-all">
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
