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

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Web Development in 2026',
    excerpt: 'Explore the latest trends and technologies shaping the web development landscape this year.',
    content: `
# The Future of Web Development in 2026

The web development landscape is evolving faster than ever. As we move through 2026, several key technologies and methodologies are taking center stage, redefining how we build and interact with digital experiences.

## 1. AI-Driven Development
Artificial Intelligence is no longer just a buzzword; it's a core part of the developer's toolkit. From AI-assisted coding to automated testing and performance optimization, AI is significantly boosting productivity and code quality.

## 2. Serverless and Edge Computing
The shift towards serverless architectures and edge computing continues to gain momentum. By moving logic closer to the user, developers can achieve unprecedented performance and scalability.

## 3. Advanced Web APIs
New browser APIs are enabling more powerful and native-like experiences on the web. From WebGPU for high-performance graphics to advanced WebAssembly capabilities, the boundaries of what's possible in a browser are expanding.

## 4. Sustainability in Tech
Green software engineering is becoming a priority. Developers are increasingly focused on building energy-efficient applications that minimize their carbon footprint.

### Conclusion
Staying ahead in web development requires a commitment to continuous learning and adaptation. By embracing these trends, we can build a more powerful, efficient, and sustainable web for everyone.
    `,
    author: 'Hetul Darji',
    date: 'March 15, 2026',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
    readTime: '5 min read'
  },
  {
    id: '2',
    title: 'Mastering React 19: Best Practices',
    excerpt: 'Learn the most effective ways to build scalable and performant applications with React 19.',
    content: `
# Mastering React 19: Best Practices

React 19 has introduced several groundbreaking features that simplify state management and improve performance. Here are some best practices to help you make the most of this latest release.

## 1. Embrace Server Components
React Server Components (RSC) are now the standard for building high-performance applications. They allow you to fetch data on the server, reducing the amount of JavaScript sent to the client.

## 2. Use the 'use' Hook
The new \`use\` hook simplifies handling promises and context. It's a powerful tool for cleaner and more readable code.

## 3. Optimized State Management
With the improvements in React's internal reconciliation, many external state management libraries are becoming less necessary. Leverage built-in hooks like \`useReducer\` and \`useContext\` for most use cases.

## 4. Performance Monitoring
Use the React Profiler and other performance tools to identify and fix bottlenecks in your application.

### Summary
React 19 is a significant step forward for the ecosystem. By following these best practices, you can build applications that are not only faster but also easier to maintain.
    `,
    author: 'Hetul Darji',
    date: 'March 10, 2026',
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800',
    readTime: '8 min read'
  },
  {
    id: '3',
    title: 'Designing for the Modern Web',
    excerpt: 'A deep dive into modern UI/UX principles that prioritize user experience and accessibility.',
    content: `
# Designing for the Modern Web

In today's digital world, design is about more than just aesthetics. It's about creating intuitive, accessible, and engaging experiences for all users.

## 1. Accessibility First
Accessibility should never be an afterthought. Designing with accessibility in mind from the start ensures that your application is usable by everyone, regardless of their abilities.

## 2. Minimalist and Clean UI
The trend towards minimalism continues. Clean layouts, ample white space, and clear typography help users focus on what's important.

## 3. Micro-interactions
Subtle animations and feedback loops can significantly enhance the user experience, making interactions feel more natural and rewarding.

## 4. Mobile-First Design
With the majority of web traffic coming from mobile devices, a mobile-first approach is essential for any modern web project.

### Final Thoughts
Great design is invisible. It guides the user seamlessly through their journey, providing value and delight at every step.
    `,
    author: 'Hetul Darji',
    date: 'March 05, 2026',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800',
    readTime: '6 min read'
  }
];
