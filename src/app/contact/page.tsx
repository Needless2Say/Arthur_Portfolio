"use client";

import Navbar from "@/ui/navbar";
import Link from "next/link";


export default function About() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            {/* Navbar */}
            <Navbar currentPage={"Contact"} />

            <main className="flex flex-col items-center justify-center flex-grow px-4 py-8 mt-20
                             sm:mt-0">
                {/* Contact Container */}
                <div className="flex flex-col justify-center content-center items-center mt-12 text-2xl sm:text-4xl lg:text-5xl">
                    <div className="px-1 py-2 my-8 hover:bg-slate-700/[.70]">
                        <div className="hover:cursor-pointer transition-colors duration-500 umich-text">
                            <Link href="mailto:kriegear@umich.edu" target="_blank">kriegear@umich.edu</Link>
                        </div>
                    </div>
                    <div className="px-1 py-2 my-8 hover:bg-slate-700/[.70]">
                        <span className="hover:cursor-pointer hover:text-blue-600 hover:underline">
                            <Link href="https://www.linkedin.com/in/arthur-krieger-3b986220a/" target="_blank">LinkedIn</Link>
                        </span>
                    </div>
                    <div className="px-1 py-2 my-8 hover:bg-slate-700/[.70]">
                        <span className="hover:cursor-pointer hover:text-black hover:underline">
                        <Link href="https://github.com/Needless2Say" target="_blank">GitHub</Link>
                        </span>
                    </div>
                    <div className="px-1 py-2 my-8 hover:bg-slate-700/[.70]">
                        <span className="hover:cursor-pointer hover:text-red-500 hover:underline">
                        <Link href="https://www.instagram.com/needless2say_dbfan/" target="_blank">Instagram</Link>
                        </span>
                    </div>
                </div>
            </main>
        </div>
    );
}