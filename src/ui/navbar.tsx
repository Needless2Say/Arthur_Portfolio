"use client";

import Link from "next/link";


export default function Navbar({
    currentPage,
} : {
    currentPage: string;
}) {

    // navigation links for navbar options
    const navLinks = [
        {name: "Home", path: "/"},
        {name: "About", path: "/about"},
        {name: "Projects", path: "/projects"},
        {name: "Resume", path: "/resume"},
        {name: "Contact", path: "/contact"},
    ];


    return (
        <nav className="fixed top-0 left-0 right-0 flex justify-center items-center mt-2 z-10">
            {/* Navigation links container */}
            <ul className="flex flex-col justify-center items-center shadow-lg border-2 py-2 px-4 gap-4 rounded-4xl bg-blue-900 border-yellow-400
                            sm:flex-row
                            md:gap-8
                            lg:gap-12
                            xl:gap-18
                            ">
                {navLinks.map((link) => (
                    <li key={link.name} className="text-xl">
                        {/* Individual navigation link */}
                        {/* 'px-6 py-2' for padding, 'rounded-full' for oval shape. */}
                        {/* 'transition-all duration-300 ease-in-out' for smooth hover animation. */}
                        {/* Conditional styling based on 'currentPage' prop for active state. */}
                        <Link
                            href={link.path}
                            className={`
                                flex justify-center items-center px-3 py-1 rounded-full text-center border-2
                                transition-all duration-500 ease-in-out
                            ${
                                currentPage.toLowerCase() === link.name.toLowerCase()
                                ? 'bg-blue-500 text-yellow-400 border border-yellow-400' // Active state: yellow background, dark blue text
                                : 'bg-blue-500 text-black border border-blue-500' // Inactive state: light blue background, black text
                            }
                                hover:bg-transparent hover:text-yellow-400 hover:border-yellow-400
                                font-inter font-bold
                            `}
                        >
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}