import { useHome } from "@/hooks";
import Link from "next/link";

export const Footer = () => {
	const { Profile } = useHome();
	return (
		<footer className="text-center mt-2">
			<ul className="flex gap-3 justify-center">
				{Profile.map((values, index) => (
					<div className="w-[40px] h-[40px] rounded-full hover:drop-shadow-3xl bg-[#393E46] items-center flex justify-center">
						<Link href={values.link} key={index} target="_blank">
							{values.image}
						</Link>
					</div>
				))}
			</ul>
			<h1 className="m-9">
				Mulqy Alkautsar &copy; {new Date().getFullYear()} All rights reserved
			</h1>
		</footer>
	);
};
