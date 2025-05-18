import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { AspectRatio } from "./AspectRatio";
import "./AspectRatio.css";

const meta = {
	title: "UI/AspectRatio",
	component: AspectRatio,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof AspectRatio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		ratio: 16 / 9,
		children: (
			<img
				src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
				alt="Landscape"
				className="aspect-ratio-image"
			/>
		),
		className: "aspect-ratio-demo",
	},
};

export const Square: Story = {
	args: {
		ratio: 1 / 1,
		children: (
			<img
				src="https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?w=800&dpr=2&q=80"
				alt="Portrait"
				className="aspect-ratio-image"
			/>
		),
		className: "aspect-ratio-demo",
	},
};

export const Portrait: Story = {
	args: {
		ratio: 3 / 4,
		children: (
			<img
				src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&dpr=2&q=80"
				alt="Portrait"
				className="aspect-ratio-image"
			/>
		),
		className: "aspect-ratio-demo",
	},
};

export const Ultrawide: Story = {
	args: {
		ratio: 21 / 9,
		children: (
			<img
				src="https://images.unsplash.com/photo-1576156663582-8f0b0aec783c?w=800&dpr=2&q=80"
				alt="Ultrawide"
				className="aspect-ratio-image"
			/>
		),
		className: "aspect-ratio-demo",
	},
};

export const WithContent: Story = {
	args: {
		ratio: 16 / 9,
		children: <div className="aspect-ratio-content">16:9 Aspect Ratio</div>,
		className: "aspect-ratio-demo",
	},
};

export const MultipleRatios: Story = {
	args: {
		ratio: undefined,
		className: "aspect-ratio-demo",
		children: null,
	},
	render: () => (
		<div className="aspect-ratio-container">
			<div className="flex flex-col gap-4">
				<div>
					<p className="text-sm font-medium mb-2">Square (1:1)</p>
					<AspectRatio ratio={1} className="aspect-ratio-demo">
						<div className="aspect-ratio-content">1:1</div>
					</AspectRatio>
				</div>
				<div>
					<p className="text-sm font-medium mb-2">Classic TV (4:3)</p>
					<AspectRatio ratio={4 / 3} className="aspect-ratio-demo">
						<div className="aspect-ratio-content">4:3</div>
					</AspectRatio>
				</div>
				<div>
					<p className="text-sm font-medium mb-2">Standard Widescreen (16:9)</p>
					<AspectRatio ratio={16 / 9} className="aspect-ratio-demo">
						<div className="aspect-ratio-content">16:9</div>
					</AspectRatio>
				</div>
				<div>
					<p className="text-sm font-medium mb-2">Ultrawide (21:9)</p>
					<AspectRatio ratio={21 / 9} className="aspect-ratio-demo">
						<div className="aspect-ratio-content">21:9</div>
					</AspectRatio>
				</div>
			</div>
		</div>
	),
};
