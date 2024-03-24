import Image from "next/image";
import { Icon, Button, Iconoir } from "@/components/core";

export const Jumbotron = () => {
	return (
		<main
			id="Home"
			className="flex flex-wrap md:justify-around lg:justify-around"
		>
			<Image
				src={Icon.Arrow}
				alt="arrow"
				className="absolute w-[40px] md:w-[50px] lg:w-[60px] top-[145px] md:top-[220px] lg:top-[302px] left-8 md:left-[64px] lg:left-[94px] xl:left-[136px] 2xl:left-[214px]"
			/>
			<section className="md:pt-[75px] md:pl-[90px] lg:pt-[90px] lg:pl-[150px] pl-[80px]">
				<h1 className="font-bold font-serif text-[48px] md:text-[50px] lg:text-[80px]">
					FrontEnd
				</h1>
				<h2 className="font-bold font-serif text-[48px] md:text-[50px] lg:text-[80px] pl-0 md:pl-[60px] lg:pl-[60px] text-[#00ADB5]">
					Developer
				</h2>
				<Button
					title="Download CV"
					icon={<Iconoir name="CloudDownload" className="inline ml-3" />}
					type="button"
				/>
			</section>
			<aside className="pt-11">
				<Image
					src={Icon.AsideLogo}
					alt="logo"
					className="w-full md:w-[250px] lg:w-[450px]"
				/>
			</aside>
		</main>
	);
};
