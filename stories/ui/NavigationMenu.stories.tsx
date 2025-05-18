import type { Meta, StoryObj } from "@storybook/react";
import {
	ChevronDownIcon,
	GlobeIcon,
	GridIcon,
	LayoutIcon,
	ListIcon,
	SettingsIcon,
	UsersIcon,
} from "lucide-react";
import { useState } from "react";

import { Button } from "../../app/components/ui/button";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuViewport,
	navigationMenuTriggerStyle,
} from "./NavigationMenu";

import "./NavigationMenu.css";
import { cn } from "../../lib/utils";

const meta = {
	title: "UI/NavigationMenu",
	component: NavigationMenu,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		className: { control: "text" },
	},
} satisfies Meta<typeof NavigationMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default Navigation Menu
export const Default: Story = {
	args: {},
	render: (args) => (
		<div className="navigation-menu-story-container">
			<div className="navigation-menu-story-section">
				<h3>Default Navigation Menu</h3>
				<div className="navigation-menu-story-description">
					A standard navigation menu with dropdown items.
				</div>

				<div className="navigation-menu-list-demo">
					<NavigationMenu {...args}>
						<NavigationMenuList>
							<NavigationMenuItem>
								<NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="navigation-menu-content-list grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
										<li className="row-span-3">
											<NavigationMenuLink asChild>
												<a
													className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
													href="/"
												>
													<div className="mb-2 mt-4 text-lg font-medium">
														Documentation
													</div>
													<p className="text-sm leading-tight text-muted-foreground">
														Learn how to use our product and get the most out of
														it.
													</p>
												</a>
											</NavigationMenuLink>
										</li>
										<ListItem href="/docs/introduction" title="Introduction">
											Re-usable components built using Radix UI and Tailwind
											CSS.
										</ListItem>
										<ListItem href="/docs/installation" title="Installation">
											How to install dependencies and structure your app.
										</ListItem>
										<ListItem href="/docs/typography" title="Typography">
											Styles for headings, paragraphs, lists...etc
										</ListItem>
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuTrigger>Components</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="navigation-menu-content-list grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
										<ListItem
											href="/docs/components/accordion"
											title="Accordion"
										>
											A vertically stacked set of interactive headings.
										</ListItem>
										<ListItem
											href="/docs/components/alert-dialog"
											title="Alert Dialog"
										>
											A modal dialog that interrupts the user with important
											content.
										</ListItem>
										<ListItem href="/docs/components/button" title="Button">
											Displays a button or a component that looks like a button.
										</ListItem>
										<ListItem href="/docs/components/card" title="Card">
											Displays a card with header, content, and footer.
										</ListItem>
										<ListItem href="/docs/components/dialog" title="Dialog">
											A window overlaid on either the primary window or another
											dialog window.
										</ListItem>
										<ListItem href="/docs/components/popover" title="Popover">
											Displays rich content in a portal, triggered by a button.
										</ListItem>
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuLink className={navigationMenuTriggerStyle()}>
									Documentation
								</NavigationMenuLink>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
				</div>
			</div>
		</div>
	),
};

// Mobile Responsive Menu
export const MobileResponsiveMenu: Story = {
	args: {},
	render: (args) => (
		<div className="navigation-menu-story-container">
			<div className="navigation-menu-story-section">
				<h3>Mobile Responsive Navigation Menu</h3>
				<div className="navigation-menu-story-description">
					A responsive navigation menu that adapts to mobile and desktop views.
				</div>

				<div className="navigation-menu-mobile">
					<div className="navigation-menu-header">
						<div className="font-semibold">Mobile View</div>
						<Button variant="ghost" size="icon">
							<svg
								width="15"
								height="15"
								viewBox="0 0 15 15"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
							>
								<path
									d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1.5 7C1.22386 7 1 7.22386 1 7.5C1 7.77614 1.22386 8 1.5 8H13.5C13.7761 8 14 7.77614 14 7.5C14 7.22386 13.7761 7 13.5 7H1.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
									fill="currentColor"
									fillRule="evenodd"
									clipRule="evenodd"
								></path>
							</svg>
						</Button>
					</div>

					<div className="p-4">
						<NavigationMenu {...args} className="w-full max-w-full">
							<NavigationMenuList className="flex-col items-start w-full space-y-2">
								<NavigationMenuItem className="w-full">
									<NavigationMenuLink className="w-full flex items-center p-2 rounded hover:bg-accent">
										<HomeIcon className="mr-2 h-4 w-4" />
										<span>Home</span>
									</NavigationMenuLink>
								</NavigationMenuItem>
								<NavigationMenuItem className="w-full">
									<NavigationMenuLink className="w-full flex items-center p-2 rounded hover:bg-accent">
										<UsersIcon className="mr-2 h-4 w-4" />
										<span>Users</span>
									</NavigationMenuLink>
								</NavigationMenuItem>
								<NavigationMenuItem className="w-full">
									<NavigationMenuLink className="w-full flex items-center p-2 rounded hover:bg-accent">
										<SettingsIcon className="mr-2 h-4 w-4" />
										<span>Settings</span>
									</NavigationMenuLink>
								</NavigationMenuItem>
							</NavigationMenuList>
						</NavigationMenu>
					</div>
				</div>
			</div>
		</div>
	),
};

