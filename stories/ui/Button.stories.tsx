import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Loader2, Moon } from "lucide-react";
import { Button } from "./Button";

const meta = {
	title: "UI/Button",
	component: Button,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: { type: "select" },
			options: [
				"default",
				"outline",
				"secondary",
				"ghost",
				"link",
				"destructive",
			],
		},
		size: {
			control: { type: "select" },
			options: ["default", "sm", "lg", "icon"],
		},
		disabled: { control: "boolean" },
	},
	args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: "Button",
	},
};

export const Secondary: Story = {
	args: {
		variant: "secondary",
		children: "Button",
	},
};

export const Outline: Story = {
	args: {
		variant: "outline",
		children: "Button",
	},
};

export const Destructive: Story = {
	args: {
		variant: "destructive",
		children: "Button",
	},
};

export const Ghost: Story = {
	args: {
		variant: "ghost",
		children: "Button",
	},
};

export const Link: Story = {
	args: {
		variant: "link",
		children: "Button",
	},
};

export const Small: Story = {
	args: {
		size: "sm",
		children: "Small Button",
	},
};

export const Large: Story = {
	args: {
		size: "lg",
		children: "Large Button",
	},
};

export const Icon: Story = {
	args: {
		variant: "outline",
		size: "icon",
		children: <Moon />,
	},
};

export const WithIcon: Story = {
	args: {
		children: (
			<>
				<Moon /> Dark Mode
			</>
		),
	},
};

export const Loading: Story = {
	args: {
		disabled: true,
		children: (
			<>
				<Loader2 className="animate-spin" /> Please Wait
			</>
		),
	},
};

export const AsChild: Story = {
	args: {
		asChild: true,
		children: <a href="/login">Login</a>,
	},
};
