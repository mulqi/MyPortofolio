"use client";

import { Data } from "@/data";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

export const RecentProject = () => {
	useEffect(() => {
		Aos.init();
		Aos.refresh;
	}, []);

	return (
		<div>
			{Object.values(Data.RecentProject).map((posts, idx) => (
				<Tab.Panel key={idx} className="bg-transparent p-3">
					<ul className="w-full flex flex-wrap justify-center gap-14">
						{posts.map((post) => (
							<li key={post.id} className="w-[600px]">
								<Image
									src={post.image}
									alt="image"
									className="w-[600px] rounded-2xl"
									data-aos="zoom-in"
									data-aos-duration="1500"
								/>
								<h3 className="text-lg font-medium p-1">{post.name}</h3>
								<h2 className="text-sm p-4">{post.title}</h2>
							</li>
						))}
					</ul>
				</Tab.Panel>
			))}
		</div>
	);
};
