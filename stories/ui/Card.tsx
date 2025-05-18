import type React from "react";
import {
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
	Card as UICard,
} from "../../app/components/ui/card";
import "./Card.css";

export interface CardProps {
	title?: React.ReactNode;
	description?: React.ReactNode;
	content?: React.ReactNode;
	footer?: React.ReactNode;
	action?: React.ReactNode;
	className?: string;
	headerClassName?: string;
	titleClassName?: string;
	descriptionClassName?: string;
	contentClassName?: string;
	footerClassName?: string;
	children?: React.ReactNode;
}

export const Card = ({
	title,
	description,
	content,
	footer,
	action,
	className,
	headerClassName,
	titleClassName,
	descriptionClassName,
	contentClassName,
	footerClassName,
	children,
}: CardProps) => {
	// If children are provided, render them directly
	if (children) {
		return <UICard className={className}>{children}</UICard>;
	}

	// Otherwise construct the card from props
	return (
		<UICard className={className}>
			{(title || description || action) && (
				<CardHeader className={headerClassName}>
					{title && <CardTitle className={titleClassName}>{title}</CardTitle>}
					{description && (
						<CardDescription className={descriptionClassName}>
							{description}
						</CardDescription>
					)}
					{action && <CardAction>{action}</CardAction>}
				</CardHeader>
			)}
			{content && (
				<CardContent className={contentClassName}>{content}</CardContent>
			)}
			{footer && <CardFooter className={footerClassName}>{footer}</CardFooter>}
		</UICard>
	);
};
