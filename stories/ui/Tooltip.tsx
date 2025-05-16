import type React from "react";
import {
	Tooltip as UITooltip,
	TooltipContent as UITooltipContent,
	TooltipProvider as UITooltipProvider,
	TooltipTrigger as UITooltipTrigger,
} from "../../app/components/ui/tooltip";

export interface TooltipProps {
	content: React.ReactNode;
	children: React.ReactNode;
	side?: "top" | "right" | "bottom" | "left";
	sideOffset?: number;
	delayDuration?: number;
	className?: string;
}

/** Tooltip component for displaying additional information on hover */
export const Tooltip = ({
	content,
	children,
	side = "top",
	sideOffset = 4,
	delayDuration = 200,
	className,
}: TooltipProps) => {
	return (
		<UITooltipProvider delayDuration={delayDuration}>
			<UITooltip>
				<UITooltipTrigger asChild>{children}</UITooltipTrigger>
				<UITooltipContent
					side={side}
					sideOffset={sideOffset}
					className={className}
				>
					{content}
				</UITooltipContent>
			</UITooltip>
		</UITooltipProvider>
	);
};
