import React from "react";

export const nitip = () => {
	return (
		<div>
			<div className="flex absolute -bottom-12 left-0">
				<div className="flex flex-row gap-3 animate-bounce cursor-pointer">
					<div className="flex justify-center items-center bg-white rounded-full h-fit ">{/* <ChevronDown color="black" size={20} /> */}</div>
					<div className="flex flex-col">
						<p className=" text-white text-base font-medium w-max h-fit">Explore More</p>
						<p className="text-white text-opacity-80 text-xs tracking-wide">Scroll down</p>
					</div>
				</div>
			</div>

		
			<div className=" items-end absolute bottom-0 right-0 grid grid-cols-2 place-content-stretch h-48">
				<div className=" row-start-2">
					<div className=" flex justify-center items-center bg-white bg-opacity-5 backdrop-blur-[30px] ring-inset ring-2 ring-white ring-opacity-5 py-4 px-[52px]">
						<p className=" text-center text-white text-xs font-medium">Project Completed</p>
					</div>
				</div>
				<div className=" col-start-2 flex justify-center items-center bg-white bg-opacity-5 backdrop-blur-[30px] ring-inset ring-2 ring-white ring-opacity-5 py-4">
					<p className=" text-center text-white text-xs font-medium ">Our Customers</p>
				</div>
				<div className=" row-start-2 flex flex-col justify-center items-center bg-white py-4 px-[52px]">
					<div className="flex flex-row justify-center items-center gap-2">
						<div className="flex flex-col">
							<p className=" text-gray-900 text-xs font-medium">About us</p>
							<p className=" text-gray-900 text-opacity-80 text-[10px] font-normal tracking-wide w-max">View our story</p>
						</div>
						<div className="flex rounded-full p-1 bg-gray-900 justify-center items-center w-fit h-fit">
							<Play size={12} fill="white" stroke="white" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
