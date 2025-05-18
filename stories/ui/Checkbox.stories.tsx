import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { Checkbox } from "./Checkbox";
import "./Checkbox.css";

const meta = {
	title: "UI/Checkbox",
	component: Checkbox,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
	render: () => (
		<div className="checkbox-demo">
			<div className="checkbox-wrapper">
				<Checkbox id="terms" />
				<label htmlFor="terms" className="checkbox-label">
					Accept terms and conditions
				</label>
			</div>
		</div>
	),
};

export const Checked: Story = {
	render: () => (
		<div className="checkbox-demo">
			<div className="checkbox-wrapper">
				<Checkbox id="checked" defaultChecked />
				<label htmlFor="checked" className="checkbox-label">
					Default checked
				</label>
			</div>
		</div>
	),
};

export const Disabled: Story = {
	render: () => (
		<div className="checkbox-demo">
			<div className="space-y-2">
				<div className="checkbox-wrapper">
					<Checkbox id="disabled" disabled />
					<label htmlFor="disabled" className="checkbox-label">
						Disabled
					</label>
				</div>
				<div className="checkbox-wrapper">
					<Checkbox id="disabled-checked" disabled defaultChecked />
					<label htmlFor="disabled-checked" className="checkbox-label">
						Disabled checked
					</label>
				</div>
			</div>
		</div>
	),
};

export const FormGroup: Story = {
	render: () => {
		return (
			<div className="checkbox-demo">
				<form className="checkbox-form">
					<fieldset className="checkbox-group">
						<legend className="checkbox-subtitle">
							Which features are you interested in?
						</legend>
						<div className="checkbox-item">
							<Checkbox id="feature1" />
							<label htmlFor="feature1" className="checkbox-label">
								Dashboard Analytics
							</label>
						</div>
						<div className="checkbox-item">
							<Checkbox id="feature2" />
							<label htmlFor="feature2" className="checkbox-label">
								Team Collaboration
							</label>
						</div>
						<div className="checkbox-item">
							<Checkbox id="feature3" />
							<label htmlFor="feature3" className="checkbox-label">
								API Integration
							</label>
						</div>
						<div className="checkbox-item">
							<Checkbox id="feature4" />
							<label htmlFor="feature4" className="checkbox-label">
								Advanced Security
							</label>
						</div>
					</fieldset>
				</form>
			</div>
		);
	},
};

export const Controlled: Story = {
	render: () => {
		const [checked, setChecked] = useState(false);

		return (
			<div className="checkbox-demo">
				<div className="space-y-4">
					<div className="checkbox-wrapper">
						<Checkbox
							id="controlled"
							checked={checked}
							onCheckedChange={(value) => setChecked(value === true)}
						/>
						<label htmlFor="controlled" className="checkbox-label">
							{checked ? "Checked" : "Unchecked"}
						</label>
					</div>
					<div>
						<p className="text-sm text-muted-foreground">
							The checkbox is {checked ? "checked" : "unchecked"}
						</p>
					</div>
				</div>
			</div>
		);
	},
};
