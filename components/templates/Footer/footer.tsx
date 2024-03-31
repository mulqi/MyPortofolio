import { useHome } from "@/hooks";
import Link from "next/link";

export const Footer = () => {
	const { Profile } = useHome();
	return (
		<footer className="w-full flex flex-col justify-center items-center text-center mt-60 relative bg-[#3586ff] p-[20px] min-h-[100px]">
			<div className="waves">
				<div className="wave" id="wave1"></div>
				<div className="wave" id="wave2"></div>
				<div className="wave" id="wave3"></div>
				<div className="wave" id="wave4"></div>
			</div>
			<ul className="flex gap-3 justify-center">
				{Profile.map((values, index) => (
					<div className="w-[40px] h-[40px] rounded-full hover:-translate-y-1 bg-[#393E46] items-center flex justify-center duration-300">
						<Link href={values.link} key={index} target="_blank">
							{values.image}
						</Link>
					</div>
				))}
			</ul>
			<h1 className="m-9">
				Mulqy Alkautsar &copy; {new Date().getFullYear()} | All rights reserved
			</h1>
		</footer>
	);
};
