import type { Meta, StoryObj } from "@storybook/react";
import {
	BookmarkIcon,
	CalendarIcon,
	CodeIcon,
	FilesIcon,
	ImageIcon,
	LayoutDashboardIcon,
	MessageSquareIcon,
	Music4Icon,
	Settings2Icon,
	UsersIcon,
} from "lucide-react";
import { useState } from "react";

import { Button } from "../../app/components/ui/button";
import { Card, CardContent } from "../../app/components/ui/card";
import { Input } from "../../app/components/ui/input";
import { Label } from "../../app/components/ui/label";
import { Switch } from "../../app/components/ui/switch";
import { cn } from "../../app/lib/utils";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "./Tabs";
import "./Tabs.css";

// Define the interface for TabsStoryProps
interface TabsStoryProps {
	className?: string;
}

// Create a meta object for the Tabs stories
const meta = {
	title: "UI/Tabs",
	component: Tabs,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<TabsStoryProps>;

export default meta;
type Story = StoryObj<typeof Tabs>;

// Default Tabs
export const Default: Story = {
	render: () => (
		<div className="tabs-story-container">
			<div className="tabs-story-section">
				<h3>Default Tabs</h3>
				<div className="tabs-story-description">
					A simple tabbed interface with content.
				</div>

				<div className="tabs-story-card">
					<div className="tabs-story-demo">
						<Tabs defaultValue="account" className="tabs-story-tabs">
							<TabsList>
								<TabsTrigger value="account">Account</TabsTrigger>
								<TabsTrigger value="password">Password</TabsTrigger>
								<TabsTrigger value="settings">Settings</TabsTrigger>
							</TabsList>
							<TabsContent value="account" className="tabs-story-panel">
								<div className="tabs-story-tab-content">
									<h4 className="text-sm font-medium">Account Settings</h4>
									<p className="tabs-story-info">
										Update your account information and preferences.
									</p>
								</div>
							</TabsContent>
							<TabsContent value="password" className="tabs-story-panel">
								<div className="tabs-story-tab-content">
									<h4 className="text-sm font-medium">Password Settings</h4>
									<p className="tabs-story-info">
										Change your password and manage security options.
									</p>
								</div>
							</TabsContent>
							<TabsContent value="settings" className="tabs-story-panel">
								<div className="tabs-story-tab-content">
									<h4 className="text-sm font-medium">General Settings</h4>
									<p className="tabs-story-info">
										Configure application settings and preferences.
									</p>
								</div>
							</TabsContent>
						</Tabs>
					</div>
				</div>
			</div>
		</div>
	),
};

// Tabs with Icons
export const TabsWithIcons: Story = {
	render: () => (
		<div className="tabs-story-container">
			<div className="tabs-story-section">
				<h3>Tabs with Icons</h3>
				<div className="tabs-story-description">
					Tabs with icons and labels for enhanced visual cues.
				</div>

				<div className="tabs-story-card">
					<div className="tabs-story-demo">
						<Tabs defaultValue="messages" className="tabs-story-tabs">
							<TabsList>
								<TabsTrigger value="messages">
									<MessageSquareIcon className="h-4 w-4 mr-2" />
									Messages
								</TabsTrigger>
								<TabsTrigger value="gallery">
									<ImageIcon className="h-4 w-4 mr-2" />
									Gallery
								</TabsTrigger>
								<TabsTrigger value="documents">
									<FilesIcon className="h-4 w-4 mr-2" />
									Documents
								</TabsTrigger>
							</TabsList>
							<TabsContent value="messages" className="tabs-story-panel">
								<div className="tabs-story-tab-content">
									<h4 className="text-sm font-medium">Messages</h4>
									<p className="tabs-story-info">
										View and manage your conversations and messages.
									</p>
								</div>
							</TabsContent>
							<TabsContent value="gallery" className="tabs-story-panel">
								<div className="tabs-story-tab-content">
									<h4 className="text-sm font-medium">Gallery</h4>
									<p className="tabs-story-info">
										Browse and organize your photos and images.
									</p>
								</div>
							</TabsContent>
							<TabsContent value="documents" className="tabs-story-panel">
								<div className="tabs-story-tab-content">
									<h4 className="text-sm font-medium">Documents</h4>
									<p className="tabs-story-info">
										Access and manage your files and documents.
									</p>
								</div>
							</TabsContent>
						</Tabs>
					</div>
				</div>
			</div>
		</div>
	),
};

// Vertical Tabs
export const VerticalTabs: Story = {
	render: () => (
		<div className="tabs-story-container">
			<div className="tabs-story-section">
				<h3>Vertical Tabs</h3>
				<div className="tabs-story-description">
					Tabs arranged vertically for more space-efficient interfaces.
				</div>

				<div className="tabs-story-card">
					<div className="tabs-story-demo">
						<div className="tabs-story-vertical">
							<Tabs
								defaultValue="code"
								orientation="vertical"
								className="tabs-story-tabs"
							>
								<TabsList className="w-[200px] tabs-story-tabs-list">
									<TabsTrigger value="code">
										<CodeIcon className="h-4 w-4 mr-2" />
										Code
									</TabsTrigger>
									<TabsTrigger value="music">
										<Music4Icon className="h-4 w-4 mr-2" />
										Music
									</TabsTrigger>
									<TabsTrigger value="settings">
										<Settings2Icon className="h-4 w-4 mr-2" />
										Settings
									</TabsTrigger>
								</TabsList>
								<div className="flex-1">
									<TabsContent value="code" className="tabs-story-panel h-full">
										<div className="tabs-story-tab-content">
											<h4 className="text-sm font-medium">Code Editor</h4>
											<p className="tabs-story-info">
												Edit and manage your code snippets and projects.
											</p>
											<div className="tabs-story-code">
												{/* Example code snippet */}
												<br />
												function greet(name) {"{"} <br />
												&nbsp;&nbsp;return `Hello, ${"{"}name{"}"}!`; <br />
												{"}"}
											</div>
										</div>
									</TabsContent>
									<TabsContent
										value="music"
										className="tabs-story-panel h-full"
									>
										<div className="tabs-story-tab-content">
											<h4 className="text-sm font-medium">Music Player</h4>
											<p className="tabs-story-info">
												Listen to and manage your music collection.
											</p>
										</div>
									</TabsContent>
									<TabsContent
										value="settings"
										className="tabs-story-panel h-full"
									>
										<div className="tabs-story-tab-content">
											<h4 className="text-sm font-medium">Settings Panel</h4>
											<p className="tabs-story-info">
												Configure your application preferences.
											</p>
										</div>
									</TabsContent>
								</div>
							</Tabs>
						</div>
					</div>
				</div>
			</div>
		</div>
	),
};

// Custom Styled Tabs
export const CustomStyledTabs: Story = {
	render: () => (
		<div className="tabs-story-container">
			<div className="tabs-story-section">
				<h3>Custom Styled Tabs</h3>
				<div className="tabs-story-description">
					Three different styling variations for tabs: underline, pills, and
					boxed.
				</div>

				<div className="tabs-story-card">
					<div className="tabs-story-demo">
						<h4 className="text-sm font-medium mb-4">Underline Style</h4>
						<Tabs
							defaultValue="account"
							className="tabs-story-tabs tabs-story-variant-underline"
						>
							<TabsList className="tabs-list">
								<TabsTrigger value="account" className="tabs-trigger">
									Account
								</TabsTrigger>
								<TabsTrigger value="password" className="tabs-trigger">
									Password
								</TabsTrigger>
								<TabsTrigger value="settings" className="tabs-trigger">
									Settings
								</TabsTrigger>
							</TabsList>
							<TabsContent value="account" className="mt-4">
								<p className="tabs-story-info">Account content goes here.</p>
							</TabsContent>
							<TabsContent value="password" className="mt-4">
								<p className="tabs-story-info">Password content goes here.</p>
							</TabsContent>
							<TabsContent value="settings" className="mt-4">
								<p className="tabs-story-info">Settings content goes here.</p>
							</TabsContent>
						</Tabs>
					</div>

					<div className="tabs-story-demo mt-8">
						<h4 className="text-sm font-medium mb-4">Pills Style</h4>
						<Tabs
							defaultValue="published"
							className="tabs-story-tabs tabs-story-variant-pills"
						>
							<TabsList className="tabs-list">
								<TabsTrigger value="published" className="tabs-trigger">
									Published
								</TabsTrigger>
								<TabsTrigger value="draft" className="tabs-trigger">
									Draft
								</TabsTrigger>
								<TabsTrigger value="archived" className="tabs-trigger">
									Archived
								</TabsTrigger>
							</TabsList>
							<TabsContent value="published" className="mt-4">
								<p className="tabs-story-info">Published content goes here.</p>
							</TabsContent>
							<TabsContent value="draft" className="mt-4">
								<p className="tabs-story-info">Draft content goes here.</p>
							</TabsContent>
							<TabsContent value="archived" className="mt-4">
								<p className="tabs-story-info">Archived content goes here.</p>
							</TabsContent>
						</Tabs>
					</div>

					<div className="tabs-story-demo mt-8">
						<h4 className="text-sm font-medium mb-4">Boxed Style</h4>
						<Tabs
							defaultValue="overview"
							className="tabs-story-tabs tabs-story-variant-boxed"
						>
							<TabsList className="tabs-list">
								<TabsTrigger value="overview" className="tabs-trigger flex-1">
									Overview
								</TabsTrigger>
								<TabsTrigger value="analytics" className="tabs-trigger flex-1">
									Analytics
								</TabsTrigger>
								<TabsTrigger value="reports" className="tabs-trigger flex-1">
									Reports
								</TabsTrigger>
							</TabsList>
							<TabsContent value="overview" className="mt-4">
								<p className="tabs-story-info">Overview content goes here.</p>
							</TabsContent>
							<TabsContent value="analytics" className="mt-4">
								<p className="tabs-story-info">Analytics content goes here.</p>
							</TabsContent>
							<TabsContent value="reports" className="mt-4">
								<p className="tabs-story-info">Reports content goes here.</p>
							</TabsContent>
						</Tabs>
					</div>
				</div>
			</div>
		</div>
	),
};

// Responsive Tabs
export const ResponsiveTabs: Story = {
	render: () => {
		// Simulating responsive behavior
		const [isCompact, setIsCompact] = useState(false);

		return (
			<div className="tabs-story-container">
				<div className="tabs-story-section">
					<h3>Responsive Tabs</h3>
					<div className="tabs-story-description">
						Tabs that adapt to different screen sizes and orientations.
					</div>

					<div className="flex items-center justify-end mb-4">
						<Label htmlFor="compact-mode" className="mr-2 text-sm">
							Compact Mode
						</Label>
						<Switch
							id="compact-mode"
							checked={isCompact}
							onCheckedChange={setIsCompact}
						/>
					</div>

					<div className="tabs-story-card">
						<div className="tabs-story-demo">
							<Tabs defaultValue="dashboard" className="tabs-story-tabs">
								<TabsList
									className={cn(
										"w-full",
										isCompact && "flex-wrap justify-start",
									)}
								>
									<TabsTrigger
										value="dashboard"
										className={isCompact ? "p-2" : ""}
									>
										<LayoutDashboardIcon
											className={cn("h-4 w-4", isCompact ? "" : "mr-2")}
										/>
										{!isCompact && "Dashboard"}
									</TabsTrigger>
									<TabsTrigger
										value="calendar"
										className={isCompact ? "p-2" : ""}
									>
										<CalendarIcon
											className={cn("h-4 w-4", isCompact ? "" : "mr-2")}
										/>
										{!isCompact && "Calendar"}
									</TabsTrigger>
									<TabsTrigger
										value="bookmarks"
										className={isCompact ? "p-2" : ""}
									>
										<BookmarkIcon
											className={cn("h-4 w-4", isCompact ? "" : "mr-2")}
										/>
										{!isCompact && "Bookmarks"}
									</TabsTrigger>
									<TabsTrigger value="team" className={isCompact ? "p-2" : ""}>
										<UsersIcon
											className={cn("h-4 w-4", isCompact ? "" : "mr-2")}
										/>
										{!isCompact && "Team"}
									</TabsTrigger>
								</TabsList>
								<TabsContent value="dashboard" className="tabs-story-panel">
									<div className="tabs-story-tab-content">
										<h4 className="text-sm font-medium">Dashboard</h4>
										<p className="tabs-story-info">
											View your analytics and key metrics.
										</p>
									</div>
								</TabsContent>
								<TabsContent value="calendar" className="tabs-story-panel">
									<div className="tabs-story-tab-content">
										<h4 className="text-sm font-medium">Calendar</h4>
										<p className="tabs-story-info">
											Manage your schedule and events.
										</p>
									</div>
								</TabsContent>
								<TabsContent value="bookmarks" className="tabs-story-panel">
									<div className="tabs-story-tab-content">
										<h4 className="text-sm font-medium">Bookmarks</h4>
										<p className="tabs-story-info">
											Access your saved items and bookmarks.
										</p>
									</div>
								</TabsContent>
								<TabsContent value="team" className="tabs-story-panel">
									<div className="tabs-story-tab-content">
										<h4 className="text-sm font-medium">Team</h4>
										<p className="tabs-story-info">
											Manage your team members and collaborators.
										</p>
									</div>
								</TabsContent>
							</Tabs>
						</div>
					</div>
				</div>
			</div>
		);
	},
};

// Tabs with Form Content
export const TabsWithForm: Story = {
	render: () => (
		<div className="tabs-story-container">
			<div className="tabs-story-section">
				<h3>Tabs with Form Content</h3>
				<div className="tabs-story-description">
					Tabs containing interactive form elements and inputs.
				</div>

				<div className="tabs-story-card">
					<div className="tabs-story-demo">
						<Tabs defaultValue="profile" className="tabs-story-tabs">
							<TabsList>
								<TabsTrigger value="profile">Profile</TabsTrigger>
								<TabsTrigger value="preferences">Preferences</TabsTrigger>
								<TabsTrigger value="notifications">Notifications</TabsTrigger>
							</TabsList>
							<TabsContent value="profile" className="tabs-story-panel">
								<Card>
									<CardContent className="tabs-story-card-content">
										<form className="space-y-4">
											<div className="space-y-2">
												<Label htmlFor="name">Name</Label>
												<Input id="name" placeholder="Enter your name" />
											</div>
											<div className="space-y-2">
												<Label htmlFor="email">Email</Label>
												<Input
													id="email"
													type="email"
													placeholder="Enter your email"
												/>
											</div>
											<Button type="submit">Save Changes</Button>
										</form>
									</CardContent>
								</Card>
							</TabsContent>
							<TabsContent value="preferences" className="tabs-story-panel">
								<Card>
									<CardContent className="tabs-story-card-content">
										<div className="space-y-4">
											<div className="flex items-center justify-between">
												<Label htmlFor="dark-mode">Dark Mode</Label>
												<Switch id="dark-mode" />
											</div>
											<div className="flex items-center justify-between">
												<Label htmlFor="notifications">
													Enable Notifications
												</Label>
												<Switch id="notifications" defaultChecked />
											</div>
											<div className="flex items-center justify-between">
												<Label htmlFor="sound">Sound Effects</Label>
												<Switch id="sound" />
											</div>
											<Button>Save Preferences</Button>
										</div>
									</CardContent>
								</Card>
							</TabsContent>
							<TabsContent value="notifications" className="tabs-story-panel">
								<Card>
									<CardContent className="tabs-story-card-content">
										<div className="space-y-4">
											<div className="flex items-center justify-between">
												<Label htmlFor="email-notifications">
													Email Notifications
												</Label>
												<Switch id="email-notifications" defaultChecked />
											</div>
											<div className="flex items-center justify-between">
												<Label htmlFor="push-notifications">
													Push Notifications
												</Label>
												<Switch id="push-notifications" defaultChecked />
											</div>
											<div className="flex items-center justify-between">
												<Label htmlFor="marketing">Marketing Emails</Label>
												<Switch id="marketing" />
											</div>
											<Button>Update Notification Settings</Button>
										</div>
									</CardContent>
								</Card>
							</TabsContent>
						</Tabs>
					</div>
				</div>
			</div>
		</div>
	),
};

// Dark Theme Tabs
export const DarkThemeTabs: Story = {
	render: () => (
		<div className="tabs-story-container tabs-story-dark">
			<div className="tabs-story-section">
				<h3>Dark Theme Tabs</h3>
				<div className="tabs-story-description">
					Tabs styled for dark mode interfaces.
				</div>

				<div className="tabs-story-card">
					<div className="tabs-story-demo">
						<Tabs defaultValue="features" className="tabs-story-tabs">
							<TabsList>
								<TabsTrigger value="features">Features</TabsTrigger>
								<TabsTrigger value="pricing">Pricing</TabsTrigger>
								<TabsTrigger value="faq">FAQ</TabsTrigger>
							</TabsList>
							<TabsContent value="features" className="tabs-story-panel">
								<div className="tabs-story-tab-content">
									<h4 className="text-sm font-medium">Features</h4>
									<p className="tabs-story-info">
										Explore our product features and capabilities.
									</p>
								</div>
							</TabsContent>
							<TabsContent value="pricing" className="tabs-story-panel">
								<div className="tabs-story-tab-content">
									<h4 className="text-sm font-medium">Pricing Plans</h4>
									<p className="tabs-story-info">
										View our pricing tiers and subscription options.
									</p>
								</div>
							</TabsContent>
							<TabsContent value="faq" className="tabs-story-panel">
								<div className="tabs-story-tab-content">
									<h4 className="text-sm font-medium">
										Frequently Asked Questions
									</h4>
									<p className="tabs-story-info">
										Find answers to common questions and concerns.
									</p>
								</div>
							</TabsContent>
						</Tabs>
					</div>
				</div>
			</div>
		</div>
	),
};
