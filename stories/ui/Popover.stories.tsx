import type { Meta, StoryObj } from "@storybook/react";
import { Settings2 } from "lucide-react";
import type React from "react";
import { useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import { Popover, PopoverContent, PopoverTrigger } from "./Popover";
import "./Popover.css";

const meta = {
	title: "UI/Popover",
	component: Popover,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
	args: {
		children: null,
	},
	render: () => (
		<div className="popover-demo">
			<Popover>
				<PopoverTrigger asChild>
					<Button variant="outline">Open Popover</Button>
				</PopoverTrigger>
				<PopoverContent className="popover-content">
					<div className="popover-title">Popover Title</div>
					<div className="popover-description">
						This is a basic popover with simple content.
					</div>
					<div className="flex justify-end mt-4">
						<Button size="sm">Action</Button>
					</div>
				</PopoverContent>
			</Popover>
		</div>
	),
};

export const WithForm: Story = {
	args: {
		children: null,
	},
	render: () => (
		<div className="popover-demo">
			<Popover>
				<PopoverTrigger asChild>
					<Button variant="outline">Update Settings</Button>
				</PopoverTrigger>
				<PopoverContent className="popover-content">
					<div className="popover-title">Edit Profile</div>
					<div className="popover-description">
						Make changes to your profile settings here.
					</div>
					<form className="popover-form">
						<div className="popover-form-field">
							<label className="popover-label" htmlFor="name">
								Display Name
							</label>
							<Input id="name" defaultValue="John Smith" className="h-8" />
						</div>
						<div className="popover-form-field">
							<label className="popover-label" htmlFor="username">
								Username
							</label>
							<Input id="username" defaultValue="johnsmith" className="h-8" />
						</div>
						<div className="flex justify-end gap-2">
							<Button size="sm">Save Changes</Button>
						</div>
					</form>
				</PopoverContent>
			</Popover>
		</div>
	),
};

export const IconTrigger: Story = {
	args: {
		children: null,
	},
	render: () => (
		<div className="popover-demo">
			<Popover>
				<PopoverTrigger asChild>
					<Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
						<Settings2 className="h-5 w-5" />
					</Button>
				</PopoverTrigger>
				<PopoverContent className="popover-content">
					<div className="popover-title">Display Settings</div>
					<div className="popover-description">
						Configure your display preferences.
					</div>
					<div className="popover-section">
						<div className="popover-label">Theme</div>
						<div className="flex gap-2 mt-2">
							<Button size="sm" variant="outline" className="flex-1">
								Light
							</Button>
							<Button size="sm" variant="outline" className="flex-1">
								Dark
							</Button>
							<Button size="sm" variant="outline" className="flex-1">
								System
							</Button>
						</div>
					</div>
				</PopoverContent>
			</Popover>
		</div>
	),
};

export const Controlled: Story = {
	args: {
		children: null,
	},
	render: () => {
		const [open, setOpen] = useState(false);
		const [searchTerm, setSearchTerm] = useState("");

		const handleSearch = (e: React.FormEvent) => {
			e.preventDefault();
			console.log("Searching for:", searchTerm);
			setOpen(false);
		};

		return (
			<div className="popover-demo">
				<div className="space-y-4">
					<div>
						<Button onClick={() => setOpen((o) => !o)} variant="outline">
							{open ? "Close" : "Open"} Search
						</Button>
					</div>
					<Popover open={open} onOpenChange={setOpen}>
						<PopoverTrigger asChild>
							<Button variant="outline">Search</Button>
						</PopoverTrigger>
						<PopoverContent className="popover-content">
							<div className="popover-title">Quick Search</div>
							<form onSubmit={handleSearch} className="mt-2">
								<div className="popover-form-field">
									<Input
										placeholder="Search..."
										value={searchTerm}
										onChange={(e) => setSearchTerm(e.target.value)}
										className="h-8"
									/>
								</div>
								<div className="flex justify-end mt-2">
									<Button size="sm">Search</Button>
								</div>
							</form>
						</PopoverContent>
					</Popover>
				</div>
			</div>
		);
	},
};
