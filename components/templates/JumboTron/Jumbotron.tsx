import Image from "next/image";
import { Icon, Button, Iconoir } from "@/components/core";

export const Jumbotron = () => {
	return (
		<main id="Home" className="flex flex-wrap md:justify-around">
			<section className="w-full md:w-[200px] md:pt-[75px] md:pl-[34px] lg:pt-[90px] lg:pl-[40px] pl-[16px] text-center">
				<Image
					src={Icon.Arrow}
					alt="arrow"
					className="absolute w-[45px] md:w-[50px] lg:w-[64px] top-[156px] md:top-[220px] lg:top-[302px] left-4 md:left-[70px] lg:left-[94px] xl:left-[136px] 2xl:left-[220px]"
				/>
				<h1 className="font-bold font-serif text-[56px] md:text-[50px] lg:text-[80px]">
					FrontEnd
				</h1>
				<h2 className="font-bold font-serif text-[54px] md:text-[50px] lg:text-[80px] pl-0 xl:pl-[60px] text-[#00ADB5]">
					Developer
				</h2>
				<Button
					title="Download CV"
					icon={<Iconoir name="CloudDownload" className="inline ml-3" />}
					type="button"
					className="pl-[89px]"
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
