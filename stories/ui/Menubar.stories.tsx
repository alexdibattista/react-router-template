import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { Button } from "../../app/components/ui/button";
import {
	Menubar,
	MenubarCheckboxItem,
	MenubarContent,
	MenubarGroup,
	MenubarItem,
	MenubarLabel,
	MenubarMenu,
	MenubarRadioGroup,
	MenubarRadioItem,
	MenubarSeparator,
	MenubarShortcut,
	MenubarSub,
	MenubarSubContent,
	MenubarSubTrigger,
	MenubarTrigger,
} from "./Menubar";

import "./Menubar.css";

const meta = {
	title: "UI/Menubar",
	component: Menubar,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		className: { control: "text" },
	},
} satisfies Meta<typeof Menubar>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default Menubar
export const Default: Story = {
	args: {},
	render: (args) => (
		<div className="menubar-story-container">
			<div className="menubar-story-section">
				<h3>Default Menubar</h3>
				<div className="menubar-story-description">
					A standard menubar with common menu items.
				</div>

				<Menubar {...args}>
					<MenubarMenu>
						<MenubarTrigger>File</MenubarTrigger>
						<MenubarContent>
							<MenubarItem>
								New Tab <MenubarShortcut>⌘T</MenubarShortcut>
							</MenubarItem>
							<MenubarItem>
								New Window <MenubarShortcut>⌘N</MenubarShortcut>
							</MenubarItem>
							<MenubarItem disabled>New Incognito Window</MenubarItem>
							<MenubarSeparator />
							<MenubarItem>
								Print... <MenubarShortcut>⌘P</MenubarShortcut>
							</MenubarItem>
						</MenubarContent>
					</MenubarMenu>
					<MenubarMenu>
						<MenubarTrigger>Edit</MenubarTrigger>
						<MenubarContent>
							<MenubarItem>
								Undo <MenubarShortcut>⌘Z</MenubarShortcut>
							</MenubarItem>
							<MenubarItem>
								Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
							</MenubarItem>
							<MenubarSeparator />
							<MenubarItem>
								Cut <MenubarShortcut>⌘X</MenubarShortcut>
							</MenubarItem>
							<MenubarItem>
								Copy <MenubarShortcut>⌘C</MenubarShortcut>
							</MenubarItem>
							<MenubarItem>
								Paste <MenubarShortcut>⌘V</MenubarShortcut>
							</MenubarItem>
							<MenubarSeparator />
							<MenubarItem>
								Select All <MenubarShortcut>⌘A</MenubarShortcut>
							</MenubarItem>
						</MenubarContent>
					</MenubarMenu>
					<MenubarMenu>
						<MenubarTrigger>View</MenubarTrigger>
						<MenubarContent>
							<MenubarItem>
								Zoom In <MenubarShortcut>⌘+</MenubarShortcut>
							</MenubarItem>
							<MenubarItem>
								Zoom Out <MenubarShortcut>⌘-</MenubarShortcut>
							</MenubarItem>
							<MenubarSeparator />
							<MenubarItem>
								Reset Zoom <MenubarShortcut>⌘0</MenubarShortcut>
							</MenubarItem>
						</MenubarContent>
					</MenubarMenu>
					<MenubarMenu>
						<MenubarTrigger>Help</MenubarTrigger>
						<MenubarContent>
							<MenubarItem>Documentation</MenubarItem>
							<MenubarItem>Keyboard Shortcuts</MenubarItem>
							<MenubarItem>About</MenubarItem>
						</MenubarContent>
					</MenubarMenu>
				</Menubar>
			</div>
		</div>
	),
};

