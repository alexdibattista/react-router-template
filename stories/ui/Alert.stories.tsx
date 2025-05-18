import type { Meta, StoryObj } from "@storybook/react";
import {
	AlertCircle,
	BellRing,
	CheckCircle2,
	CircleAlert,
	Info,
	ShieldAlert,
	ShieldCheck,
} from "lucide-react";
import React from "react";
import {
	Alert,
	AlertDescription,
	AlertTitle,
} from "../../app/components/ui/alert";
import "./Alert.css";

// Using a non-component meta type since we're manually rendering the component with children
const meta = {
	title: "UI/Alert",
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<div className="alert-container">
			<Alert>
				<AlertTitle>Default Alert</AlertTitle>
				<AlertDescription>
					This is a default alert with title and description.
				</AlertDescription>
			</Alert>
		</div>
	),
};

export const Destructive: Story = {
	render: () => (
		<div className="alert-container">
			<Alert variant="destructive">
				<AlertTitle>Destructive Alert</AlertTitle>
				<AlertDescription>
					This is a destructive alert for important warnings or errors.
				</AlertDescription>
			</Alert>
		</div>
	),
};

export const WithIcon: Story = {
	render: () => (
		<div className="alert-container">
			<Alert>
				<AlertCircle className="h-4 w-4" />
				<AlertTitle>Alert with Icon</AlertTitle>
				<AlertDescription>
					This alert includes an icon for better visual indication.
				</AlertDescription>
			</Alert>
		</div>
	),
};

export const DestructiveWithIcon: Story = {
	render: () => (
		<div className="alert-container">
			<Alert variant="destructive">
				<CircleAlert className="h-4 w-4" />
				<AlertTitle>Error</AlertTitle>
				<AlertDescription>
					Your session has expired. Please log in again to continue.
				</AlertDescription>
			</Alert>
		</div>
	),
};

export const InfoAlert: Story = {
	render: () => (
		<div className="alert-container">
			<Alert>
				<Info className="h-4 w-4" />
				<AlertTitle>Information</AlertTitle>
				<AlertDescription>
					Your account information has been updated successfully.
				</AlertDescription>
			</Alert>
		</div>
	),
};

export const SuccessAlert: Story = {
	render: () => (
		<div className="alert-container">
			<Alert>
				<CheckCircle2 className="h-4 w-4 text-green-500" />
				<AlertTitle>Success</AlertTitle>
				<AlertDescription>
					Your changes have been saved successfully.
				</AlertDescription>
			</Alert>
		</div>
	),
};

export const SecurityAlert: Story = {
	render: () => (
		<div className="alert-container">
			<Alert>
				<ShieldAlert className="h-4 w-4 text-yellow-500" />
				<AlertTitle>Security Notice</AlertTitle>
				<AlertDescription>
					We've detected a login attempt from a new device. Please verify this
					was you.
				</AlertDescription>
			</Alert>
		</div>
	),
};

export const TitleOnlyAlert: Story = {
	render: () => (
		<div className="alert-container">
			<Alert>
				<AlertCircle className="h-4 w-4" />
				<AlertTitle>Update Available</AlertTitle>
			</Alert>
		</div>
	),
};

export const DescriptionOnlyAlert: Story = {
	render: () => (
		<div className="alert-container">
			<Alert>
				<Info className="h-4 w-4" />
				<AlertDescription>
					Your password will expire in 7 days. Please update it soon.
				</AlertDescription>
			</Alert>
		</div>
	),
};

export const NotificationAlert: Story = {
	render: () => (
		<div className="alert-container">
			<Alert>
				<BellRing className="h-4 w-4" />
				<AlertTitle>Notification</AlertTitle>
				<AlertDescription>
					You have 3 unread messages in your inbox.{" "}
					<a href="/messages" className="font-medium underline">
						View all
					</a>
				</AlertDescription>
			</Alert>
		</div>
	),
};
