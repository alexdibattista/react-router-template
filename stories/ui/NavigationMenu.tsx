import type React from "react";
import {
	NavigationMenu as UINavigationMenu,
	NavigationMenuContent as UINavigationMenuContent,
	NavigationMenuIndicator as UINavigationMenuIndicator,
	NavigationMenuItem as UINavigationMenuItem,
	NavigationMenuLink as UINavigationMenuLink,
	NavigationMenuList as UINavigationMenuList,
	NavigationMenuTrigger as UINavigationMenuTrigger,
	NavigationMenuViewport as UINavigationMenuViewport,
	navigationMenuTriggerStyle,
} from "../../app/components/ui/navigation-menu";

export interface NavigationMenuProps {
	children: React.ReactNode;
	className?: string;
	viewport?: boolean;
}

/** Primary navigation component for site navigation */
export const NavigationMenu = ({
	children,
	className,
	viewport = true,
	...props
}: NavigationMenuProps) => {
	return (
		<UINavigationMenu className={className} viewport={viewport} {...props}>
			{children}
		</UINavigationMenu>
	);
};

export interface NavigationMenuListProps {
	children: React.ReactNode;
	className?: string;
}

export const NavigationMenuList = ({
	children,
	className,
	...props
}: NavigationMenuListProps) => {
	return (
		<UINavigationMenuList className={className} {...props}>
			{children}
		</UINavigationMenuList>
	);
};

export interface NavigationMenuItemProps {
	children: React.ReactNode;
	className?: string;
}

export const NavigationMenuItem = ({
	children,
	className,
	...props
}: NavigationMenuItemProps) => {
	return (
		<UINavigationMenuItem className={className} {...props}>
			{children}
		</UINavigationMenuItem>
	);
};

export interface NavigationMenuTriggerProps {
	children: React.ReactNode;
	className?: string;
}

export const NavigationMenuTrigger = ({
	children,
	className,
	...props
}: NavigationMenuTriggerProps) => {
	return (
		<UINavigationMenuTrigger className={className} {...props}>
			{children}
		</UINavigationMenuTrigger>
	);
};

export interface NavigationMenuContentProps {
	children: React.ReactNode;
	className?: string;
}

export const NavigationMenuContent = ({
	children,
	className,
	...props
}: NavigationMenuContentProps) => {
	return (
		<UINavigationMenuContent className={className} {...props}>
			{children}
		</UINavigationMenuContent>
	);
};

export interface NavigationMenuLinkProps {
	children: React.ReactNode;
	className?: string;
	href?: string;
	active?: boolean;
}

export const NavigationMenuLink = ({
	children,
	className,
	...props
}: NavigationMenuLinkProps) => {
	return (
		<UINavigationMenuLink className={className} {...props}>
			{children}
		</UINavigationMenuLink>
	);
};

// Also export the utility style function
export { navigationMenuTriggerStyle };
