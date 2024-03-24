"use client";
import Link from "next/link";
import { useState } from "react";

export const Navigation = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isClicked, setIsClicked] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
		setIsClicked(true);
		setTimeout(() => {
			setIsClicked(false);
		}, 500);
	};

	const closeMenu = () => {
		setIsOpen(false);
		setIsClicked(true);
		setTimeout(() => {
			setIsClicked(false);
		}, 500);
	};

	const List = () => {
		return (
			<>
				<li className={style}>
					<Link href="#Home">Home</Link>
				</li>
				<li className={style}>
					<Link href="#About">About</Link>
				</li>
				<li className={style}>
					<Link href="#Contact">Contact</Link>
				</li>
			</>
		);
	};

	const style =
		"ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 w-[60px]";

	return (
		<>
			<nav className="lg:p-2 lg:pr-[96px] fixed right-4">
				<button
					onClick={toggleMenu}
					className={`lg:hidden text-2xl focus:outline-none pt-1 ${
						isClicked ? "animate-spin duration-700" : ""
					}`}
				>
					{isOpen ? "✖" : "☰"}
				</button>
			</nav>
			<aside
				id="aside"
				className={`fixed bg-zinc-700 bg-opacity-90 inset-y-0 left-0 z-50 w-40 lg:w-8 shadow-lg transform transition-transform duration-500 ${
					isOpen ? "translate-x-0" : "-translate-x-full"
				} lg:hidden`}
			>
				<div className="p-5 h-full">
					<ul className="flex flex-col space-y-4 h-full justify-center">
						{List()}
					</ul>
				</div>
			</aside>
			{isOpen && (
				<div className="fixed inset-0 lg:hidden" onClick={closeMenu}></div>
			)}
			<nav className="hidden lg:flex justify-center p-2 lg:pr-[96px]">
				<ul className="flex gap-5">{List()}</ul>
			</nav>
		</>
	);
};