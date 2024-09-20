
import React from "react"
import Image from "next/image"
export function About() {
    return (
        <section id="about" className="py-20 bg-black">
            <div className="container mx-auto px-6">
                <h2 className="text-5xl font-bold mb-16 text-center">About Me</h2>
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <p className="text-lg mb-4">
                            I grew up in <span className="inline-flex items-center bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold mr-2">Bihar </span>, now living in <span className="inline-flex items-center bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold"> Dehradun</span>, and I've been coding since 2020.
                        </p>
                        <p className="text-lg mb-4">
                            Recently I created <span className="inline-flex items-center bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold">🔄 Wizard.ai </span>, a tool that makes building personal pages as easy as using Notion, all by myself.
                        </p>
                        <p className="text-lg mb-4">
                            I love making complex applications simple and user-friendly. Check out my work at <a href="https://github.com/shashank1623" className="text-blue-400 hover:underline">shashank1623</a> or get in touch at <a href="mailto:shashankbhardwaj2030@gmail.com" className="text-blue-400 hover:underline">shashankbhardwaj2030@gmail.com</a> if you want a application that stands out.
                        </p>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <div className="relative w-64 h-64 rounded-3xl overflow-hidden">
                            <Image
                                src="/placeholder.svg"
                                alt="Profile picture"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}