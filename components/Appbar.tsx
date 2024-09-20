"use client";
import React, { useState, useEffect } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
export function Appbar() {
  const [activeSection, setActiveSection] = useState('home')
  const [navbarVisible, setNavbarVisible] = useState(true)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      const aboutSectionTop = aboutSection.offsetTop
      if (latest >= aboutSectionTop) {
        setNavbarVisible(false)
      } else {
        setNavbarVisible(true)
      }
    }
  })

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        animate={{ y: navbarVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
      >
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold">
            <span className="text-blue-500">T</span>
            <span className="text-white">G</span>
          </a>
          <div className="flex items-center space-x-8">
            <ul className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className={`hover:text-blue-300 transition-colors ${activeSection === item.toLowerCase() ? 'text-blue-300' : ''
                      }`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300">
              Let&apos;s Connect
            </button>
          </div>
        </nav>
      </motion.header>
    </div>

  );
}