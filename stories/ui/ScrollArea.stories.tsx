import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { Button } from "../../app/components/ui/button";
import { ScrollArea, ScrollBar } from "./ScrollArea";

import "./ScrollArea.css";

// Generate sample data for the stories
const generateParagraphs = (count: number) => {
	return Array.from({ length: count }, (_, i) => (
		<p key={`para-${i}`}>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod,
			nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl
			nunc quis nisl. Nullam euismod, nisl eget aliquam ultricies, nunc nisl
			aliquet nunc, quis aliquam nisl nunc quis nisl.
		</p>
	));
};

const generateListItems = (count: number) => {
	return Array.from({ length: count }, (_, i) => (
		<div key={`item-${i}`} className="scroll-area-item">
			List Item {i + 1}
		</div>
	));
};

const generateTableRows = (rowCount: number) => {
	return Array.from({ length: rowCount }, (_, rowIndex) => (
		<tr key={`row-${rowIndex}`}>
			{Array.from({ length: 5 }, (_, colIndex) => (
				<td key={`cell-${rowIndex}-${colIndex}`}>
					Row {rowIndex + 1}, Column {colIndex + 1}
				</td>
			))}
		</tr>
	));
};

const generateImageItems = (count: number) => {
	return Array.from({ length: count }, (_, i) => (
		<div key={`img-${i}`} className="scroll-area-image-card">
			Image {i + 1}
		</div>
	));
};

const meta = {
	title: "UI/ScrollArea",
	component: ScrollArea,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		className: { control: "text" },
	},
} satisfies Meta<typeof ScrollArea>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic vertical ScrollArea
export const Default: Story = {
	args: {},
	render: (args) => (
		<div className="scroll-area-story-container">
			<div className="scroll-area-story-section">
				<h3>Default Vertical Scroll Area</h3>
				<div className="scroll-area-story-description">
					A basic scroll area with vertical scrolling and custom scrollbar.
				</div>

				<div className="scroll-area-demo scroll-area-vertical">
					<ScrollArea className="h-full" {...args}>
						<div className="scroll-area-content">
							<h4>Scrollable Content</h4>
							{generateParagraphs(8)}
						</div>
					</ScrollArea>
				</div>
			</div>
		</div>
	),
};

// Horizontal ScrollArea
export const HorizontalScrolling: Story = {
	args: {},
	render: (args) => (
		<div className="scroll-area-story-container">
			<div className="scroll-area-story-section">
				<h3>Horizontal Scroll Area</h3>
				<div className="scroll-area-story-description">
					A scroll area with horizontal scrolling capability.
				</div>

				<div className="scroll-area-demo scroll-area-horizontal">
					<ScrollArea className="w-full" {...args}>
						<div className="scroll-area-horizontal-content">
							<div className="scroll-area-images">
								{Array.from({ length: 12 }, (_, i) => (
									<div key={`img-${i}`} className="scroll-area-image">
										Image {i + 1}
									</div>
								))}
							</div>
						</div>
						<ScrollBar orientation="horizontal" />
					</ScrollArea>
				</div>
			</div>
		</div>
	),
};

// Both Horizontal and Vertical ScrollArea
export const BidirectionalScrolling: Story = {
	args: {},
	render: (args) => (
		<div className="scroll-area-story-container">
			<div className="scroll-area-story-section">
				<h3>Bidirectional Scroll Area</h3>
				<div className="scroll-area-story-description">
					A scroll area with both vertical and horizontal scrolling for large
					content.
				</div>

				<div className="scroll-area-demo scroll-area-bidirectional">
					<ScrollArea className="h-full" {...args}>
						<div className="scroll-area-table-container">
							<table className="scroll-area-table">
								<thead>
									<tr>
										<th>Column 1</th>
										<th>Column 2</th>
										<th>Column 3</th>
										<th>Column 4</th>
										<th>Column 5</th>
									</tr>
								</thead>
								<tbody>{generateTableRows(20)}</tbody>
							</table>
						</div>
						<ScrollBar orientation="horizontal" />
					</ScrollArea>
				</div>
			</div>
		</div>
	),
};

