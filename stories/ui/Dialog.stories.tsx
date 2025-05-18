import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { Button } from "./Button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "./Dialog";
import { Input } from "./Input";
import "./Dialog.css";

const meta = {
	title: "UI/Dialog",
	component: Dialog,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
	args: {
		children: null,
	},
	render: () => (
		<div className="dialog-demo">
			<Dialog>
				<DialogTrigger asChild>
					<Button variant="outline">Open Dialog</Button>
				</DialogTrigger>
				<DialogContent className="dialog-content">
					<DialogHeader>
						<DialogTitle className="dialog-title">Dialog Title</DialogTitle>
						<DialogDescription className="dialog-description">
							This is a dialog description that explains the purpose of the
							dialog.
						</DialogDescription>
					</DialogHeader>
					<p className="text-sm">
						Dialogs provide a way to present content that requires user
						attention or interaction before they can continue using the
						application.
					</p>
					<DialogFooter className="dialog-footer">
						<DialogClose asChild>
							<Button>Close</Button>
						</DialogClose>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	),
};

export const WithForm: Story = {
	args: {
		children: null,
	},
	render: () => (
		<div className="dialog-demo">
			<Dialog>
				<DialogTrigger asChild>
					<Button>Edit Profile</Button>
				</DialogTrigger>
				<DialogContent className="dialog-content">
					<DialogHeader>
						<DialogTitle className="dialog-title">Edit Profile</DialogTitle>
						<DialogDescription className="dialog-description">
							Make changes to your profile information here.
						</DialogDescription>
					</DialogHeader>
					<form className="dialog-form">
						<div className="dialog-form-field">
							<label className="dialog-form-label" htmlFor="name">
								Name
							</label>
							<Input id="name" defaultValue="John Smith" />
						</div>
						<div className="dialog-form-field">
							<label className="dialog-form-label" htmlFor="username">
								Username
							</label>
							<Input id="username" defaultValue="johnsmith" />
						</div>
					</form>
					<DialogFooter className="dialog-footer">
						<DialogClose asChild>
							<Button variant="outline">Cancel</Button>
						</DialogClose>
						<DialogClose asChild>
							<Button>Save Changes</Button>
						</DialogClose>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	),
};

export const Controlled: Story = {
	args: {
		children: null,
	},
	render: () => {
		const [open, setOpen] = useState(false);

		return (
			<div className="dialog-demo">
				<div className="space-y-4">
					<Button onClick={() => setOpen(true)}>Open Controlled Dialog</Button>
					<div>
						<p className="text-sm text-muted-foreground">
							Dialog is {open ? "open" : "closed"}
						</p>
					</div>
					<Dialog open={open} onOpenChange={setOpen}>
						<DialogContent className="dialog-content">
							<DialogHeader>
								<DialogTitle className="dialog-title">
									Controlled Dialog
								</DialogTitle>
								<DialogDescription className="dialog-description">
									This dialog is controlled programmatically.
								</DialogDescription>
							</DialogHeader>
							<p className="text-sm">
								You can open and close this dialog using external state.
							</p>
							<DialogFooter className="dialog-footer">
								<Button variant="outline" onClick={() => setOpen(false)}>
									Cancel
								</Button>
								<Button onClick={() => setOpen(false)}>Continue</Button>
							</DialogFooter>
						</DialogContent>
					</Dialog>
				</div>
			</div>
		);
	},
};
