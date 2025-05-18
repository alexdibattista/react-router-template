import type React from "react";
import type { ReactNode } from "react";
import {
	CollapsibleContent,
	CollapsibleTrigger,
	Collapsible as UICollapsible,
} from "../../app/components/ui/collapsible";
import { cn } from "../../lib/utils";

// Re-export all parts of Collapsible for stories
export { CollapsibleContent, CollapsibleTrigger };

interface CollapsibleProps extends React.ComponentProps<typeof UICollapsible> {
	className?: string;
	children: ReactNode;
}

export const Collapsible = ({
	className,
	children,
	...props
}: CollapsibleProps) => {
	return (
		<UICollapsible className={cn(className)} {...props}>
			{children}
		</UICollapsible>
	);
};