// Interactive ScrollArea
export const InteractiveContent: Story = {
	args: {},
	render: (args) => {
		const [count, setCount] = useState<number>(10);

		const handleAddItems = () => {
			setCount((prev) => prev + 5);
		};

		const handleRemoveItems = () => {
			setCount((prev) => Math.max(5, prev - 5));
		};

		return (
			<div className="scroll-area-story-container">
				<div className="scroll-area-story-section">
					<h3>Interactive Scroll Area</h3>
					<div className="scroll-area-story-description">
						A scroll area with dynamic content that can be added or removed.
					</div>

					<div className="scroll-area-controls mb-4">
						<Button onClick={handleAddItems} size="sm">
							Add 5 Items
						</Button>
						<Button onClick={handleRemoveItems} size="sm" variant="outline">
							Remove 5 Items
						</Button>
					</div>

					<div className="scroll-area-demo scroll-area-vertical">
						<ScrollArea className="h-full" {...args}>
							<div className="scroll-area-content">
								<div className="scroll-area-info mb-4">
									Total items: {count}
								</div>
								{generateListItems(count)}
							</div>
						</ScrollArea>
					</div>
				</div>
			</div>
		);
	},
};

// Grid layout in ScrollArea
export const GridLayout: Story = {
	args: {},
	render: (args) => {
		const [activeTab, setActiveTab] = useState<string>("grid");

		return (
			<div className="scroll-area-story-container">
				<div className="scroll-area-story-section">
					<h3>Grid Layout in Scroll Area</h3>
					<div className="scroll-area-story-description">
						A scroll area containing a grid layout of items, useful for image
						galleries or card layouts.
					</div>

					<div className="scroll-area-tabs">
						<div
							className="scroll-area-tab"
							data-active={activeTab === "grid"}
							onClick={() => setActiveTab("grid")}
							onKeyDown={(e) => {
								if (e.key === "Enter" || e.key === " ") {
									setActiveTab("grid");
								}
							}}
							tabIndex={0}
							role="tab"
							aria-selected={activeTab === "grid"}
						>
							Grid View
						</div>
						<div
							className="scroll-area-tab"
							data-active={activeTab === "list"}
							onClick={() => setActiveTab("list")}
							onKeyDown={(e) => {
								if (e.key === "Enter" || e.key === " ") {
									setActiveTab("list");
								}
							}}
							tabIndex={0}
							role="tab"
							aria-selected={activeTab === "list"}
						>
							List View
						</div>
					</div>

					<div className="scroll-area-demo scroll-area-vertical">
						<ScrollArea className="h-full" {...args}>
							{activeTab === "grid" ? (
								<div className="scroll-area-image-grid">
									{generateImageItems(24)}
								</div>
							) : (
								<div className="scroll-area-content">
									{generateListItems(24)}
								</div>
							)}
						</ScrollArea>
					</div>
				</div>
			</div>
		);
	},
};

// Dark Theme ScrollArea
export const DarkTheme: Story = {
	args: {},
	render: (args) => (
		<div className="scroll-area-story-container scroll-area-dark">
			<div className="scroll-area-story-section">
				<h3>Dark Theme Scroll Area</h3>
				<div className="scroll-area-story-description">
					A scroll area styled for dark theme mode.
				</div>

				<div className="scroll-area-demo scroll-area-vertical bg-zinc-800 border-zinc-700">
					<ScrollArea className="h-full" {...args}>
						<div className="scroll-area-content text-zinc-200">
							<h4 className="text-zinc-100">Dark Theme Content</h4>
							{generateParagraphs(8).map((paragraph, i) => (
								<div key={`dark-para-${i}`} className="text-zinc-300">
									{paragraph}
								</div>
							))}
						</div>
					</ScrollArea>
				</div>
			</div>
		</div>
	),
};

// ScrollArea with custom content
export const CustomScrollArea: Story = {
	args: {},
	render: (args) => (
		<div className="scroll-area-story-container">
			<div className="scroll-area-story-section">
				<h3>Custom Styled Scroll Area</h3>
				<div className="scroll-area-story-description">
					A scroll area with custom styled content and sections.
				</div>

				<div className="scroll-area-demo scroll-area-vertical">
					<ScrollArea className="h-full rounded-md border" {...args}>
						<div className="p-4">
							<h4 className="mb-4 text-sm font-medium leading-none">
								Categories
							</h4>
							{Array.from({ length: 5 }, (_, i) => (
								<div
									key={`category-${i}`}
									className="text-sm p-2 rounded-md hover:bg-muted mb-1 cursor-pointer"
								>
									Category {i + 1}
								</div>
							))}

							<div className="my-4 h-px bg-muted" />

							<h4 className="mb-4 text-sm font-medium leading-none">
								Products
							</h4>
							<div className="space-y-2">
								{Array.from({ length: 20 }, (_, i) => (
									<div
										key={`product-${i}`}
										className="flex items-center justify-between p-2 rounded-md hover:bg-muted"
									>
										<span className="text-sm">Product {i + 1}</span>
										<span className="text-xs text-muted-foreground">
											${Math.floor(Math.random() * 100) + 10}.99
										</span>
									</div>
								))}
							</div>
						</div>
					</ScrollArea>
				</div>
			</div>
		</div>
	),
};
