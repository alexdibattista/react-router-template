import type React from "react";
import type { ReactNode } from "react";
import {
	HoverCardContent,
	HoverCardTrigger,
	HoverCard as UIHoverCard,
} from "../../app/components/ui/hover-card";
import { cn } from "../../lib/utils";

// Re-export all parts of HoverCard for stories
export { HoverCardContent, HoverCardTrigger };

interface HoverCardProps extends React.ComponentProps<typeof UIHoverCard> {
	children: ReactNode;
}

export const HoverCard = ({ children, ...props }: HoverCardProps) => {
	return <UIHoverCard {...props}>{children}</UIHoverCard>;
};
