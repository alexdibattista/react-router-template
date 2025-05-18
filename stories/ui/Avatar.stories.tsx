import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Avatar } from "./Avatar";
import "./Avatar.css";

const meta = {
	title: "UI/Avatar",
	component: Avatar,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		size: {
			control: "select",
			options: ["sm", "md", "lg", "xl"],
		},
		status: {
			control: "select",
			options: [undefined, "online", "offline", "away", "busy"],
		},
	},
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		src: "https://github.com/shadcn.png",
		alt: "User Avatar",
	},
};

export const WithFallback: Story = {
	args: {
		alt: "John Doe",
	},
};

export const WithCustomFallback: Story = {
	args: {
		fallback: "JD",
		alt: "John Doe",
	},
};

export const Small: Story = {
	args: {
		src: "https://github.com/shadcn.png",
		alt: "User Avatar",
		size: "sm",
	},
};

export const Medium: Story = {
	args: {
		src: "https://github.com/shadcn.png",
		alt: "User Avatar",
		size: "md",
	},
};

export const Large: Story = {
	args: {
		src: "https://github.com/shadcn.png",
		alt: "User Avatar",
		size: "lg",
	},
};

export const ExtraLarge: Story = {
	args: {
		src: "https://github.com/shadcn.png",
		alt: "User Avatar",
		size: "xl",
	},
};

export const WithStatus: Story = {
	render: () => (
		<div className="avatar-container">
			<div className="avatar-group">
				<div className="flex flex-col items-center">
					<Avatar
						src="https://github.com/shadcn.png"
						alt="Online User"
						size="md"
						status="online"
					/>
					<p className="avatar-label">Online</p>
				</div>
				<div className="flex flex-col items-center">
					<Avatar
						src="https://github.com/shadcn.png"
						alt="Offline User"
						size="md"
						status="offline"
					/>
					<p className="avatar-label">Offline</p>
				</div>
				<div className="flex flex-col items-center">
					<Avatar
						src="https://github.com/shadcn.png"
						alt="Away User"
						size="md"
						status="away"
					/>
					<p className="avatar-label">Away</p>
				</div>
				<div className="flex flex-col items-center">
					<Avatar
						src="https://github.com/shadcn.png"
						alt="Busy User"
						size="md"
						status="busy"
					/>
					<p className="avatar-label">Busy</p>
				</div>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Avatars with different status indicators: online, offline, away, and busy.",
			},
		},
	},
};

export const SizeVariants: Story = {
	render: () => (
		<div className="avatar-container">
			<div className="avatar-group">
				<div className="flex flex-col items-center">
					<Avatar
						src="https://github.com/shadcn.png"
						alt="Small Avatar"
						size="sm"
					/>
					<p className="avatar-label">Small</p>
				</div>
				<div className="flex flex-col items-center">
					<Avatar
						src="https://github.com/shadcn.png"
						alt="Medium Avatar"
						size="md"
					/>
					<p className="avatar-label">Medium</p>
				</div>
				<div className="flex flex-col items-center">
					<Avatar
						src="https://github.com/shadcn.png"
						alt="Large Avatar"
						size="lg"
					/>
					<p className="avatar-label">Large</p>
				</div>
				<div className="flex flex-col items-center">
					<Avatar
						src="https://github.com/shadcn.png"
						alt="Extra Large Avatar"
						size="xl"
					/>
					<p className="avatar-label">XLarge</p>
				</div>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Different size variants for the avatar component: small (sm), medium (md), large (lg), and extra large (xl).",
			},
		},
	},
};
