export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
}

// These are now handled dynamically from src/content/blogs via API
// or from Sanity CMS. This array serves as a final hardcoded fallback.
export const blogPosts: BlogPost[] = [
  {
    id: 'ai-consciousness',
    title: 'The Ghost in the Machine: Exploring AI Consciousness',
    excerpt: 'A philosophical deep dive into whether silicon-based intelligence can ever truly achieve sentience and subjective experience.',
    content: `...`,
    author: 'Dr. Aris Thorne',
    date: 'April 05, 2026',
    category: 'Philosophy',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200',
    readTime: '7 min read'
  }
];
