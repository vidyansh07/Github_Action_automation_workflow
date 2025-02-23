import React from 'react'
export default function Navbar() {
    return (
        <div className="flex justify-between items-center w-full bg-gray-800 p-4 text-white sticky top-0">
            <div className="flex items-center">
                <img src="../logo.png" alt="logo" className="w-8 h-8" />
                <h1 className="text-2xl font-bold ml-4">CICD Project</h1>
            </div>
            <div className="flex items-center">
                <a href="#" className="mr-4">Home</a>
                <a href="#" className="mr-4">About</a>
                <a href="#" className="mr-4">Services</a>
                <a href="/contact" className="mr-4">Contact</a>
                <a href="#" className="mr-4">Projects</a>
                <button className="mr-4 bg-green-500 text-white px-4 py-2 rounded">Sign In</button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Sign Up</button>
            </div>
        </div>
    )
}
