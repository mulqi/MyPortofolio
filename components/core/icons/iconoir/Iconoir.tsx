import * as DefaultIcon from "iconoir-react";
import { IIconoirProps } from "./Iconoir.interface";

export const Iconoir = (_props: IIconoirProps) => {
	const { name, ...props } = _props;
	const Component = DefaultIcon[name];
	return <Component {...props} />;
};
