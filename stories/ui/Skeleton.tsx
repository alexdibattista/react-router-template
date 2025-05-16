import React from "react";
import { Skeleton as UISkeleton } from "../../app/components/ui/skeleton";

export interface SkeletonProps {
	className?: string;
	width?: string | number;
	height?: string | number;
}

/** Loading placeholder animation component */
export const Skeleton = ({
	className,
	width,
	height,
	...props
}: SkeletonProps) => {
	const style = {
		width: width
			? typeof width === "number"
				? `${width}px`
				: width
			: undefined,
		height: height
			? typeof height === "number"
				? `${height}px`
				: height
			: undefined,
	};

	return <UISkeleton className={className} style={style} {...props} />;
};
