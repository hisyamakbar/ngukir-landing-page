import React from "react";

import ourService from "../../public/images/ourService.jpg";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export const OurService = () => {
	return (
		<section id="our-service" className="grid grid-cols-4 px-[35px] gap-x-4 py-4 md:grid-cols-8 items-center md:px-[70px] lg:px-[120px]">
			<div className="mb-4 col-span-full md:col-span-4 md:mb-0">
				{/* text */}
				<div className="flex gap-3 mb-2 col-span-full md:col-span-4 md:mb-3">
					<p className="text-xs font-semibold text-zinc-800 lg:text-sm">02</p>
					<div className="flex items-center justify-center">
						<div className=" w-[12px] bg-zinc-800  h-px"></div>
					</div>
					<p className="text-xs font-normal tracking-wide text-zinc-800 lg:text-sm">Our Services</p>
				</div>
				{/* heading */}
				<h2 className="col-span-full text-3xl text-zinc-800 font-medium leading-[46px] mb-2 md:mb-3 md:col-span-4 md:row-start-2 lg:text-5xl lg:leading-[68px]">
					We provide best <br /> Architectur service
				</h2>
				{/* text content */}
				<div className="flex flex-col items-start justify-center col-span-3 row-span-2 gap-4 md:col-span-4 md:row-start-3 md:row-span-2 lg:gap-9">
					<div className="flex gap-4">
						<p className="text-base font-bold text-stone-300 lg:text-2xl">01</p>
						<p className="text-base font-medium tracking-wide text-zinc-800 text-opacity-90 lg:text-2xl">Site Development</p>
					</div>
					<div className="flex gap-4">
						<p className="text-base font-bold text-stone-300 lg:text-2xl">02</p>
						<p className="text-base font-medium tracking-wide text-zinc-800 text-opacity-90 lg:text-2xl">Building Design</p>
					</div>
					<div className="flex gap-4">
						<p className="text-base font-bold text-stone-300 lg:text-2xl">03</p>
						<p className="text-base font-medium tracking-wide text-zinc-800 text-opacity-90 lg:text-2xl">Construction Document</p>
					</div>
					<div className="flex gap-4">
						<p className="text-base font-bold text-stone-300 lg:text-2xl">04</p>
						<p className="text-base font-medium tracking-wide text-zinc-800 text-opacity-90 lg:text-2xl">Green Energy</p>
					</div>
				</div>
			</div>
			{/* Image Content */}
			<div className="relative col-span-full h-[312px] w-dvw right-[35px] md:w-fit md:col-span-4 lg:h-[568px] lg:w-fit ">
				<Image
					className="-z-10"
					src={ourService}
					alt="Our Service Image"
					fill
					quality={100}
					style={{
						objectFit: "cover",
						objectPosition: "center",
					}}
				/>
				<div className="bottom-0 left-0 grid content-end h-full grid-cols-12 bg-center bg-cover col-span-full">
					{/* text 1 */}
					<div className="flex items-center col-span-7 px-4 bg-[#1B1F29] justify-center h-[72px] md:col-span-7 lg:h-[120px] lg:col-span-6 ">
						<p className=" font-normal leading-3 text-white text-opacity-80 lg:text-sm lg:leading-6 text-[10px]">We pay attention to create positive impacts on the climate and natural environment.</p>
					</div>
					{/* text 2 */}
					<div className="col-span-3 bg-white bg-opacity-5 backdrop-blur-[20px] ring-inset ring-2 ring-white ring-opacity-5 flex justify-center items-center md:col-span-4 lg:col-span-4">
						<div className="flex flex-col items-start">
							{/* line */}
							<div className="flex items-center justify-center gap-2">
								<p className="text-xs font-semibold text-white lg:text-base">02</p>
								<div className="w-2 h-px bg-white "></div>
							</div>
							<p className="text-xs font-medium tracking-wide text-white lg:text-base">Green Energy</p>
						</div>
					</div>
					I
				</div>
			</div>
			{/* End of Image Content */}
		</section>
	);
};