// Horizontal Navigation
export const HorizontalNavigation: Story = {
	args: {},
	render: (args) => {
		const [activeTab, setActiveTab] = useState("overview");

		return (
			<div className="navigation-menu-story-container">
				<div className="navigation-menu-story-section">
					<h3>Horizontal Navigation</h3>
					<div className="navigation-menu-story-description">
						A horizontal navigation layout with active indicators.
					</div>

					<div className="navigation-menu-story-card">
						<NavigationMenu {...args} className="w-full justify-start">
							<NavigationMenuList className="gap-2">
								<NavigationMenuItem>
									<NavigationMenuLink
										className={cn(
											navigationMenuTriggerStyle(),
											activeTab === "overview" &&
												"bg-accent text-accent-foreground",
										)}
										onClick={() => setActiveTab("overview")}
									>
										Overview
									</NavigationMenuLink>
								</NavigationMenuItem>
								<NavigationMenuItem>
									<NavigationMenuLink
										className={cn(
											navigationMenuTriggerStyle(),
											activeTab === "analytics" &&
												"bg-accent text-accent-foreground",
										)}
										onClick={() => setActiveTab("analytics")}
									>
										Analytics
									</NavigationMenuLink>
								</NavigationMenuItem>
								<NavigationMenuItem>
									<NavigationMenuLink
										className={cn(
											navigationMenuTriggerStyle(),
											activeTab === "reports" &&
												"bg-accent text-accent-foreground",
										)}
										onClick={() => setActiveTab("reports")}
									>
										Reports
									</NavigationMenuLink>
								</NavigationMenuItem>
								<NavigationMenuItem>
									<NavigationMenuLink
										className={cn(
											navigationMenuTriggerStyle(),
											activeTab === "settings" &&
												"bg-accent text-accent-foreground",
										)}
										onClick={() => setActiveTab("settings")}
									>
										Settings
									</NavigationMenuLink>
								</NavigationMenuItem>
							</NavigationMenuList>
						</NavigationMenu>

						<div className="mt-4 p-4 border rounded">
							<p className="text-sm text-muted-foreground">
								Active Tab:{" "}
								<span className="font-medium text-foreground">
									{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
								</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	},
};

// Multi-Level Navigation
export const MultiLevelNavigation: Story = {
	args: {},
	render: (args) => (
		<div className="navigation-menu-story-container">
			<div className="navigation-menu-story-section">
				<h3>Multi-Level Navigation</h3>
				<div className="navigation-menu-story-description">
					A navigation menu with nested dropdown content.
				</div>

				<div className="navigation-menu-list-demo">
					<NavigationMenu {...args}>
						<NavigationMenuList>
							<NavigationMenuItem>
								<NavigationMenuTrigger>Products</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="navigation-menu-grid w-[600px]">
										<li className="navigation-menu-content-card">
											<LayoutIcon className="h-5 w-5 text-primary" />
											<div className="navigation-menu-content-card-title">
												Dashboard
											</div>
											<div className="navigation-menu-content-card-description">
												All-in-one monitoring solution for your business
											</div>
										</li>
										<li className="navigation-menu-content-card">
											<UsersIcon className="h-5 w-5 text-primary" />
											<div className="navigation-menu-content-card-title">
												Team Management
											</div>
											<div className="navigation-menu-content-card-description">
												Organize and manage your team members
											</div>
										</li>
										<li className="navigation-menu-content-card">
											<GridIcon className="h-5 w-5 text-primary" />
											<div className="navigation-menu-content-card-title">
												Projects
											</div>
											<div className="navigation-menu-content-card-description">
												Track and manage your ongoing projects
											</div>
										</li>
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="navigation-menu-content-list grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
										<ListItem
											href="#"
											title="For Enterprise"
											Icon={<GlobeIcon className="h-4 w-4" />}
										>
											Solutions designed for large businesses.
										</ListItem>
										<ListItem
											href="#"
											title="For Startups"
											Icon={<GridIcon className="h-4 w-4" />}
										>
											Agile solutions for growing companies.
										</ListItem>
										<ListItem
											href="#"
											title="For Education"
											Icon={<ListIcon className="h-4 w-4" />}
										>
											Tools for educational institutions.
										</ListItem>
										<ListItem
											href="#"
											title="For Healthcare"
											Icon={<LayoutIcon className="h-4 w-4" />}
										>
											HIPAA-compliant solutions for healthcare.
										</ListItem>
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuTrigger>Resources</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="navigation-menu-content-list w-[250px] gap-3 p-4">
										<ListItem href="#" title="Documentation">
											Guides and API references
										</ListItem>
										<ListItem href="#" title="Blog">
											Latest articles and updates
										</ListItem>
										<ListItem href="#" title="Community">
											Get help from the community
										</ListItem>
										<ListItem href="#" title="Support">
											Contact our support team
										</ListItem>
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuLink className={navigationMenuTriggerStyle()}>
									Pricing
								</NavigationMenuLink>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
				</div>
			</div>
		</div>
	),
};

// Application Header Navigation
export const ApplicationHeader: Story = {
	args: {},
	render: (args) => (
		<div className="navigation-menu-story-container">
			<div className="navigation-menu-story-section">
				<h3>Application Header Navigation</h3>
				<div className="navigation-menu-story-description">
					A navigation menu integrated into an application header.
				</div>

				<div className="navigation-menu-story-card bg-muted/30">
					<div className="flex justify-between items-center pb-4">
						<div className="font-semibold text-lg">AppName</div>
						<div className="flex items-center gap-2">
							<Button variant="ghost" size="icon">
								<svg
									width="15"
									height="15"
									viewBox="0 0 15 15"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									aria-hidden="true"
								>
									<path
										d="M14.5 7.5C14.5 11.366 11.366 14.5 7.5 14.5C3.63401 14.5 0.5 11.366 0.5 7.5C0.5 3.63401 3.63401 0.5 7.5 0.5C11.366 0.5 14.5 3.63401 14.5 7.5ZM7.5 3.5C7.77614 3.5 8 3.72386 8 4V7.5C8 7.77614 7.77614 8 7.5 8C7.22386 8 7 7.77614 7 7.5V4C7 3.72386 7.22386 3.5 7.5 3.5ZM7.5 11C7.22386 11 7 10.7761 7 10.5C7 10.2239 7.22386 10 7.5 10C7.77614 10 8 10.2239 8 10.5C8 10.7761 7.77614 11 7.5 11Z"
										fill="currentColor"
										fillRule="evenodd"
										clipRule="evenodd"
									></path>
								</svg>
							</Button>
							<Button variant="ghost" size="icon">
								<svg
									width="15"
									height="15"
									viewBox="0 0 15 15"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									aria-hidden="true"
								>
									<path
										d="M9.62129 1.13649C9.41449 1.26124 9.27817 1.48232 9.27817 1.73891V3.73891H1.73891C1.27563 3.73891 0.901229 4.11332 0.901229 4.57659V10.4234C0.901229 10.8867 1.27563 11.2611 1.73891 11.2611H9.27817V13.2611C9.27817 13.5177 9.41449 13.7388 9.62129 13.8635C9.82809 13.9883 10.0877 13.9893 10.2957 13.8659L14.2957 11.3659C14.5043 11.2421 14.6422 11.0202 14.6422 10.7611V4.23891C14.6422 3.97976 14.5043 3.75788 14.2957 3.63406L10.2957 1.13406C10.0877 1.01066 9.82809 1.01175 9.62129 1.13649ZM10.0782 5.73891V9.26109H1.73891V5.73891H10.0782ZM10.0782 4.90558H1.73891V4.57659H10.0782V4.90558ZM10.0782 10.0944V10.4234H1.73891V10.0944H10.0782ZM10.0782 3.73891V2.60169L13.0604 4.4389V10.5611L10.0782 12.3983V11.2611H10.9282V9.26109H10.0782V5.73891H10.9282V4.90558H10.0782V3.73891Z"
										fill="currentColor"
										fillRule="evenodd"
										clipRule="evenodd"
									></path>
								</svg>
							</Button>
							<Button variant="ghost" size="icon" className="rounded-full">
								<svg
									width="15"
									height="15"
									viewBox="0 0 15 15"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									aria-hidden="true"
								>
									<path
										d="M7.5 0.875C5.49797 0.875 3.875 2.49797 3.875 4.5C3.875 6.15288 4.98124 7.54738 6.49373 7.98351C5.2997 8.12901 4.27557 8.55134 3.50407 9.31167C2.52216 10.2794 2.02502 11.72 2.02502 13.5999C2.02502 13.8623 2.23769 14.0749 2.50002 14.0749C2.76236 14.0749 2.97502 13.8623 2.97502 13.5999C2.97502 11.8799 3.42786 10.7206 4.17091 9.9883C4.91536 9.25463 6.02343 8.87499 7.49995 8.87499C8.97646 8.87499 10.0846 9.25463 10.8291 9.98831C11.5721 10.7206 12.025 11.8799 12.025 13.5999C12.025 13.8623 12.2376 14.0749 12.5 14.0749C12.7623 14.075 12.975 13.8623 12.975 13.6C12.975 11.72 12.4778 10.2794 11.4959 9.31166C10.7244 8.55135 9.70025 8.12903 8.50625 7.98352C10.0187 7.5474 11.125 6.15289 11.125 4.5C11.125 2.49797 9.50203 0.875 7.5 0.875ZM4.825 4.5C4.825 3.02264 6.02264 1.825 7.5 1.825C8.97736 1.825 10.175 3.02264 10.175 4.5C10.175 5.97736 8.97736 7.175 7.5 7.175C6.02264 7.175 4.825 5.97736 4.825 4.5Z"
										fill="currentColor"
										fillRule="evenodd"
										clipRule="evenodd"
									></path>
								</svg>
							</Button>
						</div>
					</div>

					<NavigationMenu {...args} className="w-full justify-start">
						<NavigationMenuList className="gap-4">
							<NavigationMenuItem>
								<NavigationMenuLink
									className={cn(
										"text-sm font-medium hover:text-primary",
										"data-[active=true]:text-primary data-[active=true]:font-semibold",
									)}
									active
								>
									Dashboard
								</NavigationMenuLink>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuTrigger className="text-sm font-medium">
									Products
								</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="navigation-menu-content-list w-[400px] p-4">
										<li>
											<NavigationMenuLink className="flex items-center gap-2 p-2 rounded hover:bg-accent">
												<LayoutIcon className="h-4 w-4" />
												<span>Product One</span>
											</NavigationMenuLink>
										</li>
										<li>
											<NavigationMenuLink className="flex items-center gap-2 p-2 rounded hover:bg-accent">
												<GridIcon className="h-4 w-4" />
												<span>Product Two</span>
											</NavigationMenuLink>
										</li>
										<li>
											<NavigationMenuLink className="flex items-center gap-2 p-2 rounded hover:bg-accent">
												<ListIcon className="h-4 w-4" />
												<span>Product Three</span>
											</NavigationMenuLink>
										</li>
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuLink className="text-sm font-medium hover:text-primary">
									Customers
								</NavigationMenuLink>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuLink className="text-sm font-medium hover:text-primary">
									Analytics
								</NavigationMenuLink>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
				</div>
			</div>
		</div>
	),
};

// Dark Theme Navigation
export const DarkThemeNavigation: Story = {
	args: {},
	render: (args) => (
		<div className="navigation-menu-story-container">
			<div className="navigation-menu-story-section">
				<h3>Dark Theme Navigation</h3>
				<div className="navigation-menu-story-description">
					A navigation menu with dark theme styling.
				</div>

				<div className="navigation-menu-story-card navigation-menu-story-dark">
					<NavigationMenu {...args} className="w-full justify-center">
						<NavigationMenuList className="gap-4">
							<NavigationMenuItem>
								<NavigationMenuLink className="text-sm font-medium text-white hover:text-white/80">
									Home
								</NavigationMenuLink>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuTrigger className="text-sm font-medium text-white hover:text-white/80">
									Features
								</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="navigation-menu-content-list w-[220px] p-3 bg-zinc-950 text-zinc-200">
										<ListItem
											href="#"
											title="Analytics"
											className="text-white hover:bg-zinc-800"
										>
											Advanced analytics features
										</ListItem>
										<ListItem
											href="#"
											title="Security"
											className="text-white hover:bg-zinc-800"
										>
											Enhanced security measures
										</ListItem>
										<ListItem
											href="#"
											title="Automation"
											className="text-white hover:bg-zinc-800"
										>
											Workflow automation tools
										</ListItem>
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuTrigger className="text-sm font-medium text-white hover:text-white/80">
									Products
								</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="navigation-menu-grid w-[400px] p-3 bg-zinc-950 text-zinc-200">
										<li className="p-3 hover:bg-zinc-800 rounded">
											<div className="font-medium text-white">Product One</div>
											<div className="text-xs text-zinc-400 mt-1">
												Description for product one
											</div>
										</li>
										<li className="p-3 hover:bg-zinc-800 rounded">
											<div className="font-medium text-white">Product Two</div>
											<div className="text-xs text-zinc-400 mt-1">
												Description for product two
											</div>
										</li>
										<li className="p-3 hover:bg-zinc-800 rounded">
											<div className="font-medium text-white">
												Product Three
											</div>
											<div className="text-xs text-zinc-400 mt-1">
												Description for product three
											</div>
										</li>
										<li className="p-3 hover:bg-zinc-800 rounded">
											<div className="font-medium text-white">Product Four</div>
											<div className="text-xs text-zinc-400 mt-1">
												Description for product four
											</div>
										</li>
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuLink className="text-sm font-medium text-white hover:text-white/80">
									Pricing
								</NavigationMenuLink>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuLink className="text-sm font-medium text-white hover:text-white/80">
									About
								</NavigationMenuLink>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
				</div>
			</div>
		</div>
	),
};

// Custom List Item Component
const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a"> & {
		title: string;
		children?: React.ReactNode;
		Icon?: React.ReactNode;
		className?: string;
	}
>(({ className, title, children, Icon, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
						className,
					)}
					{...props}
				>
					<div className="flex items-center gap-2">
						{Icon && Icon}
						<div className="text-sm font-medium leading-none">{title}</div>
					</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = "ListItem";

// Home Icon Component
const HomeIcon = ({ className }: { className?: string }) => (
	<svg
		width="15"
		height="15"
		viewBox="0 0 15 15"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={className}
		aria-hidden="true"
	>
		<path
			d="M7.07926 0.222253C7.31275 -0.007434 7.6873 -0.007434 7.92079 0.222253L14.6708 6.86227C14.907 7.09465 14.9101 7.47453 14.6778 7.71076C14.4454 7.947 14.0655 7.95012 13.8293 7.71773L7.50003 1.49716L1.17071 7.71773C0.934558 7.95012 0.554672 7.947 0.32229 7.71076C0.0899079 7.47453 0.0930283 7.09465 0.32926 6.86227L7.07926 0.222253ZM2.00001 7.5C2.00001 7.22386 2.22387 7 2.50001 7H4.50001C4.77615 7 5.00001 7.22386 5.00001 7.5V12.5C5.00001 12.7761 5.22387 13 5.50001 13H9.50001C9.77615 13 10 12.7761 10 12.5V7.5C10 7.22386 10.2239 7 10.5 7H12.5C12.7761 7 13 7.22386 13 7.5V13.5C13 13.7761 12.7762 14 12.5 14H2.50001C2.22387 14 2.00001 13.7761 2.00001 13.5V7.5Z"
			fill="currentColor"
			fillRule="evenodd"
			clipRule="evenodd"
		></path>
	</svg>
);
