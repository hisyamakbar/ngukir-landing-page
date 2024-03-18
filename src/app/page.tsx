"use client";

import { ChevronDown, ChevronRight, Mail, Menu, MoveUpRight, Play, X, Instagram, Dribbble, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<main className=" max-w-[400px] mx-auto">
			{isOpen && <div className="fixed inset-0 z-30 bg-black opacity-50" onClick={toggleMenu}></div>}
			<nav className="absolute z-10 px-6 mt-10 w-dvw max-w-[400px]">
				<div className="flex items-center justify-between">
					<div>
						<a href="#" className="text-xl font-bold text-white">
							Ngukir
						</a>
					</div>
					<div className="md:hidden">
						{/* Mobile Menu Button */}
						<button onClick={toggleMenu}>
							<Menu size={24} color="white" />
						</button>
					</div>
				</div>
				{/* Mobile Menu (Hidden by default) */}
				<nav className={`transition-opacity ${isOpen ? "fixed opacity-1" : "hidden opacity-0"} h-dvh w-max z-50 top-0 bg right-0 bg-gradient-to-tl bg-zinc-900 to-transparent  p-10 md:hidden `}>
					<div className="flex flex-col justify-center h-full items-left w-max ">
						<a onClick={toggleMenu} className="block py-3 text-white ">
							Home
						</a>
						<a onClick={toggleMenu} className="block py-3 text-white">
							Service
						</a>
						<a onClick={toggleMenu} className="block py-3 text-white">
							Project
						</a>
					</div>
				</nav>
			</nav>
			{/* hero section */}
			<header className=" bg-hero-img h-[750px] bg-center bg-cover px-6 relative">
				<div className="container">
					<div className="grid grid-cols-12">
						<div className="col-span-full mt-28">
							<h1 className=" text-white text-5xl font-medium leading-[68px]">
								The greatest <br className=" md:hidden" /> Architecture
							</h1>
						</div>
						<div className="flex items-center justify-center col-span-1 row-span-3 p-2">
							<div className=" w-[1px] bg-gradient-to-b to-white from-transparent h-[230px]"></div>
						</div>
						<div className="col-start-3 col-span-full mt-6 text-white text-opacity-[0.85] text-base leading-relaxed">
							<p>
								Architecture important for our future. Find your dream Architecture <span className="text-white ">easily</span> and <span className="text-white ">safely</span> here.
							</p>
						</div>
						<div className="col-start-3 mt-6 cursor-pointer col-span-full">
							<a className="inline-flex items-center justify-center px-4 py-2 text-lg font-medium text-white bg-blue-500 ">Get in Touch</a>
						</div>
						<div className="row-start-5 pl-1 mt-4 col-span-full">
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
				</div>

				{/* decoration */}
				<div className="absolute bottom-0 right-0 grid grid-cols-12 h-[112px] w-dvw max-w-[400px] text-center">
					<div className=" col-start-6 col-span-full flex justify-center items-center bg-white bg-opacity-5 backdrop-blur-[20px] ring-inset ring-2 ring-white ring-opacity-5 min-h-14 ">
						<p className="text-xs font-medium text-center text-white ">Our Customers</p>
					</div>
					<div className="row-start-2 col-span-5 bg-white bg-opacity-5 backdrop-blur-[20px] ring-inset ring-2 ring-white ring-opacity-5 flex justify-center items-center min-h-14">
						<p className="text-xs font-medium text-center text-white ">Project Completed</p>
					</div>
					<div className="flex flex-col items-center justify-center col-span-7 row-start-2 bg-white min-h-14">
						<div className="flex flex-row items-center justify-center gap-2">
							<div className="flex flex-col">
								<p className="text-xs font-medium text-[#1B1F29] ">About us</p>
								<p className=" text-[#1B1F29] text-opacity-80 text-[10px] font-normal tracking-wide w-max">View our story</p>
							</div>
							<div className="flex items-center justify-center p-1 bg-[#1B1F29] rounded-full">
								<Play size={12} fill="white" stroke="white" />
							</div>
						</div>
					</div>
				</div>
			</header>
			{/* second secion */}
			<section className="mt-14">
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
			{/* five section */}
			<section className="mt-14">
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
					<div className="grid grid-cols-12 mt-6 bg-04-img bg-center bg-cover mb-28 content-between items-end h-[485px]">
						{/* text 1 */}
						<div className="col-span-7 col-start-2 span mt-14">
							<p className="text-xs leading-7 text-white text-opacity-80">We help our clients realize what he dreams of. We always give the best for our clients.</p>
						</div>

						<div className="row-span-2 col-span-6 bg-white bg-opacity-5 backdrop-blur-[30px] ring-inset ring-2 ring-white ring-opacity-5 flex justify-center items-center h-20">
							<div className="flex flex-col items-start">
								{/* line */}
								<div className="flex items-center justify-center gap-2">
									<p className="text-xs font-semibold text-white">04</p>
									<div className="w-2 h-px bg-white "></div>
								</div>
								<p className="text-xs font-normal tracking-wide text-white">Relatif Office</p>
							</div>
						</div>
						<div className="flex items-center justify-center h-20 col-start-9 row-span-2 px-4 bg-[#1B1F29] col-span-full ring-inset ring-2 ring-white ring-opacity-5 ">
							<ChevronRight size={30} color="white" />
						</div>
						{/* text 2 */}
					</div>
				</div>
			</section>
			{/* Footer */}
			<footer>
				<div className="container">
					<div className="grid grid-cols-12 px-6 bg-[#1A1E29] py-14">
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
							<p className=" text-3xl text-white font-medium leading-[46px]">The best project that we’ve completed</p>
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
