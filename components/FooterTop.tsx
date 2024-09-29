import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function FooterTop() {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <blockquote className="text-2xl md:text-4xl font-semibold mb-6">
            "Ideas aren't built in a day, but the journey begins the moment you start working on them."
          </blockquote>
          <p className="text-gray-400 mb-8">Write me an email to get started!</p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            {/* Get Started Button */}
            <a href="mailto:shashankbardwaj2030@gmail.com">
              <Button variant="default" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full">
                Get Started
                <span className="ml-2">📧</span>
              </Button>
            </a>

            {/* LinkedIn Link */}
            <Link href="https://www.linkedin.com/in/shashank-bhardwaj-1a92b9213/" className='text-blue-400 hover:underline' passHref>
              or connect with me on LinkedIn
            </Link>
          </div>

          {/* Email Address */}
          <p className="text-gray-500 mt-8">shashankbhardwaj2030@gmail.com</p>
        </div>
      </div>
    </section>
  )
}
