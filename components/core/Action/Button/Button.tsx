import { ButtonProp } from "./Button.interface";

export const Button = (_prop: ButtonProp) => {
	return (
		<div
			className={`ease-in-out delay-150 hover:-translate-y-1 hover:drop-shadow-3xl hover:scale-100 duration-300 text-white rounded-[50px] w-[227px]${_prop.classnameDiv}`}
		>
			<button type="submit" className={_prop.className} onClick={_prop.onClick}>
				{_prop.title} {_prop.icon}
			</button>
		</div>
	);
};
