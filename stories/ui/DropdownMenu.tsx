import type React from "react";
import {
	DropdownMenu as UIDropdownMenu,
	DropdownMenuCheckboxItem as UIDropdownMenuCheckboxItem,
	DropdownMenuContent as UIDropdownMenuContent,
	DropdownMenuGroup as UIDropdownMenuGroup,
	DropdownMenuItem as UIDropdownMenuItem,
	DropdownMenuLabel as UIDropdownMenuLabel,
	DropdownMenuRadioGroup as UIDropdownMenuRadioGroup,
	DropdownMenuRadioItem as UIDropdownMenuRadioItem,
	DropdownMenuSeparator as UIDropdownMenuSeparator,
	DropdownMenuShortcut as UIDropdownMenuShortcut,
	DropdownMenuSub as UIDropdownMenuSub,
	DropdownMenuSubContent as UIDropdownMenuSubContent,
	DropdownMenuSubTrigger as UIDropdownMenuSubTrigger,
	DropdownMenuTrigger as UIDropdownMenuTrigger,
} from "../../app/components/ui/dropdown-menu";

export interface DropdownMenuProps {
	trigger: React.ReactNode;
	children?: React.ReactNode;
	className?: string;
}

/** Dropdown menu component for displaying context menus */
export const DropdownMenu = ({
	trigger,
	children,
	className,
}: DropdownMenuProps) => {
	return (
		<UIDropdownMenu>
			<UIDropdownMenuTrigger asChild>{trigger}</UIDropdownMenuTrigger>
			<UIDropdownMenuContent className={className}>
				{children}
			</UIDropdownMenuContent>
		</UIDropdownMenu>
	);
};

// Export all the individual components to be used directly if needed
export const DropdownMenuTrigger = UIDropdownMenuTrigger;
export const DropdownMenuContent = UIDropdownMenuContent;
export const DropdownMenuItem = UIDropdownMenuItem;
export const DropdownMenuCheckboxItem = UIDropdownMenuCheckboxItem;
export const DropdownMenuRadioItem = UIDropdownMenuRadioItem;
export const DropdownMenuLabel = UIDropdownMenuLabel;
export const DropdownMenuSeparator = UIDropdownMenuSeparator;
export const DropdownMenuGroup = UIDropdownMenuGroup;
export const DropdownMenuRadioGroup = UIDropdownMenuRadioGroup;
export const DropdownMenuShortcut = UIDropdownMenuShortcut;
export const DropdownMenuSub = UIDropdownMenuSub;
export const DropdownMenuSubTrigger = UIDropdownMenuSubTrigger;
export const DropdownMenuSubContent = UIDropdownMenuSubContent;
