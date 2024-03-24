import { Navigation } from "@/components/core/Action/Navigation";

export const Navbar = () => {
	return (
		<header className="flex-wrap flex justify-center lg:justify-between pb-10 pt-3 lg:pt-[44px]">
			<h1 className="font-bold text-center text-[30px] lg:pl-[96px]">
				Mulqy Alkautsar
			</h1>
			<Navigation />
		</header>
	);
};
