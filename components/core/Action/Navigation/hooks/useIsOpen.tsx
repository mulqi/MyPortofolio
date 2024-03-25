import { useState } from "react";

export const useIsOPen = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const closeMenu = () => {
		setIsOpen(false);
	};

	return { isOpen, toggleMenu, closeMenu };
};
