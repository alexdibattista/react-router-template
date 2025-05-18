import type React from "react";
import type { ReactNode } from "react";
import {
	PopoverContent,
	PopoverTrigger,
	Popover as UIPopover,
} from "../../app/components/ui/popover";

// Re-export all parts of Popover for stories
export { PopoverContent, PopoverTrigger };

interface PopoverProps extends React.ComponentProps<typeof UIPopover> {
	children: ReactNode;
}

export const Popover = ({ children, ...props }: PopoverProps) => {
	return <UIPopover {...props}>{children}</UIPopover>;
};
