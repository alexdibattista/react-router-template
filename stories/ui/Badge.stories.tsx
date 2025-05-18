import type { Meta, StoryObj } from "@storybook/react";
import {
	Bell,
	CheckCheck,
	CircleCheck,
	CircleX,
	Clock,
	Plus,
	ShieldAlert,
	Star,
} from "lucide-react";
import React from "react";
import { Badge } from "./Badge";
import "./Badge.css";

const meta = {
	title: "UI/Badge",
	component: Badge,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: "select",
			options: ["default", "secondary", "destructive", "outline"],
		},
	},
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: "Badge",
	},
};

export const Secondary: Story = {
	args: {
		variant: "secondary",
		children: "Secondary",
	},
};

export const Destructive: Story = {
	args: {
		variant: "destructive",
		children: "Destructive",
	},
};

export const Outline: Story = {
	args: {
		variant: "outline",
		children: "Outline",
	},
};

export const WithIcon: Story = {
	args: {
		children: "New",
		icon: <Plus className="h-3 w-3" />,
	},
};

export const AllVariants: Story = {
	render: () => (
		<div className="badge-container">
			<div className="badge-section">
				<p className="badge-section-title">Basic Variants</p>
				<div className="badge-row">
					<Badge>Default</Badge>
					<Badge variant="secondary">Secondary</Badge>
					<Badge variant="destructive">Destructive</Badge>
					<Badge variant="outline">Outline</Badge>
				</div>
			</div>

			<div className="badge-section">
				<p className="badge-section-title">With Icons</p>
				<div className="badge-row">
					<Badge icon={<Star className="h-3 w-3" />}>Featured</Badge>
					<Badge variant="secondary" icon={<Bell className="h-3 w-3" />}>
						Notification
					</Badge>
					<Badge
						variant="destructive"
						icon={<ShieldAlert className="h-3 w-3" />}
					>
						Warning
					</Badge>
					<Badge variant="outline" icon={<CheckCheck className="h-3 w-3" />}>
						Verified
					</Badge>
				</div>
			</div>

			<div className="badge-section">
				<p className="badge-section-title">Status Indicators</p>
				<div className="badge-row">
					<Badge className="badge-with-dot">
						<span className="badge-dot badge-dot-green" />
						Active
					</Badge>
					<Badge variant="secondary" className="badge-with-dot">
						<span className="badge-dot badge-dot-yellow" />
						Pending
					</Badge>
					<Badge variant="outline" className="badge-with-dot">
						<span className="badge-dot badge-dot-blue" />
						Info
					</Badge>
					<Badge variant="destructive" className="badge-with-dot">
						<span className="badge-dot badge-dot-red" />
						Error
					</Badge>
				</div>
			</div>

			<div className="badge-section">
				<p className="badge-section-title">Common Use Cases</p>
				<div className="badge-row">
					<Badge icon={<CircleCheck className="h-3 w-3" />} variant="outline">
						Completed
					</Badge>
					<Badge icon={<CircleX className="h-3 w-3" />} variant="destructive">
						Rejected
					</Badge>
					<Badge icon={<Clock className="h-3 w-3" />} variant="secondary">
						Pending
					</Badge>
					<Badge icon={<Plus className="h-3 w-3" />}>New</Badge>
				</div>
			</div>
		</div>
	),
};
