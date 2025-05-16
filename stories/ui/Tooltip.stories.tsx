import type { Meta, StoryObj } from "@storybook/react";
import { HelpCircle, Info, Settings } from "lucide-react";
import { Button } from "../../app/components/ui/button";
import { Tooltip } from "./Tooltip";

const meta = {
	title: "UI/Tooltip",
	component: Tooltip,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		side: {
			control: { type: "select" },
			options: ["top", "right", "bottom", "left"],
		},
		sideOffset: { control: { type: "number", min: 0, max: 20, step: 1 } },
		delayDuration: { control: { type: "number", min: 0, max: 1000, step: 50 } },
	},
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		content: "Tooltip content",
		children: <Button variant="outline">Hover me</Button>,
	},
};

export const WithIcon: Story = {
	args: {
		content: "Information about this feature",
		children: <Info className="h-4 w-4 cursor-help text-muted-foreground" />,
	},
};

export const BottomPlacement: Story = {
	args: {
		content: "Settings",
		side: "bottom",
		children: <Settings className="h-5 w-5 cursor-pointer" />,
	},
};

export const LeftPlacement: Story = {
	args: {
		content: "Left side tooltip",
		side: "left",
		children: <Button variant="outline">Hover me</Button>,
	},
};

export const RightPlacement: Story = {
	args: {
		content: "Right side tooltip",
		side: "right",
		children: <Button variant="outline">Hover me</Button>,
	},
};

export const WithDelay: Story = {
	args: {
		content: "This appears after 500ms",
		delayDuration: 500,
		children: <HelpCircle className="h-5 w-5 cursor-help" />,
	},
};

export const WithHTMLContent: Story = {
	args: {
		content: (
			<div className="flex flex-col gap-1">
				<span className="font-bold">Title</span>
				<span className="text-xs">Additional information</span>
			</div>
		),
		children: <Button variant="outline">Hover for more info</Button>,
	},
};
