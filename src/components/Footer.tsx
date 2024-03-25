import React from "react";

import { Mail, MoveUpRight, Play, X, Instagram, Dribbble, Twitter, Youtube } from "lucide-react";

export const Footer = () => {
	return (
		<footer className="w-full">
			<div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 bg-[#1A1E29] py-14 px-[35px] md:px-[70px] lg:px-[120px] items-center lg:py-20">
				<div className="space-y-2 lg:col-span-5 col-span-full">
					{/* sub heading */}
					<div className="flex gap-2">
						<p className="text-xs font-semibold text-white">05</p>
						<div className="flex items-center justify-center">
							<div className=" w-[12px] bg-white  h-px"></div>
						</div>
						<p className="text-xs font-normal tracking-wide text-white">Contact Us</p>
					</div>
					{/* heading */}
					<h2 className="text-3xl text-white font-medium leading-[46px] lg:text-5xl lg:leading-[68px]">Have an amazing idea? Let’s talk</h2>
				</div>
				{/* form */}
				<form className="flex gap-3 mt-6 mb-3 border-b border-white col-span-full lg:col-span-5 h-fit lg:col-start-8 lg:row-span-2">
					<Mail size={24} color="#1A1E29" fill="white" width={24} height={24} />
					<div className="flex grow pb-[23px] gap-3">
						<input type="mail" className="w-full text-lg font-normal text-white bg-transparent outline-none lg:h-6 placeholder:text-white placeholder:text-opacity-30" placeholder="Your email" />
					</div>
					<MoveUpRight size={24} color="white" />
				</form>
				{/* devider */}
				<div className="items-center justify-center hidden py-20 lg:flex col-span-full">
					<div className="w-full h-px bg-white "></div>
				</div>
				{/* logo */}
				<div className="mt-6 mb-4 col-span-full">
					<p className="text-xl font-bold text-white">Ngukir</p>
				</div>
				{/* text content */}
				<div className="flex flex-col items-start justify-start row-span-3 gap-4 mb-4 col-span-full lg:col-span-4 lg:row-span-1">
					<p className="text-sm text-white leading-[28px] tracking-wide text text-opacity-80">Architecture important for our future. Find your dream Architecture easily and safely here.</p>
				</div>
				{/* social */}
				<div className="flex gap-3 mb-10 md:order-1 col-span-full md:col-span-4 md:mb-0 md:justify-end lg:col-start-9 lg:row-start-7">
					<div className="flex items-center justify-center p-2 bg-white rounded-full bg-opacity-5 backdrop-blur size-10">
						<Instagram size={24} color="white" />
					</div>
					<div className="flex items-center justify-center p-2 bg-white rounded-full bg-opacity-5 backdrop-blur size-10">
						<Dribbble size={24} color="white" />
					</div>
					<div className="flex items-center justify-center p-2 bg-white rounded-full bg-opacity-5 backdrop-blur size-10">
						<Twitter size={24} color="white" />
					</div>
					<div className="flex items-center justify-center p-2 bg-white rounded-full bg-opacity-5 backdrop-blur size-10">
						<Youtube size={24} color="white" />
					</div>
				</div>
				{/* copyright */}
				<div className="text-white md:self-end col-span-full md:col-span-4 lg:row-start-7">
					<p>2021 © All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};
