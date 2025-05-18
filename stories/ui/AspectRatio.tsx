import React, { type ReactNode } from "react";
import { cn } from "../../lib/utils";

interface AspectRatioProps {
	ratio?: number;
	className?: string;
	children: ReactNode;
}

export const AspectRatio = ({
	ratio = 16 / 9,
	className,
	children,
}: AspectRatioProps) => {
	return (
		<div
			className={cn("aspect-ratio", className)}
			style={{ paddingBottom: `${(1 / ratio) * 100}%` }}
		>
			<div className="aspect-ratio-inner">{children}</div>
		</div>
	);
};
