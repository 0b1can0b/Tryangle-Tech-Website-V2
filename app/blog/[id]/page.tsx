'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { blogPosts as staticPosts, BlogPost as BlogPostType } from '@/src/data/blogs';

export default function BlogPost() {
  const params = useParams();
  const id = params?.id as string;
  const [post, setPost] = useState<any>(null);
  const [relatedPosts, setRelatedPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      try {
        // 1. Try Local API (Dynamic MDX)
        const localResponse = await fetch('/api/local-blogs');
        if (localResponse.ok) {
          const localPosts = await localResponse.json();
          const localPost = localPosts.find((p: any) => p.id === id);
          if (localPost) {
            setPost({
              ...localPost,
              isStatic: true // Using markdown rendering
            });
            setRelatedPosts(localPosts.filter((p: any) => p.id !== id).slice(0, 3));
            setLoading(false);
            return;
          }
        }

        // 2. Fallback to Static Data
        const staticPost = staticPosts.find((p) => p.id === id);
        if (staticPost) {
          setPost({
            ...staticPost,
            isStatic: true
          });
          setRelatedPosts(staticPosts.filter((p) => p.id !== id).slice(0, 3));
        }
      } catch (error) {
        console.error('Error fetching post:', error);
        const staticPost = staticPosts.find((p) => p.id === id);
        if (staticPost) {
          setPost({
            ...staticPost,
            isStatic: true
          });
          setRelatedPosts(staticPosts.filter((p) => p.id !== id).slice(0, 3));
        }
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      fetchPost();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent animate-spin"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-6">
        <h2 className="text-4xl font-headline font-bold mb-4">Node Not Found</h2>
        <p className="text-on-surface-variant mb-8 font-sans">The requested digital asset is unavailable or has been relocated.</p>
        <Link href="/blog" className="bg-on-surface text-white px-10 py-4 font-label font-bold uppercase text-xs tracking-[0.2em] hover:bg-primary transition-all">
          Back to Journal
        </Link>
      </div>
    );
  }

  return (
    <div className="pb-32">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
        <Image 
          src={post.image} 
          alt={post.title}
          fill
          className="object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-on-surface via-on-surface/60 to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full pb-24">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl"
            >
              <Link href="/blog" className="inline-flex items-center gap-3 text-white/70 font-label font-bold text-[10px] uppercase tracking-[0.3em] mb-10 hover:text-white transition-all">
                <span className="material-symbols-outlined text-sm">arrow_back</span> Back to Journal
              </Link>
              <div className="inline-block bg-primary text-white text-[10px] font-label font-bold px-5 py-2 uppercase tracking-widest mb-8">
                {post.category}
              </div>
              <h1 className="text-5xl lg:text-8xl font-headline font-bold text-white mb-10 leading-[0.9] tracking-tighter">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-10 text-white/60 text-[11px] font-label font-bold uppercase tracking-[0.2em]">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-lg text-primary">person</span>
                  {post.author}
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-lg text-primary">calendar_today</span>
                  {post.date}
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-lg text-primary">schedule</span>
                  {post.readTime}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-20 items-start">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-8"
            >
              <div className="prose prose-xl max-w-none prose-headings:font-headline prose-headings:font-bold prose-headings:text-on-surface prose-p:text-on-surface-variant prose-p:font-sans prose-p:leading-relaxed prose-strong:text-on-surface prose-img:border prose-img:border-outline-variant prose-blockquote:border-primary prose-blockquote:bg-surface-container-lowest prose-blockquote:py-4 prose-blockquote:px-10 prose-blockquote:font-headline prose-blockquote:italic">
                <div className="markdown-body">
                  <ReactMarkdown>{post.content}</ReactMarkdown>
                </div>
              </div>
              
              <div className="mt-24 pt-12 border-t border-outline-variant flex flex-wrap items-center justify-between gap-10">
                <div className="flex items-center gap-8">
                  <span className="text-[10px] font-label font-bold text-on-surface-variant uppercase tracking-[0.3em]">Distribute:</span>
                  <div className="flex gap-4">
                    {['facebook', 'instagram', 'linkedin', 'share'].map((icon, i) => (
                      <button key={i} className="w-12 h-12 border border-outline-variant flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-all cursor-pointer">
                        <span className="material-symbols-outlined text-xl">{icon}</span>
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  {['Technology', 'Innovation', 'Business'].map(tag => (
                    <span key={tag} className="text-[10px] font-label font-bold border border-outline-variant text-on-surface-variant px-5 py-2 uppercase tracking-widest hover:border-primary hover:text-primary transition-colors cursor-pointer">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-12 sticky top-32">
              <div className="p-10 border border-outline-variant text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-primary" />
                <div className="w-20 h-20 border border-outline-variant flex items-center justify-center text-primary mb-8 mx-auto">
                  <span className="material-symbols-outlined text-4xl">person</span>
                </div>
                <h4 className="font-headline font-bold text-2xl mb-4 tracking-tight">{post.author}</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-10 font-sans">Senior Technical Architect at Tryangle Tech, specializing in digital infrastructure and modern system design.</p>
                <div className="flex justify-center gap-6">
                  <button className="text-on-surface-variant hover:text-primary transition-all">
                    <span className="material-symbols-outlined">language</span>
                  </button>
                  <button className="text-on-surface-variant hover:text-primary transition-all">
                    <span className="material-symbols-outlined">link</span>
                  </button>
                </div>
              </div>

              <div className="p-10 bg-on-surface text-white relative overflow-hidden">
                <h4 className="text-3xl font-headline font-bold mb-6 tracking-tight">Initiate Project</h4>
                <p className="text-outline-variant text-sm mb-10 font-sans leading-relaxed">Let's discuss how our architectural approach can optimize your digital ecosystem.</p>
                <Link 
                  href="/contact" 
                  className="block w-full bg-primary text-white py-5 font-label font-bold uppercase text-xs tracking-[0.2em] text-center hover:bg-white hover:text-primary transition-all"
                >
                  Consult Now
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-32 border-t border-outline-variant">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex items-end justify-between mb-20">
            <div>
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="w-10 h-[1px] bg-primary"></span>
                <span className="text-[10px] font-label uppercase tracking-[0.3em] text-primary font-bold">CONTINUE READING</span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-headline font-bold text-on-surface tracking-tighter">Related <span className="text-gradient">Analysis.</span></h2>
            </div>
            <Link href="/blog" className="text-on-surface font-label font-bold text-xs uppercase tracking-[0.2em] hover:text-primary border-b border-on-surface hover:border-primary pb-2 hidden md:block transition-all">
              All Journal Entries
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {relatedPosts.map((relatedPost, index) => (
              <motion.div
                key={relatedPost.id || relatedPost.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/blog/${relatedPost.id || relatedPost.slug}`} className="block relative aspect-[16/10] overflow-hidden border border-outline-variant mb-8">
                  <Image 
                    src={relatedPost.image} 
                    alt={relatedPost.title}
                    fill
                    className="object-cover transition-all duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6 bg-white text-primary text-[9px] font-label font-bold px-4 py-1.5 uppercase tracking-widest">
                    {relatedPost.category}
                  </div>
                </Link>
                <div>
                  <h4 className="text-2xl font-headline font-bold mb-4 group-hover:text-primary transition-colors line-clamp-2 leading-tight tracking-tight">
                    <Link href={`/blog/${relatedPost.id || relatedPost.slug}`}>{relatedPost.title}</Link>
                  </h4>
                  <p className="text-on-surface-variant mb-8 line-clamp-2 leading-relaxed font-sans text-sm">{relatedPost.excerpt}</p>
                  <Link 
                    href={`/blog/${relatedPost.id || relatedPost.slug}`}
                    className="text-on-surface font-label font-bold text-[10px] uppercase tracking-[0.2em] flex items-center gap-3 group/link hover:text-primary transition-all"
                  >
                    Read Analysis <span className="material-symbols-outlined text-sm group-hover/link:translate-x-2 transition-transform">arrow_forward</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
