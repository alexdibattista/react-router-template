import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Checkbox } from "./Checkbox";
import { Input } from "./Input";
import { Label } from "./Label";
import "./Label.css";

const meta = {
	title: "UI/Label",
	component: Label,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
	args: {
		children: "Label",
		htmlFor: "input",
	},
	render: (args) => (
		<div className="label-demo">
			<div className="form-item">
				<Label {...args} className="label" />
				<Input id="input" placeholder="Enter text..." />
			</div>
		</div>
	),
};

export const WithInputTypes: Story = {
	render: () => (
		<div className="label-demo">
			<div className="label-section">
				<div className="form-item">
					<Label htmlFor="text" className="label">
						Text Input
					</Label>
					<Input id="text" placeholder="Enter text..." />
				</div>

				<div className="form-item">
					<Label htmlFor="email" className="label">
						Email Address
					</Label>
					<Input id="email" type="email" placeholder="you@example.com" />
				</div>

				<div className="form-item">
					<Label htmlFor="password" className="label">
						Password
					</Label>
					<Input id="password" type="password" placeholder="Enter password" />
				</div>
			</div>
		</div>
	),
};

export const Required: Story = {
	render: () => (
		<div className="label-demo">
			<div className="label-section">
				<div className="form-item">
					<Label htmlFor="required" className="label required">
						Required Field
					</Label>
					<Input id="required" required placeholder="Required field" />
				</div>

				<div className="form-item">
					<Label htmlFor="optional" className="label">
						Optional Field
					</Label>
					<Input id="optional" placeholder="Optional field" />
				</div>
			</div>
		</div>
	),
};

export const WithHintAndError: Story = {
	render: () => (
		<div className="label-demo">
			<div className="label-section">
				<div className="form-item">
					<Label htmlFor="username" className="label">
						Username
					</Label>
					<Input id="username" placeholder="Enter username" />
					<div className="label-hint">
						Choose a username that's at least 3 characters long.
					</div>
				</div>

				<div className="form-item">
					<Label htmlFor="email-error" className="label">
						Email Address
					</Label>
					<Input
						id="email-error"
						placeholder="Enter email"
						className="border-destructive"
					/>
					<div className="label-error">Please enter a valid email address.</div>
				</div>
			</div>
		</div>
	),
};

export const WithCheckbox: Story = {
	render: () => (
		<div className="label-demo">
			<div className="flex items-center gap-2">
				<Checkbox id="terms" />
				<Label
					htmlFor="terms"
					className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
				>
					Accept terms and conditions
				</Label>
			</div>
		</div>
	),
};

export const Disabled: Story = {
	render: () => (
		<div className="label-demo">
			<div className="label-section">
				<div className="form-item">
					<Label htmlFor="disabled-input" className="label disabled">
						Disabled Field
					</Label>
					<Input id="disabled-input" disabled placeholder="Disabled input" />
				</div>

				<div className="flex items-center gap-2">
					<Checkbox id="disabled-checkbox" disabled />
					<Label htmlFor="disabled-checkbox" className="label disabled">
						Disabled checkbox option
					</Label>
				</div>
			</div>
		</div>
	),
};
