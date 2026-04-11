import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const blogsDirectory = path.join(process.cwd(), 'src/content/blogs');

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

export function getLocalBlogPosts(): BlogPost[] {
  if (!fs.existsSync(blogsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(blogsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const id = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(blogsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);

      return {
        id,
        content: matterResult.content,
        ...(matterResult.data as Omit<BlogPost, 'id' | 'content'>),
      };
    });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}
