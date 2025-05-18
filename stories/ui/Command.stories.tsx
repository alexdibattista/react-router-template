import type { Meta, StoryObj } from "@storybook/react";
import {
	Calendar,
	CreditCard,
	Search,
	Settings,
	Smile,
	User,
} from "lucide-react";
import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import {
	Command,
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
	CommandShortcut,
} from "./Command";
import "./Command.css";

const meta = {
	title: "UI/Command",
	component: Command,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof Command>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
	args: {
		children: null,
	},
	render: () => (
		<div className="command-demo">
			<Command className="command">
				<CommandInput placeholder="Type a command or search..." />
				<CommandList>
					<CommandEmpty>No results found.</CommandEmpty>
					<CommandGroup heading="Suggestions">
						<CommandItem>
							<Calendar className="mr-2 h-4 w-4" />
							<span>Calendar</span>
						</CommandItem>
						<CommandItem>
							<CreditCard className="mr-2 h-4 w-4" />
							<span>Billing</span>
							<CommandShortcut>⌘B</CommandShortcut>
						</CommandItem>
						<CommandItem>
							<Settings className="mr-2 h-4 w-4" />
							<span>Settings</span>
							<CommandShortcut>⌘S</CommandShortcut>
						</CommandItem>
					</CommandGroup>
					<CommandSeparator />
					<CommandGroup heading="Profile">
						<CommandItem>
							<User className="mr-2 h-4 w-4" />
							<span>My Account</span>
						</CommandItem>
						<CommandItem>
							<Smile className="mr-2 h-4 w-4" />
							<span>Appearance</span>
						</CommandItem>
					</CommandGroup>
				</CommandList>
			</Command>
		</div>
	),
};

export const WithSearch: Story = {
	args: {
		children: null,
	},
	render: () => {
		const [searchResults, setSearchResults] = useState<string[]>([
			"Calendar",
			"Billing",
			"Settings",
			"My Account",
			"Appearance",
		]);
		const [search, setSearch] = useState("");

		useEffect(() => {
			if (search) {
				const filtered = [
					"Calendar",
					"Billing",
					"Settings",
					"My Account",
					"Appearance",
				].filter((item) => item.toLowerCase().includes(search.toLowerCase()));
				setSearchResults(filtered);
			} else {
				setSearchResults([
					"Calendar",
					"Billing",
					"Settings",
					"My Account",
					"Appearance",
				]);
			}
		}, [search]);

		return (
			<div className="command-demo">
				<Command className="command">
					<CommandInput
						placeholder="Type to search..."
						value={search}
						onValueChange={setSearch}
					/>
					<CommandList>
						{searchResults.length === 0 && (
							<CommandEmpty>No results found.</CommandEmpty>
						)}
						<CommandGroup heading="Results">
							{searchResults.map((result, index) => (
								<CommandItem key={`result-${index}`}>
									<span>{result}</span>
								</CommandItem>
							))}
						</CommandGroup>
					</CommandList>
				</Command>
			</div>
		);
	},
};

export const CommandDialog_: Story = {
	args: {
		children: null,
	},
	render: () => {
		const [open, setOpen] = React.useState(false);

		// For Storybook, close the dialog when clicking outside
		React.useEffect(() => {
			if (open) {
				const handleClick = () => setOpen(false);
				// Add a delay to avoid immediate closing
				const timer = setTimeout(() => {
					document.addEventListener("click", handleClick);
				}, 100);

				return () => {
					clearTimeout(timer);
					document.removeEventListener("click", handleClick);
				};
			}
		}, [open]);

		return (
			<div className="command-demo">
				<Button onClick={() => setOpen(true)}>
					<Search className="mr-2 h-4 w-4" />
					Open Command Menu
				</Button>
				<CommandDialog open={open} onOpenChange={setOpen}>
					<CommandInput placeholder="Type a command or search..." />
					<CommandList>
						<CommandEmpty>No results found.</CommandEmpty>
						<CommandGroup heading="Applications">
							<CommandItem>
								<Calendar className="mr-2 h-4 w-4" />
								<span>Calendar</span>
							</CommandItem>
							<CommandItem>
								<CreditCard className="mr-2 h-4 w-4" />
								<span>Billing</span>
								<CommandShortcut>⌘B</CommandShortcut>
							</CommandItem>
							<CommandItem>
								<Settings className="mr-2 h-4 w-4" />
								<span>Settings</span>
								<CommandShortcut>⌘S</CommandShortcut>
							</CommandItem>
						</CommandGroup>
					</CommandList>
				</CommandDialog>
			</div>
		);
	},
};
