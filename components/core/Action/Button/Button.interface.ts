import { ReactElement } from "react";

export interface ButtonProp {
	title: string;
	onClick?: () => void;
	type?: "button" | "submit" | "reset";
	icon: ReactElement;
	className: string;
	classnameDiv: string;
}