// Application with Menubar
export const ApplicationMenubar: Story = {
	args: {},
	render: (args) => {
		const [status, setStatus] = useState<string>("Idle");

		const handleClick = (action: string) => {
			setStatus(`Action triggered: ${action}`);
		};

		return (
			<div className="menubar-story-container">
				<div className="menubar-story-section">
					<h3>Application Menubar</h3>
					<div className="menubar-story-description">
						A menubar for a document-based application.
					</div>

					<div className="menubar-story-card">
						<Menubar {...args} className="menubar-story-toolbar">
							<MenubarMenu>
								<MenubarTrigger>File</MenubarTrigger>
								<MenubarContent>
									<MenubarItem onClick={() => handleClick("New Document")}>
										New Document <MenubarShortcut>⌘N</MenubarShortcut>
									</MenubarItem>
									<MenubarItem onClick={() => handleClick("Open")}>
										Open... <MenubarShortcut>⌘O</MenubarShortcut>
									</MenubarItem>
									<MenubarSeparator />
									<MenubarItem onClick={() => handleClick("Save")}>
										Save <MenubarShortcut>⌘S</MenubarShortcut>
									</MenubarItem>
									<MenubarItem onClick={() => handleClick("Save As")}>
										Save As... <MenubarShortcut>⇧⌘S</MenubarShortcut>
									</MenubarItem>
									<MenubarSeparator />
									<MenubarItem onClick={() => handleClick("Export")}>
										Export...
									</MenubarItem>
									<MenubarSeparator />
									<MenubarItem onClick={() => handleClick("Exit")}>
										Exit <MenubarShortcut>⌘Q</MenubarShortcut>
									</MenubarItem>
								</MenubarContent>
							</MenubarMenu>
							<MenubarMenu>
								<MenubarTrigger>Edit</MenubarTrigger>
								<MenubarContent>
									<MenubarItem onClick={() => handleClick("Undo")}>
										Undo <MenubarShortcut>⌘Z</MenubarShortcut>
									</MenubarItem>
									<MenubarItem onClick={() => handleClick("Redo")}>
										Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
									</MenubarItem>
									<MenubarSeparator />
									<MenubarItem onClick={() => handleClick("Cut")}>
										Cut <MenubarShortcut>⌘X</MenubarShortcut>
									</MenubarItem>
									<MenubarItem onClick={() => handleClick("Copy")}>
										Copy <MenubarShortcut>⌘C</MenubarShortcut>
									</MenubarItem>
									<MenubarItem onClick={() => handleClick("Paste")}>
										Paste <MenubarShortcut>⌘V</MenubarShortcut>
									</MenubarItem>
									<MenubarSeparator />
									<MenubarItem onClick={() => handleClick("Find")}>
										Find... <MenubarShortcut>⌘F</MenubarShortcut>
									</MenubarItem>
									<MenubarItem onClick={() => handleClick("Replace")}>
										Replace... <MenubarShortcut>⇧⌘F</MenubarShortcut>
									</MenubarItem>
								</MenubarContent>
							</MenubarMenu>
							<MenubarMenu>
								<MenubarTrigger>View</MenubarTrigger>
								<MenubarContent>
									<MenubarCheckboxItem
										onClick={() => handleClick("Toggle Sidebar")}
									>
										Show Sidebar
									</MenubarCheckboxItem>
									<MenubarCheckboxItem
										onClick={() => handleClick("Toggle Toolbar")}
									>
										Show Toolbar
									</MenubarCheckboxItem>
									<MenubarSeparator />
									<MenubarItem onClick={() => handleClick("Zoom In")}>
										Zoom In <MenubarShortcut>⌘+</MenubarShortcut>
									</MenubarItem>
									<MenubarItem onClick={() => handleClick("Zoom Out")}>
										Zoom Out <MenubarShortcut>⌘-</MenubarShortcut>
									</MenubarItem>
									<MenubarItem onClick={() => handleClick("Reset Zoom")}>
										Reset Zoom <MenubarShortcut>⌘0</MenubarShortcut>
									</MenubarItem>
									<MenubarSeparator />
									<MenubarSub>
										<MenubarSubTrigger>Layout</MenubarSubTrigger>
										<MenubarSubContent>
											<MenubarRadioGroup value="default">
												<MenubarRadioItem
													value="default"
													onClick={() => handleClick("Default Layout")}
												>
													Default
												</MenubarRadioItem>
												<MenubarRadioItem
													value="compact"
													onClick={() => handleClick("Compact Layout")}
												>
													Compact
												</MenubarRadioItem>
												<MenubarRadioItem
													value="expanded"
													onClick={() => handleClick("Expanded Layout")}
												>
													Expanded
												</MenubarRadioItem>
											</MenubarRadioGroup>
										</MenubarSubContent>
									</MenubarSub>
								</MenubarContent>
							</MenubarMenu>
							<MenubarMenu>
								<MenubarTrigger>Tools</MenubarTrigger>
								<MenubarContent>
									<MenubarItem onClick={() => handleClick("Spell Check")}>
										Spell Check
									</MenubarItem>
									<MenubarSeparator />
									<MenubarItem onClick={() => handleClick("Preferences")}>
										Preferences...
									</MenubarItem>
								</MenubarContent>
							</MenubarMenu>
							<MenubarMenu>
								<MenubarTrigger>Help</MenubarTrigger>
								<MenubarContent>
									<MenubarItem onClick={() => handleClick("Documentation")}>
										Documentation
									</MenubarItem>
									<MenubarItem onClick={() => handleClick("About")}>
										About
									</MenubarItem>
								</MenubarContent>
							</MenubarMenu>
						</Menubar>
						<div className="p-4">
							<h4 className="text-md font-medium mb-2">Document Editor</h4>
							<div className="h-[200px] bg-muted rounded-md flex items-center justify-center text-sm text-muted-foreground">
								Document content would go here
							</div>
						</div>
						<div className="menubar-story-context">Status: {status}</div>
					</div>
				</div>
			</div>
		);
	},
};

