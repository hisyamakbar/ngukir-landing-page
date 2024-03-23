"use client";

import React, { useState } from "react";

import { Menu } from "lucide-react";

interface NavbarProps {
	ClassName: string;
}

export const Navbar: React.FC<NavbarProps> = ({ ClassName }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};
	return (
		<nav className={ClassName}>
			{isOpen && <div className="fixed inset-0 z-30 bg-black opacity-50" onClick={toggleMenu}></div>}
			<div>
				<a href="#" className="text-xl font-bold text-white">
					Ngukir
				</a>
			</div>
			<div className="hidden md:flex gap-10 text-white text-sm lg:text-base">
				<a href="#">Home</a>
				<a href="#">Service</a>
				<a href="#">Project</a>
			</div>
			<a className="hidden md:flex gap-10 text-white text-sm bg-white bg-opacity-[0.07] backdrop-blur-[20px] ring-inset ring-2 ring-white ring-opacity-5 justify-center items-center px-4 py-2 lg:text-base lg:px-9 lg:py-4" href="#">
				Cotact Us
			</a>
			{/* Mobile Menu Button */}
			<button onClick={toggleMenu} className="md:hidden">
				<Menu size={24} color="white" />
			</button>
			{/* Mobile Menu */}
			<nav className={`transition-opacity ${isOpen ? "fixed opacity-1" : "hidden opacity-0"} h-dvh w-max z-50 top-0 bg right-0 bg-gradient-to-tl bg-zinc-900 to-transparent p-10 md:hidden `}>
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
	);
};
