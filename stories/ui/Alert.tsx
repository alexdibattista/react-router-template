import React, { type ReactNode } from "react";
import { cn } from "../../lib/utils";

interface AlertProps {
	variant?: "default" | "destructive";
	title?: string;
	description?: string;
	icon?: ReactNode;
	className?: string;
	children?: ReactNode;
}

export const Alert = ({
	variant = "default",
	title,
	description,
	icon,
	className,
	children,
}: AlertProps) => {
	return (
		<div className={cn("alert", `alert-${variant}`, className)}>
			{icon && <div className="alert-icon">{icon}</div>}
			<div className="alert-content">
				{title && <h5 className="alert-title">{title}</h5>}
				{description && <div className="alert-description">{description}</div>}
				{children}
			</div>
		</div>
	);
};
