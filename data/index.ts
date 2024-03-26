export const RecentProject = {
	"Recent Project": [
		{
			id: 1,
			image: require("@/assets/recentProject/myporto.png"),
			name: "MyPortofolio",
		},
		{
			id: 2,
			image: require("@/assets/recentProject/shopcom.png"),
			name: "Shopcommerce",
			title: "create a ecommerce website using nextjs as a frontend.",
		},
		{
			id: 3,
			image: require("@/assets/recentProject/boba.jpg"),
			name: "BaFood",
			title:
				"create a food ecommerce website using javascript native html and bootstrap.",
		},
		{
			id: 4,
			image: require("@/assets/recentProject/medicgo.png"),
			name: "MedicGO",
			title:
				"Pharmacy website uses React, Typescript and also Firebase as backend.",
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
			image: require("@/assets/svg/typescript.svg"),
			name: "Typescript",
			url: "https://www.typescriptlang.org/",
		},
		{
			id: 7,
			image: require("@/assets/svg/nodejs.svg"),
			name: "Node JS",
			url: "https://nodejs.org/en",
		},
		{
			id: 8,
			image: require("@/assets/svg/react.svg"),
			name: "React",
			url: "https://react.dev/",
		},
		{
			id: 9,
			image: require("@/assets/svg/nextjs.svg"),
			name: "Next JS",
			url: "https://nextjs.org/",
		},
	],
};

export const Certificate = {
	certificate: [
		{
			id: 1,
			name: "Dicoding",
			image: require("@/assets/certificates/react.png"),
			title: "Belajar Membuat Aplikasi Web dengan React",
		},
		{
			id: 2,
			name: "Dicoding",
			image: require("@/assets/certificates/frontend.png"),
			title: "Belajar Membuat Front-End Web",
		},
		{
			id: 3,
			name: "Dicoding",
			image: require("@/assets/certificates/javascript.png"),
			title: "Belajar Dasar Pemrograman JavaScript",
		},
		{
			id: 3,
			name: "Dicoding",
			image: require("@/assets/certificates/web.png"),
			title: "Belajar Dasar Pemrograman Web",
		},
		{
			id: 4,
			name: "Course Net",
			image: require("@/assets/certificates/nodejs.png"),
			title: "Teknik Pembuatan Aplikasi menggunakan Node.js",
		},
	],
};

export const Data = {
	RecentProject: { ...RecentProject },
	Expertise: { ...Expertise },
	Certificate: { ...Certificate },
};