// Menubar with Checkbox and Radio Items
export const WithInputControls: Story = {
	args: {},
	render: (args) => {
		const [mode, setMode] = useState<string>("edit");
		const [settings, setSettings] = useState({
			autosave: true,
			developer: false,
			experimental: false,
		});

		const toggleSetting = (setting: keyof typeof settings) => {
			setSettings((prev) => ({
				...prev,
				[setting]: !prev[setting],
			}));
		};

		return (
			<div className="menubar-story-container">
				<div className="menubar-story-section">
					<h3>Menubar with Input Controls</h3>
					<div className="menubar-story-description">
						A menubar demonstrating checkbox and radio items for settings.
					</div>

					<Menubar {...args}>
						<MenubarMenu>
							<MenubarTrigger>Mode</MenubarTrigger>
							<MenubarContent>
								<MenubarRadioGroup value={mode}>
									<MenubarRadioItem
										value="edit"
										onClick={() => setMode("edit")}
									>
										Edit
									</MenubarRadioItem>
									<MenubarRadioItem
										value="view"
										onClick={() => setMode("view")}
									>
										View Only
									</MenubarRadioItem>
									<MenubarRadioItem
										value="present"
										onClick={() => setMode("present")}
									>
										Presentation
									</MenubarRadioItem>
								</MenubarRadioGroup>
							</MenubarContent>
						</MenubarMenu>
						<MenubarMenu>
							<MenubarTrigger>Settings</MenubarTrigger>
							<MenubarContent>
								<MenubarCheckboxItem
									checked={settings.autosave}
									onClick={() => toggleSetting("autosave")}
								>
									Autosave
								</MenubarCheckboxItem>
								<MenubarCheckboxItem
									checked={settings.developer}
									onClick={() => toggleSetting("developer")}
								>
									Developer Mode
								</MenubarCheckboxItem>
								<MenubarSeparator />
								<MenubarGroup>
									<MenubarLabel>Advanced</MenubarLabel>
									<MenubarCheckboxItem
										checked={settings.experimental}
										onClick={() => toggleSetting("experimental")}
									>
										Experimental Features
									</MenubarCheckboxItem>
								</MenubarGroup>
							</MenubarContent>
						</MenubarMenu>
					</Menubar>

					<div className="menubar-story-info mt-4">
						<div className="font-medium mb-2">Current State:</div>
						<div className="menubar-story-controls">
							<div className="menubar-story-control">
								<span>Mode:</span> <strong>{mode}</strong>
							</div>
							{Object.entries(settings).map(([key, value]) => (
								<div key={key} className="menubar-story-control">
									<span>{key}:</span> <strong>{value ? "On" : "Off"}</strong>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		);
	},
};

// Styled Menubar Variants
export const StyledVariants: Story = {
	args: {},
	render: (args) => {
		const [activeTab, setActiveTab] = useState<string>("default");

		return (
			<div className="menubar-story-container">
				<div className="menubar-story-section">
					<h3>Styled Menubar Variants</h3>
					<div className="menubar-story-description">
						Different visual styles for menubars.
					</div>

					<div className="menubar-story-tabs">
						<div
							className="menubar-story-tab"
							data-active={activeTab === "default"}
							onClick={() => setActiveTab("default")}
							onKeyDown={(e) => {
								if (e.key === "Enter" || e.key === " ") {
									setActiveTab("default");
								}
							}}
							tabIndex={0}
							role="tab"
							aria-selected={activeTab === "default"}
						>
							Default
						</div>
						<div
							className="menubar-story-tab"
							data-active={activeTab === "primary"}
							onClick={() => setActiveTab("primary")}
							onKeyDown={(e) => {
								if (e.key === "Enter" || e.key === " ") {
									setActiveTab("primary");
								}
							}}
							tabIndex={0}
							role="tab"
							aria-selected={activeTab === "primary"}
						>
							Primary
						</div>
						<div
							className="menubar-story-tab"
							data-active={activeTab === "compact"}
							onClick={() => setActiveTab("compact")}
							onKeyDown={(e) => {
								if (e.key === "Enter" || e.key === " ") {
									setActiveTab("compact");
								}
							}}
							tabIndex={0}
							role="tab"
							aria-selected={activeTab === "compact"}
						>
							Compact
						</div>
						<div
							className="menubar-story-tab"
							data-active={activeTab === "rounded"}
							onClick={() => setActiveTab("rounded")}
							onKeyDown={(e) => {
								if (e.key === "Enter" || e.key === " ") {
									setActiveTab("rounded");
								}
							}}
							tabIndex={0}
							role="tab"
							aria-selected={activeTab === "rounded"}
						>
							Rounded
						</div>
					</div>

					{activeTab === "default" && (
						<Menubar {...args} className="mb-6">
							<MenubarMenu>
								<MenubarTrigger>Menu 1</MenubarTrigger>
								<MenubarContent>
									<MenubarItem>Item 1</MenubarItem>
									<MenubarItem>Item 2</MenubarItem>
									<MenubarItem>Item 3</MenubarItem>
								</MenubarContent>
							</MenubarMenu>
							<MenubarMenu>
								<MenubarTrigger>Menu 2</MenubarTrigger>
								<MenubarContent>
									<MenubarItem>Item 1</MenubarItem>
									<MenubarItem>Item 2</MenubarItem>
									<MenubarItem>Item 3</MenubarItem>
								</MenubarContent>
							</MenubarMenu>
							<MenubarMenu>
								<MenubarTrigger>Menu 3</MenubarTrigger>
								<MenubarContent>
									<MenubarItem>Item 1</MenubarItem>
									<MenubarItem>Item 2</MenubarItem>
									<MenubarItem>Item 3</MenubarItem>
								</MenubarContent>
							</MenubarMenu>
						</Menubar>
					)}

					{activeTab === "primary" && (
						<Menubar {...args} className="menubar-story-primary mb-6">
							<MenubarMenu>
								<MenubarTrigger className="menubar-trigger">
									Menu 1
								</MenubarTrigger>
								<MenubarContent>
									<MenubarItem>Item 1</MenubarItem>
									<MenubarItem>Item 2</MenubarItem>
									<MenubarItem>Item 3</MenubarItem>
								</MenubarContent>
							</MenubarMenu>
							<MenubarMenu>
								<MenubarTrigger className="menubar-trigger">
									Menu 2
								</MenubarTrigger>
								<MenubarContent>
									<MenubarItem>Item 1</MenubarItem>
									<MenubarItem>Item 2</MenubarItem>
									<MenubarItem>Item 3</MenubarItem>
								</MenubarContent>
							</MenubarMenu>
							<MenubarMenu>
								<MenubarTrigger className="menubar-trigger">
									Menu 3
								</MenubarTrigger>
								<MenubarContent>
									<MenubarItem>Item 1</MenubarItem>
									<MenubarItem>Item 2</MenubarItem>
									<MenubarItem>Item 3</MenubarItem>
								</MenubarContent>
							</MenubarMenu>
						</Menubar>
					)}

					{activeTab === "compact" && (
						<Menubar {...args} className="menubar-story-compact mb-6">
							<MenubarMenu>
								<MenubarTrigger>M1</MenubarTrigger>
								<MenubarContent>
									<MenubarItem>Item 1</MenubarItem>
									<MenubarItem>Item 2</MenubarItem>
									<MenubarItem>Item 3</MenubarItem>
								</MenubarContent>
							</MenubarMenu>
							<MenubarMenu>
								<MenubarTrigger>M2</MenubarTrigger>
								<MenubarContent>
									<MenubarItem>Item 1</MenubarItem>
									<MenubarItem>Item 2</MenubarItem>
									<MenubarItem>Item 3</MenubarItem>
								</MenubarContent>
							</MenubarMenu>
							<MenubarMenu>
								<MenubarTrigger>M3</MenubarTrigger>
								<MenubarContent>
									<MenubarItem>Item 1</MenubarItem>
									<MenubarItem>Item 2</MenubarItem>
									<MenubarItem>Item 3</MenubarItem>
								</MenubarContent>
							</MenubarMenu>
						</Menubar>
					)}

					{activeTab === "rounded" && (
						<Menubar {...args} className="menubar-story-rounded mb-6">
							<MenubarMenu>
								<MenubarTrigger>Menu 1</MenubarTrigger>
								<MenubarContent>
									<MenubarItem>Item 1</MenubarItem>
									<MenubarItem>Item 2</MenubarItem>
									<MenubarItem>Item 3</MenubarItem>
								</MenubarContent>
							</MenubarMenu>
							<MenubarMenu>
								<MenubarTrigger>Menu 2</MenubarTrigger>
								<MenubarContent>
									<MenubarItem>Item 1</MenubarItem>
									<MenubarItem>Item 2</MenubarItem>
									<MenubarItem>Item 3</MenubarItem>
								</MenubarContent>
							</MenubarMenu>
							<MenubarMenu>
								<MenubarTrigger>Menu 3</MenubarTrigger>
								<MenubarContent>
									<MenubarItem>Item 1</MenubarItem>
									<MenubarItem>Item 2</MenubarItem>
									<MenubarItem>Item 3</MenubarItem>
								</MenubarContent>
							</MenubarMenu>
						</Menubar>
					)}

					<div className="menubar-story-description">
						Select a variant from the tabs above to see different menubar
						styles.
					</div>
				</div>
			</div>
		);
	},
};

// Interactive Menubar with Notifications
export const InteractiveMenubar: Story = {
	args: {},
	render: (args) => {
		const [notificationCount, setNotificationCount] = useState<number>(3);
		const [activeView, setActiveView] = useState<string>("Dashboard");

		const handleClearNotifications = () => {
			setNotificationCount(0);
		};

		const handleAddNotification = () => {
			setNotificationCount((prev) => prev + 1);
		};

		const handleViewChange = (view: string) => {
			setActiveView(view);
		};

		return (
			<div className="menubar-story-container">
				<div className="menubar-story-section">
					<h3>Interactive Menubar with Notifications</h3>
					<div className="menubar-story-description">
						A menubar with notification indicators and interactive elements.
					</div>

					<div className="menubar-story-card">
						<Menubar {...args}>
							<MenubarMenu>
								<MenubarTrigger>App</MenubarTrigger>
								<MenubarContent>
									<MenubarItem onClick={() => handleViewChange("Dashboard")}>
										Dashboard
									</MenubarItem>
									<MenubarItem onClick={() => handleViewChange("Analytics")}>
										Analytics
									</MenubarItem>
									<MenubarItem onClick={() => handleViewChange("Settings")}>
										Settings
									</MenubarItem>
									<MenubarSeparator />
									<MenubarItem>Log Out</MenubarItem>
								</MenubarContent>
							</MenubarMenu>
							<MenubarMenu>
								<MenubarTrigger className="menubar-story-indicators">
									Notifications
									{notificationCount > 0 && (
										<span className="menubar-story-indicator" />
									)}
								</MenubarTrigger>
								<MenubarContent>
									{notificationCount > 0 ? (
										<>
											<MenubarLabel>
												You have {notificationCount} notifications
											</MenubarLabel>
											<MenubarSeparator />
											{Array.from({
												length: Math.min(notificationCount, 3),
											}).map((_, i) => (
												<MenubarItem key={i}>Notification #{i + 1}</MenubarItem>
											))}
											{notificationCount > 3 && (
												<MenubarItem>
													{notificationCount - 3} more notifications...
												</MenubarItem>
											)}
											<MenubarSeparator />
											<MenubarItem onClick={handleClearNotifications}>
												Clear all notifications
											</MenubarItem>
										</>
									) : (
										<MenubarItem disabled>No notifications</MenubarItem>
									)}
								</MenubarContent>
							</MenubarMenu>
							<MenubarMenu>
								<MenubarTrigger>Help</MenubarTrigger>
								<MenubarContent>
									<MenubarItem>Documentation</MenubarItem>
									<MenubarItem>Support</MenubarItem>
									<MenubarItem>About</MenubarItem>
								</MenubarContent>
							</MenubarMenu>
						</Menubar>

						<div className="p-4">
							<h4 className="text-md font-medium mb-4">
								Current View: {activeView}
							</h4>
							<div className="menubar-story-controls">
								<Button
									size="sm"
									variant="outline"
									onClick={handleAddNotification}
								>
									Add Notification
								</Button>
								<Button
									size="sm"
									variant="outline"
									disabled={notificationCount === 0}
									onClick={handleClearNotifications}
								>
									Clear Notifications
								</Button>
							</div>
							<div className="menubar-story-info mt-4">
								<p>
									Notification Count: <strong>{notificationCount}</strong>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	},
};

// Dark Theme Menubar
export const DarkThemeMenubar: Story = {
	args: {},
	render: (args) => (
		<div className="menubar-story-container menubar-story-dark">
			<div className="menubar-story-section">
				<h3>Dark Theme Menubar</h3>
				<div className="menubar-story-description">
					A menubar in dark theme for night mode applications.
				</div>

				<Menubar {...args} className="bg-zinc-800 border-zinc-700">
					<MenubarMenu>
						<MenubarTrigger className="text-zinc-200 hover:bg-zinc-700">
							File
						</MenubarTrigger>
						<MenubarContent className="bg-zinc-800 border-zinc-700 text-zinc-200">
							<MenubarItem className="hover:bg-zinc-700 focus:bg-zinc-700">
								New{" "}
								<MenubarShortcut className="text-zinc-400">⌘N</MenubarShortcut>
							</MenubarItem>
							<MenubarItem className="hover:bg-zinc-700 focus:bg-zinc-700">
								Open{" "}
								<MenubarShortcut className="text-zinc-400">⌘O</MenubarShortcut>
							</MenubarItem>
							<MenubarItem
								className="hover:bg-zinc-700 focus:bg-zinc-700"
								disabled
							>
								Save (Unavailable)
							</MenubarItem>
							<MenubarSeparator className="bg-zinc-700" />
							<MenubarItem className="hover:bg-zinc-700 focus:bg-zinc-700">
								Export{" "}
								<MenubarShortcut className="text-zinc-400">⌘E</MenubarShortcut>
							</MenubarItem>
						</MenubarContent>
					</MenubarMenu>
					<MenubarMenu>
						<MenubarTrigger className="text-zinc-200 hover:bg-zinc-700">
							Edit
						</MenubarTrigger>
						<MenubarContent className="bg-zinc-800 border-zinc-700 text-zinc-200">
							<MenubarItem className="hover:bg-zinc-700 focus:bg-zinc-700">
								Undo{" "}
								<MenubarShortcut className="text-zinc-400">⌘Z</MenubarShortcut>
							</MenubarItem>
							<MenubarItem className="hover:bg-zinc-700 focus:bg-zinc-700">
								Redo{" "}
								<MenubarShortcut className="text-zinc-400">⇧⌘Z</MenubarShortcut>
							</MenubarItem>
							<MenubarSeparator className="bg-zinc-700" />
							<MenubarSub>
								<MenubarSubTrigger className="hover:bg-zinc-700 focus:bg-zinc-700">
									Find
								</MenubarSubTrigger>
								<MenubarSubContent className="bg-zinc-800 border-zinc-700 text-zinc-200">
									<MenubarItem className="hover:bg-zinc-700 focus:bg-zinc-700">
										Search...{" "}
										<MenubarShortcut className="text-zinc-400">
											⌘F
										</MenubarShortcut>
									</MenubarItem>
									<MenubarItem className="hover:bg-zinc-700 focus:bg-zinc-700">
										Replace...{" "}
										<MenubarShortcut className="text-zinc-400">
											⌘R
										</MenubarShortcut>
									</MenubarItem>
								</MenubarSubContent>
							</MenubarSub>
						</MenubarContent>
					</MenubarMenu>
					<MenubarMenu>
						<MenubarTrigger className="text-zinc-200 hover:bg-zinc-700">
							View
						</MenubarTrigger>
						<MenubarContent className="bg-zinc-800 border-zinc-700 text-zinc-200">
							<MenubarCheckboxItem
								className="hover:bg-zinc-700 focus:bg-zinc-700"
								checked
							>
								Show Toolbar
							</MenubarCheckboxItem>
							<MenubarCheckboxItem className="hover:bg-zinc-700 focus:bg-zinc-700">
								Show Statusbar
							</MenubarCheckboxItem>
							<MenubarSeparator className="bg-zinc-700" />
							<MenubarItem className="hover:bg-zinc-700 focus:bg-zinc-700">
								Zoom In{" "}
								<MenubarShortcut className="text-zinc-400">⌘+</MenubarShortcut>
							</MenubarItem>
							<MenubarItem className="hover:bg-zinc-700 focus:bg-zinc-700">
								Zoom Out{" "}
								<MenubarShortcut className="text-zinc-400">⌘-</MenubarShortcut>
							</MenubarItem>
						</MenubarContent>
					</MenubarMenu>
				</Menubar>

				<div className="menubar-story-description mt-4">
					This menubar uses custom styles for dark theme appearance. The actual
					menu content will automatically follow your application's theme when
					implemented.
				</div>
			</div>
		</div>
	),
};
