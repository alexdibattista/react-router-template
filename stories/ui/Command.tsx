import type React from "react";
import type { ReactNode } from "react";
import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
	CommandShortcut,
	Command as UICommand,
} from "../../app/components/ui/command";
import { cn } from "../../lib/utils";

// Re-export all parts of Command for stories
export {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
	CommandShortcut,
};

interface CommandProps extends React.ComponentProps<typeof UICommand> {
	className?: string;
	children: ReactNode;
}

export const Command = ({ className, children, ...props }: CommandProps) => {
	return (
		<UICommand className={cn(className)} {...props}>
			{children}
		</UICommand>
	);
};
