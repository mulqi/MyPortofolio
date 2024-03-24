import Image from "next/image";
import { Icon } from "@/components/core";

export const About = () => {
	return (
		<main
			id="About"
			className="flex flex-wrap md:justify-around lg:justify-around"
		>
			<section className="w-[400px] text-balance p-8 ">
				<h1 className="font-bold text-[50px] md:text-[64px] lg:text-[64px]">
					About <span className="text-[#00ADB5]">me</span>
				</h1>
				<p className="text-[20px] font-medium text-cyan-100">
					Hello, I'm a young frontend developer who's deeply passionate about
					programming. I have a strong drive for learning and excel in both
					coding and casual English communication. With a relaxed yet determined
					approach, I constantly strive to enhance my skills and stay updated
					with the latest trends in technology. My vibrant energy and commitment
					make me a valuable asset to any team.
				</p>
			</section>
			<aside>
				<Image src={Icon.AboutLogo} alt="aboutLogo" />
			</aside>
		</main>
	);
};
