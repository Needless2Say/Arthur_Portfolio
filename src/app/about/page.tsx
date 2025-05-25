"use client";

import Image from "next/image";
import Navbar from "@/ui/navbar";
import me_pic from "@/../public/me_pic.jpg";


export default function About() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            {/* Navbar */}
            <Navbar currentPage={"About"} />

            <main className="flex flex-col items-center justify-center flex-grow px-4 py-8 mt-70 max-w-600
							 sm:mt-15
                             lg:flex-row">
                <div className="flex justify-center
                                lg:basis-1/5">
                    <Image 
                        src={me_pic}
                        width={280}
                        height={800}
                        alt="Professional Personal Portrait"
                    />
                </div>
                <div className="flex justify-center 
                                lg:basis-4/5">
                    <div className="bg-gray-600/[0.7] p-3 text-white text-xl
                                    2xl:text-2xl">
                        <p>
                            I graduated from the University of Michigan College of Engineering in 2025 with a Bachelor of Science in Computer Science and a minor in Data Science.
                        </p>

                        <br />

                        Some notable classes I&apos;ve taken at the University of Michigan include:
                        <ul className="ml-8 list-disc">
                            <li>EECS 281 - Data Structures and Algorithms</li>
                            <li>EECS 370 - Intro to Computer Architecture</li>
                            <li>EECS 442 - Computer Vision</li>
                            <li>EECS 445 - Intro to ML</li>
                            <li>EECS 449 - Conversational AI</li>
                            <li>EECS 481 - Software Development</li>
                            <li>EECS 485 - Web Systems</li>
                            <li>EECS 492 - Intro to AI</li>
                            <li>DATASCI 315 - Deep Learning</li>
                        </ul>

                        <br />

                        <p>
                            I am currently working as a Software Engineer at Charles Schwab in Chicago, Illinois. I am on the Wealth Asset Management Engineering Team where I am currently working as a
                            Data Engineering working on pipielines that ingest data from various sources and transform it into a format that can be used by our data scientists and analysts.

                            <br />
                            <br />

                            I am also working on my personal project where I am developing several applications, such as a calorie tracker and my sister's own personal buisness.
                            I am using Next.js for the front end, FastAPI for the back end, and PostrgreSQL for the database.
                            I've been heavily invested in fitness and coding for years, and I am working everyday to grow my techstack and knowledge so I can make more applications to help people make their lives easier.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}