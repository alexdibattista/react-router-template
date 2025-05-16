import type React from "react";
import {
	Button as UIButton,
	buttonVariants,
} from "../../app/components/ui/button";
import { cn } from "../../app/lib/utils";

export interface ButtonProps {
	variant?:
		| "default"
		| "outline"
		| "secondary"
		| "ghost"
		| "link"
		| "destructive";
	size?: "default" | "sm" | "lg" | "icon";
	asChild?: boolean;
	className?: string;
	children: React.ReactNode;
	disabled?: boolean;
	onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({
	variant = "default",
	size = "default",
	asChild = false,
	className,
	children,
	...props
}: ButtonProps) => {
	return (
		<UIButton
			variant={variant}
			size={size}
			asChild={asChild}
			className={className}
			{...props}
		>
			{children}
		</UIButton>
	);
};
