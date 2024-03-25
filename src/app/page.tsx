"use client";

import { useState } from "react";

import { Header } from "@/components/Header";
import { OurService } from "@/components/OurService";
import { WhoWeAre } from "@/components/WhoWeAre";
import { Project } from "@/components/Project";
import { Footer } from "@/components/Footer";

export default function Home() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<main className="mx-auto max-w-[1440px]">
			<Header />
			{/* second secion */}
			<OurService />
			{/* thrid section */}
			<WhoWeAre />
			{/* fourth section */}
			<Project />
			{/* Footer */}
			<Footer />
		</main>
	);
}
