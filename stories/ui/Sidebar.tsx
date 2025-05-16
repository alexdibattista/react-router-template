import type React from "react";
import {
	SidebarProvider,
	Sidebar as UISidebar,
	SidebarContent as UISidebarContent,
	SidebarFooter as UISidebarFooter,
	SidebarGroup as UISidebarGroup,
	SidebarGroupContent as UISidebarGroupContent,
	SidebarGroupLabel as UISidebarGroupLabel,
	SidebarHeader as UISidebarHeader,
	SidebarInput as UISidebarInput,
	SidebarInset as UISidebarInset,
	SidebarMenu as UISidebarMenu,
	SidebarMenuAction as UISidebarMenuAction,
	SidebarMenuBadge as UISidebarMenuBadge,
	SidebarMenuButton as UISidebarMenuButton,
	SidebarMenuItem as UISidebarMenuItem,
	SidebarSeparator as UISidebarSeparator,
	SidebarTrigger as UISidebarTrigger,
} from "../../app/components/ui/sidebar";

export interface SidebarProviderProps {
	defaultOpen?: boolean;
	open?: boolean;
	onOpenChange?: (open: boolean) => void;
	children: React.ReactNode;
	className?: string;
}

/** Provider component that manages the sidebar state */
export const SidebarProviderWrapper = ({
	defaultOpen,
	open,
	onOpenChange,
	children,
	className,
}: SidebarProviderProps) => {
	return (
		<SidebarProvider
			defaultOpen={defaultOpen}
			open={open}
			onOpenChange={onOpenChange}
			className={className}
		>
			{children}
		</SidebarProvider>
	);
};

export interface SidebarProps {
	children: React.ReactNode;
	side?: "left" | "right";
	variant?: "sidebar" | "floating" | "inset";
	collapsible?: "offcanvas" | "icon" | "none";
	className?: string;
}

/** Sidebar component for application navigation */
export const Sidebar = ({
	children,
	side = "left",
	variant = "sidebar",
	collapsible = "offcanvas",
	className,
}: SidebarProps) => {
	return (
		<UISidebar
			side={side}
			variant={variant}
			collapsible={collapsible}
			className={className}
		>
			{children}
		</UISidebar>
	);
};

export interface SidebarTriggerProps {
	children?: React.ReactNode;
	className?: string;
	onClick?: () => void;
}

export const SidebarTrigger = ({
	children,
	className,
	onClick,
}: SidebarTriggerProps) => {
	return (
		<UISidebarTrigger className={className} onClick={onClick}>
			{children}
		</UISidebarTrigger>
	);
};

export interface SidebarContentProps {
	children: React.ReactNode;
	className?: string;
}

export const SidebarContent = ({
	children,
	className,
}: SidebarContentProps) => {
	return <UISidebarContent className={className}>{children}</UISidebarContent>;
};

export interface SidebarHeaderProps {
	children: React.ReactNode;
	className?: string;
}

export const SidebarHeader = ({ children, className }: SidebarHeaderProps) => {
	return <UISidebarHeader className={className}>{children}</UISidebarHeader>;
};

export interface SidebarFooterProps {
	children: React.ReactNode;
	className?: string;
}

export const SidebarFooter = ({ children, className }: SidebarFooterProps) => {
	return <UISidebarFooter className={className}>{children}</UISidebarFooter>;
};

export interface SidebarMenuProps {
	children: React.ReactNode;
	className?: string;
}

export const SidebarMenu = ({ children, className }: SidebarMenuProps) => {
	return <UISidebarMenu className={className}>{children}</UISidebarMenu>;
};

export interface SidebarMenuItemProps {
	children: React.ReactNode;
	className?: string;
}

export const SidebarMenuItem = ({
	children,
	className,
}: SidebarMenuItemProps) => {
	return (
		<UISidebarMenuItem className={className}>{children}</UISidebarMenuItem>
	);
};

export interface SidebarMenuButtonProps {
	children: React.ReactNode;
	className?: string;
	isActive?: boolean;
	variant?: "default" | "outline";
	size?: "default" | "sm" | "lg";
	tooltip?: string;
	onClick?: () => void;
}

export const SidebarMenuButton = ({
	children,
	className,
	isActive,
	variant,
	size,
	tooltip,
	onClick,
}: SidebarMenuButtonProps) => {
	return (
		<UISidebarMenuButton
			className={className}
			isActive={isActive}
			variant={variant}
			size={size}
			tooltip={tooltip}
			onClick={onClick}
		>
			{children}
		</UISidebarMenuButton>
	);
};

// Export other components
export const SidebarSeparator = UISidebarSeparator;
export const SidebarInput = UISidebarInput;
export const SidebarGroup = UISidebarGroup;
export const SidebarGroupLabel = UISidebarGroupLabel;
export const SidebarGroupContent = UISidebarGroupContent;
export const SidebarMenuAction = UISidebarMenuAction;
export const SidebarMenuBadge = UISidebarMenuBadge;
export const SidebarInset = UISidebarInset;
