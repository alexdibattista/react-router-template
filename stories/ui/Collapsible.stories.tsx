import type { Meta, StoryObj } from "@storybook/react";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { Button } from "./Button";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "./Collapsible";
import "./Collapsible.css";

const meta = {
	title: "UI/Collapsible",
	component: Collapsible,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof Collapsible>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
	args: {
		children: null,
	},
	render: () => (
		<div className="collapsible-demo">
			<Collapsible className="collapsible">
				<CollapsibleTrigger className="collapsible-trigger">
					<span>Toggle content</span>
					<ChevronDown className="collapsible-trigger-icon" />
				</CollapsibleTrigger>
				<CollapsibleContent className="collapsible-content">
					<div className="collapsible-content-inner">
						<p>
							This content can be expanded and collapsed by clicking on the
							trigger button above.
						</p>
					</div>
				</CollapsibleContent>
			</Collapsible>
		</div>
	),
};

export const Controlled: Story = {
	args: {
		children: null,
	},
	render: () => {
		// Using useState hook in the render function for Storybook
		const [isOpen, setIsOpen] = useState(false);

		return (
			<div className="collapsible-demo">
				<div className="mb-4">
					<Button onClick={() => setIsOpen(!isOpen)}>
						{isOpen ? "Close" : "Open"}
					</Button>
				</div>
				<Collapsible
					open={isOpen}
					onOpenChange={setIsOpen}
					className="collapsible"
				>
					<CollapsibleTrigger className="collapsible-trigger">
						<span>Controlled collapsible</span>
						<ChevronDown className="collapsible-trigger-icon" />
					</CollapsibleTrigger>
					<CollapsibleContent className="collapsible-content">
						<div className="collapsible-content-inner">
							<p>
								This collapsible component is controlled by the button above. It
								can be opened and closed programmatically.
							</p>
						</div>
					</CollapsibleContent>
				</Collapsible>
			</div>
		);
	},
};

export const WithMultipleSections: Story = {
	args: {
		children: null,
	},
	render: () => (
		<div className="collapsible-demo">
			<div className="space-y-4">
				{Array.from({ length: 3 }).map((_, i) => (
					<Collapsible key={`section-${i}`} className="collapsible">
						<CollapsibleTrigger className="collapsible-trigger">
							<span>Section {i + 1}</span>
							<ChevronDown className="collapsible-trigger-icon" />
						</CollapsibleTrigger>
						<CollapsibleContent className="collapsible-content">
							<div className="collapsible-content-inner">
								<p>Content for section {i + 1}</p>
								<p className="mt-2">
									{`This is additional content that is hidden by default and can be
                  revealed by clicking on the section header.`}
								</p>
							</div>
						</CollapsibleContent>
					</Collapsible>
				))}
			</div>
		</div>
	),
};
