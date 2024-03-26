import { Iconoir } from "@/components";

export const useHome = () => {
	const Profile = [
		{
			id: 1,
			image: <Iconoir name="Instagram" />,
			link: "https://www.instagram.com/mulqialkautsar/",
		},
		{
			id: 2,
			image: <Iconoir name="Github" />,
			link: "https://github.com/mulqi",
		},
		{
			id: 3,
			image: <Iconoir name="Facebook" />,
			link: "https://www.facebook.com/oesman.ondeway.3/",
		},
	];

	const onDownloadFile = async () => {
		const response = await fetch("/api/file");
		const blob = await response.blob();
		const url = window.URL.createObjectURL(blob);
		const link = document.createElement("a");
		link.href = url;
		link.download = "a-mulqy.pdf";
		link.click();
		window.URL.revokeObjectURL(url);
	};
	return {
		onDownloadFile,
		Profile,
	};
};
