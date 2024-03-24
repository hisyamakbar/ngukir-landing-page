"use client";

import { Header } from "@/components/Header";
import { ChevronDown, Mail, Menu, MoveUpRight, Play, X, Instagram, Dribbble, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<main className="mx-auto">
			<Header />
			{/* second secion */}
			<section id="our-service" className="mt-14">
				<div className="container">
					<div className="grid grid-cols-12 px-6">
						<div className="flex gap-3 col-span-full">
							<p className="text-xs font-semibold text-zinc-800">02</p>
							<div className="flex items-center justify-center">
								<div className=" w-[12px] bg-zinc-800  h-px"></div>
							</div>
							<p className="text-xs font-normal tracking-wide text-zinc-800">Our Services</p>
						</div>
						{/* heading */}
						<div className="m-3 col-span-full">
							<p className="text-3xl text-zinc-800 font-medium leading-[46px]">We provide best Architectur service</p>
						</div>
						{/* decoration */}
						<div className="flex items-center justify-center col-span-1 row-span-3 mt-2 ">
							<div className=" w-[1px] bg-gradient-to-b to-zinc-800 from-transparent h-[180px]"></div>
						</div>
						{/* content 1 */}
						<div className="flex flex-col items-start justify-center col-start-3 row-span-3 gap-4 col-span-full">
							<div className="flex gap-4">
								<p className="text-base font-bold text-zinc-800 text-opacity-30">01</p>
								<p className="text-base font-medium tracking-wide text-zinc-800 text-opacity-90">Site Development</p>
							</div>
							<div className="flex gap-4">
								<p className="text-base font-bold text-zinc-800 text-opacity-30">02</p>
								<p className="text-base font-medium tracking-wide text-zinc-800 text-opacity-90">Building Design</p>
							</div>
							<div className="flex gap-4">
								<p className="text-base font-bold text-zinc-800 text-opacity-30">03</p>
								<p className="text-base font-medium tracking-wide text-zinc-800 text-opacity-90">Construction Document</p>
							</div>
							<div className="flex gap-4">
								<p className="text-base font-bold text-zinc-800 text-opacity-30">04</p>
								<p className="text-base font-medium tracking-wide text-zinc-800 text-opacity-90">Green Energy</p>
							</div>
						</div>
						{/* scroll down */}
						<div className="row-start-auto pl-1 mt-4 col-span-full">
							<div className="flex gap-3 cursor-pointer animate-bounce">
								<div className="flex items-center justify-center rounded-full bg-zinc-800 h-fit ">
									<ChevronDown color="white" size={24} />
								</div>
								<div className="flex flex-col">
									<p className="text-xs font-medium text-zinc-800">Explore More</p>
									<p className="text-zinc-800 text-opacity-80 text-[10px] font-normal tracking-wide">Scroll down</p>
								</div>
							</div>
						</div>
						{/* image */}
					</div>
				</div>
				<div className="container">
					<div className="grid content-end grid-cols-12 mt-6 bg-center bg-cover col-span-full bg-02-img h-80 mb-28 ">
						{/* text 1 */}
						<div className="flex items-center h-20 col-span-7 row-span-2 px-4 bg-[#1B1F29] ">
							<p className="text-white text-opacity-80 text-[10px] font-normal leading-3">We pay attention to create positive impacts on the climate and natural environment.</p>
						</div>
						{/* text 2 */}
						<div className="row-span-2 col-span-4 bg-white bg-opacity-5 backdrop-blur-[20px] ring-inset ring-2 ring-white ring-opacity-5 flex justify-center items-center min-h-14">
							<div className="flex flex-col items-start col-span-full">
								{/* line */}
								<div className="flex items-center justify-center gap-2">
									<p className="text-xs font-semibold text-white">02</p>
									<div className="w-2 h-px bg-white "></div>
								</div>
								<p className="text-xs font-normal tracking-wide text-white">Green Energy</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* thrid section */}
			<div className="container">
				<div className="grid grid-cols-12 px-6 bg-[#1B1F29] py-14">
					<div className="flex gap-3 col-span-full">
						<p className="text-xs font-semibold text-white">03</p>
						<div className="flex items-center justify-center">
							<div className=" w-[12px] bg-white  h-px"></div>
						</div>
						<p className="text-xs font-normal tracking-wide text-white">Who We Are</p>
					</div>
					{/* heading */}
					<div className="mt-3 col-span-full">
						<p className="text-3xl text-white font-medium leading-[46px]">We are your best Architecture</p>
					</div>
					{/* decoration line */}
					<div className="flex items-center justify-center col-span-1 row-span-3 mt-6 ">
						<div className=" w-[1px] bg-gradient-to-b to-white from-transparent h-[140px]"></div>
					</div>
					{/* content 1 */}
					<div className="flex flex-col items-start justify-start col-start-3 row-span-3 gap-4 mt-6 col-span-full ">
						<p className="text-sm leading-7 text-white text-opacity-80 texts">We have been trusted by many big companies in the world. We have built hundreds of buildings.</p>
					</div>
					{/* scroll down */}
					<div className="row-start-auto pl-1 mt-4 col-span-full">
						<div className="flex gap-3 cursor-pointer animate-bounce">
							<div className="flex items-center justify-center bg-white rounded-full h-fit ">
								<ChevronDown color="black" size={24} />
							</div>
							<div className="flex flex-col">
								<p className="text-xs font-medium text-white ">Explore More</p>
								<p className="text-white text-opacity-80 text-[10px] font-normal tracking-wide">Scroll down</p>
							</div>
						</div>
					</div>
				</div>
				<Image src="/images/03-img.jpg" alt="hero" width={1920} height={1080} />
			</div>
			{/* fourth section */}
			<section className="mt-14">
				<div className="container">
					<div className="grid grid-cols-12 px-6">
						<div className="flex gap-3 col-span-full">
							<p className="text-xs font-semibold text-zinc-800">04</p>
							<div className="flex items-center justify-center">
								<div className=" w-[12px] bg-zinc-800  h-px"></div>
							</div>
							<p className="text-xs font-normal tracking-wide text-zinc-800">Project</p>
						</div>
						{/* heading */}
						<div className="mt-3 col-span-full">
							<p className=" text-3xl text-zinc-800 font-medium leading-[46px]">The best project that we’ve completed</p>
						</div>
						<div className="flex flex-col items-start justify-start row-span-3 gap-4 mt-4 col-span-full ">
							<p className="text-sm leading-7 text-zinc-800 text-opacity-80 texts">We have completed hundreds of projects. Client satisfaction is our priority. We always give our best.</p>
						</div>
						<a href="#" className="items-center py-4 mt-4 text-center text-white bg-blue-500 col-span-full px-9">
							See More
						</a>
					</div>
				</div>
			</section>

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
