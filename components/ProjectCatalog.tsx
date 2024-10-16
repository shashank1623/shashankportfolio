"use client";
import { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import wizardAi from "@/components/assets/WizardAI.png"
import Docsync from "@/components/assets/DocSync.png"
import flightStatus from "@/components/assets/IndigoFlight.png"
import RetailReadyAI from "@/components/assets/RetailReadyAI.png"
import { StaticImageData } from 'next/image'

interface ProjectCardProps {
    title: string
    description: string
    imageUrl: string | StaticImageData
    tags: string[]
    detailedDescription: string
    techStack: string[]
    websiteUrl: string
}

function ProjectCard({ title, description, imageUrl, tags, detailedDescription, techStack, websiteUrl }: ProjectCardProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105">
                    <Image src={imageUrl} alt={title} width={400} height={200} className="w-full h-48 object-cover" />
                    <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2">{title}</h3>
                        <p className="text-gray-400 mb-4">{description}</p>
                        <div className="flex flex-wrap gap-2">
                            {tags.map((tag, index) => (
                                <span key={index} className="bg-gray-700 text-sm text-gray-300 px-2 py-1 rounded">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[600px] bg-gray-900 text-white p-8 rounded-lg">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold mb-4">{title}</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                    <h4 className="font-semibold text-lg mb-2">Description</h4>
                    <div className="text-gray-300 mb-4 leading-relaxed space-y-4">
                        {detailedDescription.split('\n\n').map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>

                    <h4 className="font-semibold text-lg mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                        {techStack.map((tech, index) => (
                            <span key={index} className="bg-transparent border border-white text-white text-sm rounded-xl px-4 py-2">
                                {tech}
                            </span>
                        ))}
                    </div>

                    <Button
                        variant="outline"
                        className="bg-black text-white rounded-xl text-md px-4 py-2"
                        asChild
                    >
                        <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
                            See in Action
                        </a>
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}


export default function ProjectCatalog() {
    const projects = [
        {
            title: "Wizard.ai",
            description: "Your Ai Partner for transcribing and understanding human speech..",
            imageUrl: wizardAi,
            tags: ["AI", "LLM", "AI Saas", "Devops"],
            detailedDescription: "Designed and Introduced a scalable web application for video summarization using Flask framework, which would transcribe and summarize the video.\n\nSpearheaded the fine-tuning of Facebook BART model for summarization, resulting in a 40% improvement in summarization quality and reducing the time spent on manual summarization by 50%.",
            techStack: ["Python 3.8", "Large Language Models", "Facebook BARt", "CI/CD", "Open AI", "Whisper", "Git", "Flask", "Tailwind CSS", "JavaScript"],
            websiteUrl: "https://github.com/shashank1623/wizard_ai"
        },
        {
            title: "DocSync",
            description: "Create, edit, and share documents seamlessly. Experience the future of collaborative document editing.",
            imageUrl: Docsync,
            tags: ["React", "Nodejs", "PostgreSQL"],
            detailedDescription: "Developed a real-time collaborative document editing platform supporting simultaneous multi-user editing and real-time updates, achieving a 30% reduction in document editing latency.\n\nImplemented secure JWT-based authentication and utilized Node.js, Express.js, Prisma ORM, and PostgreSQL for backend services, handling up to 200 concurrent users efficiently.\n\n",
            techStack: ["React", "Node.js", "Express", "MongoDB", "Zod", "Zustand", "WebSockets", "PostgreSQL"],
            websiteUrl: "https://docsync.shashankbhardwaj.me/"
        },
        {
            title: "Flight Status System",
            description: "An application for tracking your flight details and status in real-time.",
            imageUrl: flightStatus,
            tags: ["React", "Flask", "Real Time"],
            detailedDescription: "Developed a web application using a microservices architecture that enables users to search for flights, view upcoming arrivals and departures, and receive real-time notifications on flight status.\n\nIntegrated a notification system using Redis for real-time updates on gate numbers and baggage carousel information, improving user experience by 30%.",
            techStack: ["React", "Flask", "MongoDB", "AWS", "Redis", "Git"],
            websiteUrl: "https://flight-status-system-u755.vercel.app/"
        },
        {
            title: "RetailReadyAI",
            description: "Redesigned RetailReadyAI a YC backed startup their mission Revolutionize Your Warehouse Operations at Wrap Speed.",
            imageUrl: RetailReadyAI,
            tags: ["Nextjs", "React", "CI/CD"],
            detailedDescription: "Designed and developed a modern, responsive UI for RetailReady, featuring a clean layout with a focus on simplicity and user engagement.\n\nThe project involved:Using Next.js with TypeScript for building a dynamic and scalable front-end.Implementing Tailwind CSS for seamless responsive design and custom styling.Ensuring cross-browser compatibility and optimal performance on both desktop and mobile devices.Leveraging reusable components and maintaining design consistency across the platform.\n\nThis project highlights my ability to create visually appealing and user-friendly UI components that enhance user engagement and contribute to a cohesive brand experience.",
            techStack: ["Nextjs", "React", "Tailwind CSS", "AWS", "CI/CD", "Git", "Framer-motion"],
            websiteUrl: "https://retailreadyai.shashankbhardwaj.me/"
        }
    ]

    return (
        <section className="py-20 bg-black text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
                    A Close Look at My <span className="text-purple-500">Creations</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>

                <div className="text-center">
                    <Button
                        variant="outline"
                        className="bg-black text-white rounded-xl text-md px-4 py-2"
                        asChild
                    >
                        <a href="https://github.com/shashank1623?tab=repositories" target="_blank" rel="noopener noreferrer">
                            Show More on GitHub
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    )
}
