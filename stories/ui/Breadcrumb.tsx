import React from "react";
import {
	BreadcrumbEllipsis,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
	Breadcrumb as UIBreadcrumb,
} from "../../app/components/ui/breadcrumb";
import "./Breadcrumb.css";

export interface BreadcrumbItemProps {
	label: string;
	href?: string;
	isCurrent?: boolean;
}

export interface BreadcrumbProps {
	items: BreadcrumbItemProps[];
	className?: string;
	separator?: React.ReactNode;
	maxItems?: number;
}

export const Breadcrumb = ({
	items,
	className,
	separator,
	maxItems,
}: BreadcrumbProps) => {
	// If maxItems is specified and less than items.length, show ellipsis
	const showEllipsis = maxItems !== undefined && items.length > maxItems;
	const visibleItems = showEllipsis
		? [...items.slice(0, 1), ...items.slice(-(maxItems - 1))]
		: items;

	return (
		<UIBreadcrumb className={className}>
			<BreadcrumbList>
				{visibleItems.map((item, index) => {
					// Check if ellipsis should be shown after the first item
					const showEllipsisHere =
						showEllipsis && index === 0 && visibleItems.length > 1;

					return (
						<React.Fragment key={item.label}>
							<BreadcrumbItem>
								{item.isCurrent ? (
									<BreadcrumbPage>{item.label}</BreadcrumbPage>
								) : (
									<BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
								)}
							</BreadcrumbItem>

							{showEllipsisHere && <BreadcrumbEllipsis />}

							{index < visibleItems.length - 1 && (
								<BreadcrumbSeparator>{separator}</BreadcrumbSeparator>
							)}
						</React.Fragment>
					);
				})}
			</BreadcrumbList>
		</UIBreadcrumb>
	);
};
