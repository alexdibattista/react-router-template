import type { Meta, StoryObj } from "@storybook/react";
import {
	AlignCenterIcon,
	AlignJustifyIcon,
	AlignLeftIcon,
	AlignRightIcon,
	BoldIcon,
	ItalicIcon,
	LaptopIcon,
	MoonIcon,
	SunIcon,
	UnderlineIcon,
} from "lucide-react";
import React, { useState } from "react";

import { Label } from "../../app/components/ui/label";
import { cn } from "../../app/lib/utils";

import { ToggleGroup, ToggleGroupItem } from "./ToggleGroup";
import "./ToggleGroup.css";

// Define the interface for story props
interface ToggleGroupStoryProps {
	className?: string;
}

// Create a meta object for the ToggleGroup stories
const meta = {
	title: "UI/ToggleGroup",
	component: ToggleGroup,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<ToggleGroupStoryProps>;

export default meta;
type Story = StoryObj<typeof ToggleGroup>;

// Default ToggleGroup
export const Default: Story = {
	render: () => (
		<div className="toggle-group-story-container">
			<div className="toggle-group-story-section">
				<h3>Default ToggleGroup</h3>
				<div className="toggle-group-story-description">
					A basic toggle group for single selection.
				</div>

				<div className="toggle-group-story-card">
					<div className="toggle-group-story-demo">
						<ToggleGroup type="single" defaultValue="center">
							<ToggleGroupItem value="left" aria-label="Align left">
								<AlignLeftIcon className="h-4 w-4" />
							</ToggleGroupItem>
							<ToggleGroupItem value="center" aria-label="Align center">
								<AlignCenterIcon className="h-4 w-4" />
							</ToggleGroupItem>
							<ToggleGroupItem value="right" aria-label="Align right">
								<AlignRightIcon className="h-4 w-4" />
							</ToggleGroupItem>
							<ToggleGroupItem value="justify" aria-label="Justify">
								<AlignJustifyIcon className="h-4 w-4" />
							</ToggleGroupItem>
						</ToggleGroup>
					</div>
					<p className="toggle-group-story-info">
						The default toggle group component provides a set of connected
						toggle buttons with a single selected option. This is commonly used
						for alignment controls in text editors or other exclusive choices.
					</p>
				</div>
			</div>
		</div>
	),
};

// Multiple Selection ToggleGroup
export const MultipleSelection: Story = {
	render: () => (
		<div className="toggle-group-story-container">
			<div className="toggle-group-story-section">
				<h3>Multiple Selection ToggleGroup</h3>
				<div className="toggle-group-story-description">
					A toggle group that allows multiple selections.
				</div>

				<div className="toggle-group-story-card">
					<div className="toggle-group-story-demo">
						<ToggleGroup type="multiple" defaultValue={["bold"]}>
							<ToggleGroupItem value="bold" aria-label="Toggle bold">
								<BoldIcon className="h-4 w-4" />
							</ToggleGroupItem>
							<ToggleGroupItem value="italic" aria-label="Toggle italic">
								<ItalicIcon className="h-4 w-4" />
							</ToggleGroupItem>
							<ToggleGroupItem value="underline" aria-label="Toggle underline">
								<UnderlineIcon className="h-4 w-4" />
							</ToggleGroupItem>
						</ToggleGroup>
					</div>
					<p className="toggle-group-story-info">
						Multiple selection toggle groups allow users to select any number of
						options, including none. This is useful for text formatting controls
						where multiple styles can be applied simultaneously.
					</p>
				</div>
			</div>
		</div>
	),
};

// ToggleGroup with Labels
export const WithLabels: Story = {
	render: () => (
		<div className="toggle-group-story-container">
			<div className="toggle-group-story-section">
				<h3>ToggleGroup with Labels</h3>
				<div className="toggle-group-story-description">
					Toggle group with text labels.
				</div>

				<div className="toggle-group-story-card">
					<div className="toggle-group-story-demo">
						<div className="toggle-group-story-label-row">
							<Label className="mb-2">Text Alignment:</Label>
							<ToggleGroup type="single" defaultValue="left">
								<ToggleGroupItem value="left" aria-label="Align left">
									<AlignLeftIcon className="h-4 w-4 mr-2" />
									Left
								</ToggleGroupItem>
								<ToggleGroupItem value="center" aria-label="Align center">
									<AlignCenterIcon className="h-4 w-4 mr-2" />
									Center
								</ToggleGroupItem>
								<ToggleGroupItem value="right" aria-label="Align right">
									<AlignRightIcon className="h-4 w-4 mr-2" />
									Right
								</ToggleGroupItem>
							</ToggleGroup>
						</div>

						<div className="toggle-group-story-label-row">
							<Label className="mb-2">Theme Choice:</Label>
							<ToggleGroup type="single" defaultValue="light">
								<ToggleGroupItem value="light" aria-label="Light theme">
									<SunIcon className="h-4 w-4 mr-2" />
									Light
								</ToggleGroupItem>
								<ToggleGroupItem value="dark" aria-label="Dark theme">
									<MoonIcon className="h-4 w-4 mr-2" />
									Dark
								</ToggleGroupItem>
								<ToggleGroupItem value="system" aria-label="System theme">
									<LaptopIcon className="h-4 w-4 mr-2" />
									System
								</ToggleGroupItem>
							</ToggleGroup>
						</div>
					</div>
					<p className="toggle-group-story-info">
						Including text labels with icons in toggle groups can improve
						clarity and usability. This approach is especially helpful for
						options that may not be immediately clear from an icon alone.
					</p>
				</div>
			</div>
		</div>
	),
};

// ToggleGroup Variants
export const Variants: Story = {
	render: () => (
		<div className="toggle-group-story-container">
			<div className="toggle-group-story-section">
				<h3>ToggleGroup Variants</h3>
				<div className="toggle-group-story-description">
					Different visual variants of the toggle group component.
				</div>

				<div className="toggle-group-story-card">
					<div className="toggle-group-story-demo">
						<div className="toggle-group-story-variants">
							<div className="toggle-group-story-variant-row">
								<span className="toggle-group-story-variant-label">
									Default
								</span>
								<ToggleGroup type="single" defaultValue="center">
									<ToggleGroupItem value="left" aria-label="Align left">
										<AlignLeftIcon className="h-4 w-4" />
									</ToggleGroupItem>
									<ToggleGroupItem value="center" aria-label="Align center">
										<AlignCenterIcon className="h-4 w-4" />
									</ToggleGroupItem>
									<ToggleGroupItem value="right" aria-label="Align right">
										<AlignRightIcon className="h-4 w-4" />
									</ToggleGroupItem>
								</ToggleGroup>
							</div>

							<div className="toggle-group-story-variant-row">
								<span className="toggle-group-story-variant-label">
									Outline
								</span>
								<ToggleGroup
									type="single"
									defaultValue="center"
									variant="outline"
								>
									<ToggleGroupItem value="left" aria-label="Align left">
										<AlignLeftIcon className="h-4 w-4" />
									</ToggleGroupItem>
									<ToggleGroupItem value="center" aria-label="Align center">
										<AlignCenterIcon className="h-4 w-4" />
									</ToggleGroupItem>
									<ToggleGroupItem value="right" aria-label="Align right">
										<AlignRightIcon className="h-4 w-4" />
									</ToggleGroupItem>
								</ToggleGroup>
							</div>
						</div>
					</div>
					<p className="toggle-group-story-info">
						Toggle group components offer different visual variants to match
						your design requirements. The default variant is more subtle, while
						the outline variant provides more visual prominence with a border.
					</p>
				</div>
			</div>
		</div>
	),
};

// ToggleGroup Sizes
export const Sizes: Story = {
	render: () => (
		<div className="toggle-group-story-container">
			<div className="toggle-group-story-section">
				<h3>ToggleGroup Sizes</h3>
				<div className="toggle-group-story-description">
					Different size options for the toggle group component.
				</div>

				<div className="toggle-group-story-card">
					<div className="toggle-group-story-demo">
						<div className="toggle-group-story-variants">
							<div className="toggle-group-story-variant-row">
								<span className="toggle-group-story-variant-label">Small</span>
								<ToggleGroup type="single" size="sm" defaultValue="center">
									<ToggleGroupItem value="left" aria-label="Align left">
										<AlignLeftIcon className="h-3.5 w-3.5" />
									</ToggleGroupItem>
									<ToggleGroupItem value="center" aria-label="Align center">
										<AlignCenterIcon className="h-3.5 w-3.5" />
									</ToggleGroupItem>
									<ToggleGroupItem value="right" aria-label="Align right">
										<AlignRightIcon className="h-3.5 w-3.5" />
									</ToggleGroupItem>
								</ToggleGroup>
							</div>

							<div className="toggle-group-story-variant-row">
								<span className="toggle-group-story-variant-label">
									Default
								</span>
								<ToggleGroup type="single" defaultValue="center">
									<ToggleGroupItem value="left" aria-label="Align left">
										<AlignLeftIcon className="h-4 w-4" />
									</ToggleGroupItem>
									<ToggleGroupItem value="center" aria-label="Align center">
										<AlignCenterIcon className="h-4 w-4" />
									</ToggleGroupItem>
									<ToggleGroupItem value="right" aria-label="Align right">
										<AlignRightIcon className="h-4 w-4" />
									</ToggleGroupItem>
								</ToggleGroup>
							</div>

							<div className="toggle-group-story-variant-row">
								<span className="toggle-group-story-variant-label">Large</span>
								<ToggleGroup type="single" size="lg" defaultValue="center">
									<ToggleGroupItem value="left" aria-label="Align left">
										<AlignLeftIcon className="h-5 w-5" />
									</ToggleGroupItem>
									<ToggleGroupItem value="center" aria-label="Align center">
										<AlignCenterIcon className="h-5 w-5" />
									</ToggleGroupItem>
									<ToggleGroupItem value="right" aria-label="Align right">
										<AlignRightIcon className="h-5 w-5" />
									</ToggleGroupItem>
								</ToggleGroup>
							</div>
						</div>
					</div>
					<p className="toggle-group-story-info">
						Toggle group components are available in different sizes to
						accommodate various UI contexts, from compact toolbars to more
						prominent feature controls.
					</p>
				</div>
			</div>
		</div>
	),
};

// Interactive ToggleGroup
export const Interactive: Story = {
	render: () => {
		const [alignment, setAlignment] = useState("left");
		const [textFormatting, setTextFormatting] = useState<string[]>([]);

		return (
			<div className="toggle-group-story-container">
				<div className="toggle-group-story-section">
					<h3>Interactive ToggleGroup</h3>
					<div className="toggle-group-story-description">
						Interactive demonstration of toggle group components.
					</div>

					<div className="toggle-group-story-card">
						<div className="toggle-group-story-demo">
							<div className="toggle-group-story-label-row">
								<Label className="mb-2">Text Formatting:</Label>
								<ToggleGroup
									type="multiple"
									value={textFormatting}
									onValueChange={setTextFormatting}
								>
									<ToggleGroupItem value="bold" aria-label="Toggle bold">
										<BoldIcon className="h-4 w-4 mr-2" />
										Bold
									</ToggleGroupItem>
									<ToggleGroupItem value="italic" aria-label="Toggle italic">
										<ItalicIcon className="h-4 w-4 mr-2" />
										Italic
									</ToggleGroupItem>
									<ToggleGroupItem
										value="underline"
										aria-label="Toggle underline"
									>
										<UnderlineIcon className="h-4 w-4 mr-2" />
										Underline
									</ToggleGroupItem>
								</ToggleGroup>
							</div>

							<div className="toggle-group-story-label-row">
								<Label className="mb-2">Text Alignment:</Label>
								<ToggleGroup
									type="single"
									value={alignment}
									onValueChange={(value) => value && setAlignment(value)}
								>
									<ToggleGroupItem value="left" aria-label="Align left">
										<AlignLeftIcon className="h-4 w-4 mr-2" />
										Left
									</ToggleGroupItem>
									<ToggleGroupItem value="center" aria-label="Align center">
										<AlignCenterIcon className="h-4 w-4 mr-2" />
										Center
									</ToggleGroupItem>
									<ToggleGroupItem value="right" aria-label="Align right">
										<AlignRightIcon className="h-4 w-4 mr-2" />
										Right
									</ToggleGroupItem>
									<ToggleGroupItem value="justify" aria-label="Justify">
										<AlignJustifyIcon className="h-4 w-4 mr-2" />
										Justify
									</ToggleGroupItem>
								</ToggleGroup>
							</div>

							<div className="toggle-group-story-preview">
								<div className="toggle-group-story-preview-content">
									<p
										className={cn(
											"text-base",
											textFormatting.includes("bold") && "font-bold",
											textFormatting.includes("italic") && "italic",
											textFormatting.includes("underline") && "underline",
											alignment === "left" && "text-left",
											alignment === "center" && "text-center",
											alignment === "right" && "text-right",
											alignment === "justify" && "text-justify",
										)}
									>
										This is a sample text that demonstrates the formatting
										options you can apply using the toggle group buttons above.
										The text will update in real-time as you interact with the
										controls.
									</p>
								</div>
							</div>
						</div>
						<p className="toggle-group-story-info">
							This interactive example demonstrates how toggle group components
							can be used to control text formatting and alignment in a document
							editor or similar application.
						</p>
					</div>
				</div>
			</div>
		);
	},
};

// Disabled ToggleGroup
export const Disabled: Story = {
	render: () => (
		<div className="toggle-group-story-container">
			<div className="toggle-group-story-section">
				<h3>Disabled ToggleGroup</h3>
				<div className="toggle-group-story-description">
					Toggle group components in disabled state.
				</div>

				<div className="toggle-group-story-card">
					<div className="toggle-group-story-demo">
						<div className="toggle-group-story-row">
							<ToggleGroup type="single" defaultValue="center" disabled>
								<ToggleGroupItem value="left" aria-label="Align left">
									<AlignLeftIcon className="h-4 w-4" />
								</ToggleGroupItem>
								<ToggleGroupItem value="center" aria-label="Align center">
									<AlignCenterIcon className="h-4 w-4" />
								</ToggleGroupItem>
								<ToggleGroupItem value="right" aria-label="Align right">
									<AlignRightIcon className="h-4 w-4" />
								</ToggleGroupItem>
							</ToggleGroup>
						</div>
					</div>
					<p className="toggle-group-story-info">
						Disabled toggle groups indicate that controls are currently
						unavailable for interaction. They maintain the same visual
						appearance as active toggle groups but with reduced opacity.
					</p>
				</div>
			</div>
		</div>
	),
};

// Dark Theme ToggleGroup
export const DarkTheme: Story = {
	render: () => (
		<div className="toggle-group-story-container toggle-group-story-dark">
			<div className="toggle-group-story-section">
				<h3>Dark Theme ToggleGroup</h3>
				<div className="toggle-group-story-description">
					Toggle group components styled for dark mode interfaces.
				</div>

				<div className="toggle-group-story-card">
					<div className="toggle-group-story-demo">
						<div className="toggle-group-story-row">
							<ToggleGroup type="single" defaultValue="center">
								<ToggleGroupItem value="left" aria-label="Align left">
									<AlignLeftIcon className="h-4 w-4" />
								</ToggleGroupItem>
								<ToggleGroupItem value="center" aria-label="Align center">
									<AlignCenterIcon className="h-4 w-4" />
								</ToggleGroupItem>
								<ToggleGroupItem value="right" aria-label="Align right">
									<AlignRightIcon className="h-4 w-4" />
								</ToggleGroupItem>
							</ToggleGroup>
						</div>

						<div className="toggle-group-story-row">
							<ToggleGroup
								type="multiple"
								defaultValue={["bold"]}
								variant="outline"
							>
								<ToggleGroupItem value="bold" aria-label="Toggle bold">
									<BoldIcon className="h-4 w-4 mr-2" />
									Bold
								</ToggleGroupItem>
								<ToggleGroupItem value="italic" aria-label="Toggle italic">
									<ItalicIcon className="h-4 w-4 mr-2" />
									Italic
								</ToggleGroupItem>
								<ToggleGroupItem
									value="underline"
									aria-label="Toggle underline"
								>
									<UnderlineIcon className="h-4 w-4 mr-2" />
									Underline
								</ToggleGroupItem>
							</ToggleGroup>
						</div>
					</div>
					<p className="toggle-group-story-info">
						Toggle group components in dark theme provide the same functionality
						as the light theme but are styled to match dark mode interfaces.
						This ensures a consistent user experience across different color
						schemes.
					</p>
				</div>
			</div>
		</div>
	),
};
