"use client";
import React from "react";
import { useState, useRef, useEffect } from 'react'
import { motion, useAnimation, useMotionValue } from 'framer-motion'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Rocket, Scaling, Zap, Shield, Code, Cloud } from 'lucide-react'
export function Skills() {

    const [isHovered, setIsHovered] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)
    const scrollXValue = useMotionValue(0)
    const controls = useAnimation()

    useEffect(() => {
        const scrollContainer = containerRef.current
        if (!scrollContainer) return

        const scroll = async () => {
            await controls.start({
                x: [0, -scrollContainer.scrollWidth + scrollContainer.clientWidth],
                transition: {
                    duration: 20,
                    ease: "linear",
                    repeat: Infinity,
                },
            })
        }

        if (!isHovered) {
            scroll()
        } else {
            controls.stop()
        }
    }, [controls, isHovered])

    return (
        <section id="skills" className="py-20 bg-black">
            <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">
                The <span className="text-purple-500">Tech</span> Behind My <span className="text-blue-500">Creations</span>
            </h2>

            <div
                ref={containerRef}
                className="overflow-hidden"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <motion.div
                    className="flex space-x-6"
                    style={{ x: scrollXValue }}
                    animate={controls}
                >
                    <TechCard
                        title="UI Implementation"
                        description="I use Next.js with React and it echosystem to build User interfaces that users will love. My focus here to make the apps I create easy to use in any device."
                        icon={<Rocket className="w-6 h-6" />}
                        technologies={['React', 'Next.js', 'Client/Server Components','TypeScript','Zustand']}
                        approach="I focus on creating seamless, user-centric designs that adapt to various devices and screen sizes. By leveraging the latest frontend technologies, I ensure that the UI not only looks great but also performs optimally."
                        projects={[
                            { name: 'Misha Multispecialit Hospital Website', description: 'I implemented the UI for the whole application, making sure it is usable by everyone.' },
                            { name: 'DocSync', description: 'Created an intuitive interface for Collbrating Document Editing in Real-Time that provide Seamless user experience for document Editing and Sharing.' }
                        ]}
                    />
                    <TechCard
                        title="Scalablity"
                        description="I design systems with future growth in mind , ensuring that as your application sclaes , it remains responsive and reliable , no matter the user load."
                        icon={<Rocket className="w-6 h-6" />}
                        technologies={['React', 'Next.js', 'Tailwind CSS']}
                        approach="I focus on creating seamless, user-centric designs that adapt to various devices and screen sizes. By leveraging the latest frontend technologies, I ensure that the UI not only looks great but also performs optimally."
                        projects={[
                            { name: 'Wizard.ai', description: 'Implemented a responsive design that increased mobile conversions by 25%' },
                            { name: 'SaaS Dashboard', description: 'Created an intuitive interface that reduced user onboarding time by 40%' }
                        ]}
                    />
                    <TechCard
                        title="Performance Optimization"
                        description="My approach is to ensure that your website is optimized for speed and performance , so users can interact with your content wihtout delay or frustation."
                        icon={<Rocket className="w-6 h-6" />}
                        technologies={['React', 'Next.js', 'Tailwind CSS']}
                        approach="I focus on creating seamless, user-centric designs that adapt to various devices and screen sizes. By leveraging the latest frontend technologies, I ensure that the UI not only looks great but also performs optimally."
                        projects={[
                            { name: 'E-commerce Platform', description: 'Implemented a responsive design that increased mobile conversions by 25%' },
                            { name: 'SaaS Dashboard', description: 'Created an intuitive interface that reduced user onboarding time by 40%' }
                        ]}
                    />
                    <TechCard
                        title="Security"
                        description="With a strong knowledge of web apps security, I use modern frameworks and tools to create a robust system that resist attacks and keeps your user data secure."
                        icon={<Rocket className="w-6 h-6" />}
                        technologies={['React', 'Next.js', 'Tailwind CSS']}
                        approach="I focus on creating seamless, user-centric designs that adapt to various devices and screen sizes. By leveraging the latest frontend technologies, I ensure that the UI not only looks great but also performs optimally."
                        projects={[
                            { name: 'E-commerce Platform', description: 'Implemented a responsive design that increased mobile conversions by 25%' },
                            { name: 'SaaS Dashboard', description: 'Created an intuitive interface that reduced user onboarding time by 40%' }
                        ]}
                    />
                    <TechCard
                        title="Full Stack Integration"
                        description="My expertise with modern frontend frameworks, serverless backend architecture, PostgreSQL and NoSQL databases, along with AWS and Docker, and advanced backend communication like Websockets and WebRTC allows me to build apps that are not just visually appealing but also fully functional from end to end."
                        icon={<Rocket className="w-6 h-6" />}
                        technologies={['React', 'Next.js', 'Tailwind CSS']}
                        approach="I focus on creating seamless, user-centric designs that adapt to various devices and screen sizes. By leveraging the latest frontend technologies, I ensure that the UI not only looks great but also performs optimally."
                        projects={[
                            { name: 'E-commerce Platform', description: 'Implemented a responsive design that increased mobile conversions by 25%' },
                            { name: 'SaaS Dashboard', description: 'Created an intuitive interface that reduced user onboarding time by 40%' }
                        ]}
                    />
                    <TechCard
                        title="SEO Optimization"
                        description="I create SEO-friendly frontends by optmizing page structure , load times , and meta data , helping your website rank higher in search engine results."
                        icon={<Rocket className="w-6 h-6" />}
                        technologies={['Google SEO Tools', 'Next.js Built in SEO Optimization', 'Structurured Data',"Meta Tags" ,'Sitemap Generation','Robots.txt Configuration.']}
                        approach="For a frontend engineer, having strong knowledge of technical SEO is very important. I ensure that applications are structured so search engines can easily understand and index the content, improving its visibility. By optimizing factors like site speed, metadata, and accessibility, I help ensure that the content not only ranks higher but also reaches the right audience effectively."
                        projects={[
                            { name: 'Misha Multispecialit Hospital Website', description: 'I optimized the public pages for SEO by improving performance, mobile optimization, and configuring meta tags, among other adjustments.' },
                        ]}
                    />
                </motion.div>
            </div>
        </div>
        </section>
    )
}

