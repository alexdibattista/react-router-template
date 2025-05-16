import type React from "react";
import {
	Sheet as UISheet,
	SheetClose as UISheetClose,
	SheetContent as UISheetContent,
	SheetDescription as UISheetDescription,
	SheetFooter as UISheetFooter,
	SheetHeader as UISheetHeader,
	SheetTitle as UISheetTitle,
	SheetTrigger as UISheetTrigger,
} from "../../app/components/ui/sheet";

export interface SheetProps {
	children: React.ReactNode;
	defaultOpen?: boolean;
	open?: boolean;
	onOpenChange?: (open: boolean) => void;
	trigger?: React.ReactNode;
}

/** Dialog sheet that slides in from the edge of the screen */
export const Sheet = ({
	children,
	defaultOpen,
	open,
	onOpenChange,
	trigger,
}: SheetProps) => {
	return (
		<UISheet defaultOpen={defaultOpen} open={open} onOpenChange={onOpenChange}>
			{trigger && <UISheetTrigger asChild>{trigger}</UISheetTrigger>}
			{children}
		</UISheet>
	);
};

export interface SheetContentProps {
	children: React.ReactNode;
	side?: "top" | "right" | "bottom" | "left";
	className?: string;
}

export const SheetContent = ({
	children,
	side = "right",
	className,
}: SheetContentProps) => {
	return (
		<UISheetContent side={side} className={className}>
			{children}
		</UISheetContent>
	);
};

export interface SheetHeaderProps {
	children: React.ReactNode;
	className?: string;
}

export const SheetHeader = ({ children, className }: SheetHeaderProps) => {
	return <UISheetHeader className={className}>{children}</UISheetHeader>;
};

export interface SheetFooterProps {
	children: React.ReactNode;
	className?: string;
}

export const SheetFooter = ({ children, className }: SheetFooterProps) => {
	return <UISheetFooter className={className}>{children}</UISheetFooter>;
};

export interface SheetTitleProps {
	children: React.ReactNode;
	className?: string;
}

export const SheetTitle = ({ children, className }: SheetTitleProps) => {
	return <UISheetTitle className={className}>{children}</UISheetTitle>;
};

export interface SheetDescriptionProps {
	children: React.ReactNode;
	className?: string;
}

export const SheetDescription = ({
	children,
	className,
}: SheetDescriptionProps) => {
	return (
		<UISheetDescription className={className}>{children}</UISheetDescription>
	);
};

// Also export the Close component
export const SheetClose = UISheetClose;
