import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Phone from '@/components/assets/phone.webp'
import BookACall from './BookACall'

export default function SkillsInterface() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-purple-500">
          Create Fast and Modern Web Interfaces
        </h2>
        <div className="flex flex-col lg:flex-row items-center justify-between pt-10">
          {/* Image Section */}
          <div className="lg:w-1/2 mb-8 lg:mb-0 flex justify-center lg:justify-start">
            <div className="relative">
              <Image
                src={Phone}
                alt="Stylized mobile device"
                width={600}  // Increased width
                height={900} // Increased height
                className="max-w-full h-auto"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="lg:w-1/2 lg:pl-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Want to Create a<br />
              <span className="text-purple-500">Fast and Easy to<br />
              Use</span> Website?
            </h3>
            <p className="text-gray-400 mb-8 text-lg leading-relaxed">
              Modern web technologies make your website faster<br />
              and more intuitive, allowing users to navigate easily<br />
              and find what they need quickly. This streamlined<br />
              experience leads to higher user satisfaction and<br />
              engagement.
            </p>
            
            <BookACall title='Book A Call'/>
          </div>
        </div>
      </div>
    </section>
  )
}
