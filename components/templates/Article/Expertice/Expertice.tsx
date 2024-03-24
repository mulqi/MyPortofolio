"use client";

import { Data } from "@/data";
import { Tab } from "@headlessui/react";
import Image from "next/image";

export const Expertise = () => {
	return (
		<div>
			{Object.values(Data.Expertise).map((posts, idx) => (
				<Tab.Panel key={idx} className="bg-transparent p-3">
					<ul>
						{posts.map((post) => (
							<li
								key={post.id}
								className="flex p-6 justify-start md:justify-center"
							>
								<a href={post.url} target="_blank" className="flex gap-2">
									<Image
										alt={post.name}
										src={post.image}
										className="w-[24px]"
									/>
									<h3 className="text-lg font-medium">{post.name}</h3>
								</a>
							</li>
						))}
					</ul>
				</Tab.Panel>
			))}
		</div>
	);
};
