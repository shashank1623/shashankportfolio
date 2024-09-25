"use client";
import React from "react";
import { useState, useRef, useEffect } from 'react'
import { motion, useAnimation, useMotionValue } from 'framer-motion'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Rocket, Scaling, Zap, Shield, Code, Cloud } from 'lucide-react'
import { GiGrowth } from "react-icons/gi";
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
            <div className="container mx-auto px-4 pt-20">
            <h2 className="text-4xl font-bold mb-16 text-center">
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
                        icon={<Scaling className="w-6 h-6" />}
                        technologies={['React', 'Next.js','TypeScript','Sclable Design Pattern' ,'Redis' ,'Kafka',"Pub Subs", 'Auto Scaling','AWS','Docker','CI/CD']}
                        approach="During the conception phase . I consider what users and other engineers might need in the future and how the codebase will evolve. I create a flexible and modular structure for easy feature integration and organize the code for maintainability. To ensure current features remain stable, I write unit and integration tests using Jest and Cypress. "
                        projects={[
                            { name: 'Wizard.ai', description: 'As our AI Saas can not handle the summarization concurrently we have implmented a queue based system .Although the transcription Service and Report Generation Support Real Time Multiple Users.' },
                            { name: 'DocSync', description: 'Implemented a sclable backend system that can support multipe user working on the same documnet in Real Time.' }
                        ]}
                    />
                    <TechCard
                        title="Performance Optimization"
                        description="Website performance is often overlooked until it impacts revenue. That’s why I prioritize performance from the very beginning. I consider it during the conception phase and structure the app accordingly. If there are performance issues in an existing feature or product, I dive deep to identify the root cause and resolve it effectively."
                        icon={<Zap className="w-6 h-6" />}
                        technologies={['Chrome Dev Tools', 'Server Components','Streaming', 'Lazy Loading']}
                        approach="Application performance is often overlooked until it impacts revenue. That’s why I prioritize performance from the very beginning. I consider it during the conception phase and structure the app accordingly. If there are performance issues in an existing feature or product, I dive deep to identify the root cause and resolve it effectively."
                        projects={[
                            { name: 'Misha Multispecialit Hospital Website', description: 'One of my main responsibilities was to ensure a data-intensive internal applications loads quickly and remains responsive.' },
                            { name: 'Wizard.ai Dashboard', description: 'I ensured the AI Saas summarization Queue perfromance Effectively for Frotend and As well Backend server so that gpu utilization does not reach the bottleneck and process terimnates.' }
                        ]}
                    />
                    <TechCard
                        title="Security"
                        description="With a strong knowledge of web apps security, I use modern frameworks and tools to create a robust system that resist attacks and keeps your user data secure."
                        icon={<Shield className="w-6 h-6" />}
                        technologies={['Up-to-date-Tech','OWASP','SSL/TLS', 'Env Variables Management','Validation & Sanitization','Best Auth Practice','Encryption']}
                        approach="Security is not an afterthought in my development process. I implement best practices for data protection, use secure authentication methods, and regularly update dependencies to patch vulnerabilities."
                        projects={[
                            { name: 'DocSync', description: 'Implemented end-to-end encryption for sensitive user personal data apply standards methonds to prevent of root acess through SQL injections.' },
                            { name: 'Wizard.ai', description: 'Developed an Effective and robust SHA256 Encryption from Direct acess to increase GPU Utilization from authorized acess.' }
                        ]}
                    />
                    <TechCard
                        title="Full Stack Integration"
                        description="My expertise with modern frontend frameworks, serverless backend architecture, PostgreSQL and NoSQL databases, along with AWS and Docker, and advanced backend communication like Websockets and WebRTC allows me to build apps that are not just visually appealing but also fully functional from end to end."
                        icon={<Code className="w-6 h-6" />}
                        technologies={['Server Components', 'Server Actions', 'AWS','Docker',]}
                        approach="I focus on creating seamless, user-centric designs that adapt to various devices and screen sizes. By leveraging the latest frontend technologies, I ensure that the UI not only looks great but also performs optimally."
                        projects={[
                            { name: 'DocSync', description: ' implemented full-stack functionality, including structuring the database and managing various backend processes with Server Components and Actions.' }
                        ]}
                    />
                    <TechCard
                        title="SEO Optimization"
                        description="I create SEO-friendly frontends by optmizing page structure , load times , and meta data , helping your website rank higher in search engine results."
                        icon={<GiGrowth className="w-6 h-6" />}
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
                <Card className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden hover:border-blue-500 transition duration-300 w-[350px] h-[420px] flex-shrink-0 shadow-lg"> {/* Adjusted width and height */}
                    <CardContent className="p-6 flex flex-col justify-between"> {/* Flex to distribute content */}
                        <div>
                            <div className="flex items-center justify-between mb-4"> {/* Adjusted margin */}
                                <h3 className="text-2xl font-bold text-white">{title}</h3> {/* Adjusted font size and weight */}
                                {icon}
                            </div>
                            <p className="text-gray-300">{description}</p> {/* Adjusted text color */}
                        </div>
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