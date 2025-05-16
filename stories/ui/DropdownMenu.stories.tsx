import type { Meta, StoryObj } from "@storybook/react";
import {
	CreditCard,
	Laptop,
	LogOut,
	Moon,
	Settings,
	Sun,
	User,
} from "lucide-react";
import { useState } from "react";
import { Button } from "../../app/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
} from "./DropdownMenu";

const meta = {
	title: "UI/DropdownMenu",
	component: DropdownMenu,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		trigger: <Button variant="outline">Open Menu</Button>,
		children: (
			<>
				<DropdownMenuLabel>My Account</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem>
					<User className="mr-2 h-4 w-4" />
					<span>Profile</span>
					<DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<CreditCard className="mr-2 h-4 w-4" />
					<span>Billing</span>
					<DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<Settings className="mr-2 h-4 w-4" />
					<span>Settings</span>
					<DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem>
					<LogOut className="mr-2 h-4 w-4" />
					<span>Log out</span>
					<DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
				</DropdownMenuItem>
			</>
		),
	},
};

export const WithCheckboxItems: Story = {
	args: {
		trigger: <Button variant="outline">Preferences</Button>,
	},
	render: (args) => {
		const [showStatusBar, setShowStatusBar] = useState(true);
		const [showActivityBar, setShowActivityBar] = useState(false);
		const [showPanel, setShowPanel] = useState(false);

		return (
			<DropdownMenu trigger={args.trigger}>
				<DropdownMenuLabel>Appearance</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuCheckboxItem
					checked={showStatusBar}
					onCheckedChange={setShowStatusBar}
				>
					Status Bar
				</DropdownMenuCheckboxItem>
				<DropdownMenuCheckboxItem
					checked={showActivityBar}
					onCheckedChange={setShowActivityBar}
				>
					Activity Bar
				</DropdownMenuCheckboxItem>
				<DropdownMenuCheckboxItem
					checked={showPanel}
					onCheckedChange={setShowPanel}
				>
					Panel
				</DropdownMenuCheckboxItem>
			</DropdownMenu>
		);
	},
};

export const WithRadioItems: Story = {
	args: {
		trigger: <Button variant="outline">Theme</Button>,
	},
	render: (args) => {
		const [appearance, setAppearance] = useState("system");

		return (
			<DropdownMenu trigger={args.trigger}>
				<DropdownMenuLabel>Appearance</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuRadioGroup
					value={appearance}
					onValueChange={setAppearance}
				>
					<DropdownMenuRadioItem value="light">
						<Sun className="mr-2 h-4 w-4" />
						<span>Light</span>
					</DropdownMenuRadioItem>
					<DropdownMenuRadioItem value="dark">
						<Moon className="mr-2 h-4 w-4" />
						<span>Dark</span>
					</DropdownMenuRadioItem>
					<DropdownMenuRadioItem value="system">
						<Laptop className="mr-2 h-4 w-4" />
						<span>System</span>
					</DropdownMenuRadioItem>
				</DropdownMenuRadioGroup>
			</DropdownMenu>
		);
	},
};

export const WithSubmenu: Story = {
	args: {
		trigger: <Button variant="outline">More Options</Button>,
		children: (
			<>
				<DropdownMenuItem>Back</DropdownMenuItem>
				<DropdownMenuItem>Forward</DropdownMenuItem>
				<DropdownMenuItem>Reload</DropdownMenuItem>
				<DropdownMenuSub>
					<DropdownMenuSubTrigger>
						<Settings className="mr-2 h-4 w-4" />
						<span>Settings</span>
					</DropdownMenuSubTrigger>
					<DropdownMenuSubContent>
						<DropdownMenuItem>General</DropdownMenuItem>
						<DropdownMenuItem>Appearance</DropdownMenuItem>
						<DropdownMenuItem>Privacy</DropdownMenuItem>
						<DropdownMenuItem>Notifications</DropdownMenuItem>
					</DropdownMenuSubContent>
				</DropdownMenuSub>
				<DropdownMenuSeparator />
				<DropdownMenuItem>Help</DropdownMenuItem>
				<DropdownMenuItem>About</DropdownMenuItem>
			</>
		),
	},
};
