import React from 'react'
// create a beautiful navbar component here and export it
// it should have the following structure
// logo home, about, services, contact, projects, signin and signup buttons, 
// all in a horizontal layout
// use tailwind css for styling
// use the logo from the assets folder
// make it mobile friendly
// make it responsive
// make it beautiful
// dont use button for every link only signin and signup should be buttons
// use a tags for the rest of the links
// make it stick to buttom on scroll
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
