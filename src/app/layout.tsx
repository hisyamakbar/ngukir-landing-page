import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";

const inter = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
	title: "Ngukir Architecture",
	description: "NguKir Architecture: Where creativity meets craftsmanship. Explore our gallery for unique designs that blend innovation with tradition. Let's carve a future together.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="scroll-smooth">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
