import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "../../app/components/ui/accordion";
import "./Accordion.css";

// Using a non-component meta type since we're manually rendering the component with children
const meta = {
	title: "UI/Accordion",
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// Since we're working with a complex component that doesn't easily fit in the standard Storybook args pattern,
// we'll use the render method to create our stories

export const Basic: Story = {
	render: () => (
		<div className="accordion-container">
			<Accordion type="single" collapsible>
				<AccordionItem value="item-1">
					<AccordionTrigger>Is it accessible?</AccordionTrigger>
					<AccordionContent>
						Yes. It adheres to the WAI-ARIA design pattern.
					</AccordionContent>
				</AccordionItem>

				<AccordionItem value="item-2">
					<AccordionTrigger>Is it styled?</AccordionTrigger>
					<AccordionContent>
						Yes. It comes with default styles that match the other components'
						aesthetic.
					</AccordionContent>
				</AccordionItem>

				<AccordionItem value="item-3">
					<AccordionTrigger>Is it animated?</AccordionTrigger>
					<AccordionContent>
						Yes. It's animated by default, but you can disable it if you prefer.
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	),
};

export const DefaultOpen: Story = {
	render: () => (
		<div className="accordion-container">
			<Accordion type="single" defaultValue="item-2" collapsible>
				<AccordionItem value="item-1">
					<AccordionTrigger>First Section</AccordionTrigger>
					<AccordionContent>
						This is the first section content.
					</AccordionContent>
				</AccordionItem>

				<AccordionItem value="item-2">
					<AccordionTrigger>Second Section (Default Open)</AccordionTrigger>
					<AccordionContent>
						This section is open by default when the accordion loads.
					</AccordionContent>
				</AccordionItem>

				<AccordionItem value="item-3">
					<AccordionTrigger>Third Section</AccordionTrigger>
					<AccordionContent>
						This is the third section content.
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	),
};

export const Multiple: Story = {
	render: () => (
		<div className="accordion-container">
			<Accordion type="multiple" defaultValue={["item-1", "item-3"]}>
				<AccordionItem value="item-1">
					<AccordionTrigger>First Section</AccordionTrigger>
					<AccordionContent>
						<div className="accordion-demo-content">
							<p className="accordion-demo-description">
								Multiple sections can be open at the same time in this mode.
							</p>
							<p>This is the first section content.</p>
						</div>
					</AccordionContent>
				</AccordionItem>

				<AccordionItem value="item-2">
					<AccordionTrigger>Second Section</AccordionTrigger>
					<AccordionContent>
						<div className="accordion-demo-content">
							<p>Try opening this while the others are open.</p>
						</div>
					</AccordionContent>
				</AccordionItem>

				<AccordionItem value="item-3">
					<AccordionTrigger>Third Section</AccordionTrigger>
					<AccordionContent>
						<div className="accordion-demo-content">
							<p>This section is also open by default.</p>
						</div>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	),
};

export const Disabled: Story = {
	render: () => (
		<div className="accordion-container">
			<Accordion type="single" collapsible>
				<AccordionItem value="item-1">
					<AccordionTrigger>Available Section</AccordionTrigger>
					<AccordionContent>
						This section can be expanded and collapsed.
					</AccordionContent>
				</AccordionItem>

				<AccordionItem value="item-2">
					<AccordionTrigger disabled>Disabled Section</AccordionTrigger>
					<AccordionContent>
						You should not be able to see this content.
					</AccordionContent>
				</AccordionItem>

				<AccordionItem value="item-3">
					<AccordionTrigger>Another Available Section</AccordionTrigger>
					<AccordionContent>
						This section can also be expanded and collapsed.
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	),
};

export const WithRichContent: Story = {
	render: () => (
		<div className="accordion-container">
			<Accordion type="single" collapsible>
				<AccordionItem value="item-1">
					<AccordionTrigger>
						<div className="accordion-demo-heading">Features Overview</div>
					</AccordionTrigger>
					<AccordionContent>
						<div className="accordion-demo-content">
							<p className="accordion-demo-description">
								Our application comes with the following features:
							</p>
							<ul className="accordion-demo-list">
								<li>Responsive design for all devices</li>
								<li>Dark and light theme support</li>
								<li>Customizable dashboard</li>
								<li>Data visualization tools</li>
								<li>Real-time collaboration</li>
							</ul>
						</div>
					</AccordionContent>
				</AccordionItem>

				<AccordionItem value="item-2">
					<AccordionTrigger>
						<div className="accordion-demo-heading">Technical Requirements</div>
					</AccordionTrigger>
					<AccordionContent>
						<div className="accordion-demo-content">
							<p className="accordion-demo-description">
								To run this application, you need:
							</p>
							<ul className="accordion-demo-list">
								<li>Modern browser (Chrome, Firefox, Safari, Edge)</li>
								<li>JavaScript enabled</li>
								<li>Minimum screen resolution: 320px width</li>
								<li>Internet connection for real-time features</li>
							</ul>
						</div>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	),
};
