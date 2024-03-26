"use client";
import { Button, Icon, Iconoir } from "@/components";
import Image from "next/image";

export const Contact = () => {
	return (
		<main id="Contact" className="flex justify-center mt-10">
			<div className="text-center relative">
				<h1 className="font-bold text-[64px]">Got a project In</h1>
				<h2 className="font-bold text-[64px] text-[#00ADB5]">mind?</h2>
				<div className="flex justify-center">
					<Image
						src={Icon.ContactLogo}
						alt="contact logo"
						className="w-[350px] pt-5"
					/>
				</div>
				<div className="flex justify-center">
					<Button
						title="Contact Me"
						icon={<Iconoir name="Send" className="inline ml-1" />}
						className="bg-[#00ADB5] w-[140px] h-[43px] text-black font-extrabold rounded-2xl m-10"
						classnameDiv=""
						onClick={() => {
							location.href = "https://wa.me/6289509817569";
						}}
					/>
				</div>
			</div>
		</main>
	);
};
