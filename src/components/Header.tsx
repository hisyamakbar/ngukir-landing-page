import React from "react";
import Image from "next/image";

import { Navbar } from "./Navbar";

import heroImage from "../../public/images/heroImage.jpg";
import { ChevronDown, Play } from "lucide-react";

export const Header = () => {
	return (
		<header className=" bg-black-img h-[744px] bg-center bg-cover px-[35px] relative md:h-[504px] md:px-[70px] lg:h-[744px] lg:px-[120px] mb-14">
			{/* BG Image*/}
			<div className="-z-10 overflow-hidden w-full h-full absolute left-0 top-0 after:absolute after:inset-0 after:bg-gradient-to-r from-[#0000007a]">
				<Image
					alt="hero image"
					src={heroImage}
					fill
					quality={100}
					style={{
						objectFit: "cover",
						objectPosition: "center",
					}}
				/>
			</div>
			{/* End of BG Image */}
			<Navbar ClassName="flex items-center justify-between pt-10 mb-10 md:mb-14 bg-gradient-to-b" />
			<div className="grid grid-cols-4 md:grid-cols-8 gap-x-4 lg:grid-cols-12 lg:gap-x-8 md:gap-x-4">
				<h1 className="col-span-full text-white text-5xl font-medium leading-[68px] md:col-start-2 md:col-span-full lg:text-7xl lg:leading-[102px] mb-2">
					The greatest <br className=" md:block" /> Architecture
				</h1>
				{/* Line Decoration */}
				<div className="flex items-center justify-center col-span-1 row-span-2 p-2 md:row-start-1 md:row-span-3 lg:py-8 lg:px-0">
					<div className=" w-[1px] bg-gradient-to-b to-white from-transparent h-[216px] md:h-[280px] lg:h-[376px]"></div>
				</div>
				{/* End of Line Decoration */}
				<div className="flex flex-col col-span-3 row-span-2 gap-6 max-w-80 md:col-start-3 md:lg:max-w-full md:col-span-5 lg:col-start-3 lg:col-span-5 lg:gap-8">
					<p className="text-white text-opacity-[0.5] text-base leading-relaxed lg:text-lg lg:leading-8">
						Architecture important for our future. Find your dream Architecture <span className="text-white ">easily</span> and <span className="text-white ">safely</span> here.
					</p>
					<a tabIndex={1} className="inline-flex items-center justify-center px-4 py-2 text-lg font-medium text-white bg-blue-500 cursor-pointer size-fit lg:py-4 lg:px-9">
						Get in Touch
					</a>
				</div>
				{/* Scroll Down  */}
				<a href="#our-service" className="mt-2 col-span-full ml-[7dvw] row-start-auto md:ml-[3dvw] lg:ml-[2dvw] lg:mt-4">
					<div className="flex gap-3 cursor-pointer animate-bounce">
						<div className="flex items-center justify-center bg-white rounded-full size-6">
							<ChevronDown color="black" size={16} />
						</div>
						<div className="flex flex-col">
							<p className="text-xs font-medium text-white lg:text-base">Explore More</p>
							<p className="text-white text-opacity-80 text-[10px] font-normal tracking-wide lg:text-xs">Scroll down</p>
						</div>
					</div>
				</a>
				{/* End of Scroll Down */}
			</div>

			{/* decoration */}
			<div className="absolute bottom-0 right-0 grid grid-cols-12 w-dvw max-w-[400px] text-center lg:max-w-screen-md">
				<div className=" col-start-6 col-span-full flex justify-center items-center bg-white bg-opacity-5 backdrop-blur-[20px] ring-inset ring-2 ring-white ring-opacity-5 min-h-14 lg:min-h-28">
					<p className="text-xs font-medium text-center text-white lg:text-base">Our Customers</p>
				</div>
				<div className="row-start-2 col-span-5 bg-white bg-opacity-5 backdrop-blur-[20px] ring-inset ring-2 ring-white ring-opacity-5 flex justify-center items-center min-h-14 lg:min-h-28">
					<p className="text-xs font-medium text-center text-white lg:text-base">Project Completed</p>
				</div>
				<div className="flex flex-col items-center justify-center col-span-7 row-start-2 bg-white min-h-14 lg:min-h-28">
					<div className="flex flex-row items-center justify-center gap-4">
						<div className="flex flex-col items-start">
							<p className="text-xs font-medium text-[#1B1F29] lg:text-base">About us</p>
							<p className=" text-[#1B1F29] text-opacity-80 text-[10px] font-normal tracking-wide w-max lg:text-xs">View our story</p>
						</div>
						<div className="flex items-center justify-center size-4 bg-[#1B1F29] rounded-full">
							<Play size={8} fill="white" stroke="white" />
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};
