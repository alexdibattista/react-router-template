import type { Meta, StoryObj } from "@storybook/react";
import { Bell, ChevronDown, Menu, Search, Settings, User } from "lucide-react";
import React from "react";

import { ModeToggle } from "../../app/components/mode-toggle";
import { ThemeProvider } from "../../app/components/theme-provider";
import { Button } from "../../app/components/ui/button";
import { Input } from "../../app/components/ui/input";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "../../app/components/ui/navigation-menu";
import { SidebarProvider } from "../../app/components/ui/sidebar";

import { Header } from "./Header";
import "./Header.css";

// Define the interface for story props
interface HeaderStoryProps {
	className?: string;
}

// Create a meta object for the Header stories
const meta = {
	title: "Components/Header",
	component: Header,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
	decorators: [
		(Story) => (
			<ThemeProvider defaultTheme="light" storageKey="storybook-theme">
				<SidebarProvider>
					<Story />
				</SidebarProvider>
			</ThemeProvider>
		),
	],
} satisfies Meta<HeaderStoryProps>;

export default meta;
type Story = StoryObj<typeof Header>;

// Default Header
export const Default: Story = {
	render: () => (
		<div className="header-story-container">
			<div className="header-story-section">
				<h3>Default Header</h3>
				<div className="header-story-description">
					The application header with navigation menu and sidebar trigger.
				</div>

				<div className="header-story-card">
					<div className="header-story-demo">
						<div className="header-story-showcase">
							<div className="header-story-header">
								<Header />
							</div>
							<div className="header-story-content">
								<p>Page content would go here.</p>
							</div>
						</div>
					</div>
					<p className="header-story-info">
						The default Header includes a sidebar trigger and navigation menu,
						allowing users to navigate through the application. The sidebar
						trigger relies on the SidebarProvider context to function properly.
					</p>
				</div>
			</div>
		</div>
	),
};

// Customized Header
export const Customized: Story = {
	render: () => {
		// A custom header component with additional features
		const CustomHeader = () => {
			return (
				<div className="flex h-16 items-center justify-between border-b px-4">
					<div className="flex items-center gap-4">
						<Menu className="h-5 w-5" />
						<span className="text-lg font-semibold">Company Name</span>
						<NavigationMenu className="hidden md:flex">
							<NavigationMenuList>
								<NavigationMenuItem>
									<NavigationMenuTrigger>Dashboard</NavigationMenuTrigger>
									<NavigationMenuContent>
										<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
											<li className="row-span-3">
												<NavigationMenuLink asChild>
													<a
														className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
														href="/overview"
													>
														<div className="mb-2 mt-4 text-lg font-medium">
															Overview
														</div>
														<p className="text-sm leading-tight text-muted-foreground">
															Get a bird's eye view of your organization.
														</p>
													</a>
												</NavigationMenuLink>
											</li>
											<li>
												<NavigationMenuLink asChild>
													<a
														className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
														href="/analytics"
													>
														<div className="text-sm font-medium leading-none">
															Analytics
														</div>
														<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
															Detailed analytics and reports
														</p>
													</a>
												</NavigationMenuLink>
											</li>
											<li>
												<NavigationMenuLink asChild>
													<a
														className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
														href="/projects"
													>
														<div className="text-sm font-medium leading-none">
															Projects
														</div>
														<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
															View and manage your projects
														</p>
													</a>
												</NavigationMenuLink>
											</li>
											<li>
												<NavigationMenuLink asChild>
													<a
														className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
														href="/settings"
													>
														<div className="text-sm font-medium leading-none">
															Settings
														</div>
														<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
															Configure your application settings
														</p>
													</a>
												</NavigationMenuLink>
											</li>
										</ul>
									</NavigationMenuContent>
								</NavigationMenuItem>
								<NavigationMenuItem>
									<NavigationMenuTrigger>Projects</NavigationMenuTrigger>
									<NavigationMenuContent>
										<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
											<li>
												<NavigationMenuLink asChild>
													<a
														className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
														href="/projects/alpha"
													>
														<div className="text-sm font-medium leading-none">
															Project Alpha
														</div>
														<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
															tracking for manufacturing
														</p>
													</a>
												</NavigationMenuLink>
											</li>
											<li>
												<NavigationMenuLink asChild>
													<a
														className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
														href="/projects/beta"
													>
														<div className="text-sm font-medium leading-none">
															Project Beta
														</div>
														<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
															calculation for transportation
														</p>
													</a>
												</NavigationMenuLink>
											</li>
										</ul>
									</NavigationMenuContent>
								</NavigationMenuItem>
								<NavigationMenuItem>
									<NavigationMenuLink
										className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
										href="/documentation"
									>
										Documentation
									</NavigationMenuLink>
								</NavigationMenuItem>
							</NavigationMenuList>
						</NavigationMenu>
					</div>

					<div className="flex items-center gap-4">
						<div className="relative hidden md:block">
							<Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
							<Input
								type="search"
								placeholder="Search..."
								className="w-[200px] rounded-md pl-8 md:w-[250px] lg:w-[300px]"
							/>
						</div>
						<Button size="icon" variant="ghost">
							<Bell className="h-5 w-5" />
						</Button>
						<Button size="icon" variant="ghost">
							<Settings className="h-5 w-5" />
						</Button>
						<ModeToggle />
						<Button variant="outline" size="sm" className="ml-2">
							<User className="mr-2 h-4 w-4" />
							Profile
							<ChevronDown className="ml-2 h-4 w-4" />
						</Button>
					</div>
				</div>
			);
		};

		return (
			<div className="header-story-container">
				<div className="header-story-section">
					<h3>Customized Header</h3>
					<div className="header-story-description">
						An enhanced and customized application header with additional
						features.
					</div>

					<div className="header-story-card">
						<div className="header-story-demo">
							<div className="header-story-showcase">
								<div className="header-story-header">
									<CustomHeader />
								</div>
								<div className="header-story-content">
									<p>Page content would go here.</p>
								</div>
							</div>
						</div>
						<p className="header-story-info">
							This customized header expands upon the base Header component with
							additional features like search, notifications, settings, theme
							toggle, and user profile. It demonstrates how the Header component
							can be extended for more advanced use cases.
						</p>
					</div>
				</div>
			</div>
		);
	},
};

// Dark Theme Header
export const DarkTheme: Story = {
	render: () => (
		<div className="header-story-container header-story-dark">
			<div className="header-story-section">
				<h3>Dark Theme Header</h3>
				<div className="header-story-description">
					The Header component with dark theme styling.
				</div>

				<div className="header-story-card">
					<div className="header-story-demo">
						<div className="header-story-showcase">
							<div className="header-story-header">
								<Header />
							</div>
							<div className="header-story-content">
								<p>Page content would go here.</p>
							</div>
						</div>
					</div>
					<p className="header-story-info">
						The dark theme version of the header adapts all sub-components to
						use the appropriate colors and styling for dark mode. This provides
						a consistent experience for users who prefer dark mode.
					</p>
				</div>
			</div>
		</div>
	),
	parameters: {
		backgrounds: { default: "dark" },
	},
};
