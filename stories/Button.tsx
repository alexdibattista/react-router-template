import { Button as CHButton } from "../app/components/ui/button";

export interface ButtonProps {
	variant?: "outline" | "secondary" | "ghost" | "link";
	asChild?: boolean;
	label: string | React.ReactNode;
	size?: "icon";
	/** Optional click handler */
	onClick?: () => void;
	disabled?: boolean;
}

/** Primary UI component for user interaction */
export const Button = ({ variant, asChild, label }: ButtonProps) => {
	return (
		<CHButton variant={variant} asChild={asChild}>
			{label}
		</CHButton>
	);
};
