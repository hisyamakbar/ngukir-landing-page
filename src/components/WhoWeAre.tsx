import React from "react";
import Image from "next/image";

import whoWeAre from "../../public/images/whoWeAre.jpg";
import { ChevronDown } from "lucide-react";

export const WhoWeAre = () => {
	return (
		<section id="who-we-are" className=" md:grid md:grid-cols-8 bg-[#1B1F29] mb-14">
			<div className="col-span-4 order-2 px-[35px] md:px-[70px] lg:px-[120px] py-14 self-center">
				{/* text */}
				<div className="flex gap-3 mb-2 col-span-full md:col-span-4 md:mb-3">
					<p className="text-xs font-semibold text-white lg:text-sm">03</p>
					<div className="flex items-center justify-center">
						<div className=" w-[12px] bg-white  h-px"></div>
					</div>
					<p className="text-xs font-normal tracking-wide text-white lg:text-sm">Who We Are</p>
				</div>
				{/* heading */}
				<h2 className="text-3xl text-white font-medium leading-[46px] mb-1 lg:text-5xl lg:leading-[68px] lg:mb-6">We are your best Architecture</h2>
				<div className="flex gap-6 lg:gap-8">
					{/* line decoration */}
					<div className="flex items-center justify-center col-span-1 row-span-2 p-2 md:row-start-1 md:row-span-3 lg:py-8 lg:px-0">
						<div className=" w-[1px] bg-gradient-to-b to-white from-transparent h-[152px]"></div>
					</div>
					{/* content 1 */}
					<div className="flex flex-col lg:gap-8">
						<p className="text-sm leading-7 text-white text-opacity-80 texts">We have been trusted by many big companies in the world. We have built hundreds of buildings.</p>
						<a href="#" className="items-center py-2 mt-4 text-center text-white bg-blue-500 px-9 md:py-3 lg:py-4">
							Know More
						</a>
					</div>
				</div>
				{/* scroll down */}
				<a href="#" className="mt-2 ml-[7dvw] row-start-auto md:ml-[3dvw] lg:ml-[2dvw] lg:mt-4">
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
			</div>
			<Image className="order-1 w-full col-span-4" src={whoWeAre} alt="Who we are image" />
		</section>
	);
};
