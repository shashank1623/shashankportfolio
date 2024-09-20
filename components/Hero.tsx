"use client";
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { ChevronDown } from 'lucide-react';
import React from "react"
import { Button } from './ui/moving-border';
export function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative">
            <div className="absolute inset-x-0 top-0 h-[55%] bg-gradient-to-b from-[#2230c3] to-transparent"></div>
            <div className="text-center z-10">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-xl md:text-2xl mb-4"
                >
                    A Product-focused
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl md:text-6xl font-bold mb-4"
                >
                    Full-Stack Engineer
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl md:text-2xl mb-8"
                >
                    That Loves to Make Products Simple
                </motion.p>
                <Button borderRadius="1.8rem"
                    className='bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300'
                >
                    Get in Touch
                </Button>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-36"
                >
                    <motion.div
                        animate={{ y: [0, 15, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <ChevronDown size={100} className="mx-auto text-white" />
                    </motion.div>
                </motion.div>
            </div>
        </section>

    )
}