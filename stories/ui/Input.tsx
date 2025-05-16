import type React from "react";
import { Input as UIInput } from "../../app/components/ui/input";

export interface InputProps extends React.ComponentProps<"input"> {
	placeholder?: string;
	disabled?: boolean;
	required?: boolean;
	readOnly?: boolean;
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	type?: string;
}

/** Text input field component */
export const Input = ({
	placeholder,
	disabled,
	required,
	readOnly,
	value,
	onChange,
	type = "text",
	...props
}: InputProps) => {
	return (
		<UIInput
			placeholder={placeholder}
			disabled={disabled}
			required={required}
			readOnly={readOnly}
			value={value}
			onChange={onChange}
			type={type}
			{...props}
		/>
	);
};
