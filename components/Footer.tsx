
import React from "react"
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
export function Footer () {
    return (
        <footer className="bg-black py-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2024 Code By The Ghost. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://github.com/shashank1623" className="text-white hover:text-blue-300 transition-colors">
              <FaGithub size={24} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/shashank-bhardwaj-1a92b9213/" className="text-white hover:text-blue-300 transition-colors">
              <FaLinkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="https://x.com/theghost1623" className="text-white hover:text-blue-300 transition-colors">
              <FaTwitter size={24} />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </div>
      </footer>
    )
}