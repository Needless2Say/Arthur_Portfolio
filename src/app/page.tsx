"use client";

import Image from "next/image";
import Navbar from "@/ui/navbar";
import Big_House from "@/../public/Big_House.jpg";


export default function Home() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center">
			{/* Navbar */}
			<Navbar currentPage={"Home"} />

			<main className="flex flex-col items-center justify-center flex-grow px-4 py-8 mt-30
							 sm:mt-0
							 md:mt-10">
				{/* Name Container */}
				<div className="text-center text-8xl font-bold text-white bg-gray-600/[0.7] p-6 mb-4">
					Arthur Krieger
				</div>

				{/* Picture Gallary */}
				<div className="flex flex-col items-center justify-center">
					<Image 
						src={Big_House}
						alt="University of Michigan Big House"
						width={1400}
						height={1400}
					/>
				</div>
			</main>
		</div>
	);
}