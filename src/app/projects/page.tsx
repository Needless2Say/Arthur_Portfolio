"use client";

import Image from "next/image";
import Navbar from "@/ui/navbar";


export default function About() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            {/* Navbar */}
            <Navbar currentPage={"Projects"} />

            <main className="flex flex-col justify-center items-center bg-gray-700/[0.60] mt-80 mb-10 mx-6 w-[80%] max-w-600
                             sm:mt-25">
                {/* Project KriegerDataForge Container */}
                <div className="flex flex-col text-white w-full
                                lg:flex-row">
                    <div className="flex flex-row text-2xl font-bold text-center justify-center items-center
                                    md:text-4xl
                                    lg:flex-col lg:basis-1/3 lg:text-6xl">
                        <div>Krieger</div>
                        <div>&nbsp;</div>
                        <div>Data</div>
                        <div>&nbsp;</div>
                        <div>Forge</div>
                    </div>
                    <div className="flex justify-center px-3 my-4
                                    lg:basis-2/3">
                        <div className="text-base
                                        md:text-lg
                                        lg:text-2xl">
                            <p>
                                <span className="font-bold">Summary:</span>

                                <br />

                                Full Stack Project that provides data to applications I create

                                <br />
                                <br />

                                Links To Videos of KriegerDataForge POC videos:

                                <br />

                                <a href="https://youtu.be/emxHI2ybPJ4" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">KriegerDataForge POC</a>

                                <br />

                                <a href="https://youtu.be/j3F10BulHSs" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Calorie Tracker Website POC</a>

                                <br />
                                <br />

                                <span className="font-bold">Overview:</span>
                            </p>

                            <ul className="list-disc ml-10">
                                <li>Front End</li>
                                <ul className="list-disc pl-10">
                                    <li>Application Examples</li>
                                    <ul className="list-disc pl-10">
                                        <li>Calorie Tracker</li>
                                        <li>Video Game Database</li>
                                    </ul>
                                    <li>Frameworks/Languages</li>
                                    <ul className="list-disc pl-10">
                                        <li>Next.js</li>
                                        <li>React</li>
                                        <li>TailwindCSS</li>
                                        <li>TypeScript</li>
                                    </ul>
                                </ul>
                                <li>Back End</li>
                                <ul className="list-disc pl-10">
                                    <li>API that serves applications connected to API</li>
                                    <li>Frameworks/Languages</li>
                                    <ul className="list-disc pl-10">
                                        <li>FastAPI</li>
                                        <li>Python</li>
                                    </ul>
                                </ul>
                                <li>Database</li>
                                <ul className="list-disc pl-10">
                                    <li>PostgreSQL Relational Database</li>
                                </ul>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Embedded YouTube Videos */}
                <div className="flex flex-col items-center justify-center w-11/12 h-11/12 gap-8 mb-8
                                xl:flex-row">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/emxHI2ybPJ4?si=MjbDHFItsyvVzN-y"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="w-full h-64
                                    lg:h-96
                                    xl:h-[450px]
                                    2xl:h-[550px]">
                    </iframe>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/j3F10BulHSs?si=Dq08f0ymaPxngzs5"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="w-full h-64
                                    lg:h-96
                                    xl:h-[450px]
                                    2xl:h-[550px]">
                    </iframe>
                </div>
            </main>
        </div>
    );
}