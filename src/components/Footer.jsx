import React from 'react'
// make it stick to buttom on scroll
export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white bottom-0">
            <div className="container mx-auto p-4">
                <p className="text-center">Copyright © 2023 CICD Project. All rights reserved.</p>
            </div>
        </footer>
    )
}