import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Input } from "./Input";

const meta = {
	title: "UI/Input",
	component: Input,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		disabled: { control: "boolean" },
		required: { control: "boolean" },
		readOnly: { control: "boolean" },
		type: {
			control: { type: "select" },
			options: ["text", "email", "password", "number", "search", "tel", "url"],
		},
	},
	args: { onChange: fn() },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		placeholder: "Enter text here",
	},
};

export const WithValue: Story = {
	args: {
		value: "Input value",
		placeholder: "Enter text here",
	},
};

export const Disabled: Story = {
	args: {
		value: "Disabled input",
		disabled: true,
	},
};

export const Required: Story = {
	args: {
		placeholder: "Required field",
		required: true,
	},
};

export const ReadOnly: Story = {
	args: {
		value: "Read-only content",
		readOnly: true,
	},
};

export const Email: Story = {
	args: {
		type: "email",
		placeholder: "name@example.com",
	},
};

export const Password: Story = {
	args: {
		type: "password",
		placeholder: "Enter password",
	},
};

export const NumberInput: Story = {
	args: {
		type: "number",
		placeholder: "Enter a number",
	},
};

export const Search: Story = {
	args: {
		type: "search",
		placeholder: "Search...",
	},
};
