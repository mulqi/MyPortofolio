export const useHome = () => {
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
	};
};
