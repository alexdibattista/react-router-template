import type { Meta, StoryObj } from "@storybook/react";
import { Plus, Settings, X } from "lucide-react";
import React, { useState } from "react";
import { Button } from "./Button";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "./Drawer";
import { Input } from "./Input";
import "./Drawer.css";

const meta = {
	title: "UI/Drawer",
	component: Drawer,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<div className="drawer-demo">
			<Drawer>
				<DrawerTrigger asChild>
					<Button variant="outline">Open Drawer</Button>
				</DrawerTrigger>
				<DrawerContent>
					<DrawerHeader>
						<DrawerTitle>Basic Drawer</DrawerTitle>
						<DrawerDescription>
							This is a basic drawer example with minimal content.
						</DrawerDescription>
					</DrawerHeader>
					<div className="drawer-body">
						<p>
							Drawers are displayed by clicking a trigger element and can be
							closed by clicking outside or the close button.
						</p>
					</div>
					<DrawerFooter>
						<DrawerClose asChild>
							<Button variant="outline">Cancel</Button>
						</DrawerClose>
						<Button>Save</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</div>
	),
};

export const WithForm: Story = {
	render: () => (
		<div className="drawer-demo">
			<Drawer>
				<DrawerTrigger asChild>
					<Button>Edit Profile</Button>
				</DrawerTrigger>
				<DrawerContent>
					<DrawerHeader>
						<DrawerTitle>Edit Profile</DrawerTitle>
						<DrawerDescription>
							Make changes to your profile information.
						</DrawerDescription>
					</DrawerHeader>
					<div className="drawer-body">
						<form className="drawer-form">
							<div className="drawer-form-field">
								<label className="drawer-form-label" htmlFor="name">
									Full Name
								</label>
								<Input id="name" defaultValue="John Smith" />
							</div>
							<div className="drawer-form-field">
								<label className="drawer-form-label" htmlFor="email">
									Email
								</label>
								<Input
									id="email"
									type="email"
									defaultValue="john@example.com"
								/>
							</div>
							<div className="drawer-form-field">
								<label className="drawer-form-label" htmlFor="bio">
									Bio
								</label>
								<Input
									id="bio"
									defaultValue="I'm a software developer based in San Francisco."
								/>
							</div>
						</form>
					</div>
					<DrawerFooter>
						<DrawerClose asChild>
							<Button variant="outline">Cancel</Button>
						</DrawerClose>
						<Button>Save Changes</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</div>
	),
};

export const Custom: Story = {
	render: () => (
		<div className="drawer-demo">
			<Drawer>
				<DrawerTrigger asChild>
					<Button variant="outline" className="gap-2">
						<Settings className="h-4 w-4" />
						<span>Settings</span>
					</Button>
				</DrawerTrigger>
				<DrawerContent>
					<div className="flex items-center justify-between p-4 border-b">
						<h2 className="text-lg font-semibold">Settings</h2>
						<DrawerClose asChild>
							<Button variant="ghost" size="icon" className="h-8 w-8">
								<X className="h-4 w-4" />
							</Button>
						</DrawerClose>
					</div>
					<div className="p-4">
						<div className="grid gap-6">
							<div className="space-y-2">
								<h3 className="text-base font-medium">Appearance</h3>
								<div className="flex gap-2">
									<Button variant="outline" size="sm" className="flex-1">
										Light
									</Button>
									<Button variant="outline" size="sm" className="flex-1">
										Dark
									</Button>
									<Button variant="outline" size="sm" className="flex-1">
										System
									</Button>
								</div>
							</div>
							<div className="space-y-2">
								<h3 className="text-base font-medium">Notifications</h3>
								<div className="flex gap-2">
									<Button variant="outline" size="sm" className="flex-1">
										All
									</Button>
									<Button variant="outline" size="sm" className="flex-1">
										Important
									</Button>
									<Button variant="outline" size="sm" className="flex-1">
										None
									</Button>
								</div>
							</div>
						</div>
					</div>
					<div className="p-4 border-t">
						<Button className="w-full">Apply Settings</Button>
					</div>
				</DrawerContent>
			</Drawer>
		</div>
	),
};

export const Controlled: Story = {
	render: () => {
		const [open, setOpen] = useState(false);

		return (
			<div className="drawer-demo">
				<div className="space-y-4">
					<Button onClick={() => setOpen(true)}>Open Controlled Drawer</Button>
					<div>
						<p className="text-sm text-muted-foreground">
							Drawer is {open ? "open" : "closed"}
						</p>
					</div>
					<Drawer open={open} onOpenChange={setOpen}>
						<DrawerContent>
							<DrawerHeader>
								<DrawerTitle>Controlled Drawer</DrawerTitle>
								<DrawerDescription>
									This drawer is controlled programmatically.
								</DrawerDescription>
							</DrawerHeader>
							<div className="drawer-body">
								<p>
									You can control the open state of this drawer using external
									state. This is useful for creating more complex interactions.
								</p>
							</div>
							<DrawerFooter>
								<Button variant="outline" onClick={() => setOpen(false)}>
									Cancel
								</Button>
								<Button onClick={() => setOpen(false)}>Continue</Button>
							</DrawerFooter>
						</DrawerContent>
					</Drawer>
				</div>
			</div>
		);
	},
};

export const GridContent: Story = {
	render: () => (
		<div className="drawer-demo">
			<Drawer>
				<DrawerTrigger asChild>
					<Button>
						<Plus className="mr-2 h-4 w-4" />
						Add Items
					</Button>
				</DrawerTrigger>
				<DrawerContent>
					<DrawerHeader>
						<DrawerTitle>Available Items</DrawerTitle>
						<DrawerDescription>
							Click on an item to add it to your collection.
						</DrawerDescription>
					</DrawerHeader>
					<div className="drawer-body">
						<div className="drawer-grid">
							{Array.from({ length: 12 }).map((_, i) => (
								<div
									key={`item-${i}`}
									className="border rounded-md p-3 flex flex-col items-center text-center gap-2"
								>
									<div className="h-12 w-12 rounded-md bg-muted flex items-center justify-center">
										{i + 1}
									</div>
									<div className="text-sm font-medium">Item {i + 1}</div>
									<Button size="sm" variant="ghost" className="w-full">
										Select
									</Button>
								</div>
							))}
						</div>
					</div>
					<DrawerFooter>
						<DrawerClose asChild>
							<Button variant="outline">Cancel</Button>
						</DrawerClose>
						<Button>Add Selected</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</div>
	),
};
