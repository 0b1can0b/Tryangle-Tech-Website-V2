'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

type ContentType = 'blogs' | 'projects' | 'testimonials';

export default function CMSPage() {
  const [activeTab, setActiveTab] = useState<ContentType>('blogs');
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [isNew, setIsNew] = useState(false);

  useEffect(() => {
    fetchItems();
  }, [activeTab]);

  const fetchItems = async () => {
    setLoading(true);
    try {
      if (activeTab === 'blogs') {
        const res = await fetch('/api/local-blogs');
        if (res.ok) {
          const data = await res.json();
          setItems(data);
        }
      } else if (activeTab === 'projects') {
        setItems([
          { id: '1', title: "VH ACCOUNTING", category: "Web Development", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnJ3V0siux16JVj0qksUJXzwdSbx9vtKsXPbO2PjhiuL7QENbx0Du6HYGF0doG4OxmJyoenvuih-gNHzYKf-QFJnrafemdDAtDgTaewB2lTbIv7QDu0QxvRPxTI6wyu7ikbJpc2Khxv14HdcbSjr9INjXGCadVe-OW4OlWNnpjknu80YmpZu-uNOM3SELhiiy_aq3JK82gvf25giMyfhjC_tA2BJQoS7xsXjEMUcUyvusLIKWjmHe-duq7dE6_t5rHtCaS3UtU9B8", date: "May 2024" },
          { id: '2', title: "VARNET ENTERPRISE", category: "Web Development", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuChzD5NduZGGY6EUK001xaTDwuui_mdS-m0qgIwXKlsA6-bJAWBdrOj0gWWFOYMAcHxhcXFnhNnsHjjqHb7zEGJztDISNZIS9a3DFIQDUGdFrZLtIYdy7_9pJCyyQWsC-v9ZBwbBd2oMdbZQEB4mpTfbf3wc8KJ6xfkritRGKkJca35ZiaIQ4BnpB6KLHrgS4qLb-mCrr4OCOEl3qLrU_uR8fLuPY-R2ccK9RLx-mrBbomL3HEUyzQccouSM8DB-etdnriXUUFIDbo", date: "April 2024" },
          { id: '3', title: "SECURE EDGE", category: "Web Development", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQTMYBCLnpTzHZlagqeO-khy77hcqc81nPutnmFIJLxSobAKEZyxFn919v6JMTrqcDwBEjaj4APwXdU0dxnx-tAakdIanxoH40FbctbiHOZAimToNA2QOA3a4ydUU1aHnZ7T1JpQMo2idwc04bTcVNyYlfv8F7YnY2fvsOxP9tEj-TxYUWeKys2gY1r19Y-6l4GC5PAe3wkLmtKSR8Vt4rUd8B1Qs5vtvg3DEyGSJf9EoaodMHt2AAxsRjaGaf2PnkI9ZGuyc8fjI", date: "March 2024" }
        ]);
      } else if (activeTab === 'testimonials') {
        setItems([
          { id: '1', title: "John Doe", category: "CEO, TechCorp", image: "https://i.pravatar.cc/150?u=john", date: "Today", content: "Tryangle Tech transformed our digital presence." },
          { id: '2', title: "Sarah Smith", category: "Marketing Director", image: "https://i.pravatar.cc/150?u=sarah", date: "Yesterday", content: "The team at Tryangle Tech is professional and creative." }
        ]);
      }
    } catch (error) {
      console.error('Error fetching items:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (item: any) => {
    setEditingItem({ ...item });
    setIsNew(false);
  };

  const handleAddNew = () => {
    const newItem = activeTab === 'blogs' ? {
      id: Math.random().toString(36).substr(2, 9),
      title: '',
      excerpt: '',
      content: '',
      author: 'Tryangle Tech',
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200',
      readTime: '5 min read'
    } : {
      id: Math.random().toString(36).substr(2, 9),
      title: '',
      category: '',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
      date: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
    };
    setEditingItem(newItem);
    setIsNew(true);
  };

  const handleSave = async () => {
    if (isNew) {
      setItems([editingItem, ...items]);
    } else {
      setItems(items.map(i => i.id === editingItem.id ? editingItem : i));
    }
    setEditingItem(null);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this item?')) {
      setItems(items.filter(i => i.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="w-80 bg-white border-r border-outline-variant flex flex-col sticky top-0 h-screen">
        <div className="p-8 border-b border-outline-variant">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-on-surface flex items-center justify-center text-white group-hover:bg-primary transition-colors">
              <div className="w-5 h-5 border-2 border-white rotate-45"></div>
            </div>
            <span className="font-headline font-bold text-xl tracking-tighter uppercase">Tryangle<span className="text-primary">CMS</span></span>
          </Link>
        </div>

        <nav className="p-6 space-y-2 flex-1">
          {[
            { id: 'blogs', label: 'Journal Entries', icon: 'description' },
            { id: 'projects', label: 'Case Studies', icon: 'architecture' },
            { id: 'testimonials', label: 'Verifications', icon: 'verified' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as ContentType)}
              className={`w-full flex items-center gap-4 px-6 py-4 font-label font-bold uppercase text-[11px] tracking-[0.2em] transition-all ${
                activeTab === tab.id 
                  ? 'bg-on-surface text-white' 
                  : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
              }`}
            >
              <span className="material-symbols-outlined text-xl">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </nav>

        <div className="p-8 border-t border-outline-variant">
          <Link href="/" className="flex items-center gap-3 text-on-surface-variant font-label font-bold uppercase text-[10px] tracking-widest hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-sm">arrow_back</span> Return to Site
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-12 overflow-y-auto">
        <header className="flex justify-between items-end mb-16">
          <div>
            <h1 className="text-4xl font-headline font-bold mb-3 tracking-tight">Manage {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h1>
            <p className="text-on-surface-variant font-sans">Digital asset management and content architecture.</p>
          </div>
          <button 
            onClick={handleAddNew}
            className="bg-primary text-white px-10 py-4 font-label font-bold uppercase text-xs tracking-[0.2em] flex items-center gap-3 hover:bg-primary-dim transition-all"
          >
            <span className="material-symbols-outlined text-xl">add</span> Initialize New
          </button>
        </header>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent animate-spin"></div>
          </div>
        ) : (
          <div className="grid gap-6">
            {items.length === 0 ? (
              <div className="bg-white p-20 text-center border border-outline-variant">
                <div className="w-20 h-20 border border-outline-variant flex items-center justify-center mx-auto mb-8 text-outline-variant">
                  <span className="material-symbols-outlined text-4xl">search_off</span>
                </div>
                <h3 className="text-xl font-headline font-bold text-on-surface mb-3">No Nodes Found</h3>
                <p className="text-on-surface-variant font-sans">Initiate your first {activeTab.slice(0, -1)} to populate the ecosystem.</p>
              </div>
            ) : (
              items.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white p-6 border border-outline-variant hover:border-primary transition-all flex items-center gap-8 group"
                >
                  <div className="w-24 h-24 border border-outline-variant overflow-hidden shrink-0">
                    <img src={item.image} alt="" className="w-full h-full object-cover transition-all duration-700" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-[9px] font-label font-bold text-primary uppercase tracking-widest">
                        {item.category}
                      </span>
                      <span className="text-[10px] text-on-surface-variant font-label uppercase tracking-widest">{item.date}</span>
                    </div>
                    <h3 className="text-xl font-headline font-bold group-hover:text-primary transition-colors tracking-tight">{item.title}</h3>
                  </div>
                  <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                      onClick={() => handleEdit(item)}
                      className="w-12 h-12 border border-outline-variant flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-all"
                    >
                      <span className="material-symbols-outlined text-xl">edit</span>
                    </button>
                    <button 
                      onClick={() => handleDelete(item.id)}
                      className="w-12 h-12 border border-outline-variant flex items-center justify-center text-on-surface-variant hover:border-red-500 hover:text-red-500 transition-all"
                    >
                      <span className="material-symbols-outlined text-xl">delete</span>
                    </button>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        )}

        {/* Edit Modal */}
        {editingItem && (
          <div className="fixed inset-0 bg-on-surface/60 backdrop-blur-sm z-50 flex items-center justify-center p-6">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white w-full max-w-4xl border border-outline-variant shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              <div className="p-10 border-b border-outline-variant flex justify-between items-center">
                <h2 className="text-3xl font-headline font-bold tracking-tight">{isNew ? 'Initialize' : 'Modify'} {activeTab.slice(0, -1)}</h2>
                <button onClick={() => setEditingItem(null)} className="text-on-surface-variant hover:text-on-surface transition-colors">
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
              
              <div className="p-10 overflow-y-auto flex-1 space-y-10">
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label className="text-[10px] font-label font-bold text-on-surface-variant uppercase tracking-[0.3em]">Label / Title</label>
                    <input 
                      type="text" 
                      value={editingItem.title}
                      onChange={(e) => setEditingItem({...editingItem, title: e.target.value})}
                      className="w-full bg-white border border-outline-variant py-4 px-6 focus:outline-none focus:border-primary transition-all font-headline font-bold text-lg"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-label font-bold text-on-surface-variant uppercase tracking-[0.3em]">Classification</label>
                    <input 
                      type="text" 
                      value={editingItem.category}
                      onChange={(e) => setEditingItem({...editingItem, category: e.target.value})}
                      className="w-full bg-white border border-outline-variant py-4 px-6 focus:outline-none focus:border-primary transition-all font-headline font-bold text-lg"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-label font-bold text-on-surface-variant uppercase tracking-[0.3em]">Asset Source (URL)</label>
                  <div className="flex gap-6">
                    <input 
                      type="text" 
                      value={editingItem.image}
                      onChange={(e) => setEditingItem({...editingItem, image: e.target.value})}
                      className="flex-1 bg-white border border-outline-variant py-4 px-6 focus:outline-none focus:border-primary transition-all font-sans"
                    />
                    <div className="w-16 h-16 border border-outline-variant overflow-hidden shrink-0">
                      <img src={editingItem.image} alt="" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-label font-bold text-on-surface-variant uppercase tracking-[0.3em]">Abstract / Excerpt</label>
                  <textarea 
                    rows={3}
                    value={editingItem.excerpt}
                    onChange={(e) => setEditingItem({...editingItem, excerpt: e.target.value})}
                    className="w-full bg-white border border-outline-variant py-4 px-6 focus:outline-none focus:border-primary transition-all resize-none font-sans"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-label font-bold text-on-surface-variant uppercase tracking-[0.3em]">Technical Content (Markdown)</label>
                  <textarea 
                    rows={10}
                    value={editingItem.content}
                    onChange={(e) => setEditingItem({...editingItem, content: e.target.value})}
                    className="w-full bg-white border border-outline-variant py-4 px-6 focus:outline-none focus:border-primary transition-all font-mono text-sm"
                  />
                </div>
              </div>

              <div className="p-10 border-t border-outline-variant flex justify-end gap-6">
                <button 
                  onClick={() => setEditingItem(null)}
                  className="px-8 py-4 font-label font-bold uppercase text-[10px] tracking-widest text-on-surface-variant hover:text-on-surface transition-colors"
                >
                  Discard
                </button>
                <button 
                  onClick={handleSave}
                  className="bg-on-surface text-white px-10 py-4 font-label font-bold uppercase text-xs tracking-[0.2em] flex items-center gap-3 hover:bg-primary transition-all"
                >
                  <span className="material-symbols-outlined text-xl">save</span> Commit Changes
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </main>
    </div>
  );
}
