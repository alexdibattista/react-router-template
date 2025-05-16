import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Loader2, Moon } from "lucide-react";
import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: "Components/Button",
	component: Button,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: "centered",
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
	argTypes: {
		backgroundColor: { control: "color" },
	},
	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
	args: {
		label: "Button",
	},
};

export const Secondary: Story = {
	args: {
		variant: "secondary",
		label: "Button",
	},
};

export const Outline: Story = {
	args: {
		variant: "outline",
		label: "Button",
	},
};

export const Ghost: Story = {
	args: {
		variant: "ghost",
		label: "Button",
	},
};

export const Link: Story = {
	args: {
		variant: "link",
		label: "Button",
	},
};

export const Icon: Story = {
	args: {
		variant: "outline",
		size: "icon",
		label: <Moon />,
	},
};

export const WithIcon: Story = {
	args: {
		label: (
			<div className="flex items-center gap-2">
				<Moon /> Dark
			</div>
		),
	},
};

export const Loading: Story = {
	args: {
		disabled: true,
		label: (
			<div className="flex items-center gap-2">
				<Loader2 className="animate-spin" /> Please Wait
			</div>
		),
	},
};

export const ButtonAsChild: Story = {
	args: {
		asChild: true,
		label: <a href="/login">Login</a>,
	},
};
