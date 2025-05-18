import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "./AlertDialog";
import { Button } from "./Button";
import "./AlertDialog.css";

const meta = {
	title: "UI/AlertDialog",
	component: AlertDialog,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof AlertDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
	args: {
		children: null,
	},
	render: () => (
		<div className="alert-dialog-demo">
			<AlertDialog>
				<AlertDialogTrigger asChild>
					<Button variant="outline" className="alert-dialog-trigger">
						Open Alert Dialog
					</Button>
				</AlertDialogTrigger>
				<AlertDialogContent>
					<AlertDialogHeader>
						<AlertDialogTitle>Are you sure?</AlertDialogTitle>
						<AlertDialogDescription>
							This action cannot be undone. This will permanently delete your
							account and remove your data from our servers.
						</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogCancel>Cancel</AlertDialogCancel>
						<AlertDialogAction>Continue</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</div>
	),
};

export const Destructive: Story = {
	args: {
		children: null,
	},
	render: () => (
		<div className="alert-dialog-demo">
			<AlertDialog>
				<AlertDialogTrigger asChild>
					<Button variant="destructive" className="alert-dialog-trigger">
						Delete Account
					</Button>
				</AlertDialogTrigger>
				<AlertDialogContent>
					<AlertDialogHeader>
						<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
						<AlertDialogDescription>
							This action cannot be undone. This will permanently delete your
							account and remove your data from our servers.
						</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogCancel>Cancel</AlertDialogCancel>
						<AlertDialogAction>Yes, delete account</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</div>
	),
};

export const CustomActions: Story = {
	args: {
		children: null,
	},
	render: () => (
		<div className="alert-dialog-demo">
			<AlertDialog>
				<AlertDialogTrigger asChild>
					<Button variant="outline" className="alert-dialog-trigger">
						Open With Multiple Actions
					</Button>
				</AlertDialogTrigger>
				<AlertDialogContent>
					<AlertDialogHeader>
						<AlertDialogTitle>Choose an action</AlertDialogTitle>
						<AlertDialogDescription>
							Please select one of the following actions to proceed.
						</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter className="flex-col sm:flex-row items-stretch sm:items-center gap-2">
						<AlertDialogCancel>Cancel</AlertDialogCancel>
						<AlertDialogAction>Save Draft</AlertDialogAction>
						<AlertDialogAction>Publish</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</div>
	),
};
