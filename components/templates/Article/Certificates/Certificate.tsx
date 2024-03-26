"use client";

import { Data } from "@/data";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

export const Certificate = () => {
	useEffect(() => {
		Aos.init();
		Aos.refresh;
	}, []);

	return (
		<div>
			{Object.values(Data.Certificate).map((posts, idx) => (
				<Tab.Panel key={idx} className="bg-transparent p-3">
					<ul className="w-full p-3 flex flex-wrap justify-center gap-8">
						{posts.map((post) => (
							<li key={post.id}>
								<Image
									src={post.image}
									alt={post.name}
									className="w-[400px]"
									data-aos="flip-right"
									data-aos-duration="1000"
									data-aos-offset="300"
									data-aos-easing="ease-in-sine"
								/>
								<h3 className="text-sm font-bold p-2">{post.title}</h3>
							</li>
						))}
					</ul>
				</Tab.Panel>
			))}
		</div>
	);
};