function TechCard({ title, description, icon, technologies, approach, projects } : any) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Card className="bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-lg border border-gray-700 rounded-xl overflow-hidden hover:border-blue-500 transition duration-300 w-[350px] flex-shrink-0"> {/* Increased card width */}
                    <CardContent className="p-8"> {/* Increased padding */}
                        <div className="flex items-center justify-between mb-6"> {/* Increased margin between content */}
                            <h3 className="text-xl font-semibold text-white">{title}</h3>
                            {icon}
                        </div>
                        <p className="text-white mb-6">{description}</p> {/* Added margin for better spacing */}
                    </CardContent>
                    <CardFooter>
                        <p className="text-blue-400 hover:underline cursor-pointer">Tap to learn more</p>
                    </CardFooter>
                </Card>
            </DialogTrigger>
            <DialogContent className="bg-gray-900 text-white max-w-2xl">
                <DialogHeader>
                    <DialogTitle className="flex items-center text-2xl font-bold">
                        {icon}
                        <span className="ml-2">{title}</span>
                    </DialogTitle>
                </DialogHeader>
                <div className="mt-4">
                    <h4 className="text-lg font-semibold mb-2">Technologies and Practices I Use</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {technologies.map((tech : any, index :any) => (
                            <Badge key={index} variant="secondary">{tech}</Badge>
                        ))}
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Approach</h4>
                    <p className="text-gray-300 mb-4">{approach}</p>
                    <h4 className="text-lg font-semibold mb-2">Projects</h4>
                    <ul className="list-disc list-inside text-gray-300">
                        {projects.map((project : any, index :any) => (
                            <li key={index} className="mb-2">
                                <span className="font-semibold">{project.name}:</span> {project.description}
                            </li>
                        ))}
                    </ul>
                </div>
            </DialogContent>
        </Dialog>
    )
}
