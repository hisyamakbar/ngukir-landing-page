"use client";

import { useState } from "react";

import { Header } from "@/components/Header";
import { OurService } from "@/components/OurService";
import { WhoWeAre } from "@/components/WhoWeAre";
import { Project } from "@/components/Project";

import { ChevronDown, Mail, MoveUpRight, Play, X, Instagram, Dribbble, Twitter, Youtube } from "lucide-react";

export default function Home() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<main className="mx-auto">
			<Header />
			{/* second secion */}
			<OurService />
			{/* thrid section */}
			<WhoWeAre />
			{/* fourth section */}
			<Project />
			{/* Footer */}
			<footer>
				<div className="container">
					<div className="grid grid-cols-12 px-6 bg-[#1A1E29] py-14 mt-14">
						{/* sub heading */}
						<div className="flex gap-3 col-span-full">
							<p className="text-xs font-semibold text-white">05</p>
							<div className="flex items-center justify-center">
								<div className=" w-[12px] bg-white  h-px"></div>
							</div>
							<p className="text-xs font-normal tracking-wide text-white">Have an amazing idea? Let’s talk</p>
						</div>
						{/* heading */}
						<div className="mt-3 col-span-full">
							<p className=" text-3xl text-white font-medium leading-[46px]">We are your best Architecture</p>
						</div>
						{/* form */}
						<form className="flex gap-3 mt-6 border-b border-white col-span-full">
							<Mail size={24} color="#1A1E29" fill="white" width={24} height={24} />
							<div className="flex grow pb-[23px] gap-3">
								<input type="mail" className="w-full text-lg font-normal text-white bg-transparent outline-none placeholder:text-white placeholder:text-opacity-30" placeholder="Your email" />
							</div>
							<MoveUpRight size={24} color="white" />
						</form>
						{/* logo */}
						<div className="mt-6 col-span-full">
							<p className="text-xl font-bold text-white">Ngukir</p>
						</div>
						{/* text content */}
						<div className="flex flex-col items-start justify-start row-span-3 gap-4 mt-4 col-span-full ">
							<p className="text-sm text-white leading-[28px] tracking-wide text text-opacity-80">Architecture important for our future. Find your dream Architecture easily and safely here.</p>
						</div>
						{/* social */}
						<div className="flex gap-5 mt-4 col-span-full">
							<div className="flex items-center justify-center p-2 bg-white rounded-full bg-opacity-5 backdrop-blur">
								<Instagram size={24} color="white" />
							</div>
							<div className="flex items-center justify-center p-2 bg-white rounded-full bg-opacity-5 backdrop-blur">
								<Dribbble size={24} color="white" />
							</div>
							<div className="flex items-center justify-center p-2 bg-white rounded-full bg-opacity-5 backdrop-blur">
								<Twitter size={24} color="white" />
							</div>
							<div className="flex items-center justify-center p-2 bg-white rounded-full bg-opacity-5 backdrop-blur">
								<Youtube size={24} color="white" />
							</div>
						</div>
						{/* copyright */}
						<div className="mt-10 text-white col-span-full">
							<a href="https://dribbble.com/shots/17865591-Ngukir-Architecture-Landing-Page" target="blank">
								2021 © Designed by Latiful Fajar.
							</a>
						</div>
					</div>
				</div>
			</footer>
		</main>
	);
}
