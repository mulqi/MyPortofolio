"use client";

import { Tab } from "@headlessui/react";
import { Data } from "@/data";
import { Expertise, RecentProject } from ".";

function classNames(...classes: any) {
	return classes.filter(Boolean).join(" ");
}

export const Article = () => {
	return (
		<article id="article" className="flex justify-center">
			<div className="w-full lg:w-[990px] p-10 lg:p-0">
				<Tab.Group>
					<Tab.List className="flex space-x-1 rounded-xl bg-[#00ADB5] p-1">
						{Object.keys(Data).map((category) => (
							<Tab
								key={category}
								className={({ selected }) =>
									classNames(
										"w-full rounded-lg py-2.5 text-sm font-medium leading-5",
										"ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
										selected
											? "bg-white text-blue-700 shadow"
											: "text-blue-100 hover:bg-white/[0.12] hover:text-white"
									)
								}
							>
								{category}
							</Tab>
						))}
					</Tab.List>
					<Tab.Panels className="mt-2">
						<RecentProject />
						<Expertise />
					</Tab.Panels>
				</Tab.Group>
			</div>
		</article>
	);
};
