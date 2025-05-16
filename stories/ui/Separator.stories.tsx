import type { Meta, StoryObj } from "@storybook/react";
import { Separator } from "./Separator";

const meta = {
	title: "UI/Separator",
	component: Separator,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		orientation: {
			control: { type: "radio" },
			options: ["horizontal", "vertical"],
		},
		decorative: { control: "boolean" },
	},
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
	args: {
		orientation: "horizontal",
	},
	decorators: [
		(Story) => (
			<div className="w-80">
				<div className="text-2xl font-bold">Title</div>
				<div className="text-sm text-muted-foreground">
					Description of the section
				</div>
				<div className="h-4" />
				<Story />
				<div className="h-4" />
				<div className="text-sm">Content under the separator</div>
			</div>
		),
	],
};

export const Vertical: Story = {
	args: {
		orientation: "vertical",
	},
	decorators: [
		(Story) => (
			<div className="flex h-20 items-center">
				<div className="text-sm">Left</div>
				<div className="w-4" />
				<Story />
				<div className="w-4" />
				<div className="text-sm">Right</div>
			</div>
		),
	],
};

export const NonDecorative: Story = {
	args: {
		decorative: false,
	},
	decorators: [
		(Story) => (
			<div className="w-80">
				<div className="text-sm">Section 1</div>
				<div className="h-4" />
				<Story />
				<div className="h-4" />
				<div className="text-sm">Section 2</div>
			</div>
		),
	],
};
