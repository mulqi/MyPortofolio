import { useState } from "react";

export const useIsClicked = () => {
	const [isClicked, setIsClicked] = useState(false);

	const handleClickAnimation = () => {
		setIsClicked(true);
		setTimeout(() => {
			setIsClicked(false);
		}, 500);
	};

	return { isClicked, handleClickAnimation };
};
