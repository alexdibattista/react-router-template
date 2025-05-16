import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "./Skeleton";

const meta = {
	title: "UI/Skeleton",
	component: Skeleton,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		width: { control: "text" },
		height: { control: "text" },
	},
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		width: 200,
		height: 20,
	},
};

export const Circle: Story = {
	args: {
		width: 50,
		height: 50,
		className: "rounded-full",
	},
};

export const Card: Story = {
	render: () => (
		<div className="w-[300px] space-y-5">
			<Skeleton className="h-[125px] w-full rounded-xl" />
			<div className="space-y-2">
				<Skeleton className="h-4 w-full" />
				<Skeleton className="h-4 w-[80%]" />
			</div>
		</div>
	),
};

export const UserProfile: Story = {
	render: () => (
		<div className="flex items-center space-x-4">
			<Skeleton className="h-12 w-12 rounded-full" />
			<div className="space-y-2">
				<Skeleton className="h-4 w-[150px]" />
				<Skeleton className="h-4 w-[100px]" />
			</div>
		</div>
	),
};

export const Text: Story = {
	render: () => (
		<div className="space-y-2">
			<Skeleton className="h-4 w-[250px]" />
			<Skeleton className="h-4 w-[200px]" />
			<Skeleton className="h-4 w-[150px]" />
		</div>
	),
};
