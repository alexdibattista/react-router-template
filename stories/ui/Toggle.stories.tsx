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

import { Toggle } from "./Toggle";
import "./Toggle.css";

// Define the interface for story props
interface ToggleStoryProps {
	className?: string;
}

// Create a meta object for the Toggle stories
const meta = {
	title: "UI/Toggle",
	component: Toggle,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<ToggleStoryProps>;

export default meta;
type Story = StoryObj<typeof Toggle>;

// Default Toggle
export const Default: Story = {
	render: () => (
		<div className="toggle-story-container">
			<div className="toggle-story-section">
				<h3>Default Toggle</h3>
				<div className="toggle-story-description">
					A simple toggle component for toggling a single option.
				</div>

				<div className="toggle-story-card">
					<div className="toggle-story-demo">
						<div className="toggle-story-row">
							<Toggle aria-label="Toggle bold">
								<BoldIcon className="h-4 w-4" />
							</Toggle>
							<Toggle aria-label="Toggle italic">
								<ItalicIcon className="h-4 w-4" />
							</Toggle>
							<Toggle aria-label="Toggle underline">
								<UnderlineIcon className="h-4 w-4" />
							</Toggle>
						</div>
					</div>
					<p className="toggle-story-info">
						The default toggle component provides a simple way to toggle between
						active and inactive states. It's commonly used for formatting
						controls in text editors.
					</p>
				</div>
			</div>
		</div>
	),
};

// Toggle with Text
export const WithText: Story = {
	render: () => (
		<div className="toggle-story-container">
			<div className="toggle-story-section">
				<h3>Toggle with Text</h3>
				<div className="toggle-story-description">
					Toggle components with both text and icons.
				</div>

				<div className="toggle-story-card">
					<div className="toggle-story-demo">
						<div className="toggle-story-row">
							<Toggle aria-label="Toggle bold">
								<BoldIcon className="h-4 w-4 mr-2" />
								Bold
							</Toggle>
							<Toggle aria-label="Toggle italic">
								<ItalicIcon className="h-4 w-4 mr-2" />
								Italic
							</Toggle>
							<Toggle aria-label="Toggle underline">
								<UnderlineIcon className="h-4 w-4 mr-2" />
								Underline
							</Toggle>
						</div>

						<div className="toggle-story-row">
							<Toggle aria-label="Toggle left align">Left</Toggle>
							<Toggle aria-label="Toggle center align">Center</Toggle>
							<Toggle aria-label="Toggle right align">Right</Toggle>
							<Toggle aria-label="Toggle justify align">Justify</Toggle>
						</div>
					</div>
					<p className="toggle-story-info">
						Toggles can include both icons and text to provide clearer context
						for the action they represent. Text-only toggles are also used when
						icons alone may not be descriptive enough.
					</p>
				</div>
			</div>
		</div>
	),
};

// Toggle Variants
export const Variants: Story = {
	render: () => (
		<div className="toggle-story-container">
			<div className="toggle-story-section">
				<h3>Toggle Variants</h3>
				<div className="toggle-story-description">
					Different visual variants of the toggle component.
				</div>

				<div className="toggle-story-card">
					<div className="toggle-story-demo">
						<div className="toggle-story-variants">
							<div className="toggle-story-variant-row">
								<span className="toggle-story-variant-label">Default</span>
								<Toggle aria-label="Toggle bold">
									<BoldIcon className="h-4 w-4 mr-2" />
									Bold
								</Toggle>
							</div>

							<div className="toggle-story-variant-row">
								<span className="toggle-story-variant-label">Outline</span>
								<Toggle variant="outline" aria-label="Toggle bold">
									<BoldIcon className="h-4 w-4 mr-2" />
									Bold
								</Toggle>
							</div>
						</div>
					</div>
					<p className="toggle-story-info">
						Toggle components offer different visual variants to match your
						design requirements. The default variant is more subtle, while the
						outline variant provides more visual prominence with a border.
					</p>
				</div>
			</div>
		</div>
	),
};

// Toggle Sizes
export const Sizes: Story = {
	render: () => (
		<div className="toggle-story-container">
			<div className="toggle-story-section">
				<h3>Toggle Sizes</h3>
				<div className="toggle-story-description">
					Different size options for the toggle component.
				</div>

				<div className="toggle-story-card">
					<div className="toggle-story-demo">
						<div className="toggle-story-variants">
							<div className="toggle-story-variant-row">
								<span className="toggle-story-variant-label">Small</span>
								<Toggle size="sm" aria-label="Toggle small">
									<BoldIcon className="h-3.5 w-3.5 mr-2" />
									Small
								</Toggle>
							</div>

							<div className="toggle-story-variant-row">
								<span className="toggle-story-variant-label">Default</span>
								<Toggle aria-label="Toggle default">
									<BoldIcon className="h-4 w-4 mr-2" />
									Default
								</Toggle>
							</div>

							<div className="toggle-story-variant-row">
								<span className="toggle-story-variant-label">Large</span>
								<Toggle size="lg" aria-label="Toggle large">
									<BoldIcon className="h-5 w-5 mr-2" />
									Large
								</Toggle>
							</div>
						</div>
					</div>
					<p className="toggle-story-info">
						Toggle components are available in different sizes to accommodate
						various UI contexts, from compact toolbars to more prominent feature
						toggles.
					</p>
				</div>
			</div>
		</div>
	),
};

// Toggle with Labels
export const WithLabels: Story = {
	render: () => (
		<div className="toggle-story-container">
			<div className="toggle-story-section">
				<h3>Toggle with Labels</h3>
				<div className="toggle-story-description">
					Toggle components with associated labels.
				</div>

				<div className="toggle-story-card">
					<div className="toggle-story-demo">
						<div className="toggle-story-label-row">
							<Label htmlFor="bold-toggle" className="mr-2">
								Bold:
							</Label>
							<Toggle id="bold-toggle" aria-label="Toggle bold">
								<BoldIcon className="h-4 w-4" />
							</Toggle>
						</div>

						<div className="toggle-story-label-row">
							<Label htmlFor="theme-toggle" className="mr-2">
								Theme:
							</Label>
							<div className="flex gap-2">
								<Toggle id="theme-toggle-light" aria-label="Light theme">
									<SunIcon className="h-4 w-4 mr-2" />
									Light
								</Toggle>
								<Toggle id="theme-toggle-dark" aria-label="Dark theme">
									<MoonIcon className="h-4 w-4 mr-2" />
									Dark
								</Toggle>
								<Toggle id="theme-toggle-system" aria-label="System theme">
									<LaptopIcon className="h-4 w-4 mr-2" />
									System
								</Toggle>
							</div>
						</div>
					</div>
					<p className="toggle-story-info">
						Associating labels with toggle components improves accessibility and
						clarity. Labels can be positioned before or after the toggle,
						depending on the design requirements.
					</p>
				</div>
			</div>
		</div>
	),
};

// Interactive Toggle
export const Interactive: Story = {
	render: () => {
		const [bold, setBold] = useState(false);
		const [italic, setItalic] = useState(false);
		const [underline, setUnderline] = useState(false);
		const [alignment, setAlignment] = useState<string>("left");

		return (
			<div className="toggle-story-container">
				<div className="toggle-story-section">
					<h3>Interactive Toggle</h3>
					<div className="toggle-story-description">
						Interactive demonstration of toggle components.
					</div>

					<div className="toggle-story-card">
						<div className="toggle-story-demo">
							<div className="toggle-story-row">
								<Toggle
									pressed={bold}
									onPressedChange={setBold}
									aria-label="Toggle bold"
								>
									<BoldIcon className="h-4 w-4 mr-2" />
									Bold
								</Toggle>
								<Toggle
									pressed={italic}
									onPressedChange={setItalic}
									aria-label="Toggle italic"
								>
									<ItalicIcon className="h-4 w-4 mr-2" />
									Italic
								</Toggle>
								<Toggle
									pressed={underline}
									onPressedChange={setUnderline}
									aria-label="Toggle underline"
								>
									<UnderlineIcon className="h-4 w-4 mr-2" />
									Underline
								</Toggle>
							</div>

							<div className="toggle-story-row">
								<Toggle
									pressed={alignment === "left"}
									onPressedChange={() => setAlignment("left")}
									aria-label="Align left"
								>
									<AlignLeftIcon className="h-4 w-4 mr-2" />
									Left
								</Toggle>
								<Toggle
									pressed={alignment === "center"}
									onPressedChange={() => setAlignment("center")}
									aria-label="Align center"
								>
									<AlignCenterIcon className="h-4 w-4 mr-2" />
									Center
								</Toggle>
								<Toggle
									pressed={alignment === "right"}
									onPressedChange={() => setAlignment("right")}
									aria-label="Align right"
								>
									<AlignRightIcon className="h-4 w-4 mr-2" />
									Right
								</Toggle>
								<Toggle
									pressed={alignment === "justify"}
									onPressedChange={() => setAlignment("justify")}
									aria-label="Align justify"
								>
									<AlignJustifyIcon className="h-4 w-4 mr-2" />
									Justify
								</Toggle>
							</div>

							<div className="toggle-story-centered p-4 border rounded-md">
								<p
									className={cn(
										"text-base",
										bold && "font-bold",
										italic && "italic",
										underline && "underline",
										alignment === "left" && "text-left",
										alignment === "center" && "text-center",
										alignment === "right" && "text-right",
										alignment === "justify" && "text-justify",
									)}
								>
									This is a sample text that demonstrates the formatting options
									you can apply using the toggle buttons above. The text will
									update in real-time as you interact with the controls.
								</p>
							</div>
						</div>
						<p className="toggle-story-info">
							This interactive example demonstrates how toggle components can be
							used to control text formatting in a document editor or similar
							application.
						</p>
					</div>
				</div>
			</div>
		);
	},
};

// Disabled Toggle
export const Disabled: Story = {
	render: () => (
		<div className="toggle-story-container">
			<div className="toggle-story-section">
				<h3>Disabled Toggle</h3>
				<div className="toggle-story-description">
					Toggle components in disabled state.
				</div>

				<div className="toggle-story-card">
					<div className="toggle-story-demo">
						<div className="toggle-story-row">
							<Toggle aria-label="Toggle bold" disabled>
								<BoldIcon className="h-4 w-4 mr-2" />
								Bold
							</Toggle>
							<Toggle aria-label="Toggle italic" disabled>
								<ItalicIcon className="h-4 w-4 mr-2" />
								Italic
							</Toggle>
							<Toggle variant="outline" aria-label="Toggle underline" disabled>
								<UnderlineIcon className="h-4 w-4 mr-2" />
								Underline
							</Toggle>
						</div>
					</div>
					<p className="toggle-story-info">
						Disabled toggles indicate that a control is currently unavailable
						for interaction. They maintain the same visual appearance as active
						toggles but with reduced opacity.
					</p>
				</div>
			</div>
		</div>
	),
};

// Dark Theme Toggle
export const DarkTheme: Story = {
	render: () => (
		<div className="toggle-story-container toggle-story-dark">
			<div className="toggle-story-section">
				<h3>Dark Theme Toggle</h3>
				<div className="toggle-story-description">
					Toggle components styled for dark mode interfaces.
				</div>

				<div className="toggle-story-card">
					<div className="toggle-story-demo">
						<div className="toggle-story-row">
							<Toggle aria-label="Toggle bold">
								<BoldIcon className="h-4 w-4 mr-2" />
								Bold
							</Toggle>
							<Toggle aria-label="Toggle italic">
								<ItalicIcon className="h-4 w-4 mr-2" />
								Italic
							</Toggle>
							<Toggle aria-label="Toggle underline">
								<UnderlineIcon className="h-4 w-4 mr-2" />
								Underline
							</Toggle>
						</div>

						<div className="toggle-story-row">
							<Toggle variant="outline" aria-label="Toggle bold">
								<BoldIcon className="h-4 w-4 mr-2" />
								Bold
							</Toggle>
							<Toggle variant="outline" aria-label="Toggle italic">
								<ItalicIcon className="h-4 w-4 mr-2" />
								Italic
							</Toggle>
							<Toggle variant="outline" aria-label="Toggle underline">
								<UnderlineIcon className="h-4 w-4 mr-2" />
								Underline
							</Toggle>
						</div>
					</div>
					<p className="toggle-story-info">
						Toggle components in dark theme provide the same functionality as
						the light theme but are styled to match dark mode interfaces. This
						ensures a consistent user experience across different color schemes.
					</p>
				</div>
			</div>
		</div>
	),
};
