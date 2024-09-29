import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { StaticImageData } from 'next/image'
import WebSocketBlogPng from "@/components/assets/WebSockets.png"
interface BlogPostCardProps {
  imageUrl: string | StaticImageData
  title: string
}

function BlogPostCard({ imageUrl, title}: BlogPostCardProps) {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
      <div className="relative h-48">
        <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" />
        {/* <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <Image src={icon} alt={title} width={48} height={48} />
        </div> */}
      </div>
      <div className="p-6 bg-transparent">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      </div>
    </div>
  )
}

export default function BlogPost() {
  const blogPosts = [
    {
      imageUrl: WebSocketBlogPng,
      title: "Everything you Need to Know About WebSockets",
    }
  ]

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Blog <span className="text-purple-500">Posts</span> I've Written
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <BlogPostCard key={index} {...post} />
          ))}
        </div>
        <div className="text-right">
          <Button 
            variant="outline" 
            className="bg-gray-800 text-white hover:bg-gray-700 text-sm px-4 py-2 rounded-full"
          >
            Check All Blogs
          </Button>
        </div>
      </div>
    </section>
  )
}