import React from 'react'

// set a background image for the hero section
// make use animations for the text
// make the text responsive
// make the text beautiful

export default function HeroSection() {
    return (
        <div className="bg-cover bg-center bg-no-repeat bg-hero-pattern h-screen bg-gradient-to-b from-gray-900 to-black background-image: url('../hero.jpg') ">
            <div className="container mx-auto flex flex-col items-center justify-center h-full">
                <h1 className="text-6xl font-bold text-white">CICD Project</h1>
                <p className="text-2xl text-gray-500 mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <button className="bg-green-500 text-white px-4 py-2 rounded">Get Started</button>
            </div>
        </div>
    )
}