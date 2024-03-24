export const RecentProject = {
	"Recent Project": [
		{
			id: 1,
			name: "MedicGo",
		},
		{
			id: 2,
			name: "MeserApp",
		},
		{
			id: 3,
			name: "BaFood",
		},
	],
};

export const Expertise = {
	Expertise: [
		{
			id: 1,
			image: require("@/assets/svg/html.svg"),
			name: "HTML",
		},
		{
			id: 2,
			image: require("@/assets/svg/css.svg"),
			name: "CSS/SCSS",
		},
		{
			id: 3,
			image: require("@/assets/svg/bootstrap.svg"),
			name: "Bootstrap",
			url: "https://getbootstrap.com/",
		},
		{
			id: 4,
			image: require("@/assets/svg/tailwind.svg"),
			name: "Tailwind",
			url: "https://tailwindcss.com/",
		},
		{
			id: 5,
			image: require("@/assets/svg/javascript.svg"),
			name: "Javascript",
		},
		{
			id: 6,
			image: require("@/assets/svg/nodejs.svg"),
			name: "Node JS",
			url: "https://nodejs.org/en",
		},
		{
			id: 7,
			image: require("@/assets/svg/react.svg"),
			name: "React",
			url: "https://react.dev/",
		},
		{
			id: 8,
			image: require("@/assets/svg/nextjs.svg"),
			name: "Next JS",
			url: "https://nextjs.org/",
		},
	],
};

export const Data = {
	RecentProject: { ...RecentProject },
	Expertise: { ...Expertise },
};
