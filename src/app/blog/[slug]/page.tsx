import { blogContent } from "../../components/BlogContent"; // Ensure this matches the named export
import { Inter } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"

const inter = Inter({ subsets: ["latin"] })

// Function to generate slugs (same as in the component)
const generateSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "")
}

// Generate static params for all blog posts
export function generateStaticParams() {
  return blogContent.map((post) => ({
    slug: generateSlug(post.title),
  }))
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  // Find the blog post with the matching slug
  const post = blogContent.find((post) => generateSlug(post.title) === params.slug)

  // If no post is found, return 404
  if (!post) {
    notFound()
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-12 mt-24">
      <Link href="/blog" className="flex items-center text-sm text-gray-600 hover:text-gray-900 mb-8">
        <ArrowLeft className="w-4 h-4 mr-2" />
        العودة إلى الصفحة 
        المدونة
      </Link>

      <div className="mb-6">
        <span className="bg-black text-white rounded-full text-sm px-4 py-1 inline-block mb-4">{post.badge}</span>
        <h1 className={`${inter.className} text-3xl font-bold mb-6`}>{post.title}</h1>
      </div>

      {post.image && (
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          width={1000}
          height={500}
          className="w-full h-auto rounded-lg mb-8 object-cover"
        />
      )}

      <div className={`${inter.className} prose prose-lg max-w-none`}>{post.fullContent}</div>
    </div>
  )
}




