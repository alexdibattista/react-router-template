import { cva } from "class-variance-authority";
import React from "react";

import { cn } from "~/lib/utils";

// Base Chart component
interface ChartProps extends React.HTMLAttributes<HTMLDivElement> {
	children?: React.ReactNode;
}

const Chart = React.forwardRef<HTMLDivElement, ChartProps>(
	({ className, children, ...props }, ref) => {
		return (
			<div ref={ref} className={cn("chart-container", className)} {...props}>
				{children}
			</div>
		);
	},
);
Chart.displayName = "Chart";

// Chart Container component
interface ChartContainerProps extends React.HTMLAttributes<HTMLDivElement> {
	children?: React.ReactNode;
}

const ChartContainer = React.forwardRef<HTMLDivElement, ChartContainerProps>(
	({ className, children, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={cn("w-full h-full flex flex-col", className)}
				{...props}
			>
				{children}
			</div>
		);
	},
);
ChartContainer.displayName = "ChartContainer";

// Chart Legend component
interface ChartLegendProps extends React.HTMLAttributes<HTMLDivElement> {
	children?: React.ReactNode;
}

const ChartLegend = React.forwardRef<HTMLDivElement, ChartLegendProps>(
	({ className, children, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={cn("flex flex-wrap gap-4 mt-4", className)}
				{...props}
			>
				{children}
			</div>
		);
	},
);
ChartLegend.displayName = "ChartLegend";

// Chart Tooltip component
interface ChartTooltipProps extends React.HTMLAttributes<HTMLDivElement> {
	children?: React.ReactNode;
}

const ChartTooltip = React.forwardRef<HTMLDivElement, ChartTooltipProps>(
	({ className, children, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={cn(
					"absolute z-50 p-2 bg-popover border border-border rounded-md shadow-md text-sm",
					className,
				)}
				{...props}
			>
				{children}
			</div>
		);
	},
);
ChartTooltip.displayName = "ChartTooltip";

// Chart Axis component
interface ChartAxisProps extends React.HTMLAttributes<HTMLDivElement> {
	type?: "x" | "y";
	children?: React.ReactNode;
}

const ChartAxis = React.forwardRef<HTMLDivElement, ChartAxisProps>(
	({ className, type = "x", children, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={cn(
					"chart-axis",
					type === "x" ? "chart-axis-x" : "chart-axis-y",
					className,
				)}
				{...props}
			>
				{children}
			</div>
		);
	},
);
ChartAxis.displayName = "ChartAxis";

// Chart Bar component
const chartBarVariants = cva("chart-bar", {
	variants: {
		variant: {
			default: "bg-primary",
			secondary: "bg-secondary",
			accent: "bg-accent",
		},
		size: {
			sm: "chart-bar-sm",
			md: "chart-bar-md",
			lg: "chart-bar-lg",
		},
	},
	defaultVariants: {
		variant: "default",
		size: "md",
	},
});

interface ChartBarProps extends React.HTMLAttributes<HTMLDivElement> {
	value?: number;
	maxValue?: number;
	animated?: boolean;
	children?: React.ReactNode;
	variant?: "default" | "secondary" | "accent";
	size?: "sm" | "md" | "lg";
}

const ChartBar = React.forwardRef<HTMLDivElement, ChartBarProps>(
	(
		{
			className,
			variant = "default",
			size = "md",
			value = 0,
			maxValue = 100,
			animated = true,
			children,
			...props
		},
		ref,
	) => {
		return (
			<div
				ref={ref}
				className={cn(
					"chart-bar",
					{
						"bg-primary": variant === "default",
						"bg-secondary": variant === "secondary",
						"bg-accent": variant === "accent",
						"chart-bar-sm": size === "sm",
						"chart-bar-md": size === "md",
						"chart-bar-lg": size === "lg",
					},
					className,
				)}
				style={{
					height: `${(value / maxValue) * 100}%`,
					transition: animated ? "height 0.5s ease" : "none",
				}}
				{...props}
			>
				{children}
			</div>
		);
	},
);
ChartBar.displayName = "ChartBar";

// Chart Line component
interface ChartLineProps extends React.HTMLAttributes<HTMLDivElement> {
	color?: string;
	width?: number;
	children?: React.ReactNode;
}

const ChartLine = React.forwardRef<HTMLDivElement, ChartLineProps>(
	(
		{ className, color = "currentColor", width = 2, children, ...props },
		ref,
	) => {
		return (
			<div
				ref={ref}
				className={cn("chart-line", className)}
				style={{ color, borderWidth: width }}
				{...props}
			>
				{children}
			</div>
		);
	},
);
ChartLine.displayName = "ChartLine";

// Chart Area component
interface ChartAreaProps extends React.HTMLAttributes<HTMLDivElement> {
	color?: string;
	opacity?: number;
	children?: React.ReactNode;
}

const ChartArea = React.forwardRef<HTMLDivElement, ChartAreaProps>(
	(
		{ className, color = "currentColor", opacity = 0.2, children, ...props },
		ref,
	) => {
		return (
			<div
				ref={ref}
				className={cn("chart-area", className)}
				style={{ color, opacity }}
				{...props}
			>
				{children}
			</div>
		);
	},
);
ChartArea.displayName = "ChartArea";

// Chart Grid component
interface ChartGridProps extends React.HTMLAttributes<HTMLDivElement> {
	children?: React.ReactNode;
}

const ChartGrid = React.forwardRef<HTMLDivElement, ChartGridProps>(
	({ className, children, ...props }, ref) => {
		return (
			<div ref={ref} className={cn("chart-grid", className)} {...props}>
				{children}
			</div>
		);
	},
);
ChartGrid.displayName = "ChartGrid";

// Chart Title component
interface ChartTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
	children?: React.ReactNode;
}

const ChartTitle = React.forwardRef<HTMLHeadingElement, ChartTitleProps>(
	({ className, children, ...props }, ref) => {
		return (
			<h3
				ref={ref}
				className={cn("text-lg font-medium mt-0 mb-4", className)}
				{...props}
			>
				{children}
			</h3>
		);
	},
);
ChartTitle.displayName = "ChartTitle";

export {
	Chart,
	ChartContainer,
	ChartLegend,
	ChartTooltip,
	ChartAxis,
	ChartBar,
	ChartLine,
	ChartArea,
	ChartGrid,
	ChartTitle,
};
