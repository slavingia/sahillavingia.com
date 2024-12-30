import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const contentDirectory = path.join(process.cwd(), 'content')

interface FrontMatter {
  title: string
  description?: string
  author?: string
  date?: string
  image?: string
  openGraph?: {
    title: string
    description: string
    images: Array<{ url: string }>
  }
  twitter?: {
    card: string
    site: string
    title: string
    description: string
    images: Array<{ url: string }>
  }
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, '')
  const fullPath = path.join(contentDirectory, `${realSlug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug: realSlug,
    frontMatter: data as FrontMatter,
    content,
  }
}

export function getAllPosts() {
  if (!fs.existsSync(contentDirectory)) {
    return []
  }

  const files = fs.readdirSync(contentDirectory)
  const posts = files
    .filter(file => file.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(contentDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)

      return {
        slug,
        frontMatter: data as FrontMatter,
      }
    })

  return posts
}
