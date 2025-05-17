import type { Meta, StoryObj } from "@storybook/react";
import {
	BarChart3,
	Bell,
	FileText,
	FolderOpen,
	HelpCircle,
	Home,
	LogOut,
	Search,
	Settings,
	Users,
} from "lucide-react";
import { useState } from "react";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarInput,
	SidebarMenu,
	SidebarMenuBadge,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarProviderWrapper,
	SidebarSeparator,
	SidebarTrigger,
} from "./Sidebar";

const meta = {
	title: "UI/Sidebar",
	component: SidebarProviderWrapper,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof SidebarProviderWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		defaultOpen: true,
		children: <></>,
	},
	render: (args) => {
		return (
			<SidebarProviderWrapper {...args}>
				<div className="flex h-[400px] border rounded-md overflow-hidden">
					<Sidebar>
						<SidebarHeader>
							<div className="flex h-11 items-center gap-2 px-4">
								<div className="h-6 w-6 rounded-full bg-primary" />
								<div className="font-medium text-lg">App Name</div>
							</div>
						</SidebarHeader>
						<SidebarContent>
							<SidebarGroup>
								<SidebarMenu>
									<SidebarMenuItem>
										<SidebarMenuButton isActive>
											<Home className="h-4 w-4" />
											<span>Dashboard</span>
										</SidebarMenuButton>
									</SidebarMenuItem>
									<SidebarMenuItem>
										<SidebarMenuButton>
											<Users className="h-4 w-4" />
											<span>Users</span>
										</SidebarMenuButton>
									</SidebarMenuItem>
									<SidebarMenuItem>
										<SidebarMenuButton>
											<FileText className="h-4 w-4" />
											<span>Documents</span>
										</SidebarMenuButton>
									</SidebarMenuItem>
									<SidebarMenuItem>
										<SidebarMenuButton>
											<BarChart3 className="h-4 w-4" />
											<span>Analytics</span>
											<SidebarMenuBadge>New</SidebarMenuBadge>
										</SidebarMenuButton>
									</SidebarMenuItem>
								</SidebarMenu>
							</SidebarGroup>
							<SidebarSeparator />
							<SidebarGroup>
								<SidebarGroupLabel>Resources</SidebarGroupLabel>
								<SidebarGroupContent>
									<SidebarMenu>
										<SidebarMenuItem>
											<SidebarMenuButton>
												<FolderOpen className="h-4 w-4" />
												<span>Projects</span>
											</SidebarMenuButton>
										</SidebarMenuItem>
										<SidebarMenuItem>
											<SidebarMenuButton>
												<Bell className="h-4 w-4" />
												<span>Notifications</span>
											</SidebarMenuButton>
										</SidebarMenuItem>
									</SidebarMenu>
								</SidebarGroupContent>
							</SidebarGroup>
						</SidebarContent>
						<SidebarFooter className="p-4">
							<SidebarMenuButton>
								<Settings className="h-4 w-4" />
								<span>Settings</span>
							</SidebarMenuButton>
							<SidebarMenuButton>
								<HelpCircle className="h-4 w-4" />
								<span>Help</span>
							</SidebarMenuButton>
						</SidebarFooter>
					</Sidebar>
					<div className="flex-1 p-6">
						<h1 className="text-2xl font-bold">Dashboard</h1>
						<p className="text-muted-foreground mt-2">
							Welcome to your dashboard. This is the main content area.
						</p>
					</div>
				</div>
			</SidebarProviderWrapper>
		);
	},
};

export const WithSearch: Story = {
	args: {
		defaultOpen: true,
		children: <></>,
	},
	render: (args) => {
		return (
			<SidebarProviderWrapper {...args}>
				<div className="flex h-[400px] border rounded-md overflow-hidden">
					<Sidebar>
						<SidebarHeader>
							<div className="flex h-11 items-center gap-2 px-4">
								<div className="h-6 w-6 rounded-full bg-primary" />
								<div className="font-medium text-lg">App Name</div>
							</div>
							<div className="p-2">
								<div className="relative">
									<Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
									<SidebarInput
										placeholder="Search..."
										className="w-full pl-8"
									/>
								</div>
							</div>
						</SidebarHeader>
						<SidebarContent>
							<SidebarMenu>
								<SidebarMenuItem>
									<SidebarMenuButton isActive>
										<Home className="h-4 w-4" />
										<span>Home</span>
									</SidebarMenuButton>
								</SidebarMenuItem>
								<SidebarMenuItem>
									<SidebarMenuButton>
										<Users className="h-4 w-4" />
										<span>Team</span>
									</SidebarMenuButton>
								</SidebarMenuItem>
								<SidebarMenuItem>
									<SidebarMenuButton>
										<FileText className="h-4 w-4" />
										<span>Projects</span>
									</SidebarMenuButton>
								</SidebarMenuItem>
								<SidebarMenuItem>
									<SidebarMenuButton>
										<BarChart3 className="h-4 w-4" />
										<span>Reports</span>
									</SidebarMenuButton>
								</SidebarMenuItem>
							</SidebarMenu>
						</SidebarContent>
						<SidebarFooter>
							<div className="p-4">
								<SidebarMenuButton variant="outline">
									<LogOut className="h-4 w-4" />
									<span>Logout</span>
								</SidebarMenuButton>
							</div>
						</SidebarFooter>
					</Sidebar>
					<div className="flex-1 p-6">
						<h1 className="text-2xl font-bold">Home</h1>
						<p className="text-muted-foreground mt-2">
							This is the main content area with a searchable sidebar.
						</p>
					</div>
				</div>
			</SidebarProviderWrapper>
		);
	},
};

export const Collapsible: Story = {
	args: {
		defaultOpen: false,
		children: <></>,
	},
	render: (args) => {
		const [open, setOpen] = useState(false);

		return (
			<SidebarProviderWrapper {...args} open={open} onOpenChange={setOpen}>
				<div className="flex h-[400px] border rounded-md overflow-hidden">
					<Sidebar collapsible="icon">
						<SidebarTrigger />
						<SidebarHeader>
							<div className="flex h-11 items-center justify-center gap-2 px-4">
								<div className="h-6 w-6 rounded-full bg-primary" />
								<div className="font-medium text-lg">App Name</div>
							</div>
						</SidebarHeader>
						<SidebarContent>
							<SidebarMenu>
								<SidebarMenuItem>
									<SidebarMenuButton isActive tooltip="Dashboard">
										<Home className="h-4 w-4" />
										<span>Dashboard</span>
									</SidebarMenuButton>
								</SidebarMenuItem>
								<SidebarMenuItem>
									<SidebarMenuButton tooltip="Users">
										<Users className="h-4 w-4" />
										<span>Users</span>
									</SidebarMenuButton>
								</SidebarMenuItem>
								<SidebarMenuItem>
									<SidebarMenuButton tooltip="Projects">
										<FolderOpen className="h-4 w-4" />
										<span>Projects</span>
									</SidebarMenuButton>
								</SidebarMenuItem>
								<SidebarMenuItem>
									<SidebarMenuButton tooltip="Settings">
										<Settings className="h-4 w-4" />
										<span>Settings</span>
									</SidebarMenuButton>
								</SidebarMenuItem>
							</SidebarMenu>
						</SidebarContent>
					</Sidebar>
					<div className="flex-1 p-6">
						<h1 className="text-2xl font-bold">Dashboard</h1>
						<p className="text-muted-foreground mt-2">
							This sidebar can be collapsed to show only icons. Click the
							trigger button to toggle.
						</p>
					</div>
				</div>
			</SidebarProviderWrapper>
		);
	},
};
