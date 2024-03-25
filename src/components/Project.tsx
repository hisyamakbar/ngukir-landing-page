import React from "react";
import Image from "next/image";

import project from "../../public/images/project.jpg";
import { ChevronRight } from "lucide-react";

export const Project = () => {
	return (
		<section className="py-4 px-[35px] md:px-[70px] lg:px-[120px] grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 items-center mb-14">
			<div className="flex flex-col col-span-4 gap-3 mb-3 lg:col-span-6 md:col-span-full">
				<div className="flex gap-3">
					<p className="text-xs font-semibold text-zinc-800">04</p>
					<div className="flex items-center justify-center">
						<div className=" w-[12px] bg-zinc-800  h-px"></div>
					</div>
					<p className="text-xs font-normal tracking-wide text-zinc-800">Project</p>
				</div>
				{/* heading */}
				<h2 className="text-3xl text-[#333333] font-medium leading-[46px] lg:text-5xl lg:leading-[68px] lg:mb-6">The best project that we’ve completed</h2>
			</div>
			<div className="flex flex-col justify-start col-span-4 lg:col-start-9 lg:col-span-4 md:col-span-full mb-14">
				<p className="text-sm leading-7 text-[#5c5c5c]">
					We have completed hundreds of projects. Client <span className="text-[#333333] font-medium">satisfaction</span> is <span className="text-[#333333] font-medium">our priority</span>. We always give our best.
				</p>
				<a href="#" className="items-center py-4 mt-4 text-center text-white bg-blue-500 col-span-full px-9">
					See More
				</a>
			</div>
			{/* Image  */}
			<div className="relative col-span-full h-[488px] w-dvw right-[35px] md:w-full md:right-0 lg:w-full ">
				<Image
					className="-z-10"
					src={project}
					alt="Our Service Image"
					fill
					quality={100}
					style={{
						objectFit: "cover",
						objectPosition: "center",
					}}
				/>
				<div className="grid items-end content-between h-full grid-cols-12">
					{/* text content */}
					<div className="col-start-2 w-52 col-span-full pt-14 lg:w-96 md:w-80">
						<p className="text-sm font-normal leading-7 text-zinc-300 lg:text-base">
							We help our clients realize what he <span className="font-medium text-white">dreams</span> of. We <span className="font-medium text-white">always</span> give the best for our clients.
						</p>
					</div>
					{/* text 1 */}
					<div className="col-span-5 bg-white bg-opacity-5 backdrop-blur-[20px] ring-inset ring-2 ring-white ring-opacity-5 flex justify-center items-center row-span-2 lg:col-span-4 h-[72px]">
						<div className="flex flex-col items-start lg:flex-row">
							{/* line */}
							<div className="flex items-center justify-center gap-2">
								<p className="text-xs font-semibold text-white lg:text-base">04</p>
								<div className="w-2 h-px bg-white "></div>
							</div>
							<p className="text-xs font-medium tracking-wide text-white lg:text-base">Relatif Office</p>
						</div>
					</div>
					{/* text 2 */}
					<div className="flex items-center col-span-3 px-4 bg-[#1B1F29] justify-center h-[72px] col-start-10 row-span-2 lg:col-start-11 lg:col-span-2">
						<ChevronRight color="white" />
					</div>
					I
				</div>
			</div>
		</section>
	);
};
