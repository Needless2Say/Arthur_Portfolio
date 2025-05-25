"use client";

import Image from "next/image";
import Navbar from "@/ui/navbar";

export default function About() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            {/* Navbar */}
            <Navbar currentPage={"Resume"} />

            <main className="flex flex-col justify-center items-center px-4 py-8 mt-65 max-w-400
                             sm:mt-10">
                {/* Resume Container */}
                <div className="flex flex-row">
                    {/* <div className="2xl:basis-1/4"></div> */}
                    <div className="flex flex-col justify-start bg-gray-600/[0.7] mx-2 my-8 p-3 text-white">
                        <div className="pb-6 text-2xl font-bold">My Resume</div>
                        <div>
                            <a
                                href="Arthur_Krieger_Resume.pdf"
                                download="Arthur_Krieger_Resume.pdf"
                                className="inline-block mb-6 px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                            >
                                Download My Resume
                            </a>
                        </div>
                        <div className="pb-2 text-xl font-bold">Objective</div>
                        <div className="pb-6">
                            Forward-thinking individual with strong interpersonal and multitasking skills, seeking a role in software development, data engineering, full stack development, or machine learning and artificial intelligence
                            to leverage my passion for high-tech computing technologies to drive innovation and contribute to the company&apos;s growth while expanding my expertise in these areas.
                        </div>
                        <div className="pb-2 text-xl font-bold">Education</div>
                        <div className="pb-2 text-lg">University of Michigan College of Engineering - Ann Arbor, MI</div>
                        <div className="pb-6">
                            <ul className="list-disc pl-8">
                                <li>Computer Science Engineering Major</li>
                                <li>Data Science Minor</li>
                                <li>GPA: 3.77/4.0</li>
                                <li>September 2022 - September 2025</li>
                            </ul>
                        </div>
                        <div className="pb-2 text-lg">Michigan State University College of Engineering – East Lansing, MI</div>
                        <div className="pb-6">
                            <ul className="list-disc pl-8">
                                <li>Honors College</li>
                                <li>Computer Science Major</li>
                                <li>GPA: 3.93/4.0</li>
                                <li>September 2021 - May 2022</li>
                            </ul>
                        </div>
                        <div className="pb-2 text-xl font-bold">Experience</div>
                        <div className="text-lg">Charles Schwab – Lone Tree, Colorado</div>
                        <div className="pb-6">
                            <ul className="list-disc pl-8">
                                <li>Data Engineer Intern</li>
                                <li>June 3rd 2024 – August 2nd 2024</li>
                                <li>Part of a scrum team using Agile methodology following a full SDLC; responsible for creating dashboards for data operations</li>
                                <li>Delivered interactive dashboards that display data operations for data pipelines and data profiling metrics</li>
                                <li>Wrote Confluence pages for Streamlit dashboards describing usage, set-up, architecture, and deployment steps</li>
                                <li>Deployed Streamlit dashboards in Snowflake environments</li>
                                <li>Wrote Confluence pages for Streamlit dashboards describing usage, set-up, architecture, and deployment steps</li>
                                <li>Demoed to Wealth Asset Management Research Analytics and Reporting Engineering team at end of internship</li>
                                <li>Presented a research plan on how Schwab can use generative AI to synthesize data to improve fraud protection</li>
                                <li>Technologies Used: Python, Streamlit, Snowflake, SQL</li>
                            </ul>
                        </div>
                        <div className="text-lg">Revantage, a Blackstone Portfolio Company – Chicago, Illinois: Willis Tower</div>
                        <div className="pb-6">
                            <ul className="list-disc pl-8">
                                <li>Data Engineer Intern</li>
                                <li>June 5th 2023 – August 11th 2023</li>
                                <li>Part of a scrum team using Agile methodology following a full SDLC; responsible for delivering functionality in the financial space</li>
                                <li>Wrote confluence pages for pipeline triggers and tables associated with schemas and published in Revantage Confluence account</li>
                                <li>Wrote python and SQL in Databricks using Azure DevOps RESTful API to retrieve a list of changes to a software application and created a table to query using SQL for data mining</li>
                                <li>Researched External Tables to implement into a project to reduce time, costs, and bypass transferring data to Snowflake from Azure</li>
                                <li>Wrote python and SQL in Databricks to implement functionality for external tables in the software application, drew diagrams in lucid charts to overview External Tables research, and wrote documentation for how to implement External Tables and published documentation in Revantage Confluence account</li>
                                <li>Presented to stakeholders at the end of each 3 week sprint</li>
                                <li>Technologies Used: Databricks, Azure, ADO, ADF, Snowflake, SQL, Python, Jira</li>
                            </ul>
                        </div>
                        <div className="text-lg">Dept of Obstetrics & Gynecology, Wayne State University – Detroit, MI</div>
                        <div className="pb-6">
                            <ul className="list-disc pl-8">
                                <li>Research Assistant</li>
                                <li>September 2021 – August 2022</li>
                                <li>Used R to research gene expression rates of patients and automatically create box plots and graphs used in a research paper titled Prevalence, Demographic Characteristics and Outcomes of Women with Preeclampsia with and Without Abnormal Angiogenic and Anti-Angiogenic Factors. The research paper is currently in the process of being published.</li>
                                <li>Created an app using Rshiny library in R to generate a graph based on data that is pulled from an SQL database. Used by researchers in lab to plot and visualize data in a fast and efficient manner</li>
                                <li>R Libraries used: ggplot2, dplyr, tidyxl, readxl, openxlsx, tidyverse, tidyr</li>
                                <li>Technologies Used: R, Microsoft Excel, Microsoft Word</li>
                            </ul>
                        </div>
                        <div className="pb-2 text-xl font-bold">Personal Projects</div>
                        <div className="text-lg">Krieger Data Forge</div>
                        <div className="pb-6">
                            <ul className="list-disc pl-8">
                            <li>Front-End: Building websites, such as calorie tracker and video game database, using Next.JS</li>
                            <li>Back-End: Building API using FastAPI to serve data to all websites that I build and other users build or request</li>
                            <li>Database: Using PostrgreSQL database to serve and store data</li>
                            <li>Technologies Used: HTML, Tailwind CSS, Typescript, React, Next.JS, FastAPI, PostrgreSQL, SQL, Python, Alembic</li>
                            </ul>
                        </div>
                        {/* <div className="pb-2 text-xl font-bold">School Projects</div>
                        <div className="text-lg">Euchre Card Game</div>
                        <div className="pb-6">
                            <ul className="list-disc pl-8">
                            <li>EECS 280 Fall 2022</li>
                            <li>Learned Euchre and coded card game in C++ using polymorphism, inheritance, data structures, and algorithms</li>
                            <li>Wrote simple AI to play card game against player based on Euchre card priority rules</li>
                            </ul>
                        </div>
                        <div className="text-lg">Piazza Classifier Machine Learning</div>
                        <div className="pb-6">
                            <ul className="list-disc pl-8">
                            <li>EECS 280 Fall 2022</li>
                            <li>Classify a Piazza post based on words in test data</li>
                            <li>Stored data from training dataset in maps based on unique words and titles of posts that words correspond with</li>
                            <li>Used data to predict title of a Piazza post based on types of words used in testing dataset</li>
                            </ul>
                        </div> */}
                        <div className="pb-2 text-xl font-bold">Certifications and Skills</div>
                        <div className="pb-6">
                            <ul className="list-disc pl-8">
                            <li>Microsoft Certified: Azure Fundamentals – August 2023</li>
                            <li>Academy Accreditation Databricks Lakehouse Fundamentals – August 2023</li>
                            <li>Proficient – C/C++, Python, SQL, HTML, CSS, Tailwind CSS, JavaScript, TypeScript, React, Next.JS, RESTful API, FastAPI, SQL, Alembic, Snowflake, AWS, Azure, Databricks, Streamlit, Pandas, Pytorch, Tensor Flow, R, JSON, Jinja, Confluence, Jira, Agile, GitHub, Microsoft Excel, Microsoft Word, Japanese</li>
                            <li>Beginner – GitHub Actions, Bitbucket, Google Cloud Programming, Docker, Kubernetes, Angular, Linux, Power BI</li>
                            </ul>
                        </div>
                    </div>
                    {/* <div className="2xl:basis-1/4"></div> */}
                </div>








            </main>
        </div>
    );
}