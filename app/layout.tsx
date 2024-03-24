import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const Jakarta_sans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Mulqy alkautsar",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<link rel="icon" type="image/x-icon" href="/favicon.ico" />
			<body className={Jakarta_sans.className}>{children}</body>
		</html>
	);
}
