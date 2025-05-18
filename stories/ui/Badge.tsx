import type React from "react";
import { Badge as UIBadge } from "../../app/components/ui/badge";
import "./Badge.css";

export interface BadgeProps {
	variant?: "default" | "secondary" | "destructive" | "outline";
	children?: React.ReactNode;
	className?: string;
	asChild?: boolean;
	icon?: React.ReactNode;
}

export const Badge = ({
	variant = "default",
	children,
	className,
	asChild = false,
	icon,
}: BadgeProps) => {
	return (
		<UIBadge variant={variant} className={className} asChild={asChild}>
			{icon}
			{children}
		</UIBadge>
	);
};
