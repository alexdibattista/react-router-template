import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "../../app/components/ui/button";
import { Input } from "../../app/components/ui/input";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
} from "./Sheet";

const meta = {
	title: "UI/Sheet",
	component: Sheet,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof Sheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Right: Story = {
	args: {
		trigger: <Button variant="outline">Open Right Sheet</Button>,
	},
	render: (args) => {
		const [open, setOpen] = useState(false);

		return (
			<Sheet open={open} onOpenChange={setOpen} trigger={args.trigger}>
				<SheetContent side="right">
					<SheetHeader>
						<SheetTitle>Edit Profile</SheetTitle>
						<SheetDescription>
							Make changes to your profile here. Click save when you're done.
						</SheetDescription>
					</SheetHeader>
					<div className="grid gap-4 py-4">
						<div className="grid grid-cols-4 items-center gap-4">
							<label htmlFor="name" className="text-right text-sm font-medium">
								Name
							</label>
							<Input id="name" value="John Doe" className="col-span-3" />
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							<label
								htmlFor="username"
								className="text-right text-sm font-medium"
							>
								Username
							</label>
							<Input id="username" value="@johndoe" className="col-span-3" />
						</div>
					</div>
					<SheetFooter>
						<SheetClose asChild>
							<Button type="submit">Save changes</Button>
						</SheetClose>
					</SheetFooter>
				</SheetContent>
			</Sheet>
		);
	},
};

export const Left: Story = {
	args: {
		trigger: <Button variant="outline">Open Left Sheet</Button>,
	},
	render: (args) => {
		const [open, setOpen] = useState(false);

		return (
			<Sheet open={open} onOpenChange={setOpen} trigger={args.trigger}>
				<SheetContent side="left">
					<SheetHeader>
						<SheetTitle>Navigation</SheetTitle>
						<SheetDescription>
							Browse through the available pages.
						</SheetDescription>
					</SheetHeader>
					<div className="mt-4 space-y-2">
						<Button variant="ghost" className="w-full justify-start">
							Dashboard
						</Button>
						<Button variant="ghost" className="w-full justify-start">
							Projects
						</Button>
						<Button variant="ghost" className="w-full justify-start">
							Team
						</Button>
						<Button variant="ghost" className="w-full justify-start">
							Reports
						</Button>
						<Button variant="ghost" className="w-full justify-start">
							Settings
						</Button>
					</div>
				</SheetContent>
			</Sheet>
		);
	},
};

export const Top: Story = {
	args: {
		trigger: <Button variant="outline">Open Top Sheet</Button>,
	},
	render: (args) => {
		const [open, setOpen] = useState(false);

		return (
			<Sheet open={open} onOpenChange={setOpen} trigger={args.trigger}>
				<SheetContent side="top">
					<SheetHeader>
						<SheetTitle>Notifications</SheetTitle>
						<SheetDescription>
							You have 3 unread notifications.
						</SheetDescription>
					</SheetHeader>
					<div className="mt-4 space-y-2">
						<div className="rounded-md bg-muted p-3">
							<h4 className="font-medium">New Message</h4>
							<p className="text-sm text-muted-foreground">
								You have a new message from John Doe.
							</p>
						</div>
						<div className="rounded-md bg-muted p-3">
							<h4 className="font-medium">Project Update</h4>
							<p className="text-sm text-muted-foreground">
								The project "Dashboard UI" has been updated.
							</p>
						</div>
						<div className="rounded-md bg-muted p-3">
							<h4 className="font-medium">Task Completed</h4>
							<p className="text-sm text-muted-foreground">
								You have completed the task "Design Login Page".
							</p>
						</div>
					</div>
				</SheetContent>
			</Sheet>
		);
	},
};

export const Bottom: Story = {
	args: {
		trigger: <Button variant="outline">Open Bottom Sheet</Button>,
	},
	render: (args) => {
		const [open, setOpen] = useState(false);

		return (
			<Sheet open={open} onOpenChange={setOpen} trigger={args.trigger}>
				<SheetContent side="bottom">
					<SheetHeader>
						<SheetTitle>Music Player</SheetTitle>
						<SheetDescription>
							Currently playing from your playlist.
						</SheetDescription>
					</SheetHeader>
					<div className="flex items-center justify-between py-4">
						<div>
							<h4 className="font-medium">Song Title</h4>
							<p className="text-sm text-muted-foreground">Artist Name</p>
						</div>
						<div className="flex items-center gap-2">
							<Button variant="outline" size="icon" className="h-8 w-8">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="h-4 w-4"
									aria-label="Previous"
								>
									<polygon points="19 20 9 12 19 4 19 20" />
									<line x1="5" y1="19" x2="5" y2="5" />
								</svg>
							</Button>
							<Button variant="outline" size="icon" className="h-8 w-8">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="h-4 w-4"
									aria-label="Next"
								>
									<polygon points="5 4 15 12 5 20 5 4" />
									<line x1="19" y1="5" x2="19" y2="19" />
								</svg>
							</Button>
							<Button variant="outline" size="icon" className="h-8 w-8">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="h-4 w-4"
									aria-label="Play"
								>
									<polygon points="5 3 19 12 5 21 5 3" />
								</svg>
							</Button>
						</div>
					</div>
				</SheetContent>
			</Sheet>
		);
	},
};
