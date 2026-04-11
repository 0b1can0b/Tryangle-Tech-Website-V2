import { NextResponse } from 'next/server';
import { getLocalBlogPosts } from '@/src/lib/blogs-server';

export async function GET() {
  try {
    const posts = getLocalBlogPosts();
    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error fetching local blogs:', error);
    return NextResponse.json({ error: 'Failed to fetch local blogs' }, { status: 500 });
  }
}
