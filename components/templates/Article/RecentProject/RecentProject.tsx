"use client";

import { Data } from "@/data";
import { Tab } from "@headlessui/react";

export const RecentProject = () => {
	return (
		<div>
			{Object.values(Data.RecentProject).map((posts, idx) => (
				<Tab.Panel key={idx} className="bg-transparent p-3">
					<ul>
						{posts.map((post) => (
							<li
								key={post.id}
								className="relative rounded-md p-3 hover:bg-gray-100 hover:text-black "
							>
								<h3 className="text-sm font-medium leading-5">{post.name}</h3>
								<a
									href="#"
									className="absolute inset-0 rounded-md ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
								/>
							</li>
						))}
					</ul>
				</Tab.Panel>
			))}
		</div>
	);
};
