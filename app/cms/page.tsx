'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  FileText, 
  Briefcase, 
  MessageSquare, 
  Plus, 
  Save, 
  Trash2, 
  Edit3,
  Image as ImageIcon,
  User,
  Calendar,
  Clock,
  Tag,
  ArrowLeft,
  Search
} from 'lucide-react';
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
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-80 bg-white border-r border-gray-100 flex flex-col sticky top-0 h-screen">
        <div className="p-8 border-b border-gray-50">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-brand-blue rounded-xl flex items-center justify-center text-white shadow-lg shadow-brand-blue/20 group-hover:scale-110 transition-transform">
              <LayoutDashboard className="h-5 w-5" />
            </div>
            <span className="font-bold text-xl tracking-tight">Tryangle<span className="text-brand-blue">CMS</span></span>
          </Link>
        </div>

        <nav className="p-6 space-y-2 flex-1">
          {[
            { id: 'blogs', label: 'Blog Posts', icon: FileText },
            { id: 'projects', label: 'Projects', icon: Briefcase },
            { id: 'testimonials', label: 'Testimonials', icon: MessageSquare },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as ContentType)}
              className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-bold transition-all ${
                activeTab === tab.id 
                  ? 'bg-brand-blue text-white shadow-xl shadow-brand-blue/20' 
                  : 'text-gray-400 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <tab.icon className="h-5 w-5" />
              {tab.label}
            </button>
          ))}
        </nav>

        <div className="p-8 border-t border-gray-50">
          <Link href="/" className="flex items-center gap-2 text-gray-400 font-bold hover:text-brand-blue transition-colors text-sm">
            <ArrowLeft className="h-4 w-4" /> Back to Website
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-12 overflow-y-auto">
        <header className="flex justify-between items-end mb-12">
          <div>
            <h1 className="text-4xl font-bold mb-2">Manage {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h1>
            <p className="text-gray-500">Create, edit and organize your website content.</p>
          </div>
          <button 
            onClick={handleAddNew}
            className="bg-brand-blue text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:bg-brand-blue/90 shadow-xl shadow-brand-blue/20 transition-all hover:-translate-y-1"
          >
            <Plus className="h-5 w-5" /> Add New
          </button>
        </header>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-blue"></div>
          </div>
        ) : (
          <div className="grid gap-6">
            {items.length === 0 ? (
              <div className="bg-white rounded-[2.5rem] p-20 text-center border border-dashed border-gray-200">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-300">
                  <Search className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No items found</h3>
                <p className="text-gray-500">Start by adding your first {activeTab.slice(0, -1)}.</p>
              </div>
            ) : (
              items.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all flex items-center gap-8 group"
                >
                  <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0">
                    <img src={item.image} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[10px] font-bold bg-brand-blue/10 text-brand-blue px-3 py-1 rounded-full uppercase tracking-widest">
                        {item.category}
                      </span>
                      <span className="text-xs text-gray-400 font-medium">{item.date}</span>
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-brand-blue transition-colors">{item.title}</h3>
                  </div>
                  <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                      onClick={() => handleEdit(item)}
                      className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-brand-blue hover:text-white transition-all"
                    >
                      <Edit3 className="h-5 w-5" />
                    </button>
                    <button 
                      onClick={() => handleDelete(item.id)}
                      className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-red-500 hover:text-white transition-all"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        )}

        {/* Edit Modal */}
        {editingItem && (
          <div className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-6">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white w-full max-w-4xl rounded-[3rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              <div className="p-10 border-b border-gray-50 flex justify-between items-center">
                <h2 className="text-3xl font-bold">{isNew ? 'Create New' : 'Edit'} {activeTab.slice(0, -1)}</h2>
                <button onClick={() => setEditingItem(null)} className="text-gray-400 hover:text-gray-900 font-bold">Close</button>
              </div>
              
              <div className="p-10 overflow-y-auto flex-1 space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Title</label>
                    <input 
                      type="text" 
                      value={editingItem.title}
                      onChange={(e) => setEditingItem({...editingItem, title: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 px-6 focus:outline-none focus:ring-4 focus:ring-brand-blue/10 focus:border-brand-blue transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Category</label>
                    <input 
                      type="text" 
                      value={editingItem.category}
                      onChange={(e) => setEditingItem({...editingItem, category: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 px-6 focus:outline-none focus:ring-4 focus:ring-brand-blue/10 focus:border-brand-blue transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Image URL</label>
                  <div className="flex gap-4">
                    <input 
                      type="text" 
                      value={editingItem.image}
                      onChange={(e) => setEditingItem({...editingItem, image: e.target.value})}
                      className="flex-1 bg-gray-50 border border-gray-100 rounded-2xl py-4 px-6 focus:outline-none focus:ring-4 focus:ring-brand-blue/10 focus:border-brand-blue transition-all"
                    />
                    <div className="w-14 h-14 bg-gray-50 rounded-2xl overflow-hidden shrink-0 border border-gray-100">
                      <img src={editingItem.image} alt="" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Excerpt</label>
                  <textarea 
                    rows={3}
                    value={editingItem.excerpt}
                    onChange={(e) => setEditingItem({...editingItem, excerpt: e.target.value})}
                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 px-6 focus:outline-none focus:ring-4 focus:ring-brand-blue/10 focus:border-brand-blue transition-all resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Content (Markdown)</label>
                  <textarea 
                    rows={10}
                    value={editingItem.content}
                    onChange={(e) => setEditingItem({...editingItem, content: e.target.value})}
                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 px-6 focus:outline-none focus:ring-4 focus:ring-brand-blue/10 focus:border-brand-blue transition-all font-mono text-sm"
                  />
                </div>
              </div>

              <div className="p-10 border-t border-gray-50 flex justify-end gap-4">
                <button 
                  onClick={() => setEditingItem(null)}
                  className="px-8 py-4 rounded-2xl font-bold text-gray-400 hover:text-gray-900 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleSave}
                  className="bg-brand-blue text-white px-10 py-4 rounded-2xl font-bold flex items-center gap-3 hover:bg-brand-blue/90 shadow-xl shadow-brand-blue/20 transition-all"
                >
                  <Save className="h-5 w-5" /> Save Changes
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </main>
    </div>
  );
}
