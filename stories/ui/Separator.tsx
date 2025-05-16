import React from "react";
import { Separator as UISeparator } from "../../app/components/ui/separator";

export interface SeparatorProps {
	orientation?: "horizontal" | "vertical";
	decorative?: boolean;
	className?: string;
}

/** Separator component for creating visual dividers */
export const Separator = ({
	orientation = "horizontal",
	decorative = true,
	className,
	...props
}: SeparatorProps) => {
	return (
		<UISeparator
			orientation={orientation}
			decorative={decorative}
			className={className}
			{...props}
		/>
	);
};
