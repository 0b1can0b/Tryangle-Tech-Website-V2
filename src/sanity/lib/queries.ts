import { groq } from 'next-sanity'

export const postsQuery = groq`*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  author,
  "image": mainImage.asset->url,
  category,
  publishedAt,
  excerpt,
  readTime
}`

export const postQuery = groq`*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  author,
  "image": mainImage.asset->url,
  category,
  publishedAt,
  excerpt,
  body,
  readTime
}`
