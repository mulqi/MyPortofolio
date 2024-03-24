import { ButtonProp } from "./Button.interface";

export const Button = (_prop: ButtonProp) => {
	const style =
		"ease-in-out delay-150 hover:-translate-y-1 hover:drop-shadow-3xl hover:scale-100 duration-300 text-white rounded-[50px] w-[227px]";

	const buttonStyle =
		"text-white w-[227px] h-[47px] hover:opacity-75 bg-[#393E46] rounded-[50px] font-bold";

	return (
		<div className={style}>
			<button type="submit" className={buttonStyle} onClick={_prop.onClick}>
				{_prop.title} {_prop.icon}
			</button>
		</div>
	);
};
