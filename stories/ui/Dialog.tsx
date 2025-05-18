import type React from "react";
import type { ReactNode } from "react";
import {
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	Dialog as UIDialog,
} from "../../app/components/ui/dialog";

// Re-export all parts of Dialog for stories
export {
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	DialogClose,
};

interface DialogProps extends React.ComponentProps<typeof UIDialog> {
	children: ReactNode;
}

export const Dialog = ({ children, ...props }: DialogProps) => {
	return <UIDialog {...props}>{children}</UIDialog>;
};
